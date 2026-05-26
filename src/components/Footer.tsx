import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Mail } from "lucide-react";
import { Logo } from "./Logo";
import { useI18n } from "@/lib/i18n";
import RespectLogo from "@/IMG/RespectLogo.svg";
import { contact } from "@/lib/site-data";

export function Footer() {
  const { t } = useI18n();
  return (
    <footer className="bg-navy-deep text-white/80">
      <div className="container-fk py-20 grid gap-12 md:grid-cols-3">
        <div>
          <Logo light />
          <p className="mt-6 text-sm leading-relaxed text-white/65 max-w-xs">{t("footer.description")}</p>
          <ul className="mt-8 space-y-3 text-sm">
            <li className="flex items-start gap-3"><MapPin size={16} className="mt-0.5 text-blue-soft" /><span>{contact.address}</span></li>
            <li className="flex items-start gap-3"><Phone size={16} className="mt-0.5 text-blue-soft" /><a href={`tel:${contact.phone.replace(/\s+/g, "")}`}>{contact.phone}</a></li>
            <li className="flex items-start gap-3"><Mail size={16} className="mt-0.5 text-blue-soft" /><a href={`mailto:${contact.email}`}>{contact.email}</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.22em] text-white/55 font-sans font-medium">{t("nav.menu")}</h4>
          <ul className="mt-6 space-y-3 text-sm">
            <li><Link to="/o-nas" className="hover:text-white">{t("nav.about")}</Link></li>
            <li><Link to="/poistenie-pre-firmy" className="hover:text-white">{t("nav.forBusinesses")}</Link></li>
            <li><Link to="/poistenie-pre-obcanov" className="hover:text-white">{t("nav.forIndividuals")}</Link></li>
            <li><Link to="/kontakt" className="hover:text-white">{t("nav.contact")}</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.22em] text-white/55 font-sans font-medium">{t("footer.hours")}</h4>
          <p className="mt-6 text-sm">{t("footer.hours")}</p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-fk py-8 flex flex-col md:flex-row gap-6 items-center justify-between">
          <span className="text-xs text-white/60">© {new Date().getFullYear()} FinKorekt {t("footer.copyright")}</span>
          <div className="flex items-center gap-2 text-xs text-white/60">
            <span>Partner of</span>
            <img src={RespectLogo} alt="Respect" className="h-4 w-auto object-contain" />
          </div>
        </div>
      </div>
    </footer>
  );
}
