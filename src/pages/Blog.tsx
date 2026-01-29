import { SEO } from '../components/SEO';
import { SectionShell } from '../components/Sections/SectionShell';

export function Blog() {
    return (
        <main className="pt-24 min-h-screen bg-white">
            <SEO
                title="Blog | Hindusthan Security Services"
                description="Latest news, security tips, and updates from Hindusthan."
                keywords="security blog, facility management news, vijayawada security updates"
            />

            <SectionShell title="Our Blog" subtitle="Insights and updates from the world of security and facility management.">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
                    {/* Blog Post 1 */}
                    <article className="group overflow-hidden rounded-2xl bg-white shadow-md transition-all hover:shadow-xl border border-gray-100">
                        <div className="aspect-video overflow-hidden">
                            <img
                                src={`${import.meta.env.BASE_URL ?? '/'}images/blog/5 Essential Security Tips for Your Home.jpg`}
                                alt="Residential Security"
                                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>
                        <div className="p-6">
                            <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase text-brand-600">
                                <span>Security Tips</span>
                                <span>•</span>
                                <span>5 Min Read</span>
                            </div>
                            <h3 className="mb-3 text-xl font-bold text-slate-900 group-hover:text-brand-600 transition-colors">
                                5 Essential Security Tips for Your Home
                            </h3>
                            <p className="text-sm text-slate-600">
                                Security isn't just about guards; it's about mindset. Learn practical advice to secure your perimeter, manage visitor access, and protect your loved ones from common threats.
                            </p>
                        </div>
                    </article>

                    {/* Blog Post 2 */}
                    <article className="group overflow-hidden rounded-2xl bg-white shadow-md transition-all hover:shadow-xl border border-gray-100">
                        <div className="aspect-video overflow-hidden">
                            <img
                                src={`${import.meta.env.BASE_URL ?? '/'}images/blog/The Hidden Benefits of Professional Deep Cleaning.webp`}
                                alt="Deep Cleaning"
                                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>
                        <div className="p-6">
                            <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase text-purple-600">
                                <span>Hygiene</span>
                                <span>•</span>
                                <span>4 Min Read</span>
                            </div>
                            <h3 className="mb-3 text-xl font-bold text-slate-900 group-hover:text-purple-600 transition-colors">
                                The Hidden Benefits of Professional Deep Cleaning
                            </h3>
                            <p className="text-sm text-slate-600">
                                Regular mopping clears dust, but deep cleaning eradicates allergens and bacteria. Discover why a quarterly deep clean is essential for a healthy living environment.
                            </p>
                        </div>
                    </article>

                    {/* Blog Post 3 */}
                    <article className="group overflow-hidden rounded-2xl bg-white shadow-md transition-all hover:shadow-xl border border-gray-100">
                        <div className="aspect-video overflow-hidden">
                            <img
                                src={`${import.meta.env.BASE_URL ?? '/'}images/blog/Surveillance Technology.jpg`}
                                alt="CCTV Monitoring"
                                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>
                        <div className="p-6">
                            <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase text-blue-600">
                                <span>Technology</span>
                                <span>•</span>
                                <span>6 Min Read</span>
                            </div>
                            <h3 className="mb-3 text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                                Surveillance Technology: Beyond Just Recording
                            </h3>
                            <p className="text-sm text-slate-600">
                                Modern CCTV systems do more than just record playback. From motion detection to perimeter intrusion alerts, see how technology is proactively preventing incidents.
                            </p>
                        </div>
                    </article>

                    {/* Blog Post 4 */}
                    <article className="group overflow-hidden rounded-2xl bg-white shadow-md transition-all hover:shadow-xl border border-gray-100">
                        <div className="aspect-video overflow-hidden">
                            <img
                                src={`${import.meta.env.BASE_URL ?? '/'}images/blog/The Backbone of Effective Security.jpg`}
                                alt="Security Training"
                                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>
                        <div className="p-6">
                            <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase text-green-600">
                                <span>Training</span>
                                <span>•</span>
                                <span>3 Min Read</span>
                            </div>
                            <h3 className="mb-3 text-xl font-bold text-slate-900 group-hover:text-green-600 transition-colors">
                                Training: The Backbone of Effective Security
                            </h3>
                            <p className="text-sm text-slate-600">
                                A uniform doesn't make a guard; training does. Take a peek inside our rigorous training programs that cover soft skills, emergency response, and fire safety.
                            </p>
                        </div>
                    </article>
                </div>
            </SectionShell>
        </main>
    );
}
