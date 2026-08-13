import { GoldButton } from "@/components/gold-button";
import { salon } from "@/lib/data";

export function BookingCta() {
  return (
    <section className="relative overflow-hidden px-5 py-32 sm:px-10">
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/studio-reception.png"
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/70" />
      </div>
      <div className="relative mx-auto max-w-3xl text-center">
        <p className="eyebrow">Seuil</p>
        <h2 className="display-title mt-6 text-5xl sm:text-7xl">
          Entrez.
          <br />
          <span className="italic text-gold">Lentement.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-md text-sm leading-7 text-bone-dim">
          {salon.address} · {salon.district}
          <br />
          {salon.phone}
        </p>
        <div className="mt-10 flex justify-center">
          <GoldButton href="/rendez-vous">Demander une consultation</GoldButton>
        </div>
      </div>
    </section>
  );
}
