import { SectionShell } from '../components/Sections/SectionShell';

const services = [
  {
    title: 'Manned Guarding & Static Posts',
    copy: 'Smartly uniformed guards deployed at all critical entry / exit points, lobbies, parking and high-risk zones.',
    bullets: [
      'Corporate offices, IT parks & data centres',
      'Retail malls & premium stores',
      'Manufacturing units & warehouses'
    ]
  },
  {
    title: 'Mobile Patrols & Quick Response',
    copy: 'Dedicated patrol vehicles and motorbike riders that cover large facilities and respond instantly to any alarm.',
    bullets: [
      'Night patrols for residential communities',
      'Randomised route planning',
      'Incident reporting with visual evidence'
    ]
  },
  {
    title: 'Control Room & Remote Monitoring',
    copy: 'Round-the-clock command centre that monitors CCTV feeds and supports all deployed guards on the field.',
    bullets: [
      'Proactive alerting and escalation',
      'Incident ticketing and logging',
      'Health monitoring for all devices'
    ]
  },
  {
    title: 'Event & VIP Security',
    copy: 'Discreet yet firm security cover for events, launches, concerts and VIP movement.',
    bullets: [
      'Close protection & bodyguarding',
      'Crowd & queue management',
      'Backstage & green room security'
    ]
  },
  {
    title: 'Electronic Security Systems',
    copy: 'End-to-end design, installation and AMC of CCTV, access control and alarm systems.',
    bullets: [
      'IP & PTZ cameras with analytics',
      'Biometric & RFID access control',
      'Perimeter beam and intrusion alarms'
    ]
  },
  {
    title: 'Corporate Risk Consulting',
    copy: 'Security audits, SOP design and training for in-house security teams and leadership.',
    bullets: [
      'Threat & vulnerability assessment',
      'Crisis management planning',
      'Fire & evacuation drills'
    ]
  }
];

export function Services() {
  return (
    <main className="pt-24">
      <SectionShell
        eyebrow="Services"
        title="Specialised security services for every type of facility."
        subtitle="We combine people, processes and technology to create multiple layers of protection across your campus, plant or community. Whether you need a single guard for a boutique store or a 200+ guard deployment for a large industrial complex, our teams scale with you."
      >
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.title}
              className="glass-panel flex flex-col rounded-3xl p-6"
            >
              <h3 className="text-base font-semibold text-slate-900">
                {service.title}
              </h3>
              <p className="mt-3 text-sm text-slate-600">{service.copy}</p>
              <ul className="mt-4 space-y-1.5 text-xs text-slate-500">
                {service.bullets.map((point) => (
                  <li key={point} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-400" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3 text-xs text-slate-600">
          <div>
            <h3 className="text-sm font-semibold text-slate-900">
              Sectors we serve
            </h3>
            <ul className="mt-2 space-y-1">
              <li>Corporate offices &amp; IT parks</li>
              <li>Residential communities &amp; gated layouts</li>
              <li>Hotels, malls &amp; retail chains</li>
              <li>Manufacturing, logistics &amp; warehouses</li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-900">
              Guard profiles
            </h3>
            <ul className="mt-2 space-y-1">
              <li>Ex-servicemen &amp; defence background profiles</li>
              <li>Armed &amp; unarmed security staff</li>
              <li>Event bouncers &amp; crowd managers</li>
              <li>K9 handlers and specialised teams (on request)</li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-900">
              Compliance &amp; licences
            </h3>
            <ul className="mt-2 space-y-1">
              <li>PSARA-compliant operations (state wise)</li>
              <li>ESI, PF and wage compliance for all guards</li>
              <li>Standardised uniforms &amp; ID cards</li>
              <li>Detailed documentation for audits</li>
            </ul>
          </div>
        </div>
      </SectionShell>
    </main>
  );
}


