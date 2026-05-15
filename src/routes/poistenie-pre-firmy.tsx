import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Check, Shield, HandCoins, Wheat, BarChart3, Scale, LineChart } from "lucide-react";
import { images } from "@/lib/site-data";
import { PageHero } from "@/components/PageHero";
import { useI18n, usePageMeta } from "@/lib/i18n";

export const Route = createFileRoute("/poistenie-pre-firmy")({
  component: Page,
});

type TFn = (key: string) => string;

function products(t: TFn) {
  return [
    {
      icon: Shield,
      title: t("business.products.allrisk.title"),
      desc: t("business.products.allrisk.desc"),
      img: images.firmy1,
      points: [t("business.products.allrisk.p1"), t("business.products.allrisk.p2"), t("business.products.allrisk.p3"), t("business.products.allrisk.p4")],
    },
    {
      icon: HandCoins,
      title: t("business.products.liability.title"),
      desc: t("business.products.liability.desc"),
      img: images.firmy2,
      points: [t("business.products.liability.p1"), t("business.products.liability.p2"), t("business.products.liability.p3"), t("business.products.liability.p4")],
    },
    {
      icon: Wheat,
      title: t("business.products.agro.title"),
      desc: t("business.products.agro.desc"),
      img: images.firmy3,
      points: [t("business.products.agro.p1"), t("business.products.agro.p2"), t("business.products.agro.p3"), t("business.products.agro.p4")],
    },
    {
      icon: BarChart3,
      title: t("business.products.risk.title"),
      desc: t("business.products.risk.desc"),
      img: images.firmy4,
      points: [t("business.products.risk.p1"), t("business.products.risk.p2"), t("business.products.risk.p3"), t("business.products.risk.p4")],
    },
    {
      icon: Scale,
      title: t("business.products.legal.title"),
      desc: t("business.products.legal.desc"),
      img: images.firmy5,
      points: [t("business.products.legal.p1"), t("business.products.legal.p2"), t("business.products.legal.p3"), t("business.products.legal.p4")],
    },
    {
      icon: LineChart,
      title: t("business.products.monitoring.title"),
      desc: t("business.products.monitoring.desc"),
      img: images.firmy6,
      points: [t("business.products.monitoring.p1"), t("business.products.monitoring.p2"), t("business.products.monitoring.p3"), t("business.products.monitoring.p4")],
    },
  ];
}

function Page() {
  const { t } = useI18n();
  usePageMeta("business.hero.title", "business.hero.subtitle");
  const [active, setActive] = useState(0);
  const items = products(t);
  const p = items[active];
  const Icon = p.icon;
  const benefits = [
    { title: t("business.benefits.b1.title"), desc: t("business.benefits.b1.desc") },
    { title: t("business.benefits.b2.title"), desc: t("business.benefits.b2.desc") },
    { title: t("business.benefits.b3.title"), desc: t("business.benefits.b3.desc") },
    { title: t("business.benefits.b4.title"), desc: t("business.benefits.b4.desc") },
  ];
  const steps = [
    { n: "1", title: t("business.steps.s1.title"), desc: t("business.steps.s1.desc") },
    { n: "2", title: t("business.steps.s2.title"), desc: t("business.steps.s2.desc") },
    { n: "3", title: t("business.steps.s3.title"), desc: t("business.steps.s3.desc") },
    { n: "4", title: t("business.steps.s4.title"), desc: t("business.steps.s4.desc") },
  ];

  return (
    <>
      <PageHero eyebrow={t("business.hero.eyebrow")} title={t("business.hero.title")} subtitle={t("business.hero.subtitle")} />

      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute -top-32 right-0 w-96 h-96 rounded-full bg-blue-bright/5 blur-3xl" />
        <div className="container-fk max-w-3xl mx-auto text-center text-lg text-muted-foreground leading-relaxed animate-fade-up relative z-10">
          {t("business.intro")}
        </div>
      </section>

      <section className="py-24 bg-secondary relative overflow-hidden">
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-blue-bright/5 blur-3xl" />
        <div className="container-fk text-center relative z-10">
          <p className="eyebrow text-blue-bright justify-center mx-auto animate-fade-up">{t("business.products.eyebrow")}</p>
          <h2 className="mt-4 text-4xl md:text-5xl text-navy-deep animate-fade-up" style={{ animationDelay: '0.1s' }}>{t("business.products.title")}</h2>
        </div>
        <div className="container-fk mt-12 flex flex-wrap justify-center gap-3 relative z-10">
          {items.map((pr, i) => {
            const PIcon = pr.icon;
            return (
              <button
                key={pr.title}
                onClick={() => setActive(i)}
                className={`inline-flex items-center gap-2 h-12 px-5 rounded-full border text-sm font-medium transition-all animate-fade-up opacity-0 ${
                  active === i ? "bg-navy-deep border-navy-deep text-white shadow-lg shadow-blue-bright/40" : "bg-white border-border text-foreground/70 hover:border-blue-bright/40 glow-on-hover"
                }`}
                style={{ animationDelay: `${0.2 + i * 0.08}s`, animationFillMode: 'forwards', animation: 'fadeUp 0.6s ease-out forwards' }}
              >
                <PIcon size={16} />
                {pr.title}
              </button>
            );
          })}
        </div>

        <div className="container-fk mt-12 grid gap-10 lg:grid-cols-2 items-center bg-white rounded-3xl p-6 md:p-10 shadow-lg glow-on-hover animate-fade-up relative z-10" style={{ animationDelay: '0.3s' }}>
          <div className="aspect-[4/3] overflow-hidden rounded-2xl">
            <img src={p.img} alt={p.title} className="h-full w-full object-cover hover:scale-105 transition-transform duration-700" />
          </div>
          <div className="animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-bright/10 text-blue-bright">
              <Icon size={20} />
            </span>
            <h3 className="mt-5 text-3xl text-navy-deep">{p.title}</h3>
            <p className="mt-4 text-muted-foreground leading-relaxed">{p.desc}</p>
            <ul className="mt-6 space-y-3">
              {p.points.map((pt, idx) => (
                <li key={pt} className="flex gap-3 animate-fade-up opacity-0" style={{ animationDelay: `${0.5 + idx * 0.1}s`, animationFillMode: 'forwards', animation: 'fadeUp 0.6s ease-out forwards' }}>
                  <Check size={18} className="text-blue-bright mt-0.5 shrink-0" />
                  <span className="text-foreground/80 text-sm">{pt}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-28 bg-white relative overflow-hidden">
        <div className="absolute -bottom-32 right-0 w-96 h-96 rounded-full bg-blue-bright/5 blur-3xl" />
        <div className="container-fk text-center max-w-3xl mx-auto relative z-10">
          <p className="eyebrow text-blue-bright justify-center mx-auto animate-fade-up">{t("business.benefits.eyebrow")}</p>
          <h2 className="mt-4 text-4xl md:text-5xl text-navy-deep animate-fade-up" style={{ animationDelay: '0.1s' }}>{t("business.benefits.title")}</h2>
          <p className="mt-5 text-muted-foreground">{t("business.benefits.subtitle")}</p>
        </div>
        <div className="container-fk mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b, i) => (
            <div key={b.title} className="bg-secondary rounded-3xl p-8 hover:shadow-lg transition-shadow">
              <span className="font-serif text-blue-bright text-2xl">0{i + 1}</span>
              <h3 className="mt-4 text-xl text-navy-deep">{b.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-28 bg-navy-deep text-white">
        <div className="container-fk grid gap-16 lg:grid-cols-2 items-center">
          <div>
            <p className="eyebrow text-blue-soft">{t("business.steps.eyebrow")}</p>
            <h2 className="mt-4 text-4xl md:text-5xl text-white">{t("business.steps.title")}</h2>
            <p className="mt-6 text-white/70 leading-relaxed">{t("business.steps.subtitle")}</p>
            <div className="mt-10 space-y-6">
              {steps.map((s) => (
                <div key={s.n} className="flex gap-5 border-t border-white/10 pt-6">
                  <span className="font-serif text-blue-soft text-3xl shrink-0 w-10">{s.n}</span>
                  <div>
                    <h4 className="text-lg text-white">{s.title}</h4>
                    <p className="mt-1.5 text-sm text-white/70">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img src={images.team} alt="" className="rounded-3xl w-full object-cover aspect-[5/6]" />
            <div className="absolute -bottom-6 -left-6 bg-white text-navy-deep rounded-2xl p-6 shadow-2xl">
              <p className="font-serif text-4xl">{t("business.stats.experience.value")}</p>
              <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground mt-1">{t("business.stats.experience")}</p>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
