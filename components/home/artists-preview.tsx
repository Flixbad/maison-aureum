import { artists } from "@/lib/data";
import Link from "next/link";

export function ArtistsPreview() {
  return (
    <section className="px-5 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <p className="eyebrow">Résidents</p>
        <h2 className="display-title mt-5 text-5xl sm:text-7xl">
          Quatre mains.
          <br />
          <span className="italic text-gold">Une maison.</span>
        </h2>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {artists.map((artist, index) => (
            <Link
              key={artist.slug}
              href={`/artistes/${artist.slug}`}
              className="group"
            >
              <div className="relative aspect-3/4 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={artist.portrait}
                  alt={artist.name}
                  className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-linear-to-t from-ink via-transparent to-transparent" />
                <p className="absolute top-4 left-4 font-cinzel text-[0.6rem] tracking-[0.3em] text-gold">
                  0{index + 1}
                </p>
              </div>
              <div className="mt-4">
                <h3 className="font-display text-2xl">{artist.name}</h3>
                <p className="mt-1 text-sm text-muted">{artist.role}</p>
                <p className="mt-2 text-xs tracking-wide text-gold/80">
                  {artist.styles.join(" · ")}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
