import { salon, zones } from "@/lib/data";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-gold/15 bg-ink-soft">
      <div className="pointer-events-none absolute inset-x-0 -top-24 text-center font-display text-[18vw] leading-none text-gold/[0.06] select-none">
        AUREUM
      </div>
      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <p className="eyebrow">Maison</p>
          <h2 className="mt-4 font-display text-5xl">Aureum</h2>
          <p className="mt-5 max-w-md text-sm leading-7 text-muted">
            {salon.manifesto}
          </p>
        </div>
        <div>
          <p className="eyebrow">Atlas</p>
          <ul className="mt-5 space-y-2">
            {zones.map((zone) => (
              <li key={zone.slug}>
                <Link
                  href={`/zone/${zone.slug}`}
                  className="text-sm text-bone-dim transition-colors hover:text-gold"
                >
                  {zone.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="eyebrow">Atelier</p>
          <p className="mt-5 text-sm leading-7 text-bone-dim">
            {salon.address}
            <br />
            {salon.district}
            <br />
            {salon.city}
          </p>
          <p className="mt-4 text-sm text-gold">{salon.phone}</p>
          <p className="text-sm text-bone-dim">{salon.email}</p>
        </div>
      </div>
      <div className="gold-line" />
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-6 text-[0.7rem] tracking-[0.2em] text-muted uppercase sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <span>© {new Date().getFullYear()} Maison Aureum</span>
        <span>Consultation privée · Sur rendez-vous</span>
      </div>
    </footer>
  );
}
