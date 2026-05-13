import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Mail } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-navy-deep text-white/80">
      <div className="container-fk py-20 grid gap-12 md:grid-cols-3">
        <div>
          <Logo light />
          <p className="mt-6 text-sm leading-relaxed text-white/65 max-w-xs">
            Nezávislé poistné poradenstvo s ľudským prístupom. Partner of Respect Slovakia.
          </p>
          <ul className="mt-8 space-y-3 text-sm">
            <li className="flex items-start gap-3"><MapPin size={16} className="mt-0.5 text-blue-soft" /><span>[ADDRESS]</span></li>
            <li className="flex items-start gap-3"><Phone size={16} className="mt-0.5 text-blue-soft" /><a href="tel:[PHONE]">[PHONE]</a></li>
            <li className="flex items-start gap-3"><Mail size={16} className="mt-0.5 text-blue-soft" /><a href="mailto:[EMAIL]">[EMAIL]</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.22em] text-white/55 font-sans font-medium">Menu</h4>
          <ul className="mt-6 space-y-3 text-sm">
            <li><Link to="/o-nas" className="hover:text-white">O nás</Link></li>
            <li><Link to="/poistenie-pre-firmy" className="hover:text-white">Poistenie pre firmy</Link></li>
            <li><Link to="/poistenie-pre-obcanov" className="hover:text-white">Poistenie pre občanov</Link></li>
            <li><Link to="/kontakt" className="hover:text-white">Kontakt</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.22em] text-white/55 font-sans font-medium">Pracovné hodiny</h4>
          <p className="mt-6 text-sm">Po – Pia: 8:00 – 17:00</p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-fk py-6 flex flex-col md:flex-row gap-2 items-center justify-between text-xs text-white/50">
          <span>© {new Date().getFullYear()} FinKorekt. Všetky práva vyhradené.</span>
          <span>Partner of Respect Slovakia</span>
        </div>
      </div>
    </footer>
  );
}
