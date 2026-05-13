import { partners } from "@/lib/site-data";

export function PartnerMarquee() {
  const items = [...partners, ...partners, ...partners];
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container-fk text-center">
        <p className="eyebrow text-blue-bright justify-center mx-auto">s poprednými poisťovňami</p>
        <h2 className="mt-4 text-4xl md:text-5xl font-serif text-navy-deep">Spolupracujeme</h2>
      </div>
      <div className="mt-16 relative">
        <div className="flex gap-20 animate-marquee w-max">
          {items.map((p, i) => (
            <a key={i} href={p.url} target="_blank" rel="noreferrer" className="shrink-0 grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all">
              <img src={p.logo} alt={p.name} className="h-10 w-auto object-contain" loading="lazy" />
            </a>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent" />
      </div>
    </section>
  );
}
