import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { PageHeader } from "@/components/site/PageHeader";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Shop — Velvet Desire" },
      { name: "description", content: "A small, considered collection of objects that invite touch and slow attention." },
    ],
  }),
  component: Shop,
});

const products = [
  { name: "Silk Blindfold, No. 1", price: "$48", category: "Sensation", tone: "from-blush to-secondary" },
  { name: "Hand-Poured Candle, Velvet Rose", price: "$36", category: "Atmosphere", tone: "from-secondary to-accent" },
  { name: "The Letter Set, Linen", price: "$28", category: "Stationery", tone: "from-accent to-blush" },
  { name: "Bath Soak, Bergamot & Fig", price: "$32", category: "Ritual", tone: "from-blush to-accent" },
  { name: "Massage Oil, Almond & Vanilla", price: "$42", category: "Touch", tone: "from-secondary to-blush" },
  { name: "The Velvet Journal", price: "$38", category: "Pages", tone: "from-accent to-secondary" },
];

function Shop() {
  return (
    <main>
      <SiteNav />
      <PageHeader
        eyebrow="The Atelier"
        title="Objects with intention."
        subtitle="A small, slowly grown collection. Each piece chosen for the way it changes a room, a moment, a mood."
      />

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {products.map((p) => (
              <article key={p.name} className="group cursor-pointer">
                <div className={`aspect-[4/5] bg-gradient-to-br ${p.tone} border border-border overflow-hidden relative`}>
                  <div className="absolute inset-0 flex items-end p-6">
                    <p className="font-serif italic text-2xl text-foreground/60">{p.category}</p>
                  </div>
                </div>
                <div className="mt-5 flex items-start justify-between gap-4">
                  <div>
                    <p className="eyebrow">{p.category}</p>
                    <h3 className="mt-1 font-serif text-xl group-hover:text-primary transition-colors">{p.name}</h3>
                  </div>
                  <p className="font-serif text-xl">{p.price}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border/60 py-24 bg-secondary/30">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="eyebrow">Our Promise</p>
          <p className="mt-6 font-serif text-3xl leading-snug">
            Shipped in plain linen wrap. No logos, no loud branding. Just the object,
            arriving as if it had always been yours.
          </p>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
