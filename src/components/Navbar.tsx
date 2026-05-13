import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";

const links = [
  { to: "/o-nas", label: "O nás" },
  { to: "/poistenie-pre-firmy", label: "Poistenie pre firmy" },
  { to: "/poistenie-pre-obcanov", label: "Poistenie pre občanov" },
  { to: "/kontakt", label: "Kontakt" },
] as const;

export function Navbar() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onDark = isHome && !scrolled;
  const textCls = onDark ? "text-white/85 hover:text-white" : "text-foreground/75 hover:text-foreground";

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
              activeProps={{ className: "text-blue-bright" }}
            >
              {l.label}
            </Link>
          ))}
          <button
            className={`h-10 px-5 rounded-full border text-xs font-semibold tracking-wider transition-colors ${
              onDark ? "border-white/40 text-white hover:bg-white/10" : "border-foreground/20 text-foreground hover:bg-accent"
            }`}
          >
            EN
          </button>
        </nav>

        <button
          className={`lg:hidden p-2 ${onDark ? "text-white" : "text-foreground"}`}
          onClick={() => setOpen(!open)}
          aria-label="Menu"
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
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
