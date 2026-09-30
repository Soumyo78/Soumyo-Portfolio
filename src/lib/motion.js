/**
 * Shared motion language for the whole site.
 * Every component pulls easings, durations and variants from here so the
 * site moves with one consistent rhythm.
 */

export const ease = {
  /** Smooth, confident deceleration used for most entrances */
  outExpo: [0.16, 1, 0.3, 1],
  /** Softer ease for fades and exits */
  outQuart: [0.25, 1, 0.5, 1],
  inOut: [0.65, 0, 0.35, 1],
};

export const duration = {
  fast: 0.25,
  base: 0.5,
  slow: 0.8,
  slower: 1.2,
};

export const spring = {
  /** Snappy spring for pills, toggles and small UI */
  snappy: { type: "spring", stiffness: 420, damping: 34, mass: 0.8 },
  /** Soft spring for hover lifts and tilt */
  soft: { type: "spring", stiffness: 160, damping: 20, mass: 0.6 },
  /** Bouncy pop for chips and dots */
  pop: { type: "spring", stiffness: 520, damping: 22 },
};

/** Viewport options for whileInView reveals */
export const inView = { once: true, amount: 0.25, margin: "0px 0px -8% 0px" };

/** Stagger helper: container variants that stagger their children */
export const stagger = (each = 0.08, delayChildren = 0) => ({
  hidden: {},
  show: { transition: { staggerChildren: each, delayChildren } },
});

/** Fade + rise, the default entrance */
export const fadeUp = (distance = 24) => ({
  hidden: { opacity: 0, y: distance },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: duration.slow, ease: ease.outExpo },
  },
});

/** Fade + rise + blur, used for headings and hero copy */
export const blurUp = (distance = 16) => ({
  hidden: { opacity: 0, y: distance, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: duration.slow, ease: ease.outExpo },
  },
});

export const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: duration.base, ease: ease.outQuart } },
};

/** Scale pop, used for chips and badges */
export const popIn = {
  hidden: { opacity: 0, scale: 0.6, y: 8 },
  show: { opacity: 1, scale: 1, y: 0, transition: spring.pop },
};

/** Page transition: fade / blur / slide */
export const page = {
  initial: { opacity: 0, y: 18, filter: "blur(10px)" },
  animate: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: ease.outExpo },
    // A lingering `filter` would turn the page into a containing block for
    // position:fixed children, so clear it once the entrance finishes.
    transitionEnd: { filter: "none" },
  },
  exit: {
    opacity: 0,
    y: -12,
    filter: "blur(8px)",
    transition: { duration: 0.3, ease: ease.inOut },
  },
};

/** Shared layoutId so a project image can morph from its card into the modal. */
export const imageLayoutId = (id) => `project-image-${id}`;
