/**
 * Alternative Photographic -- Retail Panel
 * ==========================================
 * Progressive enhancement: upgrades .edition-panel__retail[data-slug]
 * from the no-JS enquiry fallback to the full size-selector panel.
 *
 * Requires: ap-editions.js (window.AP_EDITIONS) loaded first.
 *
 * Placeholder guard:
 *   paymentLink === 'REPLACE_ME' -> enquiry CTA, not a Stripe link
 *   price === null               -> displays '--'
 * ==========================================
 */

(function () {
  'use strict';

  var panel = document.querySelector('.edition-panel__retail[data-slug]');
  if (!panel) return;

  var slug    = panel.dataset.slug;
  var artwork = window.AP_EDITIONS && window.AP_EDITIONS[slug];
  if (!artwork) return; // no data for this slug; no-JS fallback stays

  // Build and inject the full panel
  panel.innerHTML = buildPanel(artwork);
  panel.classList.add('is-upgraded');

  // Wire size-tile interaction
  panel.querySelectorAll('.retail-panel__size-input').forEach(function (input) {
    input.addEventListener('change', function () {
      updateSelection(panel, artwork);
    });
  });

  /* ------------------------------------------------------------------
     Builders
  ------------------------------------------------------------------ */

  function buildPanel(aw) {
    var first = aw.sizes[0];
    var tiles = aw.sizes.map(function (size, i) {
      return (
        '<div class="retail-panel__size-option">' +
          '<input class="retail-panel__size-input" type="radio"' +
                 ' name="print-size" id="rp-size-' + size.id + '"' +
                 ' value="' + size.id + '"' + (i === 0 ? ' checked' : '') + '>' +
          '<label class="retail-panel__size-label" for="rp-size-' + size.id + '">' +
            '<span class="retail-panel__size-name">' + size.label + '</span>' +
            '<span class="retail-panel__size-dims">' + size.dimensions + '</span>' +
          '</label>' +
        '</div>'
      );
    }).join('');

    return (
      '<p class="retail-panel__edition-note">' + aw.edition + '</p>' +
      '<fieldset class="retail-panel__sizes">' +
        '<legend class="retail-panel__sizes-legend">Select print size</legend>' +
        tiles +
      '</fieldset>' +
      '<div class="retail-panel__info-rows">' +
        '<div class="retail-panel__info-row">' +
          '<span class="retail-panel__row-label">Dimensions</span>' +
          '<span class="retail-panel__row-value" id="rp-dims">' + first.dimensions + '</span>' +
        '</div>' +
        '<div class="retail-panel__info-row">' +
          '<span class="retail-panel__row-label">Price</span>' +
          '<span class="retail-panel__row-value retail-panel__price' +
            (first.price ? '' : ' retail-panel__price--placeholder') +
            '" id="rp-price">' + (first.price || '--') + '</span>' +
        '</div>' +
      '</div>' +
      '<div id="rp-cta">' + buildCTA(aw, first) + '</div>'
    );
  }

  function buildCTA(aw, size) {
    var base     = '../enquire.html?artwork=' + aw.enquiryParam;
    var viewing  = base + '&type=viewing';
    var noLink   = !size.paymentLink || size.paymentLink === 'REPLACE_ME';

    if (noLink) {
      return (
        '<p class="retail-panel__placeholder-note">' +
          'Online acquisition coming shortly &mdash; enquire below to reserve your edition.' +
        '</p>' +
        '<a href="' + base + '" class="btn btn--primary retail-panel__cta-primary">' +
          'Enquire About This Edition' +
        '</a>' +
        '<div class="retail-panel__cta-secondary">' +
          '<a href="' + viewing + '" class="btn btn--ghost">Arrange a Viewing</a>' +
        '</div>'
      );
    }

    return (
      '<a href="' + size.paymentLink + '"' +
         ' class="btn btn--primary retail-panel__cta-primary"' +
         ' target="_blank" rel="noopener">' +
        'Acquire this Edition' +
      '</a>' +
      '<div class="retail-panel__cta-secondary">' +
        '<a href="' + base + '" class="btn btn--ghost">Enquire About This Edition</a>' +
      '</div>'
    );
  }

  function updateSelection(panel, aw) {
    var checked = panel.querySelector('.retail-panel__size-input:checked');
    if (!checked) return;

    var size = null;
    for (var i = 0; i < aw.sizes.length; i++) {
      if (aw.sizes[i].id === checked.value) { size = aw.sizes[i]; break; }
    }
    if (!size) return;

    var dimsEl  = panel.querySelector('#rp-dims');
    var priceEl = panel.querySelector('#rp-price');
    var ctaEl   = panel.querySelector('#rp-cta');

    if (dimsEl)  dimsEl.textContent = size.dimensions;

    if (priceEl) {
      priceEl.textContent = size.price || '--';
      priceEl.classList.toggle('retail-panel__price--placeholder', !size.price);
    }

    if (ctaEl) ctaEl.innerHTML = buildCTA(aw, size);
  }

}());
