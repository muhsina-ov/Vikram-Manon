// =============================================================================
// SHUBHA VIVAHAM — WEDDING DATA
// Customer: Vikram & Manon  ·  Chennai
//
// EVERY value below is taken verbatim from the customer's printed card
// (chats/doc03757120260919115221.pdf + chats/doc03757520260919115636.pdf).
// Do not add functions, dates, timings, names or links that are not on the card.
// =============================================================================

window.WEDDING_DATA = {
  // ---------------------------------------------------------------- couple --
  groomFirst: "Vikram",
  brideFirst: "Manon",

  // Wax-seal monogram on the invitation envelope.
  monogram: "V · M",

  // Footer headline. The card front reads "Vikram - Manon".
  footerNames: "Vikram & Manon",

  // No hashtag appears on the customer's card — left empty on purpose so the
  // footer does not print an invented one.
  hashtag: "",

  // Hero date badge (wedding date).
  dateBadge: "15 · 11 · 2026",

  // Couple portrait (placed in editable/assets/couple.png or couple.jpg)
  coupleImage: "./editable/assets/couple.png",

  // ------------------------------------------------------------- greetings --
  // Tamil heading exactly as printed on the customer's card.
  greetingTamil: "திருமண விழா அழைப்பித்தம்",
  greetingEnglish: "Shubha Vivaham",
  // "ஸ்ரீ பச்சையம்மன் துணை" — Auspicious blessing in Tamil requested by customer
  blessingTamil: "ஸ்ரீ பச்சையம்மன் துணை",

  // ----------------------------------------------------------- invitation --
  // Full invitation wording, in the card's own order and spelling.
  inviteMessage:
    "Mr. Timiri Parameswaran Sivasankar & Mrs. Timiri Umasankar together With " +
    "Mr. Judde de Larivière Jean & Mrs. Judde de Larivière Cécile cordially invite you " +
    "to bless and grace the Auspicious occasion of the marriage of Vikram & Manon.",

  // -------------------------------------------------------------- family ---
  groomParents: "Mr. Timiri Parameswaran Sivasankar & Mrs. Timiri Umasankar",
  brideParents: "Mr. Judde de Larivière Jean & Mrs. Judde de Larivière Cécile",

  groomLineage:
    "Grandson of Mr. Timiri Parameswaran & Late Mrs. Saraswathi Parameswaran and " +
    "Late Mr. Swaminathan Vidhuran & Late Mrs. Vijayalakshmi Vidhuran",

  brideLineage:
    "Granddaughter of Late Mr. Gilles Judde de Larivière & Mrs. Geneviève Judde de Larivière and " +
    "Late Mr. Joseph-Louis Escoffier & Mrs. Sophie Escoffier",

  // ------------------------------------------------------------ countdown --
  countdownTargetISO: "2026-11-15T06:00:00+05:30",
  countdownLabel: "Until the Wedding",

  // --------------------------------------------------------------- events --
  // Order and wording follow the card: RECEPTION, then WEDDING.
  events: [
    {
      id: "reception",
      label: "Reception",
      title: "Reception",
      dateLine: "Saturday, 14 November 2026",
      timeMain: "7:00",
      timeSub: "PM",
      timeRange: "7:00 PM onwards",
      timeLine: "7:00 PM",
      startISO: "2026-11-14T19:00:00+05:30",
      // The card says "onwards" (open ended). 23:00 is only the calendar block
      // length required by the .ics / Google Calendar formats.
      endISO: "2026-11-14T23:00:00+05:30"
    },
    {
      id: "muhurtham",
      label: "Wedding",
      title: "Wedding",
      dateLine: "Sunday, 15 November 2026",
      timeMain: "6:00",
      timeSub: "AM",
      timeRange: "6:00 AM – 10:00 AM",
      timeLine: "6:00 AM",
      startISO: "2026-11-15T06:00:00+05:30",
      endISO: "2026-11-15T10:00:00+05:30"
    }
  ],

  // ---------------------------------------------------------------- venue --
  venueName: "HOTEL THE SAVERA",
  venueAddress: "No. 146, Dr. Radhakrishnan Salai, Chennai, TN - 600 034",
  // Search query used for the map embed + "Get Directions".
  // The card's own QR (https://q.me-qr.com/eguyy6f1) resolves to an ad-gated
  // me-qr.com content locker with unrelated content — it is NOT a Maps link,
  // so it is deliberately NOT used. This is the venue's real, verified
  // address (hotel site + Wikipedia) so the map pin lands correctly.
  mapsQuery: "Hotel The Savera, No. 146, Dr. Radhakrishnan Salai, Mylapore, Chennai, Tamil Nadu 600004",

  // --------------------------------------------------------------- footer --
  // Footer blessing / side indicator (empty if not needed)
  footerBlessing: "",
  creditLine: "Crafted with love by InviteStory · @invitestory.in",

  // ------------------------------------------------------- mandap opening --
  mandap: {
    enabled: true,
    gopuram: "./assets/img/gopuram.webp",
    gopuramFallback: "./assets/img/gopuram.jpg",
    doorLeft: "./assets/img/mandap-door-left.jpg",
    doorRight: "./assets/img/mandap-door-right.jpg",
    // Door position as a fraction of the gopuram image box.
    doorLeftFrom: 44.0,
    doorRightFrom: 50.45,
    doorTop: 86.5,
    doorWidth: 6.45,
    ctaLabel: "Tap to open the mandap"
  },

  // -------------------------------------------------- instrumental music --
  music: {
    enabled: true,
    // Customer audio track from project folder with automatic fallbacks
    src: "./assets/music.mp3",
    fallbackSrc: "./music.mpeg",
    // Raga-scale degrees (semitones) for synthetic fallback
    scale: [0, 1, 2, 4, 5, 7, 8, 10],
    root: 233.08, // Bb3 — soft, sits under a nadaswaram
    drone: [116.54, 174.61, 233.08], // Sa · Pa · Sa (tanpura)
    bellPartials: [1, 2.76, 5.4, 8.93], // temple-bell inharmonic ratios
    tempoMs: 640
  }
};
