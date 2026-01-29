import { SEO } from '../components/SEO';
import { SectionShell } from '../components/Sections/SectionShell';

const galleryImages = [
    { src: `${import.meta.env.BASE_URL ?? '/'}images/gallery/Security Briefing.webp`, alt: 'Security Briefing', category: 'Training' },
    { src: `${import.meta.env.BASE_URL ?? '/'}images/gallery/CCTV Monitoring.webp`, alt: 'CCTV Monitoring', category: 'Technology' },
    { src: `${import.meta.env.BASE_URL ?? '/'}images/gallery/Corporate Event cleaning.jpg`, alt: 'Corporate Event', category: 'Events' },
    { src: `${import.meta.env.BASE_URL ?? '/'}images/gallery/Housekeeping Staff.webp`, alt: 'Housekeeping Staff', category: 'Housekeeping' },
    { src: `${import.meta.env.BASE_URL ?? '/'}images/gallery/Residential Security.jpg`, alt: 'Residential Security', category: 'Security' },
    { src: `${import.meta.env.BASE_URL ?? '/'}images/gallery/Deep Cleaning.jpg`, alt: 'Deep Cleaning', category: 'Cleaning' },
];

const trainingImages = [
    { src: `${import.meta.env.BASE_URL ?? '/'}images/training/1.jpeg`, alt: 'Training Session 1' },
    { src: `${import.meta.env.BASE_URL ?? '/'}images/training/2.jpeg`, alt: 'Training Session 2' },
    { src: `${import.meta.env.BASE_URL ?? '/'}images/training/3.jpeg`, alt: 'Training Session 3' },
    { src: `${import.meta.env.BASE_URL ?? '/'}images/training/4.jpeg`, alt: 'Training Session 4' },
    { src: `${import.meta.env.BASE_URL ?? '/'}images/training/5.jpeg`, alt: 'Training Session 5' },
    { src: `${import.meta.env.BASE_URL ?? '/'}images/training/6.jpeg`, alt: 'Training Session 6' },
    { src: `${import.meta.env.BASE_URL ?? '/'}images/training/7.jpeg`, alt: 'Training Session 7' },
    { src: `${import.meta.env.BASE_URL ?? '/'}images/training/8.jpeg`, alt: 'Training Session 8' },
    { src: `${import.meta.env.BASE_URL ?? '/'}images/training/9.jpeg`, alt: 'Training Session 9' },
    { src: `${import.meta.env.BASE_URL ?? '/'}images/training/bbe20275-f113-4bd6-92c0-5d9e4013d5c8.jpg`, alt: 'Training Session 10' },
];

export function Gallery() {
    return (
        <main className="min-h-screen bg-white">
            <SEO
                title="Training & Operations | Hindusthan Security Services"
                description="View our training sessions and site deployments. Dedicated teams following strict protocols across Vijayawada."
                keywords="security training, cleaning training sessions, facility management training, vijayawada training"
            />

            {/* Hero Section */}
            <section className="w-full h-auto overflow-hidden">
                <img
                    src={`${import.meta.env.BASE_URL ?? '/'}images/pko.png`}
                    alt="Training & Operations"
                    className="w-full h-auto object-contain block"
                />
            </section>

            <div className="py-24">
                <SectionShell
                    eyebrow="Training & Operations"
                    title="Military-Grade Preparation."
                    subtitle="Our personnel undergo rigorous physical and theoretical training to ensure they are prepared for every situation."
                >
                    <div className="max-w-6xl mx-auto space-y-20">
                        {/* Training Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                            {trainingImages.map((img, idx) => (
                                <div key={idx} className="group relative overflow-hidden rounded-3xl shadow-sm aspect-square bg-slate-100 border border-slate-100">
                                    <img
                                        src={img.src}
                                        alt={img.alt}
                                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-primary-blue/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>
                            ))}
                        </div>

                        {/* Video Section */}
                        <div className="max-w-5xl mx-auto">
                            <div className="relative group rounded-[2.5rem] overflow-hidden shadow-2xl border-[12px] border-white bg-slate-50 aspect-video">
                                <video
                                    className="w-full h-full object-cover"
                                    controls
                                    poster={`${import.meta.env.BASE_URL ?? '/'}images/training/1.jpeg`}
                                >
                                    <source src={`${import.meta.env.BASE_URL ?? '/'}images/../videos/1.mp4`} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                                <div className="absolute top-8 left-8 flex items-center gap-3 bg-black/60 backdrop-blur-xl px-5 py-2.5 rounded-full border border-white/20">
                                    <div className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse"></div>
                                    <span className="text-[10px] font-black text-white uppercase tracking-[0.25em]">Session Live</span>
                                </div>
                            </div>
                            <div className="flex justify-center mt-8">
                                <p className="text-center text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 bg-slate-50 px-6 py-2 rounded-full border border-slate-100">
                                    * Protocol Drill In-Progress
                                </p>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-10">
                            <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 group hover:bg-white transition-all shadow-sm hover:shadow-xl">
                                <h3 className="text-2xl font-black text-slate-900 mb-6 uppercase tracking-tight">Theoretical Training</h3>
                                <ul className="space-y-4 text-slate-600">
                                    <li className="flex items-start gap-4">
                                        <div className="w-2 h-2 rounded-full bg-primary-green mt-2.5 flex-shrink-0"></div>
                                        <span className="font-medium text-sm">General Safety & Fire Prevention Protocols</span>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <div className="w-2 h-2 rounded-full bg-primary-green mt-2.5 flex-shrink-0"></div>
                                        <span className="font-medium text-sm">Crisis Management & Standard Operating Procedures</span>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <div className="w-2 h-2 rounded-full bg-primary-green mt-2.5 flex-shrink-0"></div>
                                        <span className="font-medium text-sm">Legal Framework & Statutory Compliance Awareness</span>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <div className="w-2 h-2 rounded-full bg-primary-green mt-2.5 flex-shrink-0"></div>
                                        <span className="font-medium text-sm">Advanced Threat Detection & Mitigation</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 group hover:bg-white transition-all shadow-sm hover:shadow-xl">
                                <h3 className="text-2xl font-black text-slate-900 mb-6 uppercase tracking-tight">On-Site Drills</h3>
                                <ul className="space-y-4 text-slate-600">
                                    <li className="flex items-start gap-4">
                                        <div className="w-2 h-2 rounded-full bg-primary-green mt-2.5 flex-shrink-0"></div>
                                        <span className="font-medium text-sm">Perimeter Patrol & Access Control</span>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <div className="w-2 h-2 rounded-full bg-primary-green mt-2.5 flex-shrink-0"></div>
                                        <span className="font-medium text-sm">Emergency Response & Evacuation Procedures</span>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <div className="w-2 h-2 rounded-full bg-primary-green mt-2.5 flex-shrink-0"></div>
                                        <span className="font-medium text-sm">Physical Intervention & Self-Defense Techniques</span>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <div className="w-2 h-2 rounded-full bg-primary-green mt-2.5 flex-shrink-0"></div>
                                        <span className="font-medium text-sm">Advanced Threat Detection & Mitigation</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </SectionShell>

                {/* Detailed Training Ecosystem Section */}
                <SectionShell
                    eyebrow="Training Ecosystem"
                    title="Training that commands respect."
                    subtitle="Our security personnel go through rigorous trainings (both physical and theoretical) by highly qualified ex-servicemen which prepares them to handle any kind of situations."
                >
                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        <div className="space-y-10">
                            <div className="space-y-4">
                                <h3 className="text-3xl font-black text-primary-blue uppercase tracking-tight">The Three-Phase Program</h3>
                                <p className="text-slate-600 leading-relaxed text-lg">
                                    Our comprehensive training curriculum is subdivided into three distinct phases to ensure 360-degree readiness for every deployment.
                                </p>
                            </div>

                            <div className="space-y-8">
                                {[
                                    { phase: 'Phase 01', title: 'General Safety', desc: 'Induction into security protocols, perimeter protection, and visitor management SOPs.' },
                                    { phase: 'Phase 02', title: 'Fire Prevention', desc: 'Expertise in first-aid, fire-fighting equipment, evacuation drills, and emergency response.' },
                                    { phase: 'Phase 03', title: 'Customised Site Work', desc: 'Deep-dive into site-specific risks, turnout standards, and client-reporting digital tools.' }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex gap-8 items-start group">
                                        <div className="text-primary-green font-black text-2xl opacity-20 group-hover:opacity-100 transition-opacity pt-1">{item.phase}</div>
                                        <div className="space-y-2">
                                            <h4 className="text-xl font-black text-slate-900 uppercase tracking-wide">{item.title}</h4>
                                            <p className="text-slate-500 leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-10 bg-slate-50 p-12 rounded-[4rem] border border-slate-100 shadow-sm">
                            <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight">Methodology</h3>
                            <div className="space-y-8">
                                <div className="p-8 bg-white rounded-3xl shadow-sm border border-slate-50 hover:shadow-md transition-shadow">
                                    <h4 className="text-lg font-black text-primary-blue mb-3 uppercase tracking-wide">Physical Drills</h4>
                                    <p className="text-slate-500 leading-relaxed">Daily endurance training, parade practice, and tactical positioning under the direct supervision of ex-servicemen.</p>
                                </div>
                                <div className="p-8 bg-white rounded-3xl shadow-sm border border-slate-50 hover:shadow-md transition-shadow">
                                    <h4 className="text-lg font-black text-primary-blue mb-3 uppercase tracking-wide">Theoretical Capsule</h4>
                                    <p className="text-slate-500 leading-relaxed">Legal awareness, CPTED audit logic, report writing, and soft-skill development for premium professional turnout.</p>
                                </div>
                            </div>

                            <div className="pt-8 border-t border-slate-200">
                                <p className="text-sm font-bold text-primary-blue uppercase tracking-widest opacity-60">Succession of Excellence</p>
                                <p className="mt-2 text-slate-600 italic">"We regularly update our training modules to ensure our personnel are equipped with the latest industry standards and technologies."</p>
                            </div>
                        </div>
                    </div>
                </SectionShell>

                {/* Final Call to Action Section */}
                <section className="container-custom pb-20">
                    <div className="bg-primary-blue text-white p-16 rounded-[4rem] text-center shadow-2xl relative overflow-hidden group">
                        <div className="relative z-10">
                            <h2 className="text-4xl font-black mb-6 tracking-tight">Experience Unrivalled Protection</h2>
                            <p className="text-xl opacity-80 mb-10 max-w-2xl mx-auto font-medium">
                                Join the hundreds of businesses that trust our ex-serviceman managed teams for their security and safety needs.
                            </p>
                            <div className="flex flex-wrap justify-center gap-6">
                                <a href="/contact" className="inline-block bg-primary-green text-white px-12 py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-xs hover:bg-white hover:text-primary-blue transition-all shadow-xl hover:-translate-y-1">
                                    Inquire for Deployment
                                </a>
                                <a href="/careers" className="inline-block bg-white/10 text-white px-12 py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-xs hover:bg-white hover:text-primary-blue transition-all backdrop-blur-sm border border-white/20">
                                    Join our Squad
                                </a>
                            </div>
                        </div>
                        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-48 translate-x-48 group-hover:scale-125 transition-transform duration-700"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-green/20 rounded-full translate-y-32 -translate-x-32 group-hover:scale-125 transition-transform duration-700"></div>
                    </div>
                </section>
            </div>
        </main>
    );
}
