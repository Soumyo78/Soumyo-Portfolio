import React, { useEffect } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Smartphone,
  Code,
  Terminal,
} from "lucide-react";
import { Helmet } from "react-helmet-async";
import SplitText from "../components/motion/SplitText";
import MagneticButton from "../components/motion/MagneticButton";
import TiltCard from "../components/motion/TiltCard";
import SpotlightCard from "../components/motion/SpotlightCard";
import { StaggerGroup, StaggerItem } from "../components/motion/StaggerGroup";
import { useFinePointer } from "../hooks/useMedia";
import { useIntroDone } from "../lib/intro";
import { scrollToTarget } from "../lib/scroll";
import { ease } from "../lib/motion";
import { asset, canonical } from "../lib/site";

export default function Home() {
  // Hero animations wait for the first-visit intro to finish
  const play = useIntroDone();

  return (
    <>
      <Helmet>
        <title>Soumyo Roy | Back-End Developer & App Creator</title>
        <meta
          name="description"
          content="Official portfolio of Soumyo Roy, a Back-End Developer specializing in Ruby on Rails, Go, React, and Android apps."
        />
        <link rel="canonical" href={canonical("/")} />
      </Helmet>

      <div className="flex min-h-screen flex-col items-center justify-center px-4 sm:px-6">
        {/* Hero Section */}
        <section
          aria-labelledby="hero-title"
          className="relative flex min-h-[100svh] w-full max-w-4xl flex-col items-center justify-center pb-20 pt-28 text-center sm:pt-32"
        >
          <HeroPortrait play={play} />

          <h1
            id="hero-title"
            className="mb-5 font-display text-display font-extrabold tracking-[-0.035em] text-fg"
          >
            <SplitText text="Hi, I'm" by="letters" play={play} />{" "}
            <SplitText
              text="Soumyo Roy"
              by="words"
              wordClassName="text-gradient pb-[0.12em]"
              delay={0.28}
              each={0.12}
              play={play}
            />
          </h1>

          <SplitText
            as="p"
            text="Back-End Developer & App Creator. Specializing in scalable architecture and crafting high-quality Android apps for Google Play."
            by="words"
            each={0.025}
            delay={0.55}
            play={play}
            className="mx-auto mb-10 block max-w-2xl text-lead text-muted"
          />

          {/* Social Links */}
          <motion.div
            className="mb-16 flex justify-center gap-4 sm:gap-6"
            initial="hidden"
            animate={play ? "show" : "hidden"}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08, delayChildren: 0.9 } } }}
          >
            <SocialIcon
              href="https://github.com/soumyo78"
              label="GitHub"
              icon={<Github size={24} />}
            />
            <SocialIcon
              href="mailto:dev.soumyo.roy@gmail.com"
              label="Email"
              icon={<Mail size={24} />}
            />
            <SocialIcon
              href="https://www.linkedin.com/in/soumyo-roy-712662176/"
              label="LinkedIn"
              icon={<Linkedin size={24} />}
            />
          </motion.div>

          <ScrollIndicator play={play} />
        </section>

        {/* Primary Focus Areas */}
        <StaggerGroup
          as="section"
          id="focus"
          aria-label="Primary focus areas"
          each={0.12}
          className="grid w-full max-w-5xl scroll-mt-28 grid-cols-1 gap-6 pb-24 md:grid-cols-3 md:gap-8"
        >
          <FocusCard
            icon={
              <Smartphone className="text-blue-500 dark:text-blue-400 w-10 h-10" />
            }
            title="Google Play Apps"
            description="Developing feature-rich utility and entertainment applications for Android, like the Bangla Hindu Calendar."
          />
          <FocusCard
            icon={
              <Terminal className="text-emerald-500 dark:text-emerald-400 w-10 h-10" />
            }
            title="Backend Architecture"
            description="Building robust, scalable server-side solutions utilizing Ruby on Rails, Go, and modern databases."
          />
          <FocusCard
            icon={
              <Code className="text-purple-500 dark:text-purple-400 w-10 h-10" />
            }
            title="Frontend & Cross-Platform"
            description="Creating seamless user interfaces using modern React, React Native, and Flutter."
          />
        </StaggerGroup>
      </div>
    </>
  );
}

/**
 * "Holo portrait": the photo as a floating portrait card instead of a circle.
 * - the card tilts in 3D toward the cursor, with depth layers behind it
 *   (two offset glass plates) drifting at a different parallax speed
 * - a light beam continuously traces the card's border
 * - a specular glare follows the pointer across the photo
 * - viewfinder corner marks draw in around the card on entrance
 * On touch devices / reduced motion the card simply floats (or stays still).
 */
function HeroPortrait({ play }) {
  const fine = useFinePointer();
  const reduce = useReducedMotion();
  const interactive = fine && !reduce;

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const springCfg = { stiffness: 110, damping: 16, mass: 0.6 };
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [9, -9]), springCfg);
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-12, 12]), springCfg);
  const plateX = useSpring(useTransform(mx, [-0.5, 0.5], [16, -16]), springCfg);
  const plateY = useSpring(useTransform(my, [-0.5, 0.5], [12, -12]), springCfg);
  const glareX = useSpring(useTransform(mx, [-0.5, 0.5], ["-30%", "30%"]), springCfg);
  const glareY = useSpring(useTransform(my, [-0.5, 0.5], ["-30%", "30%"]), springCfg);

  useEffect(() => {
    if (!interactive) return;
    const onMove = (e) => {
      mx.set(e.clientX / window.innerWidth - 0.5);
      my.set(e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [interactive, mx, my]);

  const show = play ? "show" : "hidden";

  return (
    <motion.div
      initial="hidden"
      animate={show}
      className="relative mx-auto mb-10 [perspective:1200px] sm:mb-12"
    >
      {/* Ambient glow (static, outside the tilting layer for cheap compositing) */}
      <motion.div
        aria-hidden="true"
        variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 1.4, delay: 0.3 } } }}
        className="pointer-events-none absolute -inset-12 rounded-[4rem] opacity-60 blur-3xl"
        style={{ background: "conic-gradient(from 200deg at 50% 50%, #3b82f6, #8b5cf6, #06b6d4, #3b82f6)" }}
      />

      {/* Idle float for touch devices; the tilt takes over on desktop */}
      <motion.div
        animate={!interactive && !reduce && play ? { y: [0, -8, 0] } : undefined}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <motion.div
          style={interactive ? { rotateX, rotateY, transformStyle: "preserve-3d" } : undefined}
          className="relative h-[16rem] w-[12rem] sm:h-[18rem] sm:w-[13.5rem]"
        >
          {/* Depth plates behind the card */}
          <motion.div
            aria-hidden="true"
            style={interactive ? { x: plateX, y: plateY } : undefined}
            className="absolute inset-0"
          >
            <motion.div
              variants={{ hidden: { opacity: 0, rotate: 0 }, show: { opacity: 1, rotate: -7, transition: { duration: 1.1, delay: 0.45, ease: ease.outExpo } } }}
              className="absolute inset-0 rounded-[2rem] border border-line-strong bg-surface backdrop-blur-sm"
            />
            <motion.div
              variants={{ hidden: { opacity: 0, rotate: 0 }, show: { opacity: 1, rotate: 5, transition: { duration: 1.1, delay: 0.55, ease: ease.outExpo } } }}
              className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-blue-500/25 to-violet-500/25"
            />
          </motion.div>

          {/* The card: animated beam border + photo */}
          <motion.div
            variants={{
              hidden: { opacity: 0, clipPath: "inset(100% 0% 0% 0% round 2rem)" },
              show: { opacity: 1, clipPath: "inset(0% 0% 0% 0% round 2rem)", transition: { duration: 1.1, ease: ease.outExpo } },
            }}
            style={interactive ? { translateZ: 40 } : undefined}
            className="absolute inset-0 overflow-hidden rounded-[2rem] bg-line-strong p-[2px] shadow-[0_40px_80px_-30px_rgb(0_0_0/0.6)]"
          >
            {/* Border beam: a spinning conic gradient visible only in the 2px ring */}
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 h-[160%] w-[160%] -translate-x-1/2 -translate-y-1/2 animate-spin-slow"
              style={{ background: "conic-gradient(from 0deg, transparent 0 62%, #60a5fa 78%, #c4b5fd 88%, transparent 96%)" }}
            />
            <div className="relative h-full w-full overflow-hidden rounded-[calc(2rem-2px)] bg-bg-elevated">
              <motion.img
                variants={{ hidden: { scale: 1.25 }, show: { scale: 1, transition: { duration: 1.4, ease: ease.outExpo } } }}
                src={asset("my-img-2.jpeg")}
                alt="Soumyo Roy"
                fetchPriority="high"
                decoding="async"
                className="h-full w-full object-cover"
              />
              {/* Specular glare following the pointer */}
              <motion.div
                aria-hidden="true"
                style={interactive ? { x: glareX, y: glareY } : undefined}
                className="pointer-events-none absolute -inset-1/2 bg-[radial-gradient(circle_at_center,rgb(255_255_255/0.28),transparent_38%)] mix-blend-overlay"
              />
              {/* Soft bottom fade for depth */}
              <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/35 to-transparent" />
            </div>
          </motion.div>

          {/* Viewfinder corner marks, floating in front of the card */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-4 sm:-inset-5"
            style={interactive ? { transform: "translateZ(70px)" } : undefined}
          >
            {[
              "left-0 top-0 border-l-2 border-t-2 rounded-tl-xl",
              "right-0 top-0 border-r-2 border-t-2 rounded-tr-xl",
              "bottom-0 left-0 border-b-2 border-l-2 rounded-bl-xl",
              "bottom-0 right-0 border-b-2 border-r-2 rounded-br-xl",
            ].map((pos, i) => (
              <motion.span
                key={pos}
                variants={{
                  hidden: { opacity: 0, scale: 1.6 },
                  show: { opacity: 1, scale: 1, transition: { duration: 0.7, delay: 0.7 + i * 0.06, ease: ease.outExpo } },
                }}
                className={`absolute h-7 w-7 border-accent ${pos}`}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

// Reusable micro-components for the Home page
function SocialIcon({ icon, href, label }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 16, scale: 0.8 },
        show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 400, damping: 20 } },
      }}
    >
      <MagneticButton
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className="group relative grid h-14 w-14 place-items-center rounded-full border border-line bg-surface text-muted backdrop-blur-md transition-[color,border-color,box-shadow] duration-300 hover:border-line-strong hover:text-accent hover:shadow-[0_0_32px_-4px_var(--glow),0_0_0_1px_var(--line-strong)]"
      >
        <span
          aria-hidden="true"
          className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/20 to-violet-500/20 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100"
        />
        <span className="relative">{icon}</span>
      </MagneticButton>
    </motion.div>
  );
}

/** Animated mouse icon that scrolls down to the focus cards. */
function ScrollIndicator({ play }) {
  return (
    <motion.button
      type="button"
      aria-label="Scroll to focus areas"
      onClick={() => scrollToTarget("#focus", -110)}
      initial={{ opacity: 0 }}
      animate={play ? { opacity: 1 } : { opacity: 0 }}
      transition={{ delay: 1.3, duration: 0.8 }}
      className="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full p-2 text-subtle transition-colors hover:text-fg"
    >
      <span className="flex h-9 w-6 justify-center rounded-full border-2 border-current pt-1.5">
        <motion.span
          className="block h-2 w-1 rounded-full bg-current"
          animate={{ y: [0, 10, 0], opacity: [1, 0.2, 1] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        />
      </span>
    </motion.button>
  );
}

function FocusCard({ icon, title, description }) {
  return (
    <StaggerItem variant="blurUp" className="h-full">
      <TiltCard max={6}>
        <SpotlightCard className="group h-full overflow-hidden rounded-3xl border border-line bg-surface p-8 backdrop-blur-md transition-shadow duration-500 hover:shadow-[0_24px_60px_-24px_var(--glow)]">
          <div className="relative z-10">
            <span className="mb-5 inline-grid h-16 w-16 place-items-center rounded-2xl border border-line bg-bg-elevated/70 transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:-translate-y-1 group-hover:-rotate-6 group-hover:scale-110">
              {icon}
            </span>
            <h2 className="mb-3 font-display text-xl font-bold text-fg">
              {title}
            </h2>
            <p className="leading-relaxed text-muted">
              {description}
            </p>
          </div>
        </SpotlightCard>
      </TiltCard>
    </StaggerItem>
  );
}
