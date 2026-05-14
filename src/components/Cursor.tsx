import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * Custom cursor — small filled circle that lags behind the mouse with a spring.
 * Scales 2.5× and dims to 0.5 over interactive elements. Desktop only.
 * Hidden on touch / coarse pointer devices via media query in styles.css.
 */
export function Cursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 150, damping: 15, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 150, damping: 15, mass: 0.4 });
  const [hover, setHover] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    setEnabled(mq.matches);
    const onChange = () => setEnabled(mq.matches);
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const t = e.target as HTMLElement | null;
      const interactive = !!t?.closest(
        "a, button, [role='button'], input, textarea, select, [data-cursor='hover']"
      );
      setHover(interactive);
    };
    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, [enabled, x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden
      className="lab-cursor pointer-events-none fixed left-0 top-0 z-[10000]"
      style={{ x: sx, y: sy, translateX: "-50%", translateY: "-50%" }}
      animate={{ scale: hover ? 2.5 : 1, opacity: hover ? 0.5 : 1 }}
      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="h-[10px] w-[10px] rounded-full bg-ink mix-blend-difference" />
    </motion.div>
  );
}
