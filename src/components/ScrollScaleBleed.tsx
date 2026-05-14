import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

/**
 * SCROLL-SCALE BLEED
 * Sticky text grows dramatically as the user scrolls past, bleeding through
 * the next section. The end scale is large enough to push beyond the 'O'.
 */
export function ScrollScaleBleed({
  children,
  height = "260vh",
  className = "",
  textClassName = "",
  toScale = 18,
}: {
  children: ReactNode;
  height?: string;
  className?: string;
  textClassName?: string;
  toScale?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  // Grow aggressively then dissolve into the next section
  const scale = useTransform(scrollYProgress, [0, 0.85], reduce ? [1, 1] : [1, toScale]);
  const opacity = useTransform(scrollYProgress, [0, 0.6, 0.9], reduce ? [1, 1, 1] : [1, 1, 0]);

  return (
    <section ref={ref} className={`relative ${className}`} style={{ height }}>
      <div className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden">
        <motion.div
          style={{ scale, opacity, willChange: "transform, opacity" }}
          className={`px-6 text-center ${textClassName}`}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}
