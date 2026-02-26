import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Play } from "lucide-react";

export default function Card({ data }) {
  const { title, description, image, tags, links } = data;

  const renderIcon = (type) => {
    if (type === "playstore") return <Play size={16} />;
    if (type === "github") return <Github size={16} />;
    return <ExternalLink size={16} />;
  };

  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="group flex flex-col bg-slate-50 dark:bg-slate-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-blue-500/10 border border-slate-200 dark:border-slate-700 transition-all duration-300 h-full relative"
    >
      {/* Decorative gradient blur that appears on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div className="h-48 bg-slate-100 dark:bg-slate-900 relative overflow-hidden flex-shrink-0">
        <img
          src={image}
          alt={title}
          onError={(e) => {
            e.target.src =
              "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800";
          }} // Fallback image if local asset fails
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>

      <div className="p-6 flex flex-col flex-grow relative z-10">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
          {title}
        </h3>
        <p className="text-slate-600 dark:text-slate-400 mb-6 flex-grow leading-relaxed text-sm">
          {description}
        </p>

        {tags && (
          <div className="flex flex-wrap gap-2 mb-6">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-semibold rounded-full border border-blue-100 dark:border-blue-800/50"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {links && links.length > 0 && (
          <div className="flex flex-wrap gap-3 mt-auto pt-4 border-t border-slate-100 dark:border-slate-700">
            {links.map((link, idx) => (
              <a
                key={idx}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  link.type === "playstore"
                    ? "bg-emerald-600 text-white hover:bg-emerald-700"
                    : "bg-slate-900 dark:bg-slate-700 text-white hover:bg-slate-800 dark:hover:bg-slate-600"
                }`}
              >
                {renderIcon(link.type)}
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}
