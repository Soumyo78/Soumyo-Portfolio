import { useState, useEffect, useCallback } from "react";
import { flushSync } from "react-dom";

const STORAGE_KEY = "theme";

function readStoredTheme() {
  try {
    return localStorage.getItem(STORAGE_KEY) || "dark";
  } catch {
    return "dark";
  }
}

/** Apply the theme class to <html> and persist it. */
function applyTheme(theme) {
  const root = window.document.documentElement;
  root.classList.toggle("dark", theme === "dark");
  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    /* storage unavailable (private mode) – theme still applies for this visit */
  }
}

/**
 * Theme state (default dark, persisted in localStorage).
 * toggleTheme(event) plays a circular reveal from the click point using the
 * View Transitions API, and falls back to an instant swap where unsupported
 * or when the user prefers reduced motion.
 */
export function useTheme() {
  const [theme, setTheme] = useState(readStoredTheme);

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  const toggleTheme = useCallback(
    (event) => {
      const next = theme === "light" ? "dark" : "light";
      const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

      if (!document.startViewTransition || reduce) {
        setTheme(next);
        return;
      }

      // Origin of the reveal: the toggle button (or the viewport centre)
      const rect = event?.currentTarget?.getBoundingClientRect?.();
      const x = rect ? rect.left + rect.width / 2 : window.innerWidth / 2;
      const y = rect ? rect.top + rect.height / 2 : 0;
      const radius = Math.hypot(
        Math.max(x, window.innerWidth - x),
        Math.max(y, window.innerHeight - y),
      );

      const transition = document.startViewTransition(() => {
        flushSync(() => setTheme(next));
        applyTheme(next); // make sure the DOM is updated inside the snapshot
      });

      transition.ready
        .then(() => {
          document.documentElement.animate(
            {
              clipPath: [
                `circle(0px at ${x}px ${y}px)`,
                `circle(${radius}px at ${x}px ${y}px)`,
              ],
            },
            {
              duration: 650,
              easing: "cubic-bezier(0.16, 1, 0.3, 1)",
              pseudoElement: "::view-transition-new(root)",
            },
          );
        })
        .catch(() => {});
    },
    [theme],
  );

  return { theme, toggleTheme };
}
