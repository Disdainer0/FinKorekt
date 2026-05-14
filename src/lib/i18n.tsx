import React, { createContext, useContext, useEffect, useState } from "react";

type Lang = "EN" | "SK";

const translations: Record<Lang, Record<string, string>> = {
  EN: {
    "nav.about": "About",
    "nav.forBusinesses": "Insurance for businesses",
    "nav.forIndividuals": "Insurance for individuals",
    "nav.contact": "Contact",
    "nav.menu": "Menu",
    "footer.description": "Independent insurance advisory with a human approach. Partner of Respect Slovakia.",
    "footer.hours": "Mon – Fri: 8:00 – 17:00",
    "footer.copyright": "All rights reserved.",
    "root.title": "FinKorekt — Independent insurance advisory",
    "root.description": "FinKorekt — independent insurance broker with a human approach. Partner of Respect Slovakia.",
    "notfound.title": "Page not found",
    "notfound.message": "The page you're looking for doesn't exist or has been moved.",
    "error.title": "This page didn't load",
    "error.message": "Something went wrong on our end. You can try refreshing or head back home.",
    "go.home": "Go home",
    "try.again": "Try again",
  },
  SK: {
    "nav.about": "O nás",
    "nav.forBusinesses": "Poistenie pre firmy",
    "nav.forIndividuals": "Poistenie pre občanov",
    "nav.contact": "Kontakt",
    "nav.menu": "Menu",
    "footer.description": "Nezávislé poistné poradenstvo s ľudským prístupom. Partner of Respect Slovakia.",
    "footer.hours": "Po – Pia: 8:00 – 17:00",
    "footer.copyright": "Všetky práva vyhradené.",
    "root.title": "FinKorekt — Nezávislé poistné poradenstvo",
    "root.description": "FinKorekt — nezávislý poistný maklér s ľudským prístupom. Partner of Respect Slovakia.",
    "notfound.title": "Stránka nenájdená",
    "notfound.message": "Stránka, ktorú hľadáte, neexistuje alebo bola presunutá.",
    "error.title": "Stránka sa nenačítala",
    "error.message": "Nastala chyba na našej strane. Skúste stránku obnoviť alebo sa vrátiť domov.",
    "go.home": "Domov",
    "try.again": "Skúsiť znova",
  },
};

const I18nContext = createContext<{
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
} | null>(null);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    try {
      const stored = typeof window !== "undefined" ? localStorage.getItem("fk-lang") : null;
      return (stored as Lang) || "SK";
    } catch {
      return "SK";
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("fk-lang", lang);
    } catch {}
    if (typeof document !== "undefined") document.documentElement.lang = lang.toLowerCase();
  }, [lang]);

  const t = (key: string) => {
    return translations[lang][key] ?? translations.SK[key] ?? key;
  };

  return <I18nContext.Provider value={{ lang, setLang: setLangState, t }}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}

export default I18nProvider;
