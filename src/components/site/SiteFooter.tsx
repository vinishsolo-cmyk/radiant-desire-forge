import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60">
      <div className="max-w-6xl mx-auto px-6 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="font-serif text-2xl">Velvet Desire<span className="text-primary">.</span></p>
          <p className="mt-3 max-w-sm text-sm text-muted-foreground leading-relaxed">
            A quiet sanctuary for women and couples — shame-free, discreet, and
            made for rediscovering pleasure with intention.
          </p>
        </div>
        <div>
          <p className="eyebrow mb-4">Explore</p>
          <ul className="space-y-2 text-sm">
            <li><a href="/#her-desires" className="hover:text-primary">Her Desires</a></li>
            <li><a href="/#couple-play" className="hover:text-primary">Couple Play</a></li>
            <li><a href="/#chastity" className="hover:text-primary">Chastity &amp; Control</a></li>
            <li><Link to="/kinks-explorer" className="hover:text-primary">Kinks Explorer</Link></li>
            <li><a href="/#games" className="hover:text-primary">Games for Couples</a></li>
          </ul>
        </div>
        <div>
          <p className="eyebrow mb-4">House</p>
          <ul className="space-y-2 text-sm">
            <li><a href="/#resources" className="hover:text-primary">Resources &amp; Freebies</a></li>
            <li><a href="/#blog" className="hover:text-primary">Blog / Stories</a></li>
            <li><a href="/#about" className="hover:text-primary">About Us</a></li>
            <li><a href="/#contact" className="hover:text-primary">Contact / Consultations</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Velvet Desire. Made with intention.</p>
          <p className="uppercase tracking-[0.3em]">Discreet · Inclusive · 18+</p>
        </div>
      </div>
    </footer>
  );
}
