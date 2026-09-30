import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { introAlreadySeen, markIntroDone } from "../../lib/intro";
import { lockScroll, unlockScroll } from "../../lib/scroll";
import { ease } from "../../lib/motion";

const NAME = "Soumyo Roy";
const VISIBLE_MS = 1050; // + ~450ms exit = 1.5s total

/**
 * First-visit intro (once per browser session). Skippable by click,
 * any key, or the skip button.
 */
export default function Preloader() {
  const [show, setShow] = useState(() => !introAlreadySeen());

  useEffect(() => {
    if (!show) return;
    lockScroll();
    const hide = () => setShow(false);
    const timer = setTimeout(hide, VISIBLE_MS);
    window.addEventListener("keydown", hide);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("keydown", hide);
      unlockScroll();
    };
  }, [show]);

  return (
    <AnimatePresence onExitComplete={markIntroDone}>
      {show && (
        <motion.div
          key="preloader"
          role="presentation"
          onClick={() => setShow(false)}
          className="fixed inset-0 z-[100] flex cursor-pointer flex-col items-center justify-center gap-5 bg-bg"
          exit={{ opacity: 0, filter: "blur(12px)", scale: 1.04 }}
          transition={{ duration: 0.45, ease: ease.inOut }}
        >
          <button
            type="button"
            aria-label="Skip intro"
            onClick={() => setShow(false)}
            className="absolute right-5 top-5 rounded-full border border-line p-2 text-subtle transition-colors hover:text-fg"
          >
            <X size={16} />
          </button>

          <motion.div
            initial={{ opacity: 0, scale: 0.7, rotate: -8 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
            className="relative h-20 w-20 overflow-hidden rounded-3xl border border-line-strong shadow-[0_0_60px_var(--glow)]"
          >
            <img
              src={`${import.meta.env.BASE_URL}assets/logo-1.png`}
              alt=""
              decoding="async"
              fetchPriority="low"
              className="h-full w-full object-cover"
            />
          </motion.div>

          <p className="font-display text-2xl font-bold tracking-tight text-fg" aria-label={NAME}>
            {Array.from(NAME).map((ch, i) => (
              <motion.span
                key={i}
                aria-hidden="true"
                className="inline-block"
                initial={{ opacity: 0, y: 14, filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ delay: 0.15 + i * 0.035, duration: 0.5, ease: ease.outExpo }}
              >
                {ch === " " ? " " : ch}
              </motion.span>
            ))}
          </p>

          <div className="h-px w-40 overflow-hidden rounded-full bg-line">
            <motion.div
              className="h-full origin-left"
              style={{ backgroundImage: "var(--gradient-accent)" }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: VISIBLE_MS / 1000, ease: ease.inOut }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
