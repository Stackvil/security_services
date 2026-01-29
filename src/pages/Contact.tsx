import { useState } from 'react';
import { SectionShell } from '../components/Sections/SectionShell';

import { SEO } from '../components/SEO';

interface FormData {
  fullName: string;
  company: string;
  email: string;
  phone: string;
  facilityType: string;
  requirement: string;
}

export function Contact() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    facilityType: 'Corporate Office',
    requirement: '',
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { fullName, company, email, phone, facilityType, requirement } =
      formData;

    const message = `*New Service Enquiry form Website*\n\n*Name:* ${fullName}\n*Company:* ${company}\n*Email:* ${email}\n*Phone:* ${phone}\n*Facility Type:* ${facilityType}\n*Requirement:* ${requirement}`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/919059501501?text=${encodedMessage}`, '_blank');
  };

  return (
    <main className="pt-24">
      <SEO
        title="Contact Us - Security Agency Vijayawada"
        description="Get in touch with Hindusthan for security assessments and quotes. 24/7 Control Room: +91 90595 01501."
        keywords="contact security agency, security quote Vijayawada, control room number, security office address"
      />
      <SectionShell
        eyebrow="Contact"
        title="Let’s design the right security cover for you."
        subtitle="Share a few details and our security consultant will get back to you with a no-obligation site visit slot. For urgent requirements, you can also reach our 24/7 control room directly on phone."
      >
        <div className="grid gap-8 lg:grid-cols-[1.1fr,0.9fr]">
          <form
            onSubmit={handleSubmit}
            className="glass-panel space-y-4 rounded-3xl p-6 text-sm text-slate-800"
          >
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="mb-1 block text-xs text-slate-500">
                  Full Name
                </label>
                <input
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none ring-brand-500/40 placeholder:text-slate-400 focus:border-brand-400 focus:ring-2"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="mb-1 block text-xs text-slate-500">
                  Company / Community
                </label>
                <input
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
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
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none ring-brand-500/40 placeholder:text-slate-400 focus:border-brand-400 focus:ring-2"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="mb-1 block text-xs text-slate-400">
                  Phone
                </label>
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full rounded-2xl border border-slate-700 bg-slate-900/70 text-white px-3 py-2 text-sm outline-none ring-brand-500/40 placeholder:text-slate-500 focus:border-brand-400 focus:ring-2"
                  placeholder="+91-"
                />
              </div>
            </div>
            <div>
              <label className="mb-1 block text-xs text-slate-500">
                Type of Facility
              </label>
              <select
                name="facilityType"
                value={formData.facilityType}
                onChange={handleChange}
                className="w-full rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none ring-brand-500/40 focus:border-brand-400 focus:ring-2"
              >
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
                name="requirement"
                value={formData.requirement}
                onChange={handleChange}
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
                  info@hindusthansecurityjobs.com
                </span>
              </p>
              <p className="mt-3 text-xs text-slate-500">
                For emergencies, please call our control room directly instead
                of using the form.
              </p>
            </div>
            <div className="glass-panel rounded-3xl p-5 text-sm text-slate-600">
              <h3 className="text-sm font-semibold text-slate-900">
                Careers at Hindusthan
              </h3>
              <p className="mt-2">
                We regularly hire guards, supervisors and control room
                operators. If you are disciplined, courteous and willing to
                learn, we would love to meet you.
              </p>
              <p className="mt-2 text-xs text-slate-500">
                Share your CV on{' '}
                <span className="font-semibold text-slate-900">
                  info@hindusthansecurityjobs.com
                </span>{' '}
                or walk-in to our branch office between 10:00am and 5:00pm.
              </p>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16 overflow-hidden rounded-3xl shadow-xl border border-slate-200">
          <div className="bg-slate-50 p-4 border-b border-slate-200 flex items-center justify-between">
            <h3 className="font-bold text-slate-800 uppercase tracking-wider text-xs flex items-center gap-2">
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
              Visit Our Office
            </h3>
            <a
              href="https://www.google.com/maps/dir//hindustan+security+services,+second+floor,+Ramu+enclave,+Eluru+Rd,+opp.+srr+govt+college,+Maruthi+Nagar,+Machavaram,+Vijayawada,+Andhra+Pradesh+520004"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-primary-blue hover:underline"
            >
              Get Directions
            </a>
          </div>
          <div className="w-full h-[450px] bg-slate-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.213!2d80.6472984!3d16.5186481!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35e5170e69a2cd%3A0x3ce69ce2cbbad450!2sHindusthan%20Security%20Services!5e0!3m2!1sen!2sin!4v1716968800000!5m2!1sen!2sin"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Hindusthan Security Services Location"
            ></iframe>
          </div>
        </div>
      </SectionShell>
    </main>
  );
}


