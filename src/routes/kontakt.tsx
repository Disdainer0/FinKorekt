import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { useI18n, usePageMeta } from "@/lib/i18n";
import RespectLogo from "@/IMG/RespectLogo.svg";
import LongLogo from "@/IMG/LongLogo.svg";
import { contact } from "@/lib/site-data";

export const Route = createFileRoute("/kontakt")({
  component: Page,
});

function Page() {
  const { t } = useI18n();
  usePageMeta("contact.hero.title", "contact.hero.subtitle");
  const items = [
    { icon: MapPin, label: t("contact.address"), value: contact.address.split('\n') },
    { icon: Phone, label: t("contact.phone"), value: contact.phone, href: `tel:${contact.phone.replace(/\s+/g, "")}` },
    { icon: Mail, label: t("contact.email"), value: contact.email, href: `mailto:${contact.email}` },
    { icon: Clock, label: t("contact.hours"), value: t("contact.hours.value") },
  ];
  return (
    <>
      <PageHero eyebrow={t("contact.hero.eyebrow")} title={t("contact.hero.title")} subtitle={t("contact.hero.subtitle")} />

      <section className="py-28 bg-white relative overflow-hidden">
        <div className="absolute -top-32 left-0 w-96 h-96 rounded-full bg-blue-bright/5 blur-3xl" />
        <div className="container-fk grid gap-12 lg:grid-cols-2 relative z-10">
          <div className="grid gap-5 sm:grid-cols-2 self-start">
            {items.map((it, idx) => {
              const Icon = it.icon;
              const inner = (
                <>
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-bright/10 text-blue-bright">
                    <Icon size={20} />
                  </span>
                  <p className="mt-5 text-xs uppercase tracking-[0.18em] text-muted-foreground">{it.label}</p>
                  <p className="mt-2 text-lg text-navy-deep font-medium">
                    {Array.isArray(it.value) ? it.value.map((l, i) => <span key={i}>{l}<br /></span>) : it.value}
                  </p>
                </>
              );
              const className = "rounded-3xl p-7 hover:shadow-lg transition-all duration-300 glow-on-hover animate-fade-up opacity-0";
              const style = { animationDelay: `${0.1 + idx * 0.1}s`, animationFillMode: 'forwards', animation: 'fadeUp 0.6s ease-out forwards' };
              return it.href ? (
                <a key={it.label} href={it.href} className={`bg-secondary ${className}`} style={style}>{inner}</a>
              ) : (
                <div key={it.label} className={`bg-secondary ${className}`} style={style}>{inner}</div>
              );
            })}
          </div>

          <div className="bg-navy-deep text-white rounded-3xl p-10 flex flex-col justify-between min-h-[420px] relative overflow-hidden shadow-2xl glow-on-hover animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <div className="absolute inset-0 opacity-15 bg-[radial-gradient(ellipse_at_bottom_right,oklch(0.65_0.18_255),transparent_60%)]" />
            <div className="relative">
              <img src={LongLogo} alt="FinKorekt" className="h-7 w-auto object-contain" />
              <div className="mt-6 flex items-center gap-2">
                <span className="text-sm text-white/75">Partner of</span>
                <img src={RespectLogo} alt="Respect" className="h-5 w-auto object-contain" />
              </div>
              <p className="mt-6 text-white/70">
                {contact.address.split('\n').map((l, i) => (
                  <span key={i}>{l}<br /></span>
                ))}
              </p>

              <div className="mt-4 rounded-md overflow-hidden relative" style={{ paddingBottom: '100%', height: 0 }}>
                <iframe
                  src={`https://www.google.com/maps?q=${encodeURIComponent(contact.mapQuery)}&output=embed`}
                  title="FinKorekt — Werferova 1, Košice"
                  className="absolute inset-0 w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contact.mapQuery)}`}
              target="_blank"
              rel="noreferrer"
              className="relative inline-flex items-center gap-2 self-start mt-4 h-12 px-6 rounded-full bg-white/10 border border-white/20 text-sm font-medium hover:bg-white/15"
            >
              {t("contact.map")} <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
