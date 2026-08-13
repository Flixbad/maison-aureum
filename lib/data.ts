export type ZoneSlug =
  | "tete"
  | "torse"
  | "bras-droit"
  | "bras-gauche"
  | "dos"
  | "jambe-droite"
  | "jambe-gauche";

export type ArtistSlug = "elena-voss" | "marcus-hale" | "rio-kade" | "amina-solene";

export interface Zone {
  slug: ZoneSlug;
  name: string;
  latin: string;
  short: string;
  description: string;
  duration: string;
  fromPrice: number;
  pain: string;
  healing: string;
  image: string;
  recommended: ArtistSlug[];
  placements: string[];
}

export interface Artist {
  slug: ArtistSlug;
  name: string;
  role: string;
  styles: string[];
  portrait: string;
  bio: string;
  quote: string;
  years: number;
  zones: ZoneSlug[];
}

export interface Work {
  id: string;
  title: string;
  style: string;
  zone: ZoneSlug | "multi";
  artist: ArtistSlug;
  image: string;
  featured?: boolean;
}

export const salon = {
  name: "Maison Aureum",
  shortName: "Aureum",
  tagline: "L'art permanent",
  manifesto:
    "Nous ne marquons pas la peau. Nous sculptons une mémoire. Chaque trait est pensé, chaque silence est voulu, chaque séance est un rituel.",
  founded: 2014,
  address: "14, Passage des Orfèvres",
  district: "Quartier des Arts",
  city: "Ville-Lumière",
  phone: "01 84 20 14 08",
  email: "atelier@maisonaureum.com",
  hours: [
    { day: "Mardi — Vendredi", time: "11:00 — 20:00" },
    { day: "Samedi", time: "10:00 — 19:00" },
    { day: "Dimanche", time: "12:00 — 17:00" },
    { day: "Lundi", time: "Fermé" },
  ],
} as const;

export const zones: Zone[] = [
  {
    slug: "tete",
    name: "Tête",
    latin: "Caput",
    short: "Tempes, nuque, visage",
    description:
      "Le visage et le crâne demandent une main absolument sûre. Traits fins derrière l'oreille, ornemental sur la tempe, lettering à la nuque : ici, le dessin devient signature. Nous travaillons en séances courtes, lumière rasante, et ne commençons jamais sans un calque d'essai.",
    duration: "1h — 4h",
    fromPrice: 280,
    pain: "Sensible",
    healing: "8 — 12 jours",
    image: "/images/zone-tete.png",
    recommended: ["elena-voss", "rio-kade"],
    placements: ["Tempe", "Derrière l'oreille", "Nuque", "Ligne de mâchoire", "Cuir chevelu"],
  },
  {
    slug: "torse",
    name: "Torse",
    latin: "Thorax",
    short: "Poitrine, sternum, ventre",
    description:
      "Le torse est une architecture. Sternum ornemental, composition botanique sous les clavicules, pièce centrale qui respire avec le corps. Nous dessinons selon votre cage thoracique, jamais d'après un modèle plat.",
    duration: "3h — 2 jours",
    fromPrice: 450,
    pain: "Modérée à vive",
    healing: "14 — 21 jours",
    image: "/images/zone-torse.png",
    recommended: ["elena-voss", "amina-solene"],
    placements: ["Sternum", "Clavicules", "Poitrine", "Côtes", "Ventre"],
  },
  {
    slug: "bras-droit",
    name: "Bras droit",
    latin: "Brachium dextrum",
    short: "Épaule, manche, poignet",
    description:
      "Le bras droit porte souvent le premier grand récit. Demi-manche, manche complète, bracelet de poignet : nous construisons le flux pour que le dessin tourne avec le muscle, jamais contre lui.",
    duration: "4h — projet",
    fromPrice: 380,
    pain: "Modérée",
    healing: "12 — 18 jours",
    image: "/images/zone-bras-droit.png",
    recommended: ["marcus-hale", "rio-kade"],
    placements: ["Épaule", "Biceps", "Avant-bras", "Coude", "Poignet"],
  },
  {
    slug: "bras-gauche",
    name: "Bras gauche",
    latin: "Brachium sinistrum",
    short: "Épaule, manche, main",
    description:
      "Le bras gauche aime les récits plus intimes : serpent botanique, géométrie sacrée, fine line qui se dévoile au mouvement de la main. Idéal pour une première pièce ambitieuse.",
    duration: "3h — projet",
    fromPrice: 380,
    pain: "Modérée",
    healing: "12 — 18 jours",
    image: "/images/zone-bras-gauche.png",
    recommended: ["elena-voss", "rio-kade"],
    placements: ["Épaule", "Biceps", "Avant-bras", "Main", "Doigts"],
  },
  {
    slug: "dos",
    name: "Dos",
    latin: "Dorsum",
    short: "Omoplates, colonne, bas du dos",
    description:
      "Le dos est notre grande toile. Blackwork japonais, ornemental baroque, pièce qui descend la colonne : c'est ici que Maison Aureum signe ses œuvres les plus longues. Un projet de dos se pense en chapitres, jamais en une seule nuit.",
    duration: "2 — 8 séances",
    fromPrice: 900,
    pain: "Variable",
    healing: "18 — 28 jours",
    image: "/images/zone-dos.png",
    recommended: ["marcus-hale", "amina-solene"],
    placements: ["Nuque", "Omoplates", "Colonne", "Bas du dos", "Dos entier"],
  },
  {
    slug: "jambe-droite",
    name: "Jambe droite",
    latin: "Crus dextrum",
    short: "Cuisse, mollet, cheville",
    description:
      "La jambe offre de la surface et du mouvement. Vagues, pivoines, compositions verticales qui allongent la silhouette. Moins exposée au quotidien, elle convient aux pièces denses et aux premiers grands formats.",
    duration: "4h — projet",
    fromPrice: 420,
    pain: "Modérée",
    healing: "14 — 21 jours",
    image: "/images/zone-jambe-droite.png",
    recommended: ["marcus-hale", "amina-solene"],
    placements: ["Cuisse", "Genou", "Mollet", "Tibia", "Cheville"],
  },
  {
    slug: "jambe-gauche",
    name: "Jambe gauche",
    latin: "Crus sinistrum",
    short: "Hanche, mollet, pied",
    description:
      "La jambe gauche accueille souvent le pendant d'une composition, ou une pièce autonome plus géométrique. Nous travaillons l'équilibre du bassin jusqu'à la cheville pour que le corps reste une œuvre unique.",
    duration: "4h — projet",
    fromPrice: 420,
    pain: "Modérée",
    healing: "14 — 21 jours",
    image: "/images/zone-jambe-gauche.png",
    recommended: ["rio-kade", "elena-voss"],
    placements: ["Hanche", "Cuisse", "Mollet", "Cheville", "Pied"],
  },
];

export const artists: Artist[] = [
  {
    slug: "elena-voss",
    name: "Elena Voss",
    role: "Directrice artistique",
    styles: ["Fine line", "Botanique", "Ornemental"],
    portrait: "/images/artist-elena.png",
    bio: "Formée à la gravure avant l'aiguille, Elena dessine comme on grave le cuivre : peu de traits, beaucoup de silence. Elle dirige l'atelier et signe les pièces visages, sternums et compositions botaniques les plus délicates de la maison.",
    quote: "Un bon tatouage disparaît dans le corps. On ne le voit plus : on le reconnaît.",
    years: 14,
    zones: ["tete", "torse", "bras-gauche", "jambe-gauche"],
  },
  {
    slug: "marcus-hale",
    name: "Marcus Hale",
    role: "Maître blackwork",
    styles: ["Blackwork", "Japonais", "Grand format"],
    portrait: "/images/artist-marcus.png",
    bio: "Marcus construit des architectures d'encre. Manches, dos, pièces qui prennent des mois. Il vient du lettrage monumental et a passé sept ans à Tokyo avant de rejoindre Aureum en 2018.",
    quote: "Le noir n'est pas une absence. C'est la matière la plus précieuse que l'on puisse poser.",
    years: 16,
    zones: ["bras-droit", "dos", "jambe-droite"],
  },
  {
    slug: "rio-kade",
    name: "Rio Kade",
    role: "Géométrie & contemporain",
    styles: ["Géométrie", "Lettering", "Dotwork"],
    portrait: "/images/artist-rio.png",
    bio: "Rio compose des systèmes : cercles, axes, lettres qui tiennent comme une partition. Iel travaille le visage, les mains et les avant-bras avec une précision d'orfèvre.",
    quote: "La géométrie n'est pas froide. Elle est juste honnête.",
    years: 9,
    zones: ["tete", "bras-droit", "bras-gauche", "jambe-gauche"],
  },
  {
    slug: "amina-solene",
    name: "Amina Solène",
    role: "Réalisme & couleur",
    styles: ["Réalisme", "Portrait", "Couleur"],
    portrait: "/images/artist-amina.png",
    bio: "Amina peint plus qu'elle n'encre. Portraits, peaux, lumière : elle sait faire respirer une image sur le dos ou le torse sans jamais l'alourdir. Elle reçoit uniquement sur projet.",
    quote: "Je ne copie pas un visage. Je rends une présence.",
    years: 13,
    zones: ["torse", "dos", "jambe-droite"],
  },
];

export const works: Work[] = [
  {
    id: "w1",
    title: "Pivoine de clavicule",
    style: "Botanique",
    zone: "torse",
    artist: "elena-voss",
    image: "/images/work-botanical.png",
    featured: true,
  },
  {
    id: "w2",
    title: "Dragon dorsal",
    style: "Blackwork",
    zone: "dos",
    artist: "marcus-hale",
    image: "/images/work-dragon.png",
    featured: true,
  },
  {
    id: "w3",
    title: "Axe sacré",
    style: "Géométrie",
    zone: "bras-droit",
    artist: "rio-kade",
    image: "/images/work-geometry.png",
    featured: true,
  },
  {
    id: "w4",
    title: "Filigrane de gorge",
    style: "Ornemental",
    zone: "tete",
    artist: "elena-voss",
    image: "/images/work-ornamental.png",
    featured: true,
  },
  {
    id: "w5",
    title: "Planche d'atelier",
    style: "Flash",
    zone: "multi",
    artist: "marcus-hale",
    image: "/images/flash-sheet.png",
  },
  {
    id: "w6",
    title: "Nuque ornementale",
    style: "Fine line",
    zone: "tete",
    artist: "elena-voss",
    image: "/images/zone-tete.png",
  },
  {
    id: "w7",
    title: "Sternum botanique",
    style: "Botanique",
    zone: "torse",
    artist: "amina-solene",
    image: "/images/zone-torse.png",
  },
  {
    id: "w8",
    title: "Manche filigrane",
    style: "Ornemental",
    zone: "bras-droit",
    artist: "marcus-hale",
    image: "/images/zone-bras-droit.png",
  },
  {
    id: "w9",
    title: "Serpent de roses",
    style: "Fine line",
    zone: "bras-gauche",
    artist: "elena-voss",
    image: "/images/zone-bras-gauche.png",
  },
  {
    id: "w10",
    title: "Baroque dorsal",
    style: "Ornemental",
    zone: "dos",
    artist: "marcus-hale",
    image: "/images/zone-dos.png",
  },
  {
    id: "w11",
    title: "Vagues & pivoines",
    style: "Japonais",
    zone: "jambe-droite",
    artist: "marcus-hale",
    image: "/images/zone-jambe-droite.png",
  },
  {
    id: "w12",
    title: "Colonne géométrique",
    style: "Géométrie",
    zone: "jambe-gauche",
    artist: "rio-kade",
    image: "/images/zone-jambe-gauche.png",
  },
];

export const processSteps = [
  {
    index: "01",
    title: "Consultation",
    text: "Une heure, sans aiguille. Nous parlons du corps, de l'idée, du rythme de vie. Le projet naît ici, ou il n'a pas lieu.",
  },
  {
    index: "02",
    title: "Dessin",
    text: "Calques, essais, ajustements sur votre peau. Rien n'est tatoué tant que le trait n'est pas juste — pour vous, et pour nous.",
  },
  {
    index: "03",
    title: "Séance",
    text: "Lumière basse, silence choisi, pauses régulières. L'atelier n'est pas un comptoir : c'est une chambre de travail.",
  },
  {
    index: "04",
    title: "Soin",
    text: "Protocole écrit, suivi à sept jours, retouche offerte dans les trois mois si le trait le demande.",
  },
];

export const pricing = [
  {
    name: "Flash",
    range: "150 — 280",
    detail: "Pièces d'atelier, taille contenue, placement simple. Disponibles selon le livre du mois.",
  },
  {
    name: "Pièce moyenne",
    range: "380 — 820",
    detail: "Dessin original, une séance. Avant-bras, mollet, sternum, nuque.",
  },
  {
    name: "Grande pièce",
    range: "900 — 1 800",
    detail: "Demi-manche, dos haut, composition de torse. Une à deux séances.",
  },
  {
    name: "Projet",
    range: "Sur devis",
    detail: "Manche, dos entier, diptyque jambes. Calendrier dédié, acomptes clairs.",
  },
];

export const testimonials = [
  {
    name: "Clara M.",
    piece: "Sternum — Elena",
    text: "J'ai attendu deux ans avant d'oser. Elena a réduit mon idée à l'essentiel. Je ne vois plus un tatouage : je vois une ligne qui m'appartient.",
  },
  {
    name: "Julien R.",
    piece: "Dos — Marcus",
    text: "Six séances, aucune précipitation. Marcus m'a expliqué chaque chapitre. Le dos est devenu une architecture, pas un décor.",
  },
  {
    name: "Sasha L.",
    piece: "Avant-bras — Rio",
    text: "La géométrie de Rio est d'une précision rare. Le salon est silencieux, le thé est bon, et l'on se sent pris au sérieux.",
  },
];

export const nav = [
  { href: "/#atlas", label: "Atlas" },
  { href: "/galerie", label: "Galerie" },
  { href: "/artistes", label: "Artistes" },
  { href: "/rendez-vous", label: "Rendez-vous" },
];

export function getZone(slug: string) {
  return zones.find((zone) => zone.slug === slug);
}

export function getArtist(slug: string) {
  return artists.find((artist) => artist.slug === slug);
}

export function formatPrice(value: number) {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(value);
}
