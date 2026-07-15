/**
 * Alternative Photographic -- Edition Data
 * =========================================
 * HOW TO ADD REAL PRICES AND PAYMENT LINKS (Andy -- read this):
 *
 *   1. For each size entry, set `price` to a formatted string, e.g. "1,800"
 *   2. Set `paymentLink` to the Stripe Payment Link URL for that size
 *      (create: Stripe Dashboard -> Payment Links -> + New)
 *   3. Once both price and paymentLink are set for a size, the
 *      "Acquire this Edition" CTA activates automatically for that size.
 *
 * PLACEHOLDER SENTINELS -- do not ship these live:
 *   price: null              -> displays as "--" (price not set)
 *   paymentLink: "REPLACE_ME"  -> CTA falls back to enquiry;
 *                                  no broken or fake link ships
 *
 * PRINT SIZES (three tiers, landscape 3:2 proportion):
 *   Entry      -- 24 x 16 in / 60 x 40 cm
 *   Standard   -- 36 x 24 in / 90 x 60 cm
 *   Exhibition -- 48 x 32 in / 120 x 80 cm
 * =========================================
 */

/* global window */
window.AP_EDITIONS = {
  'la-salute-at-dawn': {
    title:        'La Salute at Dawn',
    series:       'Venice',
    edition:      'Edition of 10',
    enquiryParam: 'La+Salute+at+Dawn',
    sizes: [
      { id: 'sm', label: 'Entry',      dimensions: '24 x 16 in / 60 x 40 cm', price: null, paymentLink: 'REPLACE_ME' },
      { id: 'md', label: 'Standard',   dimensions: '36 x 24 in / 90 x 60 cm', price: null, paymentLink: 'REPLACE_ME' },
      { id: 'lg', label: 'Exhibition', dimensions: '48 x 32 in / 120 x 80 cm', price: null, paymentLink: 'REPLACE_ME' }
    ]
  },

  'red-lanterns-giudecca': {
    title:        'Red Lanterns, Giudecca',
    series:       'Venice',
    edition:      'Edition of 10',
    enquiryParam: 'Red+Lanterns,+Giudecca',
    sizes: [
      { id: 'sm', label: 'Entry',      dimensions: '24 x 16 in / 60 x 40 cm', price: null, paymentLink: 'REPLACE_ME' },
      { id: 'md', label: 'Standard',   dimensions: '36 x 24 in / 90 x 60 cm', price: null, paymentLink: 'REPLACE_ME' },
      { id: 'lg', label: 'Exhibition', dimensions: '48 x 32 in / 120 x 80 cm', price: null, paymentLink: 'REPLACE_ME' }
    ]
  },

  'the-grand-canal-morning': {
    title:        'The Grand Canal, Morning',
    series:       'Venice',
    edition:      'Edition of 10',
    enquiryParam: 'The+Grand+Canal,+Morning',
    sizes: [
      { id: 'sm', label: 'Entry',      dimensions: '24 x 16 in / 60 x 40 cm', price: null, paymentLink: 'REPLACE_ME' },
      { id: 'md', label: 'Standard',   dimensions: '36 x 24 in / 90 x 60 cm', price: null, paymentLink: 'REPLACE_ME' },
      { id: 'lg', label: 'Exhibition', dimensions: '48 x 32 in / 120 x 80 cm', price: null, paymentLink: 'REPLACE_ME' }
    ]
  },

  'la-serenissima-after-dark': {
    title:        'La Serenissima After Dark',
    series:       'Venice',
    edition:      'Edition of 10',
    enquiryParam: 'La+Serenissima+After+Dark',
    sizes: [
      { id: 'sm', label: 'Entry',      dimensions: '24 x 16 in / 60 x 40 cm', price: null, paymentLink: 'REPLACE_ME' },
      { id: 'md', label: 'Standard',   dimensions: '36 x 24 in / 90 x 60 cm', price: null, paymentLink: 'REPLACE_ME' },
      { id: 'lg', label: 'Exhibition', dimensions: '48 x 32 in / 120 x 80 cm', price: null, paymentLink: 'REPLACE_ME' }
    ]
  },

  'under-canvas-dorsoduro': {
    title:        'Under Canvas, Dorsoduro',
    series:       'Venice',
    edition:      'Edition of 10',
    enquiryParam: 'Under+Canvas,+Dorsoduro',
    sizes: [
      { id: 'sm', label: 'Entry',      dimensions: '24 x 16 in / 60 x 40 cm', price: null, paymentLink: 'REPLACE_ME' },
      { id: 'md', label: 'Standard',   dimensions: '36 x 24 in / 90 x 60 cm', price: null, paymentLink: 'REPLACE_ME' },
      { id: 'lg', label: 'Exhibition', dimensions: '48 x 32 in / 120 x 80 cm', price: null, paymentLink: 'REPLACE_ME' }
    ]
  },

  'carnevale': {
    title:        'Carnevale',
    series:       'Venice',
    edition:      'Edition of 10',
    enquiryParam: 'Carnevale',
    sizes: [
      { id: 'sm', label: 'Entry',      dimensions: '24 x 16 in / 60 x 40 cm', price: null, paymentLink: 'REPLACE_ME' },
      { id: 'md', label: 'Standard',   dimensions: '36 x 24 in / 90 x 60 cm', price: null, paymentLink: 'REPLACE_ME' },
      { id: 'lg', label: 'Exhibition', dimensions: '48 x 32 in / 120 x 80 cm', price: null, paymentLink: 'REPLACE_ME' }
    ]
  },

  'the-mask-makers': {
    title:        'The Mask Makers',
    series:       'Venice',
    edition:      'Edition of 10',
    enquiryParam: 'The+Mask+Makers',
    sizes: [
      { id: 'sm', label: 'Entry',      dimensions: '24 x 16 in / 60 x 40 cm', price: null, paymentLink: 'REPLACE_ME' },
      { id: 'md', label: 'Standard',   dimensions: '36 x 24 in / 90 x 60 cm', price: null, paymentLink: 'REPLACE_ME' },
      { id: 'lg', label: 'Exhibition', dimensions: '48 x 32 in / 120 x 80 cm', price: null, paymentLink: 'REPLACE_ME' }
    ]
  },

  'luskentyre-strand': {
    title:        'Luskentyre Strand',
    series:       'Hebrides & Highlands',
    edition:      'Edition of 10',
    enquiryParam: 'Luskentyre+Strand',
    sizes: [
      { id: 'sm', label: 'Entry',      dimensions: '24 x 16 in / 60 x 40 cm', price: null, paymentLink: 'REPLACE_ME' },
      { id: 'md', label: 'Standard',   dimensions: '36 x 24 in / 90 x 60 cm', price: null, paymentLink: 'REPLACE_ME' },
      { id: 'lg', label: 'Exhibition', dimensions: '48 x 32 in / 120 x 80 cm', price: null, paymentLink: 'REPLACE_ME' }
    ]
  },

  'the-blackhouse-harris': {
    title:        'The Blackhouse, Harris',
    series:       'Hebrides & Highlands',
    edition:      'Edition of 10',
    enquiryParam: 'The+Blackhouse,+Harris',
    sizes: [
      { id: 'sm', label: 'Entry',      dimensions: '24 x 16 in / 60 x 40 cm', price: null, paymentLink: 'REPLACE_ME' },
      { id: 'md', label: 'Standard',   dimensions: '36 x 24 in / 90 x 60 cm', price: null, paymentLink: 'REPLACE_ME' },
      { id: 'lg', label: 'Exhibition', dimensions: '48 x 32 in / 120 x 80 cm', price: null, paymentLink: 'REPLACE_ME' }
    ]
  },

  'eilean-donan': {
    title:        'Eilean Donan',
    series:       'Hebrides & Highlands',
    edition:      'Edition of 10',
    enquiryParam: 'Eilean+Donan',
    sizes: [
      { id: 'sm', label: 'Entry',      dimensions: '24 x 16 in / 60 x 40 cm', price: null, paymentLink: 'REPLACE_ME' },
      { id: 'md', label: 'Standard',   dimensions: '36 x 24 in / 90 x 60 cm', price: null, paymentLink: 'REPLACE_ME' },
      { id: 'lg', label: 'Exhibition', dimensions: '48 x 32 in / 120 x 80 cm', price: null, paymentLink: 'REPLACE_ME' }
    ]
  },

  'rue-basse-monaco-ville': {
    title:        'Rue Basse, Monaco-Ville',
    series:       'Alpine & Riviera',
    edition:      'Edition of 10',
    enquiryParam: 'Rue+Basse,+Monaco-Ville',
    sizes: [
      { id: 'sm', label: 'Entry',      dimensions: '24 x 16 in / 60 x 40 cm', price: null, paymentLink: 'REPLACE_ME' },
      { id: 'md', label: 'Standard',   dimensions: '36 x 24 in / 90 x 60 cm', price: null, paymentLink: 'REPLACE_ME' },
      { id: 'lg', label: 'Exhibition', dimensions: '48 x 32 in / 120 x 80 cm', price: null, paymentLink: 'REPLACE_ME' }
    ]
  },

  'the-approach': {
    title:        'The Approach',
    series:       'Alpine & Riviera',
    edition:      'Edition of 10',
    enquiryParam: 'The+Approach',
    sizes: [
      { id: 'sm', label: 'Entry',      dimensions: '24 x 16 in / 60 x 40 cm', price: null, paymentLink: 'REPLACE_ME' },
      { id: 'md', label: 'Standard',   dimensions: '36 x 24 in / 90 x 60 cm', price: null, paymentLink: 'REPLACE_ME' },
      { id: 'lg', label: 'Exhibition', dimensions: '48 x 32 in / 120 x 80 cm', price: null, paymentLink: 'REPLACE_ME' }
    ]
  },

  'ice-plant-season-monterey': {
    title:        'Ice Plant Season, Monterey',
    series:       'California Coast',
    edition:      'Edition of 10',
    enquiryParam: 'Ice+Plant+Season,+Monterey',
    sizes: [
      { id: 'sm', label: 'Entry',      dimensions: '24 x 16 in / 60 x 40 cm', price: null, paymentLink: 'REPLACE_ME' },
      { id: 'md', label: 'Standard',   dimensions: '36 x 24 in / 90 x 60 cm', price: null, paymentLink: 'REPLACE_ME' },
      { id: 'lg', label: 'Exhibition', dimensions: '48 x 32 in / 120 x 80 cm', price: null, paymentLink: 'REPLACE_ME' }
    ]
  },

  'pigeon-point-at-dusk': {
    title:        'Pigeon Point at Dusk',
    series:       'California Coast',
    edition:      'Edition of 10',
    enquiryParam: 'Pigeon+Point+at+Dusk',
    sizes: [
      { id: 'sm', label: 'Entry',      dimensions: '24 x 16 in / 60 x 40 cm', price: null, paymentLink: 'REPLACE_ME' },
      { id: 'md', label: 'Standard',   dimensions: '36 x 24 in / 90 x 60 cm', price: null, paymentLink: 'REPLACE_ME' },
      { id: 'lg', label: 'Exhibition', dimensions: '48 x 32 in / 120 x 80 cm', price: null, paymentLink: 'REPLACE_ME' }
    ]
  },

  'battery-survivors': {
    title:        'Battery Survivors',
    series:       'California Coast',
    edition:      'Edition of 10',
    enquiryParam: 'Battery+Survivors',
    sizes: [
      { id: 'sm', label: 'Entry',      dimensions: '24 x 16 in / 60 x 40 cm', price: null, paymentLink: 'REPLACE_ME' },
      { id: 'md', label: 'Standard',   dimensions: '36 x 24 in / 90 x 60 cm', price: null, paymentLink: 'REPLACE_ME' },
      { id: 'lg', label: 'Exhibition', dimensions: '48 x 32 in / 120 x 80 cm', price: null, paymentLink: 'REPLACE_ME' }
    ]
  },

  'the-last-minute': {
    title:        'The Last Minute',
    series:       'California Coast',
    edition:      'Edition of 10',
    enquiryParam: 'The+Last+Minute',
    sizes: [
      { id: 'sm', label: 'Entry',      dimensions: '24 x 16 in / 60 x 40 cm', price: null, paymentLink: 'REPLACE_ME' },
      { id: 'md', label: 'Standard',   dimensions: '36 x 24 in / 90 x 60 cm', price: null, paymentLink: 'REPLACE_ME' },
      { id: 'lg', label: 'Exhibition', dimensions: '48 x 32 in / 120 x 80 cm', price: null, paymentLink: 'REPLACE_ME' }
    ]
  },

  'morning-four': {
    title:        'Morning Four',
    series:       'Selected Works',
    edition:      'Edition of 10',
    enquiryParam: 'Morning+Four',
    sizes: [
      { id: 'sm', label: 'Entry',      dimensions: '24 x 16 in / 60 x 40 cm', price: null, paymentLink: 'REPLACE_ME' },
      { id: 'md', label: 'Standard',   dimensions: '36 x 24 in / 90 x 60 cm', price: null, paymentLink: 'REPLACE_ME' },
      { id: 'lg', label: 'Exhibition', dimensions: '48 x 32 in / 120 x 80 cm', price: null, paymentLink: 'REPLACE_ME' }
    ]
  },

  'pacific-vigil': {
    title:        'Pacific Vigil',
    series:       'Selected Works',
    edition:      'Edition of 10',
    enquiryParam: 'Pacific+Vigil',
    sizes: [
      { id: 'sm', label: 'Entry',      dimensions: '24 x 16 in / 60 x 40 cm', price: null, paymentLink: 'REPLACE_ME' },
      { id: 'md', label: 'Standard',   dimensions: '36 x 24 in / 90 x 60 cm', price: null, paymentLink: 'REPLACE_ME' },
      { id: 'lg', label: 'Exhibition', dimensions: '48 x 32 in / 120 x 80 cm', price: null, paymentLink: 'REPLACE_ME' }
    ]
  },

  'afterglow': {
    title:        'Afterglow',
    series:       'Selected Works',
    edition:      'Edition of 10',
    enquiryParam: 'Afterglow',
    sizes: [
      { id: 'sm', label: 'Entry',      dimensions: '24 x 16 in / 60 x 40 cm', price: null, paymentLink: 'REPLACE_ME' },
      { id: 'md', label: 'Standard',   dimensions: '36 x 24 in / 90 x 60 cm', price: null, paymentLink: 'REPLACE_ME' },
      { id: 'lg', label: 'Exhibition', dimensions: '48 x 32 in / 120 x 80 cm', price: null, paymentLink: 'REPLACE_ME' }
    ]
  }
};
