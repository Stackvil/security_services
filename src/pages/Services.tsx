import { SectionShell } from '../components/Sections/SectionShell';



import { SEO } from '../components/SEO';

export function Services() {
  return (
    <main className="pt-24">
      <SEO
        title="Security & Housekeeping Services"
        description="Comprehensive security solutions including manned guarding, housekeeping, patient care, and event security in Vijayawada."
        keywords="housekeeping services Vijayawada, security guards, patient care services, event bouncers, facility management Vijayawada"
      />
      <SectionShell
        eyebrow="Services"
        title="Comprehensive Service Solutions"
        subtitle="From top-tier security to professional housekeeping and specialized staffing, we provide trusted services to manage your facility and care for your loved ones."
      >
        <div className="space-y-20">
          {/* Security Services Section */}
          <section>
            <div className="mb-8 border-b border-slate-200 pb-4">
              <h2 className="text-2xl font-bold text-slate-900">Security Services</h2>
              <p className="mt-2 text-slate-600">Protecting your assets with manned guarding, electronic systems, and risk consulting.</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {securityServices.map((service) => (
                <ServiceCard key={service.title} service={service} />
              ))}
            </div>
          </section>

          {/* House Keeping Section */}
          <section>
            <div className="mb-8 border-b border-slate-200 pb-4">
              <h2 className="text-2xl font-bold text-slate-900">House Keeping Services</h2>
              <p className="mt-2 text-slate-600">Professional cleaning solutions for homes, offices, and events.</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {houseKeepingServices.map((service) => (
                <ServiceCard key={service.title} service={service} />
              ))}
            </div>
          </section>

          {/* Other Services Section */}
          <section>
            <div className="mb-8 border-b border-slate-200 pb-4">
              <h2 className="text-2xl font-bold text-slate-900">Specialized Staffing & Care</h2>
              <p className="mt-2 text-slate-600">Trusted personnel for patient care, child care, and office administration.</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {otherServices.map((service) => (
                <ServiceCard key={service.title} service={service} />
              ))}
            </div>
          </section>
        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-3 text-xs text-slate-600">
          <div>
            <h3 className="text-sm font-semibold text-slate-900">
              Sectors we serve
            </h3>
            <ul className="mt-2 space-y-1">
              <li>Corporate offices & IT parks</li>
              <li>Residential communities & gated layouts</li>
              <li>Hotels, malls & retail chains</li>
              <li>Manufacturing, logistics & warehouses</li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-900">
              Guard profiles
            </h3>
            <ul className="mt-2 space-y-1">
              <li>Ex-servicemen & defence background profiles</li>
              <li>Armed & unarmed security staff</li>
              <li>Event bouncers & crowd managers</li>
              <li>K9 handlers and specialised teams (on request)</li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-900">
              Compliance & licences
            </h3>
            <ul className="mt-2 space-y-1">
              <li>PSARA-compliant operations (state wise)</li>
              <li>ESI, PF and wage compliance for all guards</li>
              <li>Standardised uniforms & ID cards</li>
              <li>Detailed documentation for audits</li>
            </ul>
          </div>
        </div>
      </SectionShell>
    </main>
  );
}

function ServiceCard({ service }: { service: { title: string; copy: string; bullets: string[] } }) {
  const whatsappUrl = `https://wa.me/919059501501?text=${encodeURIComponent(
    `Hi, I am interested in ${service.title}`
  )}`;

  return (
    <article className="premium-card flex flex-col rounded-xl p-8 hover:-translate-y-1">
      <h3 className="mb-3 text-xl font-bold text-brand-950 font-display">{service.title}</h3>
      <p className="mb-6 text-sm leading-relaxed text-slate-600">
        {service.copy}
      </p>
      <ul className="mb-6 flex-grow space-y-2.5">
        {service.bullets.map((bullet) => (
          <li key={bullet} className="flex items-start gap-3 text-sm text-slate-500">
            <span className="mt-1 flex h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent-500" />
            <span className="leading-relaxed">{bullet}</span>
          </li>
        ))}
      </ul>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto flex w-full items-center justify-center gap-2 rounded-lg bg-brand-950 py-3 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-brand-800 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2"
      >
        <span>Book Service</span>
        <svg className="w-4 h-4 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </a>
    </article>
  );
}

const securityServices = [
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

const houseKeepingServices = [
  {
    title: 'Deep House Cleaning (2BHK / 3BHK)',
    copy: 'Comprehensive deep cleaning for apartments and villas, ensuring every corner is spotless and sanitized.',
    bullets: [
      'Floor scrubbing and polishing',
      'Kitchen deep cleaning (degreasing)',
      'Balcony and window cleaning'
    ]
  },
  {
    title: 'Bathroom Cleaning',
    copy: 'Specialized cleaning services for restrooms to maintain hygiene and sanitation standards.',
    bullets: [
      'Tile scrubbing and descaling',
      'Sanitization of fixtures',
      'Mirror and glass polishing'
    ]
  },
  {
    title: 'Festival Cleaning',
    copy: 'Pre-festival makeovers for your home to welcome guests with a fresh and festive ambiance.',
    bullets: [
      'Full home dusting and cleaning',
      'Upholstery vacuuming',
      'Cobweb removal and fan cleaning'
    ]
  },
  {
    title: 'Party / Function Cleaning',
    copy: 'Pre-party setup and post-party cleanup services so you can enjoy your event without the mess.',
    bullets: [
      'Venue arrangement and setup',
      'Trash disposal and segregation',
      'Post-event stain removal and returning furniture'
    ]
  }
];

const otherServices = [
  {
    title: 'Ayama / Nanny',
    copy: 'Experienced and caring nannies to look after your children with love and attention while you are away.',
    bullets: [
      'Infant and toddler care',
      'Engaging activities and playtime',
      'Basic hygiene and feeding assistance'
    ]
  },
  {
    title: 'Patient Care & Nursing',
    copy: 'Compassionate care for the elderly or recovering patients in the comfort of their own homes.',
    bullets: [
      'Medication management',
      'Mobility assistance',
      'Vitals monitoring and reporting'
    ]
  },
  {
    title: 'Baby Care',
    copy: 'Specialized care for newborns, providing support to new mothers and ensuring the baby\'s well-being.',
    bullets: [
      'Newborn hygiene and handling',
      'Sleep schedule management',
      'Support with feeding'
    ]
  },
  {
    title: 'Cooking Staff',
    copy: 'Skilled cooks for homes and offices to prepare delicious and hygienic meals according to your preferences.',
    bullets: [
      'Daily meal preparation',
      'Menu planning (North/South Indian, etc.)',
      'Kitchen hygiene maintenance'
    ]
  },
  {
    title: 'Receptionist / Front Desk',
    copy: 'Professional front desk staff to manage calls, visitors, and administrative tasks for your business.',
    bullets: [
      'Visitor management',
      'Call handling and directing',
      'Administrative support'
    ]
  }
];


