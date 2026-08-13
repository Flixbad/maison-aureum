# Architecture

```
app/                 App Router Next.js
  page.tsx           Landing cinématique
  zone/[slug]        Fiches de zones
  artistes           Résidents
  galerie            Livre d'or
  rendez-vous        Consultation
components/
  home/              Sections de la landing
  booking-form.tsx   Formulaire validé
lib/data.ts          Source unique de contenu
public/images        Visuels servis
```

## Choix

- **Contenu centralisé** dans `lib/data.ts` pour faire évoluer le salon sans toucher l'UI.
- **Client components** uniquement là où l'interaction l'exige (atlas, curseur, formulaire, header).
- **Images locales** pour un rendu premium hors-ligne.
- **Lenis + Framer Motion** pour le rythme, pas pour le bruit.
