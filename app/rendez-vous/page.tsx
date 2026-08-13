import { BookingForm } from "@/components/booking-form";
import { salon } from "@/lib/data";
import type { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Rendez-vous",
  description: "Demander une consultation privée à Maison Aureum.",
};

export default function BookingPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="mx-auto grid max-w-7xl gap-16 px-5 sm:px-8 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="eyebrow">Consultation</p>
          <h1 className="display-title mt-5 text-6xl">
            Une heure.
            <br />
            <span className="italic text-gold">Sans aiguille.</span>
          </h1>
          <p className="mt-6 text-sm leading-8 text-muted">
            Nous ne prenons pas de walk-in. La première rencontre sert à
            comprendre le corps, l&apos;idée et le calendrier. Si le projet n&apos;est
            pas juste, nous le dirons.
          </p>
          <div className="mt-10 space-y-4 text-sm">
            <p>
              {salon.address}
              <br />
              {salon.district}, {salon.city}
            </p>
            <p className="text-gold">{salon.phone}</p>
            <ul className="space-y-2 text-bone-dim">
              {salon.hours.map((item) => (
                <li key={item.day} className="flex justify-between gap-6">
                  <span>{item.day}</span>
                  <span>{item.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="lg:col-span-7">
          <Suspense fallback={<div className="h-96 border border-gold/15" />}>
            <BookingForm />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
