import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { CtaSection } from "@/components/home/cta-section";
import { buildMetadata } from "@/lib/seo";
import { services, performanceModels } from "@/lib/data";

export const metadata: Metadata = buildMetadata({
  title: "Services",
  description:
    "VisionovaHQ's services — for advertisers, for publishers, and affiliate management — plus our CPS, Pay Per Call, CPL, and Mobile Install performance models.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="What we do, and how you can work with us."
        description="Services describe how we work together. Performance models describe how campaigns are priced."
      />

      <section className="py-8 md:py-16">
        <div className="container-editorial grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((s) => {
            const card = (
              <div className="group rounded-2xl card-surface p-8 h-full flex flex-col hover:shadow-soft transition-shadow">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-wine/10 text-wine group-hover:bg-wine group-hover:text-cream transition-colors">
                  <s.icon size={21} />
                </div>
                <h3 className="mt-7 font-display text-2xl text-charcoal dark:text-cream">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal/65 dark:text-cream/65">{s.desc}</p>
              </div>
            );
            return (
              <Reveal key={s.title}>
                {s.href ? <Link href={s.href}>{card}</Link> : card}
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="py-20 md:py-28 bg-beige/60 dark:bg-charcoal/40">
        <div className="container-editorial">
          <SectionHeading
            eyebrow="Performance Models"
            title="Four ways to structure a campaign."
            description="Keep it simple: pick the pricing model that matches how you want to pay for results."
            align="center"
            className="mx-auto mb-14"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {performanceModels.map((m) => (
              <Reveal key={m.title}>
                <div className="rounded-2xl card-surface p-7 h-full">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-wine/10 text-wine">
                    <m.icon size={19} />
                  </div>
                  <h3 className="mt-6 font-display text-xl text-charcoal dark:text-cream">{m.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-charcoal/65 dark:text-cream/65">{m.desc}</p>
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
