import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Footer } from "@/components/Footer";
import { RuledLine } from "@/components/RuledLine";
import { FAQ } from "@/components/FAQ";
import { GoogleReviews } from "@/components/GoogleReviews";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Find Us — Lab Coffee Works · 27 Newhall Street, Birmingham" },
      {
        name: "description",
        content:
          "Walk-in only. Find Lab Coffee Works at 27 Newhall Street, Birmingham. Opening hours, directions, and FAQs.",
      },
      { property: "og:title", content: "Find Lab Coffee Works" },
      {
        property: "og:description",
        content:
          "27 Newhall Street, Birmingham. Walk-in only. Quiet, considered specialty coffee.",
      },
    ],
  }),
  component: FindUsPage,
});

function FindUsPage() {
  return (
    <main className="bg-bone">
      <section className="px-6 pt-40 md:px-12 md:pt-48 lg:px-20">
        <div className="mx-auto max-w-6xl text-center">
          <span className="eyebrow">Walk-in Only</span>
          <h1 className="display mt-6 text-[clamp(56px,9vw,140px)] leading-[0.95] text-ink">
            Find <span className="serif-italic">us.</span>
          </h1>
          <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-ink-soft">
            We don't take bookings — the room stays open for whoever wanders in.
            Pop down, grab the velvet chair by the window, and we'll dial something
            in for you.
          </p>
          <RuledLine className="mx-auto mt-12 w-32" color="var(--forest)" />
        </div>
      </section>

      {/* Visit details */}
      <motion.section
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="px-6 py-24 md:px-12 md:py-28 lg:px-20"
      >
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 md:grid-cols-3 md:gap-12">
          <div>
            <span className="eyebrow text-forest">Visit</span>
            <p className="mt-5 serif-italic text-2xl leading-snug text-ink">
              27 Newhall Street<br />
              Birmingham, B3 3PU<br />
              United Kingdom
            </p>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=27+Newhall+Street+Birmingham+B3+3PU"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.28em] text-forest"
            >
              Get directions <span aria-hidden>→</span>
            </a>
          </div>
          <div>
            <span className="eyebrow text-forest">Speak</span>
            <p className="mt-5 serif-italic text-2xl leading-snug text-ink">
              +44 (0) 121 555 0173<br />
              hello@labcoffeeworks.co.uk
            </p>
            <p className="mt-4 text-sm text-ink-soft">
              Best for press, hire & wholesale only.
            </p>
          </div>
          <div>
            <span className="eyebrow text-forest">Hours</span>
            <ul className="mt-5 space-y-2 text-base text-ink">
              <li className="flex justify-between border-b border-rule pb-2"><span>Mon — Fri</span><span className="tabular-nums">07:30 — 18:00</span></li>
              <li className="flex justify-between border-b border-rule pb-2"><span>Saturday</span><span className="tabular-nums">08:00 — 18:00</span></li>
              <li className="flex justify-between"><span>Sunday</span><span className="tabular-nums">09:00 — 16:00</span></li>
            </ul>
          </div>
        </div>
      </motion.section>

      {/* Full-width map */}
      <motion.section
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative w-full"
      >
        <div className="relative h-[60vh] w-full overflow-hidden border-y border-rule md:h-[75vh]">
          <iframe
            title="Lab Coffee Works on the map"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-1.9075%2C52.4825%2C-1.8975%2C52.4855&layer=mapnik&marker=52.484%2C-1.9025"
            loading="lazy"
            className="pointer-events-none h-full w-full grayscale"
            style={{ border: 0 }}
          />
          {/* address pill overlay */}
          <div className="pointer-events-none absolute bottom-6 left-6 max-w-xs border border-ink/10 bg-bone/90 p-6 backdrop-blur-md md:bottom-10 md:left-10">
            <span className="eyebrow text-forest">Lab Coffee Works</span>
            <p className="mt-2 serif-italic text-xl text-ink">
              27 Newhall Street, Birmingham
            </p>
          </div>
          {/* Open in maps — replaces wheel-hijack interaction */}
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=27+Newhall+Street+Birmingham+B3+3PU"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute right-6 top-6 inline-flex items-center gap-2 border border-ink/15 bg-bone/90 px-5 py-3 text-[11px] uppercase tracking-[0.28em] text-ink backdrop-blur-md transition-colors hover:bg-bone md:right-10 md:top-10"
          >
            Open in Maps <span aria-hidden>→</span>
          </a>
        </div>
      </motion.section>

      {/* Google Reviews */}
      <GoogleReviews />

      {/* FAQ */}
      <FAQ />

      <Footer />
    </main>
  );
}
