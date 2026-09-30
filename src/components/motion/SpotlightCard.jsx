import { useRef } from "react";
import { useFinePointer } from "../../hooks/useMedia";

/**
 * Card surface with a mouse-following spotlight on its 1px border and a
 * soft inner glow. Pointer position is written to CSS variables directly,
 * so moving the mouse never re-renders React. Styles live in index.css
 * (.spotlight / .spotlight-fill).
 */
export default function SpotlightCard({ as: Tag = "div", className = "", children, ...rest }) {
  const ref = useRef(null);
  const fine = useFinePointer();

  const onPointerMove = (e) => {
    if (!fine || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    ref.current.style.setProperty("--mx", `${e.clientX - r.left}px`);
    ref.current.style.setProperty("--my", `${e.clientY - r.top}px`);
  };
  const setSpot = (v) => fine && ref.current?.style.setProperty("--spot", v);

  return (
    <Tag
      ref={ref}
      onPointerMove={onPointerMove}
      onPointerEnter={() => setSpot("1")}
      onPointerLeave={() => setSpot("0")}
      className={`spotlight relative ${className}`}
      {...rest}
    >
      <div aria-hidden="true" className="spotlight-fill pointer-events-none absolute inset-0 rounded-[inherit]" />
      {children}
    </Tag>
  );
}
