import { Link } from "@tanstack/react-router";
import { useState } from "react";
import LongLogo from "@/IMG/LongLogo.svg";

export function Logo({ light = false }: { light?: boolean }) {
  const [longError, setLongError] = useState(false);

  return (
    <Link to="/" className="inline-block transition-opacity hover:opacity-85">
      {!longError ? (
        <img
          src={LongLogo}
          alt="FinKorekt"
          onError={() => setLongError(true)}
          className="h-8 w-auto object-contain"
        />
      ) : (
        <span className={`block text-lg font-semibold ${light ? "text-white" : "text-foreground"}`}>FinKorekt</span>
      )}
    </Link>
  );
}
