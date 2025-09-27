function myFunction() {
  
}
/** ====== 設定プロパティ ======
 * BACKUP_FOLDER_ID  ... バックアップ保存先フォルダID（未設定なら自動作成）
 * WEEKLY_KEEP       ... 週次バックアップの保持数（未設定時は12）
 * （RESERVATION_SS_ID / MASTER_SS_ID は既存を利用）
 */

// ★ 週次バックアップの入口（トリガーはこれに設定）
function backupWeekly() {
  try {
    const folder = getOrCreateBackupFolder_();
    const weekly = getOrCreateSubFolder_(folder, "weekly");
    const keep = Number(PropertiesService.getScriptProperties().getProperty("WEEKLY_KEEP") || "12");

    backupOneSpreadsheet_("RESERVATION_SS_ID", "reservation", weekly);
    backupOneSpreadsheet_("MASTER_SS_ID", "master", weekly);

    cleanupOldCopies_(weekly, "reservation_", keep);
    cleanupOldCopies_(weekly, "master_", keep);

  } catch (err) {
    // ★ マスターアカウント直書きで通知
    const MASTER_EMAIL = "misemaru.master@gmail.com";
    MailApp.sendEmail(MASTER_EMAIL, "バックアップ失敗",
      "バックアップ処理でエラーが発生しました。\n\n" + (err.stack || err.message));
    throw err; // オーナー側の標準通知も残す
  }
}


/** ▼ ここから下はユーティリティ */
function getOrCreateBackupFolder_() {
  const props = PropertiesService.getScriptProperties();
  const id = props.getProperty("BACKUP_FOLDER_ID");
  if (id) {
    try { return DriveApp.getFolderById(id); } catch (e) { /* フォルダ消滅時は作り直し */ }
  }
  const root = DriveApp.getRootFolder();
  const folder = DriveApp.createFolder("MiseMaru_Backups");
  props.setProperty("BACKUP_FOLDER_ID", folder.getId());
  return folder;
}

function getOrCreateSubFolder_(parent, name) {
  const it = parent.getFoldersByName(name);
  return it.hasNext() ? it.next() : parent.createFolder(name);
}

function backupOneSpreadsheet_(propKey, prefix, destFolder) {
  const props = PropertiesService.getScriptProperties();
  const ssId = props.getProperty(propKey);
  if (!ssId) throw new Error(`Property ${propKey} is not set`);
  const src = DriveApp.getFileById(ssId);

  const ts = Utilities.formatDate(new Date(), "Asia/Tokyo", "yyyyMMdd_HHmm");
  const name = `${prefix}_${ts}_${src.getName()}`; // 例: reservation_20250915_0300_予約2025
  const copy = src.makeCopy(name, destFolder);
  Logger.log(`✅ Backup created: ${copy.getName()} (${copy.getId()})`);
  return copy;
}

function cleanupOldCopies_(folder, namePrefix, keep) {
  const files = [];
  const it = folder.getFiles();
  while (it.hasNext()) {
    const f = it.next();
    if (f.getName().startsWith(namePrefix)) files.push(f);
  }
  files.sort((a, b) => a.getDateCreated() - b.getDateCreated()); // 旧→新

  while (files.length > keep) {
    const old = files.shift();
    Logger.log(`🗑️ Trim: ${old.getName()}`);
    old.setTrashed(true); // まずはゴミ箱へ（保険）
  }
}

/** 14日分の素材キャッシュを事前ウォーム（6時間TTL） */
function warmCaches14Days() {
  const today = new Date();
  const weekAnchors = new Set();

  // 0..13日で必要な週アンカー（最大3週）を抽出
  for (let i = 0; i < 14; i++) {
    const d = addDays_(today, i);
    weekAnchors.add(startOfWeekStr_(d)); // 週初(yyyy-MM-dd)に丸め
  }

  // 週アンカーごとに一気に素材をウォーム
  for (const anchor of weekAnchors) {
    // （予約/営業時間/シフト/予定/担当表/サービス/スタッフ等）
    getWeeklyMatrixUnified(anchor);
  }
}

