export type Top15Kink = {
  slug: string;
  title: string;
  paragraph: string;
  trend: string;
  combo: string;
  explore: string;
  image: string;
};

const t15 = (n: number) => `/placeholders/top15/top15${n}.jpg`;

export const top15Kinks: Top15Kink[] = [
  { slug: "flr", title: "Female Led Relationship", paragraph: "Commanding his world — intimate touches, daily rituals, pleasures — while he attends to your every desire. FLR turns the ordinary into delicious foreplay.", trend: "Growing among urban women seeking agency in modern marriages. Strongly tied to D/s dynamics.", combo: "Chastity + Orgasm Control.", explore: "FLR rules for couples, or consent workshops.", image: t15(1) },
  { slug: "chastity-control", title: "Chastity (Keyholding)", paragraph: "You hold the key. He stays in sweet denial, his desperation fueling your power — and the eventual release belongs entirely to you.", trend: "Exploding in popularity, especially alongside FLR.", combo: "FLR + Orgasm Control.", explore: "Keyholder beginner guides.", image: t15(2) },
  { slug: "hotwifing", title: "Cuckolding / Hotwifing", paragraph: "The thrill of knowing — or watching — a partner pleasure another. Renewed desire, sharper intimacy, total erotic freedom.", trend: "A notable metro-city rise via discreet communities.", combo: "Humiliation + Voyeurism.", explore: "Ethical hotwife communities.", image: t15(3) },
  { slug: "exhibitionism", title: "Exhibitionism", paragraph: "The electric rush of being seen — teasing in semi-public, private photos, controlled reveals that make you feel irresistibly desired.", trend: "Active underground communities; explored safely in private settings.", combo: "Voyeurism + Semi-Public.", explore: "Ethical exhibitionism stories.", image: t15(4) },
  { slug: "voyeurism", title: "Voyeurism", paragraph: "Heart pounding as you watch — or let yourself be watched — turning observation into pure arousal.", trend: "A very common fantasy with discreet metro communities.", combo: "Exhibitionism + Hotwifing.", explore: "Voyeurism couples guide.", image: t15(5) },
  { slug: "ds247", title: "24/7 D/s Roles", paragraph: "Power exchange that flows beyond the bedroom — soft rules, daily texts, protocols that keep the spark alive all day.", trend: "Growing via digital communities and light daily integration.", combo: "Ownership + FLR.", explore: "24/7 D/s beginner guide.", image: t15(6) },
  { slug: "group-play", title: "Sex Parties / Group Play", paragraph: "Elegant, consensual spaces where bodies, eyes and energies mingle — for variety, exhibition, and shared excitement.", trend: "Swinging and open dynamics rising in cities and beyond.", combo: "Exhibitionism + Voyeurism.", explore: "Private parties with consent.", image: t15(7) },
  { slug: "humiliation", title: "Erotic Humiliation", paragraph: "Consensual teasing, charged words, and scenarios that make submission deliciously intense.", trend: "Linked strongly to cuckold/hotwife dynamics.", combo: "Cuckolding + Dirty Talk.", explore: "Humiliation boundaries & consent.", image: t15(8) },
  { slug: "edging", title: "Orgasm Control & Edging", paragraph: "You control every peak and denial — teasing to the brink repeatedly for explosive buildup.", trend: "Pairs beautifully with chastity and FLR.", combo: "Chastity + Dirty Talk.", explore: "Edging techniques for her pleasure.", image: t15(1) },
  { slug: "ownership", title: "Ownership Kink", paragraph: "Collars, soft leashes, the intoxicating word \u201cMine\u201d — deep possession that feels both safe and electrically erotic.", trend: "Core part of expanding D/s communities.", combo: "24/7 D/s + Chastity.", explore: "Ownership dynamic consent guide.", image: t15(2) },
  { slug: "roleplay", title: "Role Play", paragraph: "Step into new skins — the dominant boss, the stranger, the royal temptress — and let fantasy amplify your chemistry.", trend: "One of the most common entry points to kink.", combo: "Humiliation + Dirty Talk.", explore: "Couple role play scenarios.", image: t15(3) },
  { slug: "dirty-talk", title: "Dirty Talk", paragraph: "Whispers, commands, and fantasies spoken aloud that turn thoughts into instant heat.", trend: "An accessible and highly effective starter kink.", combo: "Role Play or Humiliation.", explore: "Dirty talk scripts for couples.", image: t15(4) },
  { slug: "bdsm", title: "S&M / BDSM", paragraph: "Consensual intensity — pain that becomes pleasure, bondage, negotiated power exchange.", trend: "Strong global interest; safer education is growing.", combo: "Role Play + Ownership.", explore: "Safe BDSM for beginners.", image: t15(5) },
  { slug: "toys", title: "Sex Toys & Tech", paragraph: "Remote-controlled toys, apps, and gadgets for long-distance teasing or synchronized pleasure.", trend: "Massive sales growth; technology eases exploration.", combo: "Orgasm Control + Public Play.", explore: "App-controlled toys for couples.", image: t15(6) },
  { slug: "public", title: "Semi-Public + Jealousy Play", paragraph: "The adrenaline of risky locations combined with controlled flirting that sparks a hotter reconnection.", trend: "Widely fantasized and practiced discreetly.", combo: "Exhibitionism + Voyeurism.", explore: "Semi-public ideas; jealousy play rules.", image: t15(7) },
];

export type AzItem = {
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  image: string;
};

export type AzGroup = { letter: string; items: AzItem[] };

const azThumb = "/placeholders/az-thumb.jpg";

export const azKinks: AzGroup[] = [
  {
    letter: "A",
    items: [
      { slug: "anal-play", title: "Anal Play", subtitle: "Slow, lubricated, communicative.", excerpt: "Introduced patiently, anal play opens up an entirely new map of nerve endings. Done with lube, time and trust, it becomes one of the most intense forms of pleasure.", image: azThumb },
      { slug: "aftercare", title: "Aftercare", subtitle: "The tenderness after intensity.", excerpt: "Water, warmth, soft words. Aftercare is the closing ritual that lets the body and the heart land gently after a heavier scene.", image: azThumb },
      { slug: "age-play", title: "Age Play", subtitle: "Stepping into a softer role.", excerpt: "A consensual fantasy of caretaker and cared-for. About comfort and surrender, not literal age — negotiated carefully between adults.", image: azThumb },
      { slug: "anticipation", title: "Anticipation Play", subtitle: "Hours of slow build.", excerpt: "A whispered promise at breakfast that doesn't unfold until midnight. The waiting itself becomes the experience.", image: azThumb },
      { slug: "anonymous", title: "Anonymous Encounters (Roleplay)", subtitle: "Strangers, just for tonight.", excerpt: "Two partners meeting as strangers in a hotel bar — a safe roleplay that resets familiarity and sharpens attraction.", image: azThumb },
      { slug: "asphyxiation-light", title: "Light Breath Play", subtitle: "Advanced, careful, optional.", excerpt: "A delicate hand at the throat, never closing the airway. Often misunderstood — for couples who have done their reading and trust completely.", image: azThumb },
    ],
  },
  {
    letter: "B",
    items: [
      { slug: "bondage", title: "Bondage", subtitle: "Restraint as devotion.", excerpt: "Less about ropes and more about surrender. Tied wrists, a blindfold, or a silk scarf can transform the entire chemistry of an encounter.", image: "/placeholders/bondage/bondageimage1.jpg" },
      { slug: "blindfolds", title: "Blindfolds", subtitle: "Silence one sense, magnify the others.", excerpt: "Removing sight makes every breath, brush and whisper louder. A perfect first step into sensation play.", image: azThumb },
      { slug: "biting", title: "Biting & Marking", subtitle: "Soft teeth, lasting traces.", excerpt: "A small bite at the shoulder, a hickey just below the collarbone — claim left tenderly for only the two of you to find later.", image: azThumb },
    ],
  },
  {
    letter: "C",
    items: [
      { slug: "chastity-control", title: "Chastity & Control", subtitle: "Pleasure delayed is pleasure multiplied.", excerpt: "A locked drawer, a hidden key, a daily check-in. Handing over the timing of release transforms the everyday.", image: azThumb },
      { slug: "collaring", title: "Collaring", subtitle: "A symbol worn close to the skin.", excerpt: "A delicate chain or velvet ribbon — an everyday reminder of a shared dynamic only the two of you understand.", image: azThumb },
    ],
  },
  {
    letter: "D",
    items: [
      { slug: "dominance-submission", title: "Dominance & Submission", subtitle: "Power as a love language.", excerpt: "Structure that paradoxically frees both partners. One leads, one yields, and both stop performing.", image: azThumb },
      { slug: "dirty-talk", title: "Dirty Talk", subtitle: "Words that become hands.", excerpt: "Whispers, instructions, fantasies spoken aloud — a kink with zero equipment and an enormous payoff.", image: azThumb },
    ],
  },
  {
    letter: "E",
    items: [
      { slug: "edging", title: "Edging", subtitle: "The art of almost.", excerpt: "Stretching the climb so the peak feels like a cliff. It teaches partners to read each other's bodies in real time.", image: azThumb },
      { slug: "exhibitionism", title: "Exhibitionism", subtitle: "The rush of being seen.", excerpt: "Curtains slightly open, a private mirror, a controlled photo. Being looked at — by the right person — can be electric.", image: azThumb },
    ],
  },
  {
    letter: "F",
    items: [
      { slug: "foot-fetish", title: "Foot Fetish", subtitle: "Worship from the ground up.", excerpt: "Feet are loaded with nerves, often hidden and rarely given full attention. That neglect is what makes the fetish so powerful.", image: azThumb },
    ],
  },
  {
    letter: "G",
    items: [
      { slug: "group-play", title: "Group Play", subtitle: "More hands, more conversation.", excerpt: "Threesomes, foursomes, soft swaps. The kink that requires the most communication — and rewards it with shared intensity.", image: azThumb },
    ],
  },
];

// -----------------------------------------------------------------------------
// Detail content for individual kink pages.
// Add an entry here for any kink slug to give it a rich left-side ToC layout.
// Anything without a custom entry falls back to a gentle generic template.
// -----------------------------------------------------------------------------

export type KinkSection = {
  id: string;
  title: string;
  paragraphs: string[];
  image?: string;
};

export type KinkDetail = {
  slug: string;
  title: string;
  subtitle: string;
  intro: string;
  hero: string;
  chapters: { id: string; title: string }[];
  sections: KinkSection[];
};

export const kinkDetails: Record<string, KinkDetail> = {
  bondage: {
    slug: "bondage",
    title: "Bondage",
    subtitle: "Restraint as devotion — a gentle, modern guide.",
    intro:
      "Bondage is one of the most misunderstood corners of intimacy. At its heart, it isn't about ropes or rules — it's about the quiet, electric trust of letting someone hold you still while you hold yourself open. This guide moves slowly, the way the practice itself should.",
    hero: "/placeholders/bondage/bondageimage1.jpg",
    chapters: [
      { id: "introduction", title: "Introduction" },
      { id: "psychology", title: "The Psychology of Surrender" },
      { id: "starting-at-home", title: "Starting at Home" },
      { id: "tools", title: "Tools & Materials" },
      { id: "communication", title: "Communication & Safewords" },
      { id: "techniques", title: "Beginner Techniques" },
      { id: "aftercare", title: "Aftercare & Reflection" },
      { id: "going-further", title: "Going Further" },
    ],
    sections: [
      {
        id: "introduction",
        title: "Introduction",
        image: "/placeholders/bondage/bondageimage1.jpg",
        paragraphs: [
          "Bondage covers anything that gently restricts movement — silk scarves, soft cuffs, a hand pinning a wrist. The instrument matters less than the intention behind it.",
          "Approached with patience, it becomes a slow conversation between bodies. The one tied is not 'less than' — they are deeply, attentively held.",
        ],
      },
      {
        id: "psychology",
        title: "The Psychology of Surrender",
        image: "/placeholders/bondage/bondageimage2.jpg",
        paragraphs: [
          "Most adults spend the day in control — of work, of children, of expectations. To briefly hand that weight over to a trusted partner can be profoundly restorative.",
          "Surrender, in this context, is not weakness. It is a precise, conscious choice that requires more presence, not less. The partner doing the tying carries an equal kind of weight: complete responsibility for the experience.",
        ],
      },
      {
        id: "starting-at-home",
        title: "Starting at Home",
        image: "/placeholders/bondage/bondageimage3.jpg",
        paragraphs: [
          "You don't need a kit. A silk scarf, a soft belt, or simply a partner's hands wrapped firmly around your wrists is enough for an entire first evening.",
          "Begin clothed. Begin with the wrists. Notice how a held wrist changes the breath, the eye contact, the temperature of the room. That noticing is the practice.",
        ],
      },
      {
        id: "tools",
        title: "Tools & Materials",
        image: "/placeholders/bondage/bondageimage4.jpg",
        paragraphs: [
          "When you're ready to add equipment, choose softer materials first: cotton or bamboo rope, padded velcro cuffs, a silk blindfold. Avoid anything thin or wiry that can cut into the skin.",
          "Always keep safety scissors within arm's reach — even with knots you trust. A single pair of EMT shears can free a partner in seconds if anything ever feels wrong.",
        ],
      },
      {
        id: "communication",
        title: "Communication & Safewords",
        image: "/placeholders/bondage/bondageimage5.jpg",
        paragraphs: [
          "Agree on words before you begin. The traffic-light system is the simplest: green means 'more', yellow means 'pause and check in', red means 'stop now'.",
          "Build in a non-verbal signal too — humming, tapping a hand three times — for moments when the mouth is busy or the headspace is too deep for words.",
        ],
      },
      {
        id: "techniques",
        title: "Beginner Techniques",
        image: "/placeholders/bondage/bondageimage6.jpg",
        paragraphs: [
          "Single-column wrist tie: the gentlest entry point. Two fingers of slack at all times, knots away from the pulse, and never tied to anything immovable.",
          "Body-to-body bondage: no rope at all. One partner uses their full body — chest, thigh, forearm — to pin the other to the bed. Equally effective, infinitely more romantic.",
        ],
      },
      {
        id: "aftercare",
        title: "Aftercare & Reflection",
        image: "/placeholders/bondage/bondageimage1.jpg",
        paragraphs: [
          "After the ties come off, the work isn't quite finished. Water, a blanket, slow touch, low light. The nervous system needs a soft landing.",
          "A quiet conversation the next morning — what felt good, what surprised you, what you'd change — is where the practice actually deepens.",
        ],
      },
      {
        id: "going-further",
        title: "Going Further",
        image: "/placeholders/bondage/bondageimage2.jpg",
        paragraphs: [
          "If this opens something in you, you might explore decorative rope work (shibari), suspension classes with qualified teachers, or longer scenes that integrate sensation play and roleplay.",
          "Whatever direction you go, the principles never change: consent, patience, presence, aftercare. The ropes are only the surface of the practice.",
        ],
      },
    ],
  },
};
