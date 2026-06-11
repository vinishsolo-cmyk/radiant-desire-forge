import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Download, Share2 } from "lucide-react";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { BLOG_POSTS, findPost, type BlogPost } from "@/data/blog";

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

function BlogPostPage() {
  const post: BlogPost = Route.useLoaderData();
  const related = BLOG_POSTS.filter(
    (p) => p.slug !== post.slug && (p.topic === post.topic || p.tags.some((t) => post.tags.includes(t))),
  ).slice(0, 3);

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
          <h1 className="mt-4 font-serif text-4xl md:text-5xl leading-[1.1] text-balance">
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

        <div className="mt-12 max-w-5xl mx-auto px-6">
          <div className="aspect-[16/9] overflow-hidden bg-secondary">
            <img src={post.cover} alt={post.title} className="w-full h-full object-cover" />
          </div>
        </div>

        {/* BODY */}
        <div className="mt-16 max-w-3xl mx-auto px-6 space-y-14">
          {post.sections.map((s, i) => (
            <section key={i}>
              {s.heading && (
                <h2 className="font-serif text-2xl md:text-3xl leading-tight">
                  {s.heading}
                </h2>
              )}
              {s.image && (
                <div className="mt-6 aspect-[16/9] overflow-hidden bg-secondary">
                  <img src={s.image} alt={s.heading ?? post.title} loading="lazy" className="w-full h-full object-cover" />
                </div>
              )}
              <div className="mt-6 space-y-5 text-[17px] leading-[1.8] text-foreground/85">
                {s.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </section>
          ))}

          {post.download && (
            <aside className="mt-16 border border-primary/40 bg-primary/5 p-8 flex flex-col sm:flex-row gap-6 items-start sm:items-center justify-between">
              <div>
                <p className="eyebrow text-primary">Free download</p>
                <p className="mt-2 font-serif text-xl">{post.download.label}</p>
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

          {/* TAGS + SHARE */}
          <div className="mt-14 border-t border-border/60 pt-8 flex flex-wrap items-center justify-between gap-4">
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

      {/* RELATED */}
      {related.length > 0 && (
        <section className="mt-24 py-16 bg-secondary/40 border-t border-border/60">
          <div className="max-w-6xl mx-auto px-6">
            <p className="eyebrow">Read next</p>
            <h2 className="mt-3 font-serif text-3xl md:text-4xl">More from the journal</h2>
            <div className="mt-10 grid md:grid-cols-3 gap-8">
              {related.map((p) => (
                <Link key={p.slug} to="/blog/$slug" params={{ slug: p.slug }} className="group block">
                  <div className="aspect-[4/3] overflow-hidden bg-secondary">
                    <img src={p.cover} alt={p.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
                  </div>
                  <p className="eyebrow mt-4">{p.topic}</p>
                  <h3 className="mt-2 font-serif text-xl group-hover:text-primary transition-colors">{p.title}</h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <SiteFooter />
    </main>
  );
}
