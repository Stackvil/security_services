import { useState, useEffect } from 'react';
import { SEO } from '../components/SEO';
import { SectionShell } from '../components/Sections/SectionShell';
import { supabase } from '../lib/supabase';
import blogDataRaw from '../data/blog.json';

export function Blog() {
    const [blogData, setBlogData] = useState<any[]>(blogDataRaw);

    useEffect(() => {
        const loadContent = async () => {
            try {
                const { data, error } = await supabase
                    .from('site_content')
                    .select('content')
                    .eq('key', 'blog_data')
                    .single();

                if (data?.content) {
                    setBlogData(data.content);
                } else {
                    const saved = localStorage.getItem('blog_data');
                    if (saved) setBlogData(JSON.parse(saved));
                }
            } catch (e) {
                console.error('Error loading blog data:', e);
            }
        };
        loadContent();
    }, []);

    return (
        <main className="pt-24 min-h-screen bg-white">
            <SEO
                title="Blog | Hindustan Security Services"
                description="Latest news, security tips, and updates from Hindustan."
                keywords="security blog, facility management news, vijayawada security updates"
            />

            <SectionShell title="Our Blog" subtitle="Insights and updates from the world of security and facility management.">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
                    {blogData.map((post: any) => (
                        <article key={post.id} className="group overflow-hidden rounded-2xl bg-white shadow-md transition-all hover:shadow-xl border border-gray-100">
                            <div className="aspect-video overflow-hidden relative">
                                {post.type === 'video' ? (
                                    <iframe
                                        className="w-full h-full"
                                        src={`https://www.youtube.com/embed/${post.videoUrl.split('v=')[1] || post.videoUrl.split('/').pop()}`}
                                        title={post.title}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                ) : (
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                )}
                            </div>
                            <div className="p-6">
                                <div className={`mb-2 flex items-center gap-2 text-xs font-semibold uppercase ${post.color || 'text-brand-600'}`}>
                                    <span>{post.category}</span>
                                    <span>•</span>
                                    <span>{post.readTime}</span>
                                </div>
                                <h3 className="mb-3 text-xl font-bold text-slate-900 group-hover:text-brand-600 transition-colors">
                                    {post.title}
                                </h3>
                                <p className="text-sm text-slate-600">
                                    {post.description}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>
            </SectionShell>
        </main>
    );
}

