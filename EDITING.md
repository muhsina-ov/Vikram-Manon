# Editing Guide — Shubha Vivaham

Fast customer customization guide for `shubha-vivaham`.

## Primary Customer Data

All text, dates, events, venue, and image references live in:
- `editable/wedding-data.js`

### What to edit in `editable/wedding-data.js`:
- **Couple details**:
  - `couple.brideFirst`: Bride's first name (e.g. `"Ananya"`)
  - `couple.groomFirst`: Groom's first name (e.g. `"Rohit"`)
  - `couple.monogram`: Wax seal monogram (e.g. `"A · R"`)
  - `couple.hashtag`: Couple hashtag (e.g. `"#AnanyaWedsRohit"`)
  - `couple.dateBadge`: Date display string (e.g. `"22 · 04 · 2027"`)
  - `couple.coupleImage`: Path to couple portrait (e.g. `"./editable/assets/couple.png"`)
- **Greetings & Parents**:
  - `greetings.telugu`: Regional greeting (e.g. `"శుభ వివాహం"`)
  - `greetings.english`: English greeting (e.g. `"Shubha Vivaham"`)
  - `parents.brideParents`: Bride parents statement
  - `parents.groomParents`: Groom parents statement
- **Invitation & Countdown**:
  - `invitation.message`: Text revealed inside the animated envelope
  - `countdown.targetISO`: Target ISO date-time string (e.g. `"2027-04-22T04:42:00+05:30"`)
  - `countdown.label`: Countdown heading (e.g. `"Until the Muhurtham"`)
- **Events**:
  - `events[]`: Array of events with `id`, `label`, `title`, `dateLine`, `timeLine`, `startISO`, `endISO`, and `note`.
- **Venue & Map**:
  - `venue.name`: Venue name
  - `venue.address`: Venue physical address
  - `venue.mapsQuery`: Search query for Google Maps embed and directions
- **Footer**:
  - `footer.blessing`: Blessing headline
  - `footer.creditLine`: Footer attribution string
  - `footer.instagramUrl`: Instagram link

## Replacing Assets

Place customer replacement files in:
- `editable/assets/couple.png` — Couple portrait illustration
- `editable/assets/og-image.jpg` — Social share image preview
- `editable/assets/` — Any decorative borders/overlays if needed

## Testing

Verify syntax and check local preview:
```bash
node --check editable/wedding-data.js
```
Open `http://localhost:9028/index.html` in browser.
