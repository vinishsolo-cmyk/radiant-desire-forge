import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Instagram } from "lucide-react";
import { ArrowLeft, ArrowRight, Download, Share2, BookOpen, Heart, Sparkles } from "lucide-react";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { BLOG_POSTS, findPost, type BlogPost, type BlogSection } from "@/data/blog";

export const Route = createFileRoute("/blog/$slug")({
  head: ({ params }) => {
    const p = findPost(params.slug);
    return {
      meta: [
        { title: p ? `${p.title} — Velvet Desire` : "Story — Velvet Desire" },
        { name: "description", content: p?.excerpt ?? "A gentle essay." },
        ...(p ? [{ property: "og:image", content: p.cover }] : []),
      ],
    };
  },
  loader: ({ params }): BlogPost => {
    const p = findPost(params.slug);
    if (!p) throw notFound();
    return p;
  },
  notFoundComponent: () => (
    <main className="min-h-screen flex flex-col">
      <SiteNav />
      <div className="flex-1 flex items-center justify-center pt-32 pb-20 text-center px-6">
        <div>
          <p className="eyebrow">Not found</p>
          <h1 className="mt-4 font-serif text-4xl">This page slipped away.</h1>
          <Link to="/blog" className="mt-6 inline-flex items-center gap-2 text-primary">
            <ArrowLeft size={14} /> Back to the journal
          </Link>
        </div>
      </div>
      <SiteFooter />
    </main>
  ),
  component: BlogPostPage,
});

/* ------------ Section Layouts (rotating template) ------------ */

function SectionFullBleed({ s, idx }: { s: BlogSection; idx: number }) {
  return (
    <section className="soothe-in" style={{ animationDelay: `${idx * 60}ms` }}>
      {s.image && (
        <div className="aspect-[21/9] overflow-hidden bg-secondary">
          <img src={s.image} alt={s.heading ?? ""} loading="lazy" className="w-full h-full object-cover" />
        </div>
      )}
      <div className="max-w-2xl mx-auto mt-10 px-2">
        {s.heading && <h2 className="font-serif text-3xl md:text-4xl leading-tight">{s.heading}</h2>}
        <div className="mt-5 prose-soothe">
          {s.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
        </div>
      </div>
    </section>
  );
}

function SectionSideImage({ s, idx, flip }: { s: BlogSection; idx: number; flip?: boolean }) {
  return (
    <section
      className={`soothe-in grid md:grid-cols-12 gap-8 items-start ${flip ? "md:[&>div:first-child]:order-2" : ""}`}
      style={{ animationDelay: `${idx * 60}ms` }}
    >
      {s.image ? (
        <div className="md:col-span-5">
          <div className="aspect-[4/5] overflow-hidden bg-secondary">
            <img src={s.image} alt={s.heading ?? ""} loading="lazy" className="w-full h-full object-cover" />
          </div>
        </div>
      ) : null}
      <div className={s.image ? "md:col-span-7" : "md:col-span-12 max-w-2xl mx-auto"}>
        {s.heading && <h2 className="font-serif text-2xl md:text-3xl leading-tight">{s.heading}</h2>}
        <div className="mt-5 prose-soothe">
          {s.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
        </div>
      </div>
    </section>
  );
}

function SectionPullQuote({ s, idx }: { s: BlogSection; idx: number }) {
  const [first, ...rest] = s.paragraphs;
  return (
    <section className="soothe-in" style={{ animationDelay: `${idx * 60}ms` }}>
      {s.heading && (
        <h2 className="font-serif text-2xl md:text-3xl leading-tight max-w-2xl mx-auto">
          {s.heading}
        </h2>
      )}
      {s.image && (
        <div className="mt-6 aspect-[16/9] overflow-hidden bg-secondary max-w-4xl mx-auto">
          <img src={s.image} alt={s.heading ?? ""} loading="lazy" className="w-full h-full object-cover" />
        </div>
      )}
      <blockquote className="mt-8 border-l-2 border-primary pl-6 max-w-2xl mx-auto">
        <p className="font-serif italic text-2xl md:text-3xl leading-snug text-foreground/90">
          “{first}”
        </p>
      </blockquote>
      {rest.length > 0 && (
        <div className="mt-6 prose-soothe max-w-2xl mx-auto">
          {rest.map((p, i) => <p key={i}>{p}</p>)}
        </div>
      )}
    </section>
  );
}

function renderSection(s: BlogSection, idx: number) {
  // Rotate: 0 fullbleed, 1 side-right, 2 pullquote, 3 side-left
  const mod = idx % 4;
  if (!s.image) {
    return <SectionSideImage key={idx} s={s} idx={idx} />;
  }
  if (mod === 0) return <SectionFullBleed key={idx} s={s} idx={idx} />;
  if (mod === 1) return <SectionSideImage key={idx} s={s} idx={idx} />;
  if (mod === 2) return <SectionPullQuote key={idx} s={s} idx={idx} />;
  return <SectionSideImage key={idx} s={s} idx={idx} flip />;
}

/* --------------------- Page --------------------- */

function BlogPostPage() {
  const post: BlogPost = Route.useLoaderData();
  const related = BLOG_POSTS.filter(
    (p) => p.slug !== post.slug && (p.topic === post.topic || p.tags.some((t) => post.tags.includes(t))),
  ).slice(0, 3);

  const more = BLOG_POSTS.filter((p) => p.slug !== post.slug && !related.includes(p)).slice(0, 4);

  return (
    <main>
      <SiteNav />

      {/* HERO */}
      <article className="pt-32">
        <div className="max-w-3xl mx-auto px-6">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft size={14} /> The Journal
          </Link>
          <p className="eyebrow mt-8">{post.topic}</p>
          <h1 className="mt-4 font-serif text-4xl md:text-6xl leading-[1.05] text-balance">
            {post.title}<span className="text-primary">.</span>
          </h1>
          <p className="mt-5 text-xl text-muted-foreground italic font-serif max-w-2xl">
            {post.excerpt}
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4 text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
            <span>{post.author}</span>
            <span>·</span>
            <time>{new Date(post.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}</time>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>
        </div>

        <div className="mt-12 max-w-6xl mx-auto px-6">
          <div className="aspect-[16/8] overflow-hidden bg-secondary">
            <img src={post.cover} alt={post.title} className="w-full h-full object-cover" />
          </div>
        </div>

        {/* BODY — rotating layouts */}
        <div className="mt-20 max-w-5xl mx-auto px-6 space-y-24">
          {post.sections.map((s, i) => renderSection(s, i))}

          {post.download && (
            <aside className="border border-primary/40 bg-primary/5 p-8 md:p-10 flex flex-col sm:flex-row gap-6 items-start sm:items-center justify-between max-w-3xl mx-auto">
              <div>
                <p className="eyebrow text-primary">Free download</p>
                <p className="mt-2 font-serif text-2xl">{post.download.label}</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  A companion to this essay. Yours to keep.
                </p>
              </div>
              <a
                href={post.download.file}
                download
                className="inline-flex items-center gap-2 px-5 py-3 bg-primary text-primary-foreground text-[11px] uppercase tracking-[0.25em] hover:bg-primary/90 transition-colors"
              >
                <Download size={14} /> Download
              </a>
            </aside>
          )}

          {/* CLOSING NOTE */}
          <div className="max-w-2xl mx-auto text-center border-t border-border/60 pt-12">
            <Sparkles className="mx-auto text-primary" size={20} />
            <p className="mt-4 font-serif text-2xl italic text-foreground/80">
              Thank you for reading slowly.
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              If this essay moved something in you, leave it open in a tab and return to it tonight.
            </p>
          </div>

          {/* TAGS + SHARE */}
          <div className="max-w-3xl mx-auto border-t border-border/60 pt-8 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-1.5">
              {post.tags.map((t) => (
                <Link
                  key={t}
                  to="/blog"
                  search={{ q: "", topic: "", tag: t }}
                  className="text-[10px] uppercase tracking-[0.2em] px-2.5 py-1 border border-border text-muted-foreground hover:border-primary/60 hover:text-primary transition-colors"
                >
                  #{t}
                </Link>
              ))}
            </div>
            <button
              onClick={() => {
                if (navigator.share) {
                  navigator.share({ title: post.title, url: window.location.href }).catch(() => {});
                } else {
                  navigator.clipboard?.writeText(window.location.href);
                }
              }}
              className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-muted-foreground hover:text-primary"
            >
              <Share2 size={13} /> Share
            </button>
          </div>
        </div>
      </article>

      {/* RECOMMENDED — related posts */}
      {related.length > 0 && (
        <section className="mt-24 py-20 bg-secondary/40 border-t border-border/60">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-end justify-between gap-6 flex-wrap">
              <div>
                <p className="eyebrow">Recommended for you</p>
                <h2 className="mt-3 font-serif text-3xl md:text-4xl">If this stayed with you</h2>
              </div>
              <Link to="/blog" className="text-[11px] uppercase tracking-[0.25em] text-primary inline-flex items-center gap-2">
                All essays <ArrowRight size={14} />
              </Link>
            </div>
            <div className="mt-10 grid md:grid-cols-3 gap-8">
              {related.map((p) => (
                <Link key={p.slug} to="/blog/$slug" params={{ slug: p.slug }} className="group block">
                  <div className="aspect-[4/3] overflow-hidden bg-secondary">
                    <img src={p.cover} alt={p.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
                  </div>
                  <p className="eyebrow mt-4">{p.topic}</p>
                  <h3 className="mt-2 font-serif text-xl group-hover:text-primary transition-colors">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{p.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CONTINUE — curated links across the site */}
      <section className="py-20 border-t border-border/60">
        <div className="max-w-6xl mx-auto px-6">
          <p className="eyebrow">Continue your exploration</p>
          <h2 className="mt-3 font-serif text-3xl md:text-4xl">Where to wander next</h2>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            <Link to="/kinks-explorer" className="group block p-8 border border-border hover:border-primary/60 transition-colors">
              <BookOpen className="text-primary" size={22} />
              <h3 className="mt-4 font-serif text-2xl group-hover:text-primary transition-colors">Kinks Explorer</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                A library of curiosities, gently described. Browse the Top 15 or wander the A–Z.
              </p>
              <span className="mt-4 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-primary">
                Open the library <ArrowRight size={14} />
              </span>
            </Link>
            <Link to="/freebies" className="group block p-8 border border-border hover:border-primary/60 transition-colors">
              <Download className="text-primary" size={22} />
              <h3 className="mt-4 font-serif text-2xl group-hover:text-primary transition-colors">Freebies Library</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Ritual cards, worksheets, audio meditations and zip bundles. Yours to keep.
              </p>
              <span className="mt-4 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-primary">
                Browse downloads <ArrowRight size={14} />
              </span>
            </Link>
            <Link to="/blog" className="group block p-8 border border-border hover:border-primary/60 transition-colors">
              <Heart className="text-primary" size={22} />
              <h3 className="mt-4 font-serif text-2xl group-hover:text-primary transition-colors">The Journal</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                More slow essays, late-night confessions, and small letters on intimacy.
              </p>
              <span className="mt-4 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-primary">
                All stories <ArrowRight size={14} />
              </span>
            </Link>
          </div>

          {/* MORE FROM JOURNAL */}
          {more.length > 0 && (
            <div className="mt-16">
              <div className="flex items-center justify-between">
                <h3 className="font-serif text-2xl">More from the journal</h3>
                <Link to="/blog" className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground hover:text-primary">
                  See all
                </Link>
              </div>
              <ul className="mt-6 divide-y divide-border/60 border-t border-b border-border/60">
                {more.map((p) => (
                  <li key={p.slug}>
                    <Link
                      to="/blog/$slug"
                      params={{ slug: p.slug }}
                      className="group grid grid-cols-[80px_1fr_auto] md:grid-cols-[120px_1fr_auto] gap-5 items-center py-5"
                    >
                      <div className="aspect-square overflow-hidden bg-secondary">
                        <img src={p.cover} alt={p.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.05]" />
                      </div>
                      <div className="min-w-0">
                        <p className="eyebrow">{p.topic}</p>
                        <p className="mt-1 font-serif text-lg md:text-xl group-hover:text-primary transition-colors truncate">{p.title}</p>
                        <p className="hidden md:block mt-1 text-sm text-muted-foreground line-clamp-1">{p.excerpt}</p>
                      </div>
                      <ArrowRight size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      {/* INSTAGRAM FEED */}
      <section className="py-20 border-t border-border/60">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <div>
              <p className="eyebrow inline-flex items-center gap-2">
                <Instagram size={14} className="text-primary" /> @velvet.desire
              </p>
              <h2 className="mt-3 font-serif text-3xl md:text-4xl">New in the feed</h2>
              <p className="mt-2 text-muted-foreground max-w-md">
                Small visual letters, posted between essays. Follow along for the quiet things.
              </p>
            </div>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] uppercase tracking-[0.25em] px-5 py-2.5 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors inline-flex items-center gap-2"
            >
              <Instagram size={14} /> Follow
            </a>
          </div>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-3">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <a
                key={n}
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-square overflow-hidden bg-secondary block"
              >
                <img
                  src={`/placeholders/instagram/insta${n}.jpg`}
                  alt={`Instagram post ${n}`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.08]"
                />
                <div className="absolute inset-0 bg-background/0 group-hover:bg-background/60 transition-colors duration-500 flex items-center justify-center">
                  <Instagram size={22} className="text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
