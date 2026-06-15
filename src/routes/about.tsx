import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Heart, MessageCircle, Lock, Sparkles, Mail, Quote } from "lucide-react";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Velvet Desire" },
      {
        name: "description",
        content:
          "Who is Velvet Desire — the couple behind the sanctuary, our story, and how we help couples through free chat advice and consultations.",
      },
      { property: "og:title", content: "About — Velvet Desire" },
      {
        property: "og:description",
        content:
          "The couple behind Velvet Desire, our story, and how we help — free chat advice for couples, with paid consultations currently paused.",
      },
      { property: "og:image", content: "/placeholders/about/about2.jpg" },
    ],
  }),
  component: AboutPage,
});

const VALUES = [
  { icon: Heart, title: "Devotion to her", body: "Every letter, ritual and essay begins with the woman — her body, her boredom, her quiet ache for more." },
  { icon: Lock, title: "Privacy as ritual", body: "What you share with us stays between the candle and the closed door. Always discreet, never tracked." },
  { icon: Sparkles, title: "Slow and shame-free", body: "We don't sell tricks. We invite tenderness, curiosity, and a softer language for what you already want." },
];

const TIMELINE = [
  { year: "2019", title: "A long conversation in a dark kitchen", body: "We were a married couple in our seventh year, in love and quietly bored. The conversation that started that night became this entire library." },
  { year: "2021", title: "Letters to friends", body: "Other couples started asking. We began writing private letters — on chastity, on aftercare, on saying yes again. The letters became essays." },
  { year: "2023", title: "The sanctuary opens", body: "Velvet Desire became a place: a slow journal, a kink library, downloadable rituals, and a small inbox for couples who needed someone to listen." },
  { year: "Today", title: "Free chat advice, paused consultations", body: "Anyone can write to us. Paid consultations are paused while we rebuild the calendar — we'll reopen quietly here when we're ready." },
];

function AboutPage() {
  return (
    <main>
      <SiteNav />

      {/* HERO */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url(/placeholders/about/about2.jpg)" }}
        />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/85 to-background" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <p className="eyebrow">About Velvet Desire</p>
          <h1 className="mt-5 font-serif text-4xl md:text-6xl leading-[1.05] text-balance">
            We are a couple<span className="text-primary">.</span> <br className="hidden md:block" />
            And this is the sanctuary we built for couples like ours.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground italic font-serif max-w-2xl mx-auto">
            A slow, shame-free place for women and partners to rediscover desire — written by people
            who needed exactly this, and could not find it.
          </p>
        </div>
      </section>

      {/* WHO */}
      <section className="py-20 border-t border-border/60">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-5">
            <div className="aspect-[4/5] overflow-hidden bg-secondary">
              <img
                src="/placeholders/about/about1.jpg"
                alt="Velvet Desire — the sanctuary"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="md:col-span-7">
            <p className="eyebrow">Who is Velvet Desire</p>
            <h2 className="mt-4 font-serif text-3xl md:text-4xl leading-tight">
              Not a brand. A sanctuary, kept by a couple.
            </h2>
            <div className="mt-6 space-y-5 text-foreground/85 leading-relaxed">
              <p>
                Velvet Desire is a library of essays, rituals, kink guides, and late-night letters,
                written for women who want more than routine and couples who refuse to call the
                bedroom <em>fine</em>.
              </p>
              <p>
                We don't sell shortcuts. We don't shout. We write the kind of things you'd save in a
                private folder and re-read at 2 a.m. — and we keep building the small, calm tools
                that helped us first.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COUPLE STORY */}
      <section className="py-20 bg-secondary/40 border-y border-border/60">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-7 order-2 md:order-1">
            <p className="eyebrow">The couple behind it</p>
            <h2 className="mt-4 font-serif text-3xl md:text-4xl leading-tight">
              Meera & Arjun. Married eleven years. Still curious.
            </h2>
            <div className="mt-6 space-y-5 text-foreground/85 leading-relaxed">
              <p>
                We met in our twenties, married quickly, and spent our first years doing every
                sensible thing — careers, a mortgage, a polite bedroom. Then one quiet winter we
                admitted to each other that <em>polite</em> was costing us.
              </p>
              <p>
                What followed was years of reading, fumbling, asking, laughing, and slowly
                discovering a language for desire that neither of us was raised with. Meera writes
                most of the essays. Arjun keeps the structure, the kink guides, and the inbox.
              </p>
              <p>
                Everything here is something we tried first, on each other, on an ordinary
                Tuesday.
              </p>
            </div>
          </div>
          <div className="md:col-span-5 order-1 md:order-2">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src="/placeholders/about/about2.jpg"
                alt="Meera and Arjun, the couple behind Velvet Desire"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <p className="eyebrow">Our quiet timeline</p>
          <h2 className="mt-3 font-serif text-3xl md:text-4xl">How the sanctuary was built</h2>
          <ol className="mt-12 space-y-10">
            {TIMELINE.map((t, i) => (
              <li key={i} className="grid grid-cols-[80px_1fr] md:grid-cols-[140px_1fr] gap-6 items-start border-t border-border/60 pt-8 first:border-0 first:pt-0">
                <div className="font-serif text-2xl md:text-3xl text-primary">{t.year}</div>
                <div>
                  <h3 className="font-serif text-xl md:text-2xl">{t.title}</h3>
                  <p className="mt-2 text-muted-foreground leading-relaxed">{t.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-20 border-t border-border/60">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto">
            <p className="eyebrow">What we hold close</p>
            <h2 className="mt-3 font-serif text-3xl md:text-4xl">Three things we will not compromise</h2>
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {VALUES.map((v) => (
              <div key={v.title} className="p-8 border border-border hover:border-primary/60 transition-colors bg-background/40">
                <v.icon className="text-primary" size={22} />
                <h3 className="mt-5 font-serif text-2xl">{v.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PULL QUOTE */}
      <section className="py-20 relative overflow-hidden border-y border-border/60">
        <div
          aria-hidden
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url(/placeholders/about/about5.jpg)" }}
        />
        <div aria-hidden className="absolute inset-0 bg-background/70" />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <Quote className="mx-auto text-primary" size={28} />
          <blockquote className="mt-6 font-serif italic text-2xl md:text-4xl leading-snug text-foreground/90">
            “We didn't fix our marriage. We learned to <span className="text-primary">listen</span> to it.
            Velvet Desire is the notebook we kept along the way.”
          </blockquote>
          <p className="mt-6 text-[11px] uppercase tracking-[0.3em] text-muted-foreground">— Meera</p>
        </div>
      </section>

      {/* HOW WE HELP — CONSULT */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl">
            <p className="eyebrow">How we help</p>
            <h2 className="mt-3 font-serif text-3xl md:text-4xl">Couple advice & consultations</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              You can talk to us. Most couples just write a paragraph — a stuck place, a fantasy
              they can't say out loud, a question about safety, aftercare, or starting over. We
              read everything ourselves.
            </p>
          </div>

          <div className="mt-10 grid md:grid-cols-2 gap-6">
            {/* FREE CHAT */}
            <div className="relative p-8 md:p-10 border border-primary/60 bg-primary/5 overflow-hidden">
              <span className="absolute top-5 right-5 text-[10px] uppercase tracking-[0.25em] text-primary border border-primary/60 px-2 py-1">
                Free
              </span>
              <MessageCircle className="text-primary" size={22} />
              <h3 className="mt-5 font-serif text-2xl">Chat with us, on the house</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                Open inbox for couples. One thoughtful reply, usually within a few days. No forms,
                no fees, no judgment — just two people who've sat where you're sitting.
              </p>
              <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
                <li>· Questions about a kink you're curious about</li>
                <li>· Stuck conversations and dead-bedroom moments</li>
                <li>· Aftercare, safety, and starting gently</li>
              </ul>
              <a
                href="/#contact"
                data-haptic="strong"
                className="mt-8 inline-flex items-center gap-2 px-5 py-3 bg-primary text-primary-foreground text-[11px] uppercase tracking-[0.25em] hover:bg-primary/90 transition-colors"
              >
                <Mail size={14} /> Write to us
              </a>
            </div>

            {/* PAID CONSULT — PAUSED */}
            <div className="relative p-8 md:p-10 border border-border bg-background/40 overflow-hidden">
              <span className="absolute top-5 right-5 text-[10px] uppercase tracking-[0.25em] text-muted-foreground border border-border px-2 py-1">
                Paused
              </span>
              <Sparkles className="text-muted-foreground" size={22} />
              <h3 className="mt-5 font-serif text-2xl text-foreground/80">Paid 1:1 consultations</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                Longer, scheduled sessions for couples who want a deeper plan — kink onboarding,
                chastity rituals, rebuilding intimacy over months. We've paused new bookings while
                we rebuild the calendar.
              </p>
              <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
                <li>· 60 or 90-minute private video sessions</li>
                <li>· Custom rituals and follow-up letters</li>
                <li>· Reopens here first, quietly</li>
              </ul>
              <button
                disabled
                className="mt-8 inline-flex items-center gap-2 px-5 py-3 border border-border text-muted-foreground text-[11px] uppercase tracking-[0.25em] cursor-not-allowed"
              >
                Waitlist opens soon
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CREATIVE — A DAY AT VELVET DESIRE */}
      <section className="py-20 bg-secondary/40 border-y border-border/60">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <p className="eyebrow">A day in our studio</p>
            <h2 className="mt-3 font-serif text-3xl md:text-4xl">Slow mornings, candle-lit edits</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We write where we live. Coffee first, then the inbox, then the long edit. Most
              essays here were drafted in pencil, then read aloud to each other before they were
              published.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
              <div className="border border-border p-4">
                <p className="font-serif text-2xl text-primary">11y</p>
                <p className="text-muted-foreground mt-1">Together</p>
              </div>
              <div className="border border-border p-4">
                <p className="font-serif text-2xl text-primary">200+</p>
                <p className="text-muted-foreground mt-1">Letters answered</p>
              </div>
              <div className="border border-border p-4">
                <p className="font-serif text-2xl text-primary">60+</p>
                <p className="text-muted-foreground mt-1">Long essays</p>
              </div>
              <div className="border border-border p-4">
                <p className="font-serif text-2xl text-primary">0</p>
                <p className="text-muted-foreground mt-1">Ads, ever</p>
              </div>
            </div>
          </div>
          <div className="md:col-span-7 grid grid-cols-2 gap-3">
            <div className="aspect-[4/5] overflow-hidden">
              <img src="/placeholders/about/about4.jpg" alt="" loading="lazy" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-[4/5] overflow-hidden mt-10">
              <img src="/placeholders/about/about3.jpg" alt="" loading="lazy" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-[4/5] overflow-hidden -mt-6">
              <img src="/placeholders/about/about6.jpg" alt="" loading="lazy" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-[4/5] overflow-hidden mt-4">
              <img src="/placeholders/about/about1.jpg" alt="" loading="lazy" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* WHERE NEXT */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="eyebrow">Where to wander next</p>
          <h2 className="mt-3 font-serif text-3xl md:text-4xl">Step inside the sanctuary</h2>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            <Link to="/her-desires" className="group p-8 border border-border hover:border-primary/60 transition-colors block">
              <Heart className="text-primary" size={22} />
              <h3 className="mt-4 font-serif text-2xl group-hover:text-primary transition-colors">Her Desires</h3>
              <p className="mt-2 text-sm text-muted-foreground">Pleasure, awakening, freedom after 40.</p>
              <span className="mt-4 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-primary">
                Enter <ArrowRight size={14} />
              </span>
            </Link>
            <Link to="/blog" className="group p-8 border border-border hover:border-primary/60 transition-colors block">
              <Sparkles className="text-primary" size={22} />
              <h3 className="mt-4 font-serif text-2xl group-hover:text-primary transition-colors">The Journal</h3>
              <p className="mt-2 text-sm text-muted-foreground">Slow essays, confessions, late-night letters.</p>
              <span className="mt-4 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-primary">
                Read <ArrowRight size={14} />
              </span>
            </Link>
            <Link to="/freebies" className="group p-8 border border-border hover:border-primary/60 transition-colors block">
              <Lock className="text-primary" size={22} />
              <h3 className="mt-4 font-serif text-2xl group-hover:text-primary transition-colors">Freebies Library</h3>
              <p className="mt-2 text-sm text-muted-foreground">Rituals, worksheets, and audio. Yours to keep.</p>
              <span className="mt-4 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-primary">
                Open <ArrowRight size={14} />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
