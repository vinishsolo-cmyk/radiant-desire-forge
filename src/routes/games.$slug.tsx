import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, ArrowLeft, Share2, Heart, ChevronRight, Flame } from "lucide-react";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SafeWordBar } from "@/components/site/SafeWordBar";
import { GameWidget } from "@/components/games/GameWidgets";
import { CATEGORIES, GAMES, flames } from "@/data/games";

export const Route = createFileRoute("/games/$slug")({
  head: ({ params }) => {
    const game = GAMES.find((g) => g.slug === params.slug);
    return {
      meta: [
        { title: `${game?.title ?? "Game"} — Velvet Desire Games` },
        { name: "description", content: game?.short ?? "An interactive couple game on Velvet Desire." },
        { property: "og:title", content: `${game?.title ?? "Game"} — Velvet Desire` },
        { property: "og:description", content: game?.short ?? "" },
        ...(game?.image ? [{ property: "og:image", content: game.image }] : []),
      ],
    };
  },
  loader: ({ params }) => {
    const game = GAMES.find((g) => g.slug === params.slug);
    if (!game) throw notFound();
    return { game };
  },
  notFoundComponent: () => (
    <main>
      <SiteNav />
      <section className="pt-40 pb-32 text-center px-6">
        <p className="eyebrow">Not found</p>
        <h1 className="mt-4 font-serif text-4xl">This game doesn't exist.</h1>
        <Link to="/games" className="mt-8 inline-flex items-center gap-2 text-primary text-xs uppercase tracking-[0.25em]">
          Back to all games <ArrowRight size={14} />
        </Link>
      </section>
      <SiteFooter />
    </main>
  ),
  component: GamePage,
});

function GamePage() {
  const { game } = Route.useLoaderData();
  const category = CATEGORIES.find((c) => c.id === game.category);
  const related = GAMES.filter((g) => g.category === game.category && g.slug !== game.slug).slice(0, 3);
  const sessionCode = game.slug.split("-").slice(0, 2).join("").toUpperCase().slice(0, 6) + Math.floor(100 + Math.random() * 900);

  return (
    <main>
      <SiteNav />
      <SafeWordBar />

      {/* HEADER */}
      <section className="pt-12 md:pt-16 pb-12 border-b border-border/60">
        <div className="max-w-6xl mx-auto px-6">
          <nav className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground flex items-center gap-2">
            <Link to="/games" className="hover:text-primary">Games</Link>
            <ChevronRight size={12} />
            <span className="text-primary">{category?.label}</span>
          </nav>
          <div className="mt-6 grid lg:grid-cols-[1.2fr_1fr] gap-10 items-start">
            <div>
              <h1 className="font-serif text-4xl md:text-6xl leading-[1.05]">{game.title}</h1>
              <p className="mt-5 text-lg text-muted-foreground leading-relaxed">{game.short}</p>
              <div className="mt-5 flex flex-wrap items-center gap-4 text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                <span className="inline-flex items-center gap-2"><Flame size={12} className="text-primary" /> Intensity {game.intensity}/5 {flames(game.intensity)}</span>
                <span className="inline-flex items-center gap-2"><Share2 size={12} className="text-primary" /> Session · <span className="font-mono text-primary normal-case tracking-wider">{sessionCode}</span></span>
              </div>
            </div>
            <div className="relative aspect-[5/4] overflow-hidden bg-secondary">
              <img src={game.image} alt={game.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* THE GAME */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="eyebrow">Play</p>
          <h2 className="mt-3 font-serif text-3xl md:text-4xl">{game.ui}</h2>
          <div className="mt-12">
            <GameWidget game={game} />
          </div>
        </div>
      </section>

      {/* RULES */}
      <section className="py-16 border-t border-border/60 bg-secondary/30">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div>
            <p className="eyebrow">How to play</p>
            <h3 className="mt-3 font-serif text-3xl">The rules, gently.</h3>
            <ol className="mt-6 space-y-4">
              {game.rules.map((r, i) => (
                <li key={i} className="flex gap-4">
                  <span className="font-serif italic text-primary text-2xl leading-none">{i + 1}.</span>
                  <p className="text-foreground/85 leading-relaxed">{r}</p>
                </li>
              ))}
            </ol>
          </div>
          <div>
            <p className="eyebrow">Sample whispers</p>
            <h3 className="mt-3 font-serif text-3xl">Lovingly dominant. Filthy. Tender.</h3>
            <ul className="mt-6 space-y-4">
              {game.prompts.map((p, i) => (
                <li key={i} className="border-l-2 border-primary/40 pl-4 font-serif italic text-lg text-foreground/85 leading-relaxed">
                  “{p}”
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* AFTERCARE */}
      <section className="py-16 border-t border-border/60">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <Heart size={20} className="mx-auto text-primary" />
          <p className="eyebrow mt-3">Aftercare prompt</p>
          <p className="mt-4 font-serif italic text-2xl md:text-3xl leading-snug">
            Water. A soft blanket. Two slow breaths together. Tell each other
            <span className="text-primary"> one thing </span>
            that felt good — and one thing you'd like to try next time.
          </p>
        </div>
      </section>

      {/* RELATED */}
      {related.length > 0 && (
        <section className="py-16 border-t border-border/60 bg-secondary/30">
          <div className="max-w-6xl mx-auto px-6">
            <p className="eyebrow">More in {category?.label}</p>
            <h3 className="mt-3 font-serif text-3xl">Keep playing.</h3>
            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  to="/games/$slug"
                  params={{ slug: r.slug }}
                  className="group bg-background border border-border/60 flex flex-col hover:border-primary/60 transition-colors"
                >
                  <div className="aspect-[16/10] overflow-hidden bg-secondary">
                    <img src={r.image} alt={r.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h4 className="font-serif text-xl group-hover:text-primary transition-colors">{r.title}</h4>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">{r.short}</p>
                    <span className="mt-4 text-xs uppercase tracking-[0.25em] text-primary inline-flex items-center gap-2">Play <ArrowRight size={14} /></span>
                  </div>
                </Link>
              ))}
            </div>
            <div className="mt-12 flex justify-between">
              <Link to="/games" className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-muted-foreground hover:text-primary">
                <ArrowLeft size={14} /> All games
              </Link>
              <Link to="/freebies" className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-muted-foreground hover:text-primary">
                Aftercare downloads <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </section>
      )}

      <SiteFooter />
    </main>
  );
}
