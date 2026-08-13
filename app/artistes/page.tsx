import { artists } from "@/lib/data";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Artistes",
  description: "Les quatre résidents de Maison Aureum.",
};

export default function ArtistesPage() {
  return (
    <div className="pt-32 pb-24">
      <header className="mx-auto max-w-7xl px-5 sm:px-8">
        <p className="eyebrow">Résidents</p>
        <h1 className="display-title mt-5 text-6xl sm:text-8xl">
          Les mains
          <span className="italic text-gold"> de la maison</span>
        </h1>
      </header>
      <div className="mx-auto mt-16 grid max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-2">
        {artists.map((artist, index) => (
          <Link
            key={artist.slug}
            href={`/artistes/${artist.slug}`}
            className="group grid overflow-hidden border border-gold/15 md:grid-cols-2"
          >
            <div className="relative min-h-[360px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={artist.portrait}
                alt={artist.name}
                className="absolute inset-0 h-full w-full object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
              />
            </div>
            <div className="flex flex-col justify-between bg-ink-soft p-8">
              <div>
                <p className="font-cinzel text-[0.62rem] tracking-[0.3em] text-gold">
                  0{index + 1}
                </p>
                <h2 className="mt-3 font-display text-4xl">{artist.name}</h2>
                <p className="mt-2 text-sm text-muted">{artist.role}</p>
                <p className="mt-6 font-display text-xl italic text-bone-dim">
                  “{artist.quote}”
                </p>
              </div>
              <p className="mt-8 text-xs tracking-wide text-gold">
                {artist.styles.join(" · ")}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
