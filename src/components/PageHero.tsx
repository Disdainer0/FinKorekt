export function PageHero({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return (
    <section className="relative pt-40 pb-24 md:pt-52 md:pb-32 bg-navy-deep text-white overflow-hidden">
      <div className="container-fk relative animate-fade-up">
        <p className="eyebrow text-blue-soft">{eyebrow}</p>
        <h1 className="mt-6 font-serif text-5xl md:text-7xl text-white">{title}</h1>
        {subtitle && <p className="mt-6 max-w-2xl text-lg text-white/75">{subtitle}</p>}
      </div>
    </section>
  );
}
