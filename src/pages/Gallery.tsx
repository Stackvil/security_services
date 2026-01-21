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
