import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Check, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { whatsappUrl, type Product } from "@/lib/catalog";

export function ProductQuickView({ product }: { product: Product }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <article className="product-card group">
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="block w-full text-left"
          aria-label={`Voir les détails de ${product.name}`}
        >
          <div className="aspect-[4/3] overflow-hidden bg-muted">
            <img
              src={product.image}
              alt={`${product.name}, vue du véhicule ou équipement`}
              loading="lazy"
              width={1200}
              height={900}
              className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
            />
          </div>
          <div className="p-5">
            <div className="mb-3 flex items-center justify-between gap-3">
              <span className="eyebrow">{product.category}</span>
              <span className="text-xs font-semibold text-muted-foreground">{product.year}</span>
            </div>
            <h3 className="text-xl font-bold">{product.name}</h3>
            <p className="mt-2 line-clamp-2 text-sm leading-6 text-muted-foreground">{product.summary}</p>
            <div className="mt-5 flex items-end justify-between gap-3">
              <p className="font-bold text-primary">{product.price}</p>
              <ArrowUpRight className="size-5 text-cyan transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </div>
          </div>
        </button>
      </article>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-3xl">
          <div className="grid gap-6 md:grid-cols-[1.05fr_1fr]">
            <div className="overflow-hidden rounded-md border border-border bg-muted">
              <img
                src={product.image}
                alt={`${product.name}, vue détaillée`}
                width={1200}
                height={900}
                className="aspect-[4/3] h-full w-full object-cover"
              />
            </div>
            <div>
              <DialogHeader className="text-left">
                <span className="eyebrow">{product.category}</span>
                <DialogTitle className="text-2xl font-extrabold">{product.name}</DialogTitle>
                <DialogDescription className="leading-6">{product.summary}</DialogDescription>
              </DialogHeader>

              <div className="mt-5 grid grid-cols-2 gap-px overflow-hidden rounded-md border border-border bg-border">
                <div className="bg-background p-3">
                  <span className="text-xs text-muted-foreground">Année / statut</span>
                  <strong className="mt-1 block text-sm">{product.year}</strong>
                </div>
                <div className="bg-background p-3">
                  <span className="text-xs text-muted-foreground">Prix</span>
                  <strong className="mt-1 block text-sm text-primary">{product.price}</strong>
                </div>
              </div>

              <ul className="mt-5 space-y-2.5">
                {product.specs.map((spec) => (
                  <li key={spec} className="flex gap-3 text-sm">
                    <Check className="mt-0.5 size-4 shrink-0 text-cyan" />
                    {spec}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-col gap-3">
                <Button asChild size="lg">
                  <a
                    href={whatsappUrl(`Bonjour Kamizia, je souhaite des informations et un devis pour : ${product.name} (${product.price}).`)}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <MessageCircle /> Contactez-nous sur WhatsApp
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <Link to="/catalogue/$slug" params={{ slug: product.slug }} onClick={() => setOpen(false)}>
                    Voir la fiche complète
                  </Link>
                </Button>
              </div>
              <p className="mt-3 text-xs leading-5 text-muted-foreground">
                Prix et disponibilité à confirmer au moment de la commande.
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
