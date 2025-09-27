/**
 * 14_settings.gs
 * 営業時間・休業日・基本設定の取得（読み中心）
 */

function getReservationSettings_() {
  const k = CACHE_KEYS.SETTINGS_BASIC;
  const cached = cacheGet_(k);
  if (cached) return cached;

  const sh = getMasterSS().getSheetByName(SHEETS.SETTINGS_BASIC);
  if (!sh) return {};
  const vals = sh.getDataRange().getValues();

  // 1列目=項目名, 2列目=値 形式を想定
  const map = {};
  for (let r=1;r<vals.length;r++){
    const key = trimEx(vals[r][0]);
    const val = vals[r][1];
    if (key) map[key] = val;
  }
  cachePut_(k, map);
  return map;
}

/** startYmdから1週間、日付ごとに適用開始日の最大ブロックを選び、曜日＆祝日休業でフィルタした時間帯リストを返す */
function getBusinessHourMap_(startYmd) {
  if (!startYmd || isNaN(new Date(startYmd).getTime())) {
    throw new Error("❌ 無効な startYmd: " + startYmd);
  }

  var cacheKey = (CACHE_KEYS.BUSINESS_HOUR_MAP || 'BUSINESS_HOUR_MAP') + '_' + startYmd;
  var cached = cacheGet_(cacheKey);
  if (cached) return cached;

  var sh = getMasterSS().getSheetByName(SHEETS.BUSINESS_HOURS || '営業設定');
  if (!sh || sh.getLastRow() < 2) {
    var empty = {};
    for (var i=0;i<7;i++){ empty[toYmd(new Date(dateFromYmd(startYmd).getTime()+i*86400000))] = []; }
    cachePut_(cacheKey, empty);
    return empty;
  }

  var all = sh.getDataRange().getValues();
  var headers = all[0];
  var rows = all.slice(1);

  var idx = {
    date: headers.indexOf('適用開始日') >= 0 ? headers.indexOf('適用開始日') : 0,
    start: headers.indexOf('開始時間') >= 0 ? headers.indexOf('開始時間') : 1,
    end:   headers.indexOf('終了時間') >= 0 ? headers.indexOf('終了時間') : 2,
    type:  headers.indexOf('用途')     >= 0 ? headers.indexOf('用途')     : 3,
    sun:  headers.indexOf('日'),
    mon:  headers.indexOf('月'),
    tue:  headers.indexOf('火'),
    wed:  headers.indexOf('水'),
    thu:  headers.indexOf('木'),
    fri:  headers.indexOf('金'),
    sat:  headers.indexOf('土'),
    hol:  headers.indexOf('祝日休業')  // -1 あり
  };

  var start = dateFromYmd(startYmd);
  var out = {};
  var dayCols = ['日','月','火','水','木','金','土'];

  for (var i=0;i<7;i++){
    var d = new Date(start); d.setDate(start.getDate()+i); d.setHours(0,0,0,0);
    var ymd = Utilities.formatDate(d, TZ, 'yyyy-MM-dd');
    var dow = d.getDay();
    var dayFlagIdx = idx[ ['sun','mon','tue','wed','thu','fri','sat'][dow] ];

    // 適用開始日 <= d の行
    var applicable = rows.filter(function(r){
      var v = r[idx.date];
      var vd = (v instanceof Date)? v : new Date(v);
      vd.setHours(0,0,0,0);
      return !isNaN(vd) && vd.getTime() <= d.getTime();
    });
    if (!applicable.length){ out[ymd] = []; continue; }

    // 最大の適用開始日ブロックを決定
    var maxApply = applicable.reduce(function(acc, r){
      var v = r[idx.date];
      var t = new Date(v); t.setHours(0,0,0,0);
      return (!acc || t > acc)? t : acc;
    }, null);

    var blockRows = applicable.filter(function(r){
      var v = r[idx.date];
      var t = new Date(v); t.setHours(0,0,0,0);
      return maxApply && (t.getTime() === maxApply.getTime());
    });

    // 祝日休業（ブロック先頭行基準）
    var holidayClose = false;
    if (idx.hol >= 0 && blockRows.length){
      var cell = blockRows[0][idx.hol];
      var s = String(cell).trim().toLowerCase();
      holidayClose = (cell === true || s === 'true');
    }
    var isHoliday = (typeof isJapaneseHoliday_ === 'function') ? isJapaneseHoliday_(d) : false;
    if (holidayClose && isHoliday){
      out[ymd] = [];
      continue;
    }

    // 曜日フラグ=1 かつ 用途=営業 の行だけ採用
    var windows = blockRows.filter(function(r){
      var flag = String(r[dayFlagIdx] ?? '').trim();
      var on = /^(1|true|t|y|yes|✓|✔|○)$/i.test(flag);
      var type = String(r[idx.type] || '').trim();
      var isOpen = /^(営業|open)$/i.test(type);
      return on && isOpen;
    }).map(function(r){
      var s = toMinutes(r[idx.start]);
      var e = toMinutes(r[idx.end]);
      if (isNaN(s) || isNaN(e) || e <= s) return null;
      return { start: fromMinutes(s), end: fromMinutes(e), startMin: s, endMin: e };
    }).filter(Boolean);

    out[ymd] = windows;
  }

  cachePut_(cacheKey, out);
  return out;
}

/** 締切のミリ秒（v1.0互換） */
function deadlineMsFromSettings_(settings){
  var v = Number(settings['予約受付の締切（値）'] || 0);
  var u = String(settings['予約受付の締切（単位）'] || '').toLowerCase();
  if (!v) return 0;
  if (u.startsWith('day') || /日/.test(u))   return v * 24 * 60 * 60 * 1000;
  if (u.startsWith('hour')|| /時/.test(u))   return v * 60 * 60 * 1000;
  if (u.startsWith('min') || /分/.test(u))   return v * 60 * 1000;
  return 0;
}


/** 休業レンジ（開始日/終了日/開始時間/終了時間） */
function getHolidayRanges_() {
  const k = CACHE_KEYS.HOLIDAY_RANGES;
  const cached = cacheGet_(k);
  if (cached) return cached;

  const sh = getMasterSS().getSheetByName(SHEETS.HOLIDAYS);
  if (!sh) return [];
  const vals = sh.getDataRange().getValues();
  const header = vals[0].map(trimEx);
  const list = rowsToObjects(vals).map(o => ({
    startDate: trimEx(o["開始日"]||o["StartDate"]||""),
    endDate:   trimEx(o["終了日"]||o["EndDate"]||""),
    startTime: trimEx(o["開始時間"]||o["開始時刻"]||""),
    endTime:   trimEx(o["終了時間"]||o["終了時刻"]||""),
    note:      trimEx(o["備考"]||o["メモ"]||"")
  }));
  cachePut_(k, list);
  return list;
}
