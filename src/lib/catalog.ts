import jetourT2 from "@/assets/vehicles/jetour-t2.jpg.asset.json";
import jetourX90 from "@/assets/vehicles/jetour-x90-plus.jpg.asset.json";
import changanUniK from "@/assets/vehicles/changan-uni-k.jpg.asset.json";
import havalBigDog from "@/assets/vehicles/haval-big-dog.jpg.asset.json";
import kiaSportage from "@/assets/vehicles/kia-sportage.jpg.asset.json";
import geelyBoyue from "@/assets/vehicles/geely-boyue-l.jpg.asset.json";
import changanUniT from "@/assets/vehicles/changan-uni-t.jpg.asset.json";
import jetourX70 from "@/assets/vehicles/jetour-x70-plus.jpg.asset.json";
import exeedRx from "@/assets/vehicles/exeed-rx.jpg.asset.json";
import forthingT5 from "@/assets/vehicles/forthing-t5-evo.jpg.asset.json";
import bydSong from "@/assets/vehicles/byd-song-plus.jpg.asset.json";
import bydSeagull from "@/assets/vehicles/byd-seagull.jpg.asset.json";
import defender from "@/assets/vehicles/land-rover-defender.jpg.asset.json";
import audiImage from "@/assets/hero-supercar-audi.jpg";
import ferrariImage from "@/assets/hero-supercar-ferrari.jpg";
import lexusImage from "@/assets/hero-supercar-lexus.jpg";
import btpImage from "@/assets/catalogue-btp.jpg.asset.json";
import caterpillarImage from "@/assets/catalogue-caterpillar.jpg.asset.json";
import trucksImage from "@/assets/catalogue-trucks.jpg.asset.json";
import coachesImage from "@/assets/catalogue-coaches.jpg.asset.json";

export type Product = {
  slug: string;
  name: string;
  category: "SUV" | "Électrique" | "Prestige" | "Blindé" | "BTP & Transport";
  year: string;
  price: string;
  image: string;
  summary: string;
  specs: string[];
  featured?: boolean;
  catalog?: boolean;
};

export const products: Product[] = [
  { slug: "jetour-t2", name: "Jetour T2", category: "SUV", year: "2025", price: "24 000 000 FCFA", image: jetourT2.url, summary: "SUV tout-terrain en édition limitée, disponible à Ouagadougou.", specs: ["Édition limitée", "Style tout-terrain", "Livraison à Ouagadougou"], featured: true, catalog: true },
  { slug: "jetour-x90-plus", name: "Jetour X90 Plus", category: "SUV", year: "Sur commande", price: "14 500 000 FCFA", image: jetourX90.url, summary: "SUV familial robuste disponible en configuration 5 ou 7 places.", specs: ["Moteur 1.6T ou 2.0T", "Boîte automatique DCT", "Toit panoramique"], featured: true, catalog: true },
  { slug: "changan-uni-k", name: "Changan UNI-K", category: "SUV", year: "2023–2024", price: "14 500 000 FCFA HT", image: changanUniK.url, summary: "Grand crossover au design distinctif et à l'habitacle spacieux.", specs: ["2.0L Turbo, 233 ch", "Boîte automatique 8 rapports", "Caméra 360°"], featured: true, catalog: true },
  { slug: "haval-big-dog", name: "Haval Big Dog", category: "SUV", year: "2024", price: "14 500 000 FCFA HT", image: havalBigDog.url, summary: "SUV robuste orienté tout-terrain, proposé en 2WD ou 4WD.", specs: ["1.5L ou 2.0L turbo", "DCT 7 rapports", "Phares LED"], catalog: true },
  { slug: "kia-sportage", name: "Kia Sportage NQ5", category: "SUV", year: "2023–2024", price: "13 500 000 FCFA", image: kiaSportage.url, summary: "SUV nouvelle génération avec équipements modernes et finition soignée.", specs: ["Essence, diesel ou hybride", "Jantes alliage", "Barres de toit"], catalog: true },
  { slug: "geely-boyue-l", name: "Geely Boyue L", category: "SUV", year: "2025–2026", price: "14 500 000 FCFA", image: geelyBoyue.url, summary: "SUV compact technologique, également commercialisé comme Starray ou Atlas.", specs: ["1.5L 181 ch ou 2.0L 218 ch", "DCT 7 rapports", "Aides ADAS"], catalog: true },
  { slug: "changan-uni-t", name: "Changan UNI-T", category: "SUV", year: "2023–2024", price: "12 500 000 FCFA HT", image: changanUniT.url, summary: "Crossover compact au profil coupé et au design futuriste.", specs: ["1.5L Turbo", "180–188 ch", "DCT 7 rapports"], catalog: true },
  { slug: "jetour-x70-plus", name: "Jetour X70 Plus", category: "SUV", year: "2021", price: "13 500 000 FCFA", image: jetourX70.url, summary: "SUV familial polyvalent disponible en 5 ou 7 places.", specs: ["1.5L 156 ch ou 1.6L 197 ch", "Habitacle technologique", "7 places disponibles"], catalog: true },
  { slug: "exeed-rx", name: "Exeed RX", category: "SUV", year: "2023–2024", price: "Dès 15 500 000 FCFA HT", image: exeedRx.url, summary: "SUV coupé premium disponible en essence ou hybride rechargeable.", specs: ["2.0 TGDI jusqu'à 261 ch", "FWD ou AWD", "Version PHEV disponible"], catalog: true },
  { slug: "forthing-t5-evo", name: "Forthing T5 EVO", category: "SUV", year: "2022", price: "10 800 000 FCFA", image: forthingT5.url, summary: "SUV compact sportif proposé sur commande.", specs: ["1.5L Turbo, 197 ch", "DCT 7 rapports", "Consommation env. 6,6 L/100 km"], catalog: true },
  { slug: "byd-song-plus", name: "BYD Song Plus", category: "Électrique", year: "2025, neuf", price: "19 500 000 FCFA HT", image: bydSong.url, summary: "SUV 100 % électrique alliant autonomie, confort et technologie.", specs: ["Autonomie annoncée 600 km", "0 km", "Technologies dernière génération"], featured: true, catalog: true },
  { slug: "byd-seagull", name: "BYD Seagull EV", category: "Électrique", year: "Neuf", price: "12 000 000 FCFA HT", image: bydSeagull.url, summary: "Mobilité électrique compacte et économique pour la ville et les trajets quotidiens.", specs: ["Autonomie annoncée 420 km", "Recharge rapide", "0 km"], catalog: true },
  { slug: "audi-rs5", name: "Audi RS5", category: "Prestige", year: "Neuf", price: "100 000 000 FCFA", image: audiImage, summary: "Sportive haut de gamme sélectionnée dans la gamme prestige Kamizia.", specs: ["Puissance catalogue 469,98 kW", "Moteur 2 894 cm³", "Véhicule neuf"], catalog: true },
  { slug: "lexus-lx600-b6", name: "Lexus LX 600 Blindé B6", category: "Blindé", year: "Neuf", price: "155 000 000 FCFA", image: lexusImage, summary: "SUV Ultra Luxury avec protection blindée B6.", specs: ["Protection B6", "Puissance catalogue 336,12 kW", "Moteur 3 445 cm³"], featured: true, catalog: true },
  { slug: "ferrari-roma-spider", name: "Ferrari Roma Spider", category: "Prestige", year: "Neuf", price: "210 000 000 FCFA", image: ferrariImage, summary: "Cabriolet grand tourisme à hautes performances.", specs: ["Puissance catalogue 456,01 kW", "Véhicule neuf", "Configuration prestige"], catalog: true },
  { slug: "land-rover-defender", name: "Land Rover Defender", category: "Blindé", year: "Neuf", price: "Dès 80 000 000 FCFA", image: defender.url, summary: "4x4 premium proposé en configuration standard ou blindée B6.", specs: ["Moteur 2 997 cm³", "Version blindée disponible", "Puissance selon configuration"], catalog: true },
  { slug: "engins-btp", name: "Engins de BTP", category: "BTP & Transport", year: "Sur commande", price: "Sur devis", image: btpImage.url, summary: "Pelles hydrauliques, chargeuses et niveleuses pour chantiers, mines et carrières.", specs: ["Neuf ou occasion inspectée", "Configuration selon chantier", "Livraison régionale"], featured: true },
  { slug: "equipements-caterpillar", name: "Équipements Caterpillar", category: "BTP & Transport", year: "Sur commande", price: "Sur devis", image: caterpillarImage.url, summary: "Sélection de machines de classe Caterpillar avec historique et inspection selon disponibilité.", specs: ["Bulldozers D6 / D8", "Chargeuses, tombereaux et pelles", "Rapport d'inspection disponible"], featured: true },
  { slug: "semi-remorques", name: "Semi-remorques & tracteurs routiers", category: "BTP & Transport", year: "Sur commande", price: "Sur devis", image: trucksImage.url, summary: "Tracteurs routiers, plateaux, bennes, citernes et porte-conteneurs adaptés au transport régional.", specs: ["Configurations longue distance", "Essieux et carrosseries sur demande", "Options fret et transit"], featured: true },
  { slug: "camions-transport", name: "Camions de transport", category: "BTP & Transport", year: "Sur commande", price: "Sur devis", image: trucksImage.url, summary: "Gros porteurs et camions-bennes configurés pour les marchandises, les carrières et la distribution régionale.", specs: ["Porteurs, bennes et fourgons", "Capacité selon activité", "Inspection avant expédition"], featured: true },
  { slug: "cars-autocars", name: "Cars & autocars", category: "BTP & Transport", year: "Sur commande", price: "Sur devis", image: coachesImage.url, summary: "Solutions de transport urbain, interurbain et touristique, du minibus à l'autocar.", specs: ["Minibus climatisés", "Cars 50 à 70 places", "Configurations sécurité et bagages"], featured: true },
];

export const categories = ["Tous", "SUV", "Électrique", "Prestige", "Blindé", "BTP & Transport"] as const;

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}

export const whatsappUrl = (message: string) =>
  `https://wa.me/22674963199?text=${encodeURIComponent(message)}`;