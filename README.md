# Maison Aureum

Site vitrine d'un salon de tatouage haut de gamme.

**Maison Aureum** est un atelier privé fictif : fine line, blackwork, ornemental, géométrie et réalisme. Le site est conçu comme un objet éditorial — sombre, cinématique, précieux.

## Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion
- Lenis (scroll fluide)

## Lancer le projet

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

```bash
npm run build
npm start
```

## Pages

| Route | Contenu |
| --- | --- |
| `/` | Expérience complète : hero, manifeste, atlas du corps, galerie, artistes, rituel, tarifs |
| `/zone/[slug]` | Fiche de zone (Tête, Torse, Bras, Dos, Jambes) |
| `/galerie` | Livre d'or |
| `/artistes` | Résidents |
| `/artistes/[slug]` | Portrait d'artiste |
| `/rendez-vous` | Demande de consultation |

## Atlas du corps

Sept territoires cliquables :

- Tête
- Torse
- Bras droit
- Bras gauche
- Dos
- Jambe droite
- Jambe gauche

## Arborescence

```
app/            pages et styles
components/     UI, home, formulaire
lib/            contenus et utilitaires
public/images/  visuels
docs/           documentation
assets/         originaux
```

## Variables d'environnement

Voir `.env.example`. Aucune clé n'est requise pour le développement local.

## Licence

MIT — voir `LICENSE`.
