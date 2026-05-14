import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Find Us" },
] as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [tone, setTone] = useState<{ ink: string } | null>(null);
  const path = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onTone = (e: Event) => {
      const detail = (e as CustomEvent<{ bg: string; ink: string }>).detail;
      if (detail) setTone({ ink: detail.ink });
    };
    window.addEventListener("lab:hero-tone", onTone);
    return () => window.removeEventListener("lab:hero-tone", onTone);
  }, []);

  // Reset tone on route change — only the home hero broadcasts
  useEffect(() => {
    setOpen(false);
    if (path !== "/") setTone(null);
  }, [path]);

  const overHero = !scrolled && path === "/" && tone;
  const inkColor = overHero ? tone!.ink : undefined;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-700 ${
          scrolled
            ? "border-b border-rule bg-bone/85 backdrop-blur-[12px]"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-14 max-w-[1600px] items-center justify-between px-6 md:h-16 md:px-12 lg:px-20">
          <Link to="/" className="group flex items-baseline gap-1.5">
            <motion.span
              className="display text-lg font-medium md:text-xl"
              animate={{ color: inkColor ?? "var(--forest)" }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              LAB
            </motion.span>
            <motion.span
              className="text-[9px] uppercase tracking-[0.32em]"
              animate={{ color: inkColor ?? "var(--ink-soft)", opacity: inkColor ? 0.7 : 1 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              Coffee Works
            </motion.span>
          </Link>

          <nav className="hidden items-center gap-10 md:flex">
            {links.map((l) => {
              const active = path === l.to;
              return (
                <Link
                  key={l.to}
                  to={l.to}
                  className="group relative text-[11px] uppercase tracking-[0.28em]"
                >
                  <motion.span
                    animate={{ color: inkColor ?? "var(--ink)" }}
                    transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                  >
                    {l.label}
                  </motion.span>
                  <span
                    aria-hidden
                    className={`pointer-events-none absolute -bottom-1.5 left-0 right-0 h-px origin-left transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                    style={{ background: inkColor ?? "var(--forest)" }}
                  />
                </Link>
              );
            })}
          </nav>

          <button
            onClick={() => setOpen(true)}
            className="md:hidden"
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" style={{ color: inkColor ?? "var(--ink)" }} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[60] flex flex-col bg-bone px-8 py-8"
          >
            <div className="flex items-center justify-between">
              <span className="display text-2xl text-forest">LAB</span>
              <button onClick={() => setOpen(false)} aria-label="Close menu">
                <X className="h-6 w-6 text-ink" />
              </button>
            </div>
            <nav className="mt-20 flex flex-col gap-8">
              {links.map((l, i) => (
                <motion.div
                  key={l.to}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.15 + i * 0.08, duration: 0.6 }}
                >
                  <Link
                    to={l.to}
                    className="display text-5xl text-ink"
                    onClick={() => setOpen(false)}
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
