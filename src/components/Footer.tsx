import { Link } from "@tanstack/react-router";
import { Instagram } from "lucide-react";
import { RuledLine } from "./RuledLine";

// TikTok inline icon — not in lucide
function TikTok({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.58a8.16 8.16 0 0 0 4.77 1.52V6.69a4.85 4.85 0 0 1-1.84 0z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="relative bg-cream px-6 pb-10 pt-20 md:px-12 md:pt-32 lg:px-20">
      <RuledLine className="mb-16" color="var(--ink)" />

      <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="flex items-baseline gap-2">
            <span className="display text-5xl text-forest">LAB</span>
            <span className="eyebrow">Coffee Works</span>
          </div>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-ink-soft">
            A specialty coffee laboratory in the heart of Birmingham.
            Considered, slow, and made with care.
          </p>
        </div>

        <div className="md:col-span-3">
          <span className="eyebrow">Visit</span>
          <address className="mt-4 not-italic text-sm leading-relaxed text-ink">
            27 Newhall Street<br />
            Birmingham, B3 3PU<br />
            United Kingdom
          </address>
        </div>

        <div className="md:col-span-2">
          <span className="eyebrow">Pages</span>
          <ul className="mt-4 space-y-2 text-sm">
            {[
              { to: "/", label: "Home" },
              { to: "/menu", label: "Menu" },
              { to: "/about", label: "About" },
              { to: "/contact", label: "Find Us" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-ink hover:text-forest">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2">
          <span className="eyebrow">Follow</span>
          <div className="mt-4 flex items-center gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-ink hover:text-forest"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="text-ink hover:text-forest"
            >
              <TikTok className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-20 flex flex-col items-start justify-between gap-4 border-t border-rule pt-6 text-[11px] uppercase tracking-[0.28em] text-ink-soft md:flex-row">
        <span>© {new Date().getFullYear()} Lab Coffee Works</span>
        <span>Brewed in Birmingham</span>
      </div>
    </footer>
  );
}
