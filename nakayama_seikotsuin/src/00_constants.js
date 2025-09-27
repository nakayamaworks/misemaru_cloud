/**
 * 00_constants.gs
 * 定数・DEBUG・各種ID/シート名を一元管理
 * 既存で散在していたClient ID/スプレッドシートID等はここへ集約して HtmlService に注入する。
 */

const DEBUG = false; // 本番は false。調査時のみ true。

/** タイムゾーン（JST固定） */
const TZ = Session.getScriptTimeZone() || "Asia/Tokyo";

/** 予約スプレッドシート（年シート方式） */
const RESERVATION_SS_ID = PropertiesService.getScriptProperties().getProperty("RESERVATION_SS_ID") || ""; // TODO: セット

/** マスタ類（設定・スタッフ・サービス・顧客） */
const MASTER_SS_ID = PropertiesService.getScriptProperties().getProperty("MASTER_SS_ID") || ""; // TODO: セット

/** トークン認証用 */
const CLIENT_ID     = "982431897942-epgcq6gn01c19oormn1q8d8gh6csvr54.apps.googleusercontent.com";

/** 直接GAS Web APPに遷移できないようにADMIN_KEYを設定（直接関数実行で使用する） */
function generateAdminKey() {
  const key = Utilities.base64Encode(Utilities.getUuid());
  Logger.log(key);
}

/** GitHub側の静的サイトへも同じADMIN_KEYを設定 **/
function setAdminKey() {
  PropertiesService.getScriptProperties().setProperty('ADMIN_KEY', 'ZDNhYWMzNGItMmU1OC00YTA2LTk4ZDctZmFlN2JhZGZhODg3');
}

/** スプレッドシート名 */
const SHEETS = {
  SETTINGS_BASIC: "予約設定",      // 店舗名/締切/連絡先など
  BUSINESS_HOURS: "営業設定",      // 開始時刻/終了時刻/曜日フラグ
  HOLIDAYS: "休業日",              // 開始日/終了日/開始時間/終了時間/備考
  STAFF_MASTER: "スタッフマスタ",
  STAFF_SHIFT:  "スタッフシフト",   // 出勤曜日の基準など
  STAFF_SCHEDULE: "スタッフ予定",    // 休暇/特別出勤/時間休など
  SERVICE_MASTER: "サービス設定",
  SERVICE_STAFF:  "サービス担当スタッフ", // 中間テーブル
  CUSTOMERS: "顧客マスタ"
};

/** スプレッドシート列名（表記ゆれに対応） */
const COLNAMES = {
  DATE:      ["予約日","日付","Date"],
  START:     ["開始時刻","開始時間","Start","StartTime"],
  END:       ["終了時刻","終了時間","End","EndTime"],
  SERVICEID: ["サービスID","ServiceID"],
  SERVICENAME:["サービス名","ServiceName"],
  STAFFID:   ["スタッフID","StaffID"],
  STAFFNAME: ["スタッフ名","StaffName"],
  LAST:      ["姓","LastName"],
  FIRST:     ["名","FirstName"],
  LASTKANA:  ["姓フリガナ","姓カナ","LastKana"],
  FIRSTKANA: ["名フリガナ","名カナ","FirstKana"],
  PHONE:     ["電話番号","TEL","Phone"],
  EMAIL:     ["メール","Email"],
  DESIGNATED:["指名","Designated"],
  MEMO:      ["備考","メモ","Note","Memo"],
  PRICE:     ["税込価格","価格","Price"]
};
