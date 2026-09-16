import { useEffect, useRef, useState } from "react";

const commitments = [
  {
    value: 100,
    suffix: "%",
    title: "Demandes étudiées",
    description: "Chaque besoin reçoit une proposition adaptée à l’usage, au budget et à la destination.",
    tone: "cyan",
  },
  {
    value: 3,
    suffix: "",
    title: "Étapes de suivi",
    description: "Définition du besoin, sélection documentée, puis organisation de la livraison.",
    tone: "silver",
  },
  {
    value: 2,
    suffix: "",
    title: "Pays représentés",
    description: "Un accompagnement dédié au Burkina Faso et en Côte d’Ivoire.",
    tone: "white",
  },
] as const;

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplay(value);
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry?.isIntersecting) return;
      const start = performance.now();
      const animate = (time: number) => {
        const progress = Math.min((time - start) / 1100, 1);
        setDisplay(Math.round(value * (1 - Math.pow(1 - progress, 3))));
        if (progress < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
      observer.disconnect();
    }, { threshold: 0.55 });

    observer.observe(node);
    return () => observer.disconnect();
  }, [value]);

  return <span ref={ref}>{display}{suffix}</span>;
}

function ProgressRing({ value, suffix, tone }: { value: number; suffix: string; tone: "cyan" | "silver" | "white" }) {
  const [active, setActive] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setActive(true);
      return;
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry?.isIntersecting) return;
      setActive(true);
      observer.disconnect();
    }, { threshold: 0.45 });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`commitment-ring commitment-ring-${tone}${active ? " commitment-ring-active" : ""}`}>
      <svg className="commitment-halo" viewBox="0 0 220 220" aria-hidden="true">
        {[
          [110, 8], [161, 22], [198, 60], [212, 110], [198, 160], [161, 198],
          [110, 212], [59, 198], [22, 160], [8, 110], [22, 60], [59, 22],
        ].map(([cx, cy], index) => <circle key={`${cx}-${cy}`} className={`commitment-halo-dot commitment-halo-dot-${index + 1}`} cx={cx} cy={cy} r="2.5" />)}
      </svg>
      <svg className="commitment-progress" viewBox="0 0 160 160" aria-hidden="true">
        <circle className="commitment-progress-track" cx="80" cy="80" r="70" />
        <circle className="commitment-progress-value" cx="80" cy="80" r="70" pathLength="100" />
      </svg>
      <strong className="commitment-value"><AnimatedNumber value={value} suffix={suffix} /></strong>
    </div>
  );
}

export function ServiceCommitments() {
  return (
    <section className="section commitments-section" aria-labelledby="commitments-title">
      <div className="section-inner">
        <div className="text-center">
          <p className="eyebrow text-cyan">Nos engagements de service</p>
          <h2 id="commitments-title" className="mx-auto mt-3 max-w-3xl text-on-dark">Un accompagnement clair, à chaque étape.</h2>
        </div>
        <div className="mt-12 grid gap-12 md:grid-cols-3 md:gap-7">
          {commitments.map((commitment) => (
            <article key={commitment.title} className="commitment-item">
              <ProgressRing value={commitment.value} suffix={commitment.suffix} tone={commitment.tone} />
              <h3 className="mt-7 text-lg font-bold text-on-dark">{commitment.title}</h3>
              <p className="mx-auto mt-3 max-w-sm text-sm leading-7 text-on-dark-muted">{commitment.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}