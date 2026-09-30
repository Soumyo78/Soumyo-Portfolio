import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "framer-motion";
import { useFinePointer } from "../../hooks/useMedia";

/**
 * Subtle 3D tilt that follows the cursor. Disabled on touch devices and
 * for reduced motion. The tilt snaps back on pointer down so shared-layout
 * animations (e.g. card -> modal) measure an untransformed card.
 */
export default function TiltCard({ max = 7, className, children, ...rest }) {
  const ref = useRef(null);
  const fine = useFinePointer();
  const reduce = useReducedMotion();
  const enabled = fine && !reduce;

  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(py, [0, 1], [max, -max]), { stiffness: 180, damping: 18 });
  const rotateY = useSpring(useTransform(px, [0, 1], [-max, max]), { stiffness: 180, damping: 18 });

  const onPointerMove = (e) => {
    if (!enabled || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    px.set((e.clientX - r.left) / r.width);
    py.set((e.clientY - r.top) / r.height);
  };
  const reset = () => {
    px.set(0.5);
    py.set(0.5);
  };
  const snap = () => {
    reset();
    rotateX.jump(0);
    rotateY.jump(0);
  };

  return (
    <div className="h-full [perspective:1100px]">
      <motion.div
        ref={ref}
        onPointerMove={onPointerMove}
        onPointerLeave={reset}
        onPointerDown={snap}
        style={enabled ? { rotateX, rotateY, transformStyle: "preserve-3d" } : undefined}
        className={`h-full ${className ?? ""}`}
        {...rest}
      >
        {children}
      </motion.div>
    </div>
  );
}
