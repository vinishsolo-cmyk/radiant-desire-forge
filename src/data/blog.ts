export interface BlogSection {
  heading?: string;
  image?: string;
  paragraphs: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  topic: string;
  tags: string[];
  author: string;
  date: string; // ISO
  readTime: string;
  cover: string;
  sections: BlogSection[];
  download?: {
    label: string;
    file: string; // public path
  };
}

export const BLOG_TOPICS = [
  "Her Desires",
  "Couple Play",
  "Chastity & Control",
  "Kinks & Curiosities",
  "Aftercare & Intimacy",
  "Stories & Confessions",
] as const;

export const BLOG_TAGS = [
  "communication",
  "beginner",
  "advanced",
  "trust",
  "sensory",
  "roleplay",
  "edging",
  "denial",
  "submission",
  "dominance",
  "fantasy",
  "ritual",
  "aftercare",
  "longform",
  "story",
];

const img = (n: number) => `/placeholders/blog/blog${n}.jpg`;

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "the-language-of-yes",
    title: "The Language of Yes",
    excerpt:
      "Why a soft, specific yes is the most erotic sentence in any bedroom — and how to learn to say it.",
    topic: "Her Desires",
    tags: ["communication", "beginner", "trust"],
    author: "Meera",
    date: "2025-11-04",
    readTime: "7 min",
    cover: img(1),
    download: { label: "Download the Yes/No/Maybe worksheet (PDF)", file: "/placeholders/blog/blog1.jpg" },
    sections: [
      {
        heading: "A yes that is yours",
        image: img(1),
        paragraphs: [
          "We were taught to say yes politely, the way we say yes to a second helping at dinner. This essay is about a different yes — the one that begins in the chest and travels outward.",
          "When she learns to say it cleanly, without apologising, the whole choreography of the bedroom changes.",
        ],
      },
      {
        heading: "The script you can practise",
        paragraphs: [
          "Three sentences, written on the inside of an imaginary wrist: I would like, I am curious about, not tonight.",
          "Practise them in the mirror. Practise them with tea. The body remembers what the tongue rehearses.",
        ],
      },
    ],
  },
  {
    slug: "soft-power",
    title: "Soft Power: A Letter to the Tender Dominant",
    excerpt:
      "Dominance is not loudness. It is a steady hand, a slow voice, a noticing.",
    topic: "Chastity & Control",
    tags: ["dominance", "ritual", "longform"],
    author: "Arjun",
    date: "2025-10-21",
    readTime: "9 min",
    cover: img(2),
    sections: [
      { image: img(2), paragraphs: ["The first thing a tender dominant learns is to slow down. Everything is slower than you think it should be."] },
      { heading: "Noticing", paragraphs: ["Watch her shoulders before you watch her mouth. The shoulders tell the truth two seconds earlier."] },
    ],
  },
  {
    slug: "the-first-blindfold",
    title: "The First Blindfold",
    excerpt:
      "On the small, ceremonial act of removing one sense to wake the others. A slow, soothing guide for her first time in the dark.",
    topic: "Couple Play",
    tags: ["sensory", "beginner", "aftercare", "trust", "ritual"],
    author: "Meera",
    date: "2025-10-09",
    readTime: "9 min",
    cover: img(3),
    download: { label: "Download the First Blindfold ritual card (PDF)", file: "/placeholders/blog/blog3.jpg" },
    sections: [
      {
        heading: "Before you tie anything",
        image: img(3),
        paragraphs: [
          "A silk scarf. A folded square of soft cotton. The first blindfold should feel like a kindness, not a costume. Lay it across your palm before you lay it across her eyes — let her see the thing that is about to take her sight.",
          "There is no rush tonight. Light one lamp, low and warm. Close the door. Put the phone face down in another room. The world will keep turning without you for the next forty minutes.",
        ],
      },
      {
        heading: "The ask",
        paragraphs: [
          "Sit beside her, not across from her. Knees touching. Ask, in a normal voice — not a velvet one — 'May I cover your eyes for a little while?'",
          "If she hesitates, that hesitation is the most important sentence in the room. Wait for it to finish speaking. If the answer is yes, name what you will do before you do it. 'I'm going to lift the scarf now. I'm going to tie it gently behind your head. Tell me if it pulls your hair.'",
          "Consent is not a paragraph at the start. It is a conversation that breathes all the way through.",
        ],
      },
      {
        heading: "The tying",
        image: img(1),
        paragraphs: [
          "Stand behind her and lower the silk like a slow exhale. Settle it across the bridge of her nose so no light leaks in from below — that small darkness is where the magic begins.",
          "Tie the knot loose enough that she could shake it free if she wanted to. Real safety is the feeling that escape is always close at hand.",
        ],
      },
      {
        heading: "The first three minutes",
        paragraphs: [
          "Do nothing. Yes — nothing. Let her sit inside the dark and find her own breath. Most people are surprised by how loud the room becomes: the fridge two rooms away, a neighbour's door, her own pulse in her ears.",
          "Place one warm hand flat on her sternum. Don't move it. Let her body remember that you are still there. This is the whole lesson of the blindfold: presence without performance.",
        ],
      },
      {
        heading: "Waking the other senses, gently",
        image: img(5),
        paragraphs: [
          "Now, slowly, begin to introduce one thing at a time. The cool rim of a glass of water against her lower lip. A single drop of perfume on the inside of her wrist. The soft, rough side of a peach.",
          "Pause between each. Ten seconds feels long in the dark; thirty feels like a small lifetime. Let the long pauses do the work — the body listens hardest in the silence after.",
          "Speak less than you think you should. When you do speak, speak from where you are, so she can place you in the room without having to ask.",
        ],
      },
      {
        heading: "Touch, finally",
        paragraphs: [
          "When touch begins, let it begin somewhere unromantic — the back of an elbow, the soft place behind a knee, the inside of a forearm. The unromantic places are where the body has stored most of its waiting.",
          "Follow her breath. When it lengthens, you are doing this right. When it shortens, slow down further. The blindfold is not the scene; her breath is the scene.",
        ],
      },
      {
        heading: "The first untying",
        image: img(6),
        paragraphs: [
          "When you both feel the natural close of the wave, do not tear the silk off. Cup your hand over the blindfold first so the light arrives in steps, not in a flood.",
          "Untie it slowly. Let her open her eyes onto your face, not the ceiling. The first thing she should see is the person who held the dark with her.",
        ],
      },
      {
        heading: "Aftercare — the part most people skip",
        image: img(8),
        paragraphs: [
          "Wrap her in something soft. Bring the water. Sit close. Don't ask 'was that good' — ask 'what did you notice?' One question opens a conversation; the other closes it.",
          "If tears come, they are not a problem. The body sometimes releases what the day was holding. Let them come, hand on her back, no rush.",
          "Tomorrow, send a small message. 'Thinking about last night.' Aftercare is not a ten-minute window; it is a thread you keep gently pulling for a day or two.",
        ],
      },
      {
        heading: "If you are the one being blindfolded",
        paragraphs: [
          "You are allowed to keep your hand on his wrist the whole time. You are allowed to say wait. You are allowed to laugh, to cry, to ask for the lamp to come back on.",
          "Nothing you feel inside the dark is wrong. Bring it back into the light with you.",
        ],
      },
    ],
  },
  {
    slug: "edging-as-a-love-language",
    title: "Edging as a Love Language",
    excerpt: "Patience is erotic. Here's a quiet guide to the long, slow climb.",
    topic: "Kinks & Curiosities",
    tags: ["edging", "denial", "advanced"],
    author: "Arjun",
    date: "2025-09-28",
    readTime: "8 min",
    cover: img(4),
    sections: [
      { image: img(4), paragraphs: ["Edging is not a trick. It is an attention practice — staying close to a feeling without consuming it."] },
    ],
  },
  {
    slug: "the-confession-of-the-married-stranger",
    title: "The Confession of the Married Stranger",
    excerpt: "A short story. Names changed. Sent in by a reader in Bombay.",
    topic: "Stories & Confessions",
    tags: ["story", "fantasy", "roleplay"],
    author: "Reader, 34",
    date: "2025-09-15",
    readTime: "6 min",
    cover: img(5),
    sections: [
      { image: img(5), paragraphs: ["We met in the same building lift every morning for a year. We never spoke. Then one Tuesday, the lights went out between the fourth and the fifth floor."] },
    ],
  },
  {
    slug: "aftercare-rituals",
    title: "Six Aftercare Rituals We Love",
    excerpt: "The closing pages of any scene. Water, blanket, low light, slow words.",
    topic: "Aftercare & Intimacy",
    tags: ["aftercare", "ritual", "beginner"],
    author: "Meera",
    date: "2025-08-30",
    readTime: "4 min",
    cover: img(6),
    download: { label: "Download the Aftercare Card (PDF)", file: "/placeholders/blog/blog6.jpg" },
    sections: [
      { image: img(6), paragraphs: ["Fill a small glass with cold water before you begin. You'll thank yourself in thirty minutes."] },
    ],
  },
  {
    slug: "the-key-around-her-neck",
    title: "The Key Around Her Neck",
    excerpt: "On wearing the symbol of a thing instead of the thing itself.",
    topic: "Chastity & Control",
    tags: ["submission", "ritual", "trust"],
    author: "Arjun",
    date: "2025-08-12",
    readTime: "7 min",
    cover: img(7),
    sections: [
      { image: img(7), paragraphs: ["The key was small enough to disappear under her collarbone. For a week she forgot she was wearing it. Then she remembered, all at once, in a meeting."] },
    ],
  },
  {
    slug: "what-she-wants-at-2am",
    title: "What She Wants at 2 a.m.",
    excerpt: "The questions that arrive when the house is asleep and the phone is face down.",
    topic: "Her Desires",
    tags: ["longform", "communication", "fantasy"],
    author: "Meera",
    date: "2025-07-28",
    readTime: "10 min",
    cover: img(8),
    sections: [
      { image: img(8), paragraphs: ["At two in the morning, desire is more honest because it has no audience. We collected a year of late-night messages and arranged them gently."] },
    ],
  },
];

export function findPost(slug: string) {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
