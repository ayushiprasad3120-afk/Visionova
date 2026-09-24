"use client";

import { trafficCategories } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";

export function TrafficPreview() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-editorial">
        <SectionHeading
          eyebrow="Traffic Sources"
          title="Three sources. One quality standard."
          description="Internal media buying, third-party media, and a vetted & selected group of affiliate networks — all held to the same standard."
          align="center"
          className="mx-auto mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {trafficCategories.map((cat, i) => (
            <Reveal key={cat.title} delay={i * 0.1}>
              <div className="h-full rounded-2xl card-surface p-7">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-wine/10 text-wine">
                  <cat.icon size={19} />
                </div>
                <h3 className="mt-6 font-display text-xl text-charcoal dark:text-cream">{cat.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-charcoal/65 dark:text-cream/65">{cat.desc}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {cat.channels.map((c) => (
                    <span
                      key={c}
                      className="rounded-full bg-charcoal/[0.04] dark:bg-cream/[0.06] px-3 py-1.5 text-xs font-medium text-charcoal/70 dark:text-cream/70"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Button href="/traffic-sources" variant="secondary">Explore all traffic sources</Button>
        </div>
      </div>
    </section>
  );
}
