import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { CtaSection } from "@/components/home/cta-section";
import { buildMetadata } from "@/lib/seo";
import { whyVisionova } from "@/lib/data";

export const metadata: Metadata = buildMetadata({
  title: "Why VisionovaHQ",
  description:
    "What VisionovaHQ focuses on: quality traffic, relevant opportunities, hands-on campaign management, and long-term partnerships.",
  path: "/why-us",
});

export default function WhyUsPage() {
  return (
    <>
      <PageHero
        eyebrow="Why VisionovaHQ"
        title="What we focus on."
        description="Not a pitch about being the best — just a clear picture of what matters to us and how we operate."
      />

      <section className="pb-28">
        <div className="container-editorial grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyVisionova.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <div className="h-full rounded-2xl card-surface p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-wine/10 text-wine">
                  <item.icon size={21} />
                </div>
                <h3 className="mt-7 font-display text-2xl text-charcoal dark:text-cream">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal/65 dark:text-cream/65">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaSection />
    </>
  );
}
