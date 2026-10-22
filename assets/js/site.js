/* Browning's Productions – language flags, Dark/Light switch, menu and scroll effects. */
(function () {
  var root = document.documentElement;

  function save(key, value) { try { localStorage.setItem(key, value); } catch (e) {} }

  /* ---- Language (flags) ---- */
  var langButtons = document.querySelectorAll('[data-set-lang]');
  function showLang(lang) {
    root.setAttribute('data-lang', lang);
    root.lang = lang === 'no' ? 'nb' : 'en';
    langButtons.forEach(function (b) { b.setAttribute('aria-pressed', String(b.getAttribute('data-set-lang') === lang)); });
  }
  langButtons.forEach(function (b) {
    b.addEventListener('click', function () { var l = b.getAttribute('data-set-lang'); save('bp-lang', l); showLang(l); });
  });
  showLang(root.getAttribute('data-lang') || 'en');

  /* ---- Dark / Light switch ---- */
  var themeSwitch = document.querySelector('[data-toggle-theme]');
  function showTheme(theme) {
    root.setAttribute('data-theme', theme);
    if (themeSwitch) themeSwitch.setAttribute('aria-checked', String(theme === 'light'));
  }
  if (themeSwitch) {
    themeSwitch.addEventListener('click', function () {
      var next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
      save('bp-theme', next); showTheme(next);
    });
  }
  showTheme(root.getAttribute('data-theme') || 'dark');

  /* ---- Projects dropdown: close when clicking outside or pressing Escape ---- */
  var menu = document.querySelector('.menu');
  if (menu) {
    document.addEventListener('click', function (e) { if (menu.open && !menu.contains(e.target)) menu.open = false; });
    menu.addEventListener('keydown', function (e) { if (e.key === 'Escape') { menu.open = false; menu.querySelector('summary').focus(); } });
    menu.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', function () { menu.open = false; }); });
  }

  /* ---- Mobile menu button ---- */
  var navBtn = document.querySelector('[data-nav-toggle]');
  function setNav(open) {
    root.classList.toggle('nav-open', open);
    if (navBtn) navBtn.setAttribute('aria-expanded', String(open));
  }
  if (navBtn) {
    navBtn.addEventListener('click', function () { setNav(!root.classList.contains('nav-open')); });
    document.querySelectorAll('#site-nav a').forEach(function (a) { a.addEventListener('click', function () { setNav(false); }); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && root.classList.contains('nav-open')) { setNav(false); navBtn.focus(); } });
    window.addEventListener('resize', function () { if (window.innerWidth > 860) setNav(false); });
  }

  /* ---- Scroll effects fallback for browsers without scroll-driven animations ---- */
  var supportsScrollAnim = window.CSS && CSS.supports && CSS.supports('animation-timeline: view()');
  var reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!supportsScrollAnim && !reduced && 'IntersectionObserver' in window) {
    root.classList.add('io');
    var io = new IntersectionObserver(function (items) {
      items.forEach(function (it) { if (it.isIntersecting) { it.target.classList.add('is-in'); io.unobserve(it.target); } });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    document.querySelectorAll('.reveal, .pop').forEach(function (el) { io.observe(el); });
  }
})();
