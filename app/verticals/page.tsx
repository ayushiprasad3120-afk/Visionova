import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { CtaSection } from "@/components/home/cta-section";
import { buildMetadata } from "@/lib/seo";
import { verticalCategories } from "@/lib/data";

export const metadata: Metadata = buildMetadata({
  title: "Verticals",
  description:
    "VisionovaHQ runs campaigns across insurance, home services, and additional verticals including loans, education, travel, and antivirus & VPN.",
  path: "/verticals",
});

export default function VerticalsPage() {
  return (
    <>
      <PageHero
        eyebrow="Verticals"
        title="Vertical expertise, clearly organized."
        description="Every vertical has different compliance requirements, buyer psychology, and quality signals. Here's where we focus."
      />

      <section className="py-8 md:py-16 pb-28">
        <div className="container-editorial grid grid-cols-1 lg:grid-cols-3 gap-6">
          {verticalCategories.map((cat, i) => (
            <Reveal key={cat.title} delay={i * 0.1}>
              <div className="h-full rounded-2xl card-surface p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-wine/10 text-wine">
                  <cat.icon size={21} />
                </div>
                <h3 className="mt-7 font-display text-2xl text-charcoal dark:text-cream">{cat.title}</h3>
                <div className="mt-6 flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-charcoal/[0.04] dark:bg-cream/[0.06] px-3 py-1.5 text-xs font-medium text-charcoal/70 dark:text-cream/70"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaSection />
    </>
  );
}
