import { GoldButton } from "@/components/gold-button";
import { works } from "@/lib/data";
import Link from "next/link";

export function GalleryPreview() {
  const featured = works.filter((work) => work.featured);

  return (
    <section className="px-5 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="eyebrow">Livre d&apos;or</p>
            <h2 className="display-title mt-5 text-5xl sm:text-7xl">
              Pièces
              <span className="italic text-gold"> récentes</span>
            </h2>
          </div>
          <GoldButton href="/galerie" className="hidden sm:inline-flex">
            Toute la galerie
          </GoldButton>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {featured.map((work, index) => (
            <Link
              key={work.id}
              href="/galerie"
              className={`group relative overflow-hidden ${index === 0 ? "md:col-span-2 md:row-span-2 min-h-[420px]" : "min-h-[280px]"}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={work.image}
                alt={work.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-ink via-ink/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="font-cinzel text-[0.6rem] tracking-[0.28em] text-gold uppercase">
                  {work.style}
                </p>
                <h3 className="mt-2 font-display text-2xl">{work.title}</h3>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-8 sm:hidden">
          <GoldButton href="/galerie">Toute la galerie</GoldButton>
        </div>
      </div>
    </section>
  );
}
