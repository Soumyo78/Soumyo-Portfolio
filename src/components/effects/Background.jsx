/**
 * Fixed, theme-aware backdrop behind every page:
 * slow aurora blobs (radial gradients moved with transform only, no blur
 * filter), a faint grid with a radial mask, and a film-grain overlay.
 */
export default function Background() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div
        className="absolute -left-[15vmax] -top-[20vmax] h-[65vmax] w-[65vmax] rounded-full animate-aurora-1 will-change-transform"
        style={{ background: "radial-gradient(circle at center, var(--aurora-a), transparent 62%)" }}
      />
      <div
        className="absolute -right-[20vmax] top-[5vh] h-[60vmax] w-[60vmax] rounded-full animate-aurora-2 will-change-transform"
        style={{ background: "radial-gradient(circle at center, var(--aurora-b), transparent 62%)" }}
      />
      <div
        className="absolute bottom-[-35vmax] left-[20vw] h-[60vmax] w-[60vmax] rounded-full animate-aurora-3"
        style={{ background: "radial-gradient(circle at center, var(--aurora-c), transparent 60%)" }}
      />
      <div className="absolute inset-0 bg-grid" />
      <div className="absolute inset-0 grain" />
    </div>
  );
}
