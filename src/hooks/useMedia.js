import { useSyncExternalStore } from "react";

/** Subscribe to a CSS media query. Returns false during SSR / unsupported. */
export function useMedia(query) {
  return useSyncExternalStore(
    (onChange) => {
      if (typeof window === "undefined" || !window.matchMedia) return () => {};
      const mql = window.matchMedia(query);
      mql.addEventListener("change", onChange);
      return () => mql.removeEventListener("change", onChange);
    },
    () =>
      typeof window !== "undefined" && window.matchMedia
        ? window.matchMedia(query).matches
        : false,
    () => false,
  );
}

/** True on devices with a precise pointer that can hover (mouse / trackpad). */
export function useFinePointer() {
  return useMedia("(hover: hover) and (pointer: fine)");
}
