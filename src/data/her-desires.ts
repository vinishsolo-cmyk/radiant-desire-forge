import { Flame, Heart, Eye, Crown, Lock, Users, Star, Zap, Feather, type LucideIcon } from "lucide-react";

export interface HerTopic {
  slug: string;
  title: string;
  body: string;
  longform?: string[]; // optional extended paragraphs for the chapter page
  image?: string;
}

export interface HerChapter {
  id: string;
  emoji: string;
  icon: LucideIcon;
  eyebrow: string;
  title: string;
  intro: string;
  image: string;
  readTime: string;
  topics: HerTopic[];
  download?: { label: string; file: string };
}

const slug = (s: string) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

const t = (title: string, body: string, longform?: string[], image?: string): HerTopic => ({
  slug: slug(title),
  title,
  body,
  longform,
  image,
});

export const HER_CHAPTERS: HerChapter[] = [
  {
    id: "pleasure",
    emoji: "🔥",
    icon: Flame,
    eyebrow: "Pleasure, Orgasms & Sexual Awakening",
    title: "The body remembers what the world forgot to teach.",
    intro:
      "Most women were handed a half-script for their own pleasure. This chapter rewrites the rest of it — slowly, generously, on your own terms.",
    image: "/placeholders/her-desires/her1.jpg",
    readTime: "14 min",
    download: { label: "Pleasure Awakening — 7-day gentle worksheet (PDF)", file: "/placeholders/her-desires/her1.jpg" },
    topics: [
      t(
        "Why many women never experience deep pleasure",
        "Hurry, shame and silence are the three thieves. We name each one and quietly send it out of the room.",
        [
          "Deep pleasure is not a technique. It is a permission slip the body finally signs for itself after years of being told to keep quiet, keep small, keep moving.",
          "The three thieves of female pleasure are almost always the same: hurry (no time to arrive in the body), shame (the inherited voice that says don't want too much), and silence (no language to ask for what would actually feel good).",
          "We don't fight them. We notice them. And then, very slowly, we begin to choose differently — one breath, one Tuesday afternoon, one honest sentence at a time.",
        ],
      ),
      t(
        "The psychology of female desire",
        "Desire is not a switch. It is a slow weather system — and it answers to safety long before it answers to touch.",
      ),
      t(
        "The multiple-orgasm mindset",
        "Less performance, more attention. We unhook 'finishing' from the body and let waves come as waves do.",
      ),
      t(
        "Pleasure without shame",
        "Inherited shame is loud. Practised pleasure is louder. A daily, gentle rebellion.",
      ),
      t(
        "Reclaiming your sexual energy",
        "Eros is not only bedroom currency. It is how you walk, write, cook, and refuse.",
      ),
    ],
  },
  {
    id: "forbidden",
    emoji: "🖤",
    icon: Eye,
    eyebrow: "Forbidden Thoughts & Hidden Desires",
    title: "The thoughts you would never say aloud — and what they actually mean.",
    intro: "A fantasy is not a plan. It is the body composing music for itself. We listen without judgment.",
    image: "/placeholders/her-desires/her2.jpg",
    readTime: "12 min",
    download: { label: "The private fantasy journal (PDF)", file: "/placeholders/her-desires/her2.jpg" },
    topics: [
      t("Fantasies women rarely talk about", "A quiet inventory of the ones we hear most often — and why they're more common than you think."),
      t("Why taboo feels exciting", "The brain's reward circuitry adores the forbidden. A short, kind neuroscience lesson."),
      t("The psychology of being desired", "Being wanted, fully, is its own private kind of orgasm."),
      t("Exploring curiosity without guilt", "Curiosity is not a contract. You can wonder all the way to the edge and walk gently home."),
      t("Desire beyond traditional expectations", "What if 'normal' was always just a small window onto a much larger garden?"),
    ],
  },
  {
    id: "confidence",
    emoji: "✨",
    icon: Star,
    eyebrow: "Sexual Confidence & Feminine Power",
    title: "The kind of confidence that doesn't need an audience.",
    intro: "Power that comes from inside the body is quieter than the kind borrowed from approval — and lasts longer.",
    image: "/placeholders/her-desires/her3.jpg",
    readTime: "11 min",
    topics: [
      t("Dressing boldly, feeling powerful", "How clothing rituals can rewire the nervous system before you leave the house."),
      t("The thrill of being seen", "Visibility is not vanity. It is the body insisting it exists."),
      t("Confidence through self-expression", "Small daily acts of choosing yourself — out loud, on purpose."),
      t("Becoming comfortable with attention", "A short practice for staying soft inside the gaze, instead of bracing against it."),
      t("Releasing 'good girl' conditioning", "Unlearning the script that made smallness feel like a virtue."),
    ],
  },
  {
    id: "public",
    emoji: "👠",
    icon: Zap,
    eyebrow: "Public Confidence & Exhibitionist Psychology",
    title: "Owning the room without raising your voice.",
    intro:
      "Exhibitionist energy at its healthiest is not 'look at me' — it is 'I am here, finally, and I am not apologising for the space I take.'",
    image: "/placeholders/her-desires/her4.jpg",
    readTime: "10 min",
    topics: [
      t("Why being noticed feels empowering", "The difference between objectification and being witnessed — and how to feel one without the other."),
      t("Fashion, attention & attraction", "Dressing for your own pulse first, the room second."),
      t("The psychology of public confidence", "Why posture, breath, and the slow walk change everything."),
      t("Owning your presence", "Practical rituals for arriving fully into rooms, dinners, and difficult conversations."),
      t("Confidence beyond approval", "When the inner mirror finally matters more than the outer one."),
    ],
  },
  {
    id: "hotwife",
    emoji: "❤️",
    icon: Heart,
    eyebrow: "Hotwife & Relationship Exploration",
    title: "Novelty without breaking what already loves you.",
    intro: "A careful, grown-up look at the fantasies many long-term couples explore — and the communication that keeps them safe.",
    image: "/placeholders/her-desires/her5.jpg",
    readTime: "13 min",
    download: { label: "The five conversations workbook (PDF)", file: "/placeholders/her-desires/her5.jpg" },
    topics: [
      t("Understanding the psychology of hotwife fantasies", "What's actually being craved — and it's rarely what the surface suggests."),
      t("Why novelty can reignite attraction", "The Coolidge effect, dopamine, and the role of the imagined third."),
      t("Female sexual freedom in long-term relationships", "Why her flourishing is, statistically, the strongest predictor of his."),
      t("Communication before exploration", "The five conversations to have before the first conversation about it."),
      t("Keeping love strong while exploring", "Rituals of return: how couples come home to each other after."),
    ],
  },
  {
    id: "cuckold",
    emoji: "🔥",
    icon: Flame,
    eyebrow: "Cuckold Fantasy & Desire Dynamics",
    title: "Why the fantasy of sharing is so common — and so misunderstood.",
    intro: "Less about the act, more about the watching, the wanting, and the way attention reshapes desire.",
    image: "/placeholders/her-desires/her6.jpg",
    readTime: "12 min",
    topics: [
      t("Why some couples are drawn to sharing fantasies", "The compersion question: arousal that runs on someone else's pleasure."),
      t("Attention, validation & female desire", "How being chosen, again and again, becomes its own erotic engine."),
      t("Exploring emotional and erotic curiosity", "Letting fantasy stay fantasy — or letting it grow up, slowly, with rules."),
      t("Trust, boundaries & communication", "The non-negotiables we hand to anyone before they hand themselves to us."),
      t("Fantasy vs reality", "Why a thing that thrills you on the page might not belong in the bedroom — and that's allowed."),
    ],
  },
  {
    id: "flr",
    emoji: "👑",
    icon: Crown,
    eyebrow: "Female-Led Relationships & Devotion",
    title: "When she leads, and the whole house relaxes.",
    intro:
      "Female-led is not a costume. It is a quiet, daily architecture where her clarity becomes the room everyone breathes in.",
    image: "/placeholders/her-desires/her7.jpg",
    readTime: "14 min",
    download: { label: "FLR rituals starter pack (PDF)", file: "/placeholders/her-desires/her7.jpg" },
    topics: [
      t("Women taking the lead", "How leadership in love looks: gentle, decisive, sometimes very small."),
      t("Building devotion through connection", "Devotion is grown, not demanded. The slow gardening of it."),
      t("Relationship power dynamics", "The healthiest dynamics are negotiated, not assumed."),
      t("Attention, focus & emotional intimacy", "Why being someone's primary focus is one of the most underrated forms of love."),
      t("Leadership without losing love", "How to be in charge of the dance without becoming the dance floor."),
    ],
  },
  {
    id: "chastity",
    emoji: "🔒",
    icon: Lock,
    eyebrow: "Loyalty, Focus & Chastity Dynamics",
    title: "What patience does to a relationship when it's chosen, not forced.",
    intro: "A respectful look at one of the most misunderstood couple practices — the deliberate slowing of his arrival into hers.",
    image: "/placeholders/her-desires/her8.jpg",
    readTime: "13 min",
    topics: [
      t("Creating intentional desire", "How a held breath becomes a longer, sweeter exhale."),
      t("Building stronger relationship rituals", "Weekly check-ins, monthly resets, and the small ceremonies that hold a year together."),
      t("Why focus can deepen connection", "When attention narrows, intimacy widens."),
      t("Attention as a form of intimacy", "The most generous thing a partner can give is sustained, undivided noticing."),
      t("Relationship structures that work for some couples", "Not for everyone. Wonderful for some. A guide to telling which is which."),
    ],
  },
  {
    id: "forty",
    emoji: "🌹",
    icon: Feather,
    eyebrow: "Sexual Freedom After 40",
    title: "The sexual rebirth nobody warned you about.",
    intro: "Many women describe their forties and fifties as the most erotically alive years of their lives. Here's why — and how to meet it.",
    image: "/placeholders/her-desires/her9.jpg",
    readTime: "11 min",
    download: { label: "After-40 reawakening guide (PDF)", file: "/placeholders/her-desires/her9.jpg" },
    topics: [
      t("The sexual rebirth many women experience", "The biology, the psychology, and the unexpected gift of giving fewer damns."),
      t("Confidence later in life", "What hard-won self-knowledge does to a bedroom."),
      t("Feeling desired again", "Reawakening the part of you that culture tried to quietly retire."),
      t("Rediscovering passion", "Small experiments, a fresh wardrobe of fantasy, and one honest sentence at a time."),
      t("Living beyond expectations", "The 40s and 50s as your most truthful, most playful decades."),
    ],
  },
  {
    id: "alive",
    emoji: "💫",
    icon: Users,
    eyebrow: "The Happy, Horny & Connected Life",
    title: "A life that feels alive on a Tuesday afternoon.",
    intro:
      "The final chapter. Not 'how to have more sex' — how to build a life where desire is a natural by-product of being awake.",
    image: "/placeholders/her-desires/her10.jpg",
    readTime: "12 min",
    topics: [
      t("Creating a relationship that feels alive", "The small daily proofs that you are still choosing each other."),
      t("Turning routine into excitement", "How tiny ruptures of the ordinary protect long love."),
      t("Building desire that lasts", "Desire is not maintained. It is grown, season by season."),
      t("Exploring together as a team", "Curiosity as a couple sport — wins counted in tenderness, not numbers."),
      t("Love, passion & freedom working together", "Yes, you can have all three. Here's the architecture."),
    ],
  },
];

export const findChapter = (id: string) => HER_CHAPTERS.find((c) => c.id === id);
