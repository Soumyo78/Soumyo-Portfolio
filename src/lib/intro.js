import { useSyncExternalStore } from "react";

/**
 * Tracks whether the first-visit intro has finished, so hero animations
 * can wait for it instead of playing hidden behind the preloader.
 */
const KEY = "intro-seen";
let done = (() => {
  try {
    return Boolean(sessionStorage.getItem(KEY));
  } catch {
    return true;
  }
})();
const listeners = new Set();

export const introAlreadySeen = () => done;

export function markIntroDone() {
  if (done) return;
  done = true;
  try {
    sessionStorage.setItem(KEY, "1");
  } catch {
    /* ignore */
  }
  listeners.forEach((l) => l());
}

export function useIntroDone() {
  return useSyncExternalStore(
    (l) => {
      listeners.add(l);
      return () => listeners.delete(l);
    },
    () => done,
    () => true,
  );
}
