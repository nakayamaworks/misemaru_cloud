/** ─── スモークテスト群（読み取り専用・安全） ─── */

function pingConfig_() {
  const errs = [];
  if (!RESERVATION_SS_ID) errs.push("RESERVATION_SS_ID が未設定");
  if (!MASTER_SS_ID)      errs.push("MASTER_SS_ID が未設定");
  try { getReservationSS().getId(); } catch(e){ errs.push("予約SSにアクセス不可: " + e); }
  try { getMasterSS().getId(); }      catch(e){ errs.push("マスタSSにアクセス不可: " + e); }

  return {
    ok: errs.length === 0,
    tz: TZ,
    reservationId: RESERVATION_SS_ID || "(empty)",
    masterId: MASTER_SS_ID || "(empty)",
    errors: errs
  };
}

function smoke_Settings_() {
  const s = getReservationSettings_();
  return {
    sample: Object.keys(s).slice(0, 10).reduce((o,k)=>{o[k]=s[k]; return o;}, {}),
    deadlineMs: deadlineMsFromSettings_(s)
  };
}

function smoke_BusinessHours_() {
  var today = toYmd(new Date());
  var map = getBusinessHourMap_(today) || {};
  var keys = Object.keys(map);
  var sample = {};
  keys.slice(0, 1).forEach(function(k){ sample[k] = map[k]; });
  return { count: keys.length, sample: sample };
}


function smoke_Holidays_() {
  const list = getHolidayRanges_();
  return { count: list.length, sample: list.slice(0,3) };
}

function smoke_Services_() {
  const list = getServiceList_();
  const staffMap = getServiceStaffMap_();
  return {
    count: list.length,
    first: list[0] || null,
    staffMappedForFirst: list[0] ? (staffMap[list[0].id] || []) : []
  };
}

function smoke_Staff_() {
  const list = getStaffList_();
  const today = toYmd(new Date());
  return {
    count: list.length,
    first: list[0] || null,
    shiftTodayKeys: Object.keys(getShiftMap_(today) || {}).length,
    scheduleTodayCount: (getScheduleMap_(today)[today] || []).length
  };
}

function smoke_Reservations_(ymdOpt) {
  const ymd = ymdOpt || toYmd(new Date());
  return {
    ymd,
    count: getReservationsByDate(ymd).length
  };
}

function smoke_Matrix_() {
  const anchor = toYmd(new Date()); // 今日
  const data = getWeeklyMatrixFromAnchor(anchor, 1);
  const day0 = data.days[0];
  Logger.log(JSON.stringify(day0.slots.slice(0, 5), null, 2));
  return data;
}

// 1) 明後日なら full:false が並ぶ（締切を超えるので空き枠）
function smoke_Matrix_AfterTomorrow(){
  const d = new Date(); d.setDate(d.getDate()+2);
  const dto = getWeeklyMatrixFromAnchor(toYmd(d), 1);
  Logger.log(JSON.stringify(dto.days[0].slots.slice(0,10), null, 2));
  return dto;
}

// 2) 「適用開始日」ブロックが正しく選ばれているか（例: 9/24なら8/1ブロック）
function smoke_Business_ChooseBlock(){
  const d = '2025-09-24';
  const map = getBusinessHourMap_(d);
  Logger.log('chosen business windows for %s = %s',
    d, JSON.stringify(map[d], null, 2));
  return map[d];
}

// 3) 祝日休業フラグONのブロック + 祝日当日 → 終日クローズ（空配列）
function smoke_HolidayClose(){
  // 祝日サンプル日に置き換えてね（祝日判定は isJapaneseHoliday_ を利用）
  const d = '2025-11-03'; // 文化の日(例)
  const map = getBusinessHourMap_(d);
  Logger.log('holiday close on %s -> %s', d, JSON.stringify(map[d]));
  return map[d];
}


/** 一括実行（IDEの実行ボタンでこれを選べばテスト実行） */
function runAllSmokeTests(){
  const out = {
    ping: pingConfig_(),
    settings: smoke_Settings_(),
    business: smoke_BusinessHours_(),
    holidays: smoke_Holidays_(),
    services: smoke_Services_(),
    staff: smoke_Staff_(),
    reservations_today: smoke_Reservations_(),
    matrix: smoke_Matrix_()
  };
  Logger.log(JSON.stringify(out, null, 2));
  return out;
}
