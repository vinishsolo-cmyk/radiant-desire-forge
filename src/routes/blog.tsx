import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search, Download, ArrowRight, X } from "lucide-react";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { BLOG_POSTS, BLOG_TOPICS, BLOG_TAGS } from "@/data/blog";

export const Route = createFileRoute("/blog")({
  validateSearch: (s: Record<string, unknown>) => ({
    q: typeof s.q === "string" ? s.q : "",
    topic: typeof s.topic === "string" ? s.topic : "",
    tag: typeof s.tag === "string" ? s.tag : "",
  }),
  head: () => ({
    meta: [
      { title: "Blog & Stories — Velvet Desire" },
      {
        name: "description",
        content:
          "Essays, confessions, and gentle guides on desire, intimacy, kink, and care. Search by topic or tag.",
      },
    ],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  const search = Route.useSearch();
  const navigate = Route.useNavigate();
  const [q, setQ] = useState(search.q);

  const filtered = useMemo(() => {
    const query = (search.q || "").toLowerCase().trim();
    return BLOG_POSTS.filter((p) => {
      if (search.topic && p.topic !== search.topic) return false;
      if (search.tag && !p.tags.includes(search.tag)) return false;
      if (!query) return true;
      const hay = [p.title, p.excerpt, p.topic, p.tags.join(" "), p.author]
        .join(" ")
        .toLowerCase();
      return hay.includes(query);
    });
  }, [search]);

  const [featured, ...rest] = filtered;
  const activeFilters = !!(search.q || search.topic || search.tag);

  return (
    <main>
      <SiteNav />

      {/* HEADER */}
      <section className="pt-32 pb-12 border-b border-border/60">
        <div className="max-w-6xl mx-auto px-6">
          <p className="eyebrow">The Journal</p>
          <h1 className="mt-4 font-serif text-5xl md:text-6xl leading-[1.05] text-balance">
            Blog &amp; Stories<span className="text-primary">.</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg text-muted-foreground">
            Slow essays, late-night confessions, and tender guides. Search the
            archive, or wander by topic and tag.
          </p>

          {/* SEARCH */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              navigate({ search: (p) => ({ ...p, q }) });
            }}
            className="mt-8 flex items-center gap-2 max-w-xl border border-border bg-card px-4 py-3"
          >
            <Search size={16} className="text-muted-foreground shrink-0" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search the journal — try 'edging', 'aftercare', 'first time'…"
              className="flex-1 bg-transparent outline-none text-sm placeholder:text-muted-foreground/70"
            />
            {q && (
              <button
                type="button"
                onClick={() => {
                  setQ("");
                  navigate({ search: (p) => ({ ...p, q: "" }) });
                }}
                aria-label="Clear"
                className="text-muted-foreground hover:text-primary"
              >
                <X size={14} />
              </button>
            )}
            <button
              type="submit"
              className="text-[11px] uppercase tracking-[0.25em] px-3 py-1.5 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Search
            </button>
          </form>
        </div>
      </section>

      {/* LAYOUT */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-[1fr_16rem] gap-12">
          {/* MAIN */}
          <div>
            {activeFilters && (
              <div className="mb-8 flex flex-wrap items-center gap-2 text-xs">
                <span className="uppercase tracking-[0.2em] text-muted-foreground">
                  Filters:
                </span>
                {search.q && (
                  <Chip
                    label={`“${search.q}”`}
                    onClear={() => {
                      setQ("");
                      navigate({ search: (p) => ({ ...p, q: "" }) });
                    }}
                  />
                )}
                {search.topic && (
                  <Chip
                    label={search.topic}
                    onClear={() => navigate({ search: (p) => ({ ...p, topic: "" }) })}
                  />
                )}
                {search.tag && (
                  <Chip
                    label={`#${search.tag}`}
                    onClear={() => navigate({ search: (p) => ({ ...p, tag: "" }) })}
                  />
                )}
                <button
                  onClick={() => {
                    setQ("");
                    navigate({ search: () => ({ q: "", topic: "", tag: "" }) });
                  }}
                  className="ml-2 underline text-muted-foreground hover:text-primary"
                >
                  clear all
                </button>
              </div>
            )}

            {filtered.length === 0 && (
              <div className="border border-dashed border-border p-10 text-center">
                <p className="font-serif text-2xl">Nothing here yet.</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Try a softer word, or clear your filters.
                </p>
              </div>
            )}

            {featured && (
              <Link
                to="/blog/$slug"
                params={{ slug: featured.slug }}
                className="group block border border-border bg-card overflow-hidden hover:border-primary/60 transition-colors"
              >
                <div className="aspect-[16/9] overflow-hidden bg-secondary">
                  <img
                    src={featured.cover}
                    alt={featured.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="p-8">
                  <p className="eyebrow">Featured · {featured.topic}</p>
                  <h2 className="mt-3 font-serif text-3xl md:text-4xl leading-tight group-hover:text-primary transition-colors">
                    {featured.title}
                  </h2>
                  <p className="mt-4 text-muted-foreground max-w-2xl">
                    {featured.excerpt}
                  </p>
                  <p className="mt-5 text-xs uppercase tracking-[0.25em] text-muted-foreground">
                    {featured.author} · {featured.readTime}
                  </p>
                </div>
              </Link>
            )}

            <div className="mt-12 grid sm:grid-cols-2 gap-8">
              {rest.map((p) => (
                <Link
                  key={p.slug}
                  to="/blog/$slug"
                  params={{ slug: p.slug }}
                  className="group block"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-secondary">
                    <img
                      src={p.cover}
                      alt={p.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                  </div>
                  <p className="eyebrow mt-4">{p.topic}</p>
                  <h3 className="mt-2 font-serif text-2xl leading-tight group-hover:text-primary transition-colors">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                    {p.excerpt}
                  </p>
                  <div className="mt-3 flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                    <span>{p.readTime}</span>
                    <span>·</span>
                    <span>{p.author}</span>
                    {p.download && (
                      <>
                        <span>·</span>
                        <span className="inline-flex items-center gap-1 text-primary">
                          <Download size={11} /> PDF
                        </span>
                      </>
                    )}
                  </div>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {p.tags.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        className="text-[10px] uppercase tracking-[0.18em] px-2 py-1 border border-border text-muted-foreground"
                      >
                        #{t}
                      </span>
                    ))}
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* SIDEBAR */}
          <aside className="lg:sticky lg:top-28 lg:self-start space-y-10">
            <div>
              <p className="eyebrow mb-4">Topics</p>
              <ul className="space-y-1">
                {BLOG_TOPICS.map((t) => {
                  const active = search.topic === t;
                  return (
                    <li key={t}>
                      <button
                        onClick={() =>
                          navigate({
                            search: (p) => ({ ...p, topic: active ? "" : t }),
                          })
                        }
                        className={`w-full text-left flex items-center justify-between py-2 text-sm border-b border-border/60 transition-colors ${
                          active ? "text-primary font-medium" : "text-foreground/80 hover:text-primary"
                        }`}
                      >
                        <span>{t}</span>
                        <ArrowRight size={12} className="opacity-60" />
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div>
              <p className="eyebrow mb-4">Tags</p>
              <div className="flex flex-wrap gap-1.5">
                {BLOG_TAGS.map((t) => {
                  const active = search.tag === t;
                  return (
                    <button
                      key={t}
                      onClick={() =>
                        navigate({
                          search: (p) => ({ ...p, tag: active ? "" : t }),
                        })
                      }
                      className={`text-[11px] uppercase tracking-[0.18em] px-2.5 py-1 border transition-colors ${
                        active
                          ? "bg-primary text-primary-foreground border-primary"
                          : "border-border text-muted-foreground hover:border-primary/60 hover:text-primary"
                      }`}
                    >
                      #{t}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="p-5 bg-secondary/60 border border-border/60 text-sm leading-relaxed text-muted-foreground">
              <p className="eyebrow mb-2">A note</p>
              Every story here is from a consenting adult. Names are changed,
              hearts are not.
            </div>
          </aside>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

function Chip({ label, onClear }: { label: string; onClear: () => void }) {
  return (
    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 border border-primary/60 text-primary text-[11px] uppercase tracking-[0.18em]">
      {label}
      <button onClick={onClear} aria-label="Remove filter">
        <X size={11} />
      </button>
    </span>
  );
}
