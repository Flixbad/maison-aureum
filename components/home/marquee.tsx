const words = [
  "Ornemental",
  "Blackwork",
  "Fine line",
  "Japonais",
  "Réalisme",
  "Géométrie",
  "Lettering",
  "Botanique",
];

export function Marquee() {
  const line = [...words, ...words, ...words];
  return (
    <div className="overflow-hidden border-y border-gold/15 py-5">
      <div className="marquee-track flex w-max gap-10">
        {line.map((word, index) => (
          <span
            key={`${word}-${index}`}
            className="font-display text-3xl text-gold/70 italic sm:text-5xl"
          >
            {word}
            <span className="mx-8 text-gold/30">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
