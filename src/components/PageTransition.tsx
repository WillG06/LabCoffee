import type { ReactNode } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useRouterState } from "@tanstack/react-router";

/**
 * Per-route page transitions. Variant chosen by pathname.
 */
export function PageTransition({ children }: { children: ReactNode }) {
  const path = useRouterState({ select: (s) => s.location.pathname });
  const reduce = useReducedMotion();

  const variants = (() => {
    if (reduce) return { initial: {}, animate: {}, exit: {} };
    switch (path) {
      case "/":
        // background-colour curtain slides UP off the viewport
        return {
          initial: { clipPath: "inset(0% 0% 0% 0%)", opacity: 1 },
          animate: { clipPath: "inset(0% 0% 0% 0%)", opacity: 1 },
          exit: { opacity: 0 },
        };
      case "/about":
        return {
          initial: { clipPath: "inset(0 100% 0 0)" },
          animate: { clipPath: "inset(0 0% 0 0)" },
          exit: { opacity: 0 },
        };
      case "/menu":
        return {
          initial: { y: 40, opacity: 0 },
          animate: { y: 0, opacity: 1 },
          exit: { opacity: 0 },
        };
      default:
        return {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
        };
    }
  })();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={path}
        initial={variants.initial}
        animate={variants.animate}
        exit={variants.exit}
        transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
      >
        {/* Home curtain overlay */}
        {path === "/" && !reduce && (
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: "-100%" }}
            transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1], delay: 0.05 }}
            className="pointer-events-none fixed inset-0 z-[80] bg-forest"
          />
        )}
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
