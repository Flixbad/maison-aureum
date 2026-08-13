"use client";

import { nav, salon } from "@/lib/data";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 right-0 left-0 z-50 transition-all duration-500",
        scrolled || open
          ? "border-b border-gold/15 bg-ink/80 backdrop-blur-xl"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link href="/" className="group flex items-center gap-3">
          <span className="relative block h-9 w-9 overflow-hidden rounded-full border border-gold/40">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/logo-mark.png"
              alt=""
              className="h-full w-full object-cover"
            />
          </span>
          <span className="font-display text-xl tracking-[0.18em] uppercase">
            {salon.shortName}
          </span>
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-cinzel text-[0.68rem] tracking-[0.28em] text-bone-dim uppercase transition-colors hover:text-gold"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/rendez-vous"
            className="hidden border border-gold/40 px-5 py-2 font-cinzel text-[0.62rem] tracking-[0.28em] text-gold uppercase transition-colors hover:bg-gold hover:text-ink sm:inline-flex"
          >
            Réserver
          </Link>
          <button
            type="button"
            className="relative h-10 w-10 md:hidden"
            aria-label="Menu"
            onClick={() => setOpen((value) => !value)}
          >
            <span
              className={cn(
                "absolute top-3.5 left-2 block h-px w-6 bg-bone transition-transform",
                open && "translate-y-1 rotate-45",
              )}
            />
            <span
              className={cn(
                "absolute bottom-3.5 left-2 block h-px w-6 bg-bone transition-transform",
                open && "-translate-y-1 -rotate-45",
              )}
            />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-gold/15 bg-ink md:hidden"
          >
            <div className="flex flex-col gap-6 px-6 py-8">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="font-display text-3xl"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
