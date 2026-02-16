import { useState } from 'react';
import { SEO } from '../components/SEO';
import { SectionShell } from '../components/Sections/SectionShell';
import { CheckCircle, Shield, Sparkles, ArrowLeft } from 'lucide-react';

type PricingItem = {
  name: string;
  price: string;
  image?: string;
  description?: string;
};

type PricingCategory = {
  category: string;
  mainCategory: 'housekeeping' | 'security';
  image: string;
  icon: any;
  color: string;
  items: PricingItem[];
};

import servicesData from '../data/services.json';

const getInitialData = () => {
  const saved = localStorage.getItem('services_data');
  return saved ? JSON.parse(saved) : servicesData;
};

const pricingData: PricingCategory[] = getInitialData();


export function Services() {
  const [selectedCategory, setSelectedCategory] = useState<'security' | 'housekeeping' | null>(null);

  const filteredData = selectedCategory
    ? pricingData.filter((item: any) => item.mainCategory === selectedCategory).map(group => ({
      ...group,
      icon: group.mainCategory === 'security' ? Shield : Sparkles
    }))
    : [];

  return (
    <main className="pt-24 min-h-screen bg-gray-50">
      <SEO
        title="Best Security & Cleaning Services | Hindustan Security"
        description="Professional security guards and top-tier housekeeping across Visakhapatnam and Vijayawada. Explore our mission-critical protection and deep cleaning solutions."
        keywords="best security service, best cleaning service, security guards Visakhapatnam, housekeeping Vijayawada, Hindustan Security"
      />

      <section className="bg-primary-blue text-white py-16 text-center">
        <div className="container-custom">
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Professional solutions tailored to your specific requirements.
          </p>
        </div>
      </section>

      {/* Services Highlight Banner */}
      <section className="bg-primary-green py-8">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-center md:text-left">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-white/20 rounded-2xl backdrop-blur-sm">
                <Shield className="text-white" size={32} />
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight">
                We provide <span className="text-primary-blue">all types</span> of security services.
              </h2>
            </div>
            <div className="h-px w-24 bg-white/30 hidden md:block"></div>
            <p className="text-white/90 font-bold uppercase tracking-widest text-xs max-w-xs">
              Manned Guarding • CCTV Monitoring • Industrial Patrol • Executive Protection
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32">
        <div className="container-custom">
          {!selectedCategory ? (
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-black text-primary-blue mb-6 tracking-tight">Select a Discipline</h2>
                <div className="w-20 h-1.5 bg-primary-green mx-auto rounded-full opacity-40"></div>
              </div>
              <div className="grid md:grid-cols-2 gap-10">
                {/* Security Option */}
                <button
                  onClick={() => setSelectedCategory('security')}
                  className="group bg-white p-12 rounded-[2.5rem] shadow-sm border border-slate-100 hover:border-primary-green hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 text-center"
                >
                  <div className="w-28 h-28 mx-auto bg-green-50 rounded-3xl flex items-center justify-center mb-8 group-hover:bg-primary-green transition-all duration-500 group-hover:rotate-6">
                    <Shield className="text-primary-green group-hover:text-white transition-colors" size={56} />
                  </div>
                  <h3 className="text-3xl font-black text-primary-blue mb-4 uppercase tracking-tight">Security Services</h3>
                  <p className="text-slate-500 mb-8 max-w-xs mx-auto leading-relaxed">Professional guarding, armed security, and mission-critical protection.</p>
                  <span className="inline-block bg-primary-green text-white px-10 py-4 rounded-xl font-black uppercase tracking-[0.2em] text-xs shadow-lg group-hover:bg-black transition-all">
                    Explore Rigor
                  </span>
                </button>

                {/* Housekeeping Option */}
                <button
                  onClick={() => setSelectedCategory('housekeeping')}
                  className="group bg-white p-12 rounded-[2.5rem] shadow-sm border border-slate-100 hover:border-primary-blue hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 text-center"
                >
                  <div className="w-28 h-28 mx-auto bg-blue-50 rounded-3xl flex items-center justify-center mb-8 group-hover:bg-primary-blue transition-all duration-500 group-hover:-rotate-6">
                    <Sparkles className="text-primary-blue group-hover:text-white transition-colors" size={56} />
                  </div>
                  <h3 className="text-3xl font-black text-primary-blue mb-4 uppercase tracking-tight">Housekeeping</h3>
                  <p className="text-slate-500 mb-8 max-w-xs mx-auto leading-relaxed">Deep cleaning, sanitation, and specialized facility maintenance.</p>
                  <span className="inline-block bg-primary-blue text-white px-10 py-4 rounded-xl font-black uppercase tracking-[0.2em] text-xs shadow-lg group-hover:bg-black transition-all">
                    Explore Hygiene
                  </span>
                </button>
              </div>
            </div>
          ) : (
            <div>
              <div className="mb-12 flex items-center justify-between border-b border-slate-100 pb-8">
                <button
                  onClick={() => setSelectedCategory(null)}
                  className="flex items-center gap-3 text-primary-blue font-black uppercase tracking-widest text-xs hover:text-primary-green transition-colors group"
                >
                  <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                  All Categories
                </button>
                <div className="text-right">
                  <h2 className="text-2xl font-black text-primary-blue uppercase tracking-[0.15em]">
                    {selectedCategory === 'security' ? 'Operational Guarding' : 'Integrated Facility Management'}
                  </h2>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Professional Solutions for Premises</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredData.flatMap((group) =>
                  group.items.map((item, i) => (
                    <div
                      key={`${group.category}-${i}`}
                      className="bg-white rounded-[2rem] shadow-sm border border-slate-100 overflow-hidden hover:shadow-2xl transition-all duration-500 flex flex-col group p-8"
                    >
                      <div className="w-full h-48 overflow-hidden mb-6 rounded-2xl">
                        <img
                          src={item.image || group.image}
                          alt={item.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                      </div>

                      <div className="flex items-center gap-5 mb-6">
                        <div className={`w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center transition-all duration-500 group-hover:bg-opacity-100 ${group.mainCategory === 'security' ? 'group-hover:bg-primary-green' : 'group-hover:bg-primary-blue'}`}>
                          <group.icon className={`${group.mainCategory === 'security' ? 'text-primary-green' : 'text-primary-blue'} group-hover:text-white transition-colors`} size={28} />
                        </div>
                        <div className="flex-grow">
                          <span className="text-[9px] font-black uppercase tracking-[0.25em] text-slate-400 block mb-1 group-hover:text-primary-green transition-colors">{group.category}</span>
                          <h3 className="text-lg font-black text-slate-900 leading-tight tracking-tight">{item.name}</h3>
                        </div>
                      </div>

                      <div className="flex-grow mb-8">
                        <p className="text-sm text-slate-500 leading-relaxed opacity-80 h-16 overflow-hidden">
                          {item.description ?? `Standardized ${group.category.toLowerCase()} deployment with verified personnel and 100% statutory compliance protocols.`}
                        </p>
                      </div>

                      <div className="pt-6 border-t border-slate-50 mt-auto">
                        <a
                          href="/contact"
                          className={`block w-full py-3.5 rounded-xl text-center font-black text-[10px] transition-all uppercase tracking-[0.2em] shadow-sm hover:shadow-lg ${group.mainCategory === 'security'
                            ? 'bg-primary-green text-white hover:bg-black'
                            : 'bg-primary-blue text-white hover:bg-black'
                            }`}
                        >
                          Request Inquiry
                        </a>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
