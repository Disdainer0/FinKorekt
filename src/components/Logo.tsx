import { Link } from "@tanstack/react-router";
import { useState } from "react";
import LongLogo from "@/IMG/LongLogo.svg";
import ShortLogo from "@/IMG/ShortLogo.svg";
import RespectLogo from "@/IMG/RespectLogo.svg";

export function Logo({ light = false }: { light?: boolean }) {
  const ring = light ? "border-white/40" : "border-foreground/30";
  const supportBg = light ? "" : "bg-navy-deep px-2 py-1 rounded-md";
  const [shortError, setShortError] = useState(false);
  const [longError, setLongError] = useState(false);
  const [respectError, setRespectError] = useState(false);

  return (
    <Link to="/" className="flex items-center gap-3 min-w-0">
      {!shortError ? (
        <span className={`flex h-11 w-11 items-center justify-center rounded-full border ${ring}`}>
          <img
            src={ShortLogo}
            alt="FinKorekt"
            onError={() => setShortError(true)}
            className="h-7 w-7 object-contain"
          />
        </span>
      ) : (
        <span className={`flex h-11 w-11 items-center justify-center rounded-full border ${ring} text-[13px] font-semibold tracking-wider ${light ? "text-white" : "text-foreground"}`}>
          FK
        </span>
      )}

      <span className="flex min-w-0 flex-col gap-1">
        {!longError ? (
          <img
            src={LongLogo}
            alt="FinKorekt"
            onError={() => setLongError(true)}
            className={`h-7 w-auto max-w-[180px] object-contain ${supportBg}`}
          />
        ) : (
          <span className={`block text-lg font-semibold ${light ? "text-white" : "text-foreground"}`}>FinKorekt</span>
        )}

        {!respectError ? (
          <img
            src={RespectLogo}
            alt="Respect"
            onError={() => setRespectError(true)}
            className={`h-3 w-auto max-w-[120px] object-contain ${supportBg}`}
          />
        ) : (
          <span className={`block text-[10px] uppercase tracking-[0.22em] ${light ? "text-white/70" : "text-muted-foreground"}`}>Respect</span>
        )}
      </span>
    </Link>
  );
}
