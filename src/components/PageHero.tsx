export function PageHero({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return (
    <section className="relative pt-40 pb-24 md:pt-52 md:pb-32 bg-navy-deep text-white overflow-hidden">
      <div className="absolute inset-0 opacity-12 bg-[radial-gradient(ellipse_at_top_right,oklch(0.55_0.17_255),transparent_60%)]" />

      {/* Right-side opaque overlay that fades to transparent by ~50% */}
      <div
        className="absolute inset-y-0 right-0 w-1/2 pointer-events-none"
        style={{
          background: 'linear-gradient(to left, rgba(3,105,161,0.96) 0%, rgba(3,105,161,0.88) 30%, rgba(255,255,255,0.18) 60%, rgba(255,255,255,0) 100%)',
          mixBlendMode: 'overlay',
        }}
      />

      {/* Subtle white texture near the blue gradient for a luxurious feel */}
      <div
        className="absolute inset-y-0 right-1/4 w-1/4 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 10% 20%, rgba(255,255,255,0.36) 0, rgba(255,255,255,0) 35%), radial-gradient(circle at 75% 60%, rgba(255,255,255,0.22) 0, rgba(255,255,255,0) 40%)',
          mixBlendMode: 'overlay',
          opacity: 0.95,
        }}
      />
      <div className="container-fk relative animate-fade-up">
        <p className="eyebrow text-blue-soft">{eyebrow}</p>
        <h1 className="mt-6 font-serif text-5xl md:text-7xl text-white">{title}</h1>
        {subtitle && <p className="mt-6 max-w-2xl text-lg text-white/75">{subtitle}</p>}
      </div>
    </section>
  );
}
