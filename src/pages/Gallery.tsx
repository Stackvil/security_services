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

const policeTrainingImages = [
    { src: `${import.meta.env.BASE_URL ?? '/'}images/training/police/2.jpeg`, alt: 'Police Training Session 1' },
    { src: `${import.meta.env.BASE_URL ?? '/'}images/save.jpeg`, alt: 'Police Training Session 2' },
    { src: `${import.meta.env.BASE_URL ?? '/'}images/tradbasub.jpeg`, alt: 'Police Training Session 3' },
    { src: `${import.meta.env.BASE_URL ?? '/'}images/training/police/6.jpeg`, alt: 'Pensioner\'s Identity Card' },
];

const leaderPhoto = `${import.meta.env.BASE_URL ?? '/'}images/training/police/idub.png`;

export function Gallery() {
    return (
        <main className="min-h-screen bg-white">
            <SEO
                title="Training & Operations | Hindustan Security Services"
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

            {/* Lead Trainer Section */}
            <section className="py-20 bg-slate-50">
                <div className="container-custom">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-10 md:gap-12 items-center mb-16 md:mb-20">
                            {/* Trainer Photo */}
                            <div className="relative group max-w-[280px] sm:max-w-sm mx-auto lg:mx-0">
                                <div className="absolute -inset-4 bg-primary-green/20 rounded-[3rem] blur-2xl group-hover:bg-primary-green/30 transition-all duration-700"></div>
                                <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white aspect-square">
                                    <img
                                        src={leaderPhoto}
                                        alt="Lead Trainer"
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                                        <h3 className="text-2xl font-black text-white uppercase tracking-tight">ASI Ramanjaneya (Retd.)</h3>
                                        <p className="text-primary-green font-bold uppercase tracking-widest text-xs mt-1">Lead Trainer / Ex-CRPF Officer</p>
                                    </div>
                                </div>
                            </div>

                            {/* Introduction */}
                            <div className="space-y-8">
                                <div className="space-y-4">
                                    <div className="inline-block px-4 py-1.5 bg-primary-green/10 rounded-full">
                                        <span className="text-[10px] font-black text-primary-green uppercase tracking-[0.25em]">Expert Instruction</span>
                                    </div>
                                    <h2 className="text-4xl lg:text-5xl font-black text-primary-blue uppercase tracking-tight leading-none">
                                        Training by <br /> <span className="text-primary-green">ASI Ramanjaneya.</span>
                                    </h2>
                                    <p className="text-slate-600 text-lg leading-relaxed">
                                        Our training programs are spearheaded by **ASI Ramanjaneya (Retd.)**, a highly decorated veteran of the **Central Reserve Police Force (CRPF)**. With nearly 30 years of distinguished service (1992–2021) in tactical response and General Duty operations, he brings military-grade discipline and unmatched field expertise to our security force.
                                    </p>
                                </div>

                                <div className="grid grid-cols-2 gap-6">
                                    <div className="p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
                                        <div className="text-primary-green font-black text-2xl mb-1">29 Years</div>
                                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">CRPF Service</div>
                                    </div>
                                    <div className="p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
                                        <div className="text-primary-green font-black text-2xl mb-1">140 BN</div>
                                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">Military Unit</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Certificate Reference */}
                        <div className="max-w-4xl mx-auto bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm mb-20 text-center">
                            <div className="max-w-2xl mx-auto">
                                <h3 className="text-2xl font-black text-primary-blue uppercase tracking-tight mb-4">A Legacy of Service</h3>
                                <p className="text-slate-600 leading-relaxed mb-6">
                                    Enlisted in 1992, ASI Ramanjaneya served with distinction across various challenging environments in India. His voluntary retirement in 2021 marked the end of a long career defined by loyalty, duty, and professional excellence.
                                </p>
                                <ul className="flex flex-wrap justify-center gap-x-8 gap-y-3">
                                    <li className="flex items-center gap-3 text-sm font-bold text-slate-700">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary-green"></div>
                                        Joined CRPF: 06-12-1992
                                    </li>
                                    <li className="flex items-center gap-3 text-sm font-bold text-slate-700">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary-green"></div>
                                        Rank: Assistant Sub-Inspector (ASI/GD)
                                    </li>
                                    <li className="flex items-center gap-3 text-sm font-bold text-slate-700">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary-green"></div>
                                        Honorably Discharged: 31-10-2021
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Remaining Police Training Images */}
                        <div className="space-y-8">
                            <div className="flex items-center gap-4">
                                <div className="h-px flex-grow bg-slate-200"></div>
                                <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Training Drills & Operations</h4>
                                <div className="h-px flex-grow bg-slate-200"></div>
                            </div>
                            <div className="flex flex-wrap justify-center gap-8 px-4">
                                {policeTrainingImages.map((img, idx) => (
                                    <div key={idx} className="group relative overflow-hidden rounded-[2rem] shadow-xl aspect-[4/3] bg-white border border-slate-100 w-full sm:w-[320px] lg:w-[400px]">
                                        <img
                                            src={img.src}
                                            alt={img.alt}
                                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-primary-blue/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
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
                            <div className="relative group rounded-3xl md:rounded-[2.5rem] overflow-hidden shadow-2xl border-4 md:border-[12px] border-white bg-slate-50 aspect-video">
                                <video
                                    className="w-full h-full object-cover"
                                    controls
                                    poster={`${import.meta.env.BASE_URL ?? '/'}images/training/1.jpeg`}
                                >
                                    <source src={`${import.meta.env.BASE_URL ?? '/'}images/../videos/1.mp4`} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                                <div className="absolute top-4 left-4 md:top-8 md:left-8 flex items-center gap-2 md:gap-3 bg-black/60 backdrop-blur-xl px-3 md:px-5 py-1.5 md:py-2.5 rounded-full border border-white/20">
                                    <div className="w-2 md:w-2.5 h-2 md:h-2.5 rounded-full bg-red-500 animate-pulse"></div>
                                    <span className="text-[8px] md:text-[10px] font-black text-white uppercase tracking-[0.25em]">Session Live</span>
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
                                    <p className="text-slate-500 leading-relaxed">Daily endurance training, parade practice, and tactical positioning under the direct guidance of ex-servicemen.</p>
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

                {/* All-Encompassing Security Expertise Section */}
                <section className="py-24 bg-slate-50">
                    <div className="container-custom">
                        <div className="max-w-6xl mx-auto">
                            <div className="grid lg:grid-cols-2 gap-16 items-center">
                                <div className="order-2 lg:order-1 space-y-8">
                                    <div className="space-y-4">
                                        <div className="inline-block px-4 py-1.5 bg-primary-blue/10 rounded-full">
                                            <span className="text-[10px] font-black text-primary-blue uppercase tracking-[0.25em]">Holistic Protection</span>
                                        </div>
                                        <h2 className="text-4xl md:text-5xl font-black text-primary-blue uppercase tracking-tight leading-none">
                                            Complete Security <br /> <span className="text-primary-green">Mastery.</span>
                                        </h2>
                                        <p className="text-xl text-slate-600 leading-relaxed font-medium">
                                            Training is only as good as the mission it serves. At Hindustan Security, we provide **all types of security services**, ensuring our personnel are cross-trained for diverse environments.
                                        </p>
                                    </div>

                                    <div className="space-y-6">
                                        <div className="flex gap-4 p-6 bg-white rounded-3xl border border-slate-100 shadow-sm">
                                            <div className="w-12 h-12 rounded-2xl bg-primary-green/10 flex items-center justify-center flex-shrink-0">
                                                <div className="w-3 h-3 rounded-full bg-primary-green"></div>
                                            </div>
                                            <div>
                                                <h4 className="text-lg font-black text-slate-900 uppercase tracking-tight">Technical Surveillance</h4>
                                                <p className="text-sm text-slate-500">Mastery over high-end CCTV systems, motion sensors, and digital access control protocols.</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-4 p-6 bg-white rounded-3xl border border-slate-100 shadow-sm">
                                            <div className="w-12 h-12 rounded-2xl bg-primary-blue/10 flex items-center justify-center flex-shrink-0">
                                                <div className="w-3 h-3 rounded-full bg-primary-blue"></div>
                                            </div>
                                            <div>
                                                <h4 className="text-lg font-black text-slate-900 uppercase tracking-tight">Tactical Guarding</h4>
                                                <p className="text-sm text-slate-500">From bank security to residential protection, our guards follow military-grade SOPs.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="order-1 lg:order-2 relative group">
                                    <div className="absolute -inset-4 bg-primary-green/20 rounded-[3rem] blur-2xl group-hover:bg-primary-green/30 transition-all duration-700"></div>
                                    <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white aspect-[4/5]">
                                        <img
                                            src={`${import.meta.env.BASE_URL ?? '/'}images/training/security_services_montage.png`}
                                            alt="Comprehensive Security Services Montage"
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-10">
                                            <span className="text-white font-black uppercase tracking-[0.2em] text-xs">All Types of Security Services</span>
                                            <p className="text-white/80 text-sm mt-2 font-medium">Integrated Protection for Every Sector</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Final Call to Action Section */}
                <section className="container-custom pb-16 md:pb-20">
                    <div className="bg-primary-blue text-white p-8 sm:p-12 md:p-16 rounded-[2rem] sm:rounded-[4rem] text-center shadow-2xl relative overflow-hidden group">
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
