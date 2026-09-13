import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Check, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getProduct, products, whatsappUrl } from "@/lib/catalog";

export const Route = createFileRoute("/catalogue/$slug")({
  loader: ({ params }) => { const product = getProduct(params.slug); if (!product) throw notFound(); return product; },
  head: ({ loaderData }) => ({ meta: [
    { title: loaderData ? `${loaderData.name} | Kamizia` : "Produit indisponible | Kamizia" },
    { name: "description", content: loaderData?.summary ?? "Cette référence Kamizia n'est pas disponible." },
    { property: "og:title", content: loaderData ? `${loaderData.name} | Kamizia` : "Produit Kamizia" },
    { property: "og:description", content: loaderData?.summary ?? "Catalogue Kamizia." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}), component: ProductPage,
  notFoundComponent: () => <section className="section"><div className="section-inner py-24 text-center"><h1>Référence introuvable</h1><Button asChild className="mt-6"><Link to="/catalogue">Retour au catalogue</Link></Button></div></section>,
});

function ProductPage() {
  const product = Route.useLoaderData();
  const related = products.filter(p => p.category === product.category && p.slug !== product.slug).slice(0,3);
  return <><section className="section"><div className="section-inner"><Link to="/catalogue" className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-primary"><ArrowLeft className="size-4"/> Retour au catalogue</Link><div className="grid gap-10 lg:grid-cols-[1.08fr_.92fr] lg:items-start"><div className="overflow-hidden rounded-md border border-border bg-muted"><img src={product.image} alt={product.name} className="aspect-[4/3] h-full w-full object-cover"/></div><div className="lg:sticky lg:top-28"><span className="eyebrow">{product.category}</span><h1 className="mt-4 text-4xl font-extrabold sm:text-5xl">{product.name}</h1><p className="mt-4 leading-7 text-muted-foreground">{product.summary}</p><div className="mt-7 grid grid-cols-2 gap-px overflow-hidden rounded-md border border-border bg-border"><div className="bg-background p-4"><span className="text-xs text-muted-foreground">Année / statut</span><strong className="mt-1 block">{product.year}</strong></div><div className="bg-background p-4"><span className="text-xs text-muted-foreground">Prix catalogue</span><strong className="mt-1 block text-primary">{product.price}</strong></div></div><div className="mt-7"><h2 className="text-lg font-bold">Caractéristiques principales</h2><ul className="mt-4 space-y-3">{product.specs.map(s => <li key={s} className="flex gap-3 text-sm"><Check className="mt-0.5 size-4 shrink-0 text-cyan"/>{s}</li>)}</ul></div><Button asChild size="lg" className="mt-8 w-full"><a href={whatsappUrl(`Bonjour Kamizia, je souhaite recevoir des informations et un devis pour : ${product.name} (${product.price}).`)} target="_blank" rel="noreferrer"><MessageCircle/> Demander ce modèle sur WhatsApp</a></Button><p className="mt-3 text-xs leading-5 text-muted-foreground">Prix et disponibilité à confirmer au moment de la commande. Les informations proviennent du catalogue commercial Kamizia.</p></div></div></div></section>{related.length > 0 && <section className="section bg-muted"><div className="section-inner"><h2>Dans la même gamme</h2><div className="mt-7 grid gap-5 md:grid-cols-3">{related.map(p => <article key={p.slug} className="border-t border-border pt-5"><Link to="/catalogue/$slug" params={{ slug:p.slug }} className="font-bold hover:text-primary">{p.name}</Link><p className="mt-1 text-sm text-muted-foreground">{p.price}</p></article>)}</div></div></section>}</>;
}