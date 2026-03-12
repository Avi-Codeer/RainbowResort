# RainbowResort

Website for Rainbow Resort – Best Restaurant & Celebration Venue in Saharsa, Bihar, India.

## About

A fully static, single-page website for Rainbow Resort. No build tools or dependencies required – just open `index.html` in a browser or serve it with any static file server.

## Structure

```
RainbowResort/
├── index.html          # Main HTML (all 10 sections)
├── css/
│   └── styles.css      # All styles (responsive, mobile-first)
├── js/
│   └── main.js         # Interactivity (menu tabs, scroll, form, WhatsApp)
└── images/             # Add actual resort photos here
```

## Sections

1. **Hero** – Full-page banner with CTA buttons
2. **About** – Resort introduction
3. **Celebrations & Events** – Birthday, wedding, corporate bookings
4. **Why Choose Us** – Feature highlight cards
5. **Amenities** – Grid of 12 amenities
6. **Food & Dining** – Tabbed menu (Starters / Main Course / Beverages / Desserts)
7. **Birthday Gallery** – Photo grid
8. **Guest Reviews** – Star-rated testimonials
9. **Contact** – Form, map embed, address
10. **Footer** – Links, socials, copyright

## Setup Before Going Live

1. **Phone number** – Replace every occurrence of `+91XXXXXXXXXX` / `+91-XXXX-XXXXXX` / `91XXXXXXXXXX` in `index.html` and `js/main.js` with the actual Rainbow Resort contact number.
2. **Google Maps** – Update the `<iframe src="...">` in the Contact section with the exact Google Maps embed URL for Rainbow Resort.
3. **Images** – Add real resort photos to the `images/` folder and replace the placeholder `<div class="gallery-placeholder">` elements in the gallery with `<img>` tags.
4. **Social links** – Update the `href="#"` social media links in the footer with actual profile URLs.
