import { testimonials } from "@/lib/data";

export function Testimonials() {
  return (
    <section className="border-y border-gold/15 bg-ink-soft px-5 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <p className="eyebrow">Voix</p>
        <h2 className="display-title mt-5 text-5xl">Ils ont franchi le seuil</h2>
        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {testimonials.map((item) => (
            <blockquote key={item.name} className="border-l border-gold/40 pl-6">
              <p className="font-display text-2xl leading-9 italic text-bone-dim">
                “{item.text}”
              </p>
              <footer className="mt-6">
                <p className="text-sm text-bone">{item.name}</p>
                <p className="mt-1 font-cinzel text-[0.6rem] tracking-[0.24em] text-gold uppercase">
                  {item.piece}
                </p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
