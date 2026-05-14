import { motion } from "framer-motion";

/**
 * Architectural hairline divider. Draws left-to-right on enter.
 * Used as section dividers and the nav active-link underline.
 */
export function RuledLine({
  className = "",
  color = "var(--ink)",
  delay = 0,
  duration = 0.9,
}: {
  className?: string;
  color?: string;
  delay?: number;
  duration?: number;
}) {
  return (
    <motion.div
      aria-hidden
      className={className}
      style={{ height: 1, background: color, transformOrigin: "0% 50%" }}
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
    />
  );
}
