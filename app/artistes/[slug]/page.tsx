import { GoldButton } from "@/components/gold-button";
import { artists, getArtist, works, zones } from "@/lib/data";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return artists.map((artist) => ({ slug: artist.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const artist = getArtist(slug);
  if (!artist) return {};
  return { title: artist.name, description: artist.bio };
}

export default async function ArtistPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const artist = getArtist(slug);
  if (!artist) notFound();

  const portfolio = works.filter((work) => work.artist === artist.slug);
  const artistZones = zones.filter((zone) => artist.zones.includes(zone.slug));

  return (
    <article className="pt-28">
      <section className="mx-auto grid max-w-7xl items-end gap-10 px-5 pt-10 pb-16 sm:px-8 lg:grid-cols-12">
        <div className="relative min-h-[70vh] overflow-hidden lg:col-span-6">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={artist.portrait}
            alt={artist.name}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
        <div className="lg:col-span-6 lg:pb-8">
          <p className="eyebrow">{artist.role}</p>
          <h1 className="display-title mt-4 text-6xl sm:text-7xl">{artist.name}</h1>
          <p className="mt-6 font-display text-2xl italic text-gold">
            “{artist.quote}”
          </p>
          <p className="mt-6 text-sm leading-8 text-muted">{artist.bio}</p>
          <p className="mt-6 text-sm text-bone-dim">{artist.years} années de métier</p>
          <p className="mt-2 text-xs tracking-wide text-gold">
            {artist.styles.join(" · ")}
          </p>
          <GoldButton
            href={`/rendez-vous?artiste=${artist.slug}`}
            className="mt-8"
          >
            Réserver avec {artist.name.split(" ")[0]}
          </GoldButton>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-8">
        <p className="eyebrow">Zones de prédilection</p>
        <div className="mt-6 flex flex-wrap gap-3">
          {artistZones.map((zone) => (
            <Link
              key={zone.slug}
              href={`/zone/${zone.slug}`}
              className="border border-gold/25 px-4 py-2 text-sm hover:border-gold"
            >
              {zone.name}
            </Link>
          ))}
        </div>
      </section>

      {portfolio.length > 0 ? (
        <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8">
          <p className="eyebrow">Pièces</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {portfolio.map((work) => (
              <figure key={work.id} className="relative min-h-[360px] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={work.image}
                  alt={work.title}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-linear-to-t from-ink p-5">
                  <p className="font-display text-xl">{work.title}</p>
                  <p className="text-xs text-gold">{work.style}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      ) : null}
    </article>
  );
}
