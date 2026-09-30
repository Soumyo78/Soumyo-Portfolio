import React from "react";
import { motion } from "framer-motion";
import TiltCard from "../motion/TiltCard";
import SpotlightCard from "../motion/SpotlightCard";
import ProjectImage from "./ProjectImage";
import LinkButton from "./LinkButton";
import { ease, imageLayoutId, spring } from "../../lib/motion";

/**
 * Project / app card.
 * - variant "default": screenshot header (Portfolio)
 * - variant "phone":   screenshot inside a phone frame (Play Store page)
 * Passing `onOpen` makes the whole card open a detail view; the link
 * buttons stay independently clickable above the card's hit area.
 */
export default function Card({ data, onOpen, variant = "default" }) {
  const { id, title, description, image, tags, links } = data;

  return (
    // One viewport trigger per card; the image reveal and tags inherit it
    // through variants (a clip-path'd element can't reliably observe itself).
    <motion.div
      className="h-full"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
    >
    <TiltCard max={variant === "phone" ? 6 : 5}>
      <SpotlightCard className="group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-surface backdrop-blur-md transition-[box-shadow,border-color] duration-500 hover:border-line-strong hover:shadow-[0_30px_70px_-30px_var(--glow)]">
        {onOpen && (
          <button
            type="button"
            onClick={onOpen}
            aria-haspopup="dialog"
            aria-label={title}
            className="absolute inset-0 z-[1] cursor-pointer rounded-[inherit]"
          />
        )}

        {variant === "phone" ? (
          <PhoneFrame id={id} image={image} title={title} />
        ) : (
          <motion.div
            layoutId={onOpen ? imageLayoutId(id) : undefined}
            className="relative h-48 flex-shrink-0 overflow-hidden bg-bg-elevated"
          >
            <motion.div
              className="h-full w-full"
              variants={{
                hidden: { clipPath: "inset(0% 0% 100% 0%)", scale: 1.15 },
                show: { clipPath: "inset(0% 0% 0% 0%)", scale: 1, transition: { duration: 0.9, ease: ease.outExpo } },
              }}
            >
              <ProjectImage
                src={image}
                alt={title}
                title={title}
                className="transition-transform duration-700 ease-out group-hover:scale-110"
              />
            </motion.div>
            <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/25 to-transparent" />
          </motion.div>
        )}

        <div className="pointer-events-none relative z-[2] flex flex-grow flex-col p-6">
          <h2 className="mb-2 font-display text-xl font-bold text-fg">
            {title}
          </h2>
          <p className="mb-6 flex-grow text-sm leading-relaxed text-muted">
            {description}
          </p>

          {tags && <TagList tags={tags} />}

          {links && links.length > 0 && (
            <div className="mt-auto flex flex-wrap gap-3 border-t border-line pt-4">
              {links.map((link, idx) => (
                <LinkButton key={idx} link={link} />
              ))}
            </div>
          )}
        </div>
      </SpotlightCard>
    </TiltCard>
    </motion.div>
  );
}

/**
 * Tag chips that pop in one after another. Inside a card they follow the
 * card's reveal; with `animateOnMount` (modal) they start by themselves.
 */
export function TagList({ tags, className = "mb-6", animateOnMount = false }) {
  const trigger = animateOnMount ? { initial: "hidden", animate: "show" } : {};
  return (
    <motion.ul
      className={`flex flex-wrap gap-2 ${className}`}
      {...trigger}
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06, delayChildren: 0.15 } } }}
    >
      {tags.map((tag) => (
        <motion.li
          key={tag}
          variants={{ hidden: { opacity: 0, scale: 0.7, y: 6 }, show: { opacity: 1, scale: 1, y: 0, transition: spring.pop } }}
          className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 dark:border-blue-800/50 dark:bg-blue-900/30 dark:text-blue-300"
        >
          {tag}
        </motion.li>
      ))}
    </motion.ul>
  );
}

/** Screenshot presented inside a stylised phone (decorative frame). */
function PhoneFrame({ image, title }) {
  return (
    <div className="relative flex justify-center overflow-hidden px-6 pt-8">
      {/* soft glow behind the device */}
      <div aria-hidden="true" className="absolute left-1/2 top-10 h-48 w-48 -translate-x-1/2 rounded-full bg-gradient-to-br from-blue-500/30 to-violet-500/30 blur-3xl transition-opacity duration-500 group-hover:opacity-100 opacity-70" />
      <motion.div
        variants={{
          hidden: { y: 40, opacity: 0 },
          show: { y: 0, opacity: 1, transition: { duration: 0.9, ease: ease.outExpo } },
        }}
        className="relative"
      >
        <div className="relative h-[21rem] w-[10.5rem] rounded-[2.2rem] border-[7px] border-slate-900 bg-slate-950 shadow-[0_30px_60px_-20px_rgb(0_0_0/0.55)] ring-1 ring-line-strong transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-2 group-hover:-rotate-2 dark:border-slate-800">
          {/* side buttons */}
          <span aria-hidden="true" className="absolute -left-[10px] top-20 h-10 w-[3px] rounded-l bg-slate-700" />
          <span aria-hidden="true" className="absolute -right-[10px] top-24 h-14 w-[3px] rounded-r bg-slate-700" />
          <div className="relative h-full w-full overflow-hidden rounded-[1.7rem]">
            <ProjectImage
              src={image}
              alt={title}
              title={title}
              className="transition-transform duration-700 ease-out group-hover:scale-105"
            />
            {/* dynamic-island notch */}
            <span aria-hidden="true" className="absolute left-1/2 top-2 h-4 w-14 -translate-x-1/2 rounded-full bg-black" />
            {/* glass reflection */}
            <span aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/20" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
