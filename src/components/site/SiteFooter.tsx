import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 mt-32">
      <div className="max-w-6xl mx-auto px-6 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="font-serif text-2xl">Velvet · Desire</p>
          <p className="mt-3 max-w-sm text-sm text-muted-foreground leading-relaxed">
            A quiet sanctuary for sensual rediscovery. Shame-free, discreet, and made
            for women who want to feel everything again.
          </p>
        </div>
        <div>
          <p className="eyebrow mb-4">Explore</p>
          <ul className="space-y-2 text-sm">
            <li><Link to="/kinks-explorer" className="hover:text-primary">Kinks Atlas</Link></li>
            <li><Link to="/journal" className="hover:text-primary">Journal</Link></li>
            <li><Link to="/shop" className="hover:text-primary">Shop</Link></li>
          </ul>
        </div>
        <div>
          <p className="eyebrow mb-4">House</p>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-primary">About</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
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
