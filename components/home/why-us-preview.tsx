"use client";

import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { whyVisionova } from "@/lib/data";

export function WhyUsPreview() {
  return (
    <section className="py-24 md:py-32 bg-charcoal text-cream relative overflow-hidden">
      <div className="absolute inset-0 bg-noise pointer-events-none" />
      <div className="container-editorial relative">
        <SectionHeading
          eyebrow="Why VisionovaHQ"
          title="What we focus on."
          description="A short list of the things we care about getting right, every time."
          align="center"
          className="mx-auto mb-16 [&_h2]:text-cream [&_p]:text-cream/65"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {whyVisionova.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <div className="h-full rounded-2xl border border-cream/10 bg-cream/[0.03] p-7">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sand/15 text-sand">
                  <item.icon size={19} />
                </div>
                <h3 className="mt-6 font-display text-xl">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-cream/60">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Button href="/why-us" variant="secondary" className="!border-cream/25 !text-cream hover:!border-sand hover:!text-sand">
            More about VisionovaHQ
          </Button>
        </div>
      </div>
    </section>
  );
}
