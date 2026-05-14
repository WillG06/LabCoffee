import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { RotatingHero } from "@/components/RotatingHero";
import { RuledLine } from "@/components/RuledLine";
import { ScrollScaleBleed } from "@/components/ScrollScaleBleed";
import { ScrollTextFill } from "@/components/ScrollTextFill";
import { SignatureSpotlight } from "@/components/SignatureSpotlight";
import { InstagramFeed } from "@/components/InstagramFeed";
import { Footer } from "@/components/Footer";

import gInterior from "@/assets/gallery-interior.jpg";
import gPour from "@/assets/gallery-pour.jpg";
import gBeans from "@/assets/gallery-beans.jpg";
import gPastry from "@/assets/gallery-pastry.jpg";

const HERO_IMG = "/og-home.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lab Coffee Works — Specialty Coffee, Matcha & Botanicals · Birmingham" },
      {
        name: "description",
        content:
          "Birmingham's considered specialty coffee laboratory. Single-origin espresso, ceremonial matcha and seasonal botanical drinks served in a quiet room on Newhall Street.",
      },
      { property: "og:title", content: "Lab Coffee Works — Birmingham Specialty Coffee" },
      {
        property: "og:description",
        content:
          "Single-origin espresso, ceremonial matcha and botanical drinks in the heart of Birmingham.",
      },
      { property: "og:image", content: HERO_IMG },
    ],
  }),
  component: HomePage,
});

const galleryItems = [
  { src: gInterior, alt: "Interior of Lab Coffee Works with plum velvet chairs and wooden tables", caption: "The Room", span: "row-span-2" },
  { src: gPour, alt: "Barista preparing a chemex pour-over", caption: "The Method", span: "" },
  { src: gBeans, alt: "Single origin coffee beans on linen", caption: "The Origin", span: "" },
  { src: gPastry, alt: "House pastry served with espresso", caption: "The Plate", span: "row-span-2" },
];

function HomePage() {
  return (
    <main>
      <RotatingHero />

      {/* architectural divider beneath hero */}
      <div className="px-6 md:px-12 lg:px-20">
        <RuledLine className="my-2" color="var(--ink)" />
      </div>

      {/* Scroll-scale bleed heading — pushes through the 'O' */}
      <ScrollScaleBleed className="bg-cream" toScale={22}>
        <span className="eyebrow text-forest">Chapter One</span>
        <h2 className="display mt-6 text-[clamp(80px,16vw,260px)] text-forest-deep">
          Slow.
        </h2>
      </ScrollScaleBleed>

      {/* Pull quote w/ scroll text fill */}
      <motion.section
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 -mt-[10vh] bg-bone px-6 py-32 md:px-12 lg:px-20"
      >
        {/* Soft blurred bleed at the top so the green 'O' dissolves into this section */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 -top-24 h-48 backdrop-blur-2xl"
          style={{
            WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 55%, transparent 100%)",
            maskImage: "linear-gradient(to bottom, black 0%, black 55%, transparent 100%)",
          }}
        />
        <div className="relative mx-auto grid max-w-6xl grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-5">
            <span className="eyebrow">A note from the lab</span>
            <h3 className="display mt-6 text-5xl text-plum md:text-6xl">
              Coffee, treated as <span className="serif-italic">research.</span>
            </h3>
          </div>
          <div className="md:col-span-7">
            <ScrollTextFill
              className="text-2xl font-light leading-[1.45] md:text-3xl"
              text="Every bean is sourced direct, profiled in our roastery, and brewed by people who care about the difference a tenth of a gram makes. The result is a cup you can sit with for an hour — not a takeaway, not a transaction, but a moment of quiet precision in the middle of your day."
              dim="oklch(0.55 0.008 145 / 0.28)"
              bright="oklch(0.18 0.012 145)"
            />
          </div>
        </div>
      </motion.section>

      {/* Gallery — asymmetric editorial grid */}
      <motion.section
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-cream px-6 py-32 md:px-12 lg:px-20"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 flex items-end justify-between gap-8">
            <div>
              <span className="eyebrow">The Atlas</span>
              <h2 className="display mt-4 text-5xl text-ink md:text-7xl">
                Glimpses<br /><span className="serif-italic">of the room.</span>
              </h2>
            </div>
            <RuledLine className="hidden flex-1 md:block" color="var(--ink)" />
          </div>
          <div className="grid auto-rows-[260px] grid-cols-1 gap-6 md:auto-rows-[300px] md:grid-cols-3 md:gap-8">
            {galleryItems.map((g, i) => (
              <motion.figure
                key={g.src}
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className={`group relative overflow-hidden bg-ink ${g.span}`}
              >
                <img
                  src={g.src}
                  alt={g.alt}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                />
                <figcaption className="absolute bottom-4 left-4 right-4 flex translate-y-2 items-baseline justify-between text-bone opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <span className="serif-italic text-2xl">{g.caption}</span>
                  <span className="eyebrow text-bone/80">No. 0{i + 1}</span>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </motion.section>

      {/* SIGNATURE SPOTLIGHT — between menu/atlas and about */}
      <SignatureSpotlight />

      {/* Story teaser */}
      <motion.section
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-bone px-6 py-32 md:px-12 md:py-44 lg:px-20"
      >
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 md:grid-cols-12 md:gap-20">
          <blockquote className="md:col-span-7">
            <p className="display text-[clamp(40px,5.5vw,84px)] leading-[1.05] text-forest">
              "We didn't open a café.
              <br />
              <span className="serif-italic">We opened a quiet laboratory</span>
              <br />
              for the people who notice."
            </p>
          </blockquote>
          <div className="md:col-span-5 md:pt-10">
            <span className="eyebrow">The Story</span>
            <p className="mt-6 text-base leading-relaxed text-ink-soft">
              Born from years behind the bar and a quiet obsession with the
              chemistry of extraction, Lab Coffee Works was built for the
              people who pause. Our founders spent a decade in specialty
              before choosing Birmingham — its makers, its independence,
              its brick — as the right home for something slower.
            </p>
            <a
              href="/about"
              className="mt-8 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-forest"
            >
              Read the full story
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </motion.section>

      {/* Instagram */}
      <InstagramFeed />

      <Footer />
    </main>
  );
}
