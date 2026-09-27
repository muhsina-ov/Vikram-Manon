# Editing Guide — Vikram & Manon (Shubha Vivaham)

Customer customization and management guide for Vikram & Manon's wedding invitation.

## Primary Customer Data

All text, dates, events, venue, and image references live in:
- `editable/wedding-data.js`

### What to edit in `editable/wedding-data.js`:
- **Couple Details (Groom's Side Order)**:
  - `groomFirst`: Groom's name (`"Vikram"`) — displayed first
  - `brideFirst`: Bride's name (`"Manon"`) — displayed second
  - `monogram`: Wax seal monogram (`"V · M"`)
  - `dateBadge`: Date display string (`"15 · 11 · 2026"`)
  - `coupleImage`: Path to couple portrait (`"./editable/assets/couple.png"` or `couple.jpg`)
- **Greetings & Parents**:
  - `greetingTamil`: Tamil heading (`"திருமண விழா அழைப்பித்தம்"`)
  - `greetingEnglish`: English greeting (`"Shubha Vivaham"`)
  - `blessingTamil`: Auspicious Tamil blessing (`"ஸ்ரீ பண்டியத்தின் துணை"`)
  - `groomParents`: Groom parents statement (appears first)
  - `brideParents`: Bride parents statement (appears second)
- **Invitation & Countdown**:
  - `inviteMessage`: Text revealed inside the animated envelope
  - `countdownTargetISO`: Target date-time (`"2026-11-15T06:00:00+05:30"`)
  - `countdownLabel`: Countdown heading (`"Until the Wedding"`)
- **Events**:
  - `events[]`: Order is Reception (Nov 14), then Wedding (Nov 15)
  - Sacred South Indian Mangala Kalasam SVG displayed above Wedding
  - Sacred Kalyana Malai (wedding garlands) SVG displayed above Reception
- **Venue & Map**:
  - `venueName`: `"HOTEL THE SAVERA"`
  - `venueAddress`: `"No. 146, Dr. Radhakrishnan Salai, Chennai, TN - 600 034"`
  - `mapsQuery`: Search query for Google Maps embed and directions
- **Footer**:
  - `footerBlessing`: `"மணமகன் அழைப்பு · Invitation from the Groom's side"`
  - `creditLine`: `"Crafted with ♥ by InviteStory · @invitestory.in"`

## Replacing Photographs (Customer Real Photos)

When the customer provides real photographs:
1. Place their couple photo in `editable/assets/couple.png` (or `editable/assets/couple.jpg`).
2. If using `.jpg`, update line 29 of `editable/wedding-data.js`:
   ```javascript
   coupleImage: "./editable/assets/couple.jpg",
   ```
3. The layout automatically applies graceful royal framing, optimal aspect-ratio scaling, and prevents image clipping on both iOS and Android.

## Background Music Options

The current active background music is the customer's **Preferred Track** (festive traditional Mangala Vadhyam Nadaswaram wedding score).

Alternative tracks provided by the customer are stored in `editable/assets/`:
- `editable/assets/music_alt_vinayaka_ninnu_22s.mp3`: T.E. Palaniswamy - Vinayaka Ninnu (2:06–2:28 exact customer selection)
- `editable/assets/music_alt_vinayaka_ninnu_30s.mp3`: T.E. Palaniswamy - Vinayaka Ninnu (extended 30s festive loop)

To switch to an alternative track:
Simply copy either file over `assets/music.mp3` or update `music.src` in `editable/wedding-data.js`.

## Testing

Verify syntax and check local preview:
```bash
node --check editable/wedding-data.js
node --check assets/index-D4tjOMjU.js
```
Open `http://localhost:9028/index.html` in browser.
