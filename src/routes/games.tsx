import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowRight, Flame, Sparkles, Share2, ShieldCheck, Heart } from "lucide-react";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { CATEGORIES, GAMES, flames, type GameCategory } from "@/data/games";

export const Route = createFileRoute("/games")({
  head: () => ({
    meta: [
      { title: "Games for Couples — Velvet Desire" },
      { name: "description", content: "Ultra-intimate, browser-based kinky games for consenting couples. Chastity, cuckold, exhibitionist play, the Wheel of Kink and a kinky Truth or Dare — all with built-in consent tools." },
      { property: "og:title", content: "Games for Couples — Velvet Desire" },
      { property: "og:description", content: "Spin, roll and play together. Consent-first design, safe-word banner, aftercare timers." },
      { property: "og:image", content: "/placeholders/games/wheel-1.jpg" },
    ],
  }),
  component: GamesIndex,
});

function GamesIndex() {
  const [active, setActive] = useState<GameCategory | "all">("all");
  const visible = useMemo(
    () => (active === "all" ? GAMES : GAMES.filter((g) => g.category === active)),
    [active]
  );

  return (
    <main>
      <SiteNav />

      {/* HERO */}
      <section className="pt-36 pb-20 border-b border-border/60 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <img src="/placeholders/games/wheel-1.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/85 to-background" />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <p className="eyebrow inline-flex items-center gap-2"><Sparkles size={12} /> Velvet Desire · Couple Games</p>
          <h1 className="mt-6 font-serif text-5xl md:text-7xl leading-[1.05] text-balance">
            Spin to begin your <em className="italic text-primary">kinky adventure</em>.
          </h1>
          <p className="mt-7 max-w-2xl mx-auto text-lg text-muted-foreground leading-relaxed">
            Ultra-intimate, browser-based experiences for consenting adults. Play together on one
            device or remotely with a shareable session code. Every game ships with a safe-word
            button, boundary check-ins and an aftercare timer.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/games/$slug"
              params={{ slug: "ultimate-wheel-of-kink" }}
              className="inline-flex items-center gap-2 px-7 py-3 bg-primary text-primary-foreground text-xs uppercase tracking-[0.25em] hover:bg-primary/90"
            >
              Spin the Wheel of Kink <ArrowRight size={14} />
            </Link>
            <Link
              to="/games/$slug"
              params={{ slug: "truth-or-dare-kinky" }}
              className="inline-flex items-center gap-2 px-7 py-3 border border-primary text-primary text-xs uppercase tracking-[0.25em] hover:bg-primary hover:text-primary-foreground"
            >
              Draw a Truth or Dare card
            </Link>
          </div>
          <p className="mt-10 text-[11px] uppercase tracking-[0.3em] text-muted-foreground inline-flex items-center gap-4">
            <span className="inline-flex items-center gap-1"><ShieldCheck size={12} /> Consent-first</span>
            <span className="inline-flex items-center gap-1"><Heart size={12} /> Aftercare built in</span>
            <span className="inline-flex items-center gap-1"><Share2 size={12} /> Share session code</span>
          </p>
        </div>
      </section>

      {/* CATEGORY TABS */}
      <section className="border-b border-border/60 sticky top-16 md:top-20 z-20 bg-background/85 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 py-4 flex gap-2 overflow-x-auto">
          <button
            onClick={() => setActive("all")}
            className={`shrink-0 px-4 py-2 text-[11px] uppercase tracking-[0.25em] border ${active === "all" ? "border-primary text-primary bg-primary/5" : "border-border text-muted-foreground hover:text-primary"}`}
          >
            All games
          </button>
          {CATEGORIES.map((c) => (
            <button
              key={c.id}
              onClick={() => setActive(c.id)}
              className={`shrink-0 px-4 py-2 text-[11px] uppercase tracking-[0.25em] border ${active === c.id ? "border-primary text-primary bg-primary/5" : "border-border text-muted-foreground hover:text-primary"}`}
            >
              {c.label}
            </button>
          ))}
        </div>
      </section>

      {/* GAME CARDS */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          {active !== "all" && (
            <div className="mb-10">
              <p className="eyebrow">{CATEGORIES.find((c) => c.id === active)?.label}</p>
              <h2 className="mt-3 font-serif text-3xl md:text-4xl">
                {CATEGORIES.find((c) => c.id === active)?.blurb}
              </h2>
            </div>
          )}

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {visible.map((g) => (
              <article key={g.slug} className="group bg-background flex flex-col">
                <div className="relative aspect-[16/10] overflow-hidden bg-secondary">
                  <img
                    src={g.image}
                    alt={g.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/10 to-transparent" />
                  <p className="absolute top-3 left-3 text-[10px] uppercase tracking-[0.3em] text-background/90 bg-foreground/40 backdrop-blur px-2 py-1">
                    {CATEGORIES.find((c) => c.id === g.category)?.label}
                  </p>
                  <p className="absolute top-3 right-3 text-sm">{flames(g.intensity)}</p>
                </div>
                <div className="p-7 flex flex-col flex-1">
                  <h3 className="font-serif text-2xl leading-tight group-hover:text-primary transition-colors">
                    {g.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">{g.short}</p>
                  <div className="mt-5 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                      <Flame size={11} className="text-primary" /> Kink {g.intensity}/5
                    </span>
                    <Link
                      to="/games/$slug"
                      params={{ slug: g.slug }}
                      className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-primary hover:gap-3 transition-all"
                    >
                      Play now <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CONSENT FOOTER */}
      <section className="border-t border-border/60 py-20 bg-secondary/30">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="eyebrow">Safety first, every time</p>
          <p className="mt-4 font-serif italic text-3xl leading-snug">
            “Play hard, land soft.”
          </p>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            Every game has a sticky <span className="text-primary">Red · Stop</span> and
            <span className="text-primary"> Yellow · Slow</span> button, a check-in cadence, and an
            aftercare timer that starts the moment a scene ends. Talk before, talk during, hold each
            other after.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/freebies" className="text-xs uppercase tracking-[0.25em] px-5 py-2.5 border border-border hover:border-primary hover:text-primary">Aftercare guide</Link>
            <Link to="/about" className="text-xs uppercase tracking-[0.25em] px-5 py-2.5 border border-border hover:border-primary hover:text-primary">Free chat advice</Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
