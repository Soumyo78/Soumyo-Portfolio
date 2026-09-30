import { motion } from "framer-motion";
import { stagger, fadeUp, blurUp, popIn, fadeIn, inView } from "../../lib/motion";

const itemVariants = { fadeUp: fadeUp(), blurUp: blurUp(), popIn, fadeIn };

/**
 * Staggers the entrance of its <StaggerItem> children.
 * Plays when scrolled into view unless `onMount` is set.
 */
export function StaggerGroup({
  as = "div",
  each = 0.08,
  delay = 0,
  onMount = false,
  className,
  children,
  ...rest
}) {
  const Component = motion[as] ?? motion.div;
  const trigger = onMount
    ? { animate: "show" }
    : { whileInView: "show", viewport: inView };
  return (
    <Component
      className={className}
      variants={stagger(each, delay)}
      initial="hidden"
      {...trigger}
      {...rest}
    >
      {children}
    </Component>
  );
}

/** A child of <StaggerGroup>; inherits the group's timing. */
export function StaggerItem({ as = "div", variant = "fadeUp", className, children, ...rest }) {
  const Component = motion[as] ?? motion.div;
  return (
    <Component className={className} variants={itemVariants[variant] ?? itemVariants.fadeUp} {...rest}>
      {children}
    </Component>
  );
}

export default StaggerGroup;
