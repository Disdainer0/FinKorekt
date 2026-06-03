import { createFileRoute } from "@tanstack/react-router";
import { BadgeCheck, Handshake, MessageSquareQuote, ShieldCheck } from "lucide-react";
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
    { icon: ShieldCheck, title: t("about.mission.item1.title"), desc: t("about.mission.item1.desc") },
    { icon: MessageSquareQuote, title: t("about.mission.item2.title"), desc: t("about.mission.item2.desc") },
    { icon: Handshake, title: t("about.mission.item3.title"), desc: t("about.mission.item3.desc") },
    { icon: BadgeCheck, title: t("about.mission.item4.title"), desc: t("about.mission.item4.desc") },
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

      <section className="py-28 bg-white relative overflow-hidden">
        <div className="container-fk grid gap-16 lg:grid-cols-2 items-center relative z-10">
          <div className="relative floating">
            <img src={images.team} alt="" className="rounded-3xl w-full object-cover aspect-[5/6] shadow-lg" />
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-2xl border border-border glow-on-hover">
              <p className="font-serif text-4xl text-navy-deep">10+</p>
              <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground mt-1">{t("business.stats.experience")}</p>
            </div>
          </div>
          <div className="animate-fade-up">
            <p className="eyebrow text-blue-bright">{t("about.who.eyebrow")}</p>
            <h2 className="mt-4 text-4xl md:text-5xl text-navy-deep">{t("about.who.title")}</h2>
            <div className="mt-6 space-y-5 text-muted-foreground leading-relaxed">
              <p className="animate-fade-up opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards', animation: 'fadeUp 0.6s ease-out forwards' }}>{t("about.who.p1")}</p>
              <p className="animate-fade-up opacity-0" style={{ animationDelay: '0.3s', animationFillMode: 'forwards', animation: 'fadeUp 0.6s ease-out forwards' }}>{t("about.who.p2")}</p>
              <p className="animate-fade-up opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards', animation: 'fadeUp 0.6s ease-out forwards' }}>{t("about.who.p3")}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-28 bg-secondary relative overflow-hidden">
        <div className="container-fk text-center max-w-3xl mx-auto relative z-10">
          <p className="eyebrow text-blue-bright justify-center mx-auto animate-fade-up">{t("about.mission.eyebrow")}</p>
          <h2 className="mt-4 text-4xl md:text-5xl text-navy-deep animate-fade-up" style={{ animationDelay: '0.1s' }}>{t("about.mission.title")}</h2>
          <p className="mt-5 text-muted-foreground animate-fade-up" style={{ animationDelay: '0.2s' }}>{t("about.mission.subtitle")}</p>
        </div>
        <div className="container-fk mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4 relative z-10">
          {mission.map((b, i) => {
            const Icon = b.icon;
            return (
            <div key={b.title} className="bg-white rounded-3xl p-8 hover:shadow-lg transition-all duration-300 glow-on-hover animate-fade-up opacity-0" style={{ animationDelay: `${0.2 + i * 0.1}s`, animationFillMode: 'forwards', animation: 'fadeUp 0.6s ease-out forwards' }}>
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-bright/10 text-blue-bright">
                <Icon size={20} />
              </span>
              <h3 className="mt-4 text-xl text-navy-deep">{b.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
            </div>
            );
          })}
        </div>
      </section>

      <section className="py-28 bg-white relative overflow-hidden">
        <div className="container-fk text-center relative z-10">
          <p className="eyebrow text-blue-bright justify-center mx-auto animate-fade-up">{t("about.values.eyebrow")}</p>
          <h2 className="mt-4 text-4xl md:text-5xl text-navy-deep animate-fade-up" style={{ animationDelay: '0.1s' }}>{t("about.values.title")}</h2>
        </div>
        <div className="container-fk mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4 relative z-10">
          {values.map((v, i) => (
            <div key={v.title} className="border-t border-border pt-8 hover:border-blue-bright transition-colors duration-300 animate-fade-up opacity-0" style={{ animationDelay: `${0.2 + i * 0.1}s`, animationFillMode: 'forwards', animation: 'fadeUp 0.6s ease-out forwards' }}>
              <h3 className="text-2xl text-navy-deep">{v.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-28 bg-secondary relative overflow-hidden">
        <div className="container-fk text-center max-w-2xl mx-auto relative z-10">
          <p className="eyebrow text-blue-bright justify-center mx-auto animate-fade-up">{t("about.team.eyebrow")}</p>
          <h2 className="mt-4 text-4xl md:text-5xl text-navy-deep animate-fade-up" style={{ animationDelay: '0.1s' }}>{t("about.team.title")}</h2>
          <p className="mt-5 text-muted-foreground animate-fade-up" style={{ animationDelay: '0.2s' }}>{t("about.team.subtitle")}</p>
        </div>
        <div className="container-fk mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 relative z-10">
          {team.map((m, i) => (
            <article key={i} className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up opacity-0" style={{ animationDelay: `${0.3 + i * 0.1}s`, animationFillMode: 'forwards', animation: 'fadeUp 0.6s ease-out forwards' }}>
              <div className="aspect-[5/6] overflow-hidden">
                <img src={m.img} alt={m.name} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl text-navy-deep">{m.name}</h3>
                <div className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                  <a href={`mailto:${m.email}`} className="flex items-center gap-2 hover:text-blue-bright transition-colors">
                    <span className="text-blue-bright">✉</span> <span className="whitespace-nowrap">{m.email}</span>
                  </a>
                  <a href={`tel:${m.phone}`} className="flex items-center gap-2 hover:text-blue-bright transition-colors">
                    <span className="text-blue-bright">☏</span> <span className="whitespace-nowrap">{m.phone}</span>
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
