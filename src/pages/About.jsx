import React, { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  Briefcase,
  GraduationCap,
  Code2,
  MonitorCheck,
  MapPin,
  ArrowUpRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { StaggerGroup, StaggerItem } from "../components/motion/StaggerGroup";
import Reveal from "../components/motion/Reveal";
import { portfolioData } from "../data/projects";
import { ease, spring } from "../lib/motion";
import { asset, canonical } from "../lib/site";

/**
 * Proficiency tiers used instead of percentage bars.
 * Expert: production-level depth; Proficient: regular, confident use;
 * Familiar: working knowledge that is still growing.
 */
const TIERS = {
  expert: {
    label: "Expert",
    level: 3,
    tone: "border-emerald-300/60 bg-emerald-50 text-emerald-700 dark:border-emerald-700/50 dark:bg-emerald-900/25 dark:text-emerald-300",
  },
  proficient: {
    label: "Proficient",
    level: 2,
    tone: "border-blue-200/70 bg-blue-50 text-blue-700 dark:border-blue-800/50 dark:bg-blue-900/25 dark:text-blue-300",
  },
  familiar: {
    label: "Familiar",
    level: 1,
    tone: "border-line-strong bg-surface text-muted",
  },
};

// Every claim below comes from the Experience / Education entries or the
// project data already on this site.
const CODING_SKILLS = [
  {
    name: "Ruby on Rails",
    tier: "expert",
    since: "Professional since 2021",
    context: "Server-side logic and REST APIs in production at Alien Brains, tested with RSpec and backed by PostgreSQL on Heroku.",
  },
  {
    name: "React JS",
    tier: "proficient",
    since: "Since 2020",
    context: `${portfolioData.react.length} React projects in my portfolio, including Chobi, a browser-based photo editor.`,
    link: { to: "/portfolio?tab=react", label: "See React projects" },
  },
  {
    name: "JavaScript",
    tier: "proficient",
    context: "The language behind all of my React and front-end work.",
  },
  {
    name: "CSS / SCSS",
    tier: "proficient",
    context: "Styling and responsive layouts across my web projects.",
  },
  {
    name: "React Native",
    tier: "familiar",
    context: "Used for the Bangla Hindu Calendar Android app, and an area I am actively expanding.",
    link: { to: "/apps", label: "See my apps" },
  },
];

const DESIGN_SKILLS = [
  {
    name: "Database Designing",
    tier: "expert",
    since: "Professional since 2021",
    context: "Database architecture for production applications at Alien Brains, built on PostgreSQL.",
  },
  {
    name: "Web Designing",
    tier: "proficient",
    context: "Interfaces for the full-stack and React projects in my portfolio.",
    link: { to: "/portfolio", label: "See the portfolio" },
  },
];

/** Existing logo files used by the auto-scrolling marquee. */
const MARQUEE_LOGOS = [
  { file: "git-logo.png", name: "Git" },
  { file: "github-logo.png", name: "GitHub" },
  { file: "gitlab-logo.png", name: "GitLab" },
  { file: "docker-logo.png", name: "Docker" },
  { file: "jira-logo.jpg", name: "Jira" },
  { file: "confluence-logo.png", name: "Confluence" },
  { file: "redux-logo.png", name: "Redux" },
  { file: "bootstrap-logo.png", name: "Bootstrap" },
  { file: "html-logo.png", name: "HTML5" },
  { file: "css-logo.png", name: "CSS" },
  { file: "sass-logo.png", name: "Sass" },
  { file: "javascript-logo.png", name: "JavaScript" },
  { file: "react-logo.png", name: "React" },
];

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Soumyo Roy | Experience & Education</title>
        <meta
          name="description"
          content="Learn about Soumyo Roy's background, education, skills, and professional experience as a full-stack and back-end developer."
        />
        <link rel="canonical" href={canonical("/about")} />
      </Helmet>

      <div className="mx-auto min-h-screen max-w-5xl px-4 pb-24 pt-28 sm:px-6 sm:pt-32">
        {/* Profile & Intro Section */}
        <ProfileCard />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-14">
          {/* Left Column: Experience & Education */}
          <div className="space-y-14">
            <section aria-labelledby="experience-title">
              <SectionTitle
                id="experience-title"
                icon={<Briefcase className="text-blue-500 w-8 h-8" />}
              >
                Experience
              </SectionTitle>
              <Timeline>
                <TimelineItem
                  title="Back-end Developer"
                  subtitle="Alien Brains"
                  date="2021 - Present"
                  description="Core focus on server-side logic, database architecture, and API development utilizing Ruby, Rails, Rspec, Jira, Heroku, REST APIs, and PostgreSQL."
                />
              </Timeline>
            </section>

            <section aria-labelledby="education-title">
              <SectionTitle
                id="education-title"
                icon={<GraduationCap className="text-purple-500 w-8 h-8" />}
              >
                Education
              </SectionTitle>
              <Timeline>
                <TimelineItem
                  title="Full Stack Web Development"
                  subtitle="Alien Brains Educations"
                  date="2020 - 2021"
                  description="React Js, Ruby on Rails, PostgreSQL"
                />
                <TimelineItem
                  title="B.Sc. Honours in Physics"
                  subtitle="University of Kalyani"
                  date="2018 - 2020"
                  description="Score: 72.62%"
                />
                <TimelineItem
                  title="Diploma in Computer Application & Programming"
                  subtitle="Jawaharlal Nehru National Youth Center"
                  date="2018"
                  description="Score: 95%"
                />
                <TimelineItem
                  title="Higher Secondary (WBCHSE)"
                  subtitle="Krishnanagar Collegiate School"
                  date="2017"
                  description="Score: 79.4%"
                />
              </Timeline>
            </section>
          </div>

          {/* Right Column: Skills & Knowledge */}
          <div className="space-y-14">
            <section aria-labelledby="coding-title">
              <SectionTitle
                id="coding-title"
                icon={<Code2 className="text-emerald-500 w-8 h-8" />}
              >
                Coding Skills
              </SectionTitle>
              <SkillList skills={CODING_SKILLS} />
            </section>

            <section aria-labelledby="design-title">
              <SectionTitle
                id="design-title"
                icon={<MonitorCheck className="text-orange-500 w-8 h-8" />}
              >
                Design & Architecture
              </SectionTitle>
              <SkillList skills={DESIGN_SKILLS} />
            </section>

            <section aria-labelledby="tools-title">
              <Reveal
                as="h2"
                id="tools-title"
                variant="blurUp"
                className="mb-6 text-2xl font-bold text-fg"
              >
                Core Knowledge & Tools
              </Reveal>
              <StaggerGroup each={0.05} className="flex flex-wrap gap-3">
                {[
                  "Git",
                  "GitHub",
                  "GitLab",
                  "Docker",
                  "Jira",
                  "Confluence",
                  "Redux",
                  "Bootstrap",
                  "HTML5",
                ].map((tool) => (
                  <StaggerItem
                    as="span"
                    variant="popIn"
                    key={tool}
                    className="rounded-lg border border-line bg-surface px-4 py-2 text-sm font-semibold text-muted backdrop-blur-md transition-colors hover:border-line-strong hover:text-fg"
                  >
                    {tool}
                  </StaggerItem>
                ))}
              </StaggerGroup>
              <LogoMarquee />
            </section>

            <section aria-labelledby="exploring-title">
              <Reveal
                as="h2"
                id="exploring-title"
                variant="blurUp"
                className="mb-6 text-xl font-bold text-fg"
              >
                Currently Exploring & Expanding
              </Reveal>
              <StaggerGroup each={0.07} className="flex flex-wrap gap-3">
                {[
                  "Next Js",
                  "React Native",
                  "Tailwind CSS",
                  "Agentic AI",
                  "Linux (CachyOS, Ubuntu, Zorin OS, Mint)",
                ].map((tool) => (
                  <StaggerItem as="span" variant="popIn" key={tool} className="inline-block">
                    <motion.span
                      whileHover={{ y: [-2, -6, -2], transition: { duration: 1.6, repeat: Infinity, ease: "easeInOut" } }}
                      className="inline-block cursor-default rounded-lg border border-blue-200/70 bg-blue-50/80 px-4 py-2 text-sm font-semibold text-blue-700 shadow-[0_0_0_0_var(--glow)] transition-shadow duration-300 hover:shadow-[0_8px_24px_-8px_var(--glow)] dark:border-blue-800/50 dark:bg-blue-900/20 dark:text-blue-300"
                    >
                      {tool}
                    </motion.span>
                  </StaggerItem>
                ))}
              </StaggerGroup>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

/**
 * Intro card revealed with a clip-path "unmask"; the photo drifts
 * slightly with scroll (parallax, off for reduced motion).
 */
function ProfileCard() {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const photoY = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [-18, 18]);

  return (
    <motion.section
      ref={ref}
      aria-labelledby="profile-name"
      initial={{ opacity: 0, clipPath: "inset(10% 6% 10% 6% round 40px)" }}
      animate={{ opacity: 1, clipPath: "inset(0% 0% 0% 0% round 24px)" }}
      transition={{ duration: 1.1, ease: ease.outExpo }}
      className="glass gradient-border relative mb-20 flex flex-col items-center gap-10 rounded-3xl p-6 shadow-[0_30px_80px_-40px_var(--glow)] sm:p-8 md:flex-row md:items-start"
    >
      <div className="relative h-48 w-48 flex-shrink-0 overflow-hidden rounded-2xl border-4 border-bg-elevated bg-bg-elevated shadow-lg">
        {/* REPLACE THIS IMAGE PATH WITH YOUR ACTUAL PROFILE PICTURE */}
        <motion.img
          style={{ y: photoY, scale: 1.12 }}
          src={asset("my-img-1.jpeg")}
          alt="Soumyo Roy"
          decoding="async"
          onError={(e) => {
            e.target.src =
              "https://api.dicebear.com/7.x/avataaars/svg?seed=Soumyo";
          }}
          className="h-full w-full object-cover"
        />
      </div>
      <StaggerGroup onMount delay={0.35} each={0.1} className="text-center md:text-left">
        <StaggerItem as="h1" variant="blurUp" id="profile-name" className="mb-2 text-4xl font-extrabold text-fg sm:text-5xl">
          Soumyo Roy
        </StaggerItem>
        <StaggerItem as="h2" variant="blurUp" className="mb-4 text-xl font-semibold">
          <span className="text-gradient">Back-End & Full Stack Developer</span>
        </StaggerItem>
        <StaggerItem as="p" className="mb-6 flex items-center justify-center gap-2 font-medium text-subtle md:justify-start">
          <MapPin size={18} className="text-accent" /> West Bengal, India
        </StaggerItem>
        <StaggerItem as="p" className="leading-relaxed text-muted">
          I am a passionate software developer specializing in building
          robust, scalable applications. With a strong foundation in Ruby on
          Rails and modern front-end technologies like React, I craft
          seamless digital experiences from the database architecture to the
          user interface.
        </StaggerItem>
      </StaggerGroup>
    </motion.section>
  );
}

function SectionTitle({ id, icon, children }) {
  return (
    <Reveal variant="blurUp" className="mb-8 flex items-center gap-3">
      <span className="grid h-12 w-12 place-items-center rounded-xl border border-line bg-surface backdrop-blur-md">
        {icon}
      </span>
      <h2 id={id} className="text-2xl font-bold text-fg">
        {children}
      </h2>
    </Reveal>
  );
}

function GlassPanel({ children }) {
  return (
    <Reveal
      variant="fadeUp"
      className="glass gradient-border relative space-y-6 rounded-3xl p-6 sm:p-8"
    >
      {children}
    </Reveal>
  );
}

/**
 * Vertical timeline whose line draws itself as the section scrolls
 * through the viewport (scaleY driven by useScroll).
 */
function Timeline({ children }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 85%", "end 55%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 24, restDelta: 0.001 });

  return (
    <div ref={ref} className="relative ml-4">
      {/* Track + drawn line */}
      <div aria-hidden="true" className="absolute bottom-0 left-0 top-0 w-0.5 rounded-full bg-line" />
      <motion.div
        aria-hidden="true"
        style={{ scaleY, backgroundImage: "linear-gradient(to bottom, var(--accent), var(--accent-2))" }}
        className="absolute bottom-0 left-0 top-0 w-0.5 origin-top rounded-full"
      />
      <StaggerGroup as="ol" each={0.12} className="space-y-8">
        {children}
      </StaggerGroup>
    </div>
  );
}

// Micro-components for the About page
function TimelineItem({ title, subtitle, date, description }) {
  return (
    <motion.li
      variants={{
        hidden: { opacity: 0, x: -24 },
        show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: ease.outExpo } },
      }}
      className="relative pl-8"
    >
      {/* Timeline Dot: pops in, then sends out a single pulse ring */}
      <span aria-hidden="true" className="absolute left-[-7px] top-1.5 grid h-4 w-4 place-items-center">
        <motion.span
          className="absolute inset-0 rounded-full bg-accent"
          variants={{ hidden: { scale: 1, opacity: 0 }, show: { scale: [1, 2.6], opacity: [0.5, 0], transition: { duration: 1.2, delay: 0.25, ease: "easeOut" } } }}
        />
        <motion.span
          className="relative h-4 w-4 rounded-full border-4 border-accent bg-bg"
          variants={{ hidden: { scale: 0 }, show: { scale: 1, transition: spring.pop } }}
        />
      </span>

      <div className="mb-1 text-sm font-bold text-accent">
        {date}
      </div>
      <h3 className="text-lg font-bold text-fg">
        {title}
      </h3>
      <h4 className="text-md mb-2 font-medium text-muted">
        {subtitle}
      </h4>
      {description && (
        <p className="text-sm leading-relaxed text-subtle">
          {description}
        </p>
      )}
    </motion.li>
  );
}

/**
 * Skill list: proficiency tier + since-when + one line of real context,
 * with a link to the work that backs it up where one exists.
 */
function SkillList({ skills }) {
  return (
    <GlassPanel>
      <StaggerGroup as="ul" each={0.08} className="space-y-3">
        {skills.map((skill) => (
          <SkillItem key={skill.name} {...skill} />
        ))}
      </StaggerGroup>
    </GlassPanel>
  );
}

function SkillItem({ name, tier, since, context, link }) {
  return (
    <StaggerItem
      as="li"
      className="group rounded-2xl border border-line bg-bg-elevated/40 p-4 transition-colors duration-300 hover:border-line-strong sm:p-5"
    >
      <div className="flex flex-wrap items-start justify-between gap-x-3 gap-y-2">
        <div>
          <h3 className="text-base font-bold text-fg">{name}</h3>
          {since && <p className="mt-0.5 text-xs font-semibold text-accent">{since}</p>}
        </div>
        <TierBadge tier={tier} />
      </div>
      <p className="mt-2 text-sm leading-relaxed text-muted">{context}</p>
      {link && (
        <Link
          to={link.to}
          className="mt-3 inline-flex items-center gap-1 rounded-md text-sm font-semibold text-accent transition-colors hover:text-fg"
        >
          {link.label}
          <ArrowUpRight
            size={15}
            aria-hidden="true"
            className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </Link>
      )}
    </StaggerItem>
  );
}

/** Tier pill with a 3-step level meter; the steps pop in when revealed. */
function TierBadge({ tier }) {
  const { label, level, tone } = TIERS[tier];
  return (
    <span className={`inline-flex items-center gap-2 rounded-full border px-2.5 py-1 text-xs font-semibold ${tone}`}>
      <span className="flex items-center gap-0.5" aria-hidden="true">
        {[1, 2, 3].map((step) => (
          <motion.span
            key={step}
            variants={{
              hidden: { scaleY: 0.3, opacity: 0.3 },
              show: {
                scaleY: 1,
                opacity: step <= level ? 1 : 0.25,
                transition: { ...spring.pop, delay: 0.15 + step * 0.08 },
              },
            }}
            className={`block h-2.5 w-1 origin-bottom rounded-full ${step <= level ? "bg-current" : "bg-current/40"}`}
          />
        ))}
      </span>
      {label}
    </span>
  );
}

function Logo({ file, name, hidden }) {
  return (
    <li className="grid h-14 w-20 flex-shrink-0 place-items-center rounded-xl border border-line bg-white px-3 py-2 shadow-sm">
      <img
        src={asset(`knowledge-logos/${file}`)}
        alt={hidden ? "" : name}
        loading="lazy"
        decoding="async"
        className="max-h-full max-w-full object-contain"
      />
    </li>
  );
}

/**
 * Infinite auto-scrolling logo strip with edge fade masks.
 * Pauses on hover; renders as a static wrapped row for reduced motion.
 */
function LogoMarquee() {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <ul className="mt-8 flex flex-wrap gap-3">
        {MARQUEE_LOGOS.map((l) => (
          <Logo key={l.file} {...l} />
        ))}
      </ul>
    );
  }

  return (
    <Reveal variant="fadeIn" className="group mask-fade-x mt-8 overflow-hidden py-2">
      {/* Each strip carries its own trailing gap (pr-4) so -50% loops seamlessly */}
      <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
        <ul className="flex gap-4 pr-4">
          {MARQUEE_LOGOS.map((l) => (
            <Logo key={l.file} {...l} />
          ))}
        </ul>
        {/* Duplicate strip for a seamless loop (hidden from assistive tech) */}
        <ul className="flex gap-4 pr-4" aria-hidden="true">
          {MARQUEE_LOGOS.map((l) => (
            <Logo key={l.file} {...l} hidden />
          ))}
        </ul>
      </div>
    </Reveal>
  );
}
