export function PageHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="pt-36 pb-20 border-b border-border/60">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-6 font-serif text-5xl md:text-7xl leading-[1.05] text-balance">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
