import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Boxes, ClipboardCheck, Container, HardHat, PackageCheck, Wrench, type LucideIcon } from "lucide-react";
import heroVideo from "@/assets/kamizia-hero.mp4.asset.json";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/services")({
  head: () => ({ meta: [
    { title: "Importation, BTP & logistique | Kamizia" },
    { name: "description", content: "Sourcing de véhicules, engins BTP, poids lourds, pièces, marchandises et livraison régionale par Kamizia." },
    { property: "og:title", content: "Services automobiles et logistiques Kamizia" },
    { property: "og:description", content: "Une prise en charge professionnelle de la sélection à la livraison." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}), component: ServicesPage,
});

const services: Array<[LucideIcon, string, string]> = [
  [HardHat,"Engins BTP & Caterpillar","Pelles hydrauliques, bulldozers, chargeuses, niveleuses et équipements pour mines, carrières et infrastructures."],
  [Container,"Poids lourds & semi-remorques","Tracteurs routiers, bennes, plateaux porte-conteneurs, citernes et configurations adaptées à votre activité."],
  [Boxes,"Marchandises & distribution","Organisation de flux de marchandises, groupage, distribution et solutions de transport adaptées aux volumes."],
  [PackageCheck,"Sourcing international","Recherche ciblée selon marque, année, budget, usage et destination finale."],
  [ClipboardCheck,"Inspection & documentation","Contrôle documentaire, informations techniques et rapports disponibles avant validation."],
  [Wrench,"Pièces & accessoires","Recherche de pièces détachées, accessoires automobiles et équipements complémentaires sur commande."],
];

function ServicesPage(){return <><section className="page-intro"><div className="section-inner"><p className="eyebrow text-cyan">Expertise internationale</p><h1 className="mt-4">Nos services</h1><p>Une réponse coordonnée pour vos achats automobiles, vos équipements professionnels et votre logistique.</p></div></section><section className="section"><div className="section-inner"><div className="grid gap-px overflow-hidden rounded-md border border-border bg-border md:grid-cols-2 lg:grid-cols-3">{services.map(([Icon,title,text]) => <article key={title} className="bg-background p-7"><Icon className="size-8 text-cyan"/><h2 className="mt-7 text-xl font-bold">{title}</h2><p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p></article>)}</div></div></section><section className="section bg-navy text-on-dark"><div className="section-inner grid gap-10 lg:grid-cols-2 lg:items-center"><div className="overflow-hidden rounded-md"><video src={heroVideo.url} autoPlay muted loop playsInline className="aspect-video w-full object-cover"/></div><div><p className="eyebrow text-cyan">Notre parcours</p><h2 className="mt-3">Une commande suivie à chaque étape</h2><ol className="mt-6 space-y-4 text-sm text-on-dark-muted"><li><strong className="text-on-dark">01. Étude :</strong> besoin, usage, budget et destination.</li><li><strong className="text-on-dark">02. Proposition :</strong> sélection documentée et devis.</li><li><strong className="text-on-dark">03. Validation :</strong> confirmation de la configuration et des conditions.</li><li><strong className="text-on-dark">04. Acheminement :</strong> suivi jusqu'à la destination convenue.</li></ol><Button asChild className="mt-8"><Link to="/contact">Décrire mon besoin <ArrowRight/></Link></Button></div></div></section></>}