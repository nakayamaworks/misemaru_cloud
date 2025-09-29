// Public runtime config for GitHub Pages
// Note: client_id is not a secret; it is safe to expose on the client.
//       Ensure server-side (GAS) verifies ID tokens (aud/iss/exp/email).

window.MISEMARU = window.MISEMARU || {};

// Google Identity Services Web client ID
window.MISEMARU.GSI_CLIENT_ID = "982431897942-epgcq6gn01c19oormn1q8d8gh6csvr54.apps.googleusercontent.com";

// GAS Web App base (exec) URL
window.MISEMARU.GAS_BASE = "https://script.google.com/macros/s/-Kf-OjIUIs4GbjiELVYngH0HTDWQaUB2sPrmEHqoY6Y2RltM3cIdA/exec";