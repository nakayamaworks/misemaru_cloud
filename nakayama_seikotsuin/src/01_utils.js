/**
 * 01_utils.gs
 * 共通ユーティリティ：ログ・日付時刻・シートI/O・ヘッダ→列番号・変換など
 */


function normalizeEmail(s) {
  return String(s || "").trim().toLowerCase();
}

function readColumn(sheet, startRow, colIndex) {
  if (!sheet) return [];
  const last = sheet.getLastRow();
  if (last < startRow) return [];
  const vals = sheet.getRange(startRow, colIndex, last - startRow + 1, 1).getValues();
  return vals.flat().map(v => String(v).trim().toLowerCase()).filter(v => v !== "");
}

