import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Clock } from "lucide-react";
import { team, images } from "@/lib/site-data";
import { useI18n, usePageMeta } from "@/lib/i18n";
import LongLogo from "@/IMG/LongLogo.svg";
import RespectLogo from "@/IMG/RespectLogo.svg";
import GeneralPhoto from "@/IMG/generalphoto.png";

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
      <section className="relative min-h-screen flex items-end text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-navy-deep" />
          <div className="absolute inset-0 pointer-events-none z-10">
            <div className="absolute inset-0 bg-cover bg-[center_right_22%] scale-[1.08] brightness-[0.72] contrast-[0.96] saturate-[0.88]" style={{ backgroundImage: `url(${GeneralPhoto})` }} />
            <div
              className="absolute inset-x-0 bottom-0 h-[70%] pointer-events-none"
              style={{
                background: "linear-gradient(to top, rgba(16,73,126,0.88) 0%, rgba(16,73,126,0.82) 8%, rgba(28,98,168,0.68) 16%, rgba(49,132,222,0.48) 24%, rgba(49,132,222,0.24) 34%, rgba(49,132,222,0.1) 44%, rgba(49,132,222,0) 100%)",
                opacity: 1,
              }}
            />
          </div>
        </div>
        <div className="container-fk absolute inset-0 z-30 flex items-end pb-12 md:pb-20 animate-fade-up -translate-y-4 md:-translate-y-6">
          <div className="space-y-6 max-w-xl md:max-w-2xl pr-6 md:pr-12">
            <div>
              <img src={LongLogo} alt="FinKorekt" className="h-24 md:h-32 w-auto object-contain animate-fade-up" style={{ animationDelay: '0.1s' }} />
              <div className="mt-6 flex items-center gap-2">
                <span className="text-sm uppercase tracking-[0.15em] text-white/75 font-medium">Partner of</span>
                <a href="https://www.respect-slovakia.sk" target="_blank" rel="noreferrer" aria-label="Respect Slovakia">
                  <img src={RespectLogo} alt="Respect" className="h-5 w-auto object-contain" />
                </a>
              </div>
            </div>
            <p className="mt-6 text-lg text-white/80 leading-relaxed animate-fade-up" style={{ animationDelay: '0.2s' }}>{t("home.hero.description")}</p>
            <div className="mt-6 flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <Link to="/poistenie-pre-firmy" className="group inline-flex items-center gap-3 h-14 pl-7 pr-3 rounded-full bg-blue-bright text-white font-medium hover:bg-blue-bright/90 transition-all hover:shadow-lg hover:shadow-blue-bright/40 duration-300">
                {t("home.cta.businesses")}
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 group-hover:translate-x-1 transition-transform">
                  <ArrowRight size={16} />
                </span>
              </Link>
              <Link to="/poistenie-pre-obcanov" className="inline-flex items-center h-14 px-7 rounded-full border border-white/30 text-white font-medium hover:bg-white/10 hover:border-white/50 transition-all duration-300">
                {t("home.cta.individuals")}
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-0 right-0 container-fk flex items-center justify-center gap-3 text-xs uppercase tracking-[0.3em] text-white/50 animate-bounce" style={{ animationDuration: '3s' }}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
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

      <section className="py-28 bg-white relative overflow-hidden">
        <div className="container-fk grid gap-16 lg:grid-cols-2 items-center relative z-10">
          <div className="relative floating">
            <img src={images.likvidacia} alt={t("home.claims.title")} className="w-full rounded-3xl object-cover aspect-[5/6] shadow-lg" />
            <div className="absolute -bottom-6 -right-6 md:bottom-8 md:right-8 bg-white rounded-2xl shadow-2xl p-6 max-w-[220px] border border-border glow-on-hover">
              <Clock className="text-blue-bright" size={24} />
              <p className="mt-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">{t("home.availability")}</p>
              <p className="mt-1 font-serif text-3xl text-navy-deep">24 / 7</p>
              <p className="text-sm text-muted-foreground">{t("home.claims.title")}</p>
            </div>
          </div>
          <div className="animate-fade-up">
            <p className="eyebrow text-blue-bright">{t("home.claims.eyebrow")}</p>
            <h2 className="mt-4 text-4xl md:text-5xl text-navy-deep">{t("home.claims.title")}</h2>
            <p className="mt-6 text-muted-foreground leading-relaxed text-lg">{t("home.claims.description")}</p>
            <ul className="mt-8 space-y-5">
              {[t("home.claims.point1"), t("home.claims.point2"), t("home.claims.point3")].map((item, idx) => (
                <li key={item} className="flex gap-4 animate-fade-up opacity-0" style={{ animationDelay: `${0.2 + idx * 0.1}s`, animationFillMode: 'forwards', animation: 'fadeUp 0.6s ease-out forwards' }}>
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

      <section className="py-28 bg-secondary relative overflow-hidden">
        <div className="container-fk text-center relative z-10">
          <p className="eyebrow text-blue-bright justify-center mx-auto animate-fade-up">{t("home.team.eyebrow")}</p>
          <h2 className="mt-4 text-4xl md:text-5xl text-navy-deep animate-fade-up" style={{ animationDelay: '0.1s' }}>{t("home.team.title")}</h2>
        </div>
        <div className="container-fk mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 relative z-10">
          {team.map((m, i) => (
            <article key={i} className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow animate-fade-up opacity-0" style={{ animationDelay: `${0.2 + i * 0.1}s`, animationFillMode: 'forwards', animation: 'fadeUp 0.6s ease-out forwards' }}>
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

function ProductSection({
  eyebrow, title, ctaTo, ctaLabel, items, alt,
}: {
  eyebrow: string; title: string; ctaTo: string; ctaLabel: string;
  items: { title: string; desc: string; img: string }[]; alt?: boolean;
}) {
  return (
    <section className={`py-28 ${alt ? "bg-secondary" : "bg-white"} relative overflow-hidden`}>
      <div className="absolute top-0 left-0 w-full h-32 opacity-0" style={{ background: 'linear-gradient(135deg, rgba(79, 102, 214, 0.05) 0%, transparent 100%)', pointerEvents: 'none' }} />
      <div className="container-fk flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div className="animate-fade-up">
          <p className="eyebrow text-blue-bright">{eyebrow}</p>
          <h2 className="mt-4 text-4xl md:text-5xl text-navy-deep">{title}</h2>
        </div>
        <Link to={ctaTo} className="inline-flex items-center gap-2 text-sm font-medium text-navy-deep hover:text-blue-bright group transition-colors glow-on-hover rounded-full px-4 py-2 hover:bg-blue-bright/5">
          {ctaLabel}
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
      <div className="container-fk mt-14 grid gap-8 md:grid-cols-3">
        {items.map((it, idx) => (
          <article key={it.title} className="group animate-fade-up opacity-0" style={{ animationDelay: `${0.1 + idx * 0.1}s`, animationFillMode: 'forwards', animation: 'fadeUp 0.6s ease-out forwards' }}>
            <div className="aspect-[4/5] overflow-hidden rounded-3xl relative">
              <img src={it.img} alt={it.title} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <h3 className="mt-6 text-2xl text-navy-deep">{it.title}</h3>
            <p className="mt-3 text-muted-foreground leading-relaxed">{it.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
