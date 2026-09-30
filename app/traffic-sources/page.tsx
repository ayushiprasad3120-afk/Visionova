import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { CtaSection } from "@/components/home/cta-section";
import { buildMetadata } from "@/lib/seo";
import { trafficCategories, trafficPillars } from "@/lib/data";

export const metadata: Metadata = buildMetadata({
  title: "Traffic Sources",
  description:
    "VisionovaHQ's traffic comes from three sources: internal media buying, third-party media, and a vetted & selected group of affiliate networks.",
  path: "/traffic-sources",
});

export default function TrafficSourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Traffic Sources"
        title="Where our traffic comes from."
        description="Three sources, each held to the same quality standard — from campaigns we run ourselves to a carefully selected group of partners."
      />

      <section className="py-8 md:py-16">
        <div className="container-editorial grid grid-cols-1 lg:grid-cols-3 gap-6">
          {trafficCategories.map((cat, i) => (
            <Reveal key={cat.title} delay={i * 0.1}>
              <div className="h-full rounded-2xl card-surface p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-wine/10 text-wine">
                  <cat.icon size={21} />
                </div>
                <h3 className="mt-7 font-display text-2xl text-charcoal dark:text-cream">{cat.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal/65 dark:text-cream/65">{cat.desc}</p>
                <div className="mt-6 flex flex-wrap gap-2">
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

        <Reveal delay={0.3}>
          <p className="mt-12 text-center font-display text-xl md:text-2xl text-charcoal dark:text-cream">
            Let us know what your requirement is.
          </p>
        </Reveal>
      </section>

      <section className="py-24 md:py-32 bg-charcoal text-cream relative overflow-hidden">
        <div className="absolute inset-0 bg-noise pointer-events-none" />
        <div className="container-editorial relative">
          <SectionHeading
            eyebrow="Our Standard"
            title="Quality control, fraud prevention, and optimization — built in, not bolted on."
            align="center"
            className="mx-auto mb-16 [&_h2]:text-cream [&_p]:text-cream/65"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {trafficPillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.12}>
                <div className="rounded-2xl border border-cream/10 bg-cream/[0.03] p-8 h-full">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sand/15 text-sand">
                    <p.icon size={19} />
                  </div>
                  <h3 className="mt-6 font-display text-xl">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-cream/60">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
