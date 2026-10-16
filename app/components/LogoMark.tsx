"use client";

import { useState } from "react";

export function LogoMark({ footer = false }: { footer?: boolean }) {
  const [imageError, setImageError] = useState(false);

  return (
    <span className={footer ? "footer-logo-image" : "logo-image-wrap"}>
      {!imageError ? (
        <img
          src="/favicon-logo.png"
          alt="Sawant & Associates logo"
          onError={() => setImageError(true)}
        />
      ) : (
        <span className="logo-fallback">WS</span>
      )}
    </span>
  );
}
