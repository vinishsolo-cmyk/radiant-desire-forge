import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { PageHeader } from "@/components/site/PageHeader";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Velvet Desire" },
      { name: "description", content: "Why we built a quiet sanctuary for sensual rediscovery." },
    ],
  }),
  component: About,
});

const values = [
  { title: "Shame-free", body: "We assume you are an adult with appetites — not a problem to be solved." },
  { title: "Discreet", body: "Plain wrapping, soft language. Your privacy is the first product we ship." },
  { title: "Inclusive", body: "Every body, every orientation, every chapter of life is welcome here." },
  { title: "Slow", body: "We choose fewer words, fewer products, fewer notifications — on purpose." },
];

function About() {
  return (
    <main>
      <SiteNav />
      <PageHeader
        eyebrow="Our Story"
        title="A small house, built for the senses."
        subtitle="Velvet Desire began as a conversation between three friends about everything women were taught not to say."
      />

      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6 space-y-8 text-lg text-foreground/85 leading-relaxed font-serif">
          <p>
            We started writing letters to each other in 2024. About appetite. About the
            way certain books left us undone. About the fact that, somewhere along the
            way, our pleasure had become a chore on someone else's list.
          </p>
          <p>
            The letters became essays. The essays became readers. The readers became a
            quiet, warm room where women — and the partners who adore them — could
            speak plainly about what they wanted, and what they no longer had to pretend
            to want.
          </p>
          <p className="italic text-primary">
            This is that room, made into a website.
          </p>
        </div>
      </section>

      <section className="border-t border-border/60 py-24 bg-secondary/30">
        <div className="max-w-5xl mx-auto px-6">
          <p className="eyebrow text-center">What we believe</p>
          <h2 className="mt-4 text-center font-serif text-4xl md:text-5xl">Four quiet principles.</h2>
          <div className="mt-16 grid sm:grid-cols-2 gap-px bg-border">
            {values.map((v) => (
              <div key={v.title} className="bg-background p-10">
                <h3 className="font-serif text-2xl text-primary">{v.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
