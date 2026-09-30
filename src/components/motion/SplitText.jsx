import { motion } from "framer-motion";
import { ease, inView } from "../../lib/motion";

const unit = {
  hidden: { opacity: 0, y: "0.45em", filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: "0em",
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: ease.outExpo },
  },
};

/**
 * Splits text into words or letters and reveals them with a stagger.
 * Screen readers get the untouched text once (sr-only); the animated
 * pieces are aria-hidden, so the content is read exactly as written.
 *
 * props:
 *  - text:          the exact string to render
 *  - by:            "words" | "letters"
 *  - wordClassName: classes applied to every word (e.g. text-gradient)
 *  - onMount:       animate on mount instead of when scrolled into view
 *  - play:          with onMount, hold the hidden state until true
 */
export default function SplitText({
  text,
  by = "words",
  as = "span",
  className,
  wordClassName = "",
  delay = 0,
  each = by === "letters" ? 0.035 : 0.06,
  onMount = true,
  play = true,
}) {
  const Tag = as;
  const words = text.split(" ");
  const trigger = onMount
    ? { animate: play ? "show" : "hidden" }
    : { whileInView: "show", viewport: inView };

  return (
    <Tag className={className}>
      <span className="sr-only">{text}</span>
      <motion.span
        aria-hidden="true"
        initial="hidden"
        {...trigger}
        variants={{ hidden: {}, show: { transition: { staggerChildren: each, delayChildren: delay } } }}
      >
        {words.map((word, wi) => (
          <span key={wi}>
            {by === "words" ? (
              <motion.span variants={unit} className={`inline-block will-change-transform ${wordClassName}`}>
                {word}
              </motion.span>
            ) : (
              <span className={`inline-block whitespace-nowrap ${wordClassName}`}>
                {Array.from(word).map((ch, ci) => (
                  <motion.span key={ci} variants={unit} className="inline-block">
                    {ch}
                  </motion.span>
                ))}
              </span>
            )}
            {wi < words.length - 1 ? " " : null}
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}
