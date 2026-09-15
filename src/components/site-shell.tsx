import { Link, useRouter, useRouterState } from "@tanstack/react-router";
import { ArrowLeft, ArrowUp, Mail, MapPin, Menu, MessageCircle, Phone, X } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import logoAsset from "@/assets/kamizia-logo.jpeg.asset.json";
import { Button } from "@/components/ui/button";
import { whatsappUrl } from "@/lib/catalog";

const nav = [
  { to: "/", label: "Accueil" },
  { to: "/catalogue", label: "Catalogue" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact & devis" },
] as const;

export function SiteShell({ children }: { children: ReactNode }) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const path = useRouterState({ select: (state) => state.location.pathname });
  useEffect(() => {
    const handler = () => setShowTop(window.scrollY > 500);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);
  useEffect(() => setOpen(false), [path]);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let observer: IntersectionObserver | undefined;
    const timer = window.setTimeout(() => {
      const sections = Array.from(document.querySelectorAll("main > section"));
      sections.forEach((section) => section.classList.add("reveal-pending"));
      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("reveal-visible");
          observer?.unobserve(entry.target);
        });
      }, { threshold: 0.08, rootMargin: "0px 0px -40px" });
      sections.forEach((section) => observer?.observe(section));
    }, 700);
    return () => {
      window.clearTimeout(timer);
      observer?.disconnect();
    };
  }, [path]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border/70 bg-background/95 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link to="/" aria-label="Kamizia, accueil" className="shrink-0">
            <img src={logoAsset.url} alt="Kamizia Auto Services International" className="h-12 w-auto max-w-48 object-contain" />
          </Link>
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Navigation principale">
            {nav.map((item) => <Link key={item.to} to={item.to} className="nav-link" activeProps={{ className: "nav-link nav-link-active" }}>{item.label}</Link>)}
          </nav>
          <Button asChild className="hidden lg:inline-flex"><a href={whatsappUrl("Bonjour Kamizia, je souhaite obtenir des informations.")} target="_blank" rel="noreferrer"><MessageCircle /> WhatsApp</a></Button>
          <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setOpen(!open)} aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}>{open ? <X /> : <Menu />}</Button>
        </div>
        {open && <nav className="border-t border-border bg-background px-4 py-4 lg:hidden">{nav.map((item) => <Link key={item.to} to={item.to} className="block border-b border-border/60 py-3 text-sm font-semibold">{item.label}</Link>)}</nav>}
      </header>
      <main>{path !== "/" && <div className="border-b border-border bg-muted"><div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8"><Button variant="ghost" size="sm" onClick={() => { if (router.history.canGoBack()) router.history.back(); else void router.navigate({ to: "/" }); }}><ArrowLeft />Retour</Button></div></div>}{children}</main>
      <footer className="bg-navy text-on-dark">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3 lg:px-8">
          <div><img src={logoAsset.url} alt="Kamizia" className="mb-5 h-14 w-auto rounded-sm bg-surface p-1" /><p className="max-w-sm text-sm leading-7 text-on-dark-muted">Importation, vente, distribution automobile et solutions logistiques entre le Burkina Faso, la Côte d'Ivoire et l'international.</p></div>
          <div><h2 className="mb-4 text-sm font-bold uppercase text-cyan">Coordonnées</h2><div className="space-y-3 text-sm text-on-dark-muted"><p className="flex gap-3"><MapPin className="mt-0.5 size-4 shrink-0 text-cyan" />Arrondissement 8, Secteur 35, Bassinko, Ouagadougou</p><p className="flex gap-3"><Phone className="size-4 shrink-0 text-cyan" />+226 78 66 40 66 · +225 01 02 03 56 00</p><p className="flex gap-3"><Mail className="size-4 shrink-0 text-cyan" />maigayoussef85@gmail.com</p></div></div>
          <div><h2 className="mb-4 text-sm font-bold uppercase text-cyan">Informations légales</h2><div className="space-y-2 text-sm text-on-dark-muted"><p>IFU : 00270262 D</p><p>RCCM : BF-OUA-01-2025-B12-07460</p><p>07 BP 30107 Ouaga Tampoui 10040</p><p>Burkina Faso · Côte d'Ivoire</p></div></div>
        </div>
        <div className="border-t border-on-dark/10 px-4 py-5 text-center text-xs text-on-dark-muted">© 2026 Kamizia Auto Services International (Kamuze Global). Tous droits réservés.</div>
      </footer>
      <a href={whatsappUrl("Bonjour Kamizia, je souhaite recevoir un devis.")} target="_blank" rel="noreferrer" className="whatsapp-float" aria-label="Contacter Kamizia sur WhatsApp"><MessageCircle /></a>
      {showTop && <Button size="icon" variant="secondary" className="fixed bottom-6 left-5 z-40 shadow-lg" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Retour en haut"><ArrowUp /></Button>}
    </div>
  );
}