import { createFileRoute, Link } from "@tanstack/react-router";
import { Feather, Heart, Flame, ArrowRight, Sparkles, BookOpen } from "lucide-react";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { top15Kinks, azKinks } from "@/data/kinks";

export const Route = createFileRoute("/kinks-explorer")({
  head: () => ({
    meta: [
      { title: "Kinks Explorer — Velvet Desire" },
      { name: "description", content: "A gentle, shame-free guide to kink, fantasy and fetish. Browse the Top 15 and the full A–Z library." },
    ],
  }),
  component: KinksExplorer,
});

const trio = [
  {
    icon: Feather,
    tag: "Fantasy",
    title: "The story you whisper only to yourself.",
    body: "Fantasy is the erotic film you screen in your own mind — safe, private, completely yours.",
    example: "\"I sometimes imagine you sharing me…\" One sentence can rewrite an entire night, with no pressure to make it real.",
  },
  {
    icon: Heart,
    tag: "Kink",
    title: "The fantasy let loose into the bedroom.",
    body: "Kink is bringing that secret story into real life — gently, with consent and communication.",
    example: "Light spanking, a blindfold, or a small role turns ordinary intimacy into a game that brings you closer.",
  },
  {
    icon: Flame,
    tag: "Fetish",
    title: "The specific note that makes you tremble.",
    body: "Fetish is more particular — an object, a body part, a scenario almost necessary for peak arousal.",
    example: "Soft, deliberate attention to a delicate place — a nape, a wrist, a navel — can become deeply, personally exciting.",
  },
];

function KinksExplorer() {
  return (
    <main>
      <SiteNav />

      {/* HERO */}
      <section className="pt-36 pb-24 border-b border-border/60">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="eyebrow inline-flex items-center gap-2">
            <Sparkles size={12} /> Kinks Explorer
          </p>
          <h1 className="mt-6 font-serif text-5xl md:text-7xl leading-[1.05] text-balance">
            What's the difference between <em className="italic text-primary">kink, fantasy</em> &amp; <em className="italic text-primary">fetish?</em>
          </h1>
          <p className="mt-8 max-w-xl mx-auto text-lg text-muted-foreground leading-relaxed">
            A slow, shame-free guide to the desires you've imagined, whispered, and never quite
            found the words for. Curiosity is not a flaw — it's a doorway.
          </p>
          <p className="mt-10 text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
            Shame-free · Consensual · Adults only
          </p>
        </div>
      </section>

      {/* TRIO */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto">
            <p className="eyebrow">The three languages of desire</p>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl">
              The <em className="italic text-primary">art</em> of exploration.
            </h2>
          </div>
          <div className="mt-16 grid md:grid-cols-3 gap-px bg-border">
            {trio.map(({ icon: Icon, tag, title, body, example }) => (
              <article key={tag} className="bg-background p-10">
                <Icon size={28} className="text-primary" strokeWidth={1.2} />
                <p className="eyebrow mt-6">{tag}</p>
                <h3 className="mt-3 font-serif text-2xl leading-tight">{title}</h3>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{body}</p>
                <p className="mt-5 pl-4 border-l border-primary/40 italic text-sm text-foreground/70 leading-relaxed">
                  {example}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TOP 15 — with hero image */}
      <section className="py-24 border-t border-border/60">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 items-stretch mb-16">
            <div className="relative aspect-[16/10] overflow-hidden bg-secondary">
              <img
                src="/placeholders/top15-hero.jpg"
                alt="Top 15 kinks worth exploring"
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 text-background">
                <p className="text-[11px] uppercase tracking-[0.35em] opacity-90">The Hot List · 2026</p>
                <p className="mt-2 font-serif italic text-3xl">Curated by Velvet Desire</p>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <p className="eyebrow">The Hot List</p>
              <h2 className="mt-4 font-serif text-4xl md:text-5xl leading-tight">
                Top 15 kinks <em className="italic text-primary">worth</em> exploring.
              </h2>
              <p className="mt-5 text-muted-foreground leading-relaxed">
                Our most-requested introductions, for grown-ups who want pleasure with intention.
                Each one comes with a current trend note, a beautiful pairing, and a way in.
              </p>
              <a
                href="#library"
                className="mt-8 inline-flex w-fit items-center gap-3 px-7 py-3 bg-primary text-primary-foreground text-xs uppercase tracking-[0.25em] hover:bg-primary/90 transition-colors"
              >
                Jump to A–Z library <ArrowRight size={14} />
              </a>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {top15Kinks.map((k, i) => (
              <article key={k.slug} className="bg-background p-7 flex flex-col">
                <p className="font-serif italic text-2xl text-primary">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-3 font-serif text-2xl leading-tight">{k.title}</h3>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{k.paragraph}</p>
                <div className="mt-5 pl-4 border-l border-primary/40 text-[13px] text-foreground/70 leading-relaxed">
                  <p><span className="uppercase tracking-[0.18em] text-[10px] text-primary mr-2">Trend</span>{k.trend}</p>
                  <p className="mt-2"><span className="uppercase tracking-[0.18em] text-[10px] text-primary mr-2">Combo</span>{k.combo}</p>
                  <p className="mt-2 italic"><span className="uppercase tracking-[0.18em] text-[10px] not-italic text-primary mr-2">Explore</span>{k.explore}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* A–Z LIBRARY */}
      <section id="library" className="border-t border-border/60 py-24 bg-secondary/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <p className="eyebrow">The Library</p>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl">
              Kinks from <em className="italic text-primary">A</em> to <em className="italic text-primary">Z</em>.
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              A growing alphabet of desire. Tap any title to read the full guide — chapters,
              images, gentle starting steps and aftercare.
            </p>
          </div>

          <div className="space-y-20">
            {azKinks.map((group) => (
              <div key={group.letter} className="grid md:grid-cols-[6rem_1fr] gap-8 md:gap-10 items-start border-b border-border/40 pb-16">
                <div className="font-serif italic text-7xl md:text-8xl text-primary leading-none">
                  {group.letter}
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {group.items.map((item) => (
                    <article key={item.slug} className="group bg-background border border-border/60 flex flex-col">
                      <div className="aspect-[4/3] overflow-hidden bg-secondary">
                        <img
                          src={item.image}
                          alt={item.title}
                          loading="lazy"
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-6 flex flex-col flex-1">
                        <h3 className="font-serif text-2xl leading-tight">{item.title}</h3>
                        <p className="mt-1 eyebrow">{item.subtitle}</p>
                        <p className="mt-4 text-sm text-muted-foreground leading-relaxed line-clamp-4">
                          {item.excerpt}
                        </p>
                        <Link
                          to="/kinks/$slug"
                          params={{ slug: item.slug }}
                          className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-primary hover:gap-3 transition-all"
                        >
                          <BookOpen size={14} /> Read fully <ArrowRight size={14} />
                        </Link>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section className="border-t border-border/60 py-28">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <p className="eyebrow">A small reminder</p>
          <p className="mt-6 font-serif italic text-3xl md:text-4xl leading-snug">
            Curiosity is not a flaw. It is the <span className="text-primary">doorway</span>.
          </p>
          <div className="mt-10">
            <Link
              to="/"
              className="inline-flex items-center gap-3 px-8 py-3 border border-border text-xs uppercase tracking-[0.3em] hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
            >
              Back to home
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
