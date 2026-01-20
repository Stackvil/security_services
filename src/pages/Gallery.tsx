import { SEO } from '../components/SEO';
import { SectionShell } from '../components/Sections/SectionShell';

const galleryImages = [
    { src: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800', alt: 'Security Briefing', category: 'Security' },
    { src: 'https://images.unsplash.com/photo-1581578731117-104f2a417954?auto=format&fit=crop&q=80&w=800', alt: 'CCTV Monitoring', category: 'Surveillance' },
    { src: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800', alt: 'Corporate Event', category: 'Events' },
    { src: 'https://images.unsplash.com/photo-1584620862241-164eac79502e?auto=format&fit=crop&q=80&w=800', alt: 'Housekeeping Staff', category: 'Housekeeping' },
    { src: 'https://images.unsplash.com/photo-1527513232057-9db6691a83cc?auto=format&fit=crop&q=80&w=800', alt: 'Residential Security', category: 'Security' },
    { src: 'https://images.unsplash.com/photo-1613665813446-82a781468458?auto=format&fit=crop&q=80&w=800', alt: 'Deep Cleaning', category: 'Housekeeping' },
];

export function Gallery() {
    return (
        <main className="pt-24 min-h-screen bg-white">
            <SEO
                title="Photo Gallery | Hindusthan Supervision Security Services"
                description="View our team in action. Site deployments, training sessions, and facility management projects across Vijayawada."
                keywords="security gallery, cleaning photos, facility management images, vijayawada security"
            />
            <SectionShell
                eyebrow="Our Work"
                title="Capturing excellence in action."
                subtitle="A glimpse into our daily operations, training protocols, and the dedicated teams that serve our clients."
            >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {galleryImages.map((img, idx) => (
                        <div key={idx} className="group relative overflow-hidden rounded-xl shadow-lg aspect-[4/3]">
                            <img
                                src={img.src}
                                alt={img.alt}
                                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col justify-end p-6">
                                <span className="text-accent-yellow text-xs font-bold uppercase tracking-wider mb-1">{img.category}</span>
                                <h3 className="text-white text-lg font-bold">{img.alt}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </SectionShell>
        </main>
    );
}
