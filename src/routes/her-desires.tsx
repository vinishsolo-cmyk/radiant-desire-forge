import { createFileRoute, Link } from "@tanstack/react-router";
import { Sparkles, ArrowRight, Download } from "lucide-react";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { HER_CHAPTERS as CATEGORIES } from "@/data/her-desires";

export const Route = createFileRoute("/her-desires")({
  head: () => ({
    meta: [
      { title: "Her Desires — Velvet Desire" },
      { name: "description", content: "For women who want more than routine. A dedicated library of essays on pleasure, hidden desires, feminine power, and a life that feels alive." },
      { property: "og:title", content: "Her Desires — Velvet Desire" },
      { property: "og:description", content: "A dedicated library for women who want more than good enough." },
      { property: "og:image", content: "/placeholders/her-desires/hero.jpg" },
    ],
  }),
  component: HerDesires,
});

interface Topic {
  title: string;
  body: string;
}

interface Category {
  id: string;
  emoji: string;
  icon: typeof Flame;
  eyebrow: string;
  title: string;
  intro: string;
  image: string;
  topics: Topic[];
}

const CATEGORIES: Category[] = [
  {
    id: "pleasure",
    emoji: "🔥",
    icon: Flame,
    eyebrow: "Pleasure, Orgasms & Sexual Awakening",
    title: "The body remembers what the world forgot to teach.",
    intro: "Most women were handed a half-script for their own pleasure. This chapter rewrites the rest of it — slowly, generously, on your own terms.",
    image: "/placeholders/her-desires/her1.jpg",
    topics: [
      { title: "Why many women never experience deep pleasure", body: "Hurry, shame and silence are the three thieves. We name each one and quietly send it out of the room." },
      { title: "The psychology of female desire", body: "Desire is not a switch. It is a slow weather system — and it answers to safety long before it answers to touch." },
      { title: "The multiple-orgasm mindset", body: "Less performance, more attention. We unhook 'finishing' from the body and let waves come as waves do." },
      { title: "Pleasure without shame", body: "Inherited shame is loud. Practised pleasure is louder. A daily, gentle rebellion." },
      { title: "Reclaiming your sexual energy", body: "Eros is not only bedroom currency. It is how you walk, write, cook, and refuse." },
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
    topics: [
      { title: "Fantasies women rarely talk about", body: "A quiet inventory of the ones we hear most often — and why they're more common than you think." },
      { title: "Why taboo feels exciting", body: "The brain's reward circuitry adores the forbidden. A short, kind neuroscience lesson." },
      { title: "The psychology of being desired", body: "Being wanted, fully, is its own private kind of orgasm." },
      { title: "Exploring curiosity without guilt", body: "Curiosity is not a contract. You can wonder all the way to the edge and walk gently home." },
      { title: "Desire beyond traditional expectations", body: "What if 'normal' was always just a small window onto a much larger garden?" },
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
    topics: [
      { title: "Dressing boldly, feeling powerful", body: "How clothing rituals can rewire the nervous system before you leave the house." },
      { title: "The thrill of being seen", body: "Visibility is not vanity. It is the body insisting it exists." },
      { title: "Confidence through self-expression", body: "Small daily acts of choosing yourself — out loud, on purpose." },
      { title: "Becoming comfortable with attention", body: "A short practice for staying soft inside the gaze, instead of bracing against it." },
      { title: "Releasing 'good girl' conditioning", body: "Unlearning the script that made smallness feel like a virtue." },
    ],
  },
  {
    id: "public",
    emoji: "👠",
    icon: Zap,
    eyebrow: "Public Confidence & Exhibitionist Psychology",
    title: "Owning the room without raising your voice.",
    intro: "Exhibitionist energy at its healthiest is not 'look at me' — it is 'I am here, finally, and I am not apologising for the space I take.'",
    image: "/placeholders/her-desires/her4.jpg",
    topics: [
      { title: "Why being noticed feels empowering", body: "The difference between objectification and being witnessed — and how to feel one without the other." },
      { title: "Fashion, attention & attraction", body: "Dressing for your own pulse first, the room second." },
      { title: "The psychology of public confidence", body: "Why posture, breath, and the slow walk change everything." },
      { title: "Owning your presence", body: "Practical rituals for arriving fully into rooms, dinners, and difficult conversations." },
      { title: "Confidence beyond approval", body: "When the inner mirror finally matters more than the outer one." },
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
    topics: [
      { title: "Understanding the psychology of hotwife fantasies", body: "What's actually being craved — and it's rarely what the surface suggests." },
      { title: "Why novelty can reignite attraction", body: "The Coolidge effect, dopamine, and the role of the imagined third." },
      { title: "Female sexual freedom in long-term relationships", body: "Why her flourishing is, statistically, the strongest predictor of his." },
      { title: "Communication before exploration", body: "The five conversations to have before the first conversation about it." },
      { title: "Keeping love strong while exploring", body: "Rituals of return: how couples come home to each other after." },
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
    topics: [
      { title: "Why some couples are drawn to sharing fantasies", body: "The compersion question: arousal that runs on someone else's pleasure." },
      { title: "Attention, validation & female desire", body: "How being chosen, again and again, becomes its own erotic engine." },
      { title: "Exploring emotional and erotic curiosity", body: "Letting fantasy stay fantasy — or letting it grow up, slowly, with rules." },
      { title: "Trust, boundaries & communication", body: "The non-negotiables we hand to anyone before they hand themselves to us." },
      { title: "Fantasy vs reality", body: "Why a thing that thrills you on the page might not belong in the bedroom — and that's allowed." },
    ],
  },
  {
    id: "flr",
    emoji: "👑",
    icon: Crown,
    eyebrow: "Female-Led Relationships & Devotion",
    title: "When she leads, and the whole house relaxes.",
    intro: "Female-led is not a costume. It is a quiet, daily architecture where her clarity becomes the room everyone breathes in.",
    image: "/placeholders/her-desires/her7.jpg",
    topics: [
      { title: "Women taking the lead", body: "How leadership in love looks: gentle, decisive, sometimes very small." },
      { title: "Building devotion through connection", body: "Devotion is grown, not demanded. The slow gardening of it." },
      { title: "Relationship power dynamics", body: "The healthiest dynamics are negotiated, not assumed." },
      { title: "Attention, focus & emotional intimacy", body: "Why being someone's primary focus is one of the most underrated forms of love." },
      { title: "Leadership without losing love", body: "How to be in charge of the dance without becoming the dance floor." },
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
    topics: [
      { title: "Creating intentional desire", body: "How a held breath becomes a longer, sweeter exhale." },
      { title: "Building stronger relationship rituals", body: "Weekly check-ins, monthly resets, and the small ceremonies that hold a year together." },
      { title: "Why focus can deepen connection", body: "When attention narrows, intimacy widens." },
      { title: "Attention as a form of intimacy", body: "The most generous thing a partner can give is sustained, undivided noticing." },
      { title: "Relationship structures that work for some couples", body: "Not for everyone. Wonderful for some. A guide to telling which is which." },
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
    topics: [
      { title: "The sexual rebirth many women experience", body: "The biology, the psychology, and the unexpected gift of giving fewer damns." },
      { title: "Confidence later in life", body: "What hard-won self-knowledge does to a bedroom." },
      { title: "Feeling desired again", body: "Reawakening the part of you that culture tried to quietly retire." },
      { title: "Rediscovering passion", body: "Small experiments, a fresh wardrobe of fantasy, and one honest sentence at a time." },
      { title: "Living beyond expectations", body: "The 40s and 50s as your most truthful, most playful decades." },
    ],
  },
  {
    id: "alive",
    emoji: "💫",
    icon: Users,
    eyebrow: "The Happy, Horny & Connected Life",
    title: "A life that feels alive on a Tuesday afternoon.",
    intro: "The final chapter. Not 'how to have more sex' — how to build a life where desire is a natural by-product of being awake.",
    image: "/placeholders/her-desires/her10.jpg",
    topics: [
      { title: "Creating a relationship that feels alive", body: "The small daily proofs that you are still choosing each other." },
      { title: "Turning routine into excitement", body: "How tiny ruptures of the ordinary protect long love." },
      { title: "Building desire that lasts", body: "Desire is not maintained. It is grown, season by season." },
      { title: "Exploring together as a team", body: "Curiosity as a couple sport — wins counted in tenderness, not numbers." },
      { title: "Love, passion & freedom working together", body: "Yes, you can have all three. Here's the architecture." },
    ],
  },
];

function HerDesires() {
  return (
    <main>
      <SiteNav />

      {/* HERO */}
      <section className="relative pt-36 pb-24 border-b border-border/60 overflow-hidden">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: "url(/placeholders/her-desires/hero.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background" aria-hidden />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <p className="eyebrow inline-flex items-center gap-2">
            <Sparkles size={12} /> Her Desires
          </p>
          <h1 className="mt-6 font-serif text-5xl md:text-7xl leading-[1.05] text-balance">
            For women who want <em className="italic text-primary">more than</em> routine.
          </h1>
          <p className="mt-8 max-w-2xl mx-auto text-lg text-muted-foreground leading-relaxed">
            More than survival. More than &ldquo;good enough.&rdquo; A dedicated library of essays,
            confessions and gentle frameworks for the woman who is finally ready to want — out loud,
            on her own terms.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3 text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
            <span>Shame-free</span>
            <span className="opacity-40">·</span>
            <span>Female-first</span>
            <span className="opacity-40">·</span>
            <span>Adults only</span>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            <a
              href="#chapters"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 text-[12px] uppercase tracking-[0.25em] hover:bg-primary/90 transition-colors"
            >
              Explore the chapters <ArrowRight size={14} />
            </a>
            <Link
              to="/freebies"
              className="inline-flex items-center gap-2 border border-primary/60 text-primary px-6 py-3 text-[12px] uppercase tracking-[0.25em] hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Free downloads
            </Link>
          </div>
        </div>
      </section>

      {/* CHAPTER INDEX */}
      <section id="chapters" className="py-24 border-b border-border/60">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto">
            <p className="eyebrow">Ten chapters · fifty essays</p>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl">
              The <em className="italic text-primary">map</em> of her desire.
            </h2>
            <p className="mt-6 text-muted-foreground">
              Jump to any room in the house. Nothing here judges you for where you start.
            </p>
          </div>
          <ul className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {CATEGORIES.map((c, i) => (
              <li key={c.id} className="bg-background">
                <a
                  href={`#${c.id}`}
                  className="group block p-6 h-full hover:bg-primary/5 transition-colors"
                >
                  <div className="flex items-start justify-between gap-3">
                    <span className="text-2xl" aria-hidden>{c.emoji}</span>
                    <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground/70">
                      0{i + 1}
                    </span>
                  </div>
                  <p className="mt-4 eyebrow">{c.eyebrow}</p>
                  <h3 className="mt-2 font-serif text-xl leading-snug group-hover:text-primary transition-colors">
                    {c.title}
                  </h3>
                  <span className="mt-4 inline-flex items-center gap-1 text-[11px] uppercase tracking-[0.25em] text-primary">
                    Read chapter <ArrowRight size={12} />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CHAPTERS */}
      {CATEGORIES.map((c, i) => {
        const Icon = c.icon;
        const flip = i % 2 === 1;
        return (
          <section
            key={c.id}
            id={c.id}
            className={`py-24 border-b border-border/60 ${i % 2 === 1 ? "bg-card/30" : ""}`}
          >
            <div className="max-w-6xl mx-auto px-6">
              <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${flip ? "lg:[&>*:first-child]:order-2" : ""}`}>
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={c.image}
                    alt={c.eyebrow}
                    loading="lazy"
                    width={1024}
                    height={1280}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 bg-background/85 backdrop-blur-sm px-3 py-1.5 text-[10px] uppercase tracking-[0.3em]">
                    Chapter 0{i + 1}
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-3">
                    <Icon size={22} className="text-primary" strokeWidth={1.2} />
                    <p className="eyebrow">{c.eyebrow}</p>
                  </div>
                  <h2 className="mt-4 font-serif text-3xl md:text-5xl leading-[1.1]">
                    {c.title}
                  </h2>
                  <p className="mt-6 text-muted-foreground text-lg leading-relaxed">{c.intro}</p>

                  <ul className="mt-10 space-y-px bg-border/60">
                    {c.topics.map((t, j) => (
                      <li key={t.title} className="bg-background">
                        <div className="group flex items-start gap-5 p-5 hover:bg-primary/5 transition-colors">
                          <span className="font-serif italic text-primary text-lg shrink-0 w-8">
                            {String(j + 1).padStart(2, "0")}
                          </span>
                          <div className="flex-1">
                            <h3 className="font-serif text-lg leading-snug">{t.title}</h3>
                            <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{t.body}</p>
                          </div>
                          <Link
                            to="/blog"
                            search={{ q: t.title, topic: "", tag: "" }}
                            className="shrink-0 mt-1 text-[10px] uppercase tracking-[0.25em] text-primary opacity-0 group-hover:opacity-100 transition-opacity inline-flex items-center gap-1"
                          >
                            Read <ArrowRight size={11} />
                          </Link>
                        </div>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <Link
                      to="/blog"
                      search={{ q: c.eyebrow, topic: "", tag: "" }}
                      className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 text-[11px] uppercase tracking-[0.25em] hover:bg-primary/90 transition-colors"
                    >
                      Read all essays <ArrowRight size={13} />
                    </Link>
                    <Link
                      to="/freebies"
                      className="inline-flex items-center gap-2 border border-border px-5 py-2.5 text-[11px] uppercase tracking-[0.25em] text-foreground hover:border-primary hover:text-primary transition-colors"
                    >
                      Companion freebies
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* CLOSING */}
      <section className="py-28">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <Sparkles className="text-primary mx-auto" size={22} strokeWidth={1.2} />
          <h2 className="mt-6 font-serif text-4xl md:text-5xl leading-tight">
            You were never supposed to settle for <em className="italic text-primary">good enough.</em>
          </h2>
          <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
            Bookmark this page. Come back in your own time. There is no exam at the end of any of it —
            only a quieter, fuller, more honest version of you, slowly arriving.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 text-[12px] uppercase tracking-[0.25em] hover:bg-primary/90 transition-colors"
            >
              Visit the journal <ArrowRight size={14} />
            </Link>
            <Link
              to="/kinks-explorer"
              className="inline-flex items-center gap-2 border border-primary/60 text-primary px-6 py-3 text-[12px] uppercase tracking-[0.25em] hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Explore the kinks library
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
