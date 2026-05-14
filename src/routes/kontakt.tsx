import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { useI18n, usePageMeta } from "@/lib/i18n";
import RespectLogo from "@/IMG/RespectLogo.svg";
import ShortLogo from "@/IMG/ShortLogo.svg";

export const Route = createFileRoute("/kontakt")({
  component: Page,
});

function Page() {
  const { t } = useI18n();
  usePageMeta("contact.hero.title", "contact.hero.subtitle");
  const items = [
    { icon: MapPin, label: t("contact.address"), value: "[ADDRESS]" },
    { icon: Phone, label: t("contact.phone"), value: "[PHONE]", href: "tel:[PHONE]" },
    { icon: Mail, label: t("contact.email"), value: "[EMAIL]", href: "mailto:[EMAIL]" },
    { icon: Clock, label: t("contact.hours"), value: t("contact.hours.value") },
  ];
  return (
    <>
      <PageHero eyebrow={t("contact.hero.eyebrow")} title={t("contact.hero.title")} subtitle={t("contact.hero.subtitle")} />

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
              <img src={ShortLogo} alt="FinKorekt" className="h-7 w-auto object-contain" />
              <div className="mt-6 flex items-center gap-2">
                <span className="text-sm text-white/75">Partner of</span>
                <img src={RespectLogo} alt="Respect" className="h-5 w-auto object-contain" />
              </div>
              <p className="mt-6 text-white/70">{t("contact.info.subtitle")}</p>
            </div>
            <a
              href="https://www.google.com/maps"
              target="_blank"
              rel="noreferrer"
              className="relative inline-flex items-center gap-2 self-start mt-8 h-12 px-6 rounded-full bg-white/10 border border-white/20 text-sm font-medium hover:bg-white/15"
            >
              {t("contact.map")} <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
