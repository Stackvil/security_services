import { useState } from 'react';
import { SEO } from '../components/SEO';
import { ChevronDown, ChevronUp, Briefcase, MapPin, Clock } from 'lucide-react';

const jobOpenings = [
    {
        category: 'Security Operations',
        jobs: [
            {
                id: 'sec-1',
                title: 'Security Guard',
                type: 'Full-time',
                location: 'Vijayawada',
                desc: 'Vigilant and disciplined security personnel for corporate and residential sites. Must be physically fit and able to work in shifts.',
                requirements: ['10th Pass minimum', 'Height 5ft 7in+', 'Age 21-45 years', 'Clean background record']
            },
            {
                id: 'sec-2',
                title: 'Patrol Driver',
                type: 'Full-time',
                location: 'Vijayawada',
                desc: 'Experienced drivers with valid license for mobile patrol units. Responsible for night patrolling and quick response.',
                requirements: ['Valid Driving License (LMV/HMV)', 'Minimum 3 years driving experience', 'Knowledge of local routes']
            },
            {
                id: 'sec-3',
                title: 'Control Room Operator',
                type: 'Full-time',
                location: 'Vijayawada',
                desc: 'Monitoring CCTV feeds and coordinating with field teams. Computer literacy required.',
                requirements: ['Basic Computer Skills', 'Observation skills', 'Communication skills']
            }
        ]
    },
    {
        category: 'Housekeeping & Facility Management',
        jobs: [
            {
                id: 'hk-1',
                title: 'Housekeeping Supervisor',
                type: 'Full-time',
                location: 'Vijayawada',
                desc: 'Supervise cleaning staff and ensure hygiene standards are met at client sites.',
                requirements: ['Experience in facility management', 'Team leadership skills']
            },
            {
                id: 'hk-2',
                title: 'Deep Cleaning Specialist',
                type: 'Full-time',
                location: 'Vijayawada',
                desc: 'Specialized in deep cleaning machinery and techniques for residences and offices.',
                requirements: ['Experience with cleaning machinery', 'Attention to detail']
            }
        ]
    }
];

export function Careers() {
    return (
        <main className="bg-gray-50 min-h-screen pb-20">
            <SEO
                title="Careers at Hindustan | Security Jobs"
                description="Join our team of security professionals. We are hiring Security Guards, Supervisors, and Facility Managers in Vijayawada."
                keywords="jobs in vijayawada, security jobs, housekeeping jobs, careers"
            />

            {/* Page Header */}
            <section className="bg-primary-blue text-white py-16 text-center">
                <div className="container-custom">
                    <h1 className="text-4xl font-black mb-4 uppercase tracking-tight">Join Our Force</h1>
                    <p className="text-xl opacity-90 max-w-2xl mx-auto font-medium">
                        Hindustan Investigation and Security Services offers exciting challenges to individuals who have determination, vision and ambition.
                    </p>
                </div>
            </section>

            {/* Content */}
            <div className="container-custom mt-12">
                <div className="max-w-4xl mx-auto mb-16 text-center">
                    <h2 className="text-3xl font-black text-slate-900 mb-6">We are inviting applications for office/field job openings.</h2>
                    <p className="text-slate-600 text-lg leading-relaxed">
                        If you are a professional who values discipline and excellence, join us by sending your updated resume. We provide a platform for growth and purpose-driven employment.
                    </p>
                </div>
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Sidebar / Intro */}
                    <div className="lg:col-span-1">
                        <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-primary-green sticky top-24">
                            <h3 className="text-xl font-bold text-primary-blue mb-4">Why Work With Us?</h3>
                            <ul className="space-y-4 text-gray-600">
                                <li className="flex gap-3">
                                    <div className="bg-green-100 p-2 rounded-full text-primary-green"><Briefcase size={18} /></div>
                                    <span>Stable Employment & PF/ESI Benefits</span>
                                </li>
                                <li className="flex gap-3">
                                    <div className="bg-green-100 p-2 rounded-full text-primary-green"><Clock size={18} /></div>
                                    <span>On-time Salary Payments</span>
                                </li>
                                <li className="flex gap-3">
                                    <div className="bg-green-100 p-2 rounded-full text-primary-green"><MapPin size={18} /></div>
                                    <span>Multiple Locations in Vijayawada</span>
                                </li>
                            </ul>
                            <div className="mt-8 pt-6 border-t">
                                <p className="text-sm text-gray-500 mb-4">Send your resume directly to:</p>
                                <a href="mailto:info@hindusthansecurityjobs.com" className="block w-full bg-accent-yellow text-dark-text text-center font-bold py-3 rounded uppercase hover:bg-opacity-90 transition inline-block">
                                    Email Resume
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Job Listings - Accordion */}
                    <div className="lg:col-span-2 space-y-8">
                        {jobOpenings.map((category) => (
                            <div key={category.category}>
                                <h2 className="text-2xl font-bold text-dark-text mb-6 flex items-center">
                                    <span className="w-2 h-8 bg-primary-green mr-3 rounded-full"></span>
                                    {category.category}
                                </h2>
                                <div className="space-y-4">
                                    {category.jobs.map((job) => (
                                        <JobAccordion key={job.id} job={job} />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}

function JobAccordion({ job }: { job: any }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-md">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
            >
                <div>
                    <h3 className="text-lg font-bold text-primary-blue">{job.title}</h3>
                    <div className="flex gap-4 mt-2 text-sm text-gray-500">
                        <span className="flex items-center gap-1"><Briefcase size={14} /> {job.type}</span>
                        <span className="flex items-center gap-1"><MapPin size={14} /> {job.location}</span>
                    </div>
                </div>
                <div className={`p-2 rounded-full bg-gray-50 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                    <ChevronDown size={20} className="text-gray-600" />
                </div>
            </button>

            {isOpen && (
                <div className="px-6 pb-6 border-t border-gray-100 bg-gray-50/50">
                    <div className="pt-4 space-y-4">
                        <p className="text-gray-700">{job.desc}</p>

                        <div>
                            <h4 className="font-bold text-sm text-dark-text mb-2 uppercase tracking-wide">Requirements:</h4>
                            <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                                {job.requirements.map((req: string, i: number) => (
                                    <li key={i}>{req}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="pt-4">
                            <a
                                href={`mailto:careers@securityservices.com?subject=Application for ${job.title}`}
                                className="inline-block bg-primary-green text-white px-6 py-2 rounded text-sm font-bold uppercase hover:bg-opacity-90 transition-colors"
                            >
                                Apply Now
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
