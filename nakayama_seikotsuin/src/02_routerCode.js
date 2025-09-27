function isAdmin(email) {
  const user = normalizeEmail(email);
  if (!user) return false;

  // プロジェクト実行ユーザーも管理者扱い（任意。不要なら消してOK）
  const activeUser = normalizeEmail(Session.getActiveUser().getEmail());
  if (activeUser && user === activeUser) return true;

  const ss = getMasterSS();
  const sheet = ss.getSheetByName("予約設定");
  const admins = readColumn(sheet, 5, 2); // B列, 5行目〜
  return admins.includes(user);
}

function isStaff(email) {
  const user = normalizeEmail(email);
  if (!user) return false;

  const ss = getMasterSS();
  const sheet = ss.getSheetByName("スタッフマスタ");
  const staff = readColumn(sheet, 2, 5); // E列, 2行目〜
  return staff.includes(user);
}

function getRoleByEmail(email) {
  const e = normalizeEmail(email);
  if (isAdmin(e)) return "admin";
  if (isStaff(e)) return "staff";
  return "guest";
}

/** ページ要件（末尾サフィックスで判定） */
function requiredRoleForPage(pageName) {
  const p = String(pageName || "");
  if (!p) return "guest";
  if (/_admin$/.test(p)) return "admin";
  if (/_staff$/.test(p)) return "staff";
  return "guest";
}

/** ロールがページ要件を満たすか */
function isRoleAllowed(role, required) {
  if (required === "guest") return true;
  if (required === "staff") return role === "admin" || role === "staff";
  if (required === "admin") return role === "admin";
  return false;
}

/** ===== 従来のフォールバック（メール直渡し） ===== */
function canAccessPage(email, pageName) {
  const role = getRoleByEmail(email);
  const required = requiredRoleForPage(pageName);
  const ok = isRoleAllowed(role, required);
  console.log("[AUTH][GAS canAccessPage] email=%s role=%s required=%s ok=%s", email, role, required, ok);
  return { ok, role, required };
}

/** ===== トークン検証 → ロール判定 → ページ要件判定（新） ===== */
function verifyAndGetRole(idToken, pageName) {
  try {
    if (!idToken) return { ok: false, error: "empty_token" };

    // ② tokeninfo で検証
    const url  = "https://oauth2.googleapis.com/tokeninfo?id_token=" + encodeURIComponent(idToken);
    const resp = UrlFetchApp.fetch(url, { method: "get", muteHttpExceptions: true });
    if (resp.getResponseCode() !== 200) {
      return { ok: false, error: "invalid_token", status: resp.getResponseCode() };
    }
    const data = JSON.parse(resp.getContentText() || "{}");

    // ③ クレームチェック
    if (data.aud !== CLIENT_ID) return { ok: false, error: "aud_mismatch" };
    const issOk = data.iss === "accounts.google.com" || data.iss === "https://accounts.google.com";
    if (!issOk) return { ok: false, error: "iss_mismatch" };
    const emailVerified = data.email && (data.email_verified === true || data.email_verified === "true");
    if (!emailVerified) return { ok: false, error: "email_unverified" };

    const email = normalizeEmail(data.email);

    // ④ ロールとページ要件
    const role = getRoleByEmail(email);
    const required = requiredRoleForPage(pageName);
    const ok = isRoleAllowed(role, required);

    console.log("[AUTH][GAS verifyAndGetRole] email=%s role=%s required=%s ok=%s", email, role, required, ok);

    return { ok, email, role, required };

  } catch (e) {
    return { ok: false, error: "server_error", detail: String(e) };
  }
}


function doGet(e) {
  const REQUIRED_KEY = PropertiesService.getScriptProperties().getProperty('ADMIN_KEY');
  if (!REQUIRED_KEY || e.parameter.key !== REQUIRED_KEY) {
    return HtmlService.createHtmlOutput('Forbidden')
      .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
  }

  const action = e.parameter.action;
  const page = e.parameter.page || "06_index";

  // ✅ APIレスポンス
  if (action === "getServiceList") {
    const list = getServiceList();
    return ContentService.createTextOutput(JSON.stringify(list))
      .setMimeType(ContentService.MimeType.JSON);
  }

  // ✅ テンプレート作成
  const template = HtmlService.createTemplateFromFile(page);

  template.head = HtmlService.createHtmlOutputFromFile("03_head").getContent();
  template.commonJs = HtmlService.createHtmlOutputFromFile("04_common.js").getContent();
  template.commonCss = HtmlService.createHtmlOutputFromFile("05_common.css").getContent();

  // 🔁 画面共通変数
  template.baseUrl = ScriptApp.getService().getUrl();
  template.pageName = page;

  // 🔁 特定画面用変数
  template.date = e.parameter.date || "";
  template.time = e.parameter.time || "";
  template.serviceId = e.parameter.serviceId || "";
  template.staffId = e.parameter.staffId || "";
  template.status = e.parameter.status || "";
  template.note = e.parameter.note || "";
  template.startDate = e.parameter.startDate || "";
  template.endDate = e.parameter.endDate || "";
  template.startTime = e.parameter.startTime || "";
  template.endTime = e.parameter.endTime || "";

  return template.evaluate()
    .addMetaTag("viewport", "width=device-width, initial-scale=1")
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}
