import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';

const base = import.meta.env.BASE_URL ?? '/';

const heroImages = [
  {
    src: `${base}images/Armed-Security-Guard-in-Stockbridge.jpg`,
    label: 'Armed security cover'
  },
  {
    src: `${base}images/Security-Guard-Employment-Opportunities.jpg`,
    label: 'Professional guarding teams'
  },
  {
    src: `${base}images/k9-security-melbourne.jpg`,
    label: 'Specialised K9 security'
  },
  {
    src: `${base}images/istockphoto-636724430-612x612.jpg`,
    label: 'Corporate & hotel security'
  },
  {
    src: `${base}images/il_fullxfull.7211061540_kr9o.avif`,
    label: 'Executive protection'
  }
];

export function HeroImageStrip() {
  const [index, setIndex] = useState(0);

  // Ensure we always have at least one image and memoise list
  const slides = useMemo(() => heroImages, []);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % slides.length);
    }, 4500);
    return () => window.clearInterval(id);
  }, [slides]);

  const active = slides[index];

  return (
    <div className="space-y-4">
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-soft">
        <AnimatePresence mode="wait">
          <motion.figure
            key={active.src}
            className="relative h-full w-full"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <img
              src={active.src}
              alt={active.label}
              className="h-full w-full object-cover"
              loading="eager"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/80 via-slate-900/0 to-transparent" />
            <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4 text-xs text-white">
              <span className="font-medium">{active.label}</span>
              <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.18em]">
                {String(index + 1).padStart(2, '0')}/{heroImages.length}
              </span>
            </figcaption>
          </motion.figure>
        </AnimatePresence>
      </div>
      <div className="flex gap-1.5">
        {heroImages.map((image, i) => (
          <button
            key={image.src}
            type="button"
            onClick={() => setIndex(i)}
            className={`h-1.5 flex-1 rounded-full transition ${
              i === index ? 'bg-brand-500' : 'bg-slate-300'
            }`}
            aria-label={image.label}
          />
        ))}
      </div>
    </div>
  );
}


