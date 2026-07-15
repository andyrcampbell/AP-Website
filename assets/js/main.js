/**
 * Alternative Photographic — main.js
 * Vanilla-first. Progressive enhancement: site is fully functional without this.
 */

(function () {
  'use strict';

  /* ── Scrolled header ──────────────────────────────────────────────────── */
  const header = document.querySelector('.site-header');
  if (header) {
    const onScroll = () => {
      header.classList.toggle('scrolled', window.scrollY > 60);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // run on load
  }

  /* ── Mobile nav toggle ────────────────────────────────────────────────── */
  const toggle = document.querySelector('.nav-toggle');
  const nav    = document.querySelector('.site-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      nav.classList.toggle('is-open', !expanded);
      document.body.style.overflow = expanded ? '' : 'hidden';
    });

    // Close on link click
    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        toggle.setAttribute('aria-expanded', 'false');
        nav.classList.remove('is-open');
        document.body.style.overflow = '';
      });
    });

    // Close on Escape
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) {
        toggle.setAttribute('aria-expanded', 'false');
        nav.classList.remove('is-open');
        document.body.style.overflow = '';
        toggle.focus();
      }
    });
  }

  /* ── Enquire form: pre-populate artwork field from URL param ──────────── */
  const artworkField = document.getElementById('artwork-interest');
  if (artworkField) {
    const params = new URLSearchParams(window.location.search);
    const artwork = params.get('artwork');
    if (artwork) {
      artworkField.value = decodeURIComponent(artwork);
    }
  }

  /* ── Collector register form: prevent default, show confirmation ──────── */
  const collectorForm = document.querySelector('.collector-strip__form');
  if (collectorForm) {
    collectorForm.addEventListener('submit', e => {
      e.preventDefault();
      const input = collectorForm.querySelector('input');
      if (input && input.value.trim()) {
        collectorForm.innerHTML =
          '<p style="font-size:0.8125rem;color:var(--color-text-muted);letter-spacing:0.08em;">' +
          'Your details have been noted. We will be in touch ahead of the next edition release.' +
          '</p>';
      }
    });
  }

  /* ── Enquire form: prevent default, show confirmation ────────────────── */
  const enquireForm = document.getElementById('enquire-form');
  if (enquireForm) {
    enquireForm.addEventListener('submit', e => {
      e.preventDefault();
      enquireForm.innerHTML =
        '<div style="text-align:center;padding:var(--sp-12) var(--sp-8);">' +
        '<p style="font-family:var(--font-display);font-size:1.5rem;font-weight:300;color:var(--color-text);margin-bottom:var(--sp-4);">Thank you for your enquiry.</p>' +
        '<p style="font-size:0.875rem;color:var(--color-text-muted);line-height:1.8;">' +
        'We will respond within two working days. For urgent matters, please contact us directly.' +
        '</p>' +
        '</div>';
    });
  }

  /* ── Lazy-load images (Intersection Observer) ─────────────────────────── */
  if ('IntersectionObserver' in window) {
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    // Modern browsers handle loading="lazy" natively; this is belt-and-braces
    // for any images that need JS-driven reveal animation.
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-loaded');
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: '200px 0px' });

    lazyImages.forEach(img => observer.observe(img));
  }

})();
