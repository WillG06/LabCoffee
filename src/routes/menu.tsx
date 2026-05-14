import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { RuledLine } from "@/components/RuledLine";
import { ScienceLines } from "@/components/ScienceLines";
import { Footer } from "@/components/Footer";
import { DietaryTags } from "@/components/DietaryTags";

import imgEspresso from "@/assets/menu/espresso.png";
import imgMacchiato from "@/assets/menu/macchiato.png";
import imgCortado from "@/assets/menu/cortado.png";
import imgFlatWhite from "@/assets/menu/flat-white.png";
import imgLatte from "@/assets/menu/latte.png";
import imgMatcha from "@/assets/menu/matcha.png";
import imgBeetroot from "@/assets/menu/beetroot.png";
import imgTurmeric from "@/assets/menu/turmeric.png";
import imgHojicha from "@/assets/menu/hojicha.png";
import imgChemex from "@/assets/menu/chemex.png";
import imgV60 from "@/assets/menu/v60.png";
import imgColdBrew from "@/assets/menu/cold-brew.png";
import imgCardamom from "@/assets/menu/cardamom-bun.png";
import imgSourdough from "@/assets/menu/sourdough.png";
import imgTartine from "@/assets/menu/tartine.png";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — Lab Coffee Works · Specialty Coffee, Matcha, Pastry · Birmingham" },
      {
        name: "description",
        content:
          "Browse the Lab Coffee Works menu — single-origin espresso, ceremonial matcha, seasonal botanical lattes, and house pastries. Crafted in Birmingham.",
      },
      { property: "og:title", content: "Lab Coffee Works — Menu" },
      {
        property: "og:description",
        content:
          "Single-origin espresso, ceremonial matcha, botanical lattes and house pastries.",
      },
    ],
  }),
  component: MenuPage,
});

interface Item {
  name: string;
  desc: string;
  price: string;
  img?: string;
  tags?: string[];
}

const sections: { title: string; items: Item[] }[] = [
  {
    title: "Espresso",
    items: [
      { name: "Espresso", desc: "Single origin, dialled fresh each morning", price: "3.20", img: imgEspresso, tags: ["vegan", "gf"] },
      { name: "Macchiato", desc: "A short pull, kissed with steamed milk", price: "3.40", img: imgMacchiato, tags: ["vegetarian", "dairy", "gf"] },
      { name: "Cortado", desc: "Equal parts espresso and silken milk", price: "3.80", img: imgCortado, tags: ["vegetarian", "dairy", "gf"] },
      { name: "Flat White", desc: "Honey-textured microfoam, double ristretto", price: "4.20", img: imgFlatWhite, tags: ["vegetarian", "dairy", "gf"] },
      { name: "Latte", desc: "Long, soft and slow", price: "4.30", img: imgLatte, tags: ["vegetarian", "dairy", "gf"] },
    ],
  },
  {
    title: "Botanicals",
    items: [
      { name: "Ceremonial Matcha", desc: "Uji first harvest, whisked with oat or whole milk", price: "5.20", img: imgMatcha, tags: ["vegan", "gf"] },
      { name: "Beetroot & Rose", desc: "House-blended, lightly sweet, served warm", price: "5.40", img: imgBeetroot, tags: ["vegan", "gf"] },
      { name: "Golden Turmeric", desc: "Stone-ground spice, black pepper, vanilla", price: "5.20", img: imgTurmeric, tags: ["vegan", "gf"] },
      { name: "Hojicha", desc: "Roasted Japanese green tea, toasty and gentle", price: "4.80", img: imgHojicha, tags: ["vegan", "gf"] },
    ],
  },
  {
    title: "Filter",
    items: [
      { name: "Chemex (for two)", desc: "A single-origin pour-over, brewed at the bar", price: "8.00", img: imgChemex, tags: ["vegan", "gf"] },
      { name: "V60", desc: "Bright, clean, made one cup at a time", price: "5.00", img: imgV60, tags: ["vegan", "gf"] },
      { name: "Cold Brew", desc: "Steeped 18 hours, served on ice", price: "4.80", img: imgColdBrew, tags: ["vegan", "gf"] },
    ],
  },
  {
    title: "Pastry & Plates",
    items: [
      { name: "Cardamom Bun", desc: "Laminated dough, sugar crust, daily-baked", price: "4.50", img: imgCardamom, tags: ["vegetarian", "dairy", "nuts"] },
      { name: "Sourdough Toast", desc: "Cultured butter, sea salt, raw honey", price: "5.50", img: imgSourdough, tags: ["vegetarian", "dairy"] },
      { name: "Seasonal Tartine", desc: "Ask the bar — it changes weekly", price: "9.00", img: imgTartine, tags: ["vegetarian"] },
    ],
  },
];

function MenuPage() {
  return (
    <main className="bg-bone">
      {/* Hero */}
      <section className="relative flex min-h-[80vh] items-end overflow-hidden bg-forest-deep px-6 pb-20 pt-40 md:px-12 md:pb-32 md:pt-44 lg:px-20">
        <ScienceLines className="absolute inset-0" color="var(--bone)" opacity={0.18} />
        <div className="relative">
          <motion.span
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="eyebrow text-bone/70"
          >
            The Menu
          </motion.span>
          <motion.h1
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="display mt-6 text-[clamp(72px,14vw,220px)] leading-[0.9] text-bone"
          >
            What we<br /><span className="serif-italic">brew today.</span>
          </motion.h1>
        </div>
      </section>

      {/* Sections */}
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.05 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto max-w-6xl px-6 py-24 md:px-12 md:py-32"
      >
        {sections.map((s, idx) => (
          <section key={s.title} className="mb-28 last:mb-0">
            <div className="mb-10 flex items-end justify-between gap-8">
              <h2 className="display text-5xl text-forest md:text-7xl">
                {s.title}
              </h2>
              <span className="eyebrow">No. 0{idx + 1}</span>
            </div>
            <RuledLine color="var(--ink)" />
            <ul className="mt-12 grid grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-2 md:gap-y-16">
              {s.items.map((item, i) => (
                <MenuRow key={item.name} item={item} delay={i * 0.05} />
              ))}
            </ul>
          </section>
        ))}

        <p className="mt-32 text-center serif-italic text-ink-soft">
          Our menu shifts with the seasons — beans rotate weekly, botanicals follow the harvest.
        </p>
      </motion.div>

      <Footer />
    </main>
  );
}

function MenuRow({ item, delay }: { item: Item; delay: number }) {
  return (
    <motion.li
      initial={{ y: 24, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay }}
      className="group relative grid grid-cols-[88px_1fr_auto] items-start gap-5 md:grid-cols-[112px_1fr_auto] md:gap-7"
    >
      {/* Cup image — expands and tilts on hover */}
      <div className="relative aspect-square w-full overflow-visible">
        {item.img && (
          <img
            src={item.img}
            alt={item.name}
            width={1024}
            height={1024}
            loading="lazy"
            className="absolute inset-0 h-full w-full origin-bottom object-contain transition-transform duration-[700ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-3 group-hover:rotate-[-6deg] group-hover:scale-[1.18]"
          />
        )}
      </div>

      <div className="min-w-0">
        <h3 className="serif-italic text-2xl leading-tight text-ink md:text-[26px]">
          {item.name}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-soft">{item.desc}</p>
        <DietaryTags tags={item.tags} />
      </div>

      <span className="font-light tabular-nums text-ink md:text-lg">
        £{item.price}
      </span>
    </motion.li>
  );
}
