import { useEffect, useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import cupCoffee from "@/assets/cup-coffee.png";
import cupMatcha from "@/assets/cup-matcha.png";
import cupBerry from "@/assets/cup-berry.png";
import cupTurmeric from "@/assets/cup-turmeric.png";
import cupFilter from "@/assets/cup-filter.png";
import { ScienceLines } from "./ScienceLines";

interface Drink {
  src: string;
  name: string;
  bg: string;
  ink: string;
  note: string;
  label: string;
}

const drinks: Drink[] = [
  {
    src: cupCoffee,
    name: "Single Origin Espresso",
    bg: "oklch(0.22 0.030 50)",
    ink: "oklch(0.96 0.012 85)",
    note: "Ethiopia · Yirgacheffe",
    label: "No. 01 — Espresso",
  },
  {
    src: cupMatcha,
    name: "Ceremonial Matcha",
    bg: "oklch(0.30 0.058 152)",
    ink: "oklch(0.96 0.012 85)",
    note: "Uji · First Harvest",
    label: "No. 02 — Botanical",
  },
  {
    src: cupBerry,
    name: "Beetroot & Rose Latte",
    bg: "oklch(0.30 0.082 355)",
    ink: "oklch(0.96 0.012 85)",
    note: "House Botanical",
    label: "No. 03 — Signature",
  },
  {
    src: cupTurmeric,
    name: "Golden Turmeric",
    bg: "oklch(0.50 0.10 70)",
    ink: "oklch(0.18 0.012 60)",
    note: "Stone-Ground Spice",
    label: "No. 04 — Botanical",
  },
  {
    src: cupFilter,
    name: "V60 Filter",
    bg: "oklch(0.28 0.040 60)",
    ink: "oklch(0.96 0.012 85)",
    note: "Bright · Single Origin",
    label: "No. 05 — Filter",
  },
];

/**
 * Hero — transparent cups rotate in from above, the panel cross-fades, and the
 * background layers parallax at ~60% of the foreground scroll speed.
 * Brand wordmark sits as the headline; the rotating cup becomes the subject.
 */
export function RotatingHero() {
  const [i, setI] = useState(0);
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  // background drifts ~60% of scroll
  const bgY = useTransform(scrollYProgress, [0, 1], reduce ? ["0%", "0%"] : ["0%", "60%"]);
  const linesY = useTransform(scrollYProgress, [0, 1], reduce ? ["0%", "0%"] : ["0%", "40%"]);
  const cupY = useTransform(scrollYProgress, [0, 1], reduce ? ["0%", "0%"] : ["0%", "20%"]);
  const textY = useTransform(scrollYProgress, [0, 1], reduce ? ["0%", "0%"] : ["0%", "-10%"]);

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => setI((p) => (p + 1) % drinks.length), 4800);
    return () => clearInterval(id);
  }, [reduce]);

  const d = drinks[i];

  // Broadcast active drink tone so Nav can adapt its colours over the hero
  useEffect(() => {
    window.dispatchEvent(
      new CustomEvent("lab:hero-tone", { detail: { bg: d.bg, ink: d.ink } }),
    );
  }, [d.bg, d.ink]);

  return (
    <motion.section
      ref={ref}
      className="relative w-full overflow-hidden"
      animate={{ backgroundColor: d.bg }}
      transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* parallax background colour panel — animates with the active drink */}
      <motion.div
        className="absolute inset-0 -z-10"
        style={{ y: bgY }}
        animate={{ backgroundColor: d.bg }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
      />
      {/* science line-work — slightly slower parallax */}
      <motion.div className="absolute inset-0 -z-10" style={{ y: linesY }}>
        <ScienceLines className="absolute inset-0" color={d.ink} opacity={0.16} />
      </motion.div>

      <div className="relative grid h-[100svh] min-h-[640px] grid-cols-1 content-center gap-y-6 px-5 pb-10 pt-24 sm:px-6 md:grid-cols-12 md:gap-x-10 md:gap-y-10 md:px-12 md:pb-16 md:pt-28 lg:px-20 lg:pt-32">
        {/* Copy */}
        <motion.div
          style={{ y: textY }}
          className="md:col-span-6 lg:col-span-5"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <span
              className="eyebrow"
              style={{ color: d.ink, opacity: 0.7 }}
            >
              Birmingham · Specialty Coffee
            </span>
            {/* Brand wordmark — colour adapts per drink */}
            <h1
              className="display text-[clamp(44px,7.2vw,108px)] leading-[0.92]"
              style={{ color: d.ink }}
            >
              Lab Coffee
              <br />
              <span className="serif-italic">Works.</span>
            </h1>
            <div className="h-px w-16 md:w-20" style={{ background: d.ink, opacity: 0.4 }} />
            <p
              className="max-w-md text-[14px] leading-relaxed font-light md:text-[15px]"
              style={{ color: d.ink, opacity: 0.85 }}
            >
              A specialty coffee laboratory in the heart of Birmingham —
              small-batch roasts, considered botanicals, and a room built
              for slow afternoons.
            </p>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-2">
              <a
                href="/menu"
                className="group inline-flex items-center gap-3 border px-6 py-3.5 text-[11px] uppercase tracking-[0.28em] transition-colors md:px-7 md:py-4 md:text-xs"
                style={{ borderColor: d.ink, color: d.ink }}
              >
                View the Menu
                <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a
                href="/about"
                className="text-[11px] uppercase tracking-[0.28em] underline-offset-8 hover:underline md:text-xs"
                style={{ color: d.ink, opacity: 0.8 }}
              >
                Our story
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Cup image */}
        <motion.div
          className="relative md:col-span-6 lg:col-span-7"
          style={{ y: cupY }}
        >
          <div className="relative mx-auto aspect-square w-full max-w-[280px] sm:max-w-[360px] md:max-w-[440px] lg:max-w-[520px]">
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.img
                key={d.src}
                src={d.src}
                alt={d.name}
                width={1024}
                height={1024}
                initial={reduce ? { opacity: 0 } : { y: "-110%", opacity: 0, rotate: -4 }}
                animate={{ y: 0, opacity: 1, rotate: 0 }}
                exit={reduce ? { opacity: 0 } : { y: "110%", opacity: 0, rotate: 4 }}
                transition={{ duration: 1.0, ease: [0.76, 0, 0.24, 1] }}
                className="absolute inset-0 h-full w-full object-contain drop-shadow-[0_40px_80px_rgba(0,0,0,0.4)]"
              />
            </AnimatePresence>
            {/* rotating drink label badge */}
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={d.label}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ duration: 0.45 }}
                className="absolute right-2 top-2 rotate-[3deg] border px-3 py-1.5 text-[10px] uppercase tracking-[0.28em] backdrop-blur-sm md:right-6 md:top-6"
                style={{ borderColor: d.ink, color: d.ink, background: `${d.bg}66` }}
              >
                {d.label}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* drink name + nav dots */}
          <div className="mt-3 flex items-baseline justify-between gap-4 md:mt-5">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={d.name}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.4 }}
                style={{ color: d.ink }}
              >
                <div className="serif-italic text-lg md:text-2xl">{d.name}</div>
                <div className="eyebrow mt-2" style={{ color: d.ink, opacity: 0.7 }}>
                  {d.note}
                </div>
              </motion.div>
            </AnimatePresence>
            <div className="flex gap-2">
              {drinks.map((_, idx) => (
                <button
                  key={idx}
                  aria-label={`Show drink ${idx + 1}`}
                  onClick={() => setI(idx)}
                  className="h-px w-10 transition-opacity"
                  style={{ background: d.ink, opacity: idx === i ? 1 : 0.3 }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
