"use client";

import { GoldButton } from "@/components/gold-button";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative h-svh min-h-[720px] overflow-hidden">
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.12 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.4, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/hero-studio.png"
          alt="Atelier Maison Aureum"
          className="h-full w-full object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-linear-to-b from-ink/55 via-ink/35 to-ink" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,#070605_80%)]" />

      <div className="relative z-10 flex h-full flex-col justify-end px-5 pb-16 sm:px-10 lg:px-16">
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Atelier privé · Depuis 2014
        </motion.p>
        <div className="mt-6 overflow-hidden">
          <motion.h1
            className="display-title max-w-5xl text-[18vw] leading-[0.82] text-bone sm:text-[12vw] lg:text-[9.5rem]"
            initial={{ y: "120%" }}
            animate={{ y: 0 }}
            transition={{ delay: 0.45, duration: 1.15, ease: [0.16, 1, 0.3, 1] }}
          >
            Maison
            <br />
            <span className="italic text-gold-bright">Aureum</span>
          </motion.h1>
        </div>
        <motion.div
          className="mt-8 flex max-w-3xl flex-col gap-8 sm:flex-row sm:items-end sm:justify-between"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <p className="max-w-md font-display text-xl leading-8 text-bone-dim italic sm:text-2xl">
            La peau comme toile. L&apos;or comme signature.
          </p>
          <div className="flex flex-wrap gap-3">
            <GoldButton href="/#atlas">Explorer l&apos;atlas</GoldButton>
            <GoldButton href="/rendez-vous" className="border-bone/25 text-bone hover:border-gold">
              Prendre rendez-vous
            </GoldButton>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 md:flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
      >
        <span className="font-cinzel text-[0.55rem] tracking-[0.4em] text-gold uppercase">
          Défiler
        </span>
        <span className="h-10 w-px origin-top bg-gold/70" />
      </motion.div>
    </section>
  );
}
