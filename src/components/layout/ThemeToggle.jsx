import { useId } from "react";
import { motion } from "framer-motion";
import { spring } from "../../lib/motion";

const RAYS = [
  [12, 1, 12, 3], [12, 21, 12, 23], [1, 12, 3, 12], [21, 12, 23, 12],
  [4.22, 4.22, 5.64, 5.64], [18.36, 18.36, 19.78, 19.78],
  [4.22, 19.78, 5.64, 18.36], [18.36, 5.64, 19.78, 4.22],
];

/**
 * Sun / moon toggle. The icon morphs: a masking circle slides over the
 * sun to carve a crescent while the rays rotate and shrink away.
 * Like before, dark mode shows the sun (switch to light) and vice versa.
 */
export default function ThemeToggle({ theme, onToggle }) {
  const maskId = useId();
  const moon = theme !== "dark";
  const label = theme === "dark" ? "Switch to light mode" : "Switch to dark mode";

  return (
    <motion.button
      type="button"
      onClick={onToggle}
      aria-label={label}
      title={label}
      whileTap={{ scale: 0.88 }}
      className="relative grid h-10 w-10 place-items-center rounded-full border border-line bg-surface text-muted transition-colors hover:border-line-strong hover:text-fg"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
        <mask id={maskId}>
          <rect width="24" height="24" fill="white" />
          <motion.circle
            r="7"
            fill="black"
            initial={false}
            animate={{ cx: moon ? 17 : 32, cy: moon ? 6 : -6 }}
            transition={spring.snappy}
          />
        </mask>
        <motion.circle
          cx="12"
          cy="12"
          fill="currentColor"
          mask={`url(#${maskId})`}
          initial={false}
          animate={{ r: moon ? 8.5 : 5 }}
          transition={spring.snappy}
        />
        <motion.g
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          initial={false}
          animate={{ opacity: moon ? 0 : 1, scale: moon ? 0.4 : 1, rotate: moon ? -90 : 0 }}
          transition={spring.snappy}
          style={{ transformOrigin: "12px 12px", transformBox: "view-box" }}
        >
          {RAYS.map(([x1, y1, x2, y2], i) => (
            <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />
          ))}
        </motion.g>
      </svg>
    </motion.button>
  );
}
