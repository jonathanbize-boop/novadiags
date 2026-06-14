/* NOVADIAGS — interactions */
(function () {
  'use strict';

  /* ----- Mobile nav ----- */
  var burger = document.querySelector('.burger');
  var mobileNav = document.querySelector('.mobile-nav');
  if (burger && mobileNav) {
    burger.addEventListener('click', function () {
      var open = mobileNav.classList.toggle('open');
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
      document.body.style.overflow = open ? 'hidden' : '';
    });
    mobileNav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        mobileNav.classList.remove('open');
        burger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }

  /* ----- Scroll reveal ----- */
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && reveals.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach(function (el, i) {
      el.style.transitionDelay = (Math.min(i % 4, 3) * 70) + 'ms';
      io.observe(el);
    });
  } else {
    reveals.forEach(function (el) { el.classList.add('in'); });
  }

  /* ----- FAQ : un seul ouvert à la fois (optionnel, par groupe) ----- */
  document.querySelectorAll('.faq-list').forEach(function (list) {
    var items = list.querySelectorAll('details.faq-item');
    items.forEach(function (d) {
      d.addEventListener('toggle', function () {
        if (d.open) {
          items.forEach(function (other) { if (other !== d) other.open = false; });
        }
      });
    });
  });

  /* ----- Devis : estimation rapide (page tarifs/contact) ----- */
  // Données tarifaires 2026 (TTC) — clé = type, valeurs par nb de prestations [1..7]
  window.NOVA_TARIFS = {
    appartement: {
      'Chambre':[80,130,180,230,270,300,320],
      'T1':[100,150,200,250,290,320,340],
      'T2':[120,180,240,300,350,390,420],
      'T3':[140,200,260,320,370,410,440],
      'T4':[160,220,280,340,390,430,460],
      'T5':[180,260,340,420,490,550,610],
      'T6':[200,280,360,440,510,570,630],
      'T7':[220,300,380,460,530,630,650]
    },
    maison: {
      'Jusqu’à 50 m²':[150,220,290,360,410,460,500],
      'Jusqu’à 90 m²':[170,240,310,380,430,480,520],
      'Jusqu’à 110 m²':[190,260,330,400,450,500,540],
      'Jusqu’à 130 m²':[220,310,400,490,560,630,690],
      'Jusqu’à 150 m²':[240,330,420,510,580,650,710],
      'Jusqu’à 180 m²':[260,350,440,530,600,670,730],
      'Jusqu’à 210 m²':[280,370,460,550,620,690,750]
    }
  };

  /* ----- Form submit (front simulation) ----- */
  var form = document.querySelector('#devis-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!form.checkValidity()) { form.reportValidity(); return; }
      var btn = form.querySelector('[type="submit"]');
      var success = document.querySelector('.form-success');
      btn.disabled = true; btn.dataset.label = btn.textContent; btn.textContent = 'Envoi en cours…';
      setTimeout(function () {
        form.style.display = 'none';
        if (success) { success.classList.add('show'); success.focus && success.focus(); }
      }, 700);
    });
  }

  /* ----- Année footer ----- */
  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
})();
