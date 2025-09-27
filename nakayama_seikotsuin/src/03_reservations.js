/**
 * 10_reservations.gs
 * 予約のCRUDと検索・重複判定
 * 予約は年シート方式：シート名=YYYY
 */

function getReservationMap_(year){
  const key = kReservationMap(year);
  const c = cacheGet_(key);
  if (c) return c;

  const sh = getYearSheet(getReservationSS(), year);
  const values = sh.getDataRange().getValues();
  if (!values || values.length<2){ cachePut_(key, {}); return {}; }

  const header = values[0].map(trimEx);
  const recs = rowsToObjects(values);
  const byDate = {};
  recs.forEach(o=>{
    const ymd = toYmd(o["予約日"]||o["日付"]||o["Date"]||"");
    if (!ymd) return;
    if (!byDate[ymd]) byDate[ymd] = [];
    byDate[ymd].push(o);
  });
  cachePut_(key, byDate);
  return byDate;
}

function getReservationsByDate(ymd){
  const y = yearFromYmd(ymd);
  const map = getReservationMap_(y);
  return map[ymd] || [];
}

/** 重複判定（管理側は緩め/顧客側は厳しめ…の切り替えは呼び出し元で制御） */
function isReservationConflict(newData, excludeKey){
  const y = yearFromYmd(newData.date);
  const sh = getYearSheet(getReservationSS(), y);
  const vals = sh.getDataRange().getValues();
  if (vals.length<=1) return false;

  const header = vals[0].map(trimEx);
  const H = Object.fromEntries(header.map((h,i)=>[h,i]));
  const cDate  = colIdx(header, COLNAMES.DATE);
  const cStart = colIdx(header, COLNAMES.START);
  const cEnd   = colIdx(header, COLNAMES.END);
  const cStaff = colIdx(header, COLNAMES.STAFFID);
  const cKey   = header.indexOf("KEY"); // 任意：予約キーがある場合

  const sMin = toMinutes(newData.time);
  const eMin = toMinutes(newData.endTime);

  for (let r=1;r<vals.length;r++){
    const row = vals[r];
    if (cKey>=0 && excludeKey && String(row[cKey]) === String(excludeKey)) continue;
    const d   = toYmd(row[cDate]);
    if (d !== newData.date) continue;
    if (cStaff>=0 && String(row[cStaff]) !== String(newData.staffId||"")) continue;

    const rs = toMinutes(row[cStart]); const re = toMinutes(row[cEnd]);
    if (isNaN(rs)||isNaN(re)) continue;
    // 重なり判定：[s,e) と [rs,re) が交差
    if (sMin < re && rs < eMin) return true;
  }
  return false;
}

/** 予約保存（新規）。戻り値：{key, saved:true} 等 */
function saveReservation_(o){
  const y = yearFromYmd(o.date);
  const sh = getYearSheet(getReservationSS(), y);
  const values = sh.getDataRange().getValues();
  const header = values.length ? values[0].map(trimEx) : [];
  // 既存ヘッダを尊重。無ければ作る
  const need = new Set([].concat(
    COLNAMES.DATE, COLNAMES.START, COLNAMES.END, COLNAMES.SERVICEID, COLNAMES.STAFFID,
    COLNAMES.LAST, COLNAMES.FIRST, COLNAMES.LASTKANA, COLNAMES.FIRSTKANA, COLNAMES.PHONE, COLNAMES.EMAIL,
    COLNAMES.DESIGNATED, COLNAMES.MEMO, ["KEY"]
  ).flat());

  if (header.length===0){
    const initHeader = Array.from(need).slice(0,30); // 上限保険
    sh.getRange(1,1,1,initHeader.length).setValues([initHeader]);
  }
  const hd = sh.getRange(1,1,1,sh.getLastColumn()).getValues()[0].map(trimEx);

  // KEY採番（なければ）
  const keyIdx = hd.indexOf("KEY");
  const key = "R" + Date.now();

  const row = new Array(hd.length).fill("");
  function set(cands, val){
    const i = colIdx(hd, cands);
    if (i>=0) row[i] = val;
  }
  set(COLNAMES.DATE, o.date);
  set(COLNAMES.START, o.time);
  set(COLNAMES.END, o.endTime);
  set(COLNAMES.SERVICEID, o.service);
  set(COLNAMES.STAFFID, o.staffId||"");
  set(COLNAMES.LAST, o.lastName||"");
  set(COLNAMES.FIRST, o.firstName||"");
  set(COLNAMES.LASTKANA, o.lastKana||"");
  set(COLNAMES.FIRSTKANA, o.firstKana||"");
  set(COLNAMES.PHONE, o.phone||"");
  set(COLNAMES.EMAIL, o.email||"");
  set(COLNAMES.DESIGNATED, o.designated ? "1" : "0");
  set(COLNAMES.MEMO, o.request||o.memo||"");
  if (keyIdx>=0) row[keyIdx] = key;

  sh.appendRow(row);
  cacheDel_(kReservationMap(y));
  return { key, saved:true };
}

function updateReservation_(key, patch){
  // 予約キーで検索して上書き
  const y = yearFromYmd(patch.date || toYmd(new Date()));
  const sh = getYearSheet(getReservationSS(), y);
  const vals = sh.getDataRange().getValues();
  const hd = vals[0].map(trimEx);
  const keyIdx = hd.indexOf("KEY");
  if (keyIdx<0) throw new Error("予約キー列がありません");

  for (let r=1;r<vals.length;r++){
    if (String(vals[r][keyIdx]) === String(key)){
      hd.forEach((h,i)=>{
        if (patch[h] != null) vals[r][i] = patch[h];
      });
      sh.getRange(1,1,vals.length,hd.length).setValues(vals);
      cacheDel_(kReservationMap(y));
      return { key, updated:true };
    }
  }
  throw new Error("該当予約が見つかりません");
}

function deleteReservation_(key, ymd){
  const y = yearFromYmd(ymd);
  const sh = getYearSheet(getReservationSS(), y);
  const vals = sh.getDataRange().getValues();
  const hd = vals[0].map(trimEx);
  const keyIdx = hd.indexOf("KEY");
  if (keyIdx<0) throw new Error("予約キー列がありません");

  for (let r=1;r<vals.length;r++){
    if (String(vals[r][keyIdx]) === String(key)){
      sh.deleteRow(r+1);
      cacheDel_(kReservationMap(y));
      return { key, deleted:true };
    }
  }
  return { key, deleted:false };
}
