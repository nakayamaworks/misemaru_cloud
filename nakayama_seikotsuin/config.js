    // Public runtime config for GitHub Pages
// Note: client_id is not a secret; it is safe to expose on the client.
//       Ensure server-side (GAS) verifies ID tokens (aud/iss/exp/email).

window.MISEMARU = window.MISEMARU || {};

// Google Identity Services Web client ID
window.MISEMARU.GSI_CLIENT_ID = "982431897942-epgcq6gn01c19oormn1q8d8gh6csvr54.apps.googleusercontent.com";

// GAS Web App base (exec) URL
window.MISEMARU.GAS_BASE = "https://script.google.com/macros/s/AKfycbyHtFw5pTkHu-Kf-OjIUIs4GbjiELVYngH0HTDWQaUB2sPrmEHqoY6Y2RltM3cIdA/exec";

// Tenant URLs (used by parent UI when child requests to close)
// Use var to expose as global identifiers for existing code paths
var HOME_URL = "https://nakayamaworks.github.io/misemaru_cloud/nakayama_seikotsuin/";
var ADMIN_URL = "https://nakayamaworks.github.io/misemaru_cloud/nakayama_seikotsuin/admin";

// Language configuration per tenant (client-side only)
// Default initial language for first-time visitors
window.MISEMARU.DEFAULT_LANG = window.MISEMARU.DEFAULT_LANG || 'ja';
// Available languages to show in the selector
window.MISEMARU.AVAILABLE_LANGS = window.MISEMARU.AVAILABLE_LANGS || ['ja','en','zh-CN','zh-TW'];
