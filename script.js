(function () {
  'use strict';

  // ---- Settings (edit here) ----
  var WA_NUMBER = '255766816581';
  var BRAND = 'Kambele Investment';

  // ---- Plot data ----
  var PLOTS = [
    { name: 'Kikatiti, Arusha', region: 'Arusha', price: 800000, size: '20x20m (400 Sqm)', pay: 'Lipa kidogo kidogo miezi 8', tag: 'Bei Nafuu Zaidi' },
    { name: 'Kisongo (CMC), Arusha', region: 'Arusha', price: 1900000, size: '20x20m (400 Sqm)', pay: 'Lipa kidogo kidogo miezi 8', tag: 'Inauzwa Haraka' },
    { name: 'Kisongo (Waya), Arusha', region: 'Arusha', price: 2500000, size: '20x20m (400 Sqm)', pay: 'Lipa kidogo kidogo miezi 8', tag: 'Makazi' },
    { name: 'East Africa Road, Arusha', region: 'Arusha', price: 3500000, size: '20x20m (400 Sqm)', pay: 'Lipa kidogo kidogo miezi 8', tag: 'Karibu na Barabara' },
    { name: 'Bomang’ombe (Kwa Wasomali), Kilimanjaro', region: 'Kilimanjaro', price: 3500000, size: '20x20m (400 Sqm)', pay: 'Lipa kidogo kidogo miezi 6+', tag: 'Kilimanjaro' },
    { name: 'Ngaramtoni, Arusha', region: 'Arusha', price: 3800000, size: '20x20m (400 Sqm)', pay: 'Lipa kidogo kidogo miezi 8', tag: 'Makazi & Biashara' },
    { name: 'Bomang’ombe (Uzunguni), Kilimanjaro', region: 'Kilimanjaro', price: 4500000, size: '20x20m (400 Sqm)', pay: 'Lipa kidogo kidogo miezi 6+', tag: 'Kilimanjaro' },
    { name: 'Maji ya Chai, Arusha', region: 'Arusha', price: 5000000, size: '20x20m (400 Sqm)', pay: 'Lipa kidogo kidogo miezi 8', tag: 'Mazingira Mazuri' },
    { name: 'Mateves (Karibu na Uwanja wa AFCON), Arusha', region: 'Arusha', price: 7000000, size: '20x20m (400 Sqm)', pay: 'Lipa kidogo kidogo miezi 8', tag: 'Uwekezaji Mkubwa' },
    { name: 'Kiseriani, Arusha', region: 'Arusha', price: 12000000, size: '20x20m (400 Sqm)', pay: 'Lipa kidogo kidogo miezi 8', tag: 'Prime Area' },
    { name: 'Intel Loth, Arusha', region: 'Arusha', price: 17000000, size: '20x25m (500 Sqm)', pay: 'Lipa kidogo kidogo miezi 8', tag: 'VIP Plot' }
  ];

  // ---- Helpers ----
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var tzs = function (n) { return 'TZS ' + Math.round(n).toLocaleString('en-US'); };
  var wa = function (text) { return 'https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent(text); };
  var esc = function (s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };

  function plotMsg(p) {
    return 'Habari ' + BRAND + '! Nimevutiwa na kiwanja kilichopo ' + p.name + ' chenye bei ya ' + tzs(p.price) +
      ' kwenye website yenu. Naomba maelezo zaidi na ratiba ya kwenda kuona site.';
  }

  // ---- Static WhatsApp links ----
  $('#heroWa').href = wa('Habari ' + BRAND + '! Naomba kupanga ratiba ya kutembelea site bure.');
  $('#yr').textContent = new Date().getFullYear();

  // ---- Nav ----
  var nav = $('#nav'), toggle = $('#navToggle'), links = $('#navLinks');
  window.addEventListener('scroll', function () { nav.classList.toggle('is-scrolled', window.scrollY > 10); }, { passive: true });
  toggle.addEventListener('click', function () {
    var open = links.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', open);
  });
  $$('a', links).forEach(function (a) {
    a.addEventListener('click', function () { links.classList.remove('is-open'); toggle.setAttribute('aria-expanded', 'false'); });
  });

  // ---- Scroll reveal ----
  var io = 'IntersectionObserver' in window ? new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); } });
  }, { threshold: 0.12 }) : null;
  $$('.reveal').forEach(function (el) { io ? io.observe(el) : el.classList.add('is-in'); });

  // ---- Plots: filter + render ----
  var grid = $('#grid'), count = $('#count');
  var state = { region: 'all', price: 'all' };

  function inRange(p, r) {
    if (r === 'low') return p.price < 3000000;
    if (r === 'mid') return p.price >= 3000000 && p.price <= 10000000;
    if (r === 'high') return p.price > 10000000;
    return true;
  }

  function render() {
    var list = PLOTS.filter(function (p) {
      return (state.region === 'all' || p.region === state.region) && inRange(p, state.price);
    });
    count.textContent = 'Viwanja vinavyoonekana: ' + list.length + ' kati ya ' + PLOTS.length;
    if (!list.length) {
      grid.innerHTML = '<p class="empty">Hakuna kiwanja kwenye kundi hili. Jaribu eneo au bei nyingine, au tuulize WhatsApp.</p>';
      return;
    }
    grid.innerHTML = list.map(function (p) {
      var i = PLOTS.indexOf(p);
      return '<article class="card plot">' +
        '<span class="tag">' + esc(p.tag) + '</span>' +
        '<h3>' + esc(p.name) + '</h3>' +
        '<p class="plot__price">' + tzs(p.price) + '</p>' +
        '<ul class="plot__meta"><li>Ukubwa: ' + esc(p.size) + '</li><li>Malipo: ' + esc(p.pay) + '</li></ul>' +
        '<div class="plot__act">' +
        '<a class="btn btn--wa" target="_blank" rel="noopener" href="' + wa(plotMsg(p)) + '">Uliza / Nunua WhatsApp</a>' +
        '<button class="plot__more" type="button" data-i="' + i + '">Angalia maelezo</button>' +
        '</div></article>';
    }).join('');
  }

  function applyFilter() {
    grid.classList.add('is-out');
    setTimeout(function () { render(); grid.classList.remove('is-out'); }, 200);
  }

  function chipGroup(id, key) {
    $('#' + id).addEventListener('click', function (e) {
      var b = e.target.closest('.chip'); if (!b) return;
      $$('.chip', this).forEach(function (c) { c.classList.toggle('is-on', c === b); });
      state[key] = b.dataset.v; applyFilter();
    });
  }
  chipGroup('regionFilter', 'region');
  chipGroup('priceFilter', 'price');
  render();

  // ---- Modal ----
  var modal = $('#modal'), lastFocus = null;
  function openModal(p) {
    lastFocus = document.activeElement;
    $('#mTag').textContent = p.tag;
    $('#mTitle').textContent = p.name;
    $('#mList').innerHTML = [
      ['Bei', tzs(p.price)], ['Ukubwa', p.size], ['Mkoa', p.region], ['Malipo', p.pay],
      ['Safari ya site', 'Bure']
    ].map(function (r) { return '<div><dt>' + r[0] + '</dt><dd>' + esc(r[1]) + '</dd></div>'; }).join('');
    $('#mWa').href = wa(plotMsg(p));
    modal.classList.add('is-open'); modal.setAttribute('aria-hidden', 'false');
    $('.modal__x').focus();
  }
  function closeModal() {
    modal.classList.remove('is-open'); modal.setAttribute('aria-hidden', 'true');
    if (lastFocus) lastFocus.focus();
  }
  grid.addEventListener('click', function (e) {
    var b = e.target.closest('.plot__more'); if (b) openModal(PLOTS[+b.dataset.i]);
  });
  modal.addEventListener('click', function (e) { if (e.target.hasAttribute('data-close')) closeModal(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && modal.classList.contains('is-open')) closeModal(); });

  // ---- Installment calculator ----
  var slider = $('#price'), months = 8;
  function calc() {
    var price = +slider.value;
    $('#priceOut').textContent = tzs(price);
    $('#monthly').textContent = tzs(price / months);
    $('#calcWa').href = wa('Habari ' + BRAND + '! Nimetumia kikokotoo cha malipo kwenye website yenu. Kiwanja cha bei ya ' + tzs(price) +
      ', nikilipa kwa miezi ' + months + ' nitalipa takriban ' + tzs(price / months) + ' kwa mwezi. Naomba maelezo zaidi.');
  }
  slider.addEventListener('input', calc);
  $('#months').addEventListener('click', function (e) {
    var b = e.target.closest('.chip'); if (!b) return;
    $$('.chip', this).forEach(function (c) { c.classList.toggle('is-on', c === b); });
    months = +b.dataset.m; calc();
  });
  calc();

  // ---- Inquiry form ----
  var sel = $('#inquiry select[name=loc]');
  PLOTS.forEach(function (p) { var o = document.createElement('option'); o.textContent = p.name; sel.appendChild(o); });
  $('#inquiry').addEventListener('submit', function (e) {
    e.preventDefault();
    var f = this.elements, err = $('#formErr');
    var name = f.name.value.trim(), phone = f.phone.value.trim();
    if (!name || !/^[+\d][\d\s-]{6,}$/.test(phone)) { err.textContent = 'Weka jina lako na namba sahihi ya simu.'; return; }
    err.textContent = '';
    var msg = 'Habari ' + BRAND + '!\nJina: ' + name + '\nSimu: ' + phone + '\nEneo ninalopenda: ' + f.loc.value +
      (f.msg.value.trim() ? '\nUjumbe: ' + f.msg.value.trim() : '');
    window.open(wa(msg), '_blank', 'noopener');
  });
})();
