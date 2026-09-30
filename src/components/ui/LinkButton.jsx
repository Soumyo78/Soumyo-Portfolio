import { ExternalLink, Github, Play } from "lucide-react";

const renderIcon = (type) => {
  if (type === "playstore") return <Play size={16} aria-hidden="true" />;
  if (type === "github") return <Github size={16} aria-hidden="true" />;
  return <ExternalLink size={16} aria-hidden="true" />;
};

/** Project link button (Play Store / GitHub / web) with a shine sweep on hover. */
export default function LinkButton({ link }) {
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`shine pointer-events-auto relative z-[3] flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-[background-color,transform,box-shadow] duration-300 hover:-translate-y-0.5 ${
        link.type === "playstore"
          ? "bg-emerald-600 text-white hover:bg-emerald-700 hover:shadow-[0_10px_24px_-10px_rgb(16_185_129/0.8)]"
          : "bg-slate-900 dark:bg-slate-700 text-white hover:bg-slate-800 dark:hover:bg-slate-600 hover:shadow-[0_10px_24px_-10px_var(--glow)]"
      }`}
    >
      {renderIcon(link.type)}
      {link.label}
    </a>
  );
}
