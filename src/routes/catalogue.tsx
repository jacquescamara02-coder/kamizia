import { createFileRoute } from "@tanstack/react-router";
import { Download, Search } from "lucide-react";
import { useMemo, useState } from "react";
import cataloguePdf from "@/assets/catalogue-kamizia.pdf.asset.json";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/product-card";
import { categories, products } from "@/lib/catalog";

export const Route = createFileRoute("/catalogue")({
  head: () => ({ meta: [
    { title: "Catalogue véhicules & engins | Kamizia" },
    { name: "description", content: "Consultez les SUV, électriques, véhicules premium, blindés, engins BTP et poids lourds proposés par Kamizia." },
    { property: "og:title", content: "Catalogue Kamizia" },
    { property: "og:description", content: "Véhicules et équipements disponibles ou sur commande en Afrique de l'Ouest." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}), component: CataloguePage,
});

function CataloguePage() {
  const [category, setCategory] = useState<(typeof categories)[number]>("Tous");
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => products.filter((p) => (category === "Tous" || p.category === category) && `${p.name} ${p.summary}`.toLowerCase().includes(query.toLowerCase().trim())), [category, query]);
  return <>
    <section className="page-intro"><div className="section-inner"><p className="eyebrow text-cyan">Catalogue international</p><div className="mt-4 grid gap-7 md:grid-cols-[1fr_auto] md:items-end"><div><h1>Véhicules & équipements</h1><p>Références du catalogue Kamizia et solutions professionnelles disponibles sur commande.</p></div><Button asChild variant="outline" className="border-on-dark/30 bg-on-dark/10 text-on-dark hover:bg-on-dark/20 hover:text-on-dark"><a href={cataloguePdf.url} target="_blank" rel="noreferrer"><Download /> Catalogue PDF</a></Button></div></div></section>
    <section className="section"><div className="section-inner"><div className="mb-8 flex flex-col gap-4 border-b border-border pb-6 lg:flex-row lg:items-center lg:justify-between"><div className="flex flex-wrap gap-2">{categories.map(c => <button key={c} onClick={() => setCategory(c)} className={category === c ? "filter-chip filter-chip-active" : "filter-chip"}>{c}</button>)}</div><label className="relative block lg:w-72"><Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"/><span className="sr-only">Rechercher un modèle</span><input value={query} onChange={(e) => setQuery(e.target.value.slice(0, 80))} placeholder="Rechercher un modèle" className="form-input pl-10" maxLength={80}/></label></div><p className="mb-5 text-sm font-semibold text-muted-foreground">{filtered.length} référence{filtered.length > 1 ? "s" : ""}</p><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{filtered.map(p => <ProductCard key={p.slug} product={p}/>)}</div>{filtered.length === 0 && <div className="py-20 text-center"><p className="font-bold">Aucune référence trouvée</p><p className="mt-2 text-sm text-muted-foreground">Essayez un autre nom ou une autre catégorie.</p></div>}</div></section>
  </>;
}