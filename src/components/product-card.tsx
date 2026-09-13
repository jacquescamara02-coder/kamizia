import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import type { Product } from "@/lib/catalog";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="product-card group">
      <Link to="/catalogue/$slug" params={{ slug: product.slug }} className="block">
        <div className="aspect-[4/3] overflow-hidden bg-muted"><img src={product.image} alt={`${product.name}, vue du véhicule ou équipement`} loading="lazy" width={1200} height={900} className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]" /></div>
        <div className="p-5">
          <div className="mb-3 flex items-center justify-between gap-3"><span className="eyebrow">{product.category}</span><span className="text-xs font-semibold text-muted-foreground">{product.year}</span></div>
          <h2 className="text-xl font-bold">{product.name}</h2>
          <p className="mt-2 line-clamp-2 text-sm leading-6 text-muted-foreground">{product.summary}</p>
          <div className="mt-5 flex items-end justify-between gap-3"><p className="font-bold text-primary">{product.price}</p><ArrowUpRight className="size-5 text-cyan transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></div>
        </div>
      </Link>
    </article>
  );
}