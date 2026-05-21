import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Heart, Home, Plane, Car, ArrowRight, Calculator, Users, Search, LifeBuoy, Clock } from "lucide-react";
import { images } from "@/lib/site-data";
import { PageHero } from "@/components/PageHero";
import { useI18n, usePageMeta } from "@/lib/i18n";

export const Route = createFileRoute("/poistenie-pre-obcanov")({
  component: Page,
});

type TFn = (key: string) => string;

function products(t: TFn) {
  return [
    {
      icon: Heart,
      title: t("individual.products.life.title"),
      desc: t("individual.products.life.desc"),
      img: images.obcanov1,
      points: [t("individual.products.life.p1"), t("individual.products.life.p2"), t("individual.products.life.p3"), t("individual.products.life.p4")],
    },
    {
      icon: Home,
      title: t("individual.products.home.title"),
      desc: t("individual.products.home.desc"),
      img: images.obcanov2,
      points: [t("individual.products.home.p1"), t("individual.products.home.p2"), t("individual.products.home.p3"), t("individual.products.home.p4")],
    },
    {
      icon: Plane,
      title: t("individual.products.travel.title"),
      desc: t("individual.products.travel.desc"),
      img: images.obcanov3,
      points: [t("individual.products.travel.p1"), t("individual.products.travel.p2"), t("individual.products.travel.p3"), t("individual.products.travel.p4")],
    },
    {
      icon: Car,
      title: t("individual.products.car.title"),
      desc: t("individual.products.car.desc"),
      img: images.obcanov4,
      points: [t("individual.products.car.p1"), t("individual.products.car.p2"), t("individual.products.car.p3"), t("individual.products.car.p4")],
    },
  ];
}

function Page() {
  const { t } = useI18n();
  usePageMeta("individual.hero.title", "individual.hero.subtitle");
  const [active, setActive] = useState(0);
  const items = products(t);
  const p = items[active];
  const benefits = [
    { icon: Users, title: t("individual.benefits.b1.title"), desc: t("individual.benefits.b1.desc") },
    { icon: Search, title: t("individual.benefits.b2.title"), desc: t("individual.benefits.b2.desc") },
    { icon: LifeBuoy, title: t("individual.benefits.b3.title"), desc: t("individual.benefits.b3.desc") },
    { icon: Clock, title: t("individual.benefits.b4.title"), desc: t("individual.benefits.b4.desc") },
  ];
  const steps = [
    { n: "1", title: t("individual.steps.s1.title"), desc: t("individual.steps.s1.desc") },
    { n: "2", title: t("individual.steps.s2.title"), desc: t("individual.steps.s2.desc") },
    { n: "3", title: t("individual.steps.s3.title"), desc: t("individual.steps.s3.desc") },
    { n: "4", title: t("individual.steps.s4.title"), desc: t("individual.steps.s4.desc") },
  ];

  return (
    <>
      <PageHero eyebrow={t("individual.hero.eyebrow")} title={t("individual.hero.title")} subtitle={t("individual.hero.subtitle")} />

      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute -top-32 left-0 w-96 h-96 rounded-full bg-blue-bright/5 blur-3xl" />
        <div className="container-fk max-w-3xl mx-auto text-center text-lg text-muted-foreground leading-relaxed animate-fade-up relative z-10">
          {t("individual.intro")}
        </div>
      </section>

      <section className="py-20 bg-secondary relative overflow-hidden">
        <div className="absolute -top-40 right-0 w-96 h-96 rounded-full bg-blue-bright/5 blur-3xl" />
        <div className="container-fk relative z-10">
          <div className="rounded-3xl bg-gradient-to-br from-navy-deep to-navy text-white p-10 md:p-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 glow-on-hover animate-fade-up" style={{ animationDelay: '0.1s' }}>
            <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <p className="eyebrow text-blue-soft">{t("individual.calculator.eyebrow")}</p>
              <h2 className="mt-4 text-3xl md:text-4xl text-white">{t("individual.calculator.title")}</h2>
              <p className="mt-3 text-white/75 max-w-xl">{t("individual.calculator.subtitle")}</p>
            </div>
            <a href="#" className="group inline-flex items-center gap-3 h-14 pl-7 pr-3 rounded-full bg-blue-bright text-white font-medium hover:bg-blue-bright/90 transition-all hover:shadow-lg hover:shadow-blue-bright/40 shrink-0 animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <Calculator size={18} /> {t("individual.calculator.button")}
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 group-hover:translate-x-1 transition-transform">
                <ArrowRight size={16} />
              </span>
            </a>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container-fk text-center">
          <p className="eyebrow text-blue-bright justify-center mx-auto">{t("individual.products.eyebrow")}</p>
          <h2 className="mt-4 text-4xl md:text-5xl text-navy-deep">{t("individual.products.title")}</h2>
        </div>
        <div className="container-fk mt-12 flex flex-wrap justify-center gap-3">
          {items.map((pr, i) => (
            <button
              key={pr.title}
              onClick={() => setActive(i)}
              className={`inline-flex items-center h-12 px-5 rounded-full border text-sm font-medium transition-all ${
                active === i ? "bg-navy-deep border-navy-deep text-white" : "bg-white border-border text-foreground/70 hover:border-blue-bright/40"
              }`}
            >
              {pr.title}
            </button>
          ))}
        </div>

        <div className="container-fk mt-12 grid gap-10 lg:grid-cols-2 items-center bg-secondary rounded-3xl p-6 md:p-10">
          <div className="aspect-[4/3] overflow-hidden rounded-2xl">
            <img src={p.img} alt={p.title} className="h-full w-full object-cover" />
          </div>
          <div>
            <h3 className="text-3xl text-navy-deep">{p.title}</h3>
            <p className="mt-4 text-muted-foreground leading-relaxed">{p.desc}</p>
            <ul className="mt-6 space-y-3">
              {p.points.map((pt) => (
                <li key={pt} className="flex gap-3">
                  <span className="mt-[7px] h-2 w-2 shrink-0 rounded-full bg-blue-bright" />
                  <span className="text-foreground/80 text-sm">{pt}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-28 bg-secondary">
        <div className="container-fk text-center max-w-3xl mx-auto">
          <p className="eyebrow text-blue-bright justify-center mx-auto">{t("individual.benefits.eyebrow")}</p>
          <h2 className="mt-4 text-4xl md:text-5xl text-navy-deep">{t("individual.benefits.title")}</h2>
          <p className="mt-5 text-muted-foreground">{t("individual.benefits.subtitle")}</p>
        </div>
        <div className="container-fk mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b, i) => {
            const BIcon = b.icon;
            return (
              <div key={b.title} className="bg-white rounded-3xl p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-bright/10 text-blue-bright">
                    <BIcon size={18} />
                  </span>
                </div>
                <h3 className="mt-4 text-xl text-navy-deep">{b.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="py-28 bg-white">
        <div className="container-fk text-center max-w-2xl mx-auto">
          <p className="eyebrow text-blue-bright justify-center mx-auto">{t("individual.steps.eyebrow")}</p>
          <h2 className="mt-4 text-4xl md:text-5xl text-navy-deep">{t("individual.steps.title")}</h2>
        </div>
        <div className="container-fk mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div key={s.n} className="relative">
              <span className="font-serif text-7xl text-blue-bright/20">{s.n}</span>
              <h3 className="mt-2 text-xl text-navy-deep">{s.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

    </>
  );
}
