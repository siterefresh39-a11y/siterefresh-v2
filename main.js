/* =========================================================
   SiteRefresh · main.js

   CONFIGURAZIONE CONTATTI
   - formEndpoint: l'indirizzo dello script Google che inoltra le
     richieste alle vostre email (finisce con /exec). È il modo
     consigliato: le vostre email NON compaiono nel codice del sito.
     Va bene anche un indirizzo Formspree.
   - email / whatsapp: facoltativi. ATTENZIONE: quello che scrivete
     qui è visibile a chiunque guardi il codice del sito. Lasciateli
     vuoti se volete tenere le email nascoste.
   ========================================================= */
const CONFIG = {
  formEndpoint: 'https://script.google.com/macros/s/AKfycbz3qmFdWS7CZOXqayoFEU4u7x1nALL9OltETOl75oz3yo8e-ZhMjvoG0oU2etYHdEDm/exec',
  email: '',        // facoltativo e pubblico, es. 'info@siterefresh.it'
  whatsapp: ''      // facoltativo e pubblico, es. '393401234567'
};

(function () {
  'use strict';

  const doc = document.documentElement;
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const hasGsap = !!(window.gsap && window.ScrollTrigger);
  let lenis = null;

  /* ---------- Anno nel footer ---------- */
  const year = $('#year');
  if (year) year.textContent = String(new Date().getFullYear());

  /* ---------- Contatti diretti ---------- */
  $$('[data-contact]').forEach((el) => {
    const type = el.dataset.contact;
    const link = el.tagName === 'A' ? el : el.querySelector('a');
    if (type === 'email' && CONFIG.email) {
      link.href = 'mailto:' + CONFIG.email;
      $$('[data-contact-text]', el).forEach((t) => { t.textContent = CONFIG.email; });
      el.hidden = false;
    }
    if (type === 'whatsapp' && CONFIG.whatsapp) {
      link.href = 'https://wa.me/' + CONFIG.whatsapp.replace(/\D/g, '');
      el.hidden = false;
    }
  });

  /* ---------- Menu su telefono ---------- */
  const nav = $('#nav');
  const menu = $('#menu');
  const menuBtn = $('#menuBtn');
  const isMenuOpen = () => menu.classList.contains('open');
  function setMenu(open) {
    if (open === isMenuOpen()) return;
    menu.classList.toggle('open', open);
    nav.classList.toggle('menu-open', open);
    menuBtn.setAttribute('aria-expanded', String(open));
    menuBtn.setAttribute('aria-label', open ? 'Chiudi il menu' : 'Apri il menu');
    menu.setAttribute('aria-hidden', String(!open));
    menu.inert = !open;
    if (lenis) { open ? lenis.stop() : lenis.start(); }
    else document.body.style.overflow = open ? 'hidden' : '';
  }
  menu.inert = true;
  menuBtn.addEventListener('click', () => setMenu(!isMenuOpen()));
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setMenu(false); });
  window.matchMedia('(min-width: 900px)').addEventListener('change', () => setMenu(false));

  /* ---------- Link interni con scroll morbido ---------- */
  $$('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href');
      if (id === '#') { e.preventDefault(); return; }
      const toTop = id === '#top';
      const target = toTop ? null : document.querySelector(id);
      if (!toTop && !target) return;
      e.preventDefault();
      setMenu(false);
      if (lenis) { lenis.start(); lenis.scrollTo(toTop ? 0 : target, { duration: 1.6 }); }
      else if (toTop) window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
      else target.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
    });
  });

  /* ---------- Navbar, barra di avanzamento ---------- */
  const progress = $('#progressBar');
  let lastY = window.scrollY;
  function onScroll() {
    const y = window.scrollY;
    const max = doc.scrollHeight - window.innerHeight;
    if (progress) progress.style.transform = 'scaleX(' + (max > 0 ? Math.min(1, y / max) : 0) + ')';
    nav.classList.toggle('solid', y > 40);
    if (!isMenuOpen()) {
      if (y > window.innerHeight * 0.6 && y > lastY + 6) nav.classList.add('hide');
      else if (y < lastY - 6 || y < 80) nav.classList.remove('hide');
    }
    lastY = y;
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- Link attivo nella navbar ---------- */
  const navLinks = $$('.nav-links a');
  if ('IntersectionObserver' in window && navLinks.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        navLinks.forEach((l) => l.classList.toggle('on', l.getAttribute('href') === '#' + en.target.id));
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    ['top', 'servizi', 'refresh', 'museo', 'funzioni', 'vivi', 'prezzi', 'perche', 'metodo', 'chi-siamo', 'progetti', 'faq', 'contatti'].forEach((id) => {
      const el = document.getElementById(id); if (el) io.observe(el);
    });
  }

  /* ---------- Bottone fisso su telefono e badge rotante su computer ---------- */
  const mcta = $('#mobileCta');
  const badge = $('#ctaBadge');
  if (mcta && 'IntersectionObserver' in window) {
    let heroOut = false;
    const near = new Set();
    const upd = () => {
      const show = heroOut && near.size === 0;
      mcta.classList.toggle('show', show);
      if (badge) badge.classList.toggle('show', show);
    };
    new IntersectionObserver(([e]) => { heroOut = e.intersectionRatio < 0.2; upd(); }, { threshold: [0, 0.2, 0.5] }).observe($('.hero'));
    const io2 = new IntersectionObserver((es) => { es.forEach((e) => { e.isIntersecting ? near.add(e.target) : near.delete(e.target); }); upd(); });
    io2.observe($('#contatti'));
    io2.observe($('.footer'));
  }

  /* ---------- Confronto prima / dopo (trascinamento) ---------- */
  const compare = $('#compare');
  const range = $('#compareRange');
  const chLabel = $('#chLabel');
  const rpList = $('#rpList');
  const rpItems = $$('#rpList li');
  let lastStage = -1;
  /* Un solo punto che muove il prima/dopo: percentuale, lista, vibrazione */
  function setP(p, haptic) {
    p = Math.max(0, Math.min(100, +p));
    compare.style.setProperty('--p', p.toFixed(2));
    if (chLabel) chLabel.textContent = Math.round(p) + '%';
    const step = 88 / rpItems.length;
    let stage = 0;
    rpItems.forEach((li, i) => { const on = p >= 8 + i * step; li.classList.toggle('on', on); if (on) stage = i + 1; });
    if (p >= 97) stage = rpItems.length + 1;
    if (haptic && stage !== lastStage && lastStage !== -1 && navigator.vibrate) { try { navigator.vibrate(stage > rpItems.length ? [12, 40, 18] : 10); } catch (err) { /* ignora */ } }
    lastStage = stage;
  }
  if (compare && range) {
    range.addEventListener('input', () => setP(range.value, true));
    range.addEventListener('pointerdown', () => compare.classList.add('dragging'));
    ['pointerup', 'pointercancel', 'blur'].forEach((ev) => range.addEventListener(ev, () => compare.classList.remove('dragging')));
    setP(range.value);
  }

  /* ---------- Mini video: partono quando sono visibili ---------- */
  if (!reduce && 'IntersectionObserver' in window) {
    const mio = new IntersectionObserver((es) => {
      es.forEach((en) => {
        if (en.isIntersecting) { en.target.classList.add('run'); en.target.classList.remove('off'); }
        else en.target.classList.add('off');
      });
    }, { threshold: 0.2 });
    $$('.mini').forEach((m) => mio.observe(m));
  }

  /* ---------- Museo del 2009: card da girare ---------- */
  $$('.rc').forEach((card) => {
    card.addEventListener('click', () => {
      card.setAttribute('aria-pressed', card.getAttribute('aria-pressed') === 'true' ? 'false' : 'true');
    });
  });

  /* ---------- Modalità 2009 ---------- */
  let trailOn = false;
  let lastTrail = 0;
  function onTrail(e) {
    const now = performance.now();
    if (now - lastTrail < 45) return;
    lastTrail = now;
    const s = document.createElement('span');
    s.className = 'star-trail';
    s.textContent = '✦';
    s.style.left = (e.clientX + 6) + 'px';
    s.style.top = (e.clientY + 6) + 'px';
    document.body.appendChild(s);
    setTimeout(() => s.remove(), 900);
  }
  /* Cambiare stile cambia le altezze: teniamo ferma la sezione che si sta guardando */
  function keepAnchor(fn) {
    const mid = window.innerHeight / 2;
    let anchor = null;
    for (const el of $$('main > *, .footer')) {
      const r = el.getBoundingClientRect();
      if (r.top <= mid && r.bottom >= mid) { anchor = el; break; }
    }
    const before = anchor ? anchor.getBoundingClientRect().top : 0;
    fn();
    if (!anchor) return;
    const delta = anchor.getBoundingClientRect().top - before;
    if (Math.abs(delta) > 1) {
      const y = window.scrollY + delta;
      if (lenis) lenis.scrollTo(y, { immediate: true, force: true });
      else window.scrollTo(0, y);
    }
  }
  function setY2009(on, refresh = true) {
    keepAnchor(() => doc.classList.toggle('y2009', on));
    $$('[data-y2009]').forEach((b) => b.setAttribute('aria-pressed', String(on)));
    if (fine && !reduce && on && !trailOn) { window.addEventListener('pointermove', onTrail, { passive: true }); trailOn = true; }
    if (!on && trailOn) { window.removeEventListener('pointermove', onTrail); trailOn = false; }
    if (refresh && window.ScrollTrigger) setTimeout(() => keepAnchor(() => ScrollTrigger.refresh()), 60);
  }

  /* ---------- Viaggio nel tempo automatico (una volta per visita) ---------- */
  const tw = { modal: $('#twModal'), count: $('#twCount'), banner: $('#twBanner'), bar: $('#twBar'), hero: $('#twHero'), fx: $('#twFx') };
  let twActive = false;
  let twStartY = 0;
  let twTimer = null;
  let heroTimer = null;
  let heroArmed = false;
  const twDist = () => Math.max(800, window.innerHeight * 1.4);
  const show = (el) => { el.hidden = false; requestAnimationFrame(() => requestAnimationFrame(() => el.classList.add('show'))); };
  const hide = (el) => { el.classList.remove('show'); setTimeout(() => { el.hidden = true; }, 350); };
  function glitch(cb) {
    if (reduce) { cb(); return; }
    tw.fx.classList.remove('go'); void tw.fx.offsetWidth; tw.fx.classList.add('go');
    setTimeout(cb, 300);
  }
  function onTwScroll() {
    const p = Math.min(1, Math.abs(window.scrollY - twStartY) / twDist());
    tw.bar.style.transform = 'scaleX(' + p + ')';
    if (p >= 1) travelBack();
  }
  function travelGo() {
    clearInterval(twTimer);
    if (twActive || doc.classList.contains('tw-auto')) return;
    hide(tw.modal);
    glitch(() => {
      doc.classList.add('tw-auto');
      setY2009(true, false);
      twActive = true;
      twStartY = window.scrollY;
      tw.bar.style.transform = 'scaleX(0)';
      tw.banner.hidden = false;
      window.addEventListener('scroll', onTwScroll, { passive: true });
    });
  }
  function travelBack() {
    if (!twActive) return;
    twActive = false;
    window.removeEventListener('scroll', onTwScroll);
    glitch(() => {
      setY2009(false, false);
      doc.classList.remove('tw-auto');
      tw.banner.hidden = true;
      showRefreshHero();
    });
  }
  /* Al ritorno: "Questo è un Refresh" a tutto schermo */
  function lockScroll(on) {
    if (lenis) { on ? lenis.stop() : lenis.start(); }
    else document.body.style.overflow = on ? 'hidden' : '';
  }
  function showRefreshHero() {
    show(tw.hero);
    heroArmed = false;
    lockScroll(true);
    setTimeout(() => { heroArmed = true; lockScroll(false); }, 1800);
    clearTimeout(heroTimer);
    heroTimer = setTimeout(closeRefreshHero, 10000);
  }
  function closeRefreshHero() {
    clearTimeout(heroTimer);
    if (tw.hero.hidden) return;
    hide(tw.hero);
    lockScroll(false);
  }
  /* Accortezze: parte solo se il visitatore si ferma davvero sul Museo
     (non mentre salta a un'altra sezione), non mentre scrive nel modulo,
     si annulla da solo se scorre via durante il conto alla rovescia e
     viene segnato come "visto" solo dopo averlo fatto o rifiutato. */
  /* una sola volta per visitatore (resta segnato nel browser) */
  const TW_KEY = 'sr-viaggio-2009';
  const twMark = () => {
    try { localStorage.setItem(TW_KEY, '1'); } catch (err) { /* ignora */ }
    try { sessionStorage.setItem(TW_KEY, '1'); } catch (err) { /* ignora */ }
  };
  let twAsking = false;
  function travelSkip() { clearInterval(twTimer); twAsking = false; hide(tw.modal); twMark(); }
  function travelCancel() { clearInterval(twTimer); twAsking = false; hide(tw.modal); }
  function travelAsk() {
    if (twAsking || twActive) return;
    twAsking = true;
    show(tw.modal);
    let n = 3;
    tw.count.textContent = n;
    twTimer = setInterval(() => {
      n -= 1;
      if (n <= 0) { twAsking = false; twMark(); travelGo(); } else tw.count.textContent = n;
    }, 1000);
  }
  if (tw.modal) {
    $$('[data-tw-skip]').forEach((b) => b.addEventListener('click', travelSkip));
    $$('[data-tw-back]').forEach((b) => b.addEventListener('click', travelBack));
    $$('[data-twh-close]').forEach((b) => b.addEventListener('click', closeRefreshHero));
    tw.hero.addEventListener('click', (e) => { if (e.target === tw.hero) closeRefreshHero(); });
    ['wheel', 'touchmove'].forEach((ev) => window.addEventListener(ev, () => { if (heroArmed && !tw.hero.hidden) closeRefreshHero(); }, { passive: true }));
    document.addEventListener('keydown', (e) => {
      if (e.key !== 'Escape') return;
      if (!tw.hero.hidden) closeRefreshHero();
      else if (twAsking) travelSkip();
    });
    const twDone = () => {
      try { if (localStorage.getItem(TW_KEY) === '1') return true; } catch (err) { /* ignora */ }
      try { return sessionStorage.getItem(TW_KEY) === '1'; } catch (err) { return false; }
    };
    const museum = $('.rc-list');
    if (museum && !reduce && 'IntersectionObserver' in window) {
      let dwell = null;
      const busy = () => doc.classList.contains('y2009') || isMenuOpen() ||
        (document.activeElement && document.activeElement.matches('input, textarea, select'));
      const twIO = new IntersectionObserver(([e]) => {
        clearTimeout(dwell);
        if (twDone()) { twIO.disconnect(); return; }
        if (!e.isIntersecting) { if (twAsking) travelCancel(); return; }
        /* deve restare sul Museo almeno 1,2 secondi: chi ci passa sopra di corsa non viene disturbato */
        dwell = setTimeout(() => { if (!busy() && !twDone()) travelAsk(); }, 1200);
      }, { rootMargin: '0px 0px -35% 0px' });
      twIO.observe(museum);
    }
  }

  $$('[data-y2009]').forEach((b) => b.addEventListener('click', () => {
    if (twActive) { travelBack(); return; }
    setY2009(!doc.classList.contains('y2009'));
  }));

  /* =========================================================
     FUNZIONALITÀ: tab e demo funzionanti
     ========================================================= */
  const ftTabs = $$('.ft-tab');
  if (ftTabs.length) {
    const ftUrl = $('#ftUrl');
    const tabBox = $('.ft-tabs');
    const selectTab = (tab, focus) => {
      ftTabs.forEach((t) => {
        const on = t === tab;
        t.setAttribute('aria-selected', String(on));
        t.tabIndex = on ? 0 : -1;
        const panel = document.getElementById(t.getAttribute('aria-controls'));
        if (on) { panel.hidden = false; panel.scrollTop = 0; panel.classList.remove('enter'); void panel.offsetWidth; panel.classList.add('enter'); }
        else panel.hidden = true;
      });
      if (ftUrl) ftUrl.textContent = tab.dataset.url;
      document.dispatchEvent(new CustomEvent('ft:tab', { detail: tab.getAttribute('aria-controls') }));
      if (focus) tab.focus({ preventScroll: true });
      if (tabBox.scrollWidth > tabBox.clientWidth) {
        const left = tab.getBoundingClientRect().left - tabBox.getBoundingClientRect().left + tabBox.scrollLeft - (tabBox.clientWidth - tab.offsetWidth) / 2;
        tabBox.scrollTo({ left, behavior: reduce ? 'auto' : 'smooth' });
      }
    };
    ftTabs.forEach((t) => t.addEventListener('click', () => selectTab(t)));
    tabBox.addEventListener('keydown', (e) => {
      const i = ftTabs.indexOf(document.activeElement);
      if (i < 0) return;
      const k = e.key;
      if (k === 'ArrowRight' || k === 'ArrowDown') { e.preventDefault(); selectTab(ftTabs[(i + 1) % ftTabs.length], true); }
      if (k === 'ArrowLeft' || k === 'ArrowUp') { e.preventDefault(); selectTab(ftTabs[(i - 1 + ftTabs.length) % ftTabs.length], true); }
    });
  }

  const CONFETTI = '<span class="dm-confetti" aria-hidden="true">' + '<i></i>'.repeat(14) + '</span>';
  const notify = (root, title, text) => root.dispatchEvent(new CustomEvent('demo:done', { bubbles: true, detail: { title, text } }));
  const esc = (t) => String(t).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
  const dmHead = (letter, color, name, sub, extra) =>
    '<div class="dm-head"><span class="dm-logo" style="background:' + color + '">' + letter + '</span><div><b>' + name + '</b><small>' + sub + '</small></div>' + (extra || '') + '</div>';
  const dmSteps = (labels, cur) => '<div class="bk-steps">' + labels.map((t, i) => '<span class="' + (cur > i ? 'on' : '') + '">' + (i + 1) + '. ' + t + '</span>').join('') + '</div>';
  const dmToggle = (key, on, label) => '<button type="button" class="dm-tog" data-tog="' + key + '" aria-pressed="' + on + '"><i aria-hidden="true"></i>' + label + '</button>';
  const ownerBox = (title, inner) => '<div class="dm-owner"><p class="dm-owner-t"><span>Lato titolare</span>' + title + '</p>' + inner + '</div>';
  /* ridisegna senza perdere la posizione delle strisce scorrevoli */
  const keepStrip = (root, fn) => {
    const s = root.querySelector('.hs-x'); const x = s ? s.scrollLeft : 0;
    fn();
    const n = root.querySelector('.hs-x'); if (n) n.scrollLeft = x;
  };

  /* --- Demo 1: prenotazioni con servizio, collaboratore, agenda e promemoria --- */
  function demoBooking(root) {
    const fmtDay = new Intl.DateTimeFormat('it-IT', { weekday: 'long', day: 'numeric', month: 'long' });
    const fmtShort = new Intl.DateTimeFormat('it-IT', { weekday: 'short', day: 'numeric', month: 'short' });
    const fmtWd = new Intl.DateTimeFormat('it-IT', { weekday: 'short' });
    const today = new Date(); today.setHours(0, 0, 0, 0);
    const days = Array.from({ length: 14 }, (_, i) => { const d = new Date(today); d.setDate(today.getDate() + i + 1); return d; });
    const SERV = [['Taglio donna', '45 min', 35, '✂'], ['Piega', '30 min', 20, '≈'], ['Colore', '90 min', 55, '◐'], ['Trattamento', '30 min', 25, '✦']];
    const STAFF = [['Giulia', 'Colore e tagli', 'G', '#be185d', '4,9'], ['Marco', 'Tagli e barba', 'M', '#7c3aed', '4,8'], ['Chi è libero', 'Il primo orario utile', '★', '#0f766e', '']];
    const AM = ['09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00'];
    const PM = ['15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00'];
    const ALL = AM.concat(PM);
    const closed = (d) => d.getDay() === 0 || d.getDay() === 1;
    const busy = (d, i) => ((d.getDate() * 3 + i * 7 + (st.staff || 0) * 5) % 10) < 3;
    const free = (d) => (closed(d) ? 0 : ALL.filter((s, i) => !busy(d, i)).length);
    const blank = () => ({ step: 0, serv: null, staff: null, day: null, slot: null, nome: '', tel: '', wa: true });
    let st = blank();
    const head = dmHead('A', '#be185d', 'Salone Aurora', 'Parrucchiere · prenota online', '<span class="dm-rate">★ 4,9 <small>· 312 recensioni</small></span>');
    const recap = () => {
      const p = [];
      if (st.serv !== null) p.push(SERV[st.serv][0]);
      if (st.staff !== null) p.push(STAFF[st.staff][0] === 'Chi è libero' ? 'primo libero' : 'con ' + STAFF[st.staff][0]);
      if (st.day !== null) p.push(fmtShort.format(days[st.day]) + (st.slot ? ', ' + st.slot : ''));
      return p.length ? '<div class="bk-recap"><span>' + p.join(' · ') + '</span>' + (st.serv !== null ? '<b>' + SERV[st.serv][2] + ' €</b>' : '') + '</div>' : '';
    };
    const slotBtns = (list, off) => list.map((s, j) => {
      const i = j + off; const b = busy(days[st.day], i);
      return '<button type="button" class="bk-slot" style="--n:' + j + '" data-slot="' + s + '" aria-pressed="' + (st.slot === s) + '"' + (b ? ' disabled aria-label="' + s + ', occupato"' : '') + '>' + s + '</button>';
    }).join('');
    const render = () => keepStrip(root, () => {
      let body = '';
      if (st.step === 0) {
        body = '<p class="dm-q">Cosa vuoi prenotare?</p><div class="bk-serv">' +
          SERV.map((s, i) => '<button type="button" class="bk-sv" style="--n:' + i + '" data-serv="' + i + '" aria-pressed="' + (st.serv === i) + '"><span class="bk-ic" aria-hidden="true">' + s[3] + '</span><span><b>' + s[0] + '</b><small>' + s[1] + '</small></span><em>' + s[2] + ' €</em></button>').join('') +
          '</div><p class="demo-note">Prezzi e durate di esempio.</p>';
      } else if (st.step === 1) {
        body = recap() + '<p class="dm-q">Con chi?</p><div class="bk-staff">' +
          STAFF.map((s, i) => '<button type="button" class="bk-st" style="--n:' + i + '" data-staff="' + i + '" aria-pressed="' + (st.staff === i) + '"><span class="bk-av" style="background:' + s[3] + '">' + s[2] + '</span><b>' + s[0] + '</b><small>' + s[1] + '</small>' + (s[4] ? '<span class="bk-stars">★ ' + s[4] + '</span>' : '<span class="bk-stars">più veloce</span>') + '</button>').join('') +
          '</div><div class="bk-foot"><button type="button" class="dm-link" data-go="0">Indietro</button><span></span></div>';
      } else if (st.step === 2) {
        body = recap() + '<p class="dm-q">Quando?</p><div class="bk-strip hs-x">' +
          days.map((d, i) => { const n = free(d); return '<button type="button" class="bk-dd" style="--n:' + i + '" data-day="' + i + '" aria-pressed="' + (st.day === i) + '"' + (n ? '' : ' disabled') + ' aria-label="' + fmtDay.format(d) + (n ? ', ' + n + ' orari liberi' : ', chiuso') + '"><small>' + fmtWd.format(d) + '</small><b>' + d.getDate() + '</b><em>' + (n ? n + ' liberi' : 'chiuso') + '</em></button>'; }).join('') +
          '</div>' + (st.day === null
          ? '<p class="bk-hint">Scegli un giorno: vedi subito solo gli orari ancora liberi.</p>'
          : '<p class="bk-grp">Mattina</p><div class="bk-slots">' + slotBtns(AM, 0) + '</div><p class="bk-grp">Pomeriggio</p><div class="bk-slots">' + slotBtns(PM, AM.length) + '</div>') +
          '<div class="bk-foot"><button type="button" class="dm-link" data-go="1">Indietro</button><button type="button" class="dm-btn" data-go="3"' + (st.slot ? '' : ' disabled') + '>Avanti</button></div>';
      } else if (st.step === 3) {
        body = recap() + '<p class="dm-q">Ultimo passo: i tuoi dati</p><div class="qt-fields">' +
          '<label>Nome<input class="dm-input" data-f="nome" autocomplete="off" value="' + esc(st.nome) + '"></label>' +
          '<label>Telefono<input class="dm-input" data-f="tel" type="tel" inputmode="tel" autocomplete="off" value="' + esc(st.tel) + '"></label></div>' +
          dmToggle('wa', st.wa, 'Promemoria su WhatsApp il giorno prima') +
          '<div class="bk-foot"><button type="button" class="dm-link" data-go="2">Indietro</button><button type="button" class="dm-btn" data-confirm' + (st.nome && st.tel ? '' : ' disabled') + '>Conferma prenotazione</button></div>';
      } else {
        const s = SERV[st.serv]; const d = days[st.day];
        const who = STAFF[st.staff][0] === 'Chi è libero' ? 'Giulia' : STAFF[st.staff][0];
        const agenda = [['09:00', 'Piega', 'Sara R.'], ['12:00', 'Colore', 'Marta P.'], ['16:30', 'Taglio', 'Paola V.']]
          .filter((a) => a[0] !== st.slot).concat([[st.slot, s[0], st.nome || 'Cliente', 1]]).sort((a, b) => a[0].localeCompare(b[0]));
        body = '<div class="dm-done">' + CONFETTI + '<span class="dm-check">✓</span><b>Prenotato, ' + esc(st.nome || 'grazie') + '!</b><span class="dm-sum">' + s[0] + ' con ' + who + ' · <span style="text-transform:capitalize">' + fmtDay.format(d) + '</span> alle ' + st.slot + '</span>' +
          '<div class="dm-cal"><span>Aggiungi al calendario</span><button type="button" class="dm-mini" tabindex="-1">Google</button><button type="button" class="dm-mini" tabindex="-1">Apple</button></div></div>' +
          ownerBox('Agenda di ' + who + ' · ' + fmtShort.format(d), '<ul class="dm-agenda">' + agenda.map((a) => '<li' + (a[3] ? ' class="new"' : '') + '><time>' + a[0] + '</time><span><b>' + esc(a[2]) + '</b>' + a[1] + '</span>' + (a[3] ? '<em>Nuova</em>' : '') + '</li>').join('') + '</ul>' +
            (st.wa ? '<p class="dm-owner-n">Promemoria WhatsApp programmato: il giorno prima alle 18:00</p>' : '')) +
          '<p class="demo-note" style="text-align:center">Questa è una demo: non è stato prenotato nulla.</p><p style="text-align:center"><button type="button" class="dm-link" data-restart>Prova di nuovo</button></p>';
      }
      root.innerHTML = head + (st.step < 4 ? dmSteps(['Servizio', 'Con chi', 'Quando', 'Dati'], st.step + 1) : '') + '<div class="dm-body in">' + body + '</div>';
    });
    root.addEventListener('click', (e) => {
      const b = e.target.closest('button');
      if (!b || b.disabled) return;
      const ds = b.dataset;
      if (ds.serv) { st.serv = +ds.serv; st.step = 1; }
      else if (ds.staff) { st.staff = +ds.staff; st.day = null; st.slot = null; st.step = 2; }
      else if (ds.day) { st.day = +ds.day; st.slot = null; }
      else if (ds.slot) { st.slot = ds.slot; }
      else if (ds.go) { st.step = +ds.go; }
      else if (ds.tog) { st.wa = !st.wa; b.setAttribute('aria-pressed', String(st.wa)); return; }
      else if ('confirm' in ds) {
        st.step = 4;
        const who = STAFF[st.staff][0] === 'Chi è libero' ? 'Giulia' : STAFF[st.staff][0];
        setTimeout(() => notify(root, 'Nuova prenotazione', SERV[st.serv][0] + ' con ' + who + ' · ' + fmtShort.format(days[st.day]) + ' alle ' + st.slot + ' · ' + (st.nome || 'cliente')), 700);
      }
      else if ('restart' in ds) { st = blank(); }
      else return;
      render();
      const first = root.querySelector('.dm-body button:not(:disabled), .dm-body input');
      if (e.detail === 0 && e.isTrusted && first) first.focus();
    });
    root.addEventListener('input', (e) => {
      const f = e.target.dataset.f;
      if (!f) return;
      st[f] = e.target.value.trim();
      const c = root.querySelector('[data-confirm]');
      if (c) c.disabled = !(st.nome && st.tel);
    });
    root.addEventListener('demo:reset', () => { st = blank(); render(); });
    render();
  }

  /* --- Demo 2: preventivo con stima, foto, zona e richiamata --- */
  function demoQuote(root) {
    const TIPI = [["Perdita d'acqua", 80, 150], ['Caldaia', 90, 180], ['Scarico intasato', 70, 120], ['Bagno nuovo', 4500, 9000], ['Altro', 0, 0]];
    const URG = [['Oggi stesso', 30], ['Entro la settimana', 0], ['Non è urgente', -10]];
    const ZONE = ['Como', 'Cantù', 'Erba', 'Altro comune'];
    const blank = () => ({ step: 0, tipo: null, urg: null, foto: false, zona: null, nome: '', tel: '', quando: null });
    let st = blank();
    const head = dmHead('B', '#0e7490', 'Idraulica Bianchi', 'Preventivo gratuito · risposta in 2 ore', '<span class="dm-rate">Pronto intervento</span>');
    const eur = (n) => n.toLocaleString('it-IT') + ' €';
    const estimate = () => {
      if (st.tipo === null) return '';
      const t = TIPI[st.tipo];
      if (!t[1]) return '<div class="qt-est"><small>Stima indicativa</small><b>Su misura</b><span>Ti diamo una cifra dopo una breve telefonata.</span></div>';
      const add = st.urg !== null ? URG[st.urg][1] : 0;
      return '<div class="qt-est"><small>Stima indicativa</small><b>' + eur(t[1] + Math.max(add, 0)) + ' – ' + eur(t[2] + add) + '</b><span>' +
        (st.urg === 0 ? '+30 € uscita in giornata' : st.urg === 2 ? '−10 € se possiamo organizzarci' : 'Prezzo finale dopo il sopralluogo') + '</span></div>';
    };
    const chips = (key, list) => '<div class="dm-chips">' + list.map((o, i) => '<button type="button" class="dm-chip" style="--n:' + i + '" data-' + key + '="' + i + '" aria-pressed="' + (st[key] === i) + '">' + (Array.isArray(o) ? o[0] : o) + '</button>').join('') + '</div>';
    const foot = (next, label, ok) => '<div class="bk-foot">' + (st.step > 0 ? '<button type="button" class="dm-link" data-prev>Indietro</button>' : '<span></span>') +
      '<button type="button" class="dm-btn" ' + next + (ok ? '' : ' disabled') + '>' + label + '</button></div>';
    const render = () => {
      let body = '';
      if (st.step === 0) body = '<p class="dm-q">Che intervento ti serve?</p>' + chips('tipo', TIPI) + estimate() + foot('data-next', 'Avanti', st.tipo !== null);
      else if (st.step === 1) body = '<p class="dm-q">Quanto è urgente?</p>' + chips('urg', URG) + estimate() + foot('data-next', 'Avanti', st.urg !== null);
      else if (st.step === 2) {
        body = '<p class="dm-q">Hai una foto del problema?</p>' + (st.foto
          ? '<div class="qt-file"><span class="qt-thumb"></span><div><b>foto_problema.jpg</b><small>1,2 MB · caricata</small><span class="qt-prog"><i></i></span></div><button type="button" class="dm-link" data-unfoto>Rimuovi</button></div>'
          : '<button type="button" class="qt-up" data-foto><span aria-hidden="true">+</span><b>Aggiungi una foto</b><small>facoltativo · aiuta a capire subito</small></button>') +
          '<p class="dm-q" style="margin-top:16px">Dove?</p>' + chips('zona', ZONE) +
          (st.zona !== null ? '<p class="qt-ok">' + (st.zona < 3 ? '✓ Zona servita: uscita gratuita a ' + ZONE[st.zona] : 'Ti diciamo noi se ci arriviamo') + '</p>' : '') +
          foot('data-next', 'Avanti', st.zona !== null);
      } else if (st.step === 3) {
        body = '<p class="dm-q">A chi mandiamo il preventivo?</p><div class="qt-fields">' +
          '<label>Nome<input class="dm-input" data-f="nome" autocomplete="off" value="' + esc(st.nome) + '"></label>' +
          '<label>Telefono<input class="dm-input" data-f="tel" type="tel" inputmode="tel" autocomplete="off" value="' + esc(st.tel) + '"></label></div>' +
          '<p class="dm-q" style="margin-top:14px;font-size:14.5px">Quando ti richiamiamo?</p>' + chips('quando', ['Mattina', 'Pomeriggio', 'Sera']) +
          foot('data-send', 'Invia richiesta', st.nome && st.tel);
      } else {
        const t = TIPI[st.tipo]; const u = URG[st.urg];
        const est = t[1] ? eur(t[1] + Math.max(u[1], 0)) + ' – ' + eur(t[2] + u[1]) : 'da definire';
        body = '<div class="dm-done">' + CONFETTI + '<span class="dm-check">✓</span><b>Richiesta n. 147 inviata!</b><span class="dm-sum">Ti richiamiamo entro 2 ore' + (st.quando !== null ? ', di ' + ['mattina', 'pomeriggio', 'sera'][st.quando] : '') + '</span></div>' +
          ownerBox('Email ricevuta · adesso', '<div class="dm-mail"><p><small>Da</small>Sito web · modulo preventivi</p><p><small>Oggetto</small><b>Preventivo · ' + esc(t[0]) + ' · ' + u[0] + '</b></p>' +
            '<dl><dt>Cliente</dt><dd>' + esc(st.nome || '—') + ' · ' + esc(st.tel || '—') + '</dd><dt>Zona</dt><dd>' + ZONE[st.zona] + '</dd><dt>Richiamare</dt><dd>' + (st.quando !== null ? ['Mattina', 'Pomeriggio', 'Sera'][st.quando] : 'Quando vuoi') + '</dd><dt>Stima</dt><dd>' + est + '</dd></dl>' +
            (st.foto ? '<span class="dm-attach"><span class="qt-thumb"></span>foto_problema.jpg</span>' : '') + '</div>') +
          '<p class="demo-note" style="text-align:center">Questa è una demo: non è stato inviato nulla.</p><p style="text-align:center"><button type="button" class="dm-link" data-restart>Prova di nuovo</button></p>';
      }
      const pct = st.step >= 4 ? 100 : ((st.step + 1) / 4) * 100;
      root.innerHTML = head + (st.step < 4 ? dmSteps(['Intervento', 'Urgenza', 'Foto e zona', 'Contatti'], st.step + 1) : '<div class="qt-bar" style="margin:12px 18px 0"><i style="width:' + pct + '%"></i></div>') + '<div class="dm-body in">' + body + '</div>';
    };
    root.addEventListener('click', (e) => {
      const b = e.target.closest('button');
      if (!b || b.disabled) return;
      const ds = b.dataset;
      if (ds.tipo) st.tipo = +ds.tipo;
      else if (ds.urg) st.urg = +ds.urg;
      else if (ds.zona) st.zona = +ds.zona;
      else if (ds.quando) { st.quando = +ds.quando; $$('[data-quando]', root).forEach((c) => c.setAttribute('aria-pressed', String(c === b))); return; }
      else if ('foto' in ds) st.foto = true;
      else if ('unfoto' in ds) st.foto = false;
      else if ('next' in ds) st.step += 1;
      else if ('prev' in ds) st.step -= 1;
      else if ('send' in ds) { st.step = 4; setTimeout(() => notify(root, 'Nuova richiesta di preventivo', TIPI[st.tipo][0] + ' · ' + URG[st.urg][0] + ' · ' + ZONE[st.zona] + ' · ' + (st.nome || 'cliente')), 700); }
      else if ('restart' in ds) st = blank();
      else return;
      render();
    });
    root.addEventListener('input', (e) => {
      const f = e.target.dataset.f;
      if (!f) return;
      st[f] = e.target.value.trim();
      const send = root.querySelector('[data-send]');
      if (send) send.disabled = !(st.nome && st.tel);
    });
    root.addEventListener('demo:reset', () => { st = blank(); render(); });
    render();
  }

  /* --- Demo 3: galleria con filtri, prima/dopo e richiesta "voglio un lavoro così" --- */
  function demoGallery(root) {
    /* foto di esempio (illustrazioni nella cartella img) */
    const items = [['Bagni', 'Bagno · Monza', 'bagno-monza', '2 settimane'], ['Cucine', 'Cucina · Lecco', 'cucina-lecco', '3 settimane'], ['Esterni', 'Facciata · Como', 'facciata-como', '5 settimane'], ['Bagni', 'Doccia walk-in · Milano', 'bagno-milano', '10 giorni'],
      ['Cucine', 'Cucina a isola · Bergamo', 'cucina-bergamo', '4 settimane'], ['Esterni', 'Giardino · Varese', 'giardino-varese', '2 settimane'], ['Bagni', 'Bagno di servizio · Lodi', 'bagno-lodi', '8 giorni'], ['Cucine', 'Open space · Pavia', 'cucina-pavia', '6 settimane']];
    let filter = 'Tutti';
    let open = -1;
    const style = (i) => '--g:url(img/' + items[i][2] + '.svg) center/cover;--s:none';
    const visible = () => items.map((it, i) => i).filter((i) => filter === 'Tutti' || items[i][0] === filter);
    root.innerHTML = dmHead('V', '#15803d', 'Ristrutturazioni Verdi', 'I nostri lavori', '<span class="dm-rate">★ 4,9 <small>· Google</small></span>') +
      '<div class="dm-body"><div class="gl-stats"><span><b>120+</b>lavori finiti</span><span><b>15</b>anni in zona</span><span><b>0</b>pensieri: chiavi in mano</span></div><div class="dm-chips" style="margin-bottom:14px">' +
      ['Tutti', 'Bagni', 'Cucine', 'Esterni'].map((f) => '<button type="button" class="dm-chip" data-filter="' + f + '" aria-pressed="' + (f === filter) + '">' + f + '</button>').join('') +
      '</div><div class="gl-grid">' +
      items.map((it, i) => '<button type="button" class="gl-item" data-open="' + i + '" style="' + style(i) + '" aria-label="Apri foto: ' + it[1] + '"><span>' + it[1] + '</span></button>').join('') +
      '</div><p class="demo-note">Immagini di esempio. Sul tuo sito ci sono le foto vere dei tuoi lavori.</p></div>';
    const box = document.createElement('div');
    box.className = 'gl-box';
    box.hidden = true;
    box.innerHTML = '<div class="gl-big"><div class="gl-before"></div><span class="gl-line"></span><span class="gl-tag b">Prima</span><span class="gl-tag a">Dopo</span>' +
      '<input class="gl-ba" type="range" min="0" max="100" value="50" aria-label="Confronta prima e dopo"></div>' +
      '<div class="gl-info"><div><b class="gl-cap"></b><small class="gl-meta"></small></div><button type="button" class="dm-btn" data-like>Voglio un lavoro così</button></div>' +
      '<div class="gl-nav"><button type="button" data-step="-1" aria-label="Foto precedente">‹</button><span class="gl-count"></span><button type="button" data-step="1" aria-label="Foto successiva">›</button></div>' +
      '<div class="gl-form" hidden></div>' +
      '<button type="button" class="gl-close" aria-label="Chiudi">×</button>';
    root.appendChild(box);
    const big = box.querySelector('.gl-big');
    const ba = box.querySelector('.gl-ba');
    const form = box.querySelector('.gl-form');
    const setBa = (v) => big.style.setProperty('--ba', v + '%');
    const showPhoto = () => {
      const v = visible();
      big.style.setProperty('--g', 'url(img/' + items[open][2] + '.svg) center/cover');
      big.classList.remove('swap'); void big.offsetWidth; big.classList.add('swap');
      ba.value = 50; setBa(50);
      box.querySelector('.gl-cap').textContent = items[open][1];
      box.querySelector('.gl-meta').textContent = 'Lavori finiti in ' + items[open][3] + ' · chiavi in mano';
      box.querySelector('.gl-count').textContent = (v.indexOf(open) + 1) + ' / ' + v.length;
    };
    const move = (d) => { const v = visible(); open = v[(v.indexOf(open) + d + v.length) % v.length]; showPhoto(); };
    const closeForm = () => { form.hidden = true; form.innerHTML = ''; };
    const close = () => { box.hidden = true; open = -1; closeForm(); };
    ba.addEventListener('input', () => setBa(ba.value));
    root.addEventListener('demo:reset', () => { close(); const t = root.querySelector('[data-filter="Tutti"]'); if (t && filter !== 'Tutti') t.click(); });
    root.addEventListener('input', (e) => {
      if (!e.target.dataset.gf) return;
      const s = form.querySelector('[data-gsend]');
      if (s) s.disabled = !$$('[data-gf]', form).every((i) => i.value.trim());
    });
    root.addEventListener('click', (e) => {
      const b = e.target.closest('button');
      if (!b || b.disabled) return;
      if (b.dataset.filter) {
        filter = b.dataset.filter;
        $$('[data-filter]', root).forEach((c) => c.setAttribute('aria-pressed', String(c === b)));
        let n = 0;
        $$('.gl-item', root).forEach((el, i) => {
          const on = filter === 'Tutti' || items[i][0] === filter;
          el.classList.toggle('out', !on);
          el.classList.remove('in');
          if (on) { void el.offsetWidth; el.style.animationDelay = (n++ * 0.05) + 's'; el.classList.add('in'); }
        });
      } else if (b.dataset.open) {
        open = +b.dataset.open;
        box.hidden = false;
        root.closest('.ft-panel').scrollTop = 0;
        showPhoto();
        if (e.isTrusted) box.querySelector('.gl-close').focus({ preventScroll: true });
      } else if (b.dataset.step) move(+b.dataset.step);
      else if ('like' in b.dataset) {
        form.hidden = false;
        form.innerHTML = '<p class="dm-q">Un lavoro come <em>' + items[open][1] + '</em>?</p><p class="gl-form-s">Lasciaci un contatto: ti richiamiamo per un sopralluogo gratuito.</p>' +
          '<div class="qt-fields"><label>Nome<input class="dm-input" data-gf="nome" autocomplete="off"></label><label>Telefono<input class="dm-input" data-gf="tel" type="tel" inputmode="tel" autocomplete="off"></label></div>' +
          '<div class="bk-foot"><button type="button" class="dm-link" data-gback>Torna alla foto</button><button type="button" class="dm-btn" data-gsend disabled>Richiedi sopralluogo</button></div>';
      } else if ('gback' in b.dataset) closeForm();
      else if ('gsend' in b.dataset) {
        const nome = form.querySelector('[data-gf="nome"]').value.trim();
        const what = items[open][1];
        form.innerHTML = '<div class="dm-done">' + CONFETTI + '<span class="dm-check">✓</span><b>Fatto, ' + esc(nome) + '!</b><span class="dm-sum">Sopralluogo gratuito per: ' + what + '</span><p class="demo-note">Questa è una demo: non è stato inviato nulla.</p><button type="button" class="dm-link" data-gback>Torna alla galleria</button></div>';
        setTimeout(() => notify(root, 'Richiesta dalla galleria', 'Lavoro simile a «' + what + '» · ' + nome), 600);
      } else if (b.classList.contains('gl-close')) close();
    });
    box.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') { e.stopPropagation(); close(); }
      if (e.target === ba || !form.hidden) return;
      if (e.key === 'ArrowRight') move(1);
      if (e.key === 'ArrowLeft') move(-1);
    });
  }

  /* --- Demo 4: servizi con ricerca, pacchetto scontato e ordine di lavoro --- */
  function demoServices(root) {
    const S = [['Tagliando completo', 'Manutenzione', '60 min', 129], ['Cambio olio e filtro', 'Manutenzione', '30 min', 59], ['Cambio gomme', 'Gomme', '40 min', 40],
      ['Equilibratura', 'Gomme', '20 min', 25], ['Deposito gomme', 'Gomme', 'a stagione', 35], ['Diagnosi elettronica', 'Controlli', '30 min', 35],
      ['Ricarica clima', 'Controlli', '45 min', 69], ['Controllo freni', 'Controlli', '30 min', 30]];
    const WHEN = ['Domani 8:30', 'Giovedì 14:00', 'Venerdì 9:00', 'Sabato 8:00'];
    let cat = 'Tutti';
    let q = '';
    let phase = 'list';
    const bk = { when: null, targa: '', auto: false };
    const picked = new Set();
    const total = () => { const t = [...picked].reduce((a, i) => a + S[i][3], 0); const disc = picked.size >= 2 ? Math.round(t * 0.1) : 0; return [t, disc, t - disc]; };
    root.innerHTML = dmHead('M', '#b45309', 'Officina Moretti', 'Servizi e prezzi · prenota online', '<span class="dm-rate">Auto sostitutiva</span>') +
      '<div class="sv-tools"><input class="dm-input" type="search" placeholder="Cerca un servizio, es. gomme" aria-label="Cerca un servizio"><div class="dm-chips">' +
      ['Tutti', 'Manutenzione', 'Gomme', 'Controlli'].map((c) => '<button type="button" class="dm-chip" data-cat="' + c + '" aria-pressed="' + (c === cat) + '">' + c + '</button>').join('') +
      '</div></div><div class="sv-list"></div><div class="sv-cart" aria-live="polite"><span></span><button type="button" class="dm-btn" data-book>Prenota</button></div>';
    const tools = root.querySelector('.sv-tools');
    const list = root.querySelector('.sv-list');
    const cart = root.querySelector('.sv-cart');
    const renderList = () => {
      phase = 'list'; tools.hidden = false;
      const rows = S.map((s, i) => [s, i]).filter(([s]) => (cat === 'Tutti' || s[1] === cat) && s[0].toLowerCase().includes(q));
      list.innerHTML = (picked.size === 1 ? '<p class="sv-tip">Aggiungi un altro servizio: dal secondo in poi <b>−10% sul pacchetto</b></p>' : '') + (rows.length
        ? rows.map(([s, i], n) => '<div class="sv-item" style="animation-delay:' + n * 0.04 + 's"><div><b>' + s[0] + '</b><small>' + s[2] + ' · ' + s[1] + '</small></div><span class="sv-price">' + s[3] + ' €</span><button type="button" class="sv-add" data-add="' + i + '" aria-pressed="' + picked.has(i) + '" aria-label="' + (picked.has(i) ? 'Togli ' : 'Aggiungi ') + s[0] + '">+</button></div>').join('') +
          '<p class="demo-note">Servizi e prezzi di esempio.</p>'
        : '<p class="sv-empty">Nessun servizio trovato. Prova con un\'altra parola.</p>');
    };
    const renderCart = () => {
      const [t, disc, tot] = total();
      cart.querySelector('span').innerHTML = picked.size + (picked.size === 1 ? ' servizio' : ' servizi') + (disc ? ' · <s>' + t + ' €</s> <em class="sv-disc">−10%</em>' : '') + ' · <b>' + tot + ' €</b>';
      cart.classList.toggle('show', picked.size > 0 && phase === 'list');
    };
    const renderBook = () => {
      phase = 'book'; tools.hidden = true; renderCart();
      const [, disc, tot] = total();
      list.innerHTML = '<div class="sv-book dm-body in" style="padding:0"><div class="bk-recap"><span>' + [...picked].map((i) => S[i][0]).join(' + ') + '</span><b>' + tot + ' €</b></div>' +
        (disc ? '<p class="qt-ok">✓ Pacchetto: risparmi ' + disc + ' €</p>' : '') +
        '<p class="dm-q">Quando porti l\'auto?</p><div class="dm-chips">' + WHEN.map((w, i) => '<button type="button" class="dm-chip" data-when="' + i + '" aria-pressed="' + (bk.when === i) + '">' + w + '</button>').join('') + '</div>' +
        '<div class="qt-fields" style="margin-top:14px"><label>Targa<input class="dm-input sv-targa" data-f="targa" autocomplete="off" placeholder="AB 123 CD" value="' + esc(bk.targa) + '"></label></div>' +
        dmToggle('auto', bk.auto, 'Mi serve l\'auto sostitutiva') +
        '<div class="bk-foot"><button type="button" class="dm-link" data-reset>Indietro</button><button type="button" class="dm-btn" data-ok' + (bk.when !== null && bk.targa ? '' : ' disabled') + '>Conferma appuntamento</button></div></div>';
    };
    const okState = () => { const b = root.querySelector('[data-ok]'); if (b) b.disabled = !(bk.when !== null && bk.targa); };
    root.querySelector('.sv-tools input').addEventListener('input', (e) => { q = e.target.value.trim().toLowerCase(); renderList(); });
    root.addEventListener('input', (e) => { if (e.target.dataset.f === 'targa') { bk.targa = e.target.value.trim().toUpperCase(); okState(); } });
    root.addEventListener('click', (e) => {
      const b = e.target.closest('button');
      if (!b || b.disabled) return;
      if (b.dataset.cat) {
        cat = b.dataset.cat;
        $$('[data-cat]', root).forEach((c) => c.setAttribute('aria-pressed', String(c === b)));
        renderList();
      } else if (b.dataset.add) {
        const i = +b.dataset.add;
        picked.has(i) ? picked.delete(i) : picked.add(i);
        renderList(); renderCart();
      } else if ('book' in b.dataset) { renderBook(); }
      else if (b.dataset.when) { bk.when = +b.dataset.when; $$('[data-when]', root).forEach((c) => c.setAttribute('aria-pressed', String(c === b))); okState(); }
      else if (b.dataset.tog) { bk.auto = !bk.auto; b.setAttribute('aria-pressed', String(bk.auto)); }
      else if ('ok' in b.dataset) {
        const names = [...picked].map((i) => S[i][0]);
        const [, , tot] = total();
        phase = 'done';
        list.innerHTML = '<div class="dm-done">' + CONFETTI + '<span class="dm-check">✓</span><b>Appuntamento confermato</b><span class="dm-sum">' + WHEN[bk.when] + ' · ' + esc(bk.targa) + '</span></div>' +
          ownerBox('Ordine di lavoro n. 58', '<div class="dm-ticket"><div><small>Targa</small><b class="sv-plate">' + esc(bk.targa) + '</b></div><div><small>Ingresso</small><b>' + WHEN[bk.when] + '</b></div>' +
            '<ul>' + names.map((n) => '<li>' + n + '</li>').join('') + '</ul><div class="dm-ticket-f"><span>' + (bk.auto ? 'Preparare auto sostitutiva' : 'Nessuna auto sostitutiva') + '</span><b>' + tot + ' €</b></div></div>') +
          '<p class="demo-note" style="text-align:center">Questa è una demo: non è stato prenotato nulla.</p><p style="text-align:center"><button type="button" class="dm-link" data-reset>Torna ai servizi</button></p>';
        const msg = WHEN[bk.when] + ' · ' + bk.targa + ' · ' + names.join(', ');
        setTimeout(() => notify(root, 'Nuovo appuntamento in officina', msg), 700);
        picked.clear(); Object.assign(bk, { when: null, targa: '', auto: false }); renderCart();
      } else if ('reset' in b.dataset) { renderList(); renderCart(); }
    });
    root.addEventListener('demo:reset', () => {
      q = ''; cat = 'Tutti'; picked.clear(); Object.assign(bk, { when: null, targa: '', auto: false });
      root.querySelector('.sv-tools input').value = '';
      $$('[data-cat]', root).forEach((c) => c.setAttribute('aria-pressed', String(c.dataset.cat === 'Tutti')));
      renderList(); renderCart();
    });
    renderList(); renderCart();
  }

  [['#demoBook', demoBooking], ['#demoQuote', demoQuote], ['#demoGallery', demoGallery], ['#demoServices', demoServices]].forEach(([sel, fn]) => {
    const el = $(sel);
    if (el) { try { fn(el); } catch (err) { /* la demo resta col testo di riserva */ } }
  });

  /* =========================================================
     FUNZIONALITÀ: vantaggi, notifica "così arriva a te",
     demo automatica con cursore fantasma
     ========================================================= */
  const ftPanels = $('.ft-panels');
  if (ftPanels) {
    const WHY = {
      'pan-pren': [['24/7', 'Prenotazioni a qualsiasi ora', 'Anche di sera o a negozio chiuso, senza rispondere al telefono.'], ['0', 'Niente doppie prenotazioni', 'Ogni collaboratore ha la sua agenda: il cliente vede solo gli orari liberi.'], ['✓', 'Promemoria automatici', 'Il giorno prima parte un messaggio al cliente: meno appuntamenti dimenticati.']],
      'pan-prev': [['1·2·3', 'Richieste complete', 'Intervento, urgenza, zona e foto: sai già tutto prima di richiamare.'], ['€', 'Una stima subito', 'Il cliente vede una cifra indicativa e ti chiama già informato.'], ['@', 'Tutto in un\'email ordinata', 'Pronta da leggere, inoltrare o archiviare.']],
      'pan-gal': [['★', 'I lavori migliori in vetrina', 'Le foto convincono più di qualsiasi descrizione.'], ['⇆', 'Prima e dopo', 'Il cliente vede la differenza scorrendo con un dito.'], ['→', 'Dalla foto alla richiesta', 'Con "Voglio un lavoro così" il contatto ti arriva già con il lavoro che gli piace.']],
      'pan-serv': [['€', 'Prezzi chiari', 'Meno domande ripetute su costi e durata.'], ['%', 'Pacchetti e sconti automatici', 'Più servizi insieme, il prezzo si aggiorna da solo.'], ['▤', 'Ordine di lavoro pronto', 'Targa, servizi e orario: in officina sapete già cosa fare.']]
    };
    const whyList = $('#ftWhyList');
    const renderWhy = (id) => {
      if (!whyList || !WHY[id]) return;
      whyList.innerHTML = WHY[id].map((w, i) => '<li style="--n:' + i + '"><span class="fw-ico">' + w[0] + '</span><div><b>' + w[1] + '</b><span>' + w[2] + '</span></div></li>').join('');
    };
    document.addEventListener('ft:tab', (e) => renderWhy(e.detail));

    /* notifica come la riceve il titolare */
    const nt = $('#ftNotify');
    let ntTimer = null;
    ftPanels.addEventListener('demo:done', (e) => {
      if (!nt) return;
      $('#fnTitle').textContent = e.detail.title;
      $('#fnText').textContent = e.detail.text;
      nt.hidden = false;
      nt.classList.remove('show'); void nt.offsetWidth; nt.classList.add('show');
      clearTimeout(ntTimer);
      ntTimer = setTimeout(() => { nt.classList.remove('show'); setTimeout(() => { nt.hidden = true; }, 400); }, 5200);
    });

    /* demo automatica: un cursore mostra come si usa, finché il visitatore non tocca */
    const ghost = $('#ftGhost');
    const autoTag = $('#ftAuto');
    const touched = new Set();
    let current = 'pan-pren';
    let inView = false;
    let runId = 0;
    const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
    const stopAll = () => { runId++; ghost.classList.remove('on'); };
    const setTag = () => {
      if (!autoTag) return;
      autoTag.textContent = touched.has(current) ? 'Tocca a te: prova la demo' : 'Demo automatica · tocca per provarla tu';
      autoTag.classList.toggle('mine', touched.has(current));
    };

    async function play(id) {
      const my = ++runId;
      const ok = () => { if (my !== runId || !inView || touched.has(id) || current !== id) throw new Error('stop'); };
      const panel = document.getElementById(id);
      const q = (sel, i = 0) => {
        const els = $$(sel, panel).filter((el) => !el.disabled && el.offsetParent !== null);
        if (!els[i]) throw new Error('missing ' + sel);
        return els[i];
      };
      const moveTo = async (el) => {
        ok();
        const er = el.getBoundingClientRect(); const pr = panel.getBoundingClientRect();
        if (er.bottom > pr.bottom - 20) panel.scrollTop += er.bottom - pr.bottom + 60;
        if (er.top < pr.top + 10) panel.scrollTop -= pr.top - er.top + 40;
        /* strisce orizzontali (es. i giorni del calendario) */
        const hs = el.closest('.hs-x');
        if (hs) {
          const hr = hs.getBoundingClientRect(); const e2 = el.getBoundingClientRect();
          if (e2.right > hr.right - 10 || e2.left < hr.left + 10) hs.scrollLeft += e2.left - hr.left - (hr.width - e2.width) / 2;
        }
        const r = el.getBoundingClientRect(); const fr = ftPanels.getBoundingClientRect();
        ghost.style.transform = 'translate(' + (r.left - fr.left + r.width * 0.55) + 'px,' + (r.top - fr.top + r.height * 0.6) + 'px)';
        await sleep(850); ok();
      };
      const tap = async (sel, i = 0, pause = 900) => {
        const el = q(sel, i); await moveTo(el);
        ghost.classList.add('click'); await sleep(220); ok(); el.click(); ghost.classList.remove('click');
        await sleep(pause); ok();
      };
      const type = async (sel, text, pause = 600) => {
        const el = q(sel); await moveTo(el);
        ghost.classList.add('click'); await sleep(160); ghost.classList.remove('click');
        el.value = '';
        el.dispatchEvent(new Event('input', { bubbles: true }));
        for (const ch of text) { ok(); el.value += ch; el.dispatchEvent(new Event('input', { bubbles: true })); await sleep(90); }
        await sleep(pause); ok();
      };
      /* guarda un riquadro (es. il lato titolare) e si ferma a leggerlo */
      const look = async (sel, pause) => { const el = q(sel); await moveTo(el); await sleep(pause); ok(); };
      /* trascina un cursore a scorrimento (es. prima/dopo) */
      const slide = async (sel, to, ms = 1500) => {
        const el = q(sel);
        const pos = (v) => { const r = el.getBoundingClientRect(); const fr = ftPanels.getBoundingClientRect(); return 'translate(' + (r.left - fr.left + r.width * v / 100) + 'px,' + (r.top - fr.top + r.height * 0.5) + 'px)'; };
        ok(); ghost.style.transform = pos(+el.value); await sleep(850); ok();
        const from = +el.value; const n = Math.max(1, Math.round(ms / 30));
        ghost.classList.add('click'); ghost.style.transition = 'opacity .4s';
        try {
          for (let k = 1; k <= n; k++) {
            ok();
            const t = k / n; const e = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
            const v = from + (to - from) * e;
            el.value = v; el.dispatchEvent(new Event('input', { bubbles: true }));
            ghost.style.transform = pos(v);
            await sleep(30);
          }
        } finally { ghost.style.transition = ''; ghost.classList.remove('click'); }
        await sleep(500); ok();
      };
      const SCRIPTS = {
        'pan-pren': async () => {
          await tap('[data-serv="0"]', 0, 1000); await tap('[data-staff="0"]', 0, 1100);
          await tap('.bk-dd', 1, 1200); await tap('.bk-slot', 3, 1000); await tap('[data-go="3"]', 0, 900);
          await type('[data-f="nome"]', 'Laura'); await type('[data-f="tel"]', '333 123 4567', 500);
          await tap('[data-confirm]', 0, 1800); await look('.dm-owner', 5500);
        },
        'pan-prev': async () => {
          await tap('[data-tipo="0"]', 0, 1400); await tap('[data-next]', 0, 800);
          await tap('[data-urg="0"]', 0, 1400); await tap('[data-next]', 0, 800);
          await tap('[data-foto]', 0, 1700); await tap('[data-zona="0"]', 0, 1100); await tap('[data-next]', 0, 800);
          await type('[data-f="nome"]', 'Laura'); await type('[data-f="tel"]', '333 123 4567', 400);
          await tap('[data-quando="0"]', 0, 700);
          await tap('[data-send]', 0, 1800); await look('.dm-owner', 5500);
        },
        'pan-gal': async () => {
          await tap('[data-filter="Cucine"]', 0, 1300); await tap('.gl-item:not(.out)', 1, 1200);
          await slide('.gl-ba', 94, 1700); await slide('.gl-ba', 6, 2400); await slide('.gl-ba', 50, 900);
          await tap('[data-like]', 0, 1000);
          await type('[data-gf="nome"]', 'Marco'); await type('[data-gf="tel"]', '347 555 0101', 400);
          await tap('[data-gsend]', 0, 5200); await tap('.gl-close', 0, 1000);
        },
        'pan-serv': async () => {
          await type('.sv-tools input', 'gomme', 900); await tap('[data-add]', 0, 900);
          await type('.sv-tools input', '', 300);
          await tap('[data-cat="Manutenzione"]', 0, 900); await tap('[data-add]', 0, 1600);
          await tap('[data-book]', 0, 1200); await tap('[data-when="0"]', 0, 800);
          await type('[data-f="targa"]', 'AB 123 CD', 400); await tap('[data-tog]', 0, 900);
          await tap('[data-ok]', 0, 1800); await look('.dm-owner', 5500);
        }
      };
      try {
        ghost.classList.add('on');
        for (;;) {
          ok();
          const demo = panel.firstElementChild;
          if (demo) demo.dispatchEvent(new CustomEvent('demo:reset'));
          panel.scrollTop = 0;
          ghost.style.transform = 'translate(70%, 75%)';
          await sleep(1000);
          await SCRIPTS[id]();
          await sleep(1200);
        }
      } catch (err) {
        if (my === runId) ghost.classList.remove('on');
      }
    }
    const maybePlay = () => { setTag(); if (!reduce && inView && !touched.has(current)) play(current); else stopAll(); };
    document.addEventListener('ft:tab', (e) => { current = e.detail; stopAll(); maybePlay(); });
    /* al primo tocco vero del visitatore la demo automatica si ferma e lascia fare a lui */
    ['pointerdown', 'keydown'].forEach((ev) => ftPanels.addEventListener(ev, (e) => {
      if (!e.isTrusted || touched.has(current)) return;
      touched.add(current); stopAll(); setTag();
    }, { passive: true }));
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(([e]) => { inView = e.isIntersecting; if (inView) maybePlay(); else stopAll(); }, { threshold: 0.45 }).observe(ftPanels);
    }
    setTag();
  }

  /* ---------- Modulo contatti ---------- */
  const form = $('#contactForm');
  const status = $('#formStatus');
  const pageStart = Date.now();
  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (!form.checkValidity()) { form.reportValidity(); return; }
      const fd = new FormData(form);
      const btn = form.querySelector('button[type="submit"]');
      if (CONFIG.formEndpoint) {
        btn.disabled = true;
        status.textContent = 'Invio in corso…';
        const google = CONFIG.formEndpoint.includes('script.google.com');
        fd.append('dt', String(Math.round((Date.now() - pageStart) / 1000)));
        let r = null;
        try {
          /* Allo script Google si manda un modulo "semplice" (URL-encoded): niente controlli extra del browser */
          r = await fetch(CONFIG.formEndpoint, google
            ? { method: 'POST', body: new URLSearchParams(fd) }
            : { method: 'POST', body: fd, headers: { Accept: 'application/json' } });
        } catch (err) {
          /* La richiesta può essere partita anche se il browser non ci fa leggere la risposta */
          status.textContent = 'Non riusciamo a confermare l\'invio. Se non ti rispondiamo entro un giorno, riprova' + (CONFIG.email ? ' o scrivici a ' + CONFIG.email : '') + '.';
          btn.disabled = false;
          return;
        }
        let res = { ok: r.ok, msg: '' };
        try { const j = await r.json(); if (typeof j.ok === 'boolean') res = j; } catch (err) { /* risposta non JSON */ }
        if (r.ok && res.ok) {
          status.textContent = 'Richiesta inviata! Ti rispondiamo al più presto.';
          form.reset();
        } else {
          status.textContent = res.msg || ('Invio non riuscito. Riprova tra poco' + (CONFIG.email ? ' oppure scrivici a ' + CONFIG.email : '') + '.');
        }
        btn.disabled = false;
      } else if (CONFIG.email) {
        const d = Object.fromEntries(fd.entries());
        const body = 'Nome: ' + d.nome + '\nAttività: ' + (d.attivita || '-') + '\nEmail: ' + d.email + '\nServizio: ' + d.servizio + '\n\n' + (d.messaggio || '');
        window.location.href = 'mailto:' + CONFIG.email + '?subject=' + encodeURIComponent('Richiesta consulenza da ' + d.nome) + '&body=' + encodeURIComponent(body);
        status.textContent = 'Si sta aprendo la tua app email con il messaggio già pronto: premi Invia per mandarcelo.';
      } else {
        status.textContent = 'Il modulo non è ancora collegato: imposta formEndpoint in main.js.';
      }
    });
  }

  /* ---------- Sfondo animato dell'hero ---------- */
  const hero = $('.hero');
  const canvas = $('#heroCanvas');
  if (canvas && canvas.getContext) {
    const ctx = canvas.getContext('2d');
    let w = 0, h = 0, visible = true, mx = 0.72, my = 0.3, tmx = 0.72, tmy = 0.3;
    const blobs = [
      { c: '51,102,255', r: 0.62, x: 0.78, y: 0.22, sx: 0.12, sy: 0.1, s: 0.00019 },
      { c: '0,170,255', r: 0.42, x: 0.22, y: 0.82, sx: 0.16, sy: 0.1, s: 0.00025 },
      { c: '28,52,150', r: 0.7, x: 0.42, y: 0.18, sx: 0.2, sy: 0.08, s: 0.00015 },
      { c: '143,227,255', r: 0.24, x: 0.62, y: 0.55, sx: 0.22, sy: 0.18, s: 0.00031 }
    ];
    const size = () => {
      const r = canvas.getBoundingClientRect();
      w = canvas.width = Math.max(64, Math.round(r.width / 6));
      h = canvas.height = Math.max(64, Math.round(r.height / 6));
    };
    const draw = (t) => {
      ctx.globalCompositeOperation = 'source-over';
      ctx.fillStyle = '#050a18';
      ctx.fillRect(0, 0, w, h);
      ctx.globalCompositeOperation = 'lighter';
      const m = Math.max(w, h);
      blobs.forEach((b, i) => {
        const x = (b.x + Math.sin(t * b.s * 6.283 + i) * b.sx) * w;
        const y = (b.y + Math.cos(t * b.s * 5 + i * 2) * b.sy) * h;
        const g = ctx.createRadialGradient(x, y, 0, x, y, b.r * m);
        g.addColorStop(0, 'rgba(' + b.c + ',.5)');
        g.addColorStop(1, 'rgba(' + b.c + ',0)');
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, w, h);
      });
      mx += (tmx - mx) * 0.05; my += (tmy - my) * 0.05;
      const g = ctx.createRadialGradient(mx * w, my * h, 0, mx * w, my * h, 0.32 * m);
      g.addColorStop(0, 'rgba(91,134,255,.45)');
      g.addColorStop(1, 'rgba(91,134,255,0)');
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, w, h);
    };
    const loop = (t) => { draw(t); if (visible) requestAnimationFrame(loop); };
    size(); draw(0);
    if (!reduce) {
      requestAnimationFrame(loop);
      new IntersectionObserver(([e]) => {
        const v = e.isIntersecting;
        if (v && !visible) { visible = true; requestAnimationFrame(loop); }
        visible = v;
      }).observe(canvas);
    }
    window.addEventListener('resize', () => { size(); draw(performance.now()); });
    hero.addEventListener('pointermove', (e) => {
      const r = hero.getBoundingClientRect();
      tmx = (e.clientX - r.left) / r.width;
      tmy = (e.clientY - r.top) / r.height;
    });
  }

  /* =========================================================
     DA QUI IN POI: ANIMAZIONI GSAP
     Se la libreria non si carica, il sito resta completo e statico.
     ========================================================= */
  const loader = $('#loader');
  if (!hasGsap || reduce) {
    if (loader) loader.remove();
    return;
  }
  gsap.registerPlugin(ScrollTrigger);

  /* ---------- Scroll morbido ---------- */
  if (window.Lenis) {
    try {
      lenis = new Lenis({ lerp: 0.09, smoothWheel: true });
      lenis.on('scroll', ScrollTrigger.update);
      gsap.ticker.add((t) => lenis.raf(t * 1000));
      gsap.ticker.lagSmoothing(0);
    } catch (err) { lenis = null; }
  }

  /* ---------- Utilità: divide un testo in parole ---------- */
  function splitWords(el, cls) {
    const out = [];
    Array.from(el.childNodes).forEach((n) => {
      if (n.nodeType === 3) {
        const frag = document.createDocumentFragment();
        n.textContent.split(/(\s+)/).forEach((part, idx) => {
          if (!part) return;
          if (/^\s+$/.test(part)) { frag.appendChild(document.createTextNode(' ')); return; }
          /* punteggiatura attaccata alla parola precedente (es. "statici." o "questi?") */
          if (idx === 0 && out.length) { out[out.length - 1].appendChild(document.createTextNode(part)); return; }
          const wrap = document.createElement('span'); wrap.className = cls;
          const inner = document.createElement('span'); inner.textContent = part;
          wrap.appendChild(inner); frag.appendChild(wrap); out.push(inner);
        });
        el.replaceChild(frag, n);
      } else if (n.nodeType === 1 && n.tagName !== 'BR') {
        const wrap = document.createElement('span'); wrap.className = cls;
        const inner = document.createElement('span');
        el.replaceChild(wrap, n); inner.appendChild(n); wrap.appendChild(inner); out.push(inner);
      }
    });
    return out;
  }

  /* =========================================================
     SEZIONI BLOCCATE (create per prime, nell'ordine della pagina)
     ========================================================= */
  const mm = gsap.matchMedia();

  mm.add('(min-width: 900px)', () => {
    /* Servizi: scorrimento orizzontale */
    const sec = $('#servizi');
    const track = $('.hs-track', sec);
    const bar = $('#hsBar');
    sec.classList.add('hs-on');
    const dist = () => Math.max(0, track.scrollWidth - window.innerWidth);
    const hs = gsap.to(track, {
      x: () => -dist(),
      ease: 'none',
      scrollTrigger: {
        trigger: sec, start: 'top top', end: () => '+=' + dist(), pin: true, scrub: 0.8,
        invalidateOnRefresh: true,
        onUpdate: (s) => { if (bar) bar.style.transform = 'scaleX(' + s.progress + ')'; }
      }
    });
    $$('.svc', track).forEach((card) => {
      gsap.from($('.svc-body', card), { x: 140, opacity: 0, ease: 'none', scrollTrigger: { trigger: card, containerAnimation: hs, start: 'left 95%', end: 'left 45%', scrub: true } });
      gsap.from($('.mini', card), { scale: 0.82, rotate: -5, ease: 'none', scrollTrigger: { trigger: card, containerAnimation: hs, start: 'left 105%', end: 'left 40%', scrub: true } });
    });

    /* Il Refresh: il sito si trasforma mentre scorri */
    const rsec = $('#refresh');
    const list = $('#rpList');
    const items = $$('li', list);
    const o = { p: 0 };
    compare.classList.add('scrubbing');
    list.classList.add('scrub');
    setP(0);
    const tl = gsap.timeline({
      scrollTrigger: { trigger: rsec, start: 'top top', end: '+=190%', pin: true, scrub: 0.7 }
    });
    tl.fromTo(compare, { scale: 0.88, rotateX: 10, transformPerspective: 1400 }, { scale: 1, rotateX: 0, duration: 0.25, ease: 'power2.out' })
      .fromTo(o, { p: 0 }, { p: 100, duration: 1, ease: 'none', onUpdate: () => setP(o.p) }, 0.1)
      .to({}, { duration: 0.15 });

    /* Progetti: le card si impilano */
    const cards = $$('.p-card');
    cards.forEach((c, i) => {
      if (i === cards.length - 1) return;
      gsap.to($('.p-inner', c), { scale: 0.9, '--dim': 0.6, ease: 'none', scrollTrigger: { trigger: cards[i + 1], start: 'top bottom', end: 'top 20%', scrub: true } });
    });

    return () => {
      sec.classList.remove('hs-on');
      compare.classList.remove('scrubbing');
      list.classList.remove('scrub');
      if (range) range.value = 50;
      setP(50);
    };
  });

  mm.add('(max-width: 899px)', () => {
    /* Servizi: card impilate che si rimpiccioliscono */
    const svcs = $$('.svc');
    svcs.forEach((c, i) => {
      if (i === svcs.length - 1) return;
      gsap.to(c, { scale: 0.92, '--dim': 0.55, ease: 'none', scrollTrigger: { trigger: svcs[i + 1], start: 'top bottom', end: 'top 25%', scrub: true } });
    });
    /* Il Refresh: la linea si sposta da sola per far capire che si può trascinare */
    const o = { p: 0 };
    rpList.classList.add('scrub');
    if (range) range.value = 0;
    setP(0);
    ScrollTrigger.create({
      trigger: compare, start: 'top 70%', once: true,
      onEnter: () => gsap.timeline()
        .to(o, { p: 34, duration: 1.1, ease: 'power3.inOut', onUpdate: () => { setP(o.p); if (range) range.value = o.p; } })
        .to(o, { p: 18, duration: 0.5, ease: 'power2.inOut', onUpdate: () => { setP(o.p); if (range) range.value = o.p; } })
        .to(o, { p: 58, duration: 1.2, ease: 'power3.inOut', onUpdate: () => { setP(o.p); if (range) range.value = o.p; } })
    });
    return () => { rpList.classList.remove('scrub'); if (range) range.value = 50; setP(50); };
  });

  /* =========================================================
     HERO: loader, ingresso, parola che cambia
     ========================================================= */
  const intro = gsap.timeline({ paused: true, defaults: { ease: 'expo.out' } });
  intro.from('.hero-title .li', { yPercent: 118, duration: 1.5, stagger: 0.1 })
    .from('[data-intro]', { y: 34, opacity: 0, duration: 1.2, stagger: 0.09 }, 0.25)
    .from('.cf-in', { y: 50, scale: 0.7, opacity: 0, duration: 1.3, stagger: 0.1, ease: 'back.out(1.5)' }, 0.45)
    .from('.nav-in > *', { y: -24, opacity: 0, duration: 1, stagger: 0.06 }, 0.2)
    .add(() => {
      gsap.to('.cf-in', { y: -12, duration: 3, ease: 'sine.inOut', yoyo: true, repeat: -1, stagger: { each: 0.5 } });
    });

  function startRotator() {
    const words = $$('.rw');
    if (words.length < 2) return;
    gsap.set(words, { yPercent: 115 });
    gsap.set(words[0], { yPercent: 0 });
    doc.classList.add('anim');
    let i = 0;
    const next = () => {
      const cur = words[i];
      i = (i + 1) % words.length;
      gsap.to(cur, { yPercent: -115, duration: 0.85, ease: 'expo.inOut' });
      gsap.fromTo(words[i], { yPercent: 115 }, { yPercent: 0, duration: 0.85, ease: 'expo.inOut' });
      gsap.delayedCall(3.4, next);
    };
    gsap.delayedCall(2.6, next);
  }

  if (loader) {
    const num = $('#loaderNum');
    const lbar = $('#loaderBar');
    const c = { v: 0 };
    gsap.timeline({ onComplete: () => { loader.remove(); startRotator(); } })
      .to(c, { v: 100, duration: 1.3, ease: 'power2.inOut', onUpdate: () => { num.textContent = Math.round(c.v); lbar.style.transform = 'scaleX(' + c.v / 100 + ')'; } })
      .to('.loader-in', { yPercent: -60, opacity: 0, duration: 0.5, ease: 'power3.in' })
      .to(loader, { clipPath: 'inset(0% 0% 100% 0%)', duration: 0.95, ease: 'expo.inOut' }, '-=0.2')
      .add(() => intro.play(), '-=0.6');
  } else {
    intro.play();
    startRotator();
  }

  /* Hero che si allontana mentre scorri */
  gsap.to('.hero-inner', { yPercent: -16, opacity: 0.1, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true } });
  $$('.chip-float').forEach((c) => {
    const d = parseFloat(c.dataset.depth) || 1;
    gsap.to(c, { y: -180 * d, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true } });
  });

  /* =========================================================
     NASTRI: velocità e inclinazione seguono lo scroll
     ========================================================= */
  const tracks = $$('.ticker-track');
  const loops = tracks.map((t, i) => (i % 2 === 0
    ? gsap.fromTo(t, { xPercent: 0 }, { xPercent: -50, duration: 42, ease: 'none', repeat: -1 })
    : gsap.fromTo(t, { xPercent: -50 }, { xPercent: 0, duration: 48, ease: 'none', repeat: -1 })));
  const skew = { s: 0 };
  const setSkew = gsap.quickSetter(tracks, 'skewX', 'deg');
  const clampSkew = gsap.utils.clamp(-9, 9);
  ScrollTrigger.create({
    trigger: '.tickers', start: 'top bottom', end: 'bottom top',
    onUpdate: (self) => {
      const v = self.getVelocity();
      const s = clampSkew(v / -260);
      if (Math.abs(s) > Math.abs(skew.s)) {
        skew.s = s;
        gsap.to(skew, { s: 0, duration: 0.9, ease: 'power3', overwrite: true, onUpdate: () => setSkew(skew.s) });
      }
      const boost = gsap.utils.clamp(1, 3, 1 + Math.abs(v) / 600) * self.direction;
      loops.forEach((l) => {
        l.timeScale(boost);
        gsap.to(l, { timeScale: self.direction, duration: 1.2, ease: 'power2.out', overwrite: true });
      });
    }
  });

  /* =========================================================
     TITOLI E TESTI
     ========================================================= */
  $$('[data-split]').forEach((el) => {
    const words = splitWords(el, 'sw');
    gsap.from(words, { yPercent: 118, duration: 1.15, ease: 'expo.out', stagger: 0.05, scrollTrigger: { trigger: el, start: 'top 88%', once: true } });
  });
  $$('[data-reveal]').forEach((el) => {
    gsap.from(el, { y: 44, opacity: 0, duration: 1.1, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 92%', once: true } });
  });

  /* Perché noi: le parole si "riempiono" di colore */
  $$('.fill').forEach((el) => {
    gsap.fromTo(el, { backgroundPositionX: '100%' }, { backgroundPositionX: '0%', ease: 'none', scrollTrigger: { trigger: el, start: 'top 88%', end: 'top 42%', scrub: true } });
  });

  /* Metodo: la linea si disegna e i passi si accendono */
  const steps = $$('.m-step');
  if (steps.length) {
    $('#mSteps').classList.add('dim');
    gsap.fromTo('#mLine', { scaleY: 0 }, { scaleY: 1, ease: 'none', scrollTrigger: { trigger: '.m-wrap', start: 'top 62%', end: 'bottom 62%', scrub: true } });
    steps.forEach((s) => ScrollTrigger.create({
      trigger: s, start: 'top 64%',
      onEnter: () => s.classList.add('on'),
      onLeaveBack: () => s.classList.remove('on')
    }));
  }

  /* Chi siamo: il testo si accende parola per parola */
  const about = $('#aboutBig');
  if (about) {
    const ws = splitWords(about, 'aw');
    gsap.fromTo(ws, { opacity: 0.14 }, { opacity: 1, ease: 'none', stagger: 0.05, scrollTrigger: { trigger: about, start: 'top 80%', end: 'bottom 50%', scrub: true } });
  }

  /* Museo: le card arrivano storte, come finestre che si aprono */
  const rcs = $$('.rc');
  if (rcs.length) {
    gsap.from(rcs, {
      y: 120, opacity: 0, rotation: (i) => [-9, 6, -4, 8, -7, 5][i % 6], duration: 1.1, ease: 'back.out(1.4)', stagger: 0.08,
      scrollTrigger: { trigger: '.rc-list', start: 'top 85%', once: true }
    });
  }

  /* Prezzi: barre e percentuali */
  const pcard = $('.price-card');
  if (pcard) {
    const ptl = gsap.timeline({ scrollTrigger: { trigger: pcard, start: 'top 75%', once: true } });
    ptl.from('.f-free', { scaleX: 0, duration: 1.2, ease: 'power3.out' })
      .from('.f-us', { scaleX: 0, duration: 1.2, ease: 'power3.out' }, 0.35)
      .from('.pc-save', { opacity: 0, x: -10, duration: 0.6 }, 1.2);
    $$('[data-count]', pcard).forEach((b, i) => {
      const o = { v: 0 }, to = +b.dataset.count;
      ptl.to(o, { v: to, duration: 1.2, ease: 'power3.out', onUpdate: () => { b.textContent = Math.round(o.v) + '%'; } }, i * 0.35);
    });
  }
  gsap.fromTo('.price-giant', { xPercent: 8 }, { xPercent: -28, ease: 'none', scrollTrigger: { trigger: '.price', start: 'top bottom', end: 'bottom top', scrub: true } });

  /* Contatti: marquee gigante */
  const cm = $('.cm-track');
  if (cm) gsap.fromTo(cm, { xPercent: 0 }, { xPercent: -50, duration: 36, ease: 'none', repeat: -1 });

  /* Siti vivi: un sito vero si inclina, si apre in 7 strati (uno alla volta,
     con il contatore che spiega), ruota, si ricompone e arriva la versione telefono */
  const stack = $('#stack');
  if (stack) {
    const layers = $$('.xl', stack);
    const cap = $('#x3dCap');
    const hud = $('#x3dHud');
    const phone = $('.x3d-phone');
    const hudN = $('#hudN'); const hudT = $('#hudT'); const hudD = $('#hudD');
    const hudNum = hudN.nextElementSibling;
    const bars = $$('.hud-bar li', hud);
    const INFO = [
      ['Codice leggero e veloce', 'Scritto su misura, senza zavorre: il sito si apre in meno di un secondo e Google lo apprezza.'],
      ['Sfondo e colori', 'I colori della tua attività, con sfumature che si muovono piano e danno calore.'],
      ['Struttura e griglia', 'Tutto allineato al millimetro, con un layout pensato per computer e uno per telefono.'],
      ['Immagini e profondità', 'Foto curate che si staccano dalla pagina e scorrono a velocità diverse.'],
      ['Testi', 'Titoli chiari e testi scritti per farti scegliere, non per riempire.'],
      ['Bottoni e moduli', 'Prenota, chiedi un preventivo, chiama: ogni azione a un tocco.'],
      ['Animazioni e interazioni', 'Il sito risponde allo scroll e a ogni gesto. È vivo.']
    ];
    const gap = () => parseFloat(getComputedStyle(stack).getPropertyValue('--gapn')) || 50;
    stack.classList.add('x3d-on');
    const T_OPEN = 1.3;
    const T_LIFT = 0.75;
    const liftAt = (i) => T_OPEN + 0.2 + i * T_LIFT;
    const T_ALL = liftAt(layers.length - 1) + 0.9;      // tutti aperti
    const T_ORBIT = 1.8;                                  // giro attorno al sito aperto
    const T_CLOSE = T_ALL + T_ORBIT + 0.3;
    const T_PHONE = T_CLOSE + 1.4;
    const tl = gsap.timeline({ defaults: { ease: 'power2.inOut' } });
    tl.fromTo(stack, { '--rx': 0, '--rz': 0, '--sc': 0.92, '--ty': 0, '--tx': 0 }, { '--rx': 58, '--rz': -38, '--sc': 0.7, '--ty': 22, duration: T_OPEN }, 0)
      .fromTo(stack, { '--sep': 0 }, { '--sep': 1, duration: T_ALL - T_OPEN, ease: 'none' }, T_OPEN)
      .to(stack, { '--rz': -22, duration: T_ALL - T_OPEN, ease: 'none' }, T_OPEN)
      .to(stack, { '--rz': 12, '--rx': 54, '--sc': 0.66, duration: T_ORBIT, ease: 'sine.inOut' }, T_ALL);
    /* "sbucciatura": a ogni passo gli strati sopra si alzano insieme e scoprono quello di cui parliamo */
    for (let k = 1; k < layers.length; k++) {
      tl.fromTo(layers.slice(k), { '--zz': () => (k - 1) * gap() }, { '--zz': () => k * gap(), duration: 1, ease: 'power3.out', immediateRender: false }, liftAt(k - 1));
    }
    tl.to(layers, { '--zz': 0, duration: 1.2, stagger: { each: 0.07, from: 'end' } }, T_CLOSE)
      .to(stack, { '--sep': 0, duration: 1.2 }, T_CLOSE)
      .to(stack, { '--rx': 0, '--rz': 0, '--sc': 0.92, '--ty': 0, duration: 1.3 }, T_CLOSE + 0.1)
      .to(stack, { '--sc': 0.8, '--tx': -9, duration: 1 }, T_PHONE)
      .fromTo(phone, { autoAlpha: 0, xPercent: 40, yPercent: 6, rotate: 8 }, { autoAlpha: 1, xPercent: 0, yPercent: 0, rotate: 0, duration: 1, ease: 'power3.out', immediateRender: false }, T_PHONE + 0.15)
      .to({}, { duration: 0.8 }, T_PHONE + 1.2);
    /* contatore, strato attivo e didascalia seguono l'animazione vera */
    let shown = -2;
    const setHud = (idx) => {
      if (idx === shown) return;
      shown = idx;
      layers.forEach((l, i) => l.classList.toggle('act', i === idx));
      bars.forEach((b, i) => b.classList.toggle('on', idx >= 7 || i <= idx));
      if (idx < 0) { hudN.textContent = '07'; hudNum.textContent = 'strati'; hudT.textContent = 'Un sito vero, smontato pezzo per pezzo'; hudD.textContent = 'Scorri: ogni strato si stacca e ti diciamo a cosa serve.'; }
      else if (idx >= 7) { hudN.textContent = '1'; hudNum.textContent = 'sito, vivo'; hudT.textContent = 'Ricomposto e pronto, su ogni schermo'; hudD.textContent = 'Lo stesso sito, con un layout pensato per il computer e uno per il telefono.'; }
      else { hudN.textContent = '0' + (idx + 1); hudNum.textContent = 'di 07'; hudT.textContent = INFO[idx][0]; hudD.textContent = INFO[idx][1]; }
      hud.classList.remove('swap'); void hud.offsetWidth; hud.classList.add('swap');
    };
    tl.eventCallback('onUpdate', () => {
      const t = tl.time();
      let idx = -1;
      for (let i = 0; i < layers.length; i++) if (t >= liftAt(i) + 0.15) idx = i;
      if (t >= T_ALL + 0.2 && t < T_CLOSE) idx = 6;
      if (t >= T_CLOSE + 0.6) idx = 7;
      setHud(idx);
      cap.dataset.step = t < 0.5 ? '1' : t < liftAt(0) + 0.1 ? '2' : t < T_CLOSE + 0.6 ? '3' : '4';
    });
    setHud(-1);
    ScrollTrigger.create({ trigger: '.layers-track', start: 'top 35%', end: 'bottom bottom', scrub: 1, animation: tl, invalidateOnRefresh: true });
  }

  /* Footer: la scritta gigante sale */
  gsap.from('.foot-word svg', { yPercent: 100, ease: 'none', scrollTrigger: { trigger: '.footer', start: 'top 90%', end: 'bottom bottom', scrub: true } });

  /* =========================================================
     SOLO COMPUTER: bottoni magnetici, cursore, chip col mouse
     ========================================================= */
  if (fine) {
    $$('.magnetic').forEach((el) => {
      const xTo = gsap.quickTo(el, 'x', { duration: 0.6, ease: 'elastic.out(1, .4)' });
      const yTo = gsap.quickTo(el, 'y', { duration: 0.6, ease: 'elastic.out(1, .4)' });
      el.addEventListener('pointermove', (e) => {
        const r = el.getBoundingClientRect();
        xTo((e.clientX - r.left - r.width / 2) * 0.3);
        yTo((e.clientY - r.top - r.height / 2) * 0.4);
      });
      el.addEventListener('pointerleave', () => { xTo(0); yTo(0); });
    });

    const chips = $$('.chip-float').map((c) => ({
      d: parseFloat(c.dataset.depth) || 1,
      x: gsap.quickTo(c, 'xPercent', { duration: 1.2, ease: 'power3' }),
      y: gsap.quickTo(c, 'yPercent', { duration: 1.2, ease: 'power3' })
    }));
    hero.addEventListener('pointermove', (e) => {
      const nx = e.clientX / window.innerWidth - 0.5;
      const ny = e.clientY / window.innerHeight - 0.5;
      chips.forEach((c) => { c.x(nx * -26 * c.d); c.y(ny * -60 * c.d); });
    });

    const cur = $('#cursor');
    const ct = $('#cursorText');
    const cx = gsap.quickTo(cur, 'x', { duration: 0.25, ease: 'power3' });
    const cy = gsap.quickTo(cur, 'y', { duration: 0.25, ease: 'power3' });
    window.addEventListener('pointermove', (e) => { cur.classList.add('ready'); cx(e.clientX); cy(e.clientY); }, { passive: true });
    document.documentElement.addEventListener('pointerleave', () => cur.classList.remove('ready'));
    $$('a, button, summary, .choices label').forEach((el) => {
      el.addEventListener('pointerenter', () => cur.classList.add('hover'));
      el.addEventListener('pointerleave', () => cur.classList.remove('hover'));
    });
    $$('[data-cursor]').forEach((el) => {
      el.addEventListener('pointerenter', () => { ct.textContent = el.dataset.cursor; cur.classList.add('label'); });
      el.addEventListener('pointerleave', () => { cur.classList.remove('label'); ct.textContent = ''; });
    });
  }

  /* ---------- Ricalcolo posizioni quando tutto è caricato ---------- */
  ScrollTrigger.sort();
  window.addEventListener('load', () => ScrollTrigger.refresh());
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => ScrollTrigger.refresh());
})();
