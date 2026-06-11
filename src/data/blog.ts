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
    excerpt: "On the small, ceremonial act of removing one sense to wake the others.",
    topic: "Couple Play",
    tags: ["sensory", "beginner", "aftercare"],
    author: "Meera",
    date: "2025-10-09",
    readTime: "5 min",
    cover: img(3),
    download: { label: "Download the Sensory Map (PDF)", file: "/placeholders/blog/blog3.jpg" },
    sections: [
      { image: img(3), paragraphs: ["A silk scarf. A folded square of soft cotton. The first blindfold should feel like a kindness, not a costume."] },
      { heading: "After", paragraphs: ["Untie it slowly. Let her open her eyes onto your face, not the ceiling."] },
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
