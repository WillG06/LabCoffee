import { motion } from "framer-motion";

/**
 * Sciencey line-work backdrop — chemistry diagrams, beakers, molecules.
 * Drawn as SVG strokes for crispness at all viewports. Kept low-opacity
 * so it lives in the middle-ground without competing with content.
 */
export function ScienceLines({
  className = "",
  color = "currentColor",
  opacity = 0.12,
}: {
  className?: string;
  color?: string;
  opacity?: number;
}) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 1200 800"
      preserveAspectRatio="xMidYMid slice"
      className={`pointer-events-none ${className}`}
      style={{ color, opacity }}
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
    >
      {/* hex molecule */}
      <motion.g
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
      >
        <polygon points="180,180 240,150 300,180 300,240 240,270 180,240" />
        <line x1="240" y1="150" x2="240" y2="100" />
        <line x1="300" y1="180" x2="350" y2="155" />
        <line x1="300" y1="240" x2="350" y2="265" />
        <line x1="180" y1="180" x2="130" y2="155" />
        <line x1="180" y1="240" x2="130" y2="265" />
        <circle cx="240" cy="100" r="4" />
        <circle cx="350" cy="155" r="4" />
        <circle cx="350" cy="265" r="4" />
        <circle cx="130" cy="155" r="4" />
        <circle cx="130" cy="265" r="4" />
      </motion.g>

      {/* erlenmeyer flask */}
      <motion.g
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <path d="M950 120 L950 220 L880 360 Q870 390 905 390 L1015 390 Q1050 390 1040 360 L970 220 L970 120 Z" />
        <line x1="935" y1="120" x2="985" y2="120" />
        <line x1="900" y1="320" x2="1020" y2="320" />
        <line x1="908" y1="345" x2="1012" y2="345" />
      </motion.g>

      {/* concentric circles (petri dish) */}
      <motion.g
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2.4, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
      >
        <circle cx="240" cy="620" r="110" />
        <circle cx="240" cy="620" r="80" />
        <circle cx="240" cy="620" r="48" />
        <circle cx="240" cy="620" r="6" />
      </motion.g>

      {/* coordinate grid + curve */}
      <motion.g
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
      >
        <line x1="600" y1="550" x2="900" y2="550" />
        <line x1="600" y1="550" x2="600" y2="380" />
        <path d="M610 545 C 660 540, 700 510, 740 470 S 850 410, 890 395" />
        <line x1="640" y1="548" x2="640" y2="552" />
        <line x1="700" y1="548" x2="700" y2="552" />
        <line x1="760" y1="548" x2="760" y2="552" />
        <line x1="820" y1="548" x2="820" y2="552" />
        <line x1="880" y1="548" x2="880" y2="552" />
      </motion.g>

      {/* dotted arc */}
      <motion.g
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.6, delay: 0.6 }}
      >
        <path
          d="M 60 420 Q 600 100 1140 420"
          strokeDasharray="2 8"
        />
      </motion.g>
    </svg>
  );
}
