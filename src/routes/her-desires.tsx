import { createFileRoute, Link } from "@tanstack/react-router";
import { Sparkles, ArrowRight, Download } from "lucide-react";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { HER_CHAPTERS as CATEGORIES } from "@/data/her-desires";

export const Route = createFileRoute("/her-desires")({
  head: () => ({
    meta: [
      { title: "Her Desires — Velvet Desire" },
      { name: "description", content: "For women who want more than routine. A dedicated library of essays on pleasure, hidden desires, feminine power, and a life that feels alive." },
      { property: "og:title", content: "Her Desires — Velvet Desire" },
      { property: "og:description", content: "A dedicated library for women who want more than good enough." },
      { property: "og:image", content: "/placeholders/her-desires/hero.jpg" },
    ],
  }),
  component: HerDesires,
});


function HerDesires() {
  return (
    <main>
      <SiteNav />

      {/* HERO */}
      <section className="relative pt-36 pb-24 border-b border-border/60 overflow-hidden">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: "url(/placeholders/her-desires/hero.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background" aria-hidden />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <p className="eyebrow inline-flex items-center gap-2">
            <Sparkles size={12} /> Her Desires
          </p>
          <h1 className="mt-6 font-serif text-5xl md:text-7xl leading-[1.05] text-balance">
            For women who want <em className="italic text-primary">more than</em> routine.
          </h1>
          <p className="mt-8 max-w-2xl mx-auto text-lg text-muted-foreground leading-relaxed">
            More than survival. More than &ldquo;good enough.&rdquo; A dedicated library of essays,
            confessions and gentle frameworks for the woman who is finally ready to want — out loud,
            on her own terms.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3 text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
            <span>Shame-free</span>
            <span className="opacity-40">·</span>
            <span>Female-first</span>
            <span className="opacity-40">·</span>
            <span>Adults only</span>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            <a
              href="#chapters"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 text-[12px] uppercase tracking-[0.25em] hover:bg-primary/90 transition-colors"
            >
              Explore the chapters <ArrowRight size={14} />
            </a>
            <Link
              to="/freebies"
              className="inline-flex items-center gap-2 border border-primary/60 text-primary px-6 py-3 text-[12px] uppercase tracking-[0.25em] hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Free downloads
            </Link>
          </div>
        </div>
      </section>

      {/* CHAPTER INDEX */}
      <section id="chapters" className="py-24 border-b border-border/60">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto">
            <p className="eyebrow">Ten chapters · fifty essays</p>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl">
              The <em className="italic text-primary">map</em> of her desire.
            </h2>
            <p className="mt-6 text-muted-foreground">
              Jump to any room in the house. Nothing here judges you for where you start.
            </p>
          </div>
          <ul className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {CATEGORIES.map((c, i) => (
              <li key={c.id} className="bg-background">
                <a
                  href={`#${c.id}`}
                  className="group block p-6 h-full hover:bg-primary/5 transition-colors"
                >
                  <div className="flex items-start justify-between gap-3">
                    <span className="text-2xl" aria-hidden>{c.emoji}</span>
                    <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground/70">
                      0{i + 1}
                    </span>
                  </div>
                  <p className="mt-4 eyebrow">{c.eyebrow}</p>
                  <h3 className="mt-2 font-serif text-xl leading-snug group-hover:text-primary transition-colors">
                    {c.title}
                  </h3>
                  <span className="mt-4 inline-flex items-center gap-1 text-[11px] uppercase tracking-[0.25em] text-primary">
                    Read chapter <ArrowRight size={12} />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CHAPTERS */}
      {CATEGORIES.map((c, i) => {
        const Icon = c.icon;
        const flip = i % 2 === 1;
        return (
          <section
            key={c.id}
            id={c.id}
            className={`py-24 border-b border-border/60 ${i % 2 === 1 ? "bg-card/30" : ""}`}
          >
            <div className="max-w-6xl mx-auto px-6">
              <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${flip ? "lg:[&>*:first-child]:order-2" : ""}`}>
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={c.image}
                    alt={c.eyebrow}
                    loading="lazy"
                    width={1024}
                    height={1280}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 bg-background/85 backdrop-blur-sm px-3 py-1.5 text-[10px] uppercase tracking-[0.3em]">
                    Chapter 0{i + 1}
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-3">
                    <Icon size={22} className="text-primary" strokeWidth={1.2} />
                    <p className="eyebrow">{c.eyebrow}</p>
                  </div>
                  <h2 className="mt-4 font-serif text-3xl md:text-5xl leading-[1.1]">
                    {c.title}
                  </h2>
                  <p className="mt-6 text-muted-foreground text-lg leading-relaxed">{c.intro}</p>

                  <ul className="mt-10 space-y-px bg-border/60">
                    {c.topics.map((t, j) => (
                      <li key={t.title} className="bg-background">
                        <div className="group flex items-start gap-5 p-5 hover:bg-primary/5 transition-colors">
                          <span className="font-serif italic text-primary text-lg shrink-0 w-8">
                            {String(j + 1).padStart(2, "0")}
                          </span>
                          <div className="flex-1">
                            <h3 className="font-serif text-lg leading-snug">{t.title}</h3>
                            <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{t.body}</p>
                          </div>
                          <Link
                            to="/blog"
                            search={{ q: t.title, topic: "", tag: "" }}
                            className="shrink-0 mt-1 text-[10px] uppercase tracking-[0.25em] text-primary opacity-0 group-hover:opacity-100 transition-opacity inline-flex items-center gap-1"
                          >
                            Read <ArrowRight size={11} />
                          </Link>
                        </div>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <Link
                      to="/blog"
                      search={{ q: c.eyebrow, topic: "", tag: "" }}
                      className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 text-[11px] uppercase tracking-[0.25em] hover:bg-primary/90 transition-colors"
                    >
                      Read all essays <ArrowRight size={13} />
                    </Link>
                    <Link
                      to="/freebies"
                      className="inline-flex items-center gap-2 border border-border px-5 py-2.5 text-[11px] uppercase tracking-[0.25em] text-foreground hover:border-primary hover:text-primary transition-colors"
                    >
                      Companion freebies
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* CLOSING */}
      <section className="py-28">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <Sparkles className="text-primary mx-auto" size={22} strokeWidth={1.2} />
          <h2 className="mt-6 font-serif text-4xl md:text-5xl leading-tight">
            You were never supposed to settle for <em className="italic text-primary">good enough.</em>
          </h2>
          <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
            Bookmark this page. Come back in your own time. There is no exam at the end of any of it —
            only a quieter, fuller, more honest version of you, slowly arriving.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 text-[12px] uppercase tracking-[0.25em] hover:bg-primary/90 transition-colors"
            >
              Visit the journal <ArrowRight size={14} />
            </Link>
            <Link
              to="/kinks-explorer"
              className="inline-flex items-center gap-2 border border-primary/60 text-primary px-6 py-3 text-[12px] uppercase tracking-[0.25em] hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Explore the kinks library
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
