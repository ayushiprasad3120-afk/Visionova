import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { CtaSection } from "@/components/home/cta-section";
import { buildMetadata } from "@/lib/seo";
import { Globe2, ShieldCheck, TrendingUp, Eye } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "About Us",
  description:
    "Learn about VisionovaHQ's vision for quality traffic, owned & operated media buying, and meaningful, long-term partnerships.",
  path: "/about",
});

const pillars = [
  { icon: Eye, title: "Mission", desc: "To connect advertisers and publishers through traffic that performs — quality-first, transparent, and built to scale sustainably." },
  { icon: TrendingUp, title: "Vision", desc: "A performance advertising business where quality is the default, not an add-on." },
  { icon: Globe2, title: "Global Reach", desc: "A growing footprint across worldwide markets, connecting demand and supply across every major region." },
  { icon: ShieldCheck, title: "Transparency", desc: "Every metric, every decision, every payout — visible and explainable, always." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About VisionovaHQ"
        title="Built on a vision for quality."
        description="VisionovaHQ started with a simple idea: better opportunities come from better traffic, and better traffic comes from doing the work ourselves."
      />

      <section className="py-20 md:py-28">
        <div className="container-editorial grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <Reveal>
            <p className="eyebrow mb-5">Our Story</p>
            <h2 className="font-display text-3xl md:text-4xl font-medium text-charcoal dark:text-cream leading-tight">
              Started with a vision for quality and meaningful partnerships.
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="space-y-5 text-charcoal/70 dark:text-cream/70 leading-relaxed">
              <p>
                VisionovaHQ was founded around a simple idea: advertisers and publishers both do better when traffic quality comes first. That meant investing early in owned & operated media buying, so we have direct control over where traffic comes from and how it's managed.
              </p>
              <p>
                From there, we built out a small set of trusted partnerships — third-party media and a carefully selected group of affiliate networks — each chosen deliberately rather than added just to grow a number.
              </p>
              <p>
                Today, that same approach shapes how we work: hands-on campaign management, clear communication, and relationships built to last rather than one-off placements.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-beige/60 dark:bg-charcoal/40">
        <div className="container-editorial">
          <SectionHeading
            eyebrow="What Drives Us"
            title="Four principles that shape every decision."
            align="center"
            className="mx-auto mb-16"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.1}>
                <div className="rounded-2xl card-surface p-8 h-full">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-wine/10 text-wine">
                    <p.icon size={19} />
                  </div>
                  <h3 className="mt-6 font-display text-2xl text-charcoal dark:text-cream">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-charcoal/65 dark:text-cream/65">{p.desc}</p>
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
