/** 10_admin_public_api.gs
 * 管理画面（設定系フロント）から直接呼ぶ“公開ラッパ”。
 * v1.1の内部関数（末尾_）とユーティリティを使ってDTO整形 & キャッシュ無効化を行う。
 *
 * 依存: 00_constants / 01_utils / 03_reservations / 04_staff / 05_services / 06_customers / 07_settings / 09_cache_utils
 */

/* =========================
 * 基本設定（予約設定）
 * ========================= */
// 取得：key-value map を返す
function getBasicSettingList() {
  return getReservationSettings_();
}

// 保存：{ キー: 値 } のmapを upsert（1列目=項目,2列目=値）
function saveBasicSetting(map) {
  if (!map || typeof map !== 'object') throw new Error("invalid payload");
  const ss = getMasterSS();
  const sh = ss.getSheetByName(SHEETS.SETTINGS_BASIC) || ss.insertSheet(SHEETS.SETTINGS_BASIC);
  const vals = sh.getDataRange().getValues();
  const header = vals.length ? vals[0].map(trimEx) : ["項目","値","更新日"];
  if (vals.length === 0) sh.getRange(1,1,1,header.length).setValues([header]);

  // Build lookup for row by key
  const keyIdx = header.indexOf("項目");
  const valIdx = header.indexOf("値");
  const updIdx = header.indexOf("更新日"); // 無くてもOK

  const rows = vals.slice(1); // body
  const index = {};
  rows.forEach((r,i)=>{ index[String(r[keyIdx]||"").trim()] = i; });

  Object.keys(map).forEach(k=>{
    const key = String(k).trim();
    const value = map[k];
    if (!key) return;

    if (index.hasOwnProperty(key)) {
      const ri = index[key] + 2;
      if (valIdx >= 0) sh.getRange(ri, valIdx+1).setValue(value);
      if (updIdx >= 0) sh.getRange(ri, updIdx+1).setValue(new Date());
    } else {
      const row = new Array(header.length).fill("");
      if (keyIdx>=0) row[keyIdx] = key;
      if (valIdx>=0) row[valIdx] = value;
      if (updIdx>=0) row[updIdx] = new Date();
      sh.appendRow(row);
    }
  });

  cacheDel_(CACHE_KEYS.SETTINGS_BASIC);
  return { ok:true };
}


/* =========================
 * 営業時間 / 休業日
 * ========================= */
// 画面表示用：指定anchorからn日分の“適用済みウィンドウ”を返す（ビルド済DTO）
function getBusinessHourMap(startYmd, days) {
  // 既存は7日固定のため、days>7 のときは段階的に合成
  const n = Math.max(1, Number(days||7));
  const start = toYmd(startYmd) || toYmd(new Date());
  let out = {};
  for (let i=0;i<n;i+=7){
    const anchor = Utilities.formatDate(
      new Date(dateFromYmd(start).getTime() + i*86400000), TZ, 'yyyy-MM-dd'
    );
    const chunk = getBusinessHourMap_(anchor);
    Object.assign(out, chunk);
  }
  return out;
}

// Rawで編集したいとき用：シート全件
function listBusinessHoursRaw() {
  const sh = getMasterSS().getSheetByName(SHEETS.BUSINESS_HOURS);
  return sh ? rowsToObjects(sh.getDataRange().getValues()) : [];
}

// 一括保存（ヘッダを尊重、2行目以降を置換）※画面で表形式を丸ごと保存する前提
function saveBusinessHoursRaw(rows) {
  if (!Array.isArray(rows)) throw new Error("invalid rows");
  const ss = getMasterSS();
  const sh = ss.getSheetByName(SHEETS.BUSINESS_HOURS) || ss.insertSheet(SHEETS.BUSINESS_HOURS);
  const header = (rows[0] && Object.keys(rows[0])) || ["用途","適用開始日","開始時刻","終了時刻","日","月","火","水","木","金","土","祝日休業","備考"];
  const values = objectsToRows(rows, header);
  sh.clearContents();
  sh.getRange(1,1,values.length, header.length).setValues(values);
  // BUSINESS_HOUR_MAP は startYmd依存のため、簡易に全消し
  cacheDel_((CACHE_KEYS.BUSINESS_HOUR_MAP||'BUSINESS_HOUR_MAP'));
  return { ok:true, rows: rows.length };
}

// 休業日：取得（Raw）
function listHolidayRangesRaw() {
  const sh = getMasterSS().getSheetByName(SHEETS.HOLIDAYS);
  return sh ? rowsToObjects(sh.getDataRange().getValues()) : [];
}

// 休業日のUpsert（キーは 開始日+終了日+用途 程度の複合キーにする）
function saveHolidayRange(row) {
  if (!row) throw new Error("invalid row");
  const ss = getMasterSS();
  const sh = ss.getSheetByName(SHEETS.HOLIDAYS) || ss.insertSheet(SHEETS.HOLIDAYS);
  const header = (sh.getLastRow() ? sh.getRange(1,1,1,sh.getLastColumn()).getValues()[0].map(trimEx)
                                  : ["開始日","終了日","開始時間","終了時間","用途","備考","表示フラグ"]);
  if (sh.getLastRow() === 0) sh.getRange(1,1,1,header.length).setValues([header]);

  const vals = sh.getDataRange().getValues();
  const rows = vals.slice(1);
  const hi = { start: header.indexOf("開始日"), end: header.indexOf("終了日"), use: header.indexOf("用途") };

  const key = (r)=> [toYmd(r[hi.start]||""), toYmd(r[hi.end]||""), String(r[hi.use]||"")].join("|");
  const targetKey = key(header.map(h=> row[h]));

  // 探して更新
  for (let i=0;i<rows.length;i++){
    const r = rows[i];
    if (key(r) === targetKey){
      header.forEach((h, idx)=>{ rows[i][idx] = row[h] != null ? row[h] : rows[i][idx]; });
      sh.getRange(2,1,rows.length,header.length).setValues(rows);
      cacheDel_((CACHE_KEYS.HOLIDAY_RANGES||'HOLIDAY_RANGES'));
      return { updated:true };
    }
  }
  // 追加
  const newRow = header.map(h => row[h] != null ? row[h] : "");
  sh.appendRow(newRow);
  cacheDel_((CACHE_KEYS.HOLIDAY_RANGES||'HOLIDAY_RANGES'));
  return { created:true };
}

function deleteHolidayRange(row){ // 同じ複合キーで削除
  const ss = getMasterSS();
  const sh = ss.getSheetByName(SHEETS.HOLIDAYS);
  if (!sh || sh.getLastRow()<2) return { deleted:false };
  const header = sh.getRange(1,1,1,sh.getLastColumn()).getValues()[0].map(trimEx);
  const hi = { start: header.indexOf("開始日"), end: header.indexOf("終了日"), use: header.indexOf("用途") };
  const vals = sh.getDataRange().getValues();
  for (let r=1;r<vals.length;r++){
    const o = {};
    header.forEach((h,i)=> o[h] = vals[r][i]);
    const same = (toYmd(o["開始日"])===toYmd(row["開始日"])) &&
                 (toYmd(o["終了日"])===toYmd(row["終了日"])) &&
                 (String(o["用途"]||"")===String(row["用途"]||""));
    if (same){
      sh.deleteRow(r+1);
      cacheDel_((CACHE_KEYS.HOLIDAY_RANGES||'HOLIDAY_RANGES'));
      return { deleted:true };
    }
  }
  return { deleted:false };
}


/* =========================
 * サービス
 * ========================= */
function getServiceList() { return getServiceList_(); }

function saveService(o) {
  // 想定ヘッダ：サービスID/表示順/サービス名/所要時間(分)/税込価格/税率(%)/割引適用可/同時予約可能数/備考/表示フラグ
  const ss = getMasterSS();
  const sh = ss.getSheetByName(SHEETS.SERVICE_MASTER) || ss.insertSheet(SHEETS.SERVICE_MASTER);
  const header = (sh.getLastRow() ? sh.getRange(1,1,1,sh.getLastColumn()).getValues()[0].map(trimEx)
                                  : ["サービスID","表示順","サービス名","所要時間(分)","税込価格","税率(%)","割引適用可","同時予約可能数","備考","表示フラグ"]);
  if (sh.getLastRow() === 0) sh.getRange(1,1,1,header.length).setValues([header]);

  const vals = sh.getDataRange().getValues();
  const rows = vals.slice(1);
  const idIdx = header.indexOf("サービスID");

  if (o["サービスID"]){
    for (let r=0;r<rows.length;r++){
      if (String(rows[r][idIdx]) === String(o["サービスID"])){
        header.forEach((h,i)=>{ rows[r][i] = o[h] != null ? o[h] : rows[r][i]; });
        sh.getRange(2,1,rows.length,header.length).setValues(rows);
        cacheDel_(CACHE_KEYS.SERVICE_LIST);
        return { id:o["サービスID"], updated:true };
      }
    }
  }
  // 追加
  const newId = o["サービスID"] || ("SV" + Date.now());
  o["サービスID"] = newId;
  const newRow = header.map(h => o[h] != null ? o[h] : "");
  sh.appendRow(newRow);
  cacheDel_(CACHE_KEYS.SERVICE_LIST);
  return { id:newId, created:true };
}

function deleteService(serviceId) {
  const ss = getMasterSS();
  const sh = ss.getSheetByName(SHEETS.SERVICE_MASTER);
  if (!sh || sh.getLastRow()<2) return { deleted:false };
  const vals = sh.getDataRange().getValues();
  const hd = vals[0].map(trimEx);
  const idIdx = hd.indexOf("サービスID");
  for (let r=1;r<vals.length;r++){
    if (String(vals[r][idIdx]) === String(serviceId)){
      // 論理削除派ならここで表示フラグ=0更新に変更
      sh.deleteRow(r+1);
      cacheDel_(CACHE_KEYS.SERVICE_LIST);
      return { deleted:true };
    }
  }
  return { deleted:false };
}


/* =========================
 * スタッフ
 * ========================= */
function getStaffList(){ return getStaffList_(); }

function saveStaff(o) {
  // 想定ヘッダ：ID/スタッフID/氏名/表示順/表示フラグ/備考/基本出勤曜日(任意)
  const ss = getMasterSS();
  const sh = ss.getSheetByName(SHEETS.STAFF_MASTER) || ss.insertSheet(SHEETS.STAFF_MASTER);
  const header = (sh.getLastRow() ? sh.getRange(1,1,1,sh.getLastColumn()).getValues()[0].map(trimEx)
                                  : ["スタッフID","氏名","表示順","表示フラグ","備考"]);
  if (sh.getLastRow() === 0) sh.getRange(1,1,1,header.length).setValues([header]);

  const vals = sh.getDataRange().getValues();
  const rows = vals.slice(1);
  const idIdx = header.indexOf("スタッフID");

  if (o["スタッフID"]){
    for (let r=0;r<rows.length;r++){
      if (String(rows[r][idIdx]) === String(o["スタッフID"])){
        header.forEach((h,i)=>{ rows[r][i] = o[h] != null ? o[h] : rows[r][i]; });
        sh.getRange(2,1,rows.length,header.length).setValues(rows);
        cacheDel_(CACHE_KEYS.STAFF_LIST);
        return { id:o["スタッフID"], updated:true };
      }
    }
  }
  const newId = o["スタッフID"] || ("S" + Date.now());
  o["スタッフID"] = newId;
  const newRow = header.map(h => o[h] != null ? o[h] : "");
  sh.appendRow(newRow);
  cacheDel_(CACHE_KEYS.STAFF_LIST);
  return { id:newId, created:true };
}

function deleteStaff(staffId) {
  const ss = getMasterSS();
  const sh = ss.getSheetByName(SHEETS.STAFF_MASTER);
  if (!sh || sh.getLastRow()<2) return { deleted:false };
  const vals = sh.getDataRange().getValues();
  const hd = vals[0].map(trimEx);
  const idIdx = hd.indexOf("スタッフID");
  for (let r=1;r<vals.length;r++){
    if (String(vals[r][idIdx]) === String(staffId)){
      sh.deleteRow(r+1); // 論理削除にしたい場合は表示フラグ=0に更新する
      cacheDel_(CACHE_KEYS.STAFF_LIST);
      return { deleted:true };
    }
  }
  return { deleted:false };
}


/* =========================
 * サービス×スタッフ（中間テーブル）
 * ========================= */
function getServiceStaffMap(){ return getServiceStaffMap_(); }

// rows: [{サービスID, スタッフID, 表示フラグ}] などの配列で丸ごと入替
function saveServiceStaff(rows){
  if (!Array.isArray(rows)) throw new Error("invalid rows");
  const ss = getMasterSS();
  const sh = ss.getSheetByName(SHEETS.SERVICE_STAFF) || ss.insertSheet(SHEETS.SERVICE_STAFF);
  const header = (rows[0] && Object.keys(rows[0])) || ["サービスID","スタッフID","表示フラグ","備考"];
  const values = objectsToRows(rows, header);
  sh.clearContents();
  sh.getRange(1,1,values.length, header.length).setValues(values);
  cacheDel_(CACHE_KEYS.SERVICE_STAFF_MAP);
  cacheDel_(CACHE_KEYS.SERVICE_LIST); // 担当が変わると導出リストも変わるため
  return { ok:true, rows: rows.length };
}


/* =========================
 * 顧客（v1.1に公開関数あり）
 * ========================= */
// v1.1 には upsertCustomer / getCustomerByEmail / getCustomerById が公開済み。
// そのまま使う。必要なら deleteCustomer を論理削除として追加。
function deleteCustomer(id) {
  const ss = getMasterSS();
  const sh = ss.getSheetByName(SHEETS.CUSTOMERS);
  if (!sh || sh.getLastRow()<2) return { deleted:false };
  const vals = sh.getDataRange().getValues();
  const hd = vals[0].map(trimEx);
  const idIdx = hd.indexOf("顧客ID") >= 0 ? hd.indexOf("顧客ID") : hd.indexOf("ID");
  if (idIdx < 0) throw new Error("顧客ID列が見つかりません");
  for (let r=1;r<vals.length;r++){
    if (String(vals[r][idIdx]) === String(id)){
      // 論理削除にする場合は 表示フラグ=0 などに更新
      sh.deleteRow(r+1);
      cacheDel_(CACHE_KEYS.CUSTOMER_LIST);
      cacheDel_(CACHE_KEYS.CUSTOMER_MAP);
      return { deleted:true };
    }
  }
  return { deleted:false };
}


/* =========================
 * 予約（公開ラッパ）
 * ========================= */
function saveReservation(o){
  const res = saveReservation_(o);
  cacheDel_(kReservationMap(yearFromYmd(o.date)));
  return res;
}
function updateReservation(o){
  const res = updateReservation_(o);
  cacheDel_(kReservationMap(yearFromYmd(o.date)));
  return res;
}
function deleteReservation(key, ymd){
  return deleteReservation_(key, ymd); // 内部で年別キャッシュを消す実装
}

/* =========================
 * スタッフ予定（簡易API：UI要件に応じて調整）
 * ========================= */
// 一覧（テーブル向け）：日付レンジを投げて flatten で返す
function getStaffSchedule(startYmd, days) {
  const n = Math.max(1, Math.min(60, Number(days||14)));
  const start = toYmd(startYmd) || toYmd(new Date());
  const out = [];
  for (let i=0;i<n;i++){
    const ymd = Utilities.formatDate(new Date(dateFromYmd(start).getTime()+i*86400000), TZ, 'yyyy-MM-dd');
    const map = getScheduleMap_(ymd);
    Object.keys(map).forEach(staffId=>{
      map[staffId].forEach(rec=>{
        out.push({ ymd, staffId, state: rec.state, start: rec.start, end: rec.end, note: rec.note||"" });
      });
    });
  }
  return out;
}

// 保存は“全消し入替 or キーUpsert”の2択。ここでは複合キー(ymd+staffId+state+start+end)でUpsert例
function saveStaffSchedule(row){
  if (!row) throw new Error("invalid row");
  const ss = getMasterSS();
  const sh = ss.getSheetByName(SHEETS.STAFF_SCHEDULE) || ss.insertSheet(SHEETS.STAFF_SCHEDULE);
  const header = (sh.getLastRow() ? sh.getRange(1,1,1,sh.getLastColumn()).getValues()[0].map(trimEx)
                                  : ["日付","スタッフID","状態","開始時間","終了時間","備考","表示フラグ"]);
  if (sh.getLastRow() === 0) sh.getRange(1,1,1,header.length).setValues([header]);

  const vals = sh.getDataRange().getValues();
  const rows = vals.slice(1);

  const idx = {
    ymd: header.indexOf("日付"),
    sid: header.indexOf("スタッフID"),
    state: header.indexOf("状態"),
    st: header.indexOf("開始時間"),
    et: header.indexOf("終了時間"),
  };
  const key = (r)=> [toYmd(r[idx.ymd]||""), String(r[idx.sid]||""), String(r[idx.state]||""), String(r[idx.st]||""), String(r[idx.et]||"")].join("|");
  const targ = header.map(h=> row[h]);

  for (let i=0;i<rows.length;i++){
    if (key(rows[i]) === key(targ)){
      header.forEach((h, col)=>{ rows[i][col] = row[h] != null ? row[h] : rows[i][col]; });
      sh.getRange(2,1,rows.length,header.length).setValues(rows);
      cacheDel_(kScheduleMap(toYmd(row["日付"])));
      return { updated:true };
    }
  }
  const newRow = header.map(h => row[h] != null ? row[h] : "");
  sh.appendRow(newRow);
  cacheDel_(kScheduleMap(toYmd(row["日付"])));
  return { created:true };
}

function deleteStaffSchedule(row){
  const ss = getMasterSS();
  const sh = ss.getSheetByName(SHEETS.STAFF_SCHEDULE);
  if (!sh || sh.getLastRow()<2) return { deleted:false };

  const header = sh.getRange(1,1,1,sh.getLastColumn()).getValues()[0].map(trimEx);
  const idx = {
    ymd: header.indexOf("日付"),
    sid: header.indexOf("スタッフID"),
    state: header.indexOf("状態"),
    st: header.indexOf("開始時間"),
    et: header.indexOf("終了時間"),
  };
  const vals = sh.getDataRange().getValues();
  for (let r=1;r<vals.length;r++){
    const o = {};
    header.forEach((h,i)=> o[h] = vals[r][i]);
    const same = (toYmd(o["日付"])===toYmd(row["日付"])) &&
                 (String(o["スタッフID"]||"")===String(row["スタッフID"]||"")) &&
                 (String(o["状態"]||"")===String(row["状態"]||"")) &&
                 (String(o["開始時間"]||"")===String(row["開始時間"]||"")) &&
                 (String(o["終了時間"]||"")===String(row["終了時間"]||""));
    if (same){
      sh.deleteRow(r+1);
      cacheDel_(kScheduleMap(toYmd(row["日付"])));
      return { deleted:true };
    }
  }
  return { deleted:false };
}
