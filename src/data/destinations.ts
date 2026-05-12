export type Destination = {
  id: string;
  name: string;
  country: string;
  tagline: string;
  imageUrl: string;
};

export const destinations: Destination[] = [
  {
    id: "kyoto",
    name: "Kyoto",
    country: "Japão",
    tagline: "Templos ao amanhecer",
    imageUrl: "images/japao.avif",
  },
  {
    id: "santorini",
    name: "Santorini",
    country: "Grécia",
    tagline: "Horizonte sobre o Egeu",
    imageUrl: "images/Grécia.jpg",
  },
  {
    id: "patagonia",
    name: "Patagônia",
    country: "Argentina / Chile",
    tagline: "Geleiras e silêncio",
    imageUrl: "images/patagonia.jpg",
  },
  {
    id: "maldives",
    name: "Maldivas",
    country: "Maldivas",
    tagline: "Águas cristalinas",
    imageUrl: "images/Maldivas.jpg",
  },
  {
    id: "iceland",
    name: "Islândia",
    country: "Islândia",
    tagline: "Auroras e fiorde",
    imageUrl: "images/Islandia.avif",
  },
  {
    id: "marrakech",
    name: "Marrakech",
    country: "Marrocos",
    tagline: "Souks e palácios",
    imageUrl: "images/Marrocos.webp",
  },
];
