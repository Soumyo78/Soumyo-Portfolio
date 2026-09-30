import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import ProjectImage from "./ProjectImage";
import LinkButton from "./LinkButton";
import { TagList } from "./Card";
import { lockScroll, unlockScroll } from "../../lib/scroll";
import { ease, imageLayoutId } from "../../lib/motion";

const FOCUSABLE =
  'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

/**
 * Detail view for a project: the card image morphs into the modal via a
 * shared layoutId. Shows only the card's own data (image, title,
 * description, tags, links).
 * Closes on Esc, backdrop click or the close button; locks page scroll;
 * traps focus and restores it to the card on close.
 */
export default function ProjectModal({ project, onClose }) {
  const panelRef = useRef(null);
  const closeRef = useRef(null);
  const { id, title, description, image, tags, links } = project;
  const titleId = `modal-title-${id}`;

  useEffect(() => {
    const previouslyFocused = document.activeElement;
    lockScroll();
    closeRef.current?.focus({ preventScroll: true });

    const onKey = (e) => {
      if (e.key === "Escape") {
        e.stopPropagation();
        onClose();
        return;
      }
      if (e.key !== "Tab" || !panelRef.current) return;
      const nodes = [...panelRef.current.querySelectorAll(FOCUSABLE)];
      if (!nodes.length) return;
      const first = nodes[0];
      const last = nodes[nodes.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      } else if (!panelRef.current.contains(document.activeElement)) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);

    return () => {
      document.removeEventListener("keydown", onKey);
      unlockScroll();
      previouslyFocused?.focus?.({ preventScroll: true });
    };
  }, [onClose]);

  return createPortal(
    <div className="fixed inset-0 z-[60] grid place-items-center p-3 sm:p-6">
      <motion.div
        aria-hidden="true"
        onClick={onClose}
        className="absolute inset-0 bg-bg/70 backdrop-blur-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      />

      <motion.div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        data-lenis-prevent
        className="gradient-border relative max-h-[92svh] w-full max-w-3xl overflow-y-auto overscroll-contain rounded-3xl bg-surface-strong shadow-[0_40px_120px_-30px_rgb(0_0_0/0.6)] backdrop-blur-2xl"
        // Only opacity here: the panel must not be transformed while the
        // shared image measures its target box.
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.2, delay: 0.1 } }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          layoutId={imageLayoutId(id)}
          transition={{ type: "spring", stiffness: 260, damping: 30 }}
          className="relative aspect-[16/9] w-full overflow-hidden bg-bg-elevated"
        >
          <ProjectImage src={image} alt={title} title={title} eager />
        </motion.div>

        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-3 top-3 z-10 grid h-10 w-10 place-items-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur-md transition-[background-color,transform] hover:rotate-90 hover:bg-black/60"
        >
          <X size={18} />
        </button>

        <motion.div
          className="p-6 sm:p-8"
          initial="hidden"
          animate="show"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.07, delayChildren: 0.15 } } }}
        >
          <motion.h2
            id={titleId}
            variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: ease.outExpo } } }}
            className="mb-3 text-2xl font-bold text-fg sm:text-3xl"
          >
            {title}
          </motion.h2>
          <motion.p
            variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: ease.outExpo } } }}
            className="mb-6 leading-relaxed text-muted"
          >
            {description}
          </motion.p>
          {tags && <TagList tags={tags} animateOnMount />}
          {links && links.length > 0 && (
            <div className="flex flex-wrap gap-3 border-t border-line pt-5">
              {links.map((link, idx) => (
                <LinkButton key={idx} link={link} />
              ))}
            </div>
          )}
        </motion.div>
      </motion.div>
    </div>,
    document.body,
  );
}
