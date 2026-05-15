import { Link } from "@tanstack/react-router";
import { useState } from "react";
import LongLogo from "@/IMG/LongLogo.svg";
import ShortLogo from "@/IMG/ShortLogo.svg";

export function Logo({ light = false }: { light?: boolean }) {
  const [longError, setLongError] = useState(false);
  const toneClass = light ? "" : "brightness-0";

  return (
    <Link to="/" className="inline-block transition-opacity hover:opacity-85">
      <div className="flex items-center">
        <img src={ShortLogo} alt="FK" className={`h-8 w-8 object-contain md:hidden ${toneClass}`} onError={() => {}} />
        {!longError ? (
          <img
            src={LongLogo}
            alt="FinKorekt"
            onError={() => setLongError(true)}
            className={`hidden md:block h-8 w-auto object-contain ${toneClass}`}
          />
        ) : (
          <span className={`hidden md:block text-lg font-semibold ${light ? "text-white" : "text-foreground"}`}>FinKorekt</span>
        )}
      </div>
    </Link>
  );
}
