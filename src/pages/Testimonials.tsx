import { useState, useEffect } from 'react';
import { SectionShell } from '../components/Sections/SectionShell';
import { SEO } from '../components/SEO';
import { supabase } from '../lib/supabase';
import testimonialsData from '../data/testimonials.json';

export function Testimonials() {
    const [testimonials, setTestimonials] = useState<any[]>(testimonialsData);

    useEffect(() => {
        const loadContent = async () => {
            try {
                const { data, error } = await supabase
                    .from('site_content')
                    .select('content')
                    .eq('key', 'testimonials_data')
                    .single();

                if (data?.content) {
                    setTestimonials(data.content);
                } else {
                    const saved = localStorage.getItem('testimonials_data');
                    if (saved) setTestimonials(JSON.parse(saved));
                }
            } catch (e) {
                console.error('Error loading testimonials data:', e);
            }
        };
        loadContent();
    }, []);

    return (
        <main className="pt-24">
            <SEO
                title="Client Reviews - Security Services Vijayawada"
                description="See what our clients say about our security and facility management services. Trusted by retail chains and apartments in Vijayawada."
                keywords="security reviews Vijayawada, client testimonials, best security agency reviews, customer feedback"
            />
            <SectionShell
                eyebrow="Testimonials"
                title="What our clients say about working with Hindustan."
            >
                <div className="mb-6 text-xs text-slate-500">
                    The feedback below has been shared by clients across retail, housing
                    societies and industrial plants who work with our teams on a daily
                    basis.
                </div>
                <div className="grid gap-6 md:grid-cols-3">
                    {testimonials.map((t: any) => (
                        <article
                            key={t.name}
                            className="glass-panel flex flex-col rounded-3xl p-5"
                        >
                            <p className="text-sm text-slate-600">“{t.quote}”</p>
                            <div className="mt-5 text-xs text-slate-500">
                                <p className="font-semibold text-slate-900">{t.name}</p>
                                <p>{t.role}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </SectionShell>
        </main>
    );
}


