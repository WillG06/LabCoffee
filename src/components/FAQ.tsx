import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { RuledLine } from "./RuledLine";

const faqs = [
  {
    q: "Where is Lab Coffee Works located?",
    a: "We're at 27 Newhall Street, Birmingham B3 3PU — a five-minute walk from Snow Hill station and a stone's throw from the Jewellery Quarter.",
  },
  {
    q: "Do you take bookings or reservations?",
    a: "We don't take bookings — we keep the room walk-in only so there's always space for a last-minute coffee. For larger groups (6+), drop us a line and we'll do our best.",
  },
  {
    q: "What are your opening hours?",
    a: "Monday to Friday 07:30–18:00, Saturday 08:00–18:00, and Sunday 09:00–16:00.",
  },
  {
    q: "Do you serve oat, almond and other plant milks?",
    a: "Yes — oat, almond, soy and coconut are always on the bar at no extra charge. We use Minor Figures barista oat as our default.",
  },
  {
    q: "Are your pastries vegan or gluten-free?",
    a: "We always have at least one vegan and one gluten-free option in the cabinet. Ask at the bar — the lineup rotates daily.",
  },
  {
    q: "Do you sell whole beans to take home?",
    a: "We do. Single-origin and our house seasonal blend are available in 250g bags, freshly roasted in small batches at our Digbeth roastery.",
  },
  {
    q: "Is the café dog-friendly?",
    a: "Well-behaved dogs are very welcome — we keep a water bowl by the door.",
  },
  {
    q: "Do you have wifi and space to work?",
    a: "We have free wifi and a handful of seats suited to a quiet hour with a laptop. We're a slow café first though — please be considerate at busy times.",
  },
];

export function FAQ() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-bone px-6 py-32 md:px-12 md:py-40 lg:px-20"
    >
      <div className="mx-auto max-w-5xl">
        <div className="mb-16 grid grid-cols-1 items-end gap-8 md:grid-cols-12">
          <div className="md:col-span-7">
            <span className="eyebrow">Questions</span>
            <h2 className="display mt-4 text-5xl text-forest md:text-7xl">
              Things people<br />
              <span className="serif-italic">often ask.</span>
            </h2>
          </div>
          <p className="text-sm leading-relaxed text-ink-soft md:col-span-5">
            Anything else? Find us on the bar — or send a line via the
            details below.
          </p>
        </div>

        <RuledLine color="var(--ink)" />

        <ul className="divide-y divide-rule">
          {faqs.map((f, i) => (
            <FAQItem key={i} q={f.q} a={f.a} index={i} />
          ))}
        </ul>
      </div>

      {/* JSON-LD for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />
    </motion.section>
  );
}

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <li>
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-start justify-between gap-8 py-8 text-left transition-colors hover:text-forest"
        aria-expanded={open}
      >
        <span className="flex items-baseline gap-6">
          <span className="eyebrow text-ink-soft tabular-nums">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="serif-italic text-2xl text-ink md:text-3xl">{q}</span>
        </span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-2 shrink-0"
        >
          <Plus className="h-5 w-5 text-forest" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="ml-0 max-w-3xl pb-8 pl-12 text-base leading-relaxed text-ink-soft md:pl-20">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}
