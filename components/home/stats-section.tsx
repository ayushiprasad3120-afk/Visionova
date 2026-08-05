import { stats } from "@/lib/data";
import { StatCounter } from "@/components/ui/stat-counter";
import { Reveal } from "@/components/ui/reveal";

export function StatsSection() {
  return (
    <section className="hairline">
      <div className="container-editorial py-14 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.1} className="text-center md:text-left">
              <p className="font-display text-4xl md:text-5xl text-wine">
                <StatCounter value={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-2 text-xs md:text-sm uppercase tracking-[0.14em] text-charcoal/55 dark:text-cream/55">
                {s.label}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
