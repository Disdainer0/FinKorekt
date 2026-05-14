import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Clock } from "lucide-react";
import { team, images } from "@/lib/site-data";
import { PartnerMarquee } from "@/components/PartnerMarquee";
import { useI18n, usePageMeta } from "@/lib/i18n";
import LongLogo from "@/IMG/LongLogo.svg";
import RespectLogo from "@/IMG/RespectLogo.svg";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const { t } = useI18n();
  usePageMeta("root.title", "root.description");

  const firmy = [
    { title: t("home.businesses.item1.title"), desc: t("home.businesses.item1.desc"), img: images.firmy1 },
    { title: t("home.businesses.item2.title"), desc: t("home.businesses.item2.desc"), img: images.firmy2 },
    { title: t("home.businesses.item3.title"), desc: t("home.businesses.item3.desc"), img: images.firmy3 },
  ];

  const obcanov = [
    { title: t("home.individuals.item1.title"), desc: t("home.individuals.item1.desc"), img: images.obcanov1 },
    { title: t("home.individuals.item2.title"), desc: t("home.individuals.item2.desc"), img: images.obcanov2 },
    { title: t("home.individuals.item3.title"), desc: t("home.individuals.item3.desc"), img: images.obcanov3 },
  ];

  return (
    <>
      <section className="relative min-h-screen flex items-center text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-navy-deep" />
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top_right,oklch(0.55_0.17_255),transparent_62%)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-transparent" />
        </div>
        <div className="container-fk relative pt-32 pb-24 animate-fade-up">
          <div className="flex items-center gap-3">
            <span className="text-sm uppercase tracking-[0.15em] text-white/75 font-medium">Partner of</span>
            <img src={RespectLogo} alt="Respect" className="h-5 w-auto object-contain" />
          </div>
          <img src={LongLogo} alt="FinKorekt" className="mt-8 h-20 md:h-28 w-auto object-contain" />
          <p className="mt-10 max-w-xl text-lg text-white/80 leading-relaxed">{t("home.hero.description")}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/poistenie-pre-firmy" className="group inline-flex items-center gap-3 h-14 pl-7 pr-3 rounded-full bg-blue-bright text-white font-medium hover:bg-blue-bright/90 transition-colors">
              {t("home.cta.businesses")}
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 group-hover:translate-x-0.5 transition-transform">
                <ArrowRight size={16} />
              </span>
            </Link>
            <Link to="/poistenie-pre-obcanov" className="inline-flex items-center h-14 px-7 rounded-full border border-white/30 text-white font-medium hover:bg-white/10 transition-colors">
              {t("home.cta.individuals")}
            </Link>
          </div>
        </div>
        <div className="absolute bottom-10 left-0 right-0 container-fk flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-white/60">
          <span className="h-10 w-px bg-white/30 relative overflow-hidden">
            <span className="absolute inset-x-0 top-0 h-3 bg-white animate-scroll-dot" />
          </span>
          {t("home.scroll")}
        </div>
      </section>

      <ProductSection
        eyebrow={t("home.businesses.eyebrow")}
        title={t("home.businesses.title")}
        ctaTo="/poistenie-pre-firmy"
        ctaLabel={t("home.businesses.cta")}
        items={firmy}
      />

      <ProductSection
        eyebrow={t("home.individuals.eyebrow")}
        title={t("home.individuals.title")}
        ctaTo="/poistenie-pre-obcanov"
        ctaLabel={t("home.individuals.cta")}
        items={obcanov}
        alt
      />

      <section className="py-28 bg-white">
        <div className="container-fk grid gap-16 lg:grid-cols-2 items-center">
          <div className="relative">
            <img src={images.likvidacia} alt={t("home.claims.title")} className="w-full rounded-3xl object-cover aspect-[5/6]" />
            <div className="absolute -bottom-6 -right-6 md:bottom-8 md:right-8 bg-white rounded-2xl shadow-2xl p-6 max-w-[220px] border border-border">
              <Clock className="text-blue-bright" size={24} />
              <p className="mt-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">{t("home.availability")}</p>
              <p className="mt-1 font-serif text-3xl text-navy-deep">24 / 7</p>
              <p className="text-sm text-muted-foreground">{t("home.claims.title")}</p>
            </div>
          </div>
          <div>
            <p className="eyebrow text-blue-bright">{t("home.claims.eyebrow")}</p>
            <h2 className="mt-4 text-4xl md:text-5xl text-navy-deep">{t("home.claims.title")}</h2>
            <p className="mt-6 text-muted-foreground leading-relaxed text-lg">{t("home.claims.description")}</p>
            <ul className="mt-8 space-y-5">
              {[t("home.claims.point1"), t("home.claims.point2"), t("home.claims.point3")].map((item) => (
                <li key={item} className="flex gap-4">
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-bright/10 text-blue-bright">
                    <Check size={14} />
                  </span>
                  <span className="text-foreground/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-28 bg-secondary">
        <div className="container-fk text-center">
          <p className="eyebrow text-blue-bright justify-center mx-auto">{t("home.team.eyebrow")}</p>
          <h2 className="mt-4 text-4xl md:text-5xl text-navy-deep">{t("home.team.title")}</h2>
        </div>
        <div className="container-fk mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((m, i) => (
            <article key={i} className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow">
              <div className="aspect-[5/6] overflow-hidden">
                <img src={m.img} alt={m.name} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl text-navy-deep">{m.name}</h3>
                <div className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                  <a href={`mailto:${m.email}`} className="flex items-center gap-2 hover:text-blue-bright">
                    <span className="text-blue-bright">✉</span> {m.email}
                  </a>
                  <a href={`tel:${m.phone}`} className="flex items-center gap-2 hover:text-blue-bright">
                    <span className="text-blue-bright">☏</span> {m.phone}
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <PartnerMarquee />
    </>
  );
}

function ProductSection({
  eyebrow, title, ctaTo, ctaLabel, items, alt,
}: {
  eyebrow: string; title: string; ctaTo: string; ctaLabel: string;
  items: { title: string; desc: string; img: string }[]; alt?: boolean;
}) {
  return (
    <section className={`py-28 ${alt ? "bg-secondary" : "bg-white"}`}>
      <div className="container-fk flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div>
          <p className="eyebrow text-blue-bright">{eyebrow}</p>
          <h2 className="mt-4 text-4xl md:text-5xl text-navy-deep">{title}</h2>
        </div>
        <Link to={ctaTo} className="inline-flex items-center gap-2 text-sm font-medium text-navy-deep hover:text-blue-bright group">
          {ctaLabel}
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
      <div className="container-fk mt-14 grid gap-8 md:grid-cols-3">
        {items.map((it) => (
          <article key={it.title} className="group">
            <div className="aspect-[4/5] overflow-hidden rounded-3xl">
              <img src={it.img} alt={it.title} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
            </div>
            <h3 className="mt-6 text-2xl text-navy-deep">{it.title}</h3>
            <p className="mt-3 text-muted-foreground leading-relaxed">{it.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
