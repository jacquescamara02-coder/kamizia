import { ChevronDown, MapPin, MessageCircle, Navigation, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ServiceCommitments } from "@/components/service-commitments";
import { whatsappUrl } from "@/lib/catalog";

const questions = [
  ["Comment obtenir un devis personnalisé ?", "Précisez le modèle, votre budget, l’usage et la destination. Notre équipe vous transmet une proposition personnalisée sur WhatsApp."],
  ["Peut-on commander un véhicule absent du catalogue ?", "Oui. Vous pouvez demander un véhicule particulier, un engin de chantier, un Caterpillar, un poids lourd, une semi-remorque ou un autocar. La disponibilité et les caractéristiques seront confirmées dans votre devis."],
  ["Que comprend le prix d’un véhicule ?", "Les prix affichés sont indicatifs. Demandez un devis détaillant le véhicule, le transport, le transit et les taxes applicables avant de confirmer votre commande."],
  ["Quels sont les délais de livraison ?", "Le délai dépend de la disponibilité, du pays de départ et de la destination. Une estimation est communiquée lors du devis et confirmée avant la commande."],
  ["Où peut-on vous rencontrer ?", "Nous sommes à Bassinko, arrondissement 8, secteur 35 de Ouagadougou. Contactez-nous avant votre déplacement pour confirmer le point de rendez-vous."],
];

export function HomeInformation() {
  return <>
    <ServiceCommitments />
    <section className="section bg-muted" id="avis-clients" aria-labelledby="avis-title">
      <div className="section-inner">
        <div className="section-heading"><div><p className="eyebrow">Votre expérience compte</p><h2 id="avis-title">Avis clients</h2></div></div>
        <div className="flex flex-col items-start gap-6 border-y border-border py-9 md:flex-row md:items-center">
          <Quote className="size-10 shrink-0 text-cyan" />
          <div className="flex-1"><h3 className="text-xl font-bold">Partagez votre expérience Kamizia</h3><p className="mt-3 text-sm leading-7 text-muted-foreground">Aucun témoignage publié pour le moment. Vous avez fait appel à notre équipe ? Votre retour nous intéresse.</p></div>
          <Button asChild><a href={whatsappUrl("Bonjour Kamizia, je souhaite partager mon avis sur mon expérience client.")} target="_blank" rel="noreferrer"><MessageCircle />Partager mon avis</a></Button>
        </div>
      </div>
    </section>
    <section className="section" id="localisation">
      <div className="section-inner grid gap-9 lg:grid-cols-[.7fr_1.3fr] lg:items-center">
        <div><p className="eyebrow">Nous rencontrer</p><h2 className="mt-3">À votre écoute à Ouagadougou</h2><p className="mt-5 flex gap-3 text-sm leading-7 text-muted-foreground"><MapPin className="mt-1 size-5 shrink-0 text-cyan" />Bassinko, arrondissement 8, secteur 35<br />Ouagadougou, Burkina Faso</p><p className="mt-4 text-sm leading-6 text-muted-foreground">La carte indique le quartier de Bassinko. Contactez-nous pour obtenir le point de rendez-vous exact.</p><Button asChild variant="outline" className="mt-6"><a href="https://www.google.com/maps/search/?api=1&query=Bassinko%2C%20Ouagadougou%2C%20Burkina%20Faso" target="_blank" rel="noreferrer"><Navigation />Ouvrir dans Google Maps</a></Button></div>
        <div className="overflow-hidden rounded-md border border-border bg-muted"><iframe title="Quartier de Bassinko à Ouagadougou" src="https://www.google.com/maps?q=Bassinko%2C%20Ouagadougou%2C%20Burkina%20Faso&output=embed" className="h-80 w-full border-0 sm:h-96" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div>
      </div>
    </section>
    <section className="section bg-muted" id="faq">
      <div className="section-inner grid gap-9 lg:grid-cols-[.7fr_1.3fr]">
        <div><p className="eyebrow">Questions fréquentes</p><h2 className="mt-3">Les réponses à vos questions</h2><p className="mt-5 text-sm leading-7 text-muted-foreground">Achat, commande, transport : échangeons sur votre projet.</p><Button asChild className="mt-6"><a href={whatsappUrl("Bonjour Kamizia, j’ai une question concernant vos services.")} target="_blank" rel="noreferrer"><MessageCircle />Contactez-nous</a></Button></div>
        <div className="divide-y divide-border border-y border-border">{questions.map(([question, answer]) => <details key={question} className="group py-5"><summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-sm font-semibold leading-6">{question}<ChevronDown className="size-5 shrink-0 text-primary transition-transform duration-300 group-open:rotate-180" /></summary><p className="pt-4 pr-7 text-sm leading-7 text-muted-foreground">{answer}</p></details>)}</div>
      </div>
    </section>
  </>;
}