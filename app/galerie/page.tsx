import { artists, works } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Galerie",
  description: "Pièces récentes de Maison Aureum — fine line, blackwork, ornemental, géométrie.",
};

export default function GaleriePage() {
  return (
    <div className="pt-32 pb-24">
      <header className="mx-auto max-w-7xl px-5 sm:px-8">
        <p className="eyebrow">Galerie</p>
        <h1 className="display-title mt-5 text-6xl sm:text-8xl">
          Le livre
          <span className="italic text-gold"> d&apos;or</span>
        </h1>
        <p className="mt-6 max-w-xl text-sm leading-7 text-muted">
          Une sélection de pièces réalisées à l&apos;atelier. Chaque image est un
          contrat silencieux entre une main, une peau, et le temps.
        </p>
      </header>
      <div className="mx-auto mt-16 columns-1 gap-4 px-5 sm:columns-2 sm:px-8 lg:columns-3">
        {works.map((work) => {
          const artist = artists.find((item) => item.slug === work.artist);
          return (
            <figure
              key={work.id}
              className="group relative mb-4 break-inside-avoid overflow-hidden"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={work.image}
                alt={work.title}
                className="w-full object-cover transition duration-700 group-hover:scale-[1.03]"
              />
              <figcaption className="absolute inset-x-0 bottom-0 translate-y-2 bg-linear-to-t from-ink via-ink/70 to-transparent p-5 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <p className="font-display text-2xl">{work.title}</p>
                <p className="mt-1 text-xs tracking-wide text-gold">
                  {work.style} · {artist?.name}
                </p>
              </figcaption>
            </figure>
          );
        })}
      </div>
    </div>
  );
}
