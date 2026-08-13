import { ArtistsPreview } from "@/components/home/artists-preview";
import { BodyAtlas } from "@/components/home/body-atlas";
import { BookingCta } from "@/components/home/booking-cta";
import { GalleryPreview } from "@/components/home/gallery-preview";
import { Hero } from "@/components/home/hero";
import { Manifesto } from "@/components/home/manifesto";
import { Marquee } from "@/components/home/marquee";
import { Pricing } from "@/components/home/pricing";
import { Process } from "@/components/home/process";
import { Testimonials } from "@/components/home/testimonials";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Manifesto />
      <Marquee />
      <BodyAtlas />
      <GalleryPreview />
      <ArtistsPreview />
      <Process />
      <Pricing />
      <Testimonials />
      <BookingCta />
    </>
  );
}
