import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { PageHeader } from "@/components/site/PageHeader";

export const Route = createFileRoute("/journal")({
  head: () => ({
    meta: [
      { title: "Journal — Velvet Desire" },
      { name: "description", content: "Essays, rituals, and whispers from women rediscovering their own pleasure." },
    ],
  }),
  component: Journal,
});

const posts = [
  { tag: "Ritual", title: "The art of undressing slowly.", excerpt: "Why the first three minutes of an evening matter more than the last thirty.", date: "May 18, 2026", read: "6 min" },
  { tag: "Essay", title: "On the words we never said out loud.", excerpt: "A quiet investigation of the sentences that live behind our teeth.", date: "May 11, 2026", read: "9 min" },
  { tag: "Letter", title: "To the woman who feels too much.", excerpt: "An open letter to anyone who's been told her wanting is a problem.", date: "May 4, 2026", read: "5 min" },
  { tag: "Ritual", title: "A bath as a love letter to yourself.", excerpt: "Salt, citrus, candlelight, and twelve minutes of nothing.", date: "Apr 27, 2026", read: "4 min" },
  { tag: "Essay", title: "The geometry of being touched.", excerpt: "Where pleasure begins, and why it rarely begins where we think.", date: "Apr 20, 2026", read: "7 min" },
  { tag: "Whisper", title: "Small confessions, gathered.", excerpt: "Anonymous notes from readers — printed, with love and care.", date: "Apr 13, 2026", read: "3 min" },
];

function Journal() {
  return (
    <main>
      <SiteNav />
      <PageHeader
        eyebrow="The Journal"
        title="Slow reading, for the senses."
        subtitle="A weekly letter written by candlelight. Essays, rituals, and whispered confessions — always discreet, never prescriptive."
      />

      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-px bg-border">
            {posts.map((p) => (
              <article key={p.title} className="bg-background p-10 hover:bg-secondary/40 transition-colors group">
                <div className="flex items-center gap-4 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                  <span className="text-primary">{p.tag}</span>
                  <span className="h-px w-6 bg-border" />
                  <span>{p.date}</span>
                  <span>·</span>
                  <span>{p.read}</span>
                </div>
                <h2 className="mt-5 font-serif text-3xl leading-tight group-hover:text-primary transition-colors">
                  {p.title}
                </h2>
                <p className="mt-3 text-muted-foreground leading-relaxed">{p.excerpt}</p>
                <Link to="/journal" className="mt-6 inline-block text-[11px] uppercase tracking-[0.25em] text-primary">
                  Read essay →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
