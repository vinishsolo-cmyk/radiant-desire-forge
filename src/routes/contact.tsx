import { createFileRoute } from "@tanstack/react-router";
import { Mail, MessageCircle, Lock } from "lucide-react";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { PageHeader } from "@/components/site/PageHeader";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Velvet Desire" },
      { name: "description", content: "Write to us. Quietly, plainly, in your own words." },
    ],
  }),
  component: Contact,
});

const channels = [
  { icon: Mail, label: "Letters", value: "hello@velvetdesire.co", note: "We reply within two days, with care." },
  { icon: MessageCircle, label: "Whispers", value: "Anonymous form below", note: "For confessions, questions, ideas." },
  { icon: Lock, label: "Press & Partnerships", value: "press@velvetdesire.co", note: "Considered collaborations only." },
];

function Contact() {
  return (
    <main>
      <SiteNav />
      <PageHeader
        eyebrow="Write to Us"
        title="Tell us, quietly, what you need."
        subtitle="A question, a confession, a request for a candle that hasn't been made yet. We read every letter."
      />

      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-3 gap-px bg-border">
          {channels.map(({ icon: Icon, label, value, note }) => (
            <div key={label} className="bg-background p-8">
              <Icon size={22} className="text-primary" strokeWidth={1.2} />
              <p className="eyebrow mt-5">{label}</p>
              <p className="mt-2 font-serif text-xl">{value}</p>
              <p className="mt-2 text-sm text-muted-foreground">{note}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-border/60 py-20 bg-secondary/30">
        <div className="max-w-2xl mx-auto px-6">
          <p className="eyebrow text-center">A quiet form</p>
          <h2 className="mt-4 text-center font-serif text-4xl">Say it however you'd like.</h2>
          <form className="mt-12 space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="eyebrow">Name (or a pseudonym)</label>
                <input
                  type="text"
                  className="mt-2 w-full bg-transparent border-b border-border py-3 focus:outline-none focus:border-primary"
                  placeholder="Anonymous is welcome"
                />
              </div>
              <div>
                <label className="eyebrow">Email</label>
                <input
                  type="email"
                  className="mt-2 w-full bg-transparent border-b border-border py-3 focus:outline-none focus:border-primary"
                  placeholder="optional"
                />
              </div>
            </div>
            <div>
              <label className="eyebrow">Your letter</label>
              <textarea
                rows={6}
                className="mt-2 w-full bg-transparent border border-border p-4 focus:outline-none focus:border-primary resize-none"
                placeholder="Take your time. There's no wrong way."
              />
            </div>
            <div className="pt-2">
              <button
                type="submit"
                className="bg-primary text-primary-foreground px-8 py-4 text-[11px] uppercase tracking-[0.25em] hover:bg-primary/90"
              >
                Send Letter
              </button>
            </div>
          </form>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
