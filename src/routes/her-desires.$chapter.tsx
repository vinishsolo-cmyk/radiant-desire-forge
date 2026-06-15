import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Download, Sparkles, BookOpen, Heart, Share2 } from "lucide-react";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { HER_CHAPTERS, findChapter, type HerChapter } from "@/data/her-desires";

export const Route = createFileRoute("/her-desires/$chapter")({
  head: ({ params }) => {
    const c = findChapter(params.chapter);
    return {
      meta: [
        { title: c ? `${c.eyebrow} — Her Desires` : "Her Desires" },
        { name: "description", content: c?.intro ?? "A chapter in Her Desires." },
        ...(c ? [{ property: "og:image", content: c.image }] : []),
      ],
    };
  },
  loader: ({ params }): HerChapter => {
    const c = findChapter(params.chapter);
    if (!c) throw notFound();
    return c;
  },
  notFoundComponent: () => (
    <main className="min-h-screen flex flex-col">
      <SiteNav />
      <div className="flex-1 flex items-center justify-center pt-32 pb-20 text-center px-6">
        <div>
          <p className="eyebrow">Not found</p>
          <h1 className="mt-4 font-serif text-4xl">This chapter slipped away.</h1>
          <Link to="/her-desires" className="mt-6 inline-flex items-center gap-2 text-primary">
            <ArrowLeft size={14} /> Back to Her Desires
          </Link>
        </div>
      </div>
      <SiteFooter />
    </main>
  ),
  component: ChapterPage,
});

function ChapterPage() {
  const c: HerChapter = Route.useLoaderData();
  const Icon = c.icon;
  const others = HER_CHAPTERS.filter((x) => x.id !== c.id).slice(0, 3);
  const idx = HER_CHAPTERS.findIndex((x) => x.id === c.id);
  const prev = idx > 0 ? HER_CHAPTERS[idx - 1] : null;
  const next = idx < HER_CHAPTERS.length - 1 ? HER_CHAPTERS[idx + 1] : null;

  return (
    <main>
      <SiteNav />

      {/* HERO */}
      <article className="pt-32">
        <div className="max-w-3xl mx-auto px-6">
          <Link
            to="/her-desires"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft size={14} /> Her Desires
          </Link>
          <div className="mt-8 flex items-center gap-3">
            <Icon size={22} className="text-primary" strokeWidth={1.2} />
            <p className="eyebrow">{c.eyebrow}</p>
          </div>
          <h1 className="mt-4 font-serif text-4xl md:text-6xl leading-[1.05] text-balance">
            {c.title.replace(/\.$/, "")}<span className="text-primary">.</span>
          </h1>
          <p className="mt-5 text-xl text-muted-foreground italic font-serif max-w-2xl">{c.intro}</p>
          <div className="mt-6 flex flex-wrap items-center gap-4 text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
            <span>Chapter {String(idx + 1).padStart(2, "0")}</span>
            <span>·</span>
            <span>{c.topics.length} essays</span>
            <span>·</span>
            <span>{c.readTime}</span>
          </div>
        </div>

        <div className="mt-12 max-w-6xl mx-auto px-6">
          <div className="aspect-[16/8] overflow-hidden bg-secondary">
            <img src={c.image} alt={c.eyebrow} className="w-full h-full object-cover" />
          </div>
        </div>

        {/* DOWNLOAD CTA */}
        {c.download && (
          <div className="mt-16 max-w-3xl mx-auto px-6">
            <aside className="border border-primary/40 bg-primary/5 p-8 md:p-10 flex flex-col sm:flex-row gap-6 items-start sm:items-center justify-between">
              <div>
                <p className="eyebrow text-primary">Free companion</p>
                <p className="mt-2 font-serif text-2xl">{c.download.label}</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Print it, fold it, keep it on your bedside table.
                </p>
              </div>
              <a
                href={c.download.file}
                download
                className="inline-flex items-center gap-2 px-5 py-3 bg-primary text-primary-foreground text-[11px] uppercase tracking-[0.25em] hover:bg-primary/90 transition-colors"
              >
                <Download size={14} /> Download
              </a>
            </aside>
          </div>
        )}

        {/* TOPICS as sections */}
        <div className="mt-20 max-w-5xl mx-auto px-6 space-y-24">
          {c.topics.map((topic, i) => {
            const flip = i % 2 === 1;
            const image = topic.image ?? c.image;
            return (
              <section
                key={topic.slug}
                id={topic.slug}
                className="soothe-in grid md:grid-cols-12 gap-10 items-start"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <div className={`md:col-span-5 ${flip ? "md:order-2" : ""}`}>
                  <div className="aspect-[4/5] overflow-hidden bg-secondary">
                    <img
                      src={image}
                      alt={topic.title}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="md:col-span-7">
                  <p className="eyebrow">
                    Essay {String(i + 1).padStart(2, "0")} · {c.eyebrow}
                  </p>
                  <h2 className="mt-3 font-serif text-3xl md:text-4xl leading-tight">
                    {topic.title}
                  </h2>
                  <p className="mt-5 font-serif italic text-xl text-foreground/80">{topic.body}</p>
                  {topic.longform && (
                    <div className="mt-6 prose-soothe">
                      {topic.longform.map((p, j) => (
                        <p key={j}>{p}</p>
                      ))}
                    </div>
                  )}
                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link
                      to="/blog"
                      search={{ q: topic.title, topic: "", tag: "" }}
                      className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-primary hover:underline"
                    >
                      Find related essays <ArrowRight size={12} />
                    </Link>
                  </div>
                </div>
              </section>
            );
          })}

          {/* CLOSING NOTE */}
          <div className="max-w-2xl mx-auto text-center border-t border-border/60 pt-12">
            <Sparkles className="mx-auto text-primary" size={20} />
            <p className="mt-4 font-serif text-2xl italic text-foreground/80">
              End of chapter {String(idx + 1).padStart(2, "0")}.
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Sit with what stayed. The next chapter will be here when you're ready.
            </p>
          </div>

          {/* SHARE */}
          <div className="max-w-3xl mx-auto border-t border-border/60 pt-8 flex flex-wrap items-center justify-between gap-4">
            <Link
              to="/her-desires"
              className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-muted-foreground hover:text-primary"
            >
              <ArrowLeft size={13} /> All chapters
            </Link>
            <button
              onClick={() => {
                if (typeof navigator !== "undefined" && navigator.share) {
                  navigator.share({ title: c.eyebrow, url: window.location.href }).catch(() => {});
                } else if (typeof navigator !== "undefined") {
                  navigator.clipboard?.writeText(window.location.href);
                }
              }}
              className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-muted-foreground hover:text-primary"
            >
              <Share2 size={13} /> Share chapter
            </button>
          </div>
        </div>
      </article>

      {/* PREV / NEXT */}
      <section className="mt-24 py-16 border-t border-border/60 bg-secondary/40">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-6">
          {prev ? (
            <Link
              to="/her-desires/$chapter"
              params={{ chapter: prev.id }}
              className="group block p-8 border border-border bg-background hover:border-primary/60 transition-colors"
            >
              <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground inline-flex items-center gap-2">
                <ArrowLeft size={12} /> Previous chapter
              </p>
              <h3 className="mt-3 font-serif text-2xl group-hover:text-primary transition-colors">
                {prev.title}
              </h3>
              <p className="mt-2 eyebrow">{prev.eyebrow}</p>
            </Link>
          ) : <div />}
          {next ? (
            <Link
              to="/her-desires/$chapter"
              params={{ chapter: next.id }}
              className="group block p-8 border border-border bg-background hover:border-primary/60 transition-colors md:text-right"
            >
              <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground inline-flex items-center gap-2 md:justify-end md:w-full">
                Next chapter <ArrowRight size={12} />
              </p>
              <h3 className="mt-3 font-serif text-2xl group-hover:text-primary transition-colors">
                {next.title}
              </h3>
              <p className="mt-2 eyebrow">{next.eyebrow}</p>
            </Link>
          ) : <div />}
        </div>
      </section>

      {/* OTHER CHAPTERS */}
      <section className="py-20 border-t border-border/60">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <div>
              <p className="eyebrow">Keep wandering</p>
              <h2 className="mt-3 font-serif text-3xl md:text-4xl">Other chapters of her desire</h2>
            </div>
            <Link to="/her-desires" className="text-[11px] uppercase tracking-[0.25em] text-primary inline-flex items-center gap-2">
              All chapters <ArrowRight size={14} />
            </Link>
          </div>
          <div className="mt-10 grid md:grid-cols-3 gap-8">
            {others.map((o) => (
              <Link
                key={o.id}
                to="/her-desires/$chapter"
                params={{ chapter: o.id }}
                className="group block"
              >
                <div className="aspect-[4/3] overflow-hidden bg-secondary">
                  <img
                    src={o.image}
                    alt={o.eyebrow}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                </div>
                <p className="eyebrow mt-4">{o.eyebrow}</p>
                <h3 className="mt-2 font-serif text-xl group-hover:text-primary transition-colors">
                  {o.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{o.intro}</p>
              </Link>
            ))}
          </div>

          <div className="mt-16 grid md:grid-cols-2 gap-6">
            <Link to="/blog" className="group block p-8 border border-border hover:border-primary/60 transition-colors">
              <BookOpen className="text-primary" size={22} />
              <h3 className="mt-4 font-serif text-2xl group-hover:text-primary transition-colors">The Journal</h3>
              <p className="mt-2 text-sm text-muted-foreground">Slow essays and late-night confessions.</p>
            </Link>
            <Link to="/freebies" className="group block p-8 border border-border hover:border-primary/60 transition-colors">
              <Heart className="text-primary" size={22} />
              <h3 className="mt-4 font-serif text-2xl group-hover:text-primary transition-colors">Freebies Library</h3>
              <p className="mt-2 text-sm text-muted-foreground">Companion worksheets, audio, and zip bundles.</p>
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
