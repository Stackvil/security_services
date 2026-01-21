import { SectionShell } from '../components/Sections/SectionShell';

import { SEO } from '../components/SEO';

export function Contact() {
  return (
    <main className="pt-24">
      <SEO
        title="Contact Us - Security Agency Vijayawada"
        description="Get in touch with Hindusthan Supervision for security assessments and quotes. 24/7 Control Room: +91 90595 01501."
        keywords="contact security agency, security quote Vijayawada, control room number, security office address"
      />
      <SectionShell
        eyebrow="Contact"
        title="Let’s design the right security cover for you."
        subtitle="Share a few details and our security consultant will get back to you with a no-obligation site visit slot. For urgent requirements, you can also reach our 24/7 control room directly on phone."
      >
        <div className="grid gap-8 lg:grid-cols-[1.1fr,0.9fr]">
          <form className="glass-panel space-y-4 rounded-3xl p-6 text-sm text-slate-800">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="mb-1 block text-xs text-slate-500">
                  Full Name
                </label>
                <input
                  className="w-full rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none ring-brand-500/40 placeholder:text-slate-400 focus:border-brand-400 focus:ring-2"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="mb-1 block text-xs text-slate-500">
                  Company / Community
                </label>
                <input
                  className="w-full rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none ring-brand-500/40 placeholder:text-slate-400 focus:border-brand-400 focus:ring-2"
                  placeholder="Organisation name"
                />
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="mb-1 block text-xs text-slate-500">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none ring-brand-500/40 placeholder:text-slate-400 focus:border-brand-400 focus:ring-2"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="mb-1 block text-xs text-slate-400">
                  Phone
                </label>
                <input
                  className="w-full rounded-2xl border border-slate-700 bg-slate-900/70 px-3 py-2 text-sm outline-none ring-brand-500/40 placeholder:text-slate-500 focus:border-brand-400 focus:ring-2"
                  placeholder="+91-"
                />
              </div>
            </div>
            <div>
              <label className="mb-1 block text-xs text-slate-500">
                Type of Facility
              </label>
              <select className="w-full rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none ring-brand-500/40 focus:border-brand-400 focus:ring-2">
                <option>Corporate Office</option>
                <option>IT / Tech Park</option>
                <option>Manufacturing / Industrial</option>
                <option>Warehouse / Logistics</option>
                <option>Residential Community</option>
                <option>Event / Temporary Cover</option>
              </select>
            </div>
            <div>
              <label className="mb-1 block text-xs text-slate-500">
                Brief About Requirement
              </label>
              <textarea
                rows={4}
                className="w-full resize-none rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none ring-brand-500/40 placeholder:text-slate-400 focus:border-brand-400 focus:ring-2"
                placeholder="Number of gates, towers / blocks, sensitive areas, expected go-live timeline, etc."
              />
            </div>
            <button
              type="submit"
              className="mt-2 w-full rounded-full bg-primary-blue py-3 text-xs font-semibold uppercase tracking-[0.18em] text-white shadow-lg shadow-blue-500/40 transition hover:bg-blue-700"
            >
              Submit Enquiry
            </button>
            <p className="text-[11px] text-slate-500">
              This form is for enquiry only. Our team will call you to validate
              details and schedule a detailed site survey.
            </p>
          </form>
          <div className="space-y-4 text-sm text-slate-600">
            <div className="glass-panel rounded-3xl p-5">
              <h3 className="text-sm font-semibold text-slate-900">
                24/7 Control Room
              </h3>
              <p className="mt-2 text-slate-600">
                Phone:{' '}
                <span className="font-semibold text-slate-900">
                  +91 90595 01501
                </span>
              </p>
              <p className="text-slate-600">
                Email:{' '}
                <span className="font-semibold text-slate-900">
                  control@crksecurity.in
                </span>
              </p>
              <p className="mt-3 text-xs text-slate-500">
                For emergencies, please call our control room directly instead
                of using the form.
              </p>
            </div>
            <div className="glass-panel rounded-3xl p-5 text-sm text-slate-600">
              <h3 className="text-sm font-semibold text-slate-900">
                Careers at Hindusthan Supervision
              </h3>
              <p className="mt-2">
                We regularly hire guards, supervisors and control room
                operators. If you are disciplined, courteous and willing to
                learn, we would love to meet you.
              </p>
              <p className="mt-2 text-xs text-slate-500">
                Share your CV on{' '}
                <span className="font-semibold text-slate-900">
                  careers@crksecurity.in
                </span>{' '}
                or walk-in to our branch office between 10:00am and 5:00pm.
              </p>
            </div>
          </div>
        </div>
      </SectionShell>
    </main>
  );
}


