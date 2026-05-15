import { partners } from "@/lib/site-data";
import { useI18n } from "@/lib/i18n";
import { useState } from "react";

export function PartnerMarquee() {
  const { t } = useI18n();
  const items = [...partners, ...partners];
  const [hidden, setHidden] = useState<Record<number, boolean>>({});

  return (
    <section className="py-20 overflow-hidden">
      <div className="container-fk text-center">
        <p className="eyebrow text-blue-bright justify-center mx-auto">{t("partner.eyebrow")}</p>
        <h2 className="mt-4 text-3xl md:text-4xl font-serif text-foreground">{t("partner.title")}</h2>
      </div>
      <div className="mt-12 relative">
        <div className="flex gap-16 md:gap-20 animate-marquee w-max items-center">
          {items.map((p, i) => (
            <a
              key={`${p.name}-${i}`}
              href={p.url}
              target="_blank"
              rel="noreferrer"
              className="group shrink-0 flex items-center justify-center h-24 md:h-28"
              aria-label={p.name}
            >
              {!hidden[i] && (
                <img
                  src={p.logo}
                  alt={p.name}
                  loading="lazy"
                  className="max-h-full max-w-[200px] object-contain transition-transform duration-300 group-hover:scale-110 grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100"
                  onError={(e) => {
                    const copy = { ...hidden };
                    copy[i] = true;
                    setHidden(copy);
                    (e.currentTarget as HTMLImageElement).style.display = "none";
                  }}
                />
              )}
            </a>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent" />
      </div>
    </section>
  );
}
