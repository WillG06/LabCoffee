import { useRef, useMemo } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";

/**
 * SCROLL TEXT FILL — word-by-word colour reveal driven by scroll position.
 */
export function ScrollTextFill({
  text,
  className = "",
  dim = "oklch(0.20 0.012 145 / 0.18)",
  bright = "oklch(0.20 0.012 145)",
}: {
  text: string;
  className?: string;
  dim?: string;
  bright?: string;
}) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "end 0.35"],
  });
  const words = useMemo(() => text.split(/\s+/), [text]);

  return (
    <p ref={ref} className={className}>
      {words.map((w, i) => (
        <Word
          key={`${w}-${i}`}
          progress={scrollYProgress}
          range={[i / words.length, (i + 1.5) / words.length]}
          dim={dim}
          bright={bright}
        >
          {w}
        </Word>
      ))}
    </p>
  );
}

function Word({
  children,
  progress,
  range,
  dim,
  bright,
}: {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
  dim: string;
  bright: string;
}) {
  const color = useTransform(progress, range, [dim, bright]);
  return (
    <motion.span style={{ color, willChange: "color" }} className="inline">
      {children}{" "}
    </motion.span>
  );
}
