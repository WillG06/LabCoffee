import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { RuledLine } from "@/components/RuledLine";
import { ScrollTextFill } from "@/components/ScrollTextFill";
import { Footer } from "@/components/Footer";
import aboutHero from "@/assets/about-hero.jpg";
import gInterior from "@/assets/gallery-interior.jpg";
import gPour from "@/assets/gallery-pour.jpg";
import gBeans from "@/assets/gallery-beans.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Lab Coffee Works · Birmingham Specialty Coffee" },
      {
        name: "description",
        content:
          "The story behind Lab Coffee Works: a specialty coffee laboratory in Birmingham, founded by baristas obsessed with the chemistry of extraction.",
      },
      { property: "og:title", content: "About Lab Coffee Works" },
      {
        property: "og:description",
        content: "A specialty coffee laboratory in the heart of Birmingham.",
      },
      { property: "og:image", content: aboutHero },
    ],
  }),
  component: AboutPage,
});

const team = [
  { name: "Elena Hart", role: "Founder & Head Roaster", bio: "A decade in specialty across London and Melbourne. Obsessed with the maths of a good cup." },
  { name: "Tomás Ríos", role: "Head Barista", bio: "Trained in Madrid, championed Britain's regional barista circuit twice." },
  { name: "Aoife Lynch", role: "Pastry & Plates", bio: "Quiet hands behind every laminated layer and seasonal tartine." },
  { name: "Marcus Webb", role: "Roastery Lead", bio: "Maths graduate turned roaster. Builds the profile sheets, weighs everything twice." },
];

const values = [
  { num: "I.", text: "Origin first. Beans are sourced direct, never anonymous." },
  { num: "II.", text: "Slow over scale. Quality is a tempo, not a quantity." },
  { num: "III.", text: "Considered service. Hospitality without performance." },
  { num: "IV.", text: "Made in Birmingham. A room built by local hands." },
];

const stickyChapters = [
  {
    no: "Chapter 01",
    title: "A question, not a concept",
    body: "We didn't start with a brand brief. We started with a question — what would a coffee shop look like if every decision was made on purpose? The bean. The water. The light at 3pm. The chair you sink into. Lab is the long answer.",
  },
  {
    no: "Chapter 02",
    title: "The roastery in Digbeth",
    body: "Every bean we serve is roasted four miles south, in a small Digbeth railway arch, on a 1990s Probat we restored ourselves. Small batches, profile sheets pinned to the wall, the whole place smelling of yesterday's Yirgacheffe.",
  },
  {
    no: "Chapter 03",
    title: "Built by local hands",
    body: "The plum velvet on the chairs was upholstered in Bordesley. The bar was cut from a single piece of English oak, oiled by a maker on Vyse Street. Everything you touch was made within a 20-minute drive of the door.",
  },
  {
    no: "Chapter 04",
    title: "A long answer, still being written",
    body: "We don't think we'll ever be finished. The menu changes with the season. The roast tightens with the weather. We learn something every Saturday morning that quietly rewrites the bar on Monday. That's the whole point.",
  },
];

function AboutPage() {
  return (
    <main className="bg-bone">
      {/* Hero */}
      <section className="relative flex min-h-[90vh] items-end overflow-hidden">
        <img
          src={aboutHero}
          alt="The Lab Coffee Works storefront in Birmingham at dusk"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/30 to-transparent" />
        <div className="relative z-10 px-6 pb-20 pt-44 md:px-12 md:pb-32 lg:px-20">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="eyebrow text-bone/80"
          >
            Our Story
          </motion.span>
          <motion.h1
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="display mt-4 max-w-4xl text-[clamp(56px,10vw,160px)] leading-[0.92] text-bone"
          >
            Built quietly, <span className="serif-italic">in a corner of Birmingham.</span>
          </motion.h1>
        </div>
      </section>

      {/* Brand story — scroll text fill */}
      <motion.section
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="px-6 py-32 md:px-12 md:py-44 lg:px-20"
      >
        <div className="mx-auto max-w-4xl">
          <ScrollTextFill
            className="display text-[clamp(28px,3.4vw,52px)] leading-[1.25] text-ink"
            text="We began as a question: what would a coffee shop look like if every decision — the bean, the water, the chair, the pause between cups — was made on purpose? Lab Coffee Works is our long answer. Not a chain, not a concept. A small room on Newhall Street where the coffee is precise, the room is calm, and the people behind the bar care about the difference a tenth of a gram makes."
          />
        </div>
      </motion.section>

      <RuledLine className="mx-auto max-w-6xl" color="var(--ink)" />

      {/* STICKY IMAGE / TEXT SPLIT — plain CSS sticky */}
      <section className="px-6 py-24 md:px-12 md:py-32 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16">
            <span className="eyebrow">A long answer</span>
            <h2 className="display mt-4 text-5xl text-forest md:text-7xl">
              How we<br /><span className="serif-italic">got here.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16">
            {/* Sticky image — pinned on desktop, on top on mobile */}
            <div className="md:sticky md:top-24 md:h-[80vh]">
              <div className="relative h-[60vh] w-full overflow-hidden md:h-full">
                <img
                  src={gInterior}
                  alt="Inside Lab Coffee Works — plum velvet, oak bar, slow afternoon light"
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </div>

            {/* Scrolling text blocks */}
            <div className="space-y-24 md:space-y-40 md:py-12">
              {stickyChapters.map((c, i) => (
                <motion.div
                  key={c.no}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.7, delay: i * 0.05 }}
                >
                  <span className="eyebrow text-forest">{c.no}</span>
                  <h3 className="display mt-4 text-3xl text-ink md:text-5xl">
                    {c.title}
                  </h3>
                  <p className="mt-6 text-base leading-relaxed text-ink-soft md:text-lg">
                    {c.body}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <RuledLine className="mx-auto max-w-6xl" color="var(--ink)" />

      {/* Team */}
      <motion.section
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="px-6 py-32 md:px-12 lg:px-20"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-20 flex items-end justify-between gap-8">
            <div>
              <span className="eyebrow">The Team</span>
              <h2 className="display mt-4 text-5xl text-forest md:text-7xl">
                Hands you'll<br /><span className="serif-italic">recognise.</span>
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 lg:grid-cols-4">
            {team.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: i * 0.12 }}
                className="group relative"
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-cream">
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "radial-gradient(circle at 50% 35%, oklch(0.55 0.06 152), oklch(0.28 0.05 152))",
                    }}
                  />
                  <div className="absolute inset-0 flex translate-y-4 items-end bg-ink/80 p-6 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="text-sm leading-relaxed text-bone">{t.bio}</p>
                  </div>
                </div>
                <div className="mt-6 flex items-baseline justify-between">
                  <h3 className="serif-italic text-2xl text-ink">{t.name}</h3>
                  <span className="eyebrow">{t.role}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Press strip */}
      <section className="border-y border-rule bg-cream px-6 py-16 md:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <p className="mb-10 text-center text-[10px] uppercase tracking-[0.32em] text-ink-soft">
            As mentioned in
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {["Caffeine Mag", "The Independent", "Birmingham Post", "Eater London", "Cereal", "Suitcase"].map((p) => (
              <span key={p} className="serif-italic text-xl text-ink-soft md:text-2xl">
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Numbers */}
      <motion.section
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="px-6 py-32 md:px-12 lg:px-20"
      >
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-12 md:grid-cols-4 md:gap-8">
          {[
            { n: "12", l: "Origins on the bar this season" },
            { n: "4mi", l: "From bean to cup, door to door" },
            { n: "07:30", l: "First espresso, every weekday" },
            { n: "1.2k", l: "Cups served each week" },
          ].map((s) => (
            <div key={s.n}>
              <p className="display text-6xl text-forest md:text-8xl">{s.n}</p>
              <p className="mt-3 max-w-[14ch] text-xs uppercase tracking-[0.24em] text-ink-soft">
                {s.l}
              </p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Process strip */}
      <section className="bg-bone px-6 py-24 md:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-12">
            {[
              { img: gBeans, title: "Sourced direct.", body: "We buy from cooperatives we've visited. Names, faces, harvest dates — never lots." },
              { img: gPour, title: "Roasted small.", body: "Six-kilo batches. Profiles tightened weekly. Nothing leaves the roastery older than ten days." },
              { img: gInterior, title: "Brewed slow.", body: "Each cup is timed, tasted and corrected. We'd rather take a minute longer than a minute less." },
            ].map((p, i) => (
              <motion.figure
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: i * 0.12 }}
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img src={p.img} alt={p.title} loading="lazy" className="h-full w-full object-cover" />
                </div>
                <h4 className="serif-italic mt-6 text-2xl text-ink">{p.title}</h4>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{p.body}</p>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <motion.section
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-forest-deep px-6 py-32 md:px-12 md:py-44 lg:px-20"
      >
        <div className="mx-auto max-w-6xl">
          <span className="eyebrow text-bone/70">Our Pillars</span>
          <RuledLine className="mt-8" color="var(--bone)" />
          <ul className="mt-16 space-y-12 md:space-y-16">
            {values.map((v, i) => (
              <motion.li
                key={v.num}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="grid grid-cols-12 items-baseline gap-6"
              >
                <span className="col-span-2 serif-italic text-2xl text-bone/50 md:text-3xl">
                  {v.num}
                </span>
                <p className="col-span-10 display text-3xl text-bone md:text-5xl lg:text-6xl">
                  {v.text}
                </p>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.section>

      <Footer />
    </main>
  );
}
