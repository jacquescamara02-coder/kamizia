import { useEffect, useState } from "react";
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

    </div>
  );
}