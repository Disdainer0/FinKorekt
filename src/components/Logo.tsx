import { Link } from "@tanstack/react-router";
import { useState } from "react";

export function Logo({ light = false }: { light?: boolean }) {
  const text = light ? "text-white" : "text-foreground";
  const sub = light ? "text-white/60" : "text-muted-foreground";
  const ring = light ? "border-white/40 text-white" : "border-foreground/30 text-foreground";
  const [imgError, setImgError] = useState(false);

  return (
    <Link to="/" className="flex items-center gap-3">
      {!imgError ? (
        // try to render a brand svg at /logo.svg (GitHub Pages will serve from repo root /FinKorekt/)
        <img
          src="/logo.svg"
          alt="FinKorekt"
          onError={() => setImgError(true)}
          className={`h-11 w-11 rounded-full border object-contain ${ring}`}
        />
      ) : (
        <span className={`flex h-11 w-11 items-center justify-center rounded-full border ${ring} text-[13px] font-semibold tracking-wider`}>
          FK
        </span>
      )}

      <span className="leading-tight">
        <span className={`block font-serif text-xl ${text}`}>
          Fin<span className="text-blue-bright">Korekt</span>
        </span>
        <span className={`block text-[10px] uppercase tracking-[0.22em] ${sub}`}>
          partner of Respect
        </span>
      </span>
    </Link>
  );
}
