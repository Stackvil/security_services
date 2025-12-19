import { SectionShell } from '../components/Sections/SectionShell';
import { NetworkScene } from '../components/Three/NetworkScene';

const solutions = [
  {
    title: 'Command Centre as a Service',
    copy: 'Full-featured remote monitoring centre that can watch over distributed sites, with incident logging and escalation.',
    tag: 'Remote Monitoring'
  },
  {
    title: 'Smart Campus Security',
    copy: 'Integrated solution for colleges, tech parks and townships using ANPR, access control and video analytics.',
    tag: 'Integrated'
  },
  {
    title: 'Warehouse & Logistics Security',
    copy: 'Dock security, yard management, GPS tracking and route monitoring for high-value goods.',
    tag: 'Logistics'
  }
];

export function Solutions() {
  return (
    <main className="pt-24">
      <SectionShell
        eyebrow="Security Solutions"
        title="Layered security architecture that scales with your business."
        subtitle="We stitch together guarding, surveillance, alarms and response teams into one cohesive program – designed specifically for you. Our design teams map your critical assets, people movement and peak-load timings before recommending any technology."
      >
        <div className="grid gap-8 lg:grid-cols-[1.1fr,0.9fr]">
          <div className="space-y-4">
            {solutions.map((solution) => (
              <article
                key={solution.title}
                className="glass-panel flex flex-col rounded-3xl p-5"
              >
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-sm font-semibold text-slate-900">
                    {solution.title}
                  </h3>
                  <span className="rounded-full bg-brand-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-600">
                    {solution.tag}
                  </span>
                </div>
                <p className="mt-3 text-sm text-slate-600">{solution.copy}</p>
              </article>
            ))}
          </div>
          <div className="space-y-4">
            <p className="text-sm text-slate-600">
              Our solutions team works closely with OEM partners to design a
              secure, yet practical, system that covers cameras, access control,
              alarms and communication. Everything is monitored centrally while
              giving your internal teams clear, easy-to-use dashboards.
            </p>
            <p className="text-xs text-slate-500">
              We can integrate with existing infrastructure where possible,
              reducing capital expenditure while still improving your overall
              security posture and response times.
            </p>
            <NetworkScene />
          </div>
        </div>
      </SectionShell>
    </main>
  );
}


