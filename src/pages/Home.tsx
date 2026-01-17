import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HeroImageStrip } from '../components/Hero/HeroImageStrip';
import { SectionShell } from '../components/Sections/SectionShell';

import { SEO } from '../components/SEO';

export function Home() {
  return (
    <main className="pt-24">
      <SEO
        title="Best Security Services in Vijayawada"
        description="Hindusthan Supervision provides top-tier security services, manned guarding, and electronic surveillance in Vijayawada. Trusted by corporate and residential clients."
        keywords="security services Vijayawada, best security agency Vijayawada, corporate security, residential security guards, event security Vijayawada"
      />
      <section className="mx-auto flex max-w-6xl flex-col gap-10 px-4 pb-16 pt-10 lg:flex-row lg:items-center lg:gap-14 lg:px-0">
        <div className="max-w-xl space-y-6">
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-xs font-semibold uppercase tracking-[0.26em] text-brand-600"
          >
            Reliable &amp; Professional
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.05 }}
            className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl"
          >
            Security services that protect every corner of your world.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.12 }}
            className="text-sm text-slate-600 sm:text-base"
          >
            Hindusthan Supervision Security Services brings together trained manpower, intelligent
            monitoring and rapid response teams to keep your people, premises
            and assets safe 24 hours a day.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.16 }}
            className="flex flex-wrap items-center gap-4"
          >
            <Link
              to="/contact"
              className="rounded-full bg-accent-500 px-7 py-3.5 text-xs font-bold uppercase tracking-[0.16em] text-brand-950 shadow-xl shadow-accent-500/20 transition hover:bg-accent-400 hover:-translate-y-0.5"
            >
              Request a site survey
            </Link>
            <Link
              to="/services"
              className="rounded-full border border-slate-300 px-7 py-3.5 text-xs font-bold uppercase tracking-[0.16em] text-brand-950 transition hover:border-accent-400 hover:text-accent-600 hover:bg-accent-50"
            >
              Explore services
            </Link>
          </motion.div>
          <motion.dl
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="mt-6 grid max-w-md grid-cols-3 gap-6 text-xs text-slate-500 border-t border-slate-200 pt-6"
          >
            <div>
              <dt className="font-bold text-brand-950 text-2xl font-display">120+</dt>
              <dd className="mt-1 leading-snug">corporate &amp; residential sites</dd>
            </div>
            <div>
              <dt className="font-bold text-brand-950 text-2xl font-display">24/7</dt>
              <dd className="mt-1 leading-snug">command &amp; control room</dd>
            </div>
            <div>
              <dt className="font-bold text-brand-950 text-2xl font-display">8+ yrs</dt>
              <dd className="mt-1 leading-snug">average supervisor experience</dd>
            </div>
          </motion.dl>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.85, delay: 0.12 }}
          className="flex-1"
        >
          <HeroImageStrip />
        </motion.div>
      </section>

      <SectionShell
        eyebrow="Our Services"
        title="Integrated security across people, process and technology."
        subtitle="From on-ground guarding to digital surveillance and VIP escort, our teams are trained to operate discreetly while remaining completely alert. Every deployment is backed by documented SOPs, risk registers and regular review meetings with your administration team."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: '24/7 On-site Guarding',
              copy: 'Uniformed, trained guards for corporate parks, retail, industrial plants and residential communities.'
            },
            {
              title: 'Event & VIP Security',
              copy: 'Close protection officers, route planning and secure movement for VIPs and high-sensitivity events.'
            },
            {
              title: 'Electronic Surveillance',
              copy: 'CCTV, access control and remote monitoring integrated with our command centre.'
            }
          ].map((card) => (
            <article
              key={card.title}
              className="premium-card group flex flex-col justify-between rounded-xl p-8 transition hover:-translate-y-1"
            >
              <div>
                <h3 className="text-xl font-bold text-brand-950 font-display">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{card.copy}</p>
              </div>
              <div className="mt-8 flex items-center justify-between text-xs font-bold tracking-widest uppercase">
                <span className="text-accent-600 group-hover:text-accent-700">Learn more</span>
                <span className="h-0.5 w-8 bg-accent-300 group-hover:w-16 transition-all duration-300"></span>
              </div>
            </article>
          ))}
        </div>
      </SectionShell>

      <SectionShell
        eyebrow="Why Clients Choose Hindusthan Supervision"
        title="A single partner for every security requirement."
        subtitle="Instead of coordinating multiple vendors, our clients rely on one integrated team that understands their sites in depth."
      >
        <div className="grid gap-6 md:grid-cols-3">
          <div className="premium-card rounded-xl p-8 text-sm text-slate-600">
            <h3 className="text-lg font-bold text-brand-950 font-display mb-3">
              Security-first hiring
            </h3>
            <p className="leading-relaxed">
              Background checks, address verification and reference validation
              are mandatory for every guard, bouncer and supervisor we deploy.
            </p>
          </div>
          <div className="premium-card rounded-xl p-8 text-sm text-slate-600">
            <h3 className="text-lg font-bold text-brand-950 font-display mb-3">
              Training &amp; refresher drills
            </h3>
            <p className="leading-relaxed">
              Classroom and on-site training modules cover soft skills, access
              control, emergency response, fire safety and customer handling.
            </p>
          </div>
          <div className="premium-card rounded-xl p-8 text-sm text-slate-600">
            <h3 className="text-lg font-bold text-brand-950 font-display mb-3">
              Transparent reporting
            </h3>
            <p className="leading-relaxed">
              Daily situation reports, incident logs and night-round summaries
              give your team clear visibility into every shift.
            </p>
          </div>
        </div>
      </SectionShell>

      <SectionShell
        eyebrow="Testimonials"
        title="Trusted by businesses, communities and high-profile individuals."
      >
        <div className="grid gap-6 lg:grid-cols-[1.2fr,1fr]">
          <div className="premium-card rounded-xl p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <svg className="w-24 h-24 text-brand-900" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.896 14.789 15.93 15.769 15.549C16.551 15.245 17.5 14.668 17.5 12.001C17.5 9.227 15.343 7.001 12.5 7.001C9.657 7.001 7.5 9.227 7.5 12.001C7.5 13.945 8.938 15.961 8.938 15.961L6.5 18C6.5 18 3.5 14.814 3.5 12.001C3.5 7.03 7.529 3 12.5 3C17.471 3 21.5 7.03 21.5 12.001C21.5 15.42 19.467 18.3 16.5 20.457L14.017 21Z" /></svg>
            </div>
            <p className="text-lg text-slate-700 italic relative z-10 leading-relaxed">
              “Hindusthan Supervision has been our security partner across multiple facilities. The
              guards are always punctual and the supervisors are extremely
              responsive. Their control room has helped us detect and prevent
              several potential incidents.”
            </p>
            <div className="mt-8 flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 font-bold">DR</div>
              <div>
                <p className="text-base font-bold text-brand-950 font-display">
                  Daniel Rao
                </p>
                <p className="text-xs font-semibold text-accent-600 uppercase tracking-wider">
                  Head - Administration, Tech Park
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="premium-card rounded-xl p-6 text-sm text-slate-600">
              <p className="leading-relaxed">“Hindusthan Supervision’s event security team understands protocol and VIP movement
                extremely well. Their planning and coordination with our staff is
                seamless.”</p>
            </div>
            <div className="premium-card rounded-xl p-6 text-sm text-slate-600">
              <p className="leading-relaxed">“We rely on their night patrols and CCTV monitoring to secure our
                gated community. Response to any escalation is quick and measured.”</p>
            </div>
          </div>
        </div>
      </SectionShell>

      <SectionShell
        eyebrow="Let’s Secure Your World"
        title="Book a security assessment today."
      >
        <div className="relative overflow-hidden rounded-2xl bg-brand-950 p-8 text-white sm:p-12">
          <div className="absolute inset-0 bg-blue-500/10 mix-blend-overlay"></div>
          <div className="relative z-10 flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
            <div className="max-w-xl">
              <h3 className="text-2xl font-bold font-display">
                Share your requirement. Our consultant will respond within one hour.
              </h3>
              <p className="mt-4 text-slate-300 leading-relaxed">
                Detailed site survey, risk profiling and customised deployment
                plan with transparent commercials.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full bg-accent-500 px-8 py-4 text-xs font-bold uppercase tracking-[0.18em] text-brand-950 shadow-lg shadow-accent-500/20 transition hover:bg-accent-400"
              >
                Get in touch
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 py-4 text-xs font-bold uppercase tracking-[0.18em] text-white transition hover:bg-white/10"
              >
                Why Us?
              </Link>
            </div>
          </div>
        </div>
      </SectionShell>
    </main >
  );
}


