import { processSteps } from "@/lib/data";

export function Process() {
  return (
    <section className="relative overflow-hidden px-5 py-24 sm:px-10 lg:px-16">
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/ink-bloom.png"
          alt=""
          className="h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-ink/80" />
      </div>
      <div className="relative mx-auto max-w-7xl">
        <p className="eyebrow">Le rituel</p>
        <h2 className="display-title mt-5 text-5xl sm:text-7xl">
          Quatre temps.
        </h2>
        <div className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step) => (
            <article key={step.index} className="border-t border-gold/30 pt-6">
              <p className="font-display text-5xl text-gold/50">{step.index}</p>
              <h3 className="mt-4 font-display text-3xl">{step.title}</h3>
              <p className="mt-4 text-sm leading-7 text-muted">{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
