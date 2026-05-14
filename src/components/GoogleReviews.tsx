import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Imogen R.",
    rating: 5,
    text: "Hands down the best flat white I've had in Birmingham. The room is gorgeous — quiet, considered, the kind of place you stay an hour longer than you meant to.",
    when: "2 weeks ago",
  },
  {
    name: "Dawit M.",
    rating: 5,
    text: "Been chasing a proper specialty spot in town for years. The Yirgacheffe pour-over is genuinely world-class. Staff actually know what they're talking about.",
    when: "1 month ago",
  },
  {
    name: "Sophie L.",
    rating: 5,
    text: "The beetroot rose latte is the most beautiful drink I've ever had served to me. Cardamom buns are unreal too. Already a regular.",
    when: "1 month ago",
  },
  {
    name: "Ben T.",
    rating: 5,
    text: "Calm, slow, and exactly what Newhall Street needed. Felt like stepping into a tiny corner of Melbourne.",
    when: "2 months ago",
  },
];

export function GoogleReviews() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-cream px-6 py-32 md:px-12 md:py-40 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div>
            <span className="eyebrow">Verified · Google Reviews</span>
            <h2 className="display mt-4 text-5xl text-forest md:text-7xl">
              In their <span className="serif-italic">words.</span>
            </h2>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-current text-forest" />
              ))}
            </div>
            <div>
              <p className="display text-3xl text-ink">4.9</p>
              <p className="text-[10px] uppercase tracking-[0.28em] text-ink-soft">
                from 312 reviews
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {reviews.map((r, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex h-full flex-col border border-rule bg-bone p-8"
            >
              <div className="mb-4 flex">
                {[...Array(r.rating)].map((_, idx) => (
                  <Star key={idx} className="h-3.5 w-3.5 fill-current text-forest" />
                ))}
              </div>
              <blockquote className="flex-1 text-sm leading-relaxed text-ink">
                "{r.text}"
              </blockquote>
              <figcaption className="mt-6 flex items-baseline justify-between">
                <span className="serif-italic text-lg text-ink">{r.name}</span>
                <span className="text-[10px] uppercase tracking-[0.24em] text-ink-soft">
                  {r.when}
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>

        <p className="mt-12 text-center text-xs uppercase tracking-[0.28em] text-ink-soft">
          <a
            href="https://www.google.com/maps"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-forest"
          >
            Read all reviews on Google →
          </a>
        </p>
      </div>
    </motion.section>
  );
}
