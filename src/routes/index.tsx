import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Velvet Desire — Reclaim Your Pleasure" },
      { name: "description", content: "An elegant sanctuary for sensual rediscovery. Explore desires, stories, and quiet rituals." },
    ],
  }),
  component: Home,
});

const features = [
  { tag: "Atlas", title: "A gentle map of desire", body: "Discover the language of fantasy, kink, and fetish — softly, without shame." },
  { tag: "Journal", title: "Stories written in candlelight", body: "Essays, whispers, and rituals from women rediscovering their own pleasure." },
  { tag: "Shop", title: "Objects with intention", body: "A small, considered collection of things that invite touch and slow attention." },
];

const whispers = [
  { q: "I forgot how loud my own desire could be.", a: "— from a reader, 38" },
  { q: "We started reading together. We haven't stopped talking since.", a: "— from a reader, 45" },
  { q: "It felt like permission I didn't know I needed.", a: "— from a reader, 31" },
];

function Home() {
  return (
    <main>
      <SiteNav />

      {/* HERO */}
      <section className="relative min-h-[92svh] flex items-center pt-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-7">
            <p className="eyebrow">For her — and the one who adores her</p>
            <h1 className="mt-6 font-serif text-6xl md:text-8xl leading-[0.95] text-balance">
              It's time to <em className="text-primary not-italic">stop</em>
              <br />
              <span className="italic">faking it.</span>
            </h1>
            <p className="mt-8 max-w-lg text-lg text-muted-foreground leading-relaxed">
              Reclaim your pleasure. Awaken the desires you've quietly tucked away.
              Rediscover the woman who wants <span className="italic text-primary">more</span>.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/explore"
                className="group inline-flex items-center gap-3 bg-primary text-primary-foreground px-7 py-3.5 text-[11px] uppercase tracking-[0.25em] hover:bg-primary/90 transition-colors"
              >
                Explore the Atlas
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/journal"
                className="inline-flex items-center gap-3 border border-foreground/30 px-7 py-3.5 text-[11px] uppercase tracking-[0.25em] hover:bg-foreground hover:text-background transition-colors"
              >
                Read the Journal
              </Link>
            </div>
            <div className="mt-14 flex items-center gap-5 text-[10px] uppercase tracking-[0.35em] text-muted-foreground">
              <span className="h-px w-12 bg-primary/60" />
              <span>Shame-free · Discreet · Empowering</span>
            </div>
          </div>
          <div className="md:col-span-5 hidden md:block">
            <div className="aspect-[3/4] border border-border relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blush via-background to-secondary" />
              <div className="absolute inset-0 flex items-center justify-center p-12">
                <p className="font-serif italic text-3xl text-center text-foreground/70 leading-snug">
                  "She undressed her thoughts before she undressed anything else."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="border-t border-border/60 py-28">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="eyebrow">Our Manifesto</p>
          <p className="mt-8 font-serif text-3xl md:text-4xl leading-[1.25] text-balance">
            Pleasure is not a reward for being good. It is a language —
            <span className="italic"> yours </span>
            to speak, to learn, to whisper, to shout.
          </p>
        </div>
      </section>

      {/* FEATURES */}
      <section className="border-t border-border/60 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-px bg-border">
            {features.map((f) => (
              <div key={f.title} className="bg-background p-10 hover:bg-secondary/40 transition-colors">
                <p className="eyebrow">{f.tag}</p>
                <h3 className="mt-5 font-serif text-2xl leading-tight">{f.title}</h3>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHISPERS */}
      <section className="border-t border-border/60 py-28 bg-secondary/30">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="eyebrow">Whispers</p>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl">From the women we serve.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {whispers.map((w, i) => (
              <figure key={i} className="text-center">
                <blockquote className="font-serif italic text-xl leading-snug text-foreground/85">
                  "{w.q}"
                </blockquote>
                <figcaption className="mt-5 text-xs uppercase tracking-[0.25em] text-muted-foreground">
                  {w.a}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border/60 py-28">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="eyebrow">Begin Quietly</p>
          <h2 className="mt-6 font-serif text-5xl md:text-6xl text-balance">
            Step into the velvet room.
          </h2>
          <p className="mt-6 text-muted-foreground">
            Subscribe for a weekly letter — one essay, one ritual, one whisper. Always discreet.
          </p>
          <form className="mt-10 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@quiet.address"
              className="flex-1 bg-transparent border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary"
            />
            <button
              type="submit"
              className="bg-primary text-primary-foreground px-6 py-3 text-[11px] uppercase tracking-[0.25em] hover:bg-primary/90"
            >
              Join
            </button>
          </form>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
