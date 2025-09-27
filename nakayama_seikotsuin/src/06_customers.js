/**
 * 13_customers.gs
 * 顧客CRUD：メール/ID検索・登録/更新など
 */

function getCustomerByEmail(email){
  const sh = getMasterSS().getSheetByName(SHEETS.CUSTOMERS);
  if (!sh || !email) return null;
  const rows = rowsToObjects(sh.getDataRange().getValues());
  const e = String(email).trim().toLowerCase();
  return rows.find(o => String(o["メール"]||o["Email"]||"").trim().toLowerCase() === e) || null;
}

function getCustomerById(id){
  const sh = getMasterSS().getSheetByName(SHEETS.CUSTOMERS);
  if (!sh || !id) return null;
  const rows = rowsToObjects(sh.getDataRange().getValues());
  return rows.find(o => String(o["ID"]||o["顧客ID"]||"") === String(id)) || null;
}

/** upsert：ID指定で上書き、IDなければ採番追加（採番は簡易版。実運用は衝突回避を改善） */
function upsertCustomer(o){
  const sh = getMasterSS().getSheetByName(SHEETS.CUSTOMERS);
  if (!sh) throw new Error("顧客シートが見つかりません");
  const values = sh.getDataRange().getValues();
  const header = values[0].map(trimEx);
  const rows = values.slice(1);

  const idIdx = header.indexOf("ID") >= 0 ? header.indexOf("ID") : header.indexOf("顧客ID");
  const key = idIdx>=0 ? String(nz(o["ID"]||o["顧客ID"]||"")).trim() : "";

  if (key){
    // 上書き
    for (let r=0;r<rows.length;r++){
      if (String(rows[r][idIdx]) === key){
        header.forEach((h,i)=>{ rows[r][i] = o[h] != null ? o[h] : rows[r][i]; });
        sh.getRange(2,1,rows.length,header.length).setValues(rows);
        return { id: key, updated: true };
      }
    }
  }
  // 追加
  const newId = "C" + (Date.now());
  const newRow = header.map(h => o[h] != null ? o[h] : "");
  if (idIdx>=0) newRow[idIdx] = newId;
  sh.appendRow(newRow);
  return { id: newId, created: true };
}
