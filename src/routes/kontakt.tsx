import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/kontakt")({
  component: Page,
  head: () => ({
    meta: [
      { title: "Kontakt — FinKorekt" },
      { name: "description", content: "Sme tu pre vás — neváhajte nás kontaktovať." },
    ],
  }),
});

const items = [
  { icon: MapPin, label: "Adresa", value: "[ADDRESS]" },
  { icon: Phone, label: "Telefón", value: "[PHONE]", href: "tel:[PHONE]" },
  { icon: Mail, label: "E-mail", value: "[EMAIL]", href: "mailto:[EMAIL]" },
  { icon: Clock, label: "Pracovné hodiny", value: "Po – Pia: 8:00 – 17:00" },
];

function Page() {
  return (
    <>
      <PageHero eyebrow="FinKorekt" title="Kontakt" subtitle="Sme tu pre vás — neváhajte nás kontaktovať." />

      <section className="py-28 bg-white">
        <div className="container-fk grid gap-12 lg:grid-cols-2">
          <div className="grid gap-5 sm:grid-cols-2 self-start">
            {items.map((it) => {
              const Icon = it.icon;
              const inner = (
                <>
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-bright/10 text-blue-bright">
                    <Icon size={20} />
                  </span>
                  <p className="mt-5 text-xs uppercase tracking-[0.18em] text-muted-foreground">{it.label}</p>
                  <p className="mt-2 text-lg text-navy-deep font-medium">{it.value}</p>
                </>
              );
              return it.href ? (
                <a key={it.label} href={it.href} className="bg-secondary rounded-3xl p-7 hover:shadow-lg transition-shadow">{inner}</a>
              ) : (
                <div key={it.label} className="bg-secondary rounded-3xl p-7">{inner}</div>
              );
            })}
          </div>

          <div className="bg-navy-deep text-white rounded-3xl p-10 flex flex-col justify-between min-h-[420px] relative overflow-hidden">
            <div className="absolute inset-0 opacity-15 bg-[radial-gradient(ellipse_at_bottom_right,oklch(0.65_0.18_255),transparent_60%)]" />
            <div className="relative">
              <p className="eyebrow text-blue-soft">FinKorekt</p>
              <h3 className="mt-4 font-serif text-3xl">partner of Respect Slovakia</h3>
              <p className="mt-4 text-white/70">Tešíme sa na osobné stretnutie alebo váš telefonát.</p>
            </div>
            <a
              href="https://www.google.com/maps"
              target="_blank"
              rel="noreferrer"
              className="relative inline-flex items-center gap-2 self-start mt-8 h-12 px-6 rounded-full bg-white/10 border border-white/20 text-sm font-medium hover:bg-white/15"
            >
              Open in Maps <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
