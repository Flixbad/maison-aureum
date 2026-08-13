"use client";

import { GoldButton } from "@/components/gold-button";
import { artists, zones } from "@/lib/data";
import { useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function BookingForm() {
  const searchParams = useSearchParams();
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");
  const [error, setError] = useState("");
  const defaults = useMemo(
    () => ({
      zone: searchParams.get("zone") ?? "",
      artist: searchParams.get("artiste") ?? "",
    }),
    [searchParams],
  );

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const zone = String(data.get("zone") ?? "");
    const idea = String(data.get("idea") ?? "").trim();

    if (name.length < 2) {
      setError("Indiquez votre nom complet.");
      return;
    }
    if (!emailPattern.test(email)) {
      setError("L'adresse e-mail n'est pas valide.");
      return;
    }
    if (phone.replace(/\D/g, "").length < 8) {
      setError("Indiquez un numéro joignable.");
      return;
    }
    if (!zone) {
      setError("Choisissez une zone du corps.");
      return;
    }
    if (idea.length < 12) {
      setError("Décrivez un peu l'idée — quelques phrases suffisent.");
      return;
    }

    setStatus("sending");
    await new Promise((resolve) => setTimeout(resolve, 900));
    setStatus("success");
  }

  if (status === "success") {
    return (
      <div className="border border-gold/30 bg-ink-soft p-10 text-center">
        <p className="eyebrow">Reçu</p>
        <h2 className="display-title mt-4 text-4xl">Votre demande est entre nos mains.</h2>
        <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-muted">
          L&apos;atelier revient vers vous sous 48 heures pour proposer un créneau
          de consultation. Aucun acompte n&apos;est demandé avant confirmation.
        </p>
      </div>
    );
  }

  const field =
    "w-full border border-gold/20 bg-transparent px-4 py-3 text-sm outline-none transition focus:border-gold";

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block font-cinzel text-[0.6rem] tracking-[0.24em] text-gold uppercase">
            Nom
          </span>
          <input name="name" className={field} autoComplete="name" required />
        </label>
        <label className="block">
          <span className="mb-2 block font-cinzel text-[0.6rem] tracking-[0.24em] text-gold uppercase">
            E-mail
          </span>
          <input name="email" type="email" className={field} autoComplete="email" required />
        </label>
        <label className="block">
          <span className="mb-2 block font-cinzel text-[0.6rem] tracking-[0.24em] text-gold uppercase">
            Téléphone
          </span>
          <input name="phone" type="tel" className={field} autoComplete="tel" required />
        </label>
        <label className="block">
          <span className="mb-2 block font-cinzel text-[0.6rem] tracking-[0.24em] text-gold uppercase">
            Zone
          </span>
          <select name="zone" className={field} defaultValue={defaults.zone} required>
            <option value="">Choisir</option>
            {zones.map((zone) => (
              <option key={zone.slug} value={zone.slug} className="bg-ink">
                {zone.name}
              </option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className="mb-2 block font-cinzel text-[0.6rem] tracking-[0.24em] text-gold uppercase">
            Artiste
          </span>
          <select name="artist" className={field} defaultValue={defaults.artist}>
            <option value="">Sans préférence</option>
            {artists.map((artist) => (
              <option key={artist.slug} value={artist.slug} className="bg-ink">
                {artist.name}
              </option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className="mb-2 block font-cinzel text-[0.6rem] tracking-[0.24em] text-gold uppercase">
            Disponibilité
          </span>
          <input name="when" type="date" className={field} />
        </label>
      </div>
      <label className="block">
        <span className="mb-2 block font-cinzel text-[0.6rem] tracking-[0.24em] text-gold uppercase">
          L&apos;idée
        </span>
        <textarea
          name="idea"
          rows={5}
          className={field}
          placeholder="Style, taille, références, première pièce ou non…"
        />
      </label>
      {error ? <p className="text-sm text-gold">{error}</p> : null}
      <GoldButton type="submit" className="w-full sm:w-auto">
        {status === "sending" ? "Envoi…" : "Envoyer la demande"}
      </GoldButton>
    </form>
  );
}
