/**
 * 90_cache_utils.gs
 * CacheService の薄いラッパ。キー規約を統一して運用事故を減らす。
 */

const CACHE_NS = "MISEMARU_V1_1";
const CACHE_EXPIRATION = 6 * 60 * 60; // CacheService で設定可能な最大のキャッシュ時間 (6時間 = 21600秒)

/** 列挙（キーは自由に追加） */
const CACHE_KEYS = {
  RESERVATION_MAP:  "RESERVATION_MAP:",   // + year
  STAFF_LIST:       "STAFF_LIST",
  SHIFT_MAP:        "SHIFT_MAP:",        // + ymd
  SCHEDULE_MAP:     "SCHEDULE_MAP:",     // + ymd
  BUSINESS_HOURS:   "BUSINESS_HOURS",
  HOLIDAY_RANGES:   "HOLIDAY_RANGES",
  SERVICE_LIST:     "SERVICE_LIST",
  SERVICE_STAFF:    "SERVICE_STAFF",
  DISCOUNT_LIST:    "DISCOUNT_LIST",
  SETTINGS_BASIC:   "SETTINGS_BASIC"
};

function cacheGet_(key) {
  const raw = CacheService.getScriptCache().get(CACHE_NS + key);
  if (!raw) return null;
  try { return JSON.parse(raw); } catch(e){ return null; }
}
function cachePut_(key, obj, sec=CACHE_SEC) {
  try { CacheService.getScriptCache().put(CACHE_NS + key, JSON.stringify(obj), sec); } catch(e){}
}
function cacheDel_(key) {
  try { CacheService.getScriptCache().remove(CACHE_NS + key); } catch(e){}
}

/** 年別キー等のユーティリティ */
function kReservationMap(year){ return CACHE_KEYS.RESERVATION_MAP + String(year); }
function kShiftMap(ymd){ return CACHE_KEYS.SHIFT_MAP + String(ymd); }
function kScheduleMap(ymd){ return CACHE_KEYS.SCHEDULE_MAP + String(ymd); }

/** 一括無効化（管理メニューから呼び出し想定） */
function invalidateAllCaches_(){
  Object.values(CACHE_KEYS).forEach(k=>{
    // ワイルドカード削除は未対応なので主要キーを直接消す or 年/日付ループで個別削除
    cacheDel_(k);
  });
}

function clearAllCache() {
  const cache = CacheService.getScriptCache();
  const keys = [];

  const today = new Date();
  for (let i = -30; i <= 30; i++) {
    const d = new Date(today);
    d.setDate(d.getDate() + i);
    const ymd = Utilities.formatDate(d, "Asia/Tokyo", "yyyy-MM-dd");
    const year = d.getFullYear();

    // 日付依存のキー（定義済みのものだけ）
    keys.push(`${CACHE_KEYS.RESERVATION_MAP}_${year}_${ymd}`);
    keys.push(`${CACHE_KEYS.BUSINESS_HOUR_MAP}_${ymd}`);
    keys.push(`${CACHE_KEYS.STAFF_SHIFT_MAP}_${ymd}`);
    keys.push(`${CACHE_KEYS.STAFF_SCHEDULE_MAP}_${ymd}`);
  }

  // 固定キー（定義済みのものだけ）
  keys.push(
    // 予約系
    CACHE_KEYS.RESERVATION_MAP,
    CACHE_KEYS.RESERVATION_SETTINGS,

    // 顧客系
    CACHE_KEYS.CUSTOMER_MAP,
    CACHE_KEYS.CUSTOMER_LIST,

    // スタッフ系
    CACHE_KEYS.STAFF_LIST,
    CACHE_KEYS.STAFF_SHIFT_MAP,
    CACHE_KEYS.STAFF_SCHEDULE_MAP,

    // サービス系
    CACHE_KEYS.SERVICE_LIST,
    CACHE_KEYS.SERVICE_STAFF_MAP,

    // 営業・休業日
    CACHE_KEYS.BUSINESS_HOUR_MAP,
    CACHE_KEYS.HOLIDAY_LIST,

    // ポリシー・割引
    CACHE_KEYS.CANCEL_POLICY_LIST,
    CACHE_KEYS.DISCOUNT_LIST
  );

  cache.removeAll(keys);
  Logger.log("🧹 キャッシュ削除完了: \n" + keys.join("\n"));
}

