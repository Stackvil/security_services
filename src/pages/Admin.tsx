import { useState, useEffect } from 'react';
import { SEO } from '../components/SEO';
import { Shield, Sparkles, BookOpen, Briefcase, Plus, Trash2, Edit2, Save, X, LogOut, Image, Video, Link as LinkIcon, ExternalLink, Copy, Download, ShieldCheck, RefreshCw } from 'lucide-react';
import { supabase } from '../lib/supabase';

const ADMIN_PASSWORD = 'admin123';

function CopyButton({ data, label }: { data: any, label: string }) {
    const copyToClipboard = () => {
        navigator.clipboard.writeText(JSON.stringify(data, null, 4));
        alert(`${label} JSON copied to clipboard! Paste it into your .json file.`);
    };

    return (
        <button
            onClick={copyToClipboard}
            className="flex items-center gap-2 px-4 py-2 bg-slate-800 text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-black transition-all shadow-md"
        >
            <Copy size={14} /> Copy JSON
        </button>
    );
}

function DownloadButton({ data, label }: { data: any, label: string }) {
    const downloadJSON = () => {
        const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(data, null, 4));
        const downloadAnchorNode = document.createElement('a');
        downloadAnchorNode.setAttribute("href", dataStr);
        downloadAnchorNode.setAttribute("download", `${label.toLowerCase()}.json`);
        document.body.appendChild(downloadAnchorNode);
        downloadAnchorNode.click();
        downloadAnchorNode.remove();
    };

    return (
        <button
            onClick={downloadJSON}
            className="flex items-center gap-2 px-4 py-2 bg-primary-blue text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-black transition-all shadow-md"
        >
            <Download size={14} /> Download JSON
        </button>
    );
}

export function Admin() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [activeTab, setActiveTab] = useState<'services' | 'training' | 'blog' | 'careers' | 'testimonials'>('services');

    const [services, setServices] = useState<any[]>([]);
    const [training, setTraining] = useState<any>(null);
    const [blog, setBlog] = useState<any[]>([]);
    const [careers, setCareers] = useState<any[]>([]);
    const [testimonials, setTestimonials] = useState<any[]>([]);

    useEffect(() => {
        const loggedIn = sessionStorage.getItem('admin_logged_in');
        if (loggedIn) setIsLoggedIn(true);

        const loadData = async () => {
            const fetchTable = async (key: string, defaultImport: any) => {
                try {
                    const { data, error } = await supabase
                        .from('site_content')
                        .select('content')
                        .eq('key', key)
                        .single();

                    if (data?.content) return data.content;

                    const saved = localStorage.getItem(key);
                    if (saved) return JSON.parse(saved);

                    const mod = await defaultImport();
                    return mod.default;
                } catch (e) {
                    console.error(`Error loading ${key}:`, e);
                    const mod = await defaultImport();
                    return mod.default;
                }
            }

            setServices(await fetchTable('services_data', () => import('../data/services.json')));
            setTraining(await fetchTable('training_data', () => import('../data/training.json')));
            setBlog(await fetchTable('blog_data', () => import('../data/blog.json')));
            setCareers(await fetchTable('careers_data', () => import('../data/careers.json')));
            setTestimonials(await fetchTable('testimonials_data', () => import('../data/testimonials.json')));
        };

        loadData();
    }, []);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (password === ADMIN_PASSWORD) {
            setIsLoggedIn(true);
            sessionStorage.setItem('admin_logged_in', 'true');
            setError('');
        } else {
            setError('Invalid password');
        }
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        sessionStorage.removeItem('admin_logged_in');
    };

    const saveData = async (key: string, data: any) => {
        localStorage.setItem(key, JSON.stringify(data));
        window.dispatchEvent(new Event('storage'));
        try {
            await supabase
                .from('site_content')
                .upsert({ key, content: data });
        } catch (e) {
            console.error('Supabase sync error:', e);
        }
    };

    const getImagePath = (path: string) => {
        if (!path) return '';
        if (path.startsWith('http')) return path;
        const base = import.meta.env.BASE_URL || '/';
        const cleanPath = path.startsWith('/') ? path.substring(1) : path;
        return `${base}${cleanPath}`;
    };

    if (!isLoggedIn) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-900 px-4">
                <SEO title="Admin Login" description="Admin access" keywords="" />
                <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl p-10">
                    <div className="text-center mb-10">
                        <div className="w-20 h-20 bg-primary-blue rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-primary-blue/20">
                            <Shield className="text-white" size={40} />
                        </div>
                        <h1 className="text-3xl font-black text-primary-blue uppercase tracking-tight">Admin Central</h1>
                        <p className="text-slate-500 mt-2 font-medium">Verify your identity to proceed</p>
                    </div>
                    <form onSubmit={handleLogin} className="space-y-6">
                        <div>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter Access Password"
                                className="w-full px-6 py-4 rounded-2xl border-2 border-slate-100 focus:border-primary-blue focus:outline-none transition-colors text-center font-bold text-slate-900"
                            />
                        </div>
                        {error && <p className="text-red-500 text-sm text-center font-bold tracking-tight">{error}</p>}
                        <button
                            type="submit"
                            className="w-full bg-primary-blue text-white py-4 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-black transition-all transform active:scale-[0.98] shadow-lg shadow-primary-blue/30"
                        >
                            Authorize Access
                        </button>
                    </form>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-100 pt-32 pb-20">
            <SEO title="Admin Dashboard" description="Manage shop content" keywords="" />
            <div className="container-custom">
                <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6 bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-200">
                    <div className="flex items-center gap-6">
                        <div className="w-16 h-16 bg-primary-blue/10 rounded-2xl flex items-center justify-center">
                            <Shield className="text-primary-blue" size={32} />
                        </div>
                        <div>
                            <h1 className="text-3xl font-black text-primary-blue uppercase tracking-tight leading-none">Administration</h1>
                            <p className="text-slate-400 font-bold uppercase tracking-widest text-[10px] mt-2">Central Content Management System</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <a href="/" target="_blank" className="flex items-center gap-2 px-6 py-3 bg-slate-100 text-slate-600 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-slate-200 transition-all">
                            <ExternalLink size={16} /> View Site
                        </a>
                        <button onClick={handleLogout} className="flex items-center gap-2 px-6 py-3 bg-red-50 text-red-600 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-red-600 hover:text-white transition-all">
                            <LogOut size={16} /> End Session
                        </button>
                    </div>
                </div>

                <div className="flex flex-wrap gap-3 mb-12 p-2 bg-white rounded-3xl shadow-sm border border-slate-200 inline-flex">
                    <TabButton active={activeTab === 'services'} onClick={() => setActiveTab('services')} icon={<Sparkles size={20} />} label="Services" />
                    <TabButton active={activeTab === 'training'} onClick={() => setActiveTab('training')} icon={<Image size={20} />} label="Gallery" />
                    <TabButton active={activeTab === 'blog'} onClick={() => setActiveTab('blog')} icon={<BookOpen size={20} />} label="Blog" />
                    <TabButton active={activeTab === 'careers'} onClick={() => setActiveTab('careers')} icon={<Briefcase size={20} />} label="Careers" />
                    <TabButton active={activeTab === 'testimonials'} onClick={() => setActiveTab('testimonials')} icon={<ExternalLink size={20} />} label="Feedback" />
                </div>

                <div className="bg-white rounded-[3rem] shadow-xl shadow-slate-200 border border-slate-100 overflow-hidden">
                    <div className="p-8 md:p-12 min-h-[600px]">
                        <div className="flex justify-end mb-6">
                            {activeTab === 'services' && (
                                <div className="flex gap-2">
                                    <CopyButton data={services} label="Services" />
                                    <DownloadButton data={services} label="Services" />
                                </div>
                            )}
                            {activeTab === 'training' && training && (
                                <div className="flex gap-2">
                                    <CopyButton data={training} label="Training" />
                                    <DownloadButton data={training} label="Training" />
                                </div>
                            )}
                            {activeTab === 'blog' && (
                                <div className="flex gap-2">
                                    <CopyButton data={blog} label="Blog" />
                                    <DownloadButton data={blog} label="Blog" />
                                </div>
                            )}
                            {activeTab === 'careers' && (
                                <div className="flex gap-2">
                                    <CopyButton data={careers} label="Careers" />
                                    <DownloadButton data={careers} label="Careers" />
                                </div>
                            )}
                            {activeTab === 'testimonials' && (
                                <div className="flex gap-2">
                                    <CopyButton data={testimonials} label="Testimonials" />
                                    <DownloadButton data={testimonials} label="Testimonials" />
                                </div>
                            )}
                        </div>
                        {activeTab === 'services' && <ServicesManager data={services} onSave={(d: any) => { setServices(d); saveData('services_data', d); }} getImagePath={getImagePath} />}
                        {activeTab === 'training' && training && <TrainingManager data={training} onSave={(d: any) => { setTraining(d); saveData('training_data', d); }} getImagePath={getImagePath} />}
                        {activeTab === 'blog' && <BlogManager data={blog} onSave={(d: any) => { setBlog(d); saveData('blog_data', d); }} getImagePath={getImagePath} />}
                        {activeTab === 'careers' && <CareersManager data={careers} onSave={(d: any) => { setCareers(d); saveData('careers_data', d); }} />}
                        {activeTab === 'testimonials' && <TestimonialsManager data={testimonials} onSave={(d: any) => { setTestimonials(d); saveData('testimonials_data', d); }} />}
                    </div>
                </div>
            </div>
        </div>
    );
}

function TabButton({ active, onClick, icon, label }: any) {
    return (
        <button
            onClick={onClick}
            className={`flex items-center gap-3 px-8 py-4 rounded-2xl font-black uppercase tracking-[0.15em] text-xs transition-all duration-300 ${active ? 'bg-primary-blue text-white shadow-xl shadow-primary-blue/30 scale-105' : 'text-slate-400 hover:text-primary-blue hover:bg-slate-50'}`}
        >
            {icon} {label}
        </button>
    );
}

function ServicesManager({ data, onSave, getImagePath }: any) {
    const addService = (catIdx: number) => {
        onSave(data.map((cat: any, cIdx: number) =>
            cIdx === catIdx
                ? {
                    ...cat, items: [{
                        name: "New Service Offering",
                        price: "Contact for Quote",
                        image: "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?q=80&w=1000",
                        description: "Provide a detailed description of the new service here."
                    }, ...cat.items]
                }
                : cat
        ));
    };

    const deleteService = (catIdx: number, itemIdx: number) => {
        onSave(data.map((cat: any, cIdx: number) =>
            cIdx === catIdx
                ? { ...cat, items: cat.items.filter((_: any, iIdx: number) => iIdx !== itemIdx) }
                : cat
        ));
    };

    const updateService = (catIdx: number, itemIdx: number, field: string, value: string) => {
        onSave(data.map((cat: any, cIdx: number) =>
            cIdx === catIdx
                ? {
                    ...cat, items: cat.items.map((item: any, iIdx: number) =>
                        iIdx === itemIdx ? { ...item, [field]: value } : item
                    )
                }
                : cat
        ));
    };

    return (
        <div className="space-y-20">
            {data.map((cat: any, cIdx: number) => (
                <div key={cIdx} className="space-y-10">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-100 pb-6">
                        <div className="flex items-center gap-4">
                            <div className={`w-3 h-3 rounded-full ${cat.mainCategory === 'security' ? 'bg-primary-green' : 'bg-primary-blue'}`}></div>
                            <h2 className="text-2xl font-black text-primary-blue uppercase tracking-tight">{cat.category}</h2>
                        </div>
                        <button onClick={() => addService(cIdx)} className="flex items-center gap-2 px-6 py-3 bg-primary-green text-white rounded-xl text-xs font-black uppercase tracking-widest hover:bg-black transition-all shadow-md">
                            <Plus size={18} /> Add Item to {cat.category}
                        </button>
                    </div>
                    <div className="grid lg:grid-cols-2 gap-8">
                        {cat.items.map((item: any, iIdx: number) => (
                            <div key={iIdx} className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-200 relative group hover:bg-white hover:shadow-xl transition-all duration-500">
                                <button onClick={() => deleteService(cIdx, iIdx)} className="absolute top-6 right-6 p-2 bg-red-50 text-red-500 rounded-full opacity-0 group-hover:opacity-100 transition-all hover:bg-red-500 hover:text-white z-10">
                                    <Trash2 size={18} />
                                </button>
                                <div className="flex gap-8">
                                    <div className="w-40 flex-shrink-0 space-y-4">
                                        <div className="aspect-square rounded-2xl overflow-hidden bg-slate-200 border-2 border-slate-100 shadow-md">
                                            {(item.image || cat.image) ? (
                                                <img src={getImagePath(item.image || cat.image)} alt="" className="w-full h-full object-cover" />
                                            ) : (
                                                <Image className="text-slate-400" size={32} />
                                            )}
                                        </div>
                                        <input
                                            type="text"
                                            value={item.image}
                                            onChange={(e) => updateService(cIdx, iIdx, 'image', e.target.value)}
                                            className="w-full text-[10px] bg-white rounded p-1.5 focus:outline-none text-slate-900 border border-slate-200"
                                            placeholder="Image Path"
                                        />
                                    </div>
                                    <div className="flex-grow space-y-4">
                                        <input
                                            type="text"
                                            value={item.name}
                                            onChange={(e) => updateService(cIdx, iIdx, 'name', e.target.value)}
                                            className="w-full bg-transparent font-black text-xl border-b border-transparent focus:border-primary-blue focus:outline-none text-slate-900"
                                            placeholder="Service Name"
                                        />
                                        <input
                                            type="text"
                                            value={item.price}
                                            onChange={(e) => updateService(cIdx, iIdx, 'price', e.target.value)}
                                            className="w-full bg-transparent text-primary-green font-black text-sm border-b border-transparent focus:border-primary-green focus:outline-none text-slate-900"
                                            placeholder="Pricing (e.g. ₹2500/-)"
                                        />
                                        <textarea
                                            value={item.description}
                                            onChange={(e) => updateService(cIdx, iIdx, 'description', e.target.value)}
                                            className="w-full bg-transparent text-xs text-slate-700 focus:outline-none resize-none h-20"
                                            placeholder="Service Description"
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

function TrainingManager({ data, onSave, getImagePath }: any) {
    const updateTrainer = (field: string, value: any) => {
        onSave({ ...data, trainer: { ...data.trainer, [field]: value } });
    };

    const addImageItem = (listKey: string) => {
        const newItem = {
            src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000",
            alt: "New Image Entry",
            ...(listKey === 'galleryImages' ? { category: 'General' } : {})
        };
        onSave({
            ...data,
            [listKey]: [newItem, ...(data[listKey] || [])]
        });
    };

    const deleteImageItem = (listKey: string, idx: number) => {
        onSave({
            ...data,
            [listKey]: (data[listKey] || []).filter((_: any, i: number) => i !== idx)
        });
    };

    const updateImageItem = (listKey: string, idx: number, field: string, value: string) => {
        onSave({
            ...data,
            [listKey]: (data[listKey] || []).map((item: any, i: number) =>
                i === idx ? { ...item, [field]: value } : item
            )
        });
    };

    const updateVideo = (field: string, value: string) => {
        onSave({ ...data, video: { ...data.video, [field]: value } });
    };

    const ImageList = ({ title, listKey, showCategory = false }: any) => (
        <section className="space-y-8 pt-12 border-t border-slate-100">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-2xl font-black text-primary-blue uppercase tracking-tight">{title}</h2>
                    <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mt-1">Manage image assets for {title}</p>
                </div>
                <button onClick={() => addImageItem(listKey)} className="flex items-center gap-2 px-6 py-3 bg-primary-blue text-white rounded-xl text-xs font-black uppercase tracking-widest hover:bg-black transition-all">
                    <Plus size={18} /> Add New Image
                </button>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {(data[listKey] || []).map((item: any, idx: number) => (
                    <div key={idx} className="p-6 bg-slate-50 rounded-[2rem] border border-slate-200 relative group hover:bg-white hover:shadow-xl transition-all">
                        <button onClick={() => deleteImageItem(listKey, idx)} className="absolute top-4 right-4 p-2 bg-red-50 text-red-500 rounded-full opacity-0 group-hover:opacity-100 transition-all hover:bg-red-500 hover:text-white z-10">
                            <Trash2 size={16} />
                        </button>
                        <div className="aspect-video rounded-xl overflow-hidden mb-4 bg-slate-200 border border-slate-100 shadow-sm">
                            <img src={getImagePath(item.src)} alt="" className="w-full h-full object-cover" />
                        </div>
                        <div className="space-y-3">
                            <input
                                type="text"
                                value={item.src}
                                onChange={(e) => updateImageItem(listKey, idx, 'src', e.target.value)}
                                className="w-full text-[10px] bg-white rounded p-1.5 focus:outline-none text-slate-900 border border-slate-200"
                                placeholder="Image URL / Path"
                            />
                            <input
                                type="text"
                                value={item.alt}
                                onChange={(e) => updateImageItem(listKey, idx, 'alt', e.target.value)}
                                className="w-full bg-transparent font-bold text-xs border-b border-transparent focus:border-primary-blue focus:outline-none text-slate-900"
                                placeholder="Alt Text / Title"
                            />
                            {showCategory && (
                                <input
                                    type="text"
                                    value={item.category}
                                    onChange={(e) => updateImageItem(listKey, idx, 'category', e.target.value)}
                                    className="w-full bg-white text-[9px] font-black uppercase tracking-widest text-primary-green px-2 py-1 rounded border border-slate-200 focus:outline-none"
                                    placeholder="Category"
                                />
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );

    return (
        <div className="space-y-20">
            {/* Lead Trainer */}
            <section className="bg-slate-50 p-10 rounded-[3rem] border border-slate-200 shadow-sm">
                <div className="flex items-center gap-4 border-b border-slate-200 pb-6 mb-8">
                    <Edit2 className="text-primary-blue" size={24} />
                    <h2 className="text-2xl font-black text-primary-blue uppercase tracking-tight">Lead Trainer Identity</h2>
                </div>
                <div className="grid lg:grid-cols-3 gap-10">
                    <div className="lg:col-span-1 space-y-6">
                        <div className="aspect-square rounded-[2rem] overflow-hidden border-8 border-slate-100 shadow-xl bg-slate-200 flex items-center justify-center">
                            {data.trainer.photo ? (
                                <img src={getImagePath(data.trainer.photo)} alt="" className="w-full h-full object-cover" />
                            ) : (
                                <Shield className="text-slate-400" size={64} />
                            )}
                        </div>
                        <input
                            type="text"
                            value={data.trainer.photo}
                            onChange={(e) => updateTrainer('photo', e.target.value)}
                            className="w-full p-3 rounded-xl border border-slate-200 focus:outline-none font-mono text-[10px] text-slate-900"
                            placeholder="Photo URL / Path"
                        />
                    </div>
                    <div className="lg:col-span-2 space-y-6">
                        <input
                            type="text"
                            value={data.trainer.name}
                            onChange={(e) => updateTrainer('name', e.target.value)}
                            className="w-full p-4 rounded-xl border border-slate-200 focus:outline-none font-black text-xl text-slate-900"
                            placeholder="Trainer Name"
                        />
                        <input
                            type="text"
                            value={data.trainer.role}
                            onChange={(e) => updateTrainer('role', e.target.value)}
                            className="w-full p-4 rounded-xl border border-slate-200 focus:outline-none font-bold text-primary-green"
                            placeholder="Role / Rank"
                        />
                        <textarea
                            value={data.trainer.description}
                            onChange={(e) => updateTrainer('description', e.target.value)}
                            className="w-full p-6 rounded-2xl border border-slate-200 focus:outline-none leading-relaxed text-slate-700 h-40"
                            placeholder="Trainer Biography"
                        />
                    </div>
                </div>
            </section>

            {/* Video Section */}
            <section className="bg-slate-900 text-white p-10 rounded-[3rem] border border-white/10 shadow-2xl">
                <div className="flex items-center gap-4 border-b border-white/10 pb-6 mb-8">
                    <Video className="text-red-500" size={24} />
                    <h2 className="text-2xl font-black uppercase tracking-tight">Protocol Video</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-10">
                    <div className="space-y-6">
                        <div>
                            <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Video Source URL (.mp4)</label>
                            <input
                                type="text"
                                value={data.video?.src}
                                onChange={(e) => updateVideo('src', e.target.value)}
                                className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-xs font-mono focus:outline-none focus:border-red-500 transition-colors"
                                placeholder="https://example.com/video.mp4"
                            />
                        </div>
                        <div>
                            <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Video Poster URL (Thumbnail)</label>
                            <input
                                type="text"
                                value={data.video?.poster}
                                onChange={(e) => updateVideo('poster', e.target.value)}
                                className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-xs font-mono focus:outline-none focus:border-red-500 transition-colors"
                                placeholder="https://example.com/poster.jpg"
                            />
                        </div>
                    </div>
                    <div className="aspect-video rounded-3xl overflow-hidden border-4 border-white/10 bg-black flex items-center justify-center">
                        {data.video?.src ? (
                            <video src={data.video.src} className="w-full h-full object-cover" poster={data.video.poster} muted autoPlay loop />
                        ) : (
                            <Video size={48} className="text-white/20" />
                        )}
                    </div>
                </div>
            </section>

            <ImageList title="Main Gallery" listKey="galleryImages" showCategory={true} />
            <ImageList title="Training Sessions" listKey="trainingImages" />
            <ImageList title="Police Training" listKey="policeTrainingImages" />
            <ImageList title="Function Duties" listKey="functionDutiesImages" />
        </div>
    );
}

function BlogManager({ data, onSave, getImagePath }: any) {
    const addPost = (type: 'photo' | 'video') => {
        const newPost = {
            id: Date.now(),
            title: "New Blog Insight",
            description: "Detailed summary of the blog post to be displayed on the grid card.",
            image: type === 'photo' ? "https://images.unsplash.com/photo-1584433144859-1fc3ab84a9ec?q=80&w=1000" : undefined,
            videoUrl: type === 'video' ? "https://www.youtube.com/watch?v=dQw4w9WgXcQ" : undefined,
            category: "Updates",
            readTime: "4 Min Read",
            color: type === 'photo' ? "text-brand-600" : "text-red-500",
            type: type
        };
        onSave([newPost, ...data]);
    };

    const deletePost = (id: number) => {
        onSave(data.filter((p: any) => p.id !== id));
    };

    const updatePost = (id: number, field: string, value: string) => {
        onSave(data.map((p: any) => p.id === id ? { ...p, [field]: value } : p));
    };

    return (
        <div className="space-y-12">
            <div className="flex gap-4 border-b border-slate-100 pb-8">
                <button onClick={() => addPost('photo')} className="flex items-center gap-3 px-8 py-4 bg-primary-blue text-white rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-black transition-all shadow-lg shadow-primary-blue/20">
                    <Plus size={20} /> Create Photo Post
                </button>
                <button onClick={() => addPost('video')} className="flex items-center gap-3 px-8 py-4 bg-red-500 text-white rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-black transition-all shadow-lg shadow-red-500/20">
                    <Plus size={20} /> Create Video Post
                </button>
            </div>
            <div className="grid gap-10">
                {data.map((post: any) => (
                    <div key={post.id} className="p-10 bg-slate-50 rounded-[3rem] border border-slate-200 flex flex-col md:flex-row gap-10 relative group hover:bg-white hover:shadow-2xl transition-all duration-500">
                        <button onClick={() => deletePost(post.id)} className="absolute top-8 right-8 p-3 bg-red-50 text-red-500 rounded-full opacity-0 group-hover:opacity-100 transition-all hover:bg-red-500 hover:text-white shadow-sm">
                            <Trash2 size={24} />
                        </button>
                        <div className="w-full md:w-72 flex-shrink-0">
                            <div className="aspect-video rounded-3xl overflow-hidden bg-slate-200 border-4 border-slate-100 shadow-xl relative group-inner flex items-center justify-center">
                                {post.type === 'video' ? (
                                    <div className="w-full h-full flex flex-col items-center justify-center bg-red-600">
                                        <Video className="text-white" size={60} />
                                        <div className="mt-2 text-[10px] font-black text-white/80 uppercase">YouTube Link Active</div>
                                    </div>
                                ) : post.image ? (
                                    <img src={getImagePath(post.image)} className="w-full h-full object-cover" alt="" />
                                ) : (
                                    <Image className="text-slate-400" size={48} />
                                )}
                            </div>
                            <div className="mt-6 space-y-3">
                                <label className="block text-[8px] font-black text-slate-500 uppercase tracking-widest leading-none">Resource Locator</label>
                                <div className="flex items-center gap-2 bg-white p-3 rounded-xl border border-slate-200">
                                    <LinkIcon size={16} className="text-slate-400" />
                                    <input
                                        type="text"
                                        value={post.type === 'video' ? post.videoUrl : post.image}
                                        onChange={(e) => updatePost(post.id, post.type === 'video' ? 'videoUrl' : 'image', e.target.value)}
                                        className="w-full text-xs font-bold focus:outline-none bg-transparent text-slate-900"
                                        placeholder="https://... or /images/..."
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex-grow space-y-4">
                            <input
                                type="text"
                                value={post.title}
                                onChange={(e) => updatePost(post.id, 'title', e.target.value)}
                                className="w-full bg-transparent font-black text-2xl border-b border-transparent focus:border-primary-blue focus:outline-none text-slate-900"
                                placeholder="Article Title"
                            />
                            <div className="grid grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    value={post.category}
                                    onChange={(e) => updatePost(post.id, 'category', e.target.value)}
                                    className="w-full bg-white px-4 py-3 rounded-xl border border-slate-200 text-xs font-bold focus:outline-none text-slate-900"
                                    placeholder="Category"
                                />
                                <input
                                    type="text"
                                    value={post.readTime}
                                    onChange={(e) => updatePost(post.id, 'readTime', e.target.value)}
                                    className="w-full bg-white px-4 py-3 rounded-xl border border-slate-200 text-xs font-bold focus:outline-none text-slate-900"
                                    placeholder="Read Time"
                                />
                            </div>
                            <textarea
                                value={post.description}
                                onChange={(e) => updatePost(post.id, 'description', e.target.value)}
                                className="w-full p-6 rounded-[2rem] border border-slate-200 text-sm focus:outline-none leading-relaxed text-slate-700 h-32 bg-white/50"
                                placeholder="Write the article content or excerpt here..."
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

function CareersManager({ data, onSave }: any) {
    const addJob = (catIdx: number) => {
        onSave(data.map((cat: any, cIdx: number) =>
            cIdx === catIdx
                ? {
                    ...cat, jobs: [{
                        id: `job-${Date.now()}`,
                        title: "Executive Role Title",
                        type: "Full-time",
                        location: "Vijayawada Hub",
                        desc: "Briefly outline the responsibilities and daily operations for this new position.",
                        requirements: ["Minimum 2 years field experience", "Professional certification in security management"]
                    }, ...cat.jobs]
                }
                : cat
        ));
    };

    const deleteJob = (catIdx: number, jobIdx: number) => {
        onSave(data.map((cat: any, cIdx: number) =>
            cIdx === catIdx
                ? { ...cat, jobs: cat.jobs.filter((_: any, idx: number) => idx !== jobIdx) }
                : cat
        ));
    };

    const updateJob = (catIdx: number, jobIdx: number, field: string, value: any) => {
        onSave(data.map((cat: any, cIdx: number) =>
            cIdx === catIdx
                ? {
                    ...cat, jobs: cat.jobs.map((job: any, idx: number) =>
                        idx === jobIdx ? { ...job, [field]: value } : job
                    )
                }
                : cat
        ));
    };

    return (
        <div className="space-y-20">
            {data.map((cat: any, cIdx: number) => (
                <div key={cIdx} className="space-y-10">
                    <div className="flex justify-between items-center border-b border-slate-100 pb-6">
                        <div className="flex items-center gap-4">
                            <Briefcase className="text-primary-green" size={24} />
                            <h2 className="text-2xl font-black text-primary-blue uppercase tracking-tight">{cat.category}</h2>
                        </div>
                        <button onClick={() => addJob(cIdx)} className="flex items-center gap-2 px-6 py-3 bg-primary-blue text-white rounded-xl text-xs font-black uppercase tracking-widest hover:bg-black transition-all">
                            <Plus size={18} /> New Posting
                        </button>
                    </div>
                    <div className="grid gap-8">
                        {cat.jobs.map((job: any, jIdx: number) => (
                            <div key={job.id} className="p-10 bg-slate-50 rounded-[3rem] border border-slate-200 relative group hover:bg-white hover:shadow-2xl transition-all duration-500">
                                <button onClick={() => deleteJob(cIdx, jIdx)} className="absolute top-8 right-8 p-3 bg-red-50 text-red-500 rounded-full opacity-0 group-hover:opacity-100 transition-all hover:bg-red-500 hover:text-white shadow-sm z-10">
                                    <Trash2 size={24} />
                                </button>
                                <div className="grid lg:grid-cols-2 gap-10">
                                    <div className="space-y-6">
                                        <input
                                            type="text"
                                            value={job.title}
                                            onChange={(e) => updateJob(cIdx, jIdx, 'title', e.target.value)}
                                            className="w-full bg-transparent font-black text-2xl border-b border-transparent focus:border-primary-blue focus:outline-none text-slate-900"
                                            placeholder="Job Title"
                                        />
                                        <div className="grid grid-cols-2 gap-4">
                                            <input
                                                type="text"
                                                value={job.type}
                                                onChange={(e) => updateJob(cIdx, jIdx, 'type', e.target.value)}
                                                className="w-full bg-white px-4 py-3 rounded-xl border border-slate-200 text-xs font-bold text-slate-900"
                                                placeholder="Type (e.g. Full-time)"
                                            />
                                            <input
                                                type="text"
                                                value={job.location}
                                                onChange={(e) => updateJob(cIdx, jIdx, 'location', e.target.value)}
                                                className="w-full bg-white px-4 py-3 rounded-xl border border-slate-200 text-xs font-bold text-slate-900"
                                                placeholder="Location"
                                            />
                                        </div>
                                        <textarea
                                            value={job.desc}
                                            onChange={(e) => updateJob(cIdx, jIdx, 'desc', e.target.value)}
                                            className="w-full p-6 rounded-[2rem] border border-slate-200 text-sm focus:outline-none leading-relaxed text-slate-700 h-40 bg-white/50"
                                            placeholder="Brief description of the role"
                                        />
                                    </div>
                                    <div className="space-y-4">
                                        <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest ml-4">Requirements (One per line)</label>
                                        <textarea
                                            value={job.requirements.join('\n')}
                                            onChange={(e) => updateJob(cIdx, jIdx, 'requirements', e.target.value.split('\n').filter((r: string) => r.trim() !== ''))}
                                            className="w-full p-6 rounded-[2.5rem] border border-slate-200 text-xs font-medium focus:outline-none h-[280px] bg-white leading-loose text-slate-800"
                                            placeholder="Requirement 1&#10;Requirement 2..."
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

function TestimonialsManager({ data, onSave }: any) {
    const addTestimonial = () => {
        onSave([{ name: "New Client", role: "CEO, CompanyName", quote: "Highly professional service..." }, ...data]);
    };

    const deleteTestimonial = (idx: number) => {
        onSave(data.filter((_: any, i: number) => i !== idx));
    };

    const updateTestimonial = (idx: number, field: string, value: string) => {
        onSave(data.map((t: any, i: number) =>
            i === idx ? { ...t, [field]: value } : t
        ));
    };

    return (
        <div className="space-y-10">
            <div className="flex justify-between items-center border-b border-slate-100 pb-6">
                <h2 className="text-2xl font-black text-primary-blue uppercase tracking-tight">Client Feedback</h2>
                <button onClick={addTestimonial} className="flex items-center gap-2 px-6 py-3 bg-primary-blue text-white rounded-xl text-xs font-black uppercase tracking-widest hover:bg-black transition-all">
                    <Plus size={18} /> Add New Testimonial
                </button>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
                {data.map((t: any, idx: number) => (
                    <div key={idx} className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-200 relative group hover:bg-white hover:shadow-xl transition-all">
                        <button onClick={() => deleteTestimonial(idx)} className="absolute top-6 right-6 p-2 bg-red-50 text-red-500 rounded-full opacity-0 group-hover:opacity-100 transition-all hover:bg-red-500 hover:text-white z-10">
                            <Trash2 size={18} />
                        </button>
                        <div className="space-y-4">
                            <input
                                type="text"
                                value={t.name}
                                onChange={(e) => updateTestimonial(idx, 'name', e.target.value)}
                                className="w-full bg-transparent font-black text-xl border-b border-transparent focus:border-primary-blue focus:outline-none text-slate-900"
                                placeholder="Client Name"
                            />
                            <input
                                type="text"
                                value={t.role}
                                onChange={(e) => updateTestimonial(idx, 'role', e.target.value)}
                                className="w-full bg-transparent text-primary-green font-bold text-xs border-b border-transparent focus:border-primary-green focus:outline-none"
                                placeholder="Role / Designation"
                            />
                            <textarea
                                value={t.quote}
                                onChange={(e) => updateTestimonial(idx, 'quote', e.target.value)}
                                className="w-full bg-transparent text-sm text-slate-600 focus:outline-none resize-none h-24"
                                placeholder="Testimonial quote..."
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}


