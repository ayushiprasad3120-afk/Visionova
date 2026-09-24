"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { ChevronDown, Eye, MousePointerClick, PhoneCall, ShoppingCart, UserPlus, Smartphone, Gamepad2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TextReveal } from "@/components/ui/text-reveal";
import { Reveal } from "@/components/ui/reveal";
import { HeroGlobeOrnament } from "@/components/home/hero-globe";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [6, -6]), { stiffness: 120, damping: 20 });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-6, 6]), { stiffness: 120, damping: 20 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  return (
    <section
      ref={ref}
      onMouseMove={handleMouseMove}
      className="relative overflow-hidden pt-40 pb-24 md:pt-52 md:pb-32"
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-beige via-cream to-cream dark:from-charcoal dark:via-soot dark:to-soot" />
      <div className="absolute -top-40 -right-40 h-[520px] w-[520px] rounded-full bg-wine/10 blur-[120px] -z-10" />
      <div className="absolute top-40 -left-40 h-[420px] w-[420px] rounded-full bg-sand/30 blur-[110px] -z-10" />

      <motion.div
        className="absolute top-32 left-[8%] h-16 w-16 rounded-2xl border border-wine/20 bg-white/40 dark:bg-white/5 backdrop-blur-md animate-float hidden md:block"
        style={{ animationDelay: "0.5s" }}
      />
      <motion.div
        className="absolute bottom-24 right-[12%] h-24 w-24 rounded-full border border-wine/20 bg-white/30 dark:bg-white/5 backdrop-blur-md animate-float hidden md:block"
        style={{ animationDelay: "1.2s" }}
      />
      <motion.div
        className="absolute top-[45%] right-[6%] h-10 w-10 rounded-xl bg-wine/15 animate-float hidden lg:block"
        style={{ animationDelay: "2s" }}
      />

      <HeroGlobeOrnament className="absolute top-1/2 left-[-6%] -translate-y-1/2 h-[560px] w-[560px] opacity-80 hidden lg:block" />

      <div className="container-editorial relative">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-16 items-center">
          <div className="relative z-10">
            <Reveal>
              <p className="eyebrow mb-6">Global Performance Advertising Network</p>
            </Reveal>

            <TextReveal
              as="h1"
              text="Connecting advertisers with high-quality traffic worldwide."
              className="font-display text-[2.6rem] leading-[1.06] sm:text-6xl md:text-[4.2rem] md:leading-[1.04] font-medium text-balance text-charcoal dark:text-cream"
            />

            <Reveal delay={0.4}>
              <p className="mt-7 max-w-lg text-base md:text-lg leading-relaxed text-charcoal/70 dark:text-cream/70">
                VisionovaHQ connects quality, fraud-filtered traffic with performance-driven campaigns across global markets — built for advertisers and publishers who care about results, not just volume.
              </p>
            </Reveal>

            <Reveal delay={0.55}>
              <div className="mt-10 flex flex-wrap gap-4">
                <Button href="/advertisers" variant="primary">Become an Advertiser</Button>
                <Button href="/publishers" variant="secondary">Become a Publisher</Button>
              </div>
            </Reveal>

            <Reveal delay={0.7}>
              <div className="mt-14 flex items-center gap-8 text-charcoal/50 dark:text-cream/50">
                <p className="text-xs uppercase tracking-[0.2em]">Trusted across</p>
                <div className="flex gap-6 text-sm font-display italic">
                  <span>Finance</span>
                  <span>Ecommerce</span>
                  <span>Travel</span>
                  <span className="hidden sm:inline">Health</span>
                </div>
              </div>
            </Reveal>
          </div>

          <motion.div
            style={{ rotateX, rotateY, transformPerspective: 1000 }}
            className="relative mx-auto w-full max-w-md"
          >
            <div className="relative rounded-xl2 border border-white/40 dark:border-white/10 card-surface shadow-soft p-6">
              <div className="flex items-center justify-between">
                <p className="font-display text-lg text-charcoal dark:text-cream">The Journey</p>
                <span className="flex h-2.5 w-2.5 rounded-full bg-wine animate-pulse" />
              </div>

              <div className="mt-7 relative pl-2" style={{ perspective: 700 }}>
                <div className="absolute left-[27px] top-3 bottom-3 w-px bg-charcoal/10 dark:bg-cream/10" />
                <motion.div
                  className="absolute left-[27px] top-3 w-px bg-wine origin-top"
                  initial={{ height: 0 }}
                  whileInView={{ height: "calc(100% - 24px)" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                />
                <motion.span
                  className="absolute left-[24px] h-1.5 w-1.5 rounded-full bg-wine shadow-glow"
                  initial={{ top: "0%", opacity: 0 }}
                  animate={{ top: ["0%", "100%"], opacity: [0, 1, 1, 0] }}
                  transition={{ duration: 3, delay: 2.2, repeat: Infinity, ease: "easeInOut" }}
                />

                <div className="space-y-7" style={{ transformStyle: "preserve-3d" }}>
                  {[
                    { icon: Eye, title: "Advertisement", desc: "A relevant ad appears" },
                    { icon: MousePointerClick, title: "User Engagement", desc: "Interest turns into intent" },
                  ].map((step, i) => (
                    <motion.div
                      key={step.title}
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-40px" }}
                      transition={{ duration: 0.6, delay: 0.3 + i * 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="relative flex items-center gap-4"
                    >
                      <motion.div
                        initial={{ scale: 0.7, opacity: 0, rotateY: 0, rotateX: 0 }}
                        whileInView={{
                          scale: 1,
                          opacity: 1,
                          rotateY: [0, 14, 0, -14, 0],
                          rotateX: [0, -6, 0, 6, 0],
                        }}
                        viewport={{ once: true, margin: "-40px" }}
                        transition={{
                          scale: { duration: 0.5, delay: 0.3 + i * 0.35 },
                          opacity: { duration: 0.5, delay: 0.3 + i * 0.35 },
                          rotateY: { duration: 5 + i * 0.6, delay: 1 + i * 0.35, repeat: Infinity, ease: "easeInOut" },
                          rotateX: { duration: 5 + i * 0.6, delay: 1 + i * 0.35, repeat: Infinity, ease: "easeInOut" },
                        }}
                        style={{ transformPerspective: 600, transformStyle: "preserve-3d" }}
                        whileHover={{ scale: 1.1 }}
                        className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-wine text-cream shadow-glow"
                      >
                        <step.icon size={18} />
                      </motion.div>
                      <div>
                        <p className="font-display text-base text-charcoal dark:text-cream leading-tight">{step.title}</p>
                        <p className="text-xs text-charcoal/55 dark:text-cream/55 mt-0.5">{step.desc}</p>
                      </div>
                    </motion.div>
                  ))}

                  <motion.div
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.6, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
                    className="relative flex items-center gap-4"
                  >
                    <motion.div
                      initial={{ scale: 0.7, opacity: 0, rotateY: 0, rotateX: 0 }}
                      whileInView={{
                        scale: 1,
                        opacity: 1,
                        rotateY: [0, 14, 0, -14, 0],
                        rotateX: [0, -6, 0, 6, 0],
                      }}
                      viewport={{ once: true, margin: "-40px" }}
                      transition={{
                        scale: { duration: 0.5, delay: 1.0 },
                        opacity: { duration: 0.5, delay: 1.0 },
                        rotateY: { duration: 6.2, delay: 1.7, repeat: Infinity, ease: "easeInOut" },
                        rotateX: { duration: 6.2, delay: 1.7, repeat: Infinity, ease: "easeInOut" },
                      }}
                      style={{ transformPerspective: 600, transformStyle: "preserve-3d" }}
                      whileHover={{ scale: 1.1 }}
                      className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-wine text-cream shadow-glow"
                    >
                      {[PhoneCall, ShoppingCart, UserPlus, Smartphone, Gamepad2].map((ActionIcon, iconIdx) => (
                        <motion.span
                          key={iconIdx}
                          className="absolute inset-0 flex items-center justify-center"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: [0, 1, 1, 0] }}
                          transition={{
                            duration: 3.2,
                            delay: 1.2 + iconIdx * 0.8,
                            repeat: Infinity,
                            repeatDelay: 3.2,
                            ease: "easeInOut",
                            times: [0, 0.12, 0.78, 1],
                          }}
                        >
                          <ActionIcon size={18} />
                        </motion.span>
                      ))}
                      <motion.span
                        className="absolute inset-0 rounded-2xl border border-wine"
                        initial={{ opacity: 0, scale: 1 }}
                        animate={{ opacity: [0.6, 0], scale: [1, 1.7] }}
                        transition={{ duration: 1.8, delay: 2.4, repeat: Infinity, ease: "easeOut" }}
                      />
                    </motion.div>
                    <div>
                      <p className="font-display text-base text-charcoal dark:text-cream leading-tight">Action / Conversion</p>
                      <p className="text-xs text-charcoal/55 dark:text-cream/55 mt-0.5">A call, sale, signup, install, or interaction</p>
                    </div>
                  </motion.div>
                </div>
              </div>

              <div className="mt-7 grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-charcoal/[0.03] dark:bg-cream/[0.05] p-3 text-center">
                  <p className="font-display text-lg text-wine">Flexible</p>
                  <p className="text-[11px] text-charcoal/50 dark:text-cream/50 mt-0.5">Any Action Type</p>
                </div>
                <div className="rounded-xl bg-charcoal/[0.03] dark:bg-cream/[0.05] p-3 text-center">
                  <p className="font-display text-lg text-wine">Real-Time</p>
                  <p className="text-[11px] text-charcoal/50 dark:text-cream/50 mt-0.5">Conversion Tracking</p>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10, x: -10 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ delay: 1.6, duration: 0.6 }}
              className="absolute -bottom-6 -left-8 rounded-2xl bg-wine text-cream px-5 py-3.5 shadow-glow hidden sm:block"
            >
              <p className="text-xs opacity-80">Status</p>
              <p className="font-display text-xl">Converted</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-charcoal/40 dark:text-cream/40 hidden md:flex flex-col items-center gap-1"
      >
        <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
        <ChevronDown size={16} />
      </motion.div>
    </section>
  );
}
