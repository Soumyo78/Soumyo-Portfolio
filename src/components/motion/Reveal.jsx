import { motion } from "framer-motion";
import { fadeUp, blurUp, fadeIn, inView } from "../../lib/motion";

const variantsByName = { fadeUp: fadeUp(), blurUp: blurUp(), fadeIn };

/**
 * Reveals its children once when scrolled into view (or on mount).
 * <Reveal variant="blurUp" delay={0.1}>...</Reveal>
 */
export default function Reveal({
  as = "div",
  variant = "fadeUp",
  delay = 0,
  onMount = false,
  className,
  children,
  ...rest
}) {
  const Component = motion[as] ?? motion.div;
  const variants = variantsByName[variant] ?? variantsByName.fadeUp;
  const trigger = onMount
    ? { animate: "show" }
    : { whileInView: "show", viewport: inView };

  return (
    <Component
      className={className}
      variants={variants}
      initial="hidden"
      transition={{ delay }}
      {...trigger}
      {...rest}
    >
      {children}
    </Component>
  );
}
