import { SectionShell } from '../components/Sections/SectionShell';

const testimonials = [
  {
    name: 'Vikram Arora',
    role: 'COO, Regional Retail Chain',
    quote:
      'Their store security teams have helped us drastically reduce pilferage and improve customer experience at the same time.'
  },
  {
    name: 'Divya Menon',
    role: 'Secretary, Premium Apartment Association',
    quote:
      'From guard behaviour to visitor management and patrolling, Hindusthan Supervision has brought structure and discipline to our community.'
  },
  {
    name: 'Col. (Retd.) S. Nair',
    role: 'Chief Security Advisor, Manufacturing Conglomerate',
    quote:
      'They are one of the few private security firms that understand industrial safety and crisis protocols thoroughly.'
  }
];

import { SEO } from '../components/SEO';

export function Testimonials() {
  return (
    <main className="pt-24">
      <SEO
        title="Client Reviews - Security Services Vijayawada"
        description="See what our clients say about our security and facility management services. Trusted by retail chains and apartments in Vijayawada."
        keywords="security reviews Vijayawada, client testimonials, best security agency reviews, customer feedback"
      />
      <SectionShell
        eyebrow="Testimonials"
        title="What our clients say about working with Hindusthan Supervision."
      >
        <div className="mb-6 text-xs text-slate-500">
          The feedback below has been shared by clients across retail, housing
          societies and industrial plants who work with our teams on a daily
          basis.
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <article
              key={t.name}
              className="glass-panel flex flex-col rounded-3xl p-5"
            >
              <p className="text-sm text-slate-600">“{t.quote}”</p>
              <div className="mt-5 text-xs text-slate-500">
                <p className="font-semibold text-slate-900">{t.name}</p>
                <p>{t.role}</p>
              </div>
            </article>
          ))}
        </div>
      </SectionShell>
    </main>
  );
}


