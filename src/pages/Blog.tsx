import { SEO } from '../components/SEO';
import { SectionShell } from '../components/Sections/SectionShell';

export function Blog() {
    return (
        <main className="pt-24 min-h-screen bg-white">
            <SEO
                title="Blog | Hindusthan Supervision Security Services"
                description="Latest news, security tips, and updates from Hindusthan Supervision."
                keywords="security blog, facility management news, vijayawada security updates"
            />

            <SectionShell title="Our Blog" subtitle="Insights and updates from the world of security and facility management.">
                <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="bg-gray-100 p-8 rounded-full mb-6">
                        <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                        </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-dark-text mb-2">Coming Soon</h3>
                    <p className="text-gray-600 max-w-md">
                        We are currently crafting valuable content for you. Check back later for expert security tips and industry news.
                    </p>
                </div>
            </SectionShell>
        </main>
    );
}
