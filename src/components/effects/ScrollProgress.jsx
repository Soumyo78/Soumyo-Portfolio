import { motion, useScroll, useSpring } from "framer-motion";

/** Thin gradient reading-progress bar pinned to the top of the viewport. */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30, restDelta: 0.001 });

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX, backgroundImage: "var(--gradient-accent)" }}
      className="fixed inset-x-0 top-0 z-[70] h-[2px] origin-left"
    />
  );
}
