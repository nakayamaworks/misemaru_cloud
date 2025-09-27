/**
 * 12_services.gs
 * サービス・料金・割引・担当スタッフの取得
 */

function getServiceList_(){
  const k = CACHE_KEYS.SERVICE_LIST;
  const c = cacheGet_(k);
  if (c) return c;

  const sh = getMasterSS().getSheetByName(SHEETS.SERVICE_MASTER);
  if (!sh) return [];
  const rows = rowsToObjects(sh.getDataRange().getValues());
  // 想定：サービスID, 表示順, サービス名, 所要時間(分), 税込価格, 税率(%), 割引適用可, 同時予約可能数, 備考, 表示フラグ
  const list = rows.filter(o => String(o["表示フラグ"]||"1") !== "0")
    .map(o => ({
      id: trimEx(o["サービスID"]||o["ID"]||""),
      name: trimEx(o["サービス名"]||o["名称"]||""),
      minutes: Number(o["所要時間（分）」"] || o["所要時間（分）」"] || o["所要時間（分）」"]) || Number(o["所要時間（分）」"]) || Number(o["所要時間（分）」"]), // 保険
      durationMin: Number(o["所要時間（分）"] || 0),
      price: Number(o["税込価格"] || 0),
      tax: Number(o["税率（%）」"] || o["税率（%"] || o["税率"] || 0),
      concurrent: Number(o["同時予約可能数"] || 1),
      discountable: toBool(o["割引適用可"] || true),
      note: trimEx(o["備考"]||"")
    }));

  cachePut_(k, list);
  return list;
}

function getServiceStaffMap_(){
  const k = CACHE_KEYS.SERVICE_STAFF;
  const c = cacheGet_(k);
  if (c) return c;

  const sh = getMasterSS().getSheetByName(SHEETS.SERVICE_STAFF);
  if (!sh) return {};
  const rows = rowsToObjects(sh.getDataRange().getValues());
  // 想定：サービスID / スタッフID / 表示
  const map = {};
  rows.forEach(o=>{
    const sid = trimEx(o["サービスID"]||o["ServiceID"]||"");
    const stf = trimEx(o["スタッフID"]||o["StaffID"]||"");
    const vis = String(o["表示"]||o["Visible"]||"1") !== "0";
    if (!sid || !stf || !vis) return;
    if (!map[sid]) map[sid] = new Set();
    map[sid].add(stf);
  });
  // Set→配列
  Object.keys(map).forEach(k=> map[k] = Array.from(map[k]));
  cachePut_(k, map);
  return map;
}

function getDiscountList_(){
  const k = CACHE_KEYS.DISCOUNT_LIST;
  const c = cacheGet_(k);
  if (c) return c;

  const sh = getMasterSS().getSheetByName(SHEETS.DISCOUNT_MASTER);
  if (!sh) return [];
  const rows = rowsToObjects(sh.getDataRange().getValues());
  // 想定：割引ID/割引名/割引率 or 金額/期間/曜日/時間帯/顧客区分...
  cachePut_(k, rows);
  return rows;
}
