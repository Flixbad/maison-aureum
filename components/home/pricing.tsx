import { pricing } from "@/lib/data";

export function Pricing() {
  return (
    <section className="px-5 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="eyebrow">Honoraires</p>
          <h2 className="display-title mt-5 text-5xl sm:text-7xl">
            Une clarté
            <span className="italic text-gold"> rare</span>
          </h2>
          <p className="mt-6 text-sm leading-7 text-muted">
            Consultation offerte. Acompte de 30 % pour réserver une séance.
            Retouche incluse dans les 90 jours.
          </p>
        </div>
        <div className="mt-14 grid gap-4 md:grid-cols-2">
          {pricing.map((item) => (
            <article
              key={item.name}
              className="flex flex-col justify-between border border-gold/15 p-8 transition-colors hover:border-gold/45"
            >
              <div>
                <h3 className="font-display text-3xl">{item.name}</h3>
                <p className="mt-4 text-sm leading-7 text-muted">{item.detail}</p>
              </div>
              <p className="mt-8 font-display text-4xl text-gold">
                {item.range === "Sur devis" ? item.range : `${item.range} €`}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
