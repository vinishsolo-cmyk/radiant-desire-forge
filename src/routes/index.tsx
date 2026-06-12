import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight, Download } from "lucide-react";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Velvet Desire — Reclaim Your Pleasure. Awaken Your Desires." },
      {
        name: "description",
        content:
          "A sanctuary for women and couples to rediscover desire, kink, and intimacy. Shame-free, discreet, deeply elegant.",
      },
    ],
  }),
  component: Home,
});

/* ─────────────────────────────  DATA  ───────────────────────────── */

const chapters = [
  { eyebrow: "Chapter One", title: "Awaken the Desires You've Been Hiding", tagline: "Step into the woman you were always meant to become." },
  { eyebrow: "Chapter Two", title: "Own Your Confidence, Command His Devotion", tagline: "Lead the intimacy. Watch him fall deeper, every single day." },
  { eyebrow: "Chapter Three", title: "Dress Boldly, Walk Like the World Is Yours", tagline: "Turn every glance into a quiet thrill of pure power." },
  { eyebrow: "Chapter Four", title: "Reignite the Spark in Your Marriage", tagline: "Heal the silence. Rediscover the passion you both deserve." },
];

const articles = [
  { tag: "Hidden Desires", title: "10 Hidden Desires Many Women Have (But Rarely Talk About)", read: "8 min", img: "/placeholders/whispers/whispers1.jpg" },
  { tag: "Pleasure", title: "What a Real, Mind-Blowing Orgasm Actually Feels Like", read: "11 min", img: "/placeholders/whispers/whispers2.jpg" },
  { tag: "Public Play", title: "Dressing Hot in Public: How to Tease Him Without Saying a Word", read: "6 min", img: "/placeholders/whispers/whispers3.jpg" },
  { tag: "Control", title: "Introducing Chastity to Your Man — A Woman's Complete Guide", read: "14 min", img: "/placeholders/whispers/whispers4.jpg" },
  { tag: "Sharing", title: "Why Many Women Secretly Fantasize About Hotwifing & Cuckolding", read: "10 min", img: "/placeholders/whispers/whispers5.jpg" },
  { tag: "Revival", title: "From Dead Bedroom to Hot Bedroom: How Kinks Can Save Your Marriage", read: "9 min", img: "/placeholders/whispers/whispers6.jpg" },
  { tag: "Awakening", title: "Awakening Your Inner Slut: Embracing Your Wild Sexual Self", read: "12 min", img: "/placeholders/whispers/whispers7.jpg" },
  { tag: "After 40", title: "How to Have Multiple Orgasms Every Time (Even After 40)", read: "10 min", img: "/placeholders/whispers/whispers8.jpg" },
];

const whispers = [
  { tag: "Confession", title: "The Night I Finally Asked For What I Wanted", read: "7 min", img: "/placeholders/confessions/confessions1.jpg" },
  { tag: "Awakening", title: "How I Stopped Apologizing For My Hunger", read: "9 min", img: "/placeholders/confessions/confessions2.jpg" },
  { tag: "Devotion", title: "He Knelt, And Everything Between Us Changed", read: "8 min", img: "/placeholders/confessions/confessions3.jpg" },
  { tag: "Surrender", title: "The First Time I Let Go Completely", read: "10 min", img: "/placeholders/confessions/confessions4.jpg" },
  { tag: "Power", title: "Becoming the Woman He Worships Daily", read: "11 min", img: "/placeholders/confessions/confessions5.jpg" },
  { tag: "Freedom", title: "Why I Burned The Rules I Was Raised On", read: "9 min", img: "/placeholders/confessions/confessions6.jpg" },
  { tag: "Ritual", title: "Our Sunday Mornings Look Nothing Like Before", read: "6 min", img: "/placeholders/confessions/confessions7.jpg" },
  { tag: "Truth", title: "What Married Women Whisper After Midnight", read: "12 min", img: "/placeholders/confessions/confessions8.jpg" },
];

const kinks = [
  { title: "Top 10 Kinks Women Crave But Hide", desc: "The fantasies that play in her mind when she's alone — finally named.", cta: "Reveal them", img: "/placeholders/kinks-teasers/kinks-teasers1.jpg" },
  { title: "Top Couple Kinks to Explore Together", desc: "Where curiosity becomes connection. Start small. Go deep.", cta: "Explore together", img: "/placeholders/kinks-teasers/kinks-teasers2.jpg" },
  { title: "Powerful Kinks for Female Pleasure & Control", desc: "Surrender, dominance, and the dance of power that ends in real bliss.", cta: "Take control", img: "/placeholders/kinks-teasers/kinks-teasers3.jpg" },
  { title: "Chastity & Devotion: A Beginner's Path", desc: "How locking the key unlocks something far deeper between you.", cta: "Begin slowly", img: "/placeholders/kinks-teasers/kinks-teasers4.jpg" },
  { title: "Sensory Play, Silk & Shadow", desc: "Blindfolds, whispers, slow hands — the art of patient pleasure.", cta: "Feel it all", img: "/placeholders/kinks-teasers/kinks-teasers5.jpg" },
  { title: "Role Play & Hidden Personas", desc: "Become someone bolder for a night and rediscover yourself.", cta: "Try a role", img: "/placeholders/kinks-teasers/kinks-teasers6.jpg" },
];

const power = [
  { title: "Female-Led Relationships, Demystified", desc: "Lead with grace. Build a partnership where her pleasure sets the rhythm.", img: "/placeholders/power/power1.jpg" },
  { title: "The Art of Loving Dominance", desc: "Soft commands, firm boundaries, and the trust that makes them sing.", img: "/placeholders/power/power2.jpg" },
  { title: "Worship, Rituals & Daily Devotion", desc: "Small acts that turn ordinary days into quiet, devotional pleasure.", img: "/placeholders/power/power3.jpg" },
  { title: "Hotwife & Sharing Dynamics", desc: "Honest conversations about desire, jealousy, trust and growth.", img: "/placeholders/power/power4.jpg" },
  { title: "Cuckold Compersion, Done With Care", desc: "How love deepens when fantasy meets honesty and unwavering rules.", img: "/placeholders/power/power5.jpg" },
  { title: "Sissification & Soft Surrender", desc: "Tender play that lets him melt into your hands, completely yours.", img: "/placeholders/power/power6.jpg" },
];

const freebies = [
  { tag: "PDF · 12 pages", title: "The Beginner's Chastity Playbook", desc: "A printable starter guide with rituals, conversation scripts and a 30-day plan.", img: "/placeholders/freebies/freebies1.jpg" },
  { tag: "Audio · 18 min", title: "Awakening Meditation for Her", desc: "A slow, guided audio to reconnect with desire — listen with headphones, in private.", img: "/placeholders/freebies/freebies2.jpg" },
  { tag: "PDF · 6 pages", title: "Dirty Talk Card Deck", desc: "Printable cards with whispered prompts you can shuffle into any night.", img: "/placeholders/freebies/freebies3.jpg" },
  { tag: "Worksheet", title: "The Desire Map: A Couple's Worksheet", desc: "A gentle questionnaire to discover what each of you secretly wants to try.", img: "/placeholders/freebies/freebies4.jpg" },
];


const products = [
  { name: "Whisper Wand", category: "Vibrator", badge: "Featured" },
  { name: "Lovense Remote", category: "App-Controlled", badge: "Bestseller" },
  { name: "Velvet Cage", category: "Chastity", badge: "His Surrender" },
  { name: "Silk Restraints", category: "Bondage", badge: "Beginner" },
  { name: "Pleasure Set", category: "Couple Kit", badge: "Editor's Pick" },
];

const levels = [
  { key: "beginner", label: "Beginner", games: ["Truth or Dare: Bedroom Edition", "The 30-Second Tease", "Whisper Wishlist"] },
  { key: "intermediate", label: "Intermediate", games: ["The Blindfold Hour", "Roleplay Roulette", "Edge & Release"] },
  { key: "advanced", label: "Advanced", games: ["Key Holder Challenge", "Hotwife Lottery Night", "The Surrender Protocol"] },
];

/* ─────────────────────────────  PAGE  ───────────────────────────── */

function Home() {
  return (
    <main>
      <SiteNav />
      <Hero />
      <Chapters />
      <Manifesto />
      <About />
      <Trending />
      <Whispers />
      <KinkTeasers />
      <PowerDynamics />
      <ShopTeaser />
      <Freebies />
      <Instagram />
      <Games />
      <FinalCTA />
      <SiteFooter />
    </main>
  );
}

const instaPosts = [
  { img: "/placeholders/instagram/insta1.jpg", caption: "A scarf, a slow exhale, a whole evening.", likes: "2.1k" },
  { img: "/placeholders/instagram/insta2.jpg", caption: "Aftercare card — saved to highlights.", likes: "1.8k" },
  { img: "/placeholders/instagram/insta3.jpg", caption: "What she texted at 2am, with permission.", likes: "3.4k" },
  { img: "/placeholders/instagram/insta4.jpg", caption: "Three sentences that change the bedroom.", likes: "986" },
  { img: "/placeholders/instagram/insta5.jpg", caption: "On keys, collars, and what they mean.", likes: "2.7k" },
  { img: "/placeholders/instagram/insta6.jpg", caption: "Soft dominance is a noticing practice.", likes: "1.2k" },
];

function Instagram() {
  return (
    <section id="instagram" className="py-24 md:py-32 border-b border-border/60">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <p className="eyebrow">New on Instagram</p>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl leading-tight">
              The quiet life of <em className="italic text-primary">@velvet.desire</em>.
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Small daily notes, soft visuals, and the conversations that didn't
              fit anywhere else. Tap to read the caption.
            </p>
          </div>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-primary hover:underline self-start md:self-end"
          >
            Follow on Instagram →
          </a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
          {instaPosts.map((p, i) => (
            <a
              key={i}
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="group relative block aspect-square overflow-hidden bg-secondary"
            >
              <img
                src={p.img}
                alt={p.caption}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/70 transition-colors duration-500" />
              <div className="absolute inset-0 p-4 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="font-serif italic text-sm text-background leading-snug">
                  "{p.caption}"
                </p>
                <p className="mt-2 text-[10px] uppercase tracking-[0.25em] text-background/80">
                  ♥ {p.likes}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}


/* ─────────────  SECTIONS  ───────────── */

function Hero() {
  return (
    <section id="home" className="relative min-h-[92svh] flex items-center border-b border-border/60 pt-28">
      <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-7">
          <p className="eyebrow">For her — and the partner who adores her</p>
          <h1 className="mt-6 font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] text-balance">
            It's time to <em className="text-primary not-italic">stop</em>
            <br />
            <span className="italic">faking it.</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg md:text-xl text-muted-foreground leading-relaxed">
            Reclaim your pleasure. Awaken the desires you've been hiding.
            Rediscover the woman who craves{" "}
            <span className="italic text-primary">more</span>.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="#her-desires"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-primary-foreground text-xs uppercase tracking-[0.25em] hover:bg-primary/90 transition-colors"
            >
              Discover My Hidden Desires <ArrowRight size={14} />
            </a>
            <a
              href="#couple-play"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-border text-xs uppercase tracking-[0.25em] hover:bg-foreground hover:text-background transition-colors"
            >
              Explore as a Couple
            </a>
          </div>
          <p className="mt-12 text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
            Shame-free · Discreet · Empowering
          </p>
        </div>
        <div className="md:col-span-5 hidden md:block">
          <div className="aspect-[4/5] bg-accent/40 border border-border/60 flex items-end p-6">
            <p className="font-serif italic text-2xl leading-snug text-foreground/80">
              "She is not a fantasy.
              <br />
              She is the awakening."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Chapters() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((p) => (p + 1) % chapters.length), 6000);
    return () => clearInterval(t);
  }, []);
  const go = (n: number) => setIdx((n + chapters.length) % chapters.length);
  const s = chapters[idx];

  return (
    <section id="her-desires" className="py-24 md:py-32 border-b border-border/60">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="eyebrow">Featured chapters</p>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl leading-tight">
            Where her <em className="italic text-primary">awakening</em> begins.
          </h2>
        </div>
        <div className="relative bg-secondary/40 border border-border/60 px-8 md:px-16 py-16 md:py-24 min-h-[360px]">
          <button
            onClick={() => go(idx - 1)}
            aria-label="Previous"
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={() => go(idx + 1)}
            aria-label="Next"
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
          >
            <ChevronRight size={16} />
          </button>
          <div className="max-w-2xl mx-auto text-center">
            <p className="eyebrow">{s.eyebrow}</p>
            <h3 className="mt-5 font-serif text-3xl md:text-5xl leading-[1.1] text-balance">
              {s.title}
            </h3>
            <p className="mt-5 font-serif italic text-lg md:text-xl text-primary">
              {s.tagline}
            </p>
          </div>
        </div>
        <div className="mt-6 flex items-center justify-center gap-3">
          {chapters.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              aria-label={`Slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === idx ? "w-10 bg-primary" : "w-4 bg-border hover:bg-primary/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function Manifesto() {
  return (
    <section className="py-28 md:py-40 border-b border-border/60">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <p className="eyebrow">Why this space exists</p>
          <div className="mt-6 h-px w-16 bg-primary/60" />
        </div>
        <div className="md:col-span-8">
          <h2 className="font-serif text-3xl md:text-5xl leading-[1.1] text-balance">
            You were taught to be <em className="text-primary">good</em>. Nobody
            taught you how to be <em className="italic">free</em>.
          </h2>
          <p className="mt-8 text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Because far too many women have never known what a real orgasm
            truly feels like. They've spent years quietly yearning, faking
            pleasure, and slowly losing touch with their own desire. Behind
            closed doors, passion fades, resentment grows, and many
            relationships quietly die in silence. We exist to change that.
            This is a space where women are encouraged to embrace their
            deepest erotic needs without guilt. A place to rediscover their
            body's capacity for intense, repeated, soul-shaking pleasure. A
            sanctuary where couples learn how to reignite raw desire, heal the
            dead bedroom, and build a relationship where her satisfaction and
            confidence become the heart of their intimacy. Here, we guide you
            back to life — wetter, bolder, and more alive than ever before.
          </p>
          <p className="mt-6 font-serif italic text-2xl text-primary">
            "Your desire is not a problem. It is the door."
          </p>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-secondary/30 border-b border-border/60">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        <div className="order-2 md:order-1">
          <p className="eyebrow">Our story</p>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl leading-tight">
            Two people who chose <em className="text-primary italic">truth</em>{" "}
            over comfort.
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            My name is Meera. I'm from Chennai, and my husband, Arjun Rao, is
            from Bangalore. Ours is a love story that began in school — 15
            years of secret glances and stolen moments before we finally got
            married against the wishes of my strict orthodox family. I was a
            medical student with a deep interest in psychology, while Arjun
            built his career in IT. Life after marriage brought its own
            challenges. During my second pregnancy, I felt profoundly lonely.
            Family dramas, emotional distance, and my own unspoken cravings
            created cracks in our relationship. Pregnancy depression hit hard,
            and discovering that other women were flirting with him triggered
            deep insecurity. That was the turning point. Instead of losing him,
            I chose to take control.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            I introduced chastity into our marriage — and it changed
            everything. What started as a way to rebuild trust gave me immense
            confidence and reignited the spark between us. Over the next 10
            years, while raising our daughter and son, we explored chastity
            play, deeper intimacy, and a whole new world of kinks — including
            hotwifing, cuckold dynamics, and sissification. Today, at 52, I
            feel more alive, confident, and sexually fulfilled than ever.
            Arjun, now 56, remains my devoted partner in every sense. Our bond
            is stronger and our sex life more exciting than it was in our 20s.
            Through my counseling work, I've helped hundreds of couples
            struggling with dead bedrooms, lack of female pleasure, and fading
            desire. By gently introducing chastity, open communication, and
            exploration of fantasies, many have transformed their
            relationships completely. This website is an extension of that
            journey — a safe, guiding space for women and couples who want to
            reignite passion, restore intimacy, and explore their deepest
            desires with trust and confidence. Welcome to our world.
          </p>
          <div className="mt-8 flex items-center gap-6 text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
            <span>Married 12 yrs</span>
            <span className="h-3 w-px bg-border" />
            <span>Living free since 2018</span>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <div className="aspect-[4/5] bg-accent/40 border border-border/60 flex items-end p-8">
            <p className="font-serif italic text-2xl text-foreground/80 leading-snug">
              "She is not a fantasy.
              <br />
              She is the awakening."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Trending() {
  return (
    <section id="blog" className="py-24 md:py-32 border-b border-border/60">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <p className="eyebrow">Trending now</p>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl leading-tight">
              Stories women <em className="text-primary italic">whisper</em> at 2am.
            </h2>
          </div>
          <a href="#blog" className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground hover:text-primary self-start md:self-end">
            View all stories →
          </a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {articles.map((a) => (
            <article
              key={a.title}
              className="group relative bg-background overflow-hidden aspect-[3/4] flex flex-col justify-end"
            >
              <img
                src={a.img}
                alt={a.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/70 to-foreground/10" />
              <div className="relative p-6 flex flex-col h-full">
                <span className="text-[10px] uppercase tracking-[0.25em] text-background border border-background/60 px-2 py-1 self-start backdrop-blur-sm">
                  {a.tag}
                </span>
                <h3 className="mt-auto font-serif text-xl leading-snug text-background drop-shadow">
                  {a.title}
                </h3>
                <div className="mt-4 pt-3 border-t border-background/20 flex items-center justify-between text-[11px] uppercase tracking-[0.2em] text-background/80">
                  <span>{a.read} read</span>
                  <ArrowUpRight size={14} className="text-background opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Whispers() {
  return (
    <section id="whispers" className="py-24 md:py-32 bg-secondary/30 border-b border-border/60">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <p className="eyebrow">After midnight</p>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl leading-tight">
              Confessions she keeps in{" "}
              <em className="italic text-primary">silk &amp; shadow</em>.
            </h2>
          </div>
          <a href="#blog" className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground hover:text-primary self-start md:self-end">
            Read more confessions →
          </a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {whispers.map((w) => (
            <article
              key={w.title}
              className="group relative bg-background overflow-hidden aspect-[3/4] flex flex-col justify-end"
            >
              <img
                src={w.img}
                alt={w.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/60 to-transparent" />
              <div className="relative p-6 flex flex-col h-full">
                <span className="text-[10px] uppercase tracking-[0.25em] text-background border border-background/60 px-2 py-1 self-start">
                  {w.tag}
                </span>
                <h3 className="mt-auto font-serif text-xl leading-snug text-background drop-shadow">
                  {w.title}
                </h3>
                <div className="mt-3 text-[11px] uppercase tracking-[0.2em] text-background/80">
                  {w.read} read
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function KinkTeasers() {
  return (
    <section id="couple-play" className="py-24 md:py-32 border-b border-border/60">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <p className="eyebrow">Kinks Explorer</p>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl leading-tight">
            What turns her on when <em className="italic text-primary">no one</em>{" "}
            is watching?
          </h2>
          <Link
            to="/kinks-explorer"
            className="mt-6 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-primary hover:underline"
          >
            Open the full Kinks Explorer →
          </Link>
        </div>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {kinks.map((k, i) => (
            <Link
              key={k.title}
              to="/kinks-explorer"
              className="group relative bg-background block overflow-hidden"
            >
              <img
                src={k.img}
                alt={k.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-700 scale-105 group-hover:scale-100"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/55 transition-colors duration-500" />
              <div className="relative p-10">
                <span className="font-serif italic text-5xl text-primary/40 group-hover:text-background/90 transition-colors">
                  0{i + 1}
                </span>
                <h3 className="mt-6 font-serif text-2xl md:text-[1.7rem] leading-tight group-hover:text-background transition-colors">
                  {k.title}
                </h3>
                <p className="mt-4 leading-relaxed text-sm text-muted-foreground group-hover:text-background/90 transition-colors">
                  {k.desc}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-primary group-hover:text-background transition-colors">
                  {k.cta} →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function PowerDynamics() {
  return (
    <section id="chastity" className="py-24 md:py-32 bg-secondary/30 border-b border-border/60">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <p className="eyebrow">Power &amp; Devotion</p>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl leading-tight">
            Where control becomes{" "}
            <em className="italic text-primary">tenderness</em>.
          </h2>
        </div>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {power.map((k, i) => (
            <article key={k.title} className="group relative bg-background overflow-hidden">
              <img
                src={k.img}
                alt={k.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-700 scale-105 group-hover:scale-100"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/55 transition-colors duration-500" />
              <div className="relative p-10">
                <span className="font-serif italic text-5xl text-primary/40 group-hover:text-background/90 transition-colors">
                  0{i + 1}
                </span>
                <h3 className="mt-6 font-serif text-2xl leading-tight group-hover:text-background transition-colors">
                  {k.title}
                </h3>
                <p className="mt-4 leading-relaxed text-sm text-muted-foreground group-hover:text-background/90 transition-colors">
                  {k.desc}
                </p>
                <button className="mt-6 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-primary group-hover:text-background transition-colors">
                  Read more →
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Freebies() {
  return (
    <section id="freebies" className="py-24 md:py-32 border-b border-border/60">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-xl">
            <p className="eyebrow">Free downloads</p>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl leading-tight">
              Quick <em className="italic text-primary">freebies</em> to take home.
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Printable guides, audio meditations and worksheets — gentle starting
              points you can download now, in complete privacy.
            </p>
          </div>
          <Link to="/freebies" className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground hover:text-primary self-start md:self-end">
            Open the free library →
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {freebies.map((f) => (
            <article key={f.title} className="group bg-background flex flex-col">
              <div className="aspect-[4/3] overflow-hidden bg-secondary relative">
                <img
                  src={f.img}
                  alt={f.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute top-3 left-3 text-[10px] uppercase tracking-[0.2em] bg-background/90 backdrop-blur px-2 py-1 text-foreground">
                  {f.tag}
                </span>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-serif text-xl leading-tight group-hover:text-primary transition-colors">
                  {f.title}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">
                  {f.desc}
                </p>
                <a
                  href="#"
                  className="mt-5 inline-flex items-center gap-2 px-4 py-2.5 bg-primary text-primary-foreground text-[11px] uppercase tracking-[0.25em] hover:bg-primary/90 transition-colors self-start"
                >
                  <Download size={13} /> Download free
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ShopTeaser() {
  return (
    <section id="resources" className="py-24 md:py-32 border-b border-border/60">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <p className="eyebrow">Pleasure tools</p>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl leading-tight">
            The toys we <em className="italic text-primary">personally</em>{" "}
            recommend.
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl">
            Tested. Loved. Honest. No fluff — only what actually changes the
            bedroom.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-px bg-border">
          {products.map((p) => (
            <div key={p.name} className="group bg-background p-5">
              <div className="aspect-square bg-accent/40 border border-border/60 relative flex items-end p-3">
                <span className="text-[9px] uppercase tracking-[0.2em] text-muted-foreground">
                  {p.badge}
                </span>
              </div>
              <p className="mt-3 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                {p.category}
              </p>
              <h3 className="font-serif text-lg mt-1 group-hover:text-primary transition-colors">
                {p.name}
              </h3>
              <button className="mt-2 text-[11px] uppercase tracking-[0.2em] text-primary hover:underline">
                Shop →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Games() {
  const [active, setActive] = useState(0);
  const current = levels[active];
  return (
    <section id="games" className="py-24 md:py-32 bg-secondary/30 border-b border-border/60">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <p className="eyebrow">Games for couples</p>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl leading-tight">
            Make exploration <em className="italic text-primary">play</em>.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Pick your edge. Move at your own pace. Every game is consent-first.
          </p>
        </div>
        <div className="mt-12 flex justify-center gap-2">
          {levels.map((l, i) => (
            <button
              key={l.key}
              onClick={() => setActive(i)}
              className={`px-5 py-2.5 text-[11px] uppercase tracking-[0.25em] border transition-all ${
                active === i
                  ? "bg-primary text-primary-foreground border-primary"
                  : "border-border text-muted-foreground hover:border-primary/60 hover:text-primary"
              }`}
            >
              {l.label}
            </button>
          ))}
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-px bg-border" key={current.key}>
          {current.games.map((g, i) => (
            <div key={g} className="p-10 bg-background">
              <span className="font-serif italic text-primary/40 text-sm">
                Game {i + 1}
              </span>
              <h3 className="mt-3 font-serif text-2xl">{g}</h3>
              <p className="mt-4 text-[11px] uppercase tracking-[0.2em] text-primary hover:underline inline-block cursor-pointer">
                Play tonight →
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section id="contact" className="py-32 md:py-44">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <p className="eyebrow">Your turn</p>
        <h2 className="mt-6 font-serif text-5xl md:text-7xl leading-[0.95] text-balance">
          Ready to begin your <em className="italic text-primary">sexual</em>{" "}
          awakening?
        </h2>
        <p className="mt-8 text-lg text-muted-foreground max-w-xl mx-auto">
          One step. One yes. One night that changes everything.
        </p>
        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#resources"
            className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-primary text-primary-foreground text-xs uppercase tracking-[0.25em] hover:bg-primary/90 transition-colors"
          >
            Start Exploring Free Resources
          </a>
          <Link
            to="/kinks-explorer"
            className="inline-flex items-center justify-center gap-3 px-10 py-5 border border-border text-xs uppercase tracking-[0.25em] hover:bg-foreground hover:text-background transition-colors"
          >
            Browse the Full Kink Library
          </Link>
        </div>
      </div>
    </section>
  );
}
