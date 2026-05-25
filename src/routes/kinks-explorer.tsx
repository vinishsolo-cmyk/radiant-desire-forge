import { createFileRoute } from "@tanstack/react-router";
import { Feather, Heart, Flame } from "lucide-react";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { PageHeader } from "@/components/site/PageHeader";

export const Route = createFileRoute("/kinks-explorer")({
  head: () => ({
    meta: [
      { title: "Kinks Explorer — Velvet Desire" },
      { name: "description", content: "A gentle atlas of fantasy, kink and fetish. Discover the language of your desire." },
    ],
  }),
  component: Explore,
});

const trio = [
  {
    icon: Feather,
    tag: "Fantasy",
    title: "The story you whisper only to yourself.",
    body: "Fantasy is the private film you screen in your own mind — safe, completely yours, and the seed of nearly every awakening.",
  },
  {
    icon: Heart,
    tag: "Kink",
    title: "The fantasy let loose into the bedroom.",
    body: "Kink is taking that secret story and bringing it — even in small, playful ways — into a real night with someone you trust.",
  },
  {
    icon: Flame,
    tag: "Fetish",
    title: "The specific note that makes you tremble.",
    body: "Fetish is the precise object, scent, scene or sensation that holds the key — the one detail that turns the volume up.",
  },
];

const atlas = [
  { letter: "A", items: ["Anticipation", "Aftercare", "Adoration"] },
  { letter: "B", items: ["Breath play", "Blindfolds", "Brushed lace"] },
  { letter: "C", items: ["Chastity", "Candle wax", "Confessions"] },
  { letter: "D", items: ["Dominance", "Devotion", "Dressing slowly"] },
  { letter: "E", items: ["Edging", "Eye contact", "Echoes"] },
  { letter: "F", items: ["Feathers", "Furs", "Forbidden words"] },
  { letter: "M", items: ["Mirrors", "Massage", "Murmurs"] },
  { letter: "R", items: ["Roleplay", "Ribbons", "Reverence"] },
  { letter: "S", items: ["Silk", "Surrender", "Slow burn"] },
  { letter: "T", items: ["Teasing", "Tenderness", "Tasting"] },
  { letter: "V", items: ["Velvet", "Vulnerability", "Voice"] },
  { letter: "W", items: ["Whispers", "Worship", "Waiting"] },
];

function Explore() {
  return (
    <main>
      <SiteNav />
      <PageHeader
        eyebrow="Atlas of Desire"
        title="A gentle map of what moves you."
        subtitle="Three quiet words — fantasy, kink, fetish — each a door. Step through whichever opens easiest for you."
      />

      {/* TRIO */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-px bg-border">
          {trio.map(({ icon: Icon, tag, title, body }) => (
            <div key={tag} className="bg-background p-10">
              <Icon size={28} className="text-primary" strokeWidth={1.2} />
              <p className="eyebrow mt-6">{tag}</p>
              <h3 className="mt-3 font-serif text-2xl leading-tight">{title}</h3>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ATLAS A-Z */}
      <section className="border-t border-border/60 py-24 bg-secondary/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="eyebrow">A — Z</p>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl">An alphabet for the senses.</h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              A small lexicon of textures, moods, and gestures. Pick a letter; let it lead.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-border">
            {atlas.map((row) => (
              <div key={row.letter} className="bg-background p-6 hover:bg-blush/40 transition-colors">
                <p className="font-serif text-5xl text-primary">{row.letter}</p>
                <ul className="mt-3 space-y-1 text-sm text-foreground/80">
                  {row.items.map((i) => <li key={i} className="italic">{i}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section className="border-t border-border/60 py-28">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <p className="font-serif italic text-3xl leading-snug">
            "Desire is not a destination. It is the way you learn to walk through your own
            life — slowly, on purpose, with your senses fully open."
          </p>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
