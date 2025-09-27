/**
 * 11_staff.gs
 * スタッフリスト・出勤曜日（基準）・予定（休暇/特別出勤/時間休など）
 */

function getStaffList_(){
  const k = CACHE_KEYS.STAFF_LIST;
  const c = cacheGet_(k);
  if (c) return c;

  const sh = getMasterSS().getSheetByName(SHEETS.STAFF_MASTER);
  if (!sh) return [];
  const rows = rowsToObjects(sh.getDataRange().getValues());
  const list = rows.filter(o => String(o["表示フラグ"]||"1") !== "0")
    .map(o => ({
      id: trimEx(o["ID"]||o["スタッフID"]||""),
      name: trimEx(o["名前"]||o["氏名"]||o["スタッフ名"]||""),
      baseWeekdays: String(o["基本出勤曜日"]||""),
      note: trimEx(o["備考"]||"")
    }));
  cachePut_(k, list);
  return list;
}

/** 指定日（YYYY-MM-DD）に効く「出勤曜日の基準マップ」を返す */
function getShiftMap_(ymd){
  const k = kShiftMap(ymd);
  const c = cacheGet_(k);
  if (c) return c;

  const sh = getMasterSS().getSheetByName(SHEETS.STAFF_SHIFT);
  if (!sh) return {};
  const rows = rowsToObjects(sh.getDataRange().getValues());
  // 想定：開始日, スタッフID, 出勤曜日（例：月水金）など
  // 仕様：同一スタッフについて「最新かつ適用日以前の行」が有効（ユーザーの既存仕様に合わせる）
  const target = dateFromYmd(ymd).getTime();

  const latest = {};
  rows.forEach(o=>{
    const staffId = trimEx(o["スタッフID"]||o["ID"]||"");
    const start = trimEx(o["開始日"]||o["StartDate"]||"");
    if (!staffId || !start) return;
    const ts = dateFromYmd(toYmd(start)).getTime();
    if (ts <= target){
      if (!latest[staffId] || ts > latest[staffId].ts){
        latest[staffId] = { ts, row:o };
      }
    }
  });

  const map = {};
  Object.keys(latest).forEach(staffId=>{
    map[staffId] = latest[staffId].row;
  });
  cachePut_(k, map);
  return map;
}

/** スタッフ予定（休暇など）を日付キーで返す */
function getScheduleMap_(ymd){
  const k = kScheduleMap(ymd);
  const c = cacheGet_(k);
  if (c) return c;

  const sh = getMasterSS().getSheetByName(SHEETS.STAFF_SCHEDULE);
  if (!sh) return {};
  const rows = rowsToObjects(sh.getDataRange().getValues());
  // 想定：日付/スタッフID/状態/開始時間/終了時間/備考
  const map = {};
  rows.forEach(o=>{
    const d = toYmd(o["日付"]||o["予約日"]||o["Date"]||"");
    if (!d) return;
    if (!map[d]) map[d] = [];
    map[d].push(o);
  });
  cachePut_(k, map);
  return map;
}
