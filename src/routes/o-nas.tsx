import { createFileRoute } from "@tanstack/react-router";
import { team } from "@/lib/site-data";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/o-nas")({
  component: Page,
  head: () => ({
    meta: [
      { title: "O nás — FinKorekt" },
      { name: "description", content: "Sme FinKorekt — váš spoľahlivý poistný partner s ľudskou tvárou." },
    ],
  }),
});

const mission = [
  { title: "Dôkladná analýza", desc: "Pred každým odporúčaním dôkladne analyzujeme vaše potreby, riziká a možnosti — aby sme navrhli riešenie, ktoré vám skutočne sedí." },
  { title: "Otvorená komunikácia", desc: "Hovoríme jasne a zrozumiteľne. Žiadny poistný žargón, žiadne skryté podmienky — len priama a úprimná komunikácia." },
  { title: "Dlhodobý vzťah", desc: "Naša práca sa nekončí podpisom zmluvy. Pravidelne prehodnocujeme vaše poistenie a reagujeme na zmeny vo vašom živote." },
  { title: "Nezávislé poradenstvo", desc: "Ako nezávislý maklér pracujeme výhradne vo váš prospech — porovnávame trh a odporúčame to najlepšie, nie to najvýhodnejšie pre nás." },
];

const values = [
  { title: "Odbornosť", desc: "Dlhoročné skúsenosti v oblasti poistenia a finančného poradenstva, ktoré pretavujeme do konkrétnych riešení." },
  { title: "Dôveryhodnosť", desc: "Transparentný prístup a čestné poradenstvo bez skrytých poplatkov alebo záujmových konfliktov." },
  { title: "Individuálny prístup", desc: "Každý klient je pre nás jedinečný — riešenia tvoríme na mieru, nie podľa šablóny." },
  { title: "Dostupnosť", desc: "Sme tu pre vás kedykoľvek potrebujete pomoc, radu alebo len odpoveď na otázku." },
];

function Page() {
  return (
    <>
      <PageHero eyebrow="Náš príbeh" title="O nás" subtitle="Sme FinKorekt — váš spoľahlivý poistný partner s ľudskou tvárou." />

      <section className="py-28 bg-white">
        <div className="container-fk grid gap-16 lg:grid-cols-2 items-center">
          <div className="relative">
            <img src="https://readdy.ai/api/search-image?query=professional%20women%20team%20insurance%20office%20meeting%20warm%20natural%20light%20elegant%20modern%20workspace%20trust%20collaboration%20blue%20tones%20high%20quality%20photographic&width=900&height=700&seq=fk-onas-story&orientation=portrait" alt="" className="rounded-3xl w-full object-cover aspect-[5/6]" />
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-2xl border border-border">
              <p className="font-serif text-4xl text-navy-deep">10+</p>
              <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground mt-1">rokov skúseností</p>
            </div>
          </div>
          <div>
            <p className="eyebrow text-blue-bright">Kto sme</p>
            <h2 className="mt-4 text-4xl md:text-5xl text-navy-deep">Poistné poradenstvo, ktoré vám skutočne rozumie</h2>
            <div className="mt-6 space-y-5 text-muted-foreground leading-relaxed">
              <p>FinKorekt je nezávislý poistný maklér a hrdý partner spoločnosti Respect Slovakia. Sme tím štyroch odborníčok, ktoré spájajú hlboké znalosti poistného trhu s úprimným záujmom o každého klienta.</p>
              <p>Veríme, že dobré poistenie nie je len o číslach a paragrafoch — je o dôvere, jasnej komunikácii a istote, že keď to bude treba, niekto bude stáť pri vás. Preto pristupujeme ku každému klientovi individuálne a hľadáme riešenia, ktoré skutočne dávajú zmysel.</p>
              <p>Spolupracujeme s poprednými poisťovňami na slovenskom trhu, čo nám umožňuje ponúknuť vám najlepšie podmienky a najširší výber poistných produktov — bez toho, aby sme uprednostňovali záujmy jednej poisťovne pred vašimi.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-28 bg-secondary">
        <div className="container-fk text-center max-w-3xl mx-auto">
          <p className="eyebrow text-blue-bright justify-center mx-auto">Naše poslanie</p>
          <h2 className="mt-4 text-4xl md:text-5xl text-navy-deep">Poistenie bez kompromisov, s ľudským prístupom</h2>
          <p className="mt-5 text-muted-foreground">Naším poslaním je zjednodušiť svet poistenia pre každého klienta. Chceme, aby ste rozumeli tomu, čo kupujete, cítili sa v bezpečí a vedeli, že máte niekoho, na koho sa môžete spoľahnúť.</p>
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
          <p className="eyebrow text-blue-bright justify-center mx-auto">Čo nás definuje</p>
          <h2 className="mt-4 text-4xl md:text-5xl text-navy-deep">Naše hodnoty</h2>
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
          <p className="eyebrow text-blue-bright justify-center mx-auto">Sme tu pre vás</p>
          <h2 className="mt-4 text-4xl md:text-5xl text-navy-deep">Náš tím</h2>
          <p className="mt-5 text-muted-foreground">Sme štyri odborníčky, ktoré spájajú vášeň pre poistné poradenstvo s úprimným záujmom o každého klienta.</p>
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
