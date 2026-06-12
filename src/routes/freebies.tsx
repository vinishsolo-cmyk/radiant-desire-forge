import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  Search,
  Download,
  FileText,
  Film,
  Image as ImageIcon,
  Archive,
  X,
  BookOpen,
  Clock,
} from "lucide-react";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";

export const Route = createFileRoute("/freebies")({
  validateSearch: (s: Record<string, unknown>) => ({
    q: typeof s.q === "string" ? s.q : "",
    format: typeof s.format === "string" ? s.format : "",
    kink: typeof s.kink === "string" ? s.kink : "",
    level: typeof s.level === "string" ? s.level : "",
  }),
  head: () => ({
    meta: [
      { title: "Freebies Library — Velvet Desire" },
      {
        name: "description",
        content:
          "A small, quiet library of free guides, audio meditations, printable cards and short films — organised by kink and level.",
      },
    ],
  }),
  component: FreebiesLibrary,
});

/* ─────────── DATA ─────────── */

type FreebieFormat = "pdf" | "zip" | "video" | "image";
type FreebieLevel = "beginner" | "intermediate" | "advanced";

interface Freebie {
  slug: string;
  title: string;
  blurb: string;
  format: FreebieFormat;
  level: FreebieLevel;
  kinks: string[];
  pages?: number;
  duration?: string;
  size: string;
  thumb: string;
  file: string;
}

const KINKS = [
  "Bondage",
  "Chastity",
  "Sensory Play",
  "Role Play",
  "Aftercare",
  "Dirty Talk",
  "Hotwifing",
  "Edging",
  "Power Exchange",
  "Anal Play",
];

const LEVELS: FreebieLevel[] = ["beginner", "intermediate", "advanced"];

const FORMATS: { key: FreebieFormat; label: string; Icon: typeof FileText }[] = [
  { key: "pdf", label: "PDF", Icon: FileText },
  { key: "zip", label: "Zip", Icon: Archive },
  { key: "video", label: "Video", Icon: Film },
  { key: "image", label: "Image", Icon: ImageIcon },
];

const thumb = (n: number) => `/placeholders/freebies-library/lib${n}.jpg`;

const FREEBIES: Freebie[] = [
  {
    slug: "first-blindfold-ritual-card",
    title: "The First Blindfold — Ritual Card",
    blurb: "A printable one-page card to keep by the bed. Steps, breath cues, aftercare.",
    format: "pdf",
    level: "beginner",
    kinks: ["Sensory Play", "Aftercare"],
    pages: 1,
    size: "420 KB",
    thumb: thumb(1),
    file: "/placeholders/freebies-library/lib1.jpg",
  },
  {
    slug: "chastity-30-day-playbook",
    title: "The Beginner's Chastity Playbook",
    blurb: "A 30-day gentle starter plan with rituals, scripts and weekly check-ins.",
    format: "pdf",
    level: "intermediate",
    kinks: ["Chastity", "Power Exchange"],
    pages: 12,
    size: "1.8 MB",
    thumb: thumb(2),
    file: "/placeholders/freebies-library/lib2.jpg",
  },
  {
    slug: "awakening-meditation-her",
    title: "Awakening Meditation (Her)",
    blurb: "An 18-minute guided audio — for headphones, private rooms, slow evenings.",
    format: "video",
    level: "beginner",
    kinks: ["Sensory Play"],
    duration: "18:04",
    size: "26 MB",
    thumb: thumb(3),
    file: "/placeholders/freebies-library/lib3.jpg",
  },
  {
    slug: "dirty-talk-card-deck",
    title: "Dirty Talk Card Deck",
    blurb: "32 printable cards. Shuffle them. Pull one. Whisper it. See what happens.",
    format: "zip",
    level: "intermediate",
    kinks: ["Dirty Talk", "Role Play"],
    pages: 32,
    size: "4.2 MB",
    thumb: thumb(4),
    file: "/placeholders/freebies-library/lib4.jpg",
  },
  {
    slug: "desire-map-worksheet",
    title: "The Desire Map — Couple's Worksheet",
    blurb: "A gentle questionnaire to discover what each of you quietly wants to try.",
    format: "pdf",
    level: "beginner",
    kinks: ["Power Exchange", "Aftercare"],
    pages: 6,
    size: "780 KB",
    thumb: thumb(5),
    file: "/placeholders/freebies-library/lib5.jpg",
  },
  {
    slug: "rope-basics-pack",
    title: "Rope Basics — Image Pack",
    blurb: "Twelve high-res images of safe starter ties, with single-hand release diagrams.",
    format: "image",
    level: "beginner",
    kinks: ["Bondage", "Sensory Play"],
    pages: 12,
    size: "5.6 MB",
    thumb: thumb(6),
    file: "/placeholders/freebies-library/lib6.jpg",
  },
  {
    slug: "hotwife-conversation-kit",
    title: "The Hotwife Conversation Kit",
    blurb: "A zip of scripts, rule templates and aftercare prompts for the early talks.",
    format: "zip",
    level: "advanced",
    kinks: ["Hotwifing", "Power Exchange"],
    pages: 22,
    size: "3.1 MB",
    thumb: thumb(7),
    file: "/placeholders/freebies-library/lib7.jpg",
  },
  {
    slug: "edging-breath-film",
    title: "Edging — A Breath Practice Film",
    blurb: "A 9-minute soft film on slowing down, staying close, and not arriving yet.",
    format: "video",
    level: "advanced",
    kinks: ["Edging", "Sensory Play"],
    duration: "09:12",
    size: "42 MB",
    thumb: thumb(8),
    file: "/placeholders/freebies-library/lib8.jpg",
  },
  {
    slug: "aftercare-pocket-card",
    title: "Aftercare Pocket Card",
    blurb: "Wallet-sized printable. Water, blanket, low light, slow words.",
    format: "pdf",
    level: "beginner",
    kinks: ["Aftercare"],
    pages: 1,
    size: "190 KB",
    thumb: thumb(1),
    file: "/placeholders/freebies-library/lib1.jpg",
  },
  {
    slug: "anal-play-beginners-guide",
    title: "Anal Play — A Tender Beginner's Guide",
    blurb: "An honest, slow-paced guide. Hygiene, lube, breath, communication, aftercare.",
    format: "pdf",
    level: "intermediate",
    kinks: ["Anal Play", "Aftercare"],
    pages: 18,
    size: "2.3 MB",
    thumb: thumb(2),
    file: "/placeholders/freebies-library/lib2.jpg",
  },
  {
    slug: "role-play-starter-pack",
    title: "Role Play Starter Pack",
    blurb: "Six light scenarios, prop suggestions, and three sentences to break the ice.",
    format: "zip",
    level: "intermediate",
    kinks: ["Role Play", "Dirty Talk"],
    pages: 14,
    size: "2.9 MB",
    thumb: thumb(4),
    file: "/placeholders/freebies-library/lib4.jpg",
  },
  {
    slug: "her-pleasure-anatomy-sheet",
    title: "Her Pleasure — Anatomy Sheet",
    blurb: "A calm, beautifully drawn anatomy sheet. Print, fold, keep in the drawer.",
    format: "image",
    level: "beginner",
    kinks: ["Sensory Play"],
    pages: 1,
    size: "1.1 MB",
    thumb: thumb(5),
    file: "/placeholders/freebies-library/lib5.jpg",
  },
];

/* ─────────── PAGE ─────────── */

function FreebiesLibrary() {
  const search = Route.useSearch();
  const navigate = Route.useNavigate();
  const [q, setQ] = useState(search.q);

  const filtered = useMemo(() => {
    const query = search.q.toLowerCase().trim();
    return FREEBIES.filter((f) => {
      if (search.format && f.format !== search.format) return false;
      if (search.level && f.level !== search.level) return false;
      if (search.kink && !f.kinks.includes(search.kink)) return false;
      if (!query) return true;
      const hay = [f.title, f.blurb, f.format, f.level, f.kinks.join(" ")]
        .join(" ")
        .toLowerCase();
      return hay.includes(query);
    });
  }, [search]);

  const setSearch = (patch: Partial<typeof search>) =>
    navigate({ search: (p) => ({ ...p, ...patch }) });

  const active = !!(search.q || search.format || search.kink || search.level);

  return (
    <main>
      <SiteNav />

      {/* HEADER */}
      <section className="pt-32 pb-12 border-b border-border/60">
        <div className="max-w-6xl mx-auto px-6">
          <p className="eyebrow">The Free Library</p>
          <h1 className="mt-4 font-serif text-5xl md:text-6xl leading-[1.05] text-balance">
            A little shelf of <em className="italic text-primary">gifts</em>.
          </h1>
          <p className="mt-5 max-w-xl text-lg text-muted-foreground">
            Printable cards, audio films, image packs and zips — all free, all
            quiet, all yours. Browse like a book; filter when you know what you want.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSearch({ q });
            }}
            className="mt-8 flex items-center gap-2 max-w-xl border border-border bg-card px-4 py-3"
          >
            <Search size={16} className="text-muted-foreground shrink-0" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search the library — try 'blindfold', 'chastity', 'aftercare'…"
              className="flex-1 bg-transparent outline-none text-sm placeholder:text-muted-foreground/70"
            />
            {q && (
              <button
                type="button"
                onClick={() => {
                  setQ("");
                  setSearch({ q: "" });
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

      <section className="py-14">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-[16rem_1fr] gap-12">
          {/* SIDEBAR */}
          <aside className="lg:sticky lg:top-28 lg:self-start space-y-10">
            <div>
              <p className="eyebrow mb-4">Format</p>
              <ul className="space-y-1">
                {FORMATS.map(({ key, label, Icon }) => {
                  const on = search.format === key;
                  return (
                    <li key={key}>
                      <button
                        onClick={() => setSearch({ format: on ? "" : key })}
                        className={`w-full flex items-center gap-2 py-2 text-sm border-b border-border/60 transition-colors ${
                          on ? "text-primary font-medium" : "text-foreground/80 hover:text-primary"
                        }`}
                      >
                        <Icon size={14} />
                        {label}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div>
              <p className="eyebrow mb-4">Level</p>
              <div className="flex flex-wrap gap-1.5">
                {LEVELS.map((l) => {
                  const on = search.level === l;
                  return (
                    <button
                      key={l}
                      onClick={() => setSearch({ level: on ? "" : l })}
                      className={`text-[11px] uppercase tracking-[0.18em] px-2.5 py-1 border transition-colors ${
                        on
                          ? "bg-primary text-primary-foreground border-primary"
                          : "border-border text-muted-foreground hover:border-primary/60 hover:text-primary"
                      }`}
                    >
                      {l}
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <p className="eyebrow mb-4">Kink</p>
              <div className="flex flex-wrap gap-1.5">
                {KINKS.map((k) => {
                  const on = search.kink === k;
                  return (
                    <button
                      key={k}
                      onClick={() => setSearch({ kink: on ? "" : k })}
                      className={`text-[11px] uppercase tracking-[0.18em] px-2.5 py-1 border transition-colors ${
                        on
                          ? "bg-primary text-primary-foreground border-primary"
                          : "border-border text-muted-foreground hover:border-primary/60 hover:text-primary"
                      }`}
                    >
                      {k}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="p-5 bg-secondary/60 border border-border/60 text-sm leading-relaxed text-muted-foreground">
              <p className="eyebrow mb-2">A note</p>
              Every download is free and discreet — no email required. Save them
              somewhere private.
            </div>
          </aside>

          {/* MAIN — BOOK-STYLE SHELF */}
          <div>
            {active && (
              <div className="mb-8 flex flex-wrap items-center gap-2 text-xs">
                <span className="uppercase tracking-[0.2em] text-muted-foreground">Filters:</span>
                {search.q && <Chip label={`"${search.q}"`} onClear={() => { setQ(""); setSearch({ q: "" }); }} />}
                {search.format && <Chip label={search.format.toUpperCase()} onClear={() => setSearch({ format: "" })} />}
                {search.level && <Chip label={search.level} onClear={() => setSearch({ level: "" })} />}
                {search.kink && <Chip label={search.kink} onClear={() => setSearch({ kink: "" })} />}
                <button
                  onClick={() => { setQ(""); navigate({ search: () => ({ q: "", format: "", level: "", kink: "" }) }); }}
                  className="ml-2 underline text-muted-foreground hover:text-primary"
                >
                  clear all
                </button>
              </div>
            )}

            {filtered.length === 0 ? (
              <div className="border border-dashed border-border p-12 text-center">
                <p className="font-serif text-2xl">The shelf is quiet here.</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Try a different filter, or clear them all.
                </p>
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filtered.map((f) => (
                  <FreebieCard key={f.slug} f={f} />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

function FreebieCard({ f }: { f: Freebie }) {
  const FormatIcon = FORMATS.find((x) => x.key === f.format)!.Icon;
  return (
    <article className="group flex flex-col">
      {/* book-like thumbnail */}
      <div className="relative aspect-[3/4] overflow-hidden bg-secondary border border-border/60 shadow-[6px_6px_0_0_oklch(0.46_0.19_18/0.12)] group-hover:shadow-[10px_10px_0_0_oklch(0.46_0.19_18/0.18)] transition-shadow">
        <img
          src={f.thumb}
          alt={f.title}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
        {/* spine */}
        <span className="absolute inset-y-0 left-0 w-2 bg-foreground/20" />
        <span className="absolute top-3 left-5 text-[10px] uppercase tracking-[0.25em] bg-background/90 backdrop-blur px-2 py-1 text-foreground inline-flex items-center gap-1">
          <FormatIcon size={11} /> {f.format.toUpperCase()}
        </span>
        <span className="absolute bottom-3 right-3 text-[10px] uppercase tracking-[0.2em] bg-foreground/85 text-background px-2 py-1">
          {f.level}
        </span>
      </div>
      <div className="mt-5">
        <h3 className="font-serif text-xl leading-snug group-hover:text-primary transition-colors">
          {f.title}
        </h3>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.blurb}</p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {f.kinks.map((k) => (
            <span
              key={k}
              className="text-[10px] uppercase tracking-[0.18em] px-2 py-1 border border-border text-muted-foreground"
            >
              {k}
            </span>
          ))}
        </div>
        <div className="mt-4 flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
          {f.pages && (
            <span className="inline-flex items-center gap-1">
              <BookOpen size={11} /> {f.pages}p
            </span>
          )}
          {f.duration && (
            <span className="inline-flex items-center gap-1">
              <Clock size={11} /> {f.duration}
            </span>
          )}
          <span>·</span>
          <span>{f.size}</span>
        </div>
        <a
          href={f.file}
          download
          data-haptic="strong"
          className="mt-5 inline-flex items-center gap-2 px-4 py-2.5 bg-primary text-primary-foreground text-[11px] uppercase tracking-[0.25em] hover:bg-primary/90 transition-colors"
        >
          <Download size={13} /> Download {f.format}
        </a>
      </div>
    </article>
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
