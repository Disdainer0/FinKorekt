import { createFileRoute } from "@tanstack/react-router";
import { team, images } from "@/lib/site-data";
import { PageHero } from "@/components/PageHero";
import { useI18n, usePageMeta } from "@/lib/i18n";

export const Route = createFileRoute("/o-nas")({
  component: Page,
});

function Page() {
  const { t } = useI18n();
  usePageMeta("about.hero.title", "about.hero.subtitle");

  const mission = [
    { title: t("about.mission.item1.title"), desc: t("about.mission.item1.desc") },
    { title: t("about.mission.item2.title"), desc: t("about.mission.item2.desc") },
    { title: t("about.mission.item3.title"), desc: t("about.mission.item3.desc") },
    { title: t("about.mission.item4.title"), desc: t("about.mission.item4.desc") },
  ];

  const values = [
    { title: t("about.values.item1.title"), desc: t("about.values.item1.desc") },
    { title: t("about.values.item2.title"), desc: t("about.values.item2.desc") },
    { title: t("about.values.item3.title"), desc: t("about.values.item3.desc") },
    { title: t("about.values.item4.title"), desc: t("about.values.item4.desc") },
  ];

  return (
    <>
      <PageHero eyebrow={t("about.hero.eyebrow")} title={t("about.hero.title")} subtitle={t("about.hero.subtitle")} />

      <section className="py-28 bg-white">
        <div className="container-fk grid gap-16 lg:grid-cols-2 items-center">
          <div className="relative">
            <img src={images.team} alt="" className="rounded-3xl w-full object-cover aspect-[5/6]" />
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-2xl border border-border">
              <p className="font-serif text-4xl text-navy-deep">10+</p>
              <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground mt-1">{t("business.stats.experience")}</p>
            </div>
          </div>
          <div>
            <p className="eyebrow text-blue-bright">{t("about.who.eyebrow")}</p>
            <h2 className="mt-4 text-4xl md:text-5xl text-navy-deep">{t("about.who.title")}</h2>
            <div className="mt-6 space-y-5 text-muted-foreground leading-relaxed">
              <p>{t("about.who.p1")}</p>
              <p>{t("about.who.p2")}</p>
              <p>{t("about.who.p3")}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-28 bg-secondary">
        <div className="container-fk text-center max-w-3xl mx-auto">
          <p className="eyebrow text-blue-bright justify-center mx-auto">{t("about.mission.eyebrow")}</p>
          <h2 className="mt-4 text-4xl md:text-5xl text-navy-deep">{t("about.mission.title")}</h2>
          <p className="mt-5 text-muted-foreground">{t("about.mission.subtitle")}</p>
        </div>
        <div className="container-fk mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {mission.map((b, i) => (
            <div key={b.title} className="bg-white rounded-3xl p-8 hover:shadow-lg transition-shadow">
              <span className="font-serif text-blue-bright text-2xl">0{i + 1}</span>
              <h3 className="mt-4 text-xl text-navy-deep">{b.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-28 bg-white">
        <div className="container-fk text-center">
          <p className="eyebrow text-blue-bright justify-center mx-auto">{t("about.values.eyebrow")}</p>
          <h2 className="mt-4 text-4xl md:text-5xl text-navy-deep">{t("about.values.title")}</h2>
        </div>
        <div className="container-fk mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <div key={v.title} className="border-t border-border pt-8">
              <h3 className="text-2xl text-navy-deep">{v.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-28 bg-secondary">
        <div className="container-fk text-center max-w-2xl mx-auto">
          <p className="eyebrow text-blue-bright justify-center mx-auto">{t("about.team.eyebrow")}</p>
          <h2 className="mt-4 text-4xl md:text-5xl text-navy-deep">{t("about.team.title")}</h2>
          <p className="mt-5 text-muted-foreground">{t("about.team.subtitle")}</p>
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
    </>
  );
}
