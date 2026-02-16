import { SEO } from '../components/SEO';
import { SectionShell } from '../components/Sections/SectionShell';
import { ShieldCheck, Activity, Smartphone, CreditCard, ClipboardCheck, Clock } from 'lucide-react';
import complianceData from '../data/compliance.json';

const iconMap: any = {
    ShieldCheck, Activity, Smartphone, CreditCard, ClipboardCheck, Clock
};

const getInitialData = () => {
    const saved = localStorage.getItem('compliance_data');
    return saved ? JSON.parse(saved) : complianceData;
};

export function Compliance() {
    const data = getInitialData();

    return (
        <main className="pt-24 min-h-screen bg-white">
            <SEO
                title="Compliance & Processes | Hindustan Security"
                description="Detailed overview of our statutory compliance and digital operational processes. ESI/PF, Insurance, and 100% digital facility management."
                keywords="security compliance, ESI PF compliance, digital guarding, cashless security services"
            />

            <section className="bg-primary-blue text-white py-16 text-center">
                <div className="container-custom">
                    <h1 className="text-4xl font-black mb-4 uppercase tracking-tight">Compliance & Processes</h1>
                    <p className="text-xl opacity-90 max-w-2xl mx-auto font-medium italic">
                        "Compliance is the residue of good security"
                    </p>
                </div>
            </section>

            <SectionShell
                eyebrow="Statutory Rigor"
                title="Compliances that set us apart."
                subtitle="Hindustan Security maintains 100% adherence to national and regional statutory requirements, ensuring peace of mind for our clients."
            >
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {data.statutory.map((item: any, idx: number) => {
                        const Icon = iconMap[item.icon] || ShieldCheck;
                        return (
                            <div key={idx} className="p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:shadow-lg transition-all group">
                                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-primary-green transition-colors">
                                    <Icon className="text-primary-blue group-hover:text-white transition-colors" size={24} />
                                </div>
                                <h3 className="text-lg font-black text-slate-900 mb-3 uppercase tracking-tight">{item.title}</h3>
                                <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                            </div>
                        );
                    })}
                </div>
            </SectionShell>

            <div className="bg-slate-900 text-white py-20">
                <SectionShell
                    eyebrow="Operational Excellence"
                    title="Digital-first processes."
                    subtitle="Our operations are powered by a 100% digital backbone, ensuring accountability and real-time reporting."
                >
                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="space-y-8">
                            {data.operational.map((item: any, idx: number) => (
                                <div key={idx} className="flex gap-6 items-start">
                                    <div className="w-1.5 h-12 bg-primary-green rounded-full opacity-40"></div>
                                    <div>
                                        <h4 className="text-xl font-black uppercase tracking-tight mb-2">{item.title}</h4>
                                        <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            {data.tags.map((item: string) => (
                                <div key={item} className="p-4 bg-white/5 border border-white/10 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-primary-green"></div>
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                </SectionShell>
            </div>
        </main>
    );
}
