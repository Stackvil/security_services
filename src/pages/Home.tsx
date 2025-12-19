import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HeroImageStrip } from '../components/Hero/HeroImageStrip';
import { SectionShell } from '../components/Sections/SectionShell';

export function Home() {
  return (
    <main className="pt-24">
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
            CRK Security Services brings together trained manpower, intelligent
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
              className="rounded-full bg-brand-500 px-6 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-white shadow-lg shadow-brand-500/40 transition hover:bg-brand-400"
            >
              Request a site survey
            </Link>
            <Link
              to="/services"
              className="rounded-full border border-slate-300 px-6 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-slate-800 transition hover:border-brand-400 hover:bg-brand-50"
            >
              Explore services
            </Link>
          </motion.div>
          <motion.dl
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="mt-2 grid max-w-md grid-cols-3 gap-4 text-xs text-slate-500"
          >
            <div>
              <dt className="font-semibold text-slate-900">120+</dt>
              <dd>corporate &amp; residential sites under protection</dd>
            </div>
            <div>
              <dt className="font-semibold text-slate-900">24/7</dt>
              <dd>central command &amp; quick response control room</dd>
            </div>
            <div>
              <dt className="font-semibold text-slate-900">8+ yrs</dt>
              <dd>average field experience of on-ground supervisors</dd>
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
              className="glass-panel group flex flex-col justify-between rounded-3xl p-6 transition hover:-translate-y-1 hover:border-brand-100 hover:bg-brand-50"
            >
              <div>
                <h3 className="text-base font-semibold text-slate-900">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm text-slate-600">{card.copy}</p>
              </div>
              <div className="mt-6 flex items-center justify-between text-xs text-slate-500">
                <span>Learn more</span>
                <span className="rounded-full bg-brand-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-600">
                  CRK
                </span>
              </div>
            </article>
          ))}
        </div>
      </SectionShell>

      <SectionShell
        eyebrow="Why Clients Choose CRK"
        title="A single partner for every security requirement."
        subtitle="Instead of coordinating multiple vendors, our clients rely on one integrated team that understands their sites in depth."
      >
        <div className="grid gap-6 md:grid-cols-3">
          <div className="glass-panel rounded-3xl p-6 text-sm text-slate-600">
            <h3 className="text-sm font-semibold text-slate-900">
              Security-first hiring
            </h3>
            <p className="mt-2">
              Background checks, address verification and reference validation
              are mandatory for every guard, bouncer and supervisor we deploy.
            </p>
          </div>
          <div className="glass-panel rounded-3xl p-6 text-sm text-slate-600">
            <h3 className="text-sm font-semibold text-slate-900">
              Training &amp; refresher drills
            </h3>
            <p className="mt-2">
              Classroom and on-site training modules cover soft skills, access
              control, emergency response, fire safety and customer handling.
            </p>
          </div>
          <div className="glass-panel rounded-3xl p-6 text-sm text-slate-600">
            <h3 className="text-sm font-semibold text-slate-900">
              Transparent reporting
            </h3>
            <p className="mt-2">
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
          <div className="glass-panel rounded-3xl p-6">
            <p className="text-sm text-slate-600">
              “CRK has been our security partner across multiple facilities. The
              guards are always punctual and the supervisors are extremely
              responsive. Their control room has helped us detect and prevent
              several potential incidents.”
            </p>
            <p className="mt-4 text-sm font-semibold text-slate-900">
              Daniel Rao
            </p>
            <p className="text-xs text-slate-500">
              Head - Administration, Tech Park
            </p>
          </div>
          <div className="space-y-4">
            <div className="glass-panel rounded-3xl p-5 text-sm text-slate-600">
              “CRK’s event security team understands protocol and VIP movement
              extremely well. Their planning and coordination with our staff is
              seamless.”
            </div>
            <div className="glass-panel rounded-3xl p-5 text-sm text-slate-600">
              “We rely on their night patrols and CCTV monitoring to secure our
              gated community. Response to any escalation is quick and measured.”
            </div>
          </div>
        </div>
      </SectionShell>

      <SectionShell
        eyebrow="Let’s Secure Your World"
        title="Book a security assessment today."
      >
        <div className="glass-panel flex flex-col items-start justify-between gap-4 rounded-3xl bg-gradient-to-r from-brand-600 via-brand-500 to-brand-400 p-7 text-white sm:flex-row sm:items-center">
          <div>
            <h3 className="text-lg font-semibold">
              Share your requirement. Our security consultant will respond
              within one business hour.
            </h3>
            <p className="mt-2 text-sm text-slate-100/90">
              Detailed site survey, risk profiling and customised deployment
              plan with transparent commercials.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="rounded-full bg-white px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-brand-600 shadow-lg shadow-brand-900/30 transition hover:bg-slate-100"
            >
              Get in touch
            </Link>
            <Link
              to="/about"
              className="rounded-full border border-slate-100/60 bg-transparent px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-100 transition hover:bg-white/10"
            >
              Why CRK
            </Link>
          </div>
        </div>
      </SectionShell>
    </main>
  );
}


