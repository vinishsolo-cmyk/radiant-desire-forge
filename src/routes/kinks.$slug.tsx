import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowLeft, ChevronRight } from "lucide-react";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { azKinks, kinkDetails, type KinkDetail } from "@/data/kinks";

export const Route = createFileRoute("/kinks/$slug")({
  head: ({ params }) => {
    const detail = kinkDetails[params.slug];
    const title = detail ? `${detail.title} — Velvet Desire` : "Velvet Desire";
    return {
      meta: [
        { title },
        { name: "description", content: detail?.subtitle ?? "A gentle, shame-free guide." },
      ],
    };
  },
  loader: ({ params }): KinkDetail => {
    const detail = kinkDetails[params.slug] ?? buildFallback(params.slug);
    if (!detail) throw notFound();
    return detail;
  },
  notFoundComponent: () => (
    <main className="min-h-screen flex flex-col">
      <SiteNav />
      <div className="flex-1 flex items-center justify-center px-6 pt-32 pb-20 text-center">
        <div>
          <p className="eyebrow">Not found</p>
          <h1 className="mt-4 font-serif text-4xl">We couldn't find that kink.</h1>
          <Link to="/kinks-explorer" className="mt-8 inline-flex items-center gap-2 text-primary">
            <ArrowLeft size={14} /> Back to the library
          </Link>
        </div>
      </div>
      <SiteFooter />
    </main>
  ),
  component: KinkDetailPage,
});

function buildFallback(slug: string): KinkDetail | null {
  for (const group of azKinks) {
    const item = group.items.find((i) => i.slug === slug);
    if (!item) continue;
    return {
      slug: item.slug,
      title: item.title,
      subtitle: item.subtitle,
      intro: item.excerpt,
      hero: item.image,
      chapters: [
        { id: "introduction", title: "Introduction" },
        { id: "psychology", title: "Why It Resonates" },
        { id: "starting", title: "Starting Gently" },
        { id: "communication", title: "Communication" },
        { id: "aftercare", title: "Aftercare" },
      ],
      sections: [
        { id: "introduction", title: "Introduction", image: item.image, paragraphs: [item.excerpt, "This is a placeholder guide. Replace these paragraphs with your own writing to build a full, rich page like the Bondage example."] },
        { id: "psychology", title: "Why It Resonates", image: item.image, paragraphs: ["Why does this particular practice draw so many curious adults? A few notes on the emotional and psychological pull.", "Replace this section with your own perspective."] },
        { id: "starting", title: "Starting Gently", image: item.image, paragraphs: ["The first time should always be the smallest version of the thing. A whisper, not a shout.", "Add your own beginner steps here."] },
        { id: "communication", title: "Communication", image: item.image, paragraphs: ["Agree on words before you begin. Traffic-light system works for almost everyone.", "Customise this section to the practice."] },
        { id: "aftercare", title: "Aftercare", image: item.image, paragraphs: ["A glass of water, a blanket, soft touch, low light. The nervous system needs a gentle landing.", "Write the closing ritual that fits this kink."] },
      ],
    };
  }
  return null;
}

function KinkDetailPage() {
  const detail: KinkDetail = Route.useLoaderData();
  const [activeId, setActiveId] = useState(detail.chapters[0]?.id ?? "");

  useEffect(() => {
    const sections = detail.chapters
      .map((c) => document.getElementById(c.id))
      .filter((el): el is HTMLElement => !!el);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (visible) setActiveId(visible.target.id);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: 0.01 },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [detail]);

  return (
    <main>
      <SiteNav />

      {/* HERO */}
      <section className="pt-32 pb-16 border-b border-border/60">
        <div className="max-w-6xl mx-auto px-6">
          <Link
            to="/kinks-explorer"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft size={14} /> Kinks Explorer
          </Link>
          <div className="mt-8 grid lg:grid-cols-[1.1fr_1fr] gap-12 items-center">
            <div>
              <p className="eyebrow">A guide</p>
              <h1 className="mt-4 font-serif text-5xl md:text-6xl leading-[1.05] text-balance">
                {detail.title}<span className="text-primary">.</span>
              </h1>
              <p className="mt-5 font-serif italic text-2xl text-primary/80">{detail.subtitle}</p>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl">{detail.intro}</p>
            </div>
            <div className="aspect-[4/3] overflow-hidden bg-secondary">
              <img src={detail.hero} alt={detail.title} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* BODY w/ SIDEBAR */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-[16rem_1fr] gap-12">
          {/* Sidebar */}
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <p className="eyebrow mb-5">Chapters</p>
            <nav>
              <ul className="space-y-1 border-l border-border">
                {detail.chapters.map((c) => {
                  const active = c.id === activeId;
                  return (
                    <li key={c.id}>
                      <a
                        href={`#${c.id}`}
                        className={`flex items-center justify-between gap-2 pl-4 pr-2 py-2 -ml-px border-l text-sm transition-colors ${
                          active
                            ? "border-primary text-primary font-medium"
                            : "border-transparent text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        <span>{c.title}</span>
                        {active && <ChevronRight size={14} />}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>
            <div className="mt-10 p-5 bg-secondary/60 border border-border/60 text-sm leading-relaxed text-muted-foreground">
              <p className="eyebrow mb-2">A reminder</p>
              Read at your own pace. Everything here is between consenting adults. Curiosity is not a flaw.
            </div>
          </aside>

          {/* Content */}
          <article className="space-y-20">
            {detail.sections.map((s, i) => (
              <section key={s.id} id={s.id} className="scroll-mt-28">
                <p className="eyebrow">Chapter {String(i + 1).padStart(2, "0")}</p>
                <h2 className="mt-2 font-serif text-3xl md:text-4xl leading-tight">{s.title}</h2>
                {s.image && (
                  <div className="mt-6 aspect-[16/9] overflow-hidden bg-secondary">
                    <img src={s.image} alt={s.title} loading="lazy" className="w-full h-full object-cover" />
                  </div>
                )}
                <div className="mt-6 space-y-5 text-[17px] leading-[1.75] text-foreground/80">
                  {s.paragraphs.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>
              </section>
            ))}

            <div className="border-t border-border/60 pt-10 flex items-center justify-between">
              <Link
                to="/kinks-explorer"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-muted-foreground hover:text-primary"
              >
                <ArrowLeft size={14} /> Back to the library
              </Link>
              <a href={`#${detail.chapters[0]?.id}`} className="text-xs uppercase tracking-[0.25em] text-primary">
                Back to top
              </a>
            </div>
          </article>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
