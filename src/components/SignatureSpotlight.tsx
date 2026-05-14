import { motion } from "framer-motion";
import cupBerry from "@/assets/cup-berry.png";
import { ScienceLines } from "./ScienceLines";

/**
 * Editorial spotlight — large portrait imagery beside a story-driven
 * description for the house signature drink.
 */
export function SignatureSpotlight() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative overflow-hidden bg-plum-deep px-6 py-32 md:px-12 md:py-44 lg:px-20"
    >
      <ScienceLines className="absolute inset-0" color="oklch(0.96 0.012 85)" opacity={0.08} />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 md:grid-cols-12 md:gap-20">
        {/* Image side */}
        <div className="relative md:col-span-6">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[520px]">
            <motion.img
              src={cupBerry}
              alt="Beetroot & Rose latte — a signature Lab Coffee Works drink"
              width={1024}
              height={1024}
              loading="lazy"
              initial={{ scale: 1.05 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 h-full w-full object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.45)]"
            />
            <div className="absolute -left-2 -top-4 rotate-[-6deg] border border-bone/40 bg-bone/5 px-4 py-2 text-[10px] uppercase tracking-[0.32em] text-bone backdrop-blur-sm md:-left-6">
              House Special
            </div>
          </div>
        </div>

        {/* Text side */}
        <div className="md:col-span-6">
          <span className="eyebrow text-bone/70">No. 01 · Signature Spotlight</span>
          <h2 className="display mt-6 text-[clamp(48px,7vw,120px)] leading-[0.95] text-bone">
            Beetroot &amp; <span className="serif-italic">Rose.</span>
          </h2>
          <div className="mt-8 h-px w-24 bg-bone/40" />
          <p className="mt-8 max-w-xl text-base leading-relaxed text-bone/85 md:text-lg">
            Earthy beetroot, slow-steeped with damask rose petals and a
            whisper of vanilla, married to silken oat milk. It pours
            magenta, drinks like silk, and stays with you long after the
            last sip — our quiet love letter to the season.
          </p>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-bone/70">
            Served warm. Lightly sweet. Available all year.
          </p>
        </div>
      </div>
    </motion.section>
  );
}
