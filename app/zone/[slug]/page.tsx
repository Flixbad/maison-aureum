import { GoldButton } from "@/components/gold-button";
import { artists, formatPrice, getZone, works, zones } from "@/lib/data";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return zones.map((zone) => ({ slug: zone.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const zone = getZone(slug);
  if (!zone) return {};
  return {
    title: zone.name,
    description: zone.description,
  };
}

export default async function ZonePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const zone = getZone(slug);
  if (!zone) notFound();

  const recommended = artists.filter((artist) =>
    zone.recommended.includes(artist.slug),
  );
  const related = works.filter((work) => work.zone === zone.slug);

  return (
    <article className="pt-28">
      <section className="relative min-h-[70vh] overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={zone.image}
          alt={zone.name}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-ink via-ink/55 to-ink/30" />
        <div className="relative z-10 mx-auto flex min-h-[70vh] max-w-7xl flex-col justify-end px-5 pb-16 sm:px-8">
          <p className="eyebrow">{zone.latin}</p>
          <h1 className="display-title mt-4 text-6xl sm:text-8xl">{zone.name}</h1>
          <p className="mt-4 max-w-xl font-display text-xl italic text-bone-dim">
            {zone.short}
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-14 px-5 py-20 sm:px-8 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p className="font-display text-2xl leading-10 text-bone-dim italic">
            {zone.description}
          </p>
          <div className="mt-10">
            <p className="eyebrow">Placements</p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {zone.placements.map((place) => (
                <li
                  key={place}
                  className="border border-gold/25 px-4 py-2 text-sm text-bone-dim"
                >
                  {place}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <aside className="border border-gold/20 bg-ink-soft p-8 lg:col-span-5">
          <dl className="space-y-5">
            <div className="flex justify-between border-b border-gold/15 pb-4">
              <dt className="text-muted">À partir de</dt>
              <dd className="text-gold">{formatPrice(zone.fromPrice)}</dd>
            </div>
            <div className="flex justify-between border-b border-gold/15 pb-4">
              <dt className="text-muted">Durée</dt>
              <dd>{zone.duration}</dd>
            </div>
            <div className="flex justify-between border-b border-gold/15 pb-4">
              <dt className="text-muted">Sensation</dt>
              <dd>{zone.pain}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-muted">Cicatrisation</dt>
              <dd>{zone.healing}</dd>
            </div>
          </dl>
          <GoldButton href={`/rendez-vous?zone=${zone.slug}`} className="mt-8 w-full">
            Réserver cette zone
          </GoldButton>
        </aside>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-8">
        <p className="eyebrow">Mains recommandées</p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {recommended.map((artist) => (
            <Link
              key={artist.slug}
              href={`/artistes/${artist.slug}`}
              className="group grid grid-cols-[120px_1fr] overflow-hidden border border-gold/15"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={artist.portrait}
                alt={artist.name}
                className="h-full w-full object-cover grayscale transition group-hover:grayscale-0"
              />
              <div className="p-6">
                <h3 className="font-display text-2xl">{artist.name}</h3>
                <p className="mt-1 text-sm text-muted">{artist.role}</p>
                <p className="mt-3 text-xs text-gold">{artist.styles.join(" · ")}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {related.length > 0 ? (
        <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8">
          <p className="eyebrow">Pièces</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {related.map((work) => (
              <figure key={work.id} className="relative min-h-[320px] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={work.image}
                  alt={work.title}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-linear-to-t from-ink to-transparent p-5">
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
