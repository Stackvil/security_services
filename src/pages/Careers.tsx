import { SectionShell } from '../components/Sections/SectionShell';

const jobOpenings = [
    {
        category: 'Security Operations',
        jobs: [
            {
                title: 'Security Guard',
                type: 'Full-time',
                location: 'Vijayawada',
                desc: 'Vigilant and disciplined security personnel for corporate and residential sites.'
            },
            {
                title: 'Patrol Driver',
                type: 'Full-time (Rotational Shifts)',
                location: 'Vijayawada',
                desc: 'Experienced drivers with valid license for mobile patrol units.'
            },
            {
                title: 'Control Room Operator',
                type: 'Full-time',
                location: 'Vijayawada',
                desc: 'Monitoring CCTV feeds and coordinating with field teams. Computer literacy required.'
            },
            {
                title: 'Bouncer / Event Security',
                type: 'Part-time / Contract',
                location: 'Vijayawada',
                desc: 'Crowd management and VIP protection for special events.'
            }
        ]
    },
    {
        category: 'Housekeeping & Facility Management',
        jobs: [
            {
                title: 'Housekeeping Staff',
                type: 'Full-time',
                location: 'Vijayawada',
                desc: 'Cleaning and maintenance staff for offices and residential complexes.'
            },
            {
                title: 'Deep Cleaning Specialist',
                type: 'Full-time',
                location: 'Vijayawada',
                desc: 'Specialized in deep cleaning machinery and techniques for residences.'
            },
            {
                title: 'Event Support Staff',
                type: 'Contract',
                location: 'Vijayawada',
                desc: 'Support staff for setting up and managing event venues.'
            }
        ]
    },
    {
        category: 'Specialized Care & Staffing',
        jobs: [
            {
                title: 'Nanny / Ayama',
                type: 'Full-time / Live-in',
                location: 'Vijayawada',
                desc: 'Experienced caregivers for infants and toddlers with verified references.'
            },
            {
                title: 'Patient Care Taker',
                type: 'Full-time',
                location: 'Vijayawada',
                desc: 'Compassionate staff for elderly care and patient recovery assistance.'
            },
            {
                title: 'Cook / Chef',
                type: 'Full-time',
                location: 'Vijayawada',
                desc: 'Skilled cooks proficient in various cuisines for private households.'
            },
            {
                title: 'Receptionist / Front Desk',
                type: 'Full-time',
                location: 'Vijayawada',
                desc: 'Professional front office executives with good communication skills.'
            }
        ]
    }
];

import { SEO } from '../components/SEO';

export function Careers() {
    return (
        <main className="pt-24">
            <SEO
                title="Security Jobs in Vijayawada - Hiring Now"
                description="Join Hindusthan Supervision. Openings for Security Guards, Housekeeping Staff, Drivers, and Gunmen in Vijayawada. Apply today!"
                keywords="security guard jobs Vijayawada, housekeeping jobs Vijayawada, driver jobs, gunman jobs, security careers"
            />
            <SectionShell
                eyebrow="Join Our Team"
                title="Build a career with purpose."
                subtitle="We are always looking for dedicated individuals to join our growing family. Whether you are an experienced security professional or starting your career in facility management, we have a place for you."
            >
                <div className="space-y-16">
                    {jobOpenings.map((section) => (
                        <section key={section.category}>
                            <h3 className="mb-6 text-xl font-bold text-slate-900 border-l-4 border-brand-500 pl-4">
                                {section.category}
                            </h3>
                            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
                                {section.jobs.map((job) => (
                                    <JobCard key={job.title} job={job} />
                                ))}
                            </div>
                        </section>
                    ))}
                </div>

                <div className="mt-20 rounded-3xl bg-slate-900 p-8 text-center text-white md:p-12">
                    <h3 className="text-2xl font-bold">Don't see a matching role?</h3>
                    <p className="mx-auto mt-4 max-w-2xl text-slate-300">
                        We are constantly expanding. Send us your resume and we will contact you when a suitable position opens up.
                    </p>
                    <a
                        href="mailto:careers@crksecurity.in"
                        className="mt-8 inline-block rounded-full bg-white px-8 py-3 text-sm font-bold uppercase tracking-wider text-slate-900 transition hover:bg-brand-50"
                    >
                        Email Resume
                    </a>
                </div>
            </SectionShell>
        </main>
    );
}

function JobCard({ job }: { job: { title: string; type: string; location: string; desc: string } }) {
    const emailUrl = `mailto:careers@crksecurity.in?subject=${encodeURIComponent(
        `Application for ${job.title} - ${job.location}`
    )}&body=${encodeURIComponent(
        `Hi,\n\nI am interested in applying for the position of ${job.title}. Please find my resume attached.\n\nRegards,`
    )}`;

    return (
        <article className="premium-card flex flex-col rounded-xl p-8 hover:-translate-y-1">
            <div className="mb-5 flex items-start justify-between">
                <div>
                    <h4 className="text-xl font-bold text-brand-950 font-display">{job.title}</h4>
                    <p className="text-xs font-bold text-accent-600 uppercase tracking-widest mt-1.5">{job.type}</p>
                </div>
                <span className="rounded-md bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600 border border-slate-200">
                    {job.location}
                </span>
            </div>
            <p className="mb-8 text-sm leading-relaxed text-slate-600 flex-grow">{job.desc}</p>

            <a
                href={emailUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto flex w-full items-center justify-center gap-2 rounded-lg border-2 border-brand-950 bg-transparent py-2.5 text-xs font-bold uppercase tracking-wider text-brand-950 transition hover:bg-brand-950 hover:text-white focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2"
            >
                <span>Apply Now</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
            </a>
        </article>
    );
}
