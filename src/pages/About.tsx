import { SectionShell } from '../components/Sections/SectionShell';

const pillars = [
  {
    title: 'People',
    copy: 'Guarding teams recruited from defence and disciplined backgrounds, trained extensively on soft skills and emergency response.',
    metric: '350+',
    label: 'deployed guards & supervisors'
  },
  {
    title: 'Process',
    copy: 'Documented SOPs, visitor management, night checks and incident reporting built around your site-specific risk profile.',
    metric: '4',
    label: 'layer protection framework'
  },
  {
    title: 'Technology',
    copy: 'CCTV, access control, GPS tracking and command centre dashboards that give you complete visibility.',
    metric: '20+',
    label: 'integrated technology partners'
  }
];

export function About() {
  return (
    <main className="pt-24">
      <SectionShell
        eyebrow="About CRK"
        title="A security partner that behaves like your in-house protection team."
        subtitle="CRK Security Services was built by professionals with decades of experience in industrial security, crisis management and large-scale facility administration."
      >
        <div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr]">
          <div className="space-y-6 text-sm text-slate-600">
            <p>
              We understand that every site is unique. Our approach always
              begins with a detailed assessment of your layout, people movement,
              assets and current risks. From there we design a layered security
              program that grows with your business.
            </p>
            <p>
              Our field teams are supported by a 24/7 command centre that
              monitors alarms, CCTV feeds and patrols. Site supervisors conduct
              surprise checks, drills and refresher trainings so that your
              security posture never becomes complacent.
            </p>
            <p>
              At CRK, we measure our success in the number of incidents that are
              prevented – not just responded to. That is why our clients retain
              us year after year as their long-term security partner.
            </p>
            <p>
               Management reviews and client feedback sessions are scheduled at
               regular intervals, ensuring that every learning from the ground
               is translated into stronger processes and better-trained teams.
            </p>
          </div>
          <div className="grid gap-4 rounded-3xl border border-slate-200 bg-slate-50 p-5">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="flex items-start justify-between gap-3 rounded-2xl bg-white p-4"
              >
                <div>
                  <h3 className="text-sm font-semibold text-slate-900">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-xs text-slate-600">{pillar.copy}</p>
                </div>
                <div className="text-right text-xs text-slate-500">
                  <p className="text-lg font-semibold text-brand-600">
                    {pillar.metric}
                  </p>
                  <p>{pillar.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionShell>
    </main>
  );
}


