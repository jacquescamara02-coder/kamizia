import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Building2, CheckCircle2, FileCheck2, Globe2, ShieldCheck, Truck } from "lucide-react";
import heroVideo from "@/assets/kamizia-hero.mp4.asset.json";
import cataloguePdf from "@/assets/catalogue-kamizia.pdf.asset.json";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/product-card";
import { products, whatsappUrl } from "@/lib/catalog";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Kamizia Auto Services | Véhicules & Logistique" },
    { name: "description", content: "Véhicules, engins BTP, poids lourds et logistique au Burkina Faso et en Côte d'Ivoire." },
    { property: "og:title", content: "Kamizia Auto Services International" },
    { property: "og:description", content: "Importation automobile et solutions logistiques professionnelles en Afrique de l'Ouest." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: HomePage,
});

const sectors = [
  ["SUV & véhicules", "Neufs, occasions, hybrides, électriques et véhicules premium.", "32+ références", Truck],
  ["Engins BTP", "Pelles, chargeuses, bulldozers, niveleuses et équipements Caterpillar.", "Sur devis", Building2],
  ["Transport lourd", "Tracteurs routiers, semi-remorques, citernes, bennes et porte-conteneurs.", "Sur commande", Globe2],
];

function HomePage() {
  return <>
    <section className="hero-section">
      <video autoPlay muted loop playsInline poster={products[0]?.image} className="absolute inset-0 h-full w-full object-cover"><source src={heroVideo.url} type="video/mp4" /></video>
      <div className="hero-overlay" />
      <div className="relative mx-auto flex min-h-[76vh] max-w-7xl items-end px-4 pb-16 pt-28 sm:px-6 md:pb-24 lg:px-8">
        <div className="max-w-4xl text-on-dark"><p className="eyebrow text-cyan">Burkina Faso · Côte d'Ivoire · International</p><h1 className="mt-5 max-w-4xl text-4xl font-extrabold leading-[1.08] sm:text-6xl lg:text-7xl">Votre partenaire automobile et logistique en Afrique de l’Ouest</h1><p className="mt-6 max-w-2xl text-base leading-7 text-on-dark-muted sm:text-lg">Véhicules, engins de chantier, poids lourds et solutions de transport sélectionnés avec rigueur, puis livrés à destination.</p><div className="mt-8 flex flex-wrap gap-3"><Button asChild size="lg"><Link to="/catalogue">Explorer le catalogue <ArrowRight /></Link></Button><Button asChild size="lg" variant="outline" className="border-on-dark/40 bg-on-dark/10 text-on-dark hover:bg-on-dark/20 hover:text-on-dark"><Link to="/contact">Demander un devis</Link></Button></div></div>
      </div>
    </section>

    <section className="border-b border-border bg-navy text-on-dark"><div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-on-dark/10 px-4 sm:px-6 md:grid-cols-4 lg:px-8">{[["54", "pages de catalogue"], ["30+", "modèles présentés"], ["2", "pays de représentation"], ["4", "familles de solutions"]].map(([n,l]) => <div key={l} className="px-4 py-7 text-center"><strong className="block text-3xl text-cyan">{n}</strong><span className="mt-1 block text-xs text-on-dark-muted">{l}</span></div>)}</div></section>

    <section className="section"><div className="section-inner"><div className="section-heading"><div><p className="eyebrow">Nos métiers</p><h2>Des solutions adaptées à chaque activité</h2></div><p>De la voiture familiale au matériel de chantier, Kamizia organise la sélection, l'achat et l'acheminement.</p></div><div className="grid gap-px overflow-hidden rounded-md border border-border bg-border md:grid-cols-3">{sectors.map(([title, text, label, Icon]) => <article key={title as string} className="bg-background p-7 transition-transform duration-300 hover:-translate-y-1"><Icon className="mb-8 size-8 text-cyan" /><h3 className="text-xl font-bold">{title as string}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{text as string}</p><span className="mt-7 inline-block text-xs font-bold uppercase text-primary">{label as string}</span></article>)}</div></div></section>

    <section className="section bg-muted"><div className="section-inner"><div className="section-heading"><div><p className="eyebrow">Sélection</p><h2>Références à découvrir</h2></div><Button asChild variant="outline"><Link to="/catalogue">Voir tout le catalogue <ArrowRight /></Link></Button></div><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{products.filter(p => p.featured).slice(0,8).map(p => <ProductCard key={p.slug} product={p} />)}</div></div></section>

    <section className="section"><div className="section-inner grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:items-center"><div><p className="eyebrow">Méthode Kamizia</p><h2 className="mt-3">Un accompagnement clair, de la demande à la livraison</h2><p className="mt-5 leading-7 text-muted-foreground">Chaque demande est étudiée selon l'usage, le budget, la destination et les caractéristiques recherchées.</p><Button asChild className="mt-7"><a href={cataloguePdf.url} target="_blank" rel="noreferrer">Télécharger le catalogue <ArrowRight /></a></Button></div><div className="space-y-4">{[["01", "Définition du besoin", "Modèle, usage, budget, motorisation et destination."], ["02", "Sélection & vérification", "Proposition documentée et contrôle des informations disponibles."], ["03", "Transport & livraison", "Organisation de l'acheminement jusqu'à la destination convenue."]].map(([n,t,d]) => <div key={n} className="flex gap-5 border-t border-border py-5"><span className="text-lg font-extrabold text-cyan">{n}</span><div><h3 className="font-bold">{t}</h3><p className="mt-1 text-sm leading-6 text-muted-foreground">{d}</p></div></div>)}</div></div></section>

    <section className="bg-navy py-16 text-on-dark"><div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 md:grid-cols-3 lg:px-8">{[[ShieldCheck,"Sélection rigoureuse","Caractéristiques, état et documentation vérifiés selon les éléments disponibles."],[FileCheck2,"Devis détaillé","Une proposition adaptée à votre besoin, sans prix inventé pour les commandes spéciales."],[Globe2,"Présence régionale","Un interlocuteur pour le Burkina Faso et la Côte d'Ivoire."]].map(([Icon,t,d]) => <div key={t as string} className="flex gap-4"><Icon className="size-7 shrink-0 text-cyan"/><div><h3 className="font-bold">{t as string}</h3><p className="mt-2 text-sm leading-6 text-on-dark-muted">{d as string}</p></div></div>)}</div></section>

    <section className="section"><div className="section-inner grid gap-10 rounded-md bg-primary px-6 py-10 text-primary-foreground md:grid-cols-[1fr_auto] md:items-center md:px-10"><div><p className="text-sm font-bold uppercase text-cyan">Un projet précis ?</p><h2 className="mt-2 text-3xl font-bold">Recevez une proposition personnalisée</h2><p className="mt-3 max-w-2xl text-sm opacity-80">Décrivez le véhicule, l'engin ou la solution de transport recherchée. Notre équipe vous répond sur WhatsApp.</p></div><Button asChild size="lg" variant="secondary"><a href={whatsappUrl("Bonjour Kamizia, je souhaite demander un devis personnalisé.")} target="_blank" rel="noreferrer">Parler à un conseiller <CheckCircle2 /></a></Button></div></section>
  </>;
}