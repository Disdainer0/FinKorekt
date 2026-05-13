import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Clock } from "lucide-react";
import { team, heroImg } from "@/lib/site-data";
import { PartnerMarquee } from "@/components/PartnerMarquee";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "FinKorekt — Nezávislé poistné poradenstvo" },
      { name: "description", content: "Nezávislé poistné poradenstvo s ľudským prístupom. Pre vás, vašu rodinu aj vaše podnikanie." },
    ],
  }),
});

const firmy = [
  { title: "Firemný majetok", desc: "Komplexné krytie budov, strojov a zásob — od požiaru po prerušenie prevádzky.", img: "https://readdy.ai/api/search-image?query=modern%20glass%20office%20building%20corporate%20architecture%20blue%20sky%20professional%20business%20property%20clean%20minimal%20elegant%20warm%20light%20high%20quality%20architectural%20photography&width=800&height=600&seq=fk-firmy1-v2&orientation=portrait" },
  { title: "Zodpovednosť za škodu", desc: "Ochrana firmy pred nárokmi tretích strán a profesijné poistenie zodpovednosti.", img: "https://readdy.ai/api/search-image?query=professional%20business%20handshake%20partnership%20trust%20corporate%20meeting%20warm%20light%20soft%20blue%20tones%20elegant%20minimal%20high%20quality%20photographic&width=800&height=600&seq=fk-firmy2-v2&orientation=portrait" },
  { title: "Agro poistenie", desc: "Špecializované poistné riešenia pre poľnohospodárov — úroda, zvieratá, technika.", img: "https://readdy.ai/api/search-image?query=golden%20wheat%20field%20agricultural%20landscape%20sunrise%20warm%20light%20blue%20sky%20farming%20insurance%20serene%20beautiful%20high%20quality%20photographic&width=800&height=600&seq=fk-firmy3-v2&orientation=portrait" },
];

const obcanov = [
  { title: "Životné poistenie", desc: "Finančná ochrana pre vás aj vašich blízkych v najťažších životných situáciách.", img: "https://readdy.ai/api/search-image?query=warm%20family%20moment%20mother%20daughter%20soft%20natural%20light%20home%20interior%20cozy%20blue%20white%20tones%20life%20insurance%20trust%20care%20high%20quality%20photographic&width=800&height=600&seq=fk-obcanov1-v2&orientation=portrait" },
  { title: "Domov a domácnosť", desc: "Spoľahlivé krytie nehnuteľnosti, vybavenia a zodpovednosti v každodennom živote.", img: "https://readdy.ai/api/search-image?query=elegant%20modern%20home%20exterior%20architecture%20warm%20sunset%20light%20blue%20sky%20property%20insurance%20minimal%20clean%20high%20quality%20photographic&width=800&height=600&seq=fk-obcanov2-v2&orientation=portrait" },
  { title: "Cestovné poistenie", desc: "Pokojné cestovanie s krytím liečebných nákladov, batožiny a storno.", img: "https://readdy.ai/api/search-image?query=travel%20adventure%20suitcase%20passport%20warm%20light%20blue%20sky%20airport%20departure%20travel%20insurance%20minimal%20elegant%20high%20quality%20photographic&width=800&height=600&seq=fk-obcanov3-v2&orientation=portrait" },
];

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center text-white overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/90 to-navy-deep/55" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-transparent to-transparent" />
        </div>
        <div className="container-fk relative pt-32 pb-24 animate-fade-up">
          <p className="eyebrow text-blue-soft">Partner of Respect</p>
          <h1 className="mt-8 font-serif font-medium text-7xl md:text-[8.5rem] leading-[0.95] tracking-tight">
            Fin<span className="text-blue-soft">Korekt</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg text-white/80 leading-relaxed">
            Nezávislé poistné poradenstvo s ľudským prístupom. Sme tu, aby sme vám pomohli nájsť to správne krytie — pre vás, vašu rodinu aj vaše podnikanie.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/poistenie-pre-firmy"
              className="group inline-flex items-center gap-3 h-14 pl-7 pr-3 rounded-full bg-blue-bright text-white font-medium hover:bg-blue-bright/90 transition-colors"
            >
              Poistenie pre firmy
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 group-hover:translate-x-0.5 transition-transform">
                <ArrowRight size={16} />
              </span>
            </Link>
            <Link
              to="/poistenie-pre-obcanov"
              className="inline-flex items-center h-14 px-7 rounded-full border border-white/30 text-white font-medium hover:bg-white/10 transition-colors"
            >
              Poistenie pre občanov
            </Link>
          </div>
        </div>
        <div className="absolute bottom-10 left-0 right-0 container-fk flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-white/60">
          <span className="h-10 w-px bg-white/30 relative overflow-hidden">
            <span className="absolute inset-x-0 top-0 h-3 bg-white animate-scroll-dot" />
          </span>
          Scroll
        </div>
      </section>

      {/* FIRMY */}
      <ProductSection
        eyebrow="Firemné poistné riešenia"
        title="Poistenie pre firmy"
        ctaTo="/poistenie-pre-firmy"
        ctaLabel="Všetky produkty pre firmy"
        items={firmy}
      />

      {/* OBCANOV */}
      <ProductSection
        eyebrow="Individuálne a rodinné poistenie"
        title="Poistenie pre občanov"
        ctaTo="/poistenie-pre-obcanov"
        ctaLabel="Všetky produkty pre občanov"
        items={obcanov}
        alt
      />

      {/* LIKVIDACNY SERVIS */}
      <section className="py-28 bg-white">
        <div className="container-fk grid gap-16 lg:grid-cols-2 items-center">
          <div className="relative">
            <img
              src="https://readdy.ai/api/search-image?query=professional%20insurance%20advisor%20woman%20helping%20client%20paperwork%20office%20warm%20light%20blue%20tones%20trust%20care%20elegant%20minimal%20high%20quality%20photographic&width=800&height=700&seq=fk-likvidacia-v2&orientation=portrait"
              alt="Likvidačný servis"
              className="w-full rounded-3xl object-cover aspect-[5/6]"
            />
            <div className="absolute -bottom-6 -right-6 md:bottom-8 md:right-8 bg-white rounded-2xl shadow-2xl p-6 max-w-[220px] border border-border">
              <Clock className="text-blue-bright" size={24} />
              <p className="mt-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">Dostupnosť</p>
              <p className="mt-1 font-serif text-3xl text-navy-deep">24 / 7</p>
              <p className="text-sm text-muted-foreground">Likvidačný servis</p>
            </div>
          </div>
          <div>
            <p className="eyebrow text-blue-bright">Riešenie poistných udalostí</p>
            <h2 className="mt-4 text-4xl md:text-5xl text-navy-deep">Likvidačný servis</h2>
            <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
              Efektívny a pružný systém likvidácie poistných udalostí je kľúčovou súčasťou kvalitného poistenia. Maximalizujeme spokojnosť klientov tým, že zjednodušujeme celý proces a stojíme pri vás v každom kroku.
            </p>
            <ul className="mt-8 space-y-5">
              {[
                "Flexibilný likvidačný servis dostupný 24 hodín denne, s odborníkmi s dlhoročnou praxou v oblasti poistenia.",
                "Individuálny prístup ku každému klientovi a aktívna komunikácia s poisťovňami v jeho mene.",
                "Pri poistnej udalosti zachovajte chladnú hlavu — sme na vašej strane a postaráme sa o všetko.",
              ].map((t) => (
                <li key={t} className="flex gap-4">
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-bright/10 text-blue-bright">
                    <Check size={14} />
                  </span>
                  <span className="text-foreground/80">{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* TIM */}
      <section className="py-28 bg-secondary">
        <div className="container-fk text-center">
          <p className="eyebrow text-blue-bright justify-center mx-auto">Sme tu pre vás</p>
          <h2 className="mt-4 text-4xl md:text-5xl text-navy-deep">Náš tím</h2>
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
        <Link
          to={ctaTo}
          className="inline-flex items-center gap-2 text-sm font-medium text-navy-deep hover:text-blue-bright group"
        >
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
