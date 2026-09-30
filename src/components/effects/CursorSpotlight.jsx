import { useEffect } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import { useFinePointer } from "../../hooks/useMedia";

/** Soft radial glow that trails the mouse. Desktop (fine pointer) only. */
export default function CursorSpotlight() {
  const fine = useFinePointer();
  const reduce = useReducedMotion();
  const enabled = fine && !reduce;

  const x = useMotionValue(-1000);
  const y = useMotionValue(-1000);
  const sx = useSpring(x, { stiffness: 120, damping: 24, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 120, damping: 24, mass: 0.6 });

  useEffect(() => {
    if (!enabled) return;
    const onMove = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [enabled, x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 -z-10 -ml-[280px] -mt-[280px] h-[560px] w-[560px] rounded-full"
      style={{
        x: sx,
        y: sy,
        background: "radial-gradient(circle at center, var(--glow), transparent 65%)",
      }}
    />
  );
}
