/**
 * Tiny scroll controller shared by the app.
 * Holds the active Lenis instance (if smooth scrolling is on) and a
 * reference-counted scroll lock used by the preloader, mobile menu and modal.
 */
let lenis = null;
let locks = 0;

export function setLenis(instance) {
  lenis = instance;
  if (lenis && locks > 0) lenis.stop();
}

export function scrollToTop() {
  if (lenis) lenis.scrollTo(0, { immediate: true, force: true });
  else window.scrollTo(0, 0);
}

export function scrollToTarget(target, offset = -80) {
  const el = typeof target === "string" ? document.querySelector(target) : target;
  if (!el) return;
  if (lenis) lenis.scrollTo(el, { offset, duration: 1.2 });
  else window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY + offset, behavior: "smooth" });
}

export function lockScroll() {
  locks += 1;
  if (locks === 1) {
    lenis?.stop();
    document.documentElement.style.overflow = "hidden";
  }
}

export function unlockScroll() {
  locks = Math.max(0, locks - 1);
  if (locks === 0) {
    document.documentElement.style.overflow = "";
    lenis?.start();
  }
}
