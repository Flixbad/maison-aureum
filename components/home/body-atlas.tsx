"use client";

import { formatPrice, getArtist, type ZoneSlug, zones } from "@/lib/data";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const frontZones: ZoneSlug[] = [
  "tete",
  "torse",
  "bras-droit",
  "bras-gauche",
  "jambe-droite",
  "jambe-gauche",
];

export function BodyAtlas() {
  const [active, setActive] = useState<ZoneSlug>("torse");
  const zone = zones.find((item) => item.slug === active) ?? zones[1];

  return (
    <section id="atlas" className="relative scroll-mt-24 px-5 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">Atlas du corps</p>
            <h2 className="display-title mt-5 text-5xl sm:text-7xl">
              Choisissez
              <br />
              <span className="italic text-gold">la toile</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-7 text-muted">
            Sept territoires. Passez le curseur sur la silhouette — chaque zone
            ouvre son rituel, ses artistes, son tarif d&apos;entrée.
          </p>
        </div>

        <div className="mt-16 grid items-start gap-12 lg:grid-cols-12">
          <div className="relative lg:col-span-5">
            <div className="absolute inset-x-8 top-10 bottom-10 rounded-full bg-gold/8 blur-3xl" />
            <BodyFigure active={active} onSelect={setActive} />
          </div>

          <div className="lg:col-span-7">
            <div className="mb-8 grid grid-cols-2 gap-2 sm:grid-cols-4">
              {zones.map((item) => (
                <button
                  key={item.slug}
                  type="button"
                  data-cursor="hover"
                  onMouseEnter={() => setActive(item.slug)}
                  onClick={() => setActive(item.slug)}
                  className={cn(
                    "border px-3 py-3 text-left transition-all duration-400",
                    active === item.slug
                      ? "border-gold bg-gold/10 text-gold"
                      : "border-gold/15 text-bone-dim hover:border-gold/40",
                  )}
                >
                  <span className="font-cinzel text-[0.58rem] tracking-[0.22em] uppercase">
                    {item.latin}
                  </span>
                  <span className="mt-1 block font-display text-lg">{item.name}</span>
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.article
                key={zone.slug}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.45 }}
                className="overflow-hidden border border-gold/20 bg-ink-soft"
              >
                <div className="grid md:grid-cols-2">
                  <div className="relative min-h-[280px]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={zone.image}
                      alt={zone.name}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-ink via-transparent to-transparent" />
                  </div>
                  <div className="flex flex-col p-7 sm:p-9">
                    <p className="eyebrow">{zone.latin}</p>
                    <h3 className="mt-3 font-display text-4xl">{zone.name}</h3>
                    <p className="mt-4 text-sm leading-7 text-muted">{zone.description}</p>
                    <dl className="mt-6 grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <dt className="text-muted">À partir de</dt>
                        <dd className="mt-1 text-gold">{formatPrice(zone.fromPrice)}</dd>
                      </div>
                      <div>
                        <dt className="text-muted">Durée</dt>
                        <dd className="mt-1">{zone.duration}</dd>
                      </div>
                      <div>
                        <dt className="text-muted">Sensation</dt>
                        <dd className="mt-1">{zone.pain}</dd>
                      </div>
                      <div>
                        <dt className="text-muted">Cicatrisation</dt>
                        <dd className="mt-1">{zone.healing}</dd>
                      </div>
                    </dl>
                    <p className="mt-6 text-xs tracking-wide text-bone-dim">
                      Recommandé :{" "}
                      {zone.recommended
                        .map((slug) => getArtist(slug)?.name)
                        .filter(Boolean)
                        .join(" · ")}
                    </p>
                    <Link
                      href={`/zone/${zone.slug}`}
                      className="mt-8 inline-flex w-fit border-b border-gold pb-1 font-cinzel text-[0.65rem] tracking-[0.28em] text-gold uppercase"
                    >
                      Voir la zone
                    </Link>
                  </div>
                </div>
              </motion.article>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

function BodyFigure({
  active,
  onSelect,
}: {
  active: ZoneSlug;
  onSelect: (slug: ZoneSlug) => void;
}) {
  const fill = (slug: ZoneSlug) =>
    active === slug ? "rgba(196,164,106,0.55)" : "rgba(237,230,214,0.08)";
  const stroke = (slug: ZoneSlug) =>
    active === slug ? "#e8d5a3" : "rgba(196,164,106,0.35)";

  return (
    <div className="relative mx-auto w-full max-w-[360px]">
      <p className="mb-4 text-center font-cinzel text-[0.58rem] tracking-[0.35em] text-gold/70 uppercase">
        Face · Dos
      </p>
      <svg
        viewBox="0 0 360 720"
        className="w-full drop-shadow-[0_0_40px_rgba(196,164,106,0.12)]"
        role="img"
        aria-label="Silhouette interactive du corps"
      >
        <text
          x="90"
          y="28"
          textAnchor="middle"
          fill="#c4a46a"
          fontSize="10"
          letterSpacing="4"
        >
          FACE
        </text>
        <text
          x="270"
          y="28"
          textAnchor="middle"
          fill="#c4a46a"
          fontSize="10"
          letterSpacing="4"
        >
          DOS
        </text>

        {/* FRONT */}
        <g transform="translate(20,40)">
          <ellipse
            cx="70"
            cy="46"
            rx="26"
            ry="32"
            fill={fill("tete")}
            stroke={stroke("tete")}
            strokeWidth="1.2"
            className="cursor-none transition-all duration-300"
            onMouseEnter={() => onSelect("tete")}
            onClick={() => onSelect("tete")}
            data-cursor="hover"
          />
          <path
            d="M58 76h24l-3 22h-18z"
            fill={fill("tete")}
            stroke={stroke("tete")}
            strokeWidth="1"
            onMouseEnter={() => onSelect("tete")}
          />
          <path
            d="M52 96c-28 14-36 58-30 118 3 28 10 62 18 96h60c8-34 15-68 18-96 6-60-2-104-30-118z"
            fill={fill("torse")}
            stroke={stroke("torse")}
            strokeWidth="1.2"
            className="transition-all duration-300"
            onMouseEnter={() => onSelect("torse")}
            onClick={() => onSelect("torse")}
            data-cursor="hover"
          />
          <path
            d="M54 108c-22 12-40 48-38 92 1 28 6 48 14 62l16-10c-6-14-10-34-10-54 0-32 12-58 22-70z"
            fill={fill("bras-droit")}
            stroke={stroke("bras-droit")}
            strokeWidth="1.2"
            className="transition-all duration-300"
            onMouseEnter={() => onSelect("bras-droit")}
            onClick={() => onSelect("bras-droit")}
            data-cursor="hover"
          />
          <path
            d="M86 108c22 12 40 48 38 92-1 28-6 48-14 62l-16-10c6-14 10-34 10-54 0-32-12-58-22-70z"
            fill={fill("bras-gauche")}
            stroke={stroke("bras-gauche")}
            strokeWidth="1.2"
            className="transition-all duration-300"
            onMouseEnter={() => onSelect("bras-gauche")}
            onClick={() => onSelect("bras-gauche")}
            data-cursor="hover"
          />
          <path
            d="M58 310c-4 70-6 130-2 190 1 18 8 36 16 36 10 0 14-16 16-36 4-50 6-90 8-150z"
            fill={fill("jambe-droite")}
            stroke={stroke("jambe-droite")}
            strokeWidth="1.2"
            className="transition-all duration-300"
            onMouseEnter={() => onSelect("jambe-droite")}
            onClick={() => onSelect("jambe-droite")}
            data-cursor="hover"
          />
          <path
            d="M82 310c4 70 6 130 2 190-1 18-8 36-16 36-10 0-14-16-16-36-4-50-6-90-8-150z"
            fill={fill("jambe-gauche")}
            stroke={stroke("jambe-gauche")}
            strokeWidth="1.2"
            className="transition-all duration-300"
            onMouseEnter={() => onSelect("jambe-gauche")}
            onClick={() => onSelect("jambe-gauche")}
            data-cursor="hover"
          />
        </g>

        {/* BACK */}
        <g transform="translate(200,40)">
          <ellipse
            cx="70"
            cy="46"
            rx="26"
            ry="32"
            fill={fill("tete")}
            stroke={stroke("tete")}
            strokeWidth="1.2"
            className="transition-all duration-300"
            onMouseEnter={() => onSelect("tete")}
            onClick={() => onSelect("tete")}
          />
          <path d="M58 76h24l-3 18h-18z" fill={fill("tete")} stroke={stroke("tete")} />
          <path
            d="M50 94c-26 16-34 62-26 128 4 36 12 78 20 118h52c8-40 16-82 20-118 8-66 0-112-26-128z"
            fill={fill("dos")}
            stroke={stroke("dos")}
            strokeWidth="1.4"
            className="transition-all duration-300"
            onMouseEnter={() => onSelect("dos")}
            onClick={() => onSelect("dos")}
            data-cursor="hover"
          />
          <path
            d="M52 108c-22 12-40 48-38 92 1 28 6 48 14 62l16-10c-6-14-10-34-10-54 0-32 12-58 22-70z"
            fill={fill("bras-gauche")}
            stroke={stroke("bras-gauche")}
            strokeWidth="1.2"
            onMouseEnter={() => onSelect("bras-gauche")}
            onClick={() => onSelect("bras-gauche")}
          />
          <path
            d="M88 108c22 12 40 48 38 92-1 28-6 48-14 62l-16-10c6-14 10-34 10-54 0-32-12-58-22-70z"
            fill={fill("bras-droit")}
            stroke={stroke("bras-droit")}
            strokeWidth="1.2"
            onMouseEnter={() => onSelect("bras-droit")}
            onClick={() => onSelect("bras-droit")}
          />
          <path
            d="M58 340c-4 60-6 120-2 170 1 16 8 32 16 32 10 0 14-14 16-32 4-44 6-80 8-130z"
            fill={fill("jambe-gauche")}
            stroke={stroke("jambe-gauche")}
            strokeWidth="1.2"
            onMouseEnter={() => onSelect("jambe-gauche")}
            onClick={() => onSelect("jambe-gauche")}
          />
          <path
            d="M82 340c4 60 6 120 2 170-1 16-8 32-16 32-10 0-14-14-16-32-4-44-6-80-8-130z"
            fill={fill("jambe-droite")}
            stroke={stroke("jambe-droite")}
            strokeWidth="1.2"
            onMouseEnter={() => onSelect("jambe-droite")}
            onClick={() => onSelect("jambe-droite")}
          />
        </g>

        {frontZones.includes(active) || active === "dos" ? (
          <circle
            cx={active === "dos" ? 270 : 90}
            cy={
              active === "tete"
                ? 86
                : active === "torse" || active === "dos"
                  ? 230
                  : active.startsWith("bras")
                    ? 200
                    : 480
            }
            r="4"
            fill="#e8d5a3"
            className="hotspot-pulse"
          />
        ) : null}
      </svg>
    </div>
  );
}
