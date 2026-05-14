import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import gInterior from "@/assets/gallery-interior.jpg";
import gPour from "@/assets/gallery-pour.jpg";
import gBeans from "@/assets/gallery-beans.jpg";
import gPastry from "@/assets/gallery-pastry.jpg";
import cupCoffee from "@/assets/cup-coffee.png";
import cupMatcha from "@/assets/cup-matcha.png";

const tiles = [
  { src: gInterior, caption: "Saturday on Newhall.", likes: 412 },
  { src: gPour, caption: "Yirgacheffe, day three.", likes: 287 },
  { src: cupMatcha, caption: "Uji first harvest is in.", likes: 519 },
  { src: gBeans, caption: "New roast, dialled this morning.", likes: 234 },
  { src: gPastry, caption: "Cardamom buns out of the oven.", likes: 376 },
  { src: cupCoffee, caption: "A quiet espresso.", likes: 198 },
];

/**
 * Instagram-style live feed (visual embed). Hooks into the @labcoffeeworks
 * handle on click — keeps social presence on-page without CMS work.
 */
export function InstagramFeed() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-bone px-6 py-32 md:px-12 md:py-40 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="eyebrow">From the bar · Live</span>
            <h2 className="display mt-4 text-5xl text-ink md:text-7xl">
              Lately on <span className="serif-italic">Instagram.</span>
            </h2>
          </div>
          <a
            href="https://instagram.com/labcoffeeworks"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 border border-ink px-6 py-3 text-[11px] uppercase tracking-[0.28em] text-ink hover:bg-ink hover:text-bone"
          >
            <Instagram className="h-3.5 w-3.5" />
            @labcoffeeworks
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5 lg:grid-cols-6">
          {tiles.map((t, i) => (
            <motion.a
              key={i}
              href="https://instagram.com/labcoffeeworks"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group relative aspect-square overflow-hidden bg-cream"
            >
              <img
                src={t.src}
                alt={t.caption}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
              />
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-ink/85 via-ink/30 to-transparent p-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <p className="text-xs leading-snug text-bone">{t.caption}</p>
                <p className="mt-2 text-[10px] uppercase tracking-[0.28em] text-bone/70">
                  ♥ {t.likes}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
