"use client";

import { motion } from "framer-motion";

/**
 * A subtle, abstract "global network" ornament for the hero background.
 * Reads as a stylized globe/orbit wireframe with a handful of connection
 * nodes and traffic-flow arcs — decorative only, kept low-opacity so it
 * never competes with the headline for attention.
 */
export function HeroGlobeOrnament({ className = "" }: { className?: string }) {
  const nodes: [number, number][] = [
    [440, 240],
    [340, 413],
    [140, 413],
    [40, 240],
    [140, 67],
    [340, 67],
  ];

  const arcs = [
    "M440,240 Q240,240 140,413",
    "M140,67 Q240,240 340,413",
    "M40,240 Q240,240 340,67",
  ];

  return (
    <div className={`pointer-events-none select-none ${className}`} aria-hidden="true">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
        className="h-full w-full"
      >
        <svg viewBox="0 0 480 480" className="h-full w-full overflow-visible">
          {/* wireframe sphere */}
          <circle cx="240" cy="240" r="200" className="stroke-wine" strokeOpacity="0.14" strokeWidth="1" fill="none" />
          <circle cx="240" cy="240" r="140" className="stroke-wine" strokeOpacity="0.09" strokeWidth="1" strokeDasharray="1 7" fill="none" />
          <circle cx="240" cy="240" r="80" className="stroke-wine" strokeOpacity="0.09" strokeWidth="1" strokeDasharray="1 7" fill="none" />
          <ellipse cx="240" cy="240" rx="200" ry="62" className="stroke-wine" strokeOpacity="0.1" strokeWidth="1" fill="none" />
          <ellipse cx="240" cy="240" rx="62" ry="200" className="stroke-wine" strokeOpacity="0.1" strokeWidth="1" fill="none" />

          {/* traffic-flow arcs */}
          {arcs.map((d, i) => (
            <motion.path
              key={d}
              d={d}
              className="stroke-sand"
              strokeOpacity="0.35"
              strokeWidth="1.2"
              fill="none"
              strokeDasharray="4 10"
              initial={{ strokeDashoffset: 0 }}
              animate={{ strokeDashoffset: -140 }}
              transition={{ duration: 8 + i * 2, repeat: Infinity, ease: "linear" }}
            />
          ))}

          {/* connection nodes */}
          {nodes.map(([x, y], i) => (
            <g key={i}>
              <circle cx={x} cy={y} r="4" className="fill-wine" fillOpacity="0.45" />
              <motion.circle
                cx={x}
                cy={y}
                r="4"
                className="stroke-wine"
                strokeOpacity="0.4"
                strokeWidth="1"
                fill="none"
                initial={{ scale: 1, opacity: 0.5 }}
                animate={{ scale: [1, 2.4], opacity: [0.5, 0] }}
                transition={{ duration: 3, delay: i * 0.6, repeat: Infinity, ease: "easeOut" }}
                style={{ transformOrigin: `${x}px ${y}px` }}
              />
            </g>
          ))}
        </svg>
      </motion.div>
    </div>
  );
}
