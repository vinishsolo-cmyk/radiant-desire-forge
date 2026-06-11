import { Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Search } from "lucide-react";

const NAV = [
  { label: "Home", href: "/" },
  { label: "Her Desires", href: "/#her-desires" },
  { label: "Couple Play", href: "/#couple-play" },
  { label: "Chastity & Control", href: "/#chastity" },
  { label: "Kinks Explorer", href: "/kinks-explorer" },
  { label: "Games for Couples", href: "/#games" },
  { label: "Resources & Freebies", href: "/#resources" },
  { label: "Blog / Stories", href: "/blog" },
  { label: "About Us", href: "/#about" },
  { label: "Contact / Consultations", href: "/#contact" },
];

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [q, setQ] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const submitSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const query = q.trim();
    navigate({ to: "/blog", search: { q: query, topic: "", tag: "" } });
    setSearchOpen(false);
    setOpen(false);
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border/60"
          : "bg-background/60 backdrop-blur-sm"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 md:h-20 flex items-center justify-between">
        <Link to="/" className="font-serif text-xl md:text-2xl tracking-wide">
          Velvet Desire<span className="text-primary">.</span>
        </Link>

        <ul className="hidden xl:flex items-center gap-7 text-[12px] tracking-wide">
          {NAV.slice(1, 9).map((item) =>
            item.href.startsWith("/#") ? (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ) : (
              <li key={item.href}>
                <Link
                  to={item.href}
                  className="text-muted-foreground hover:text-primary transition-colors"
                  activeProps={{ className: "text-primary" }}
                >
                  {item.label}
                </Link>
              </li>
            )
          )}
        </ul>

        <div className="hidden xl:flex items-center gap-3">
          <button
            aria-label="Search"
            onClick={() => setSearchOpen((v) => !v)}
            className="p-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <Search size={16} />
          </button>
          <a
            href="/#contact"
            className="inline-flex items-center text-[11px] uppercase tracking-[0.25em] px-5 py-2.5 border border-primary/60 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-500"
          >
            Consult
          </a>
        </div>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="xl:hidden p-2 -mr-2"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <div
        className={`xl:hidden overflow-hidden transition-all duration-500 bg-background/95 backdrop-blur-xl border-t border-border/40 ${
          open ? "max-h-[80vh]" : "max-h-0"
        }`}
      >
        <ul className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-1">
          {NAV.map((item) => (
            <li key={item.href}>
              {item.href.startsWith("/#") ? (
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 font-serif text-base text-foreground/85 hover:text-primary border-b border-border/30 transition-colors"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  to={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 font-serif text-base text-foreground/85 hover:text-primary border-b border-border/30 transition-colors"
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
