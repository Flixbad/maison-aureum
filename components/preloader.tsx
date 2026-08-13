"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export function Preloader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const seen = sessionStorage.getItem("aureum-intro");
    if (seen) {
      setShow(false);
      return;
    }

    const timer = window.setTimeout(() => {
      sessionStorage.setItem("aureum-intro", "1");
      setShow(false);
    }, 2800);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show ? (
        <motion.div
          className="fixed inset-0 z-[90] flex items-center justify-center bg-ink"
          exit={{ y: "-100%", transition: { duration: 1.05, ease: [0.76, 0, 0.24, 1] } }}
        >
          <div className="flex flex-col items-center gap-8 px-6">
            <motion.p
              className="eyebrow"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              Établissement 2014
            </motion.p>
            <div className="overflow-hidden">
              <motion.h1
                className="display-title text-center text-5xl text-bone sm:text-7xl"
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              >
                Maison Aureum
              </motion.h1>
            </div>
            <motion.div
              className="h-px w-40 origin-left bg-gold"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.55, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            />
            <motion.p
              className="font-display text-lg italic text-bone-dim"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              L&apos;art permanent
            </motion.p>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
