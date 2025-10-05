// Very small helper to get/apply language on parent page
(function () {
  const fallback = 'ja';

  function getLang() {
    try {
      const u = new URL(location.href);
      return u.searchParams.get('lang') || localStorage.getItem('lang') || fallback;
    } catch {
      return localStorage.getItem('lang') || fallback;
    }
  }

  function t(key, lang) {
    const L = lang || getLang();
    const d = (window.I18N && (window.I18N[L] || window.I18N[fallback])) || {};
    return d[key] || (window.I18N?.[fallback]?.[key]) || key;
  }

  function apply(elMap, lang) {
    const L = lang || getLang();
    Object.entries(elMap || {}).forEach(([selector, key]) => {
      const el = document.querySelector(selector);
      if (el) el.textContent = t(key, L);
    });
  }

  function initSelector(selectEl) {
    const L = getLang();
    if (!selectEl) return;
    selectEl.value = L;
    selectEl.addEventListener('change', (e) => {
      const next = e.target.value;
      try { localStorage.setItem('lang', next); } catch {}
      const u = new URL(location.href);
      u.searchParams.set('lang', next);
      location.href = u.toString();
    });
  }

  window.I18nClient = { getLang, t, apply, initSelector };
})();

