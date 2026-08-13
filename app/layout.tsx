import type { Metadata } from "next";
import { Cinzel, Cormorant_Garamond, Outfit } from "next/font/google";
import { Footer } from "@/components/footer";
import { Grain } from "@/components/grain";
import { Header } from "@/components/header";
import { Providers } from "@/components/providers";
import "./globals.css";

const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const sans = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: "Maison Aureum — L'art permanent",
    template: "%s — Maison Aureum",
  },
  description:
    "Salon de tatouage haut de gamme. Fine line, blackwork, ornemental et réalisme. Consultation privée, artistes résidents, projets sur mesure.",
  keywords: [
    "salon de tatouage",
    "tatouage haut de gamme",
    "fine line",
    "blackwork",
    "ornemental",
    "Maison Aureum",
  ],
  openGraph: {
    title: "Maison Aureum — L'art permanent",
    description:
      "Un atelier privé où la peau devient une œuvre. Sept zones, quatre artistes, un seul standard.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${display.variable} ${sans.variable} ${cinzel.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-ink text-bone">
        <Providers>
          <Grain />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
