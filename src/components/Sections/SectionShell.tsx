import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

type SectionShellProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
};

export function SectionShell({
  eyebrow,
  title,
  subtitle,
  children
}: SectionShellProps) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14 lg:px-0 lg:py-20">
      <motion.header
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="mb-10 max-w-3xl"
      >
        {eyebrow && (
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-primary-green font-display">
            {eyebrow}
          </p>
        )}
        <h2 className="text-3xl font-bold tracking-tight text-primary-blue sm:text-4xl lg:text-5xl font-display">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-4 text-base leading-relaxed text-dark-text sm:text-lg max-w-2xl">{subtitle}</p>
        )}
      </motion.header>
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </section>
  );
}


