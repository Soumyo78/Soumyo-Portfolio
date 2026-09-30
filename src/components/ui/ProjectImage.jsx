import { useState } from "react";
import { ImageIcon } from "lucide-react";

/**
 * Project screenshot with an on-brand fallback.
 * If the image file is missing or fails to load, an animated accent
 * gradient with the title's initial is shown instead (replaces the old
 * external Unsplash fallback).
 */
export default function ProjectImage({ src, alt, title, className = "", imgClassName = "", eager = false }) {
  const [failed, setFailed] = useState(false);

  if (failed || !src) {
    const initial = (title ?? alt ?? "?").trim().charAt(0).toUpperCase();
    return (
      <div
        role="img"
        aria-label={alt}
        className={`relative grid h-full w-full place-items-center overflow-hidden bg-[length:200%_200%] animate-placeholder ${className}`}
        style={{
          backgroundImage:
            "linear-gradient(125deg, #1d4ed8 0%, #6d28d9 35%, #0ea5e9 65%, #7c3aed 100%)",
        }}
      >
        <div aria-hidden="true" className="absolute inset-0 bg-grid opacity-40 [mask-image:none]" />
        <div aria-hidden="true" className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/15 blur-2xl" />
        <span aria-hidden="true" className="relative font-display text-6xl font-extrabold text-white/95 drop-shadow-[0_6px_24px_rgb(0_0_0/0.35)]">
          {initial}
        </span>
        <ImageIcon aria-hidden="true" size={18} className="absolute bottom-3 right-3 text-white/70" />
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      onError={() => setFailed(true)}
      className={`h-full w-full object-cover ${imgClassName} ${className}`}
    />
  );
}
