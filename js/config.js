    // Public runtime config for GitHub Pages
// Note: client_id is not a secret; it is safe to expose on the client.
//       Ensure server-side (GAS) verifies ID tokens (aud/iss/exp/email).

window.MISEMARU = window.MISEMARU || {};

// Google Identity Services Web client ID
window.MISEMARU.GSI_CLIENT_ID = "982431897942-epgcq6gn01c19oormn1q8d8gh6csvr54.apps.googleusercontent.com";

// GAS Web App base (exec) URL
window.MISEMARU.GAS_BASE = "https://script.google.com/macros/s/AKfycbys3tCX1DCOt_mNFL18Mutv9NmLAve7jyjYaOqlFMFa_0w3etqw-FuG49tC-c11Izri/exec";

// Tenant URLs (used by parent UI when child requests to close)
// Use var to expose as global identifiers for existing code paths
var HOME_URL = "https://nakayamaworks.github.io/misemaru_cloud_ver1.0.0/";
var ADMIN_URL = window.MISEMARU.GAS_BASE ? window.MISEMARU.GAS_BASE + "?page=32_index_admin" : HOME_URL;

// 旧 iframe 構成との互換用: 親/子で許可する postMessage オリジン
window.MISEMARU.PARENT_ORIGINS = window.MISEMARU.PARENT_ORIGINS || [
  "https://nakayamaworks.github.io",
  "https://watarunakayama1203.github.io"
];
try {
  const gasOrigin = new URL(window.MISEMARU.GAS_BASE).origin;
  window.MISEMARU.CHILD_ORIGINS = window.MISEMARU.CHILD_ORIGINS || [gasOrigin];
  if (!window.MISEMARU.CHILD_ORIGINS.includes(gasOrigin)) {
    window.MISEMARU.CHILD_ORIGINS.push(gasOrigin);
  }
} catch (_) {
  window.MISEMARU.CHILD_ORIGINS = window.MISEMARU.CHILD_ORIGINS || [];
}

// Language configuration per tenant (client-side only)
// Default initial language for first-time visitors
window.MISEMARU.DEFAULT_LANG = window.MISEMARU.DEFAULT_LANG || 'ja';
// Available languages to show in the selector
window.MISEMARU.AVAILABLE_LANGS = window.MISEMARU.AVAILABLE_LANGS || ['ja','en','zh-CN','zh-TW'];

// Registry API endpoint for store verification (set in management console)
window.MISEMARU.REGISTRY_MASTER_API = window.MISEMARU.REGISTRY_MASTER_API || "https://script.google.com/macros/s/AKfycbx4HEO39WxQbS4yonsycafUDq-hm9NpRzZveDZYJDMsNvJ8iKy0_VaQYKhtIIdImHv-/exec";
if (window.MISEMARU.REGISTRY_MASTER_API) {
  window.MISEMARU.REGISTRY_API = window.MISEMARU.REGISTRY_MASTER_API;
} else {
  window.MISEMARU.REGISTRY_API = window.MISEMARU.REGISTRY_API || window.MISEMARU.GAS_BASE || "";
}

// Optional mock registry entries for local development / demo
window.MISEMARU.MOCK_REGISTRY = window.MISEMARU.MOCK_REGISTRY || [
  {
    gasId: "demo-store",
    storeName: "みせまる理容室",
    country: "JP",
    services: ["ヘアカット", "シェービング"],
    verifiedAt: "2025-01-01T00:00:00Z",
    verified: true,
    iframeUrl: window.MISEMARU.GAS_BASE ? window.MISEMARU.GAS_BASE + "?page=31_index" : "",
    publicUrl: window.MISEMARU.GAS_BASE ? window.MISEMARU.GAS_BASE + "?page=31_index" : "",
    tags: ["barber", "tokyo"]
  }
];
