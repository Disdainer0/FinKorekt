import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { useI18n } from "@/lib/i18n";

const links = [
  { to: "/o-nas", key: "nav.about" },
  { to: "/poistenie-pre-firmy", key: "nav.forBusinesses" },
  { to: "/poistenie-pre-obcanov", key: "nav.forIndividuals" },
  { to: "/kontakt", key: "nav.contact" },
] as const;

export function Navbar() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { lang, setLang, t } = useI18n();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onDark = isHome && !scrolled;
  const textCls = onDark ? "text-white/85 hover:text-white" : "text-foreground/75 hover:text-foreground";
  const activeColor = onDark ? "text-white" : "text-blue-bright";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/85 backdrop-blur-xl border-b border-border shadow-[0_1px_0_rgba(0,0,0,0.02)]" : "bg-transparent"
      }`}
    >
      <div className="container-fk flex h-20 items-center justify-between">
        <Logo light={onDark} />

        <nav className="hidden lg:flex items-center gap-10">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`text-sm font-medium transition-colors ${textCls}`}
              activeProps={{ className: `${textCls} ${activeColor}` }}
            >
              {t(l.key)}
            </Link>
          ))}
          <button
            onClick={() => {
              const next = lang === "EN" ? "SK" : "EN";
              setLang(next);
            }}
            className={`h-10 px-5 rounded-full border text-xs font-semibold tracking-wider transition-colors ${
              onDark ? "border-white/40 text-white hover:bg-white/10" : "border-foreground/20 text-foreground hover:bg-accent"
            }`}
          >
            {lang}
          </button>
        </nav>

        <button
          className={`lg:hidden p-2 ${onDark ? "text-white" : "text-foreground"}`}
          onClick={() => setOpen(!open)}
          aria-label={t("nav.menu")}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-white border-t border-border animate-fade-up">
          <nav className="container-fk flex flex-col py-6 gap-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="text-foreground/80 text-base font-medium py-2"
              >
                {t(l.key)}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
