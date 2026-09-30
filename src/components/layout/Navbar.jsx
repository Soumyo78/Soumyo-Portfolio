// src/components/layout/Navbar.jsx
import { useCallback, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { Code2, Smartphone, User } from "lucide-react";
import { useTheme } from "../../hooks/useTheme";
import { lockScroll, unlockScroll } from "../../lib/scroll";
import { ease, spring } from "../../lib/motion";
import ThemeToggle from "./ThemeToggle";

const NAV_ITEMS = [
  { to: "/about", Icon: User, label: "About" },
  { to: "/apps", Icon: Smartphone, label: "Play Store" },
  { to: "/portfolio", Icon: Code2, label: "Portfolio" },
];

/**
 * Floating glass pill navbar.
 * - shrinks and gains a stronger surface once the page is scrolled
 * - hides while scrolling down, returns when scrolling up
 * - sliding active-route pill (shared layoutId)
 * - full-screen animated menu on small screens
 */
export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(y > 24);
    setHidden(y > prev && y > 180);
  });

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  return (
    <>
      <motion.header
        initial={false}
        animate={{ y: hidden && !menuOpen ? "-130%" : "0%" }}
        transition={{ duration: 0.45, ease: ease.outExpo }}
        className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-3 sm:px-6 sm:pt-4"
      >
        <nav
          aria-label="Primary"
          className={`pointer-events-auto relative flex w-full max-w-5xl items-center justify-between rounded-full border backdrop-blur-md transition-[padding,background-color,border-color,box-shadow] duration-500 ${
            scrolled
              ? "border-line-strong bg-surface-strong py-1.5 pl-1.5 pr-2 shadow-[0_10px_40px_-12px_rgb(0_0_0/0.35)] backdrop-blur-xl"
              : "border-line bg-surface py-2 pl-2 pr-2.5"
          }`}
        >
          <NavLink
            to="/"
            onClick={closeMenu}
            className="group flex items-center gap-2.5 rounded-full pr-2 font-display text-lg font-bold tracking-tight text-fg"
          >
            <motion.span
              whileHover={{ rotate: -8, scale: 1.08 }}
              transition={spring.soft}
              className={`relative flex-shrink-0 overflow-hidden rounded-2xl border-2 border-line-strong shadow-[0_0_24px_var(--glow)] transition-[width,height] duration-500 ${
                scrolled ? "h-9 w-9" : "h-11 w-11"
              }`}
            >
              <img
                src={`${import.meta.env.BASE_URL}assets/logo-1.png`}
                alt="Soumyo Roy"
                decoding="async"
                fetchPriority="low"
                className="h-full w-full object-cover"
              />
            </motion.span>
            <span className="transition-colors group-hover:text-accent">Soumyo Roy</span>
          </NavLink>

          <div className="flex items-center gap-1 sm:gap-2">
            <ul className="hidden items-center gap-1 sm:flex">
              {NAV_ITEMS.map((item) => (
                <li key={item.to}>
                  <NavItem {...item} />
                </li>
              ))}
            </ul>

            <ThemeToggle theme={theme} onToggle={toggleTheme} />

            <MenuButton open={menuOpen} onClick={() => setMenuOpen((o) => !o)} />
          </div>
        </nav>
      </motion.header>

      <MobileMenu open={menuOpen} onClose={closeMenu} />
    </>
  );
}

function NavItem({ to, Icon, label }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `relative flex items-center gap-2 rounded-full px-3.5 py-2 text-sm font-medium transition-colors duration-200 ${
          isActive ? "text-fg" : "text-muted hover:text-fg"
        }`
      }
    >
      {({ isActive }) => (
        <>
          {isActive && (
            <motion.span
              layoutId="nav-active-pill"
              transition={spring.snappy}
              className="absolute inset-0 rounded-full border border-line-strong bg-gradient-to-r from-blue-500/15 to-violet-500/15 shadow-[0_0_20px_var(--glow)]"
            />
          )}
          <Icon size={16} className={`relative ${isActive ? "text-accent" : ""}`} aria-hidden="true" />
          <span className="relative">{label}</span>
        </>
      )}
    </NavLink>
  );
}

/** Animated hamburger that morphs into a close icon (small screens only). */
function MenuButton({ open, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={open ? "Close menu" : "Open menu"}
      aria-expanded={open}
      aria-controls="mobile-menu"
      className="relative grid h-10 w-10 place-items-center rounded-full border border-line bg-surface text-fg sm:hidden"
    >
      <span className="relative block h-3 w-4" aria-hidden="true">
        <motion.span
          className="absolute left-0 top-0 h-0.5 w-4 rounded-full bg-current"
          animate={open ? { y: 5, rotate: 45 } : { y: 0, rotate: 0 }}
          transition={spring.snappy}
        />
        <motion.span
          className="absolute left-0 top-[5px] h-0.5 w-4 rounded-full bg-current"
          animate={{ opacity: open ? 0 : 1, scaleX: open ? 0 : 1 }}
          transition={{ duration: 0.15 }}
        />
        <motion.span
          className="absolute left-0 top-[10px] h-0.5 w-4 rounded-full bg-current"
          animate={open ? { y: -5, rotate: -45 } : { y: 0, rotate: 0 }}
          transition={spring.snappy}
        />
      </span>
    </button>
  );
}

/** Full-screen overlay menu with staggered links. */
function MobileMenu({ open, onClose }) {
  useEffect(() => {
    if (!open) return;
    lockScroll();
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      unlockScroll();
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          id="mobile-menu"
          key="mobile-menu"
          className="fixed inset-0 z-40 flex flex-col justify-center bg-bg/90 px-8 backdrop-blur-2xl sm:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.25, delay: 0.1 } }}
        >
          <motion.ul
            className="space-y-3"
            initial="hidden"
            animate="show"
            exit="hidden"
            variants={{
              hidden: { transition: { staggerChildren: 0.04, staggerDirection: -1 } },
              show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
            }}
          >
            {NAV_ITEMS.map(({ to, Icon, label }) => (
              <motion.li
                key={to}
                variants={{
                  hidden: { opacity: 0, y: 32, filter: "blur(6px)" },
                  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: ease.outExpo } },
                }}
              >
                <NavLink
                  to={to}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `flex items-center gap-4 rounded-2xl border px-5 py-4 font-display text-3xl font-bold tracking-tight transition-colors ${
                      isActive
                        ? "border-line-strong bg-surface text-fg"
                        : "border-transparent text-muted hover:text-fg"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <Icon size={26} aria-hidden="true" className={isActive ? "text-accent" : ""} />
                      <span className={isActive ? "text-gradient" : ""}>{label}</span>
                    </>
                  )}
                </NavLink>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
