export type GameCategory =
  | "chastity"
  | "cuckold"
  | "exhibitionist"
  | "wheel"
  | "truth-dare";

export type GameWidget =
  | "dice"
  | "wheel"
  | "timer-hunt"
  | "board"
  | "counter"
  | "command"
  | "story"
  | "remote"
  | "memory"
  | "cards"
  | "master-wheel";

export type Game = {
  slug: string;
  category: GameCategory;
  title: string;
  short: string;
  intensity: 1 | 2 | 3 | 4 | 5;
  widget: GameWidget;
  rules: string[];
  prompts: string[];
  ui: string;
  image: string;
};

export const CATEGORIES: { id: GameCategory; label: string; blurb: string }[] = [
  { id: "chastity", label: "Chastity", blurb: "Denial, keyholding & trust." },
  { id: "cuckold", label: "Cuckold", blurb: "Comparison, reclaim, hotwife play." },
  { id: "exhibitionist", label: "Exhibitionist", blurb: "Risk, tease, public spice." },
  { id: "wheel", label: "Wheel of Kink", blurb: "The ultimate spinner." },
  { id: "truth-dare", label: "Truth or Dare", blurb: "Confess. Dare. Repeat." },
];

export const GAMES: Game[] = [
  // CHASTITY
  {
    slug: "chastity-dice-dominion",
    category: "chastity",
    title: "Chastity Dice Dominion",
    short: "Roll multi-sided dice for lock-up days, tasks & release conditions.",
    intensity: 4,
    widget: "dice",
    ui: "Large animated dice roller + progress calendar. Keyholder controls the interface.",
    rules: [
      "Keyholder rolls the dice for lock-up length (1–30 days), daily tasks and tease intensity.",
      "Caged partner completes tasks to earn rolls toward freedom.",
      "Wrong refusals add days. Aftercare timer auto-starts on release.",
    ],
    prompts: [
      "My locked love, edge for me five times while whispering how grateful you are to be mine.",
      "Good pet — your desperation makes me so proud. Roll again for your next denial day.",
      "Three more days. Tell me, in your own words, why my key feels safer than your freedom.",
    ],
    image: "/placeholders/games/chastity-1.jpg",
  },
  {
    slug: "key-hide-and-seek",
    category: "chastity",
    title: "Key Hide & Seek Timer",
    short: "Solve riddles before the timer runs out — wrong guesses add days.",
    intensity: 4,
    widget: "timer-hunt",
    ui: "Map-style interface or photo upload for hiding spots + countdown clock.",
    rules: [
      "Keyholder hides a virtual or physical key clue and sets a countdown.",
      "Caged partner solves riddles or completes challenges before time expires.",
      "Each wrong guess adds 24 hours to the cage.",
    ],
    prompts: [
      "Beg prettily on camera for the next clue, my denied darling.",
      "Your cage looks so beautiful when you're throbbing and helpless for me.",
      "One clue left. Earn it with a confession I haven't heard before.",
    ],
    image: "/placeholders/games/chastity-2.jpg",
  },
  {
    slug: "chastity-monopoly-empire",
    category: "chastity",
    title: "Chastity Monopoly Empire",
    short: "A devotional board — Tease Tower, Denial Dungeon, Release Resort.",
    intensity: 5,
    widget: "board",
    ui: "Custom digital board with property squares themed around body parts, teases and punishments.",
    rules: [
      "Spin to move. Land on Tease Tower (edging marathon), Denial Dungeon (extra days) or Release Resort.",
      "Collect Devotion Points to buy freedom — or trade them for kinder tasks.",
      "Passing Go means a tribute: words, worship, or one timed edge.",
    ],
    prompts: [
      "Pass Go and drip for me.",
      "Pay rent with ten minutes of worship while locked.",
      "Land on Denial Dungeon? Three more days, and tell me thank you for each one.",
    ],
    image: "/placeholders/games/chastity-3.jpg",
  },
  {
    slug: "chastity-roulette-wheel",
    category: "chastity",
    title: "Chastity Roulette Wheel",
    short: "Beautiful spinning fate — release, denial, or cruel little delights.",
    intensity: 4,
    widget: "wheel",
    ui: "Spinning wheel with custom probability weighting for days locked, tease types and rewards.",
    rules: [
      "Spin once daily or after each completed task.",
      "Outcomes range from sweet release to extended denial + adoring/humbling tasks.",
      "Both partners must agree on the wheel segments before play.",
    ],
    prompts: [
      "Spin again, my precious caged toy — let fate decide how long you ache for my touch.",
      "The wheel says ruin. Be brave. Be mine.",
      "Reward segment — describe out loud exactly how you'll thank me.",
    ],
    image: "/placeholders/games/chastity-4.jpg",
  },
  {
    slug: "edging-points-palace",
    category: "chastity",
    title: "Edging Points Palace",
    short: "Shared live counter, progress bars and the keyholder's approval.",
    intensity: 3,
    widget: "counter",
    ui: "Shared dashboard with live edging counter, progress bars and approval buttons.",
    rules: [
      "Caged partner performs commanded edges and reports each one.",
      "Keyholder taps approve/deny — approved edges earn release points.",
      "Reach the goal for ruined, milked or full release.",
    ],
    prompts: [
      "You're doing so well holding back for me… I'm so proud of your devotion.",
      "Three more, slowly. I want to feel you tremble through the screen.",
      "Stop. Hands off. Breathe. That's a point.",
    ],
    image: "/placeholders/games/chastity-5.jpg",
  },

  // CUCKOLD
  {
    slug: "cuckold-command-console",
    category: "cuckold",
    title: "Cuckold Command Console",
    short: "She drives. He receives filtered commands and a confession box.",
    intensity: 5,
    widget: "command",
    ui: "Dominant gets a full control panel; submissive sees filtered commands and a confession box.",
    rules: [
      "Hotwife issues real-time commands while teasing with details (real or fantasy).",
      "Cuck completes cleanup, fluffing or denial tasks and replies via confession box.",
      "Safe Word button always visible; pause flips into aftercare mode.",
    ],
    prompts: [
      "Tell me how much bigger he felt while you clean me up, my sweet cuck.",
      "Kneel. Thank me for letting you watch.",
      "Confess one thing you've never said out loud.",
    ],
    image: "/placeholders/games/cuckold-1.jpg",
  },
  {
    slug: "cuckold-dice-of-humiliation",
    category: "cuckold",
    title: "Cuckold Dice of Humiliation",
    short: "Comparison · Service · Denial · Reclaim — escalating dares.",
    intensity: 4,
    widget: "dice",
    ui: "Animated category dice — Comparison, Service, Denial, Reclaim.",
    rules: [
      "Roll for a category and an intensity die together.",
      "Escalates from watching together → preparing her for dates → cleanup.",
      "Either partner can swap any dare for a softer one once per session.",
    ],
    prompts: [
      "Roll high and describe in detail why you love being my beta while I ride a real bull.",
      "Service: ten minutes worshiping while I FaceTime him.",
      "Reclaim: earn me back with the most honest sentence you have.",
    ],
    image: "/placeholders/games/cuckold-2.jpg",
  },
  {
    slug: "hotwife-date-simulator",
    category: "cuckold",
    title: "Hotwife Date Simulator",
    short: "Branching choose-your-own night with photo and video slots.",
    intensity: 3,
    widget: "story",
    ui: "Choose-your-own-adventure with branching scenes and upload slots.",
    rules: [
      "Build the date night together — outfit, location, energy.",
      "Cuck earns reclaim rights by completing supportive tasks during the story.",
      "All scenarios can be acted as pure fantasy; nothing leaves the chat unless both agree.",
    ],
    prompts: [
      "I'm getting ready for him… describe how that makes your cage feel.",
      "Pick my lipstick. The redder it is, the longer you wait up.",
      "Send him the message I dictate. Word for word.",
    ],
    image: "/placeholders/games/cuckold-3.jpg",
  },
  {
    slug: "cuckold-monopoly-of-ownership",
    category: "cuckold",
    title: "Cuckold Monopoly of Ownership",
    short: "Her Pleasure · Your Denial · Bull's Territory.",
    intensity: 5,
    widget: "board",
    ui: "Board game with properties: Her Pleasure, Your Denial, Bull's Territory.",
    rules: [
      "Advance the cuck token by serving her.",
      "Landing on opponent properties triggers intense cuckold scenarios.",
      "Bankruptcy = full surrender scene + sweet aftercare.",
    ],
    prompts: [
      "Bankrupt yourself emotionally by admitting how much you crave this.",
      "Pay rent: kneel and recite three things you love about my freedom.",
      "Buy back Her Pleasure with one hour of obedient quiet.",
    ],
    image: "/placeholders/games/cuckold-4.jpg",
  },
  {
    slug: "cuckold-confession-wheel",
    category: "cuckold",
    title: "Confession Wheel",
    short: "Spin for deep humiliation + praise prompts — points toward reclaim sex.",
    intensity: 4,
    widget: "wheel",
    ui: "Spinning wheel of humiliation and praise prompts.",
    rules: [
      "Spin after each scene. Answer or perform truthfully for points.",
      "Points cash in for reclamation night — slow, full, just the two of you.",
      "Skip token allowed once per night, no questions asked.",
    ],
    prompts: [
      "Admit your favorite part of being my cuck while I edge you.",
      "Praise me out loud for ninety seconds.",
      "Tell me what scared you tonight — and what you loved about it.",
    ],
    image: "/placeholders/games/cuckold-5.jpg",
  },

  // EXHIBITIONIST
  {
    slug: "exhibispin-wheel",
    category: "exhibitionist",
    title: "ExhibiSpin Wheel",
    short: "Risk slider + spinner of locations & actions.",
    intensity: 3,
    widget: "wheel",
    ui: "Risk-level slider + spinning wheel with locations and actions.",
    rules: [
      "Pick a risk level (1–5). Spin for a public/outdoor tease.",
      "Send photo proof or a live description.",
      "Anything that breaks consent or law is auto-skipped.",
    ],
    prompts: [
      "Flash me in that semi-public spot and tell me how exposed you feel for my pleasure.",
      "Three buttons undone in the next café. Heart-rate report after.",
      "Find a quiet corner. Send me one breath, one whisper, one photo.",
    ],
    image: "/placeholders/games/exhi-1.jpg",
  },
  {
    slug: "exhibitionist-dice-dare",
    category: "exhibitionist",
    title: "Exhibitionist Dice Dare",
    short: "Multi-dice: intensity, location, duration.",
    intensity: 3,
    widget: "dice",
    ui: "Multi-dice roller with intensity, location and duration faces.",
    rules: [
      "Roll all three dice together for one combined dare.",
      "Caged partners can play in cage; toys allowed.",
      "Re-roll token granted once per session.",
    ],
    prompts: [
      "Your bravery makes me so proud and wet — complete the roll, my exhibitionist love.",
      "No panties for the next hour. Updates every fifteen minutes.",
      "Stand by the window. Tell me what the world looks like through your blush.",
    ],
    image: "/placeholders/games/exhi-2.jpg",
  },
  {
    slug: "public-quest-board",
    category: "exhibitionist",
    title: "Public Quest Board",
    short: "Monopoly-style map — landmarks unlock spicier rewards.",
    intensity: 4,
    widget: "board",
    ui: "Digital map / board of safe locations and quests.",
    rules: [
      "Move by completing challenges.",
      "Landmark squares trigger escalating exhibition rewards.",
      "Both players must approve any new location.",
    ],
    prompts: [
      "Send me proof from your current square, my daring love.",
      "Café tile — order something soft and say my name when you do.",
      "Park bench tile — fifteen minutes, one secret confession.",
    ],
    image: "/placeholders/games/exhi-3.jpg",
  },
  {
    slug: "remote-control-tease",
    category: "exhibitionist",
    title: "Remote Control Tease",
    short: "Live panel for app-enabled toys + public check-ins.",
    intensity: 4,
    widget: "remote",
    ui: "Live control panel for app-enabled toys + public check-in pings.",
    rules: [
      "Use any compatible remote toy of your choice.",
      "Partner controls intensity in real time during semi-public outings.",
      "Tap the safe word banner to cut all signals instantly.",
    ],
    prompts: [
      "Try not to moan too loudly where people can hear how much you belong to me.",
      "Intensity 4 for 60 seconds. Smile through it.",
      "Pause. Breathe. Tell me you're okay. Then I make you tremble again.",
    ],
    image: "/placeholders/games/exhi-4.jpg",
  },
  {
    slug: "exposure-memory-game",
    category: "exhibitionist",
    title: "Exposure Memory Game",
    short: "Match pairs to unlock riskier dares.",
    intensity: 2,
    widget: "memory",
    ui: "Card-matching grid with escalating exposure dares revealed on each match.",
    rules: [
      "Flip two cards per turn. Each match reveals a public dare.",
      "Refused dare? Two cards stay revealed — easier for your partner.",
      "First to complete three dares wins choice of aftercare.",
    ],
    prompts: [
      "You look so delicious when you're nervously obeying me in public.",
      "Match unlocked — soft dare, take it with grace.",
      "Hardest match of the night. I'll be waiting with warm hands.",
    ],
    image: "/placeholders/games/exhi-5.jpg",
  },

  // MASTER WHEEL
  {
    slug: "ultimate-wheel-of-kink",
    category: "wheel",
    title: "Velvet Desire Ultimate Wheel of Kink",
    short: "Five modes. Mild → extreme. Saveable custom wheels.",
    intensity: 5,
    widget: "master-wheel",
    ui: "Multi-layered animated wheel · intensity slider (Mild–Extreme) · favorites toggle · save your wheels.",
    rules: [
      "Spin once or many times per session.",
      "Combines elements from every category. Aftercare prompt on every landing.",
      "Five modes: Pure Random Kink · Chastity-Focused · Cuckold Edition · Exhibitionist Roulette · Couples Custom Blend.",
    ],
    prompts: [
      "My perfect denied pet, edge in public while thinking of me with someone else…",
      "Tonight you serve. Tomorrow you spin again.",
      "Custom blend: one tease, one trust, one tender kiss.",
    ],
    image: "/placeholders/games/wheel-1.jpg",
  },

  // TRUTH OR DARE
  {
    slug: "truth-or-dare-kinky",
    category: "truth-dare",
    title: "Truth or Dare — Kinky Edition",
    short: "Truth · Dare · Wild. Intensity filter and penalty spin.",
    intensity: 4,
    widget: "cards",
    ui: "Digital card deck + spin-to-choose mode. Separate Truth / Dare / Wild piles with intensity filter.",
    rules: [
      "Draw a card or spin a pile. Complete it or take the penalty spin.",
      "Filter by intensity. Save favorites to your private deck.",
      "Safe Word banner pauses everything and surfaces aftercare prompts.",
    ],
    prompts: [
      "Truth — Describe the hottest cuckold fantasy you have about me.",
      "Dare — Wear your chastity cage out and send me a discreet photo from a public place.",
      "Wild — Call me while you're touching yourself in a risky spot and confess everything.",
    ],
    image: "/placeholders/games/td-1.jpg",
  },
];

export const flames = (n: number) => "🔥".repeat(n);
