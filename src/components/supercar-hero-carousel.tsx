import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import crimsonImage from "@/assets/hero-supercar-crimson.jpg";
import midnightImage from "@/assets/hero-supercar-midnight.jpg";
import graphiteImage from "@/assets/hero-supercar-graphite.jpg";

const slides = [
  { slug: "grand-tourisme-crimson", name: "Supercar Grand Tourisme rouge", image: crimsonImage },
  { slug: "coupe-midnight", name: "Supercar Coupé bleu nuit", image: midnightImage },
  { slug: "gt-graphite", name: "Supercar GT graphite", image: graphiteImage },
];

export function SupercarHeroCarousel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || slides.length < 2) return;
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, 4800);
    return () => window.clearInterval(timer);
  }, [paused]);

  const previous = () => setActive((current) => (current - 1 + slides.length) % slides.length);
  const next = () => setActive((current) => (current + 1) % slides.length);

  return (
    <div
      className="absolute inset-0"
      role="region"
      aria-roledescription="carrousel"
      aria-label="Sélection de véhicules prestige"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {slides.map((slide, index) => (
        <figure
          key={slide.slug}
          className={`hero-supercar-slide ${index === active ? "hero-supercar-slide-active" : ""}`}
          aria-hidden={index !== active}
        >
          <img
            src={slide.image}
            alt={index === active ? `${slide.name}, sélection prestige Kamizia` : ""}
            className="h-full w-full object-cover object-center"
            loading={index === 0 ? "eager" : "lazy"}
             fetchPriority={index === 0 ? "high" : "auto"}
             width={1920}
             height={1088}
          />
        </figure>
      ))}

      <div className="absolute bottom-6 right-4 z-20 flex items-center gap-2 sm:bottom-8 sm:right-8">
        <Button
          type="button"
          size="icon"
          variant="outline"
          onClick={previous}
          className="border-on-dark/40 bg-navy/45 text-on-dark backdrop-blur-md hover:bg-navy/70 hover:text-on-dark"
          aria-label="Supercar précédente"
        >
          <ChevronLeft />
        </Button>
        <div className="flex h-10 items-center gap-1.5 rounded-md border border-on-dark/25 bg-navy/45 px-3 backdrop-blur-md">
          {slides.map((slide, index) => (
            <Button
              key={slide.slug}
              type="button"
              size="icon"
              variant="ghost"
              onClick={() => setActive(index)}
              className="size-5 hover:bg-transparent"
              aria-label={`Afficher ${slide.name}`}
              aria-current={index === active ? "true" : undefined}
            >
              <span className={`hero-supercar-dot ${index === active ? "hero-supercar-dot-active" : ""}`} />
            </Button>
          ))}
        </div>
        <Button
          type="button"
          size="icon"
          variant="outline"
          onClick={next}
          className="border-on-dark/40 bg-navy/45 text-on-dark backdrop-blur-md hover:bg-navy/70 hover:text-on-dark"
          aria-label="Supercar suivante"
        >
          <ChevronRight />
        </Button>
      </div>
    </div>
  );
}