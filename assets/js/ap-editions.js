/**
 * Alternative Photographic -- Edition Data
 * =========================================
 * HOW TO ADD PAYMENT LINKS (Andy -- read this):
 *
 *   1. Set `paymentLink` to the Stripe Payment Link URL for that size
 *      (create: Stripe Dashboard -> Payment Links -> + New)
 *   2. Once paymentLink is set for a size, the "Acquire this Edition"
 *      CTA activates automatically for that size.
 *
 * PLACEHOLDER SENTINEL -- do not ship live:
 *   paymentLink: "REPLACE_ME"  -> CTA falls back to enquiry;
 *                                  no broken or fake link ships
 *
 * PRICES: set. Do not change without Andy's authorisation.
 *   Entry $95 / Standard $225 / Exhibition $350 (2026-08-10)
 *
 * EDITION SIZES — per-tier defaults (v2.0, 2026-08-12):
 *   Entry 50 / Standard 30 / Exhibition 10 (may vary per work; defaults apply
 *   to all 19 current works). See editions: object on each work entry.
 *
 * PRINT SIZES -- orientation applied per-work from actual image dimensions:
 *   Landscape works  Entry 19 x 13 in / Standard 36 x 24 in / Exhibition 45 x 30 in
 *   Portrait works   Entry 13 x 19 in / Standard 24 x 36 in / Exhibition 30 x 45 in
 * =========================================
 */

/* global window */
window.AP_EDITIONS = {

  /* ── VENICE ─────────────────────────────────────────────────────────────── */

  'la-salute-at-dawn': {               /* image: venicecathedral.webp 1920x1280 LANDSCAPE */
    title:        'La Salute at Dawn',
    series:       'Venice',
    editions:     { sm: 'Entry edition &mdash; 50 numbered impressions', md: 'Standard edition &mdash; 30 numbered impressions', lg: 'Exhibition edition &mdash; 10 numbered impressions' },
    enquiryParam: 'La+Salute+at+Dawn',
    sizes: [
      { id: 'sm', label: 'Entry',      dimensions: '19 x 13 in', price: '$95',  paymentLink: 'REPLACE_ME' },
      { id: 'md', label: 'Standard',   dimensions: '36 x 24 in', price: '$225', paymentLink: 'REPLACE_ME' },
      { id: 'lg', label: 'Exhibition', dimensions: '45 x 30 in', price: '$350', paymentLink: 'REPLACE_ME' }
    ]
  },

  'red-lanterns-giudecca': {           /* image: venicepromenade.webp 1273x1920 PORTRAIT */
    title:        'Red Lanterns, Giudecca',
    series:       'Venice',
    editions:     { sm: 'Entry edition &mdash; 50 numbered impressions', md: 'Standard edition &mdash; 30 numbered impressions', lg: 'Exhibition edition &mdash; 10 numbered impressions' },
    enquiryParam: 'Red+Lanterns,+Giudecca',
    sizes: [
      { id: 'sm', label: 'Entry',      dimensions: '13 x 19 in', price: '$95',  paymentLink: 'REPLACE_ME' },
      { id: 'md', label: 'Standard',   dimensions: '24 x 36 in', price: '$225', paymentLink: 'REPLACE_ME' },
      { id: 'lg', label: 'Exhibition', dimensions: '30 x 45 in', price: '$350', paymentLink: 'REPLACE_ME' }
    ]
  },

  'the-grand-canal-morning': {         /* image: venicecanal.webp 1920x1280 LANDSCAPE */
    title:        'The Grand Canal, Morning',
    series:       'Venice',
    editions:     { sm: 'Entry edition &mdash; 50 numbered impressions', md: 'Standard edition &mdash; 30 numbered impressions', lg: 'Exhibition edition &mdash; 10 numbered impressions' },
    enquiryParam: 'The+Grand+Canal,+Morning',
    sizes: [
      { id: 'sm', label: 'Entry',      dimensions: '19 x 13 in', price: '$95',  paymentLink: 'REPLACE_ME' },
      { id: 'md', label: 'Standard',   dimensions: '36 x 24 in', price: '$225', paymentLink: 'REPLACE_ME' },
      { id: 'lg', label: 'Exhibition', dimensions: '45 x 30 in', price: '$350', paymentLink: 'REPLACE_ME' }
    ]
  },

  'la-serenissima-after-dark': {       /* image: venice.webp 1280x1920 PORTRAIT */
    title:        'La Serenissima After Dark',
    series:       'Venice',
    editions:     { sm: 'Entry edition &mdash; 50 numbered impressions', md: 'Standard edition &mdash; 30 numbered impressions', lg: 'Exhibition edition &mdash; 10 numbered impressions' },
    enquiryParam: 'La+Serenissima+After+Dark',
    sizes: [
      { id: 'sm', label: 'Entry',      dimensions: '13 x 19 in', price: '$95',  paymentLink: 'REPLACE_ME' },
      { id: 'md', label: 'Standard',   dimensions: '24 x 36 in', price: '$225', paymentLink: 'REPLACE_ME' },
      { id: 'lg', label: 'Exhibition', dimensions: '30 x 45 in', price: '$350', paymentLink: 'REPLACE_ME' }
    ]
  },

  'under-canvas-dorsoduro': {          /* image: gondolas.webp 1483x1920 PORTRAIT */
    title:        'Under Canvas, Dorsoduro',
    series:       'Venice',
    editions:     { sm: 'Entry edition &mdash; 50 numbered impressions', md: 'Standard edition &mdash; 30 numbered impressions', lg: 'Exhibition edition &mdash; 10 numbered impressions' },
    enquiryParam: 'Under+Canvas,+Dorsoduro',
    sizes: [
      { id: 'sm', label: 'Entry',      dimensions: '13 x 19 in', price: '$95',  paymentLink: 'REPLACE_ME' },
      { id: 'md', label: 'Standard',   dimensions: '24 x 36 in', price: '$225', paymentLink: 'REPLACE_ME' },
      { id: 'lg', label: 'Exhibition', dimensions: '30 x 45 in', price: '$350', paymentLink: 'REPLACE_ME' }
    ]
  },

  'carnevale': {                       /* image: venicecarnival.webp 1278x1920 PORTRAIT */
    title:        'Carnevale',
    series:       'Venice',
    editions:     { sm: 'Entry edition &mdash; 50 numbered impressions', md: 'Standard edition &mdash; 30 numbered impressions', lg: 'Exhibition edition &mdash; 10 numbered impressions' },
    enquiryParam: 'Carnevale',
    sizes: [
      { id: 'sm', label: 'Entry',      dimensions: '13 x 19 in', price: '$95',  paymentLink: 'REPLACE_ME' },
      { id: 'md', label: 'Standard',   dimensions: '24 x 36 in', price: '$225', paymentLink: 'REPLACE_ME' },
      { id: 'lg', label: 'Exhibition', dimensions: '30 x 45 in', price: '$350', paymentLink: 'REPLACE_ME' }
    ]
  },

  'the-mask-makers': {                 /* image: venicemasks.webp 1920x1280 LANDSCAPE */
    title:        'The Mask Makers',
    series:       'Venice',
    editions:     { sm: 'Entry edition &mdash; 50 numbered impressions', md: 'Standard edition &mdash; 30 numbered impressions', lg: 'Exhibition edition &mdash; 10 numbered impressions' },
    enquiryParam: 'The+Mask+Makers',
    sizes: [
      { id: 'sm', label: 'Entry',      dimensions: '19 x 13 in', price: '$95',  paymentLink: 'REPLACE_ME' },
      { id: 'md', label: 'Standard',   dimensions: '36 x 24 in', price: '$225', paymentLink: 'REPLACE_ME' },
      { id: 'lg', label: 'Exhibition', dimensions: '45 x 30 in', price: '$350', paymentLink: 'REPLACE_ME' }
    ]
  },

  /* ── HEBRIDES & HIGHLANDS ────────────────────────────────────────────────── */

  'luskentyre-strand': {               /* image: lewisbeach.webp 1920x960 LANDSCAPE */
    title:        'Luskentyre Strand',
    series:       'Hebrides & Highlands',
    editions:     { sm: 'Entry edition &mdash; 50 numbered impressions', md: 'Standard edition &mdash; 30 numbered impressions', lg: 'Exhibition edition &mdash; 10 numbered impressions' },
    enquiryParam: 'Luskentyre+Strand',
    sizes: [
      { id: 'sm', label: 'Entry',      dimensions: '19 x 13 in', price: '$95',  paymentLink: 'REPLACE_ME' },
      { id: 'md', label: 'Standard',   dimensions: '36 x 24 in', price: '$225', paymentLink: 'REPLACE_ME' },
      { id: 'lg', label: 'Exhibition', dimensions: '45 x 30 in', price: '$350', paymentLink: 'REPLACE_ME' }
    ]
  },

  'the-blackhouse-harris': {           /* image: harriscottages.webp 1920x1280 LANDSCAPE */
    title:        'The Blackhouse, Harris',
    series:       'Hebrides & Highlands',
    editions:     { sm: 'Entry edition &mdash; 50 numbered impressions', md: 'Standard edition &mdash; 30 numbered impressions', lg: 'Exhibition edition &mdash; 10 numbered impressions' },
    enquiryParam: 'The+Blackhouse,+Harris',
    sizes: [
      { id: 'sm', label: 'Entry',      dimensions: '19 x 13 in', price: '$95',  paymentLink: 'REPLACE_ME' },
      { id: 'md', label: 'Standard',   dimensions: '36 x 24 in', price: '$225', paymentLink: 'REPLACE_ME' },
      { id: 'lg', label: 'Exhibition', dimensions: '45 x 30 in', price: '$350', paymentLink: 'REPLACE_ME' }
    ]
  },

  'eilean-donan': {                    /* image: eileencastle.webp 1920x1280 LANDSCAPE */
    title:        'Eilean Donan',
    series:       'Hebrides & Highlands',
    editions:     { sm: 'Entry edition &mdash; 50 numbered impressions', md: 'Standard edition &mdash; 30 numbered impressions', lg: 'Exhibition edition &mdash; 10 numbered impressions' },
    enquiryParam: 'Eilean+Donan',
    sizes: [
      { id: 'sm', label: 'Entry',      dimensions: '19 x 13 in', price: '$95',  paymentLink: 'REPLACE_ME' },
      { id: 'md', label: 'Standard',   dimensions: '36 x 24 in', price: '$225', paymentLink: 'REPLACE_ME' },
      { id: 'lg', label: 'Exhibition', dimensions: '45 x 30 in', price: '$350', paymentLink: 'REPLACE_ME' }
    ]
  },

  /* ── ALPINE & RIVIERA ───────────────────────────────────────────────────── */

  'rue-basse-monaco-ville': {          /* image: monaco.webp 1280x1920 PORTRAIT */
    title:        'Rue Basse, Monaco-Ville',
    series:       'Alpine & Riviera',
    editions:     { sm: 'Entry edition &mdash; 50 numbered impressions', md: 'Standard edition &mdash; 30 numbered impressions', lg: 'Exhibition edition &mdash; 10 numbered impressions' },
    enquiryParam: 'Rue+Basse,+Monaco-Ville',
    sizes: [
      { id: 'sm', label: 'Entry',      dimensions: '13 x 19 in', price: '$95',  paymentLink: 'REPLACE_ME' },
      { id: 'md', label: 'Standard',   dimensions: '24 x 36 in', price: '$225', paymentLink: 'REPLACE_ME' },
      { id: 'lg', label: 'Exhibition', dimensions: '30 x 45 in', price: '$350', paymentLink: 'REPLACE_ME' }
    ]
  },

  'the-approach': {                    /* image: matterhorn.webp 1280x1920 PORTRAIT */
    title:        'The Approach',
    series:       'Alpine & Riviera',
    editions:     { sm: 'Entry edition &mdash; 50 numbered impressions', md: 'Standard edition &mdash; 30 numbered impressions', lg: 'Exhibition edition &mdash; 10 numbered impressions' },
    enquiryParam: 'The+Approach',
    sizes: [
      { id: 'sm', label: 'Entry',      dimensions: '13 x 19 in', price: '$95',  paymentLink: 'REPLACE_ME' },
      { id: 'md', label: 'Standard',   dimensions: '24 x 36 in', price: '$225', paymentLink: 'REPLACE_ME' },
      { id: 'lg', label: 'Exhibition', dimensions: '30 x 45 in', price: '$350', paymentLink: 'REPLACE_ME' }
    ]
  },

  /* ── CALIFORNIA COAST ───────────────────────────────────────────────────── */

  'ice-plant-season-monterey': {       /* image: monterey.webp 800x1200 PORTRAIT */
    title:        'Ice Plant Season, Monterey',
    series:       'California Coast',
    editions:     { sm: 'Entry edition &mdash; 50 numbered impressions', md: 'Standard edition &mdash; 30 numbered impressions', lg: 'Exhibition edition &mdash; 10 numbered impressions' },
    enquiryParam: 'Ice+Plant+Season,+Monterey',
    sizes: [
      { id: 'sm', label: 'Entry',      dimensions: '13 x 19 in', price: '$95',  paymentLink: 'REPLACE_ME' },
      { id: 'md', label: 'Standard',   dimensions: '24 x 36 in', price: '$225', paymentLink: 'REPLACE_ME' },
      { id: 'lg', label: 'Exhibition', dimensions: '30 x 45 in', price: '$350', paymentLink: 'REPLACE_ME' }
    ]
  },

  'pigeon-point-at-dusk': {            /* image: pidgeonpoint.webp 1200x675 LANDSCAPE */
    title:        'Pigeon Point at Dusk',
    series:       'California Coast',
    editions:     { sm: 'Entry edition &mdash; 50 numbered impressions', md: 'Standard edition &mdash; 30 numbered impressions', lg: 'Exhibition edition &mdash; 10 numbered impressions' },
    enquiryParam: 'Pigeon+Point+at+Dusk',
    sizes: [
      { id: 'sm', label: 'Entry',      dimensions: '19 x 13 in', price: '$95',  paymentLink: 'REPLACE_ME' },
      { id: 'md', label: 'Standard',   dimensions: '36 x 24 in', price: '$225', paymentLink: 'REPLACE_ME' },
      { id: 'lg', label: 'Exhibition', dimensions: '45 x 30 in', price: '$350', paymentLink: 'REPLACE_ME' }
    ]
  },

  'battery-survivors': {               /* image: abandoned-bunker.webp 1920x1279 LANDSCAPE */
    title:        'Battery Survivors',
    series:       'California Coast',
    editions:     { sm: 'Entry edition &mdash; 50 numbered impressions', md: 'Standard edition &mdash; 30 numbered impressions', lg: 'Exhibition edition &mdash; 10 numbered impressions' },
    enquiryParam: 'Battery+Survivors',
    sizes: [
      { id: 'sm', label: 'Entry',      dimensions: '19 x 13 in', price: '$95',  paymentLink: 'REPLACE_ME' },
      { id: 'md', label: 'Standard',   dimensions: '36 x 24 in', price: '$225', paymentLink: 'REPLACE_ME' },
      { id: 'lg', label: 'Exhibition', dimensions: '45 x 30 in', price: '$350', paymentLink: 'REPLACE_ME' }
    ]
  },

  'the-last-minute': {                 /* image: sunset1.webp 1280x1920 PORTRAIT */
    title:        'The Last Minute',
    series:       'California Coast',
    editions:     { sm: 'Entry edition &mdash; 50 numbered impressions', md: 'Standard edition &mdash; 30 numbered impressions', lg: 'Exhibition edition &mdash; 10 numbered impressions' },
    enquiryParam: 'The+Last+Minute',
    sizes: [
      { id: 'sm', label: 'Entry',      dimensions: '13 x 19 in', price: '$95',  paymentLink: 'REPLACE_ME' },
      { id: 'md', label: 'Standard',   dimensions: '24 x 36 in', price: '$225', paymentLink: 'REPLACE_ME' },
      { id: 'lg', label: 'Exhibition', dimensions: '30 x 45 in', price: '$350', paymentLink: 'REPLACE_ME' }
    ]
  },

  /* ── SELECTED WORKS ─────────────────────────────────────────────────────── */

  'morning-four': {                    /* image: lexingtonrowers.webp 1845x801 LANDSCAPE */
    title:        'Morning Four',
    series:       'Selected Works',
    editions:     { sm: 'Entry edition &mdash; 50 numbered impressions', md: 'Standard edition &mdash; 30 numbered impressions', lg: 'Exhibition edition &mdash; 10 numbered impressions' },
    enquiryParam: 'Morning+Four',
    sizes: [
      { id: 'sm', label: 'Entry',      dimensions: '19 x 13 in', price: '$95',  paymentLink: 'REPLACE_ME' },
      { id: 'md', label: 'Standard',   dimensions: '36 x 24 in', price: '$225', paymentLink: 'REPLACE_ME' },
      { id: 'lg', label: 'Exhibition', dimensions: '45 x 30 in', price: '$350', paymentLink: 'REPLACE_ME' }
    ]
  },

  'pacific-vigil': {                   /* image: mexico.webp 1920x1280 LANDSCAPE */
    title:        'Pacific Vigil',
    series:       'Selected Works',
    editions:     { sm: 'Entry edition &mdash; 50 numbered impressions', md: 'Standard edition &mdash; 30 numbered impressions', lg: 'Exhibition edition &mdash; 10 numbered impressions' },
    enquiryParam: 'Pacific+Vigil',
    sizes: [
      { id: 'sm', label: 'Entry',      dimensions: '19 x 13 in', price: '$95',  paymentLink: 'REPLACE_ME' },
      { id: 'md', label: 'Standard',   dimensions: '36 x 24 in', price: '$225', paymentLink: 'REPLACE_ME' },
      { id: 'lg', label: 'Exhibition', dimensions: '45 x 30 in', price: '$350', paymentLink: 'REPLACE_ME' }
    ]
  },

  'afterglow': {                       /* image: twilighthours.webp 1280x1920 PORTRAIT */
    title:        'Afterglow',
    series:       'Selected Works',
    editions:     { sm: 'Entry edition &mdash; 50 numbered impressions', md: 'Standard edition &mdash; 30 numbered impressions', lg: 'Exhibition edition &mdash; 10 numbered impressions' },
    enquiryParam: 'Afterglow',
    sizes: [
      { id: 'sm', label: 'Entry',      dimensions: '13 x 19 in', price: '$95',  paymentLink: 'REPLACE_ME' },
      { id: 'md', label: 'Standard',   dimensions: '24 x 36 in', price: '$225', paymentLink: 'REPLACE_ME' },
      { id: 'lg', label: 'Exhibition', dimensions: '30 x 45 in', price: '$350', paymentLink: 'REPLACE_ME' }
    ]
  }

};
