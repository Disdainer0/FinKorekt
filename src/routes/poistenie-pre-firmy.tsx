import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Check, Shield, HandCoins, Wheat, BarChart3, Scale, LineChart } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { PartnerMarquee } from "@/components/PartnerMarquee";

export const Route = createFileRoute("/poistenie-pre-firmy")({
  component: Page,
  head: () => ({
    meta: [
      { title: "Poistenie pre firmy — FinKorekt" },
      { name: "description", content: "Profesionálne firemné poistné riešenia šité na mieru vašim potrebám." },
    ],
  }),
});

const products = [
  { icon: Shield, title: "Allriskové poistné krytie", desc: "Allriskové poistenie je najkomplexnejšia forma ochrany firemného majetku. Na rozdiel od klasického živelného poistenia kryje všetky riziká, ktoré nie sú výslovne vylúčené.", img: "https://readdy.ai/api/search-image?query=modern%20glass%20office%20building%20corporate%20architecture%20blue%20sky%20professional%20business%20property%20clean%20minimal%20elegant%20warm%20light%20high%20quality%20architectural%20photography&width=800&height=600&seq=fk-firmy1-v2&orientation=portrait", points: ["Ochrana budov, strojov, zásob a technologického vybavenia", "Krytie živelných udalostí: požiar, záplava, víchrica, krupobitie", "Poistenie pre prípad krádeže vlámaním a vandalizmu", "Možnosť rozšírenia o prerušenie prevádzky (ušlý zisk)"] },
  { icon: HandCoins, title: "Poistenie zodpovednosti za škodu", desc: "Chráni firmu pred nárokmi tretích strán pri spôsobení škody na majetku, zdraví alebo finančnej škody.", img: "https://readdy.ai/api/search-image?query=professional%20business%20handshake%20partnership%20trust%20corporate%20meeting%20warm%20light%20soft%20blue%20tones%20elegant%20minimal%20high%20quality%20photographic&width=800&height=600&seq=fk-firmy2-v2&orientation=portrait", points: ["Všeobecná zodpovednosť za škodu", "Profesijná zodpovednosť", "Zodpovednosť za výrobok", "Krížová zodpovednosť v rámci skupiny"] },
  { icon: Wheat, title: "Agro poistenie", desc: "Špecializované riešenia pre poľnohospodárov — od poistenia úrody po hospodárske zvieratá a techniku.", img: "https://readdy.ai/api/search-image?query=golden%20wheat%20field%20agricultural%20landscape%20sunrise%20warm%20light%20blue%20sky%20farming%20insurance%20serene%20beautiful%20high%20quality%20photographic&width=800&height=600&seq=fk-firmy3-v2&orientation=portrait", points: ["Poistenie plodín a úrody", "Poistenie hospodárskych zvierat", "Poistenie poľnohospodárskej techniky", "Komplexné krytie agropodnikov"] },
  { icon: BarChart3, title: "Risk Management", desc: "Identifikácia, analýza a manažment rizík vašej firmy — proaktívny prístup k ochrane podnikania.", img: "https://readdy.ai/api/search-image?query=modern%20business%20analytics%20dashboard%20office%20professional%20warm%20light%20blue%20tones%20strategy%20planning%20high%20quality%20photographic&width=800&height=600&seq=fk-firmy4-v2&orientation=portrait", points: ["Audit existujúcich poistných zmlúv", "Identifikácia nepokrytých rizík", "Návrh komplexnej stratégie poistenia", "Pravidelná aktualizácia rizikového profilu"] },
  { icon: Scale, title: "Zodpovednosť a právna ochrana", desc: "Krytie nákladov právneho zastupovania a zodpovednosti štatutárov a manažmentu (D&O).", img: "https://readdy.ai/api/search-image?query=elegant%20legal%20office%20interior%20books%20warm%20natural%20light%20professional%20blue%20tones%20justice%20law%20minimal%20high%20quality%20photographic&width=800&height=600&seq=fk-firmy5-v2&orientation=portrait", points: ["Poistenie zodpovednosti štatutárov (D&O)", "Právna ochrana firmy a zamestnancov", "Krytie nákladov súdnych konaní", "Ochrana pri pracovnoprávnych sporoch"] },
  { icon: LineChart, title: "Monitoring rizika poistného trhu", desc: "Pravidelné sledovanie zmien na poistnom trhu a optimalizácia vašich zmlúv.", img: "https://readdy.ai/api/search-image?query=business%20professional%20chart%20growth%20office%20warm%20natural%20light%20blue%20tones%20analysis%20market%20elegant%20high%20quality%20photographic&width=800&height=600&seq=fk-firmy6-v2&orientation=portrait", points: ["Sledovanie zmien podmienok u poisťovní", "Pravidelná revízia portfólia", "Včasné upozornenie na nové príležitosti", "Optimalizácia ceny a krytia"] },
];

const benefits = [
  { title: "Riešenia na mieru", desc: "Každá firma je iná. Navrhujeme poistné riešenia presne podľa vašich potrieb, nie podľa katalógu." },
  { title: "Nezávislá analýza", desc: "Porovnávame ponuky všetkých relevantných poisťovní a odporúčame to najlepšie — objektívne a transparentne." },
  { title: "Dlhodobá starostlivosť", desc: "Naša práca sa nekončí podpisom zmluvy. Pravidelne prehodnocujeme vaše poistenie a reagujeme na zmeny." },
  { title: "Odbornosť a skúsenosti", desc: "Viac ako 10 rokov skúseností v oblasti poistného poradenstva pre firmy rôznych veľkostí a odvetví." },
];

const steps = [
  { n: "1", title: "Analýza potrieb", desc: "Dôkladne zmapujeme riziká a potreby vašej firmy — majetok, zodpovednosť, zamestnancov aj špecifické odvetvové riziká." },
  { n: "2", title: "Porovnanie trhu", desc: "Oslovíme relevantné poisťovne, porovnáme podmienky a ceny a pripravíme prehľadnú analýzu pre vás." },
  { n: "3", title: "Nastavenie zmluvy", desc: "Pomôžeme vám vybrať optimálne riešenie, vysvetlíme všetky podmienky a postaráme sa o bezproblémové uzatvorenie zmluvy." },
  { n: "4", title: "Priebežná správa", desc: "Sledujeme vaše zmluvy, upozorňujeme na dôležité termíny a v prípade poistnej udalosti vás aktívne zastupujeme." },
];

function Page() {
  const [active, setActive] = useState(0);
  const p = products[active];
  const Icon = p.icon;
  return (
    <>
      <PageHero eyebrow="Firemné riešenia" title="Poistenie pre firmy" subtitle="Profesionálne firemné poistné riešenia šité na mieru vašim potrebám" />

      <section className="py-24 bg-white">
        <div className="container-fk max-w-3xl mx-auto text-center text-lg text-muted-foreground leading-relaxed">
          Poskytujeme komplexné poistné produkty pre malé, stredné aj veľké podniky. Náš tím odborníčok vám pomôže vybrať optimálne krytie pre vaše podnikanie — bez zbytočnej byrokracie, s plnou transparentnosťou a s dôrazom na dlhodobý vzťah.
        </div>
      </section>

      <section className="py-24 bg-secondary">
        <div className="container-fk text-center">
          <p className="eyebrow text-blue-bright justify-center mx-auto">Čo ponúkame</p>
          <h2 className="mt-4 text-4xl md:text-5xl text-navy-deep">Poistné produkty pre firmy</h2>
        </div>
        <div className="container-fk mt-12 flex flex-wrap justify-center gap-3">
          {products.map((pr, i) => {
            const PIcon = pr.icon;
            return (
              <button
                key={pr.title}
                onClick={() => setActive(i)}
                className={`inline-flex items-center gap-2 h-12 px-5 rounded-full border text-sm font-medium transition-all ${
                  active === i ? "bg-navy-deep border-navy-deep text-white" : "bg-white border-border text-foreground/70 hover:border-blue-bright/40"
                }`}
              >
                <PIcon size={16} />
                {pr.title}
              </button>
            );
          })}
        </div>

        <div className="container-fk mt-12 grid gap-10 lg:grid-cols-2 items-center bg-white rounded-3xl p-6 md:p-10 shadow-sm">
          <div className="aspect-[4/3] overflow-hidden rounded-2xl">
            <img src={p.img} alt={p.title} className="h-full w-full object-cover" />
          </div>
          <div>
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-bright/10 text-blue-bright">
              <Icon size={20} />
            </span>
            <h3 className="mt-5 text-3xl text-navy-deep">{p.title}</h3>
            <p className="mt-4 text-muted-foreground leading-relaxed">{p.desc}</p>
            <ul className="mt-6 space-y-3">
              {p.points.map((pt) => (
                <li key={pt} className="flex gap-3">
                  <Check size={18} className="text-blue-bright mt-0.5 shrink-0" />
                  <span className="text-foreground/80 text-sm">{pt}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-28 bg-white">
        <div className="container-fk text-center max-w-3xl mx-auto">
          <p className="eyebrow text-blue-bright justify-center mx-auto">Prečo s nami</p>
          <h2 className="mt-4 text-4xl md:text-5xl text-navy-deep">Výhody spolupráce s FinKorekt</h2>
          <p className="mt-5 text-muted-foreground">Ako nezávislý maklér pracujeme výhradne vo váš prospech — bez viazanosti na konkrétnu poisťovňu.</p>
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
            <p className="eyebrow text-blue-soft">Ako pracujeme</p>
            <h2 className="mt-4 text-4xl md:text-5xl text-white">Váš poistný partner od analýzy po likvidáciu</h2>
            <p className="mt-6 text-white/70 leading-relaxed">Náš prístup je systematický a transparentný. Od prvého stretnutia až po riešenie poistnej udalosti sme pri vás — aktívne, odborne a s plným nasadením.</p>
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
            <img src="https://readdy.ai/api/search-image?query=professional%20women%20team%20insurance%20office%20meeting%20warm%20natural%20light%20elegant%20modern%20workspace%20trust%20collaboration%20blue%20tones%20high%20quality%20photographic&width=900&height=700&seq=fk-onas-story&orientation=portrait" alt="" className="rounded-3xl w-full object-cover aspect-[5/6]" />
            <div className="absolute -bottom-6 -left-6 bg-white text-navy-deep rounded-2xl p-6 shadow-2xl">
              <p className="font-serif text-4xl">10+</p>
              <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground mt-1">rokov skúseností</p>
            </div>
          </div>
        </div>
      </section>

      <PartnerMarquee />
    </>
  );
}
