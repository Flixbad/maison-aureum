import { Reveal } from "@/components/reveal";
import { salon } from "@/lib/data";

export function Manifesto() {
  return (
    <section className="relative overflow-hidden px-5 py-28 sm:px-10 lg:px-16">
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <p className="eyebrow">Manifeste</p>
          <h2 className="display-title mt-6 text-5xl sm:text-7xl">
            Moins de bruit.
            <br />
            <span className="italic text-gold">Plus de trait.</span>
          </h2>
        </Reveal>
        <Reveal className="lg:col-span-6 lg:col-start-7" delay={0.12}>
          <p className="font-display text-2xl leading-10 text-bone-dim italic sm:text-3xl">
            {salon.manifesto}
          </p>
          <div className="mt-10 grid grid-cols-3 gap-6 border-t border-gold/20 pt-8">
            {[
              ["04", "Artistes"],
              ["07", "Zones"],
              [String(salon.founded), "Fondation"],
            ].map(([value, label]) => (
              <div key={label}>
                <p className="font-display text-4xl text-gold">{value}</p>
                <p className="mt-2 font-cinzel text-[0.62rem] tracking-[0.28em] text-muted uppercase">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
