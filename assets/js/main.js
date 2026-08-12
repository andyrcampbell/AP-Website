/**
 * Alternative Photographic — main.js
 * Vanilla-first. Progressive enhancement: site is fully functional without this.
 */

(function () {
  'use strict';

  /* ═══════════════════════════════════════════════════════════════════════════
   * FORMSPREE CONFIGURATION
   * ─────────────────────────────────────────────────────────────────────────
   * To go live: replace null with the Formspree form ID from the dashboard
   * (the short alphanumeric string in your endpoint URL, e.g. 'xyzabcde').
   * Each is a ONE-LINE CHANGE. Both are null until Andy provides the IDs.
   *
   * While null the forms will NOT submit and will not pretend to succeed —
   * they show an honest "not yet live" message on submit.
   * ═══════════════════════════════════════════════════════════════════════════ */
  var FORMSPREE_ENQUIRY_ID   = 'xkjwnqpj'; // Formspree enquiry endpoint
  var FORMSPREE_COLLECTOR_ID = 'xrpzgyjl'; // Formspree collector endpoint

  var FORMSPREE_BASE = 'https://formspree.io/f/';


  /* ── Scrolled header ──────────────────────────────────────────────────── */
  var header = document.querySelector('.site-header');
  if (header) {
    var onScroll = function () {
      header.classList.toggle('scrolled', window.scrollY > 60);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }


  /* ── Mobile nav toggle ────────────────────────────────────────────────── */
  var toggle = document.querySelector('.nav-toggle');
  var nav    = document.querySelector('.site-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      nav.classList.toggle('is-open', !expanded);
      document.body.style.overflow = expanded ? '' : 'hidden';
    });

    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        toggle.setAttribute('aria-expanded', 'false');
        nav.classList.remove('is-open');
        document.body.style.overflow = '';
      });
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) {
        toggle.setAttribute('aria-expanded', 'false');
        nav.classList.remove('is-open');
        document.body.style.overflow = '';
        toggle.focus();
      }
    });
  }


  /* ── Enquire form: pre-populate artwork field from URL param ──────────── */
  var artworkField = document.getElementById('artwork-interest');
  if (artworkField) {
    var params  = new URLSearchParams(window.location.search);
    var artwork = params.get('artwork');
    if (artwork) {
      artworkField.value = decodeURIComponent(artwork);
    }
  }


  /* ── FORM UTILITIES ───────────────────────────────────────────────────── */

  /**
   * Show or clear an aria-live status/error element.
   * @param {HTMLElement} el   - the status container
   * @param {string|null} msg  - message to show, or null to clear
   * @param {string} [role]    - 'error' (default) or 'success'
   */
  function setStatus(el, msg, role) {
    if (!el) return;
    if (!msg) {
      el.hidden = true;
      el.textContent = '';
      return;
    }
    el.textContent = msg;
    el.hidden = false;
    el.style.color = (role === 'success')
      ? 'var(--color-text-muted)'
      : 'var(--prim-gold)';   // warm amber — readable on dark, not alarming
  }

  /**
   * Validate the main enquiry form.
   * Returns { field, msg } on first error, or null if valid.
   */
  function validateEnquiry(form) {
    var name  = form.querySelector('[name="name"]');
    var email = form.querySelector('[name="email"]');
    var terms = form.querySelector('[name="terms-agreement"]');
    if (!name || !name.value.trim())
      return { field: name, msg: 'Please enter your name.' };
    if (!email || !email.value.trim())
      return { field: email, msg: 'Please enter your email address.' };
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim()))
      return { field: email, msg: 'Please enter a valid email address.' };
    // Fail CLOSED: if checkbox is absent from the DOM, refuse submission
    if (!terms)
      return { field: null, msg: 'This form cannot be submitted right now — please email us directly at admin@alternativeconcept.studio.' };
    if (!terms.checked)
      return { field: terms, msg: 'Please confirm you have read and agree to the Terms of Use and Terms of Sale before submitting.' };
    return null;
  }

  /**
   * Mark a field as invalid (or clear the invalid state).
   */
  function setFieldInvalid(field, invalid) {
    if (!field) return;
    if (invalid) {
      field.setAttribute('aria-invalid', 'true');
    } else {
      field.removeAttribute('aria-invalid');
    }
  }

  /**
   * POST form data to a Formspree endpoint.
   * Returns the fetch Response, or throws on network error.
   */
  function postToFormspree(formId, data) {
    return fetch(FORMSPREE_BASE + formId, {
      method:  'POST',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
      body:    JSON.stringify(data)
    });
  }

  /**
   * Extract a human-readable error string from a Formspree JSON response.
   */
  function formspreeErrorMsg(json) {
    var errors = (json && json.errors) || [];
    if (errors.length) return errors.map(function (e) { return e.message; }).join(' ');
    return 'Something went wrong. Please try again or contact us directly.';
  }


  /* ── ENQUIRY FORM ─────────────────────────────────────────────────────── */
  var enquireForm = document.getElementById('enquire-form');
  if (enquireForm) {
    var enquireStatus = document.getElementById('enquire-status');
    var enquireSubmit = enquireForm.querySelector('[type="submit"]');

    enquireForm.addEventListener('submit', function (e) {
      e.preventDefault();

      // --- Client-side validation ---
      var err = validateEnquiry(enquireForm);
      if (err) {
        setFieldInvalid(err.field, true);
        setStatus(enquireStatus, err.msg, 'error');
        if (err.field) err.field.focus();
        return;
      }
      // Clear any previous error
      enquireForm.querySelectorAll('[aria-invalid]').forEach(function (f) {
        setFieldInvalid(f, false);
      });
      setStatus(enquireStatus, null);

      // --- Check if form endpoint is configured ---
      if (!FORMSPREE_ENQUIRY_ID) {
        setStatus(
          enquireStatus,
          'This form is not yet active — submission endpoint is pending configuration. ' +
          'To enquire now, please email us directly.',
          'error'
        );
        return;
      }

      // --- Submit to Formspree ---
      var data = {};
      new FormData(enquireForm).forEach(function (val, key) {
        if (key !== '_gotcha') data[key] = val; // exclude honeypot from payload
      });
      // Formspree control fields
      data['_subject'] = 'New enquiry — Alternative Photographic';
      // Assent record — timestamp at moment of submission
      data['client_agreed_at'] = new Date().toISOString();

      enquireSubmit.disabled = true;
      enquireSubmit.textContent = 'Sending…';

      postToFormspree(FORMSPREE_ENQUIRY_ID, data)
        .then(function (response) {
          if (response.ok) {
            enquireForm.innerHTML =
              '<div style="text-align:center;padding:var(--sp-12) var(--sp-8);">' +
                '<p style="font-family:var(--font-display);font-size:1.5rem;font-weight:300;' +
                    'color:var(--color-text);margin-bottom:var(--sp-4);">' +
                  'Thank you for your enquiry.' +
                '</p>' +
                '<p style="font-size:0.875rem;color:var(--color-text-muted);line-height:1.8;">' +
                  'We will respond personally within two working days.' +
                '</p>' +
              '</div>';
          } else {
            return response.json().then(function (json) {
              setStatus(enquireStatus, formspreeErrorMsg(json), 'error');
            }).catch(function () {
              setStatus(
                enquireStatus,
                'The submission was not accepted. Please try again or contact us directly.',
                'error'
              );
            }).finally(function () {
              enquireSubmit.disabled = false;
              enquireSubmit.textContent = 'Send Enquiry';
            });
          }
        })
        .catch(function () {
          setStatus(
            enquireStatus,
            'Could not reach the server — please check your connection and try again, ' +
            'or contact us directly.',
            'error'
          );
          enquireSubmit.disabled = false;
          enquireSubmit.textContent = 'Send Enquiry';
        });
    });

    // Clear aria-invalid on input so errors don't linger after correction
    enquireForm.querySelectorAll('input, textarea, select').forEach(function (field) {
      field.addEventListener('input', function () {
        setFieldInvalid(field, false);
      });
    });
  }


  /* ── COLLECTOR LIST FORM ──────────────────────────────────────────────── */
  var collectorForm = document.querySelector('.collector-strip__form');
  if (collectorForm) {
    var collectorStatus = document.getElementById('collector-status');
    var collectorSubmit = collectorForm.querySelector('[type="submit"]');
    var collectorEmail  = collectorForm.querySelector('[name="email"]');

    var collectorTerms = collectorForm.querySelector('[name="terms-agreement"]');

    collectorForm.addEventListener('submit', function (e) {
      e.preventDefault();

      // --- Validate terms agreement (fail CLOSED: re-query live DOM) ---
      var liveTerms = collectorForm.querySelector('[name="terms-agreement"]');
      if (!liveTerms) {
        setStatus(collectorStatus, 'This form cannot be submitted right now — please email us directly at admin@alternativeconcept.studio.', 'error');
        return;
      }
      if (!liveTerms.checked) {
        setStatus(collectorStatus, 'Please confirm you have read and agree to the Terms of Use and Terms of Sale before registering.', 'error');
        liveTerms.focus();
        return;
      }

      // --- Validate email ---
      if (!collectorEmail || !collectorEmail.value.trim()) {
        setStatus(collectorStatus, 'Please enter your email address.', 'error');
        if (collectorEmail) collectorEmail.focus();
        return;
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(collectorEmail.value.trim())) {
        setStatus(collectorStatus, 'Please enter a valid email address.', 'error');
        if (collectorEmail) collectorEmail.focus();
        return;
      }
      setStatus(collectorStatus, null);

      // --- Check if form endpoint is configured ---
      if (!FORMSPREE_COLLECTOR_ID) {
        setStatus(
          collectorStatus,
          'Registration is not yet active — submission endpoint is pending configuration.',
          'error'
        );
        return;
      }

      // --- Submit to Formspree ---
      var data = {
        email:            collectorEmail.value.trim(),
        _subject:         'Collector list registration — Alternative Photographic',
        terms_version:    'v1.8-2026-08-11',
        client_agreed_at: new Date().toISOString()
      };

      collectorSubmit.disabled = true;
      collectorSubmit.textContent = 'Registering…';

      postToFormspree(FORMSPREE_COLLECTOR_ID, data)
        .then(function (response) {
          if (response.ok) {
            collectorForm.innerHTML =
              '<p style="font-size:0.8125rem;color:var(--color-text-muted);letter-spacing:0.08em;">' +
                'Your details have been noted. We will be in touch ahead of the next edition release.' +
              '</p>';
          } else {
            return response.json().then(function (json) {
              setStatus(collectorStatus, formspreeErrorMsg(json), 'error');
            }).catch(function () {
              setStatus(
                collectorStatus,
                'The registration was not accepted. Please try again.',
                'error'
              );
            }).finally(function () {
              collectorSubmit.disabled = false;
              collectorSubmit.textContent = 'Register';
            });
          }
        })
        .catch(function () {
          setStatus(
            collectorStatus,
            'Could not reach the server — please check your connection and try again.',
            'error'
          );
          collectorSubmit.disabled = false;
          collectorSubmit.textContent = 'Register';
        });
    });
  }


  /* ── Lazy-load images (Intersection Observer) ─────────────────────────── */
  if ('IntersectionObserver' in window) {
    var lazyImages = document.querySelectorAll('img[loading="lazy"]');
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-loaded');
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: '200px 0px' });
    lazyImages.forEach(function (img) { observer.observe(img); });
  }

})();
