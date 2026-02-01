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

const pricingData: PricingCategory[] = [
  {
    category: 'Home Deep Cleaning',
    mainCategory: 'housekeeping',
    image: `${import.meta.env.BASE_URL ?? '/'}images/services/home deep cleaning.jpg`,
    icon: Sparkles,
    color: 'text-primary-blue',
    items: [
      {
        name: 'Villa (Full Deep Clean)',
        price: 'Contact for Quote',
        image: `${import.meta.env.BASE_URL ?? '/'}images/gallery/Deep Cleaning.jpg`,
        description: 'Comprehensive top-to-bottom sanitation for villas, including floor scrubbing, window cleaning, and high-pressure washing.'
      },
      {
        name: 'Studio Apartment (Up to 400 Sqft)',
        price: '₹2500/-',
        image: `${import.meta.env.BASE_URL ?? '/'}images/services/studio appartement.png`,
        description: 'Complete studio cleaning with specialized chemicals and high-end equipment for a spot-free finish.'
      },
      {
        name: '1 BHK Apartment (Up to 700 Sqft)',
        price: '₹3500/-',
        image: `${import.meta.env.BASE_URL ?? '/'}images/services/1bhk.png`,
        description: 'Thorough cleaning of living areas, kitchen, bathroom, and bedroom for medium-sized apartments.'
      },
      {
        name: '2 BHK Apartment (Up to 1100 Sqft)',
        price: '₹4500/-',
        image: `${import.meta.env.BASE_URL ?? '/'}images/services/2bhk apartment (up to 1100 sqft).png`,
        description: 'Full-service hygiene for 2 BHK units, focusing on high-touch areas and deep flooring sanitation.'
      },
      {
        name: '3 BHK Apartment (Up to 1500 Sqft)',
        price: '₹5500/-',
        image: `${import.meta.env.BASE_URL ?? '/'}images/services/3bhk aparment (up to 1500 sqft).png`,
        description: 'Elite cleaning protocol for large 3 BHK homes, ensuring every corner meets our high hygiene standards.'
      },
      {
        name: '4 BHK Apartment (Above 1500 Sqft)',
        price: '₹6500/-',
        image: `${import.meta.env.BASE_URL ?? '/'}images/services/4bhk apparment (above 1500 sqft).png`,
        description: 'Scale-up cleaning for larger residences, deployed with a 4-member specialized team.'
      },
    ]
  },
  {
    category: 'Commercial Cleaning',
    mainCategory: 'housekeeping',
    image: `${import.meta.env.BASE_URL ?? '/'}images/services/Specialized Cleaning.jpg`,
    icon: Sparkles,
    color: 'text-primary-blue',
    items: [
      {
        name: 'Party/Function Cleanup',
        price: 'Contact for Quote',
        image: `${import.meta.env.BASE_URL ?? '/'}images/gallery/Corporate Event cleaning.jpg`,
        description: 'Pre and post-event sanitation for banquet halls and convention centers with rapid response teams.'
      },
      {
        name: 'Office Space Cleaning',
        price: 'Contact for Quote',
        image: `${import.meta.env.BASE_URL ?? '/'}images/services/office space cleaning.png`,
        description: 'Regular maintenance of office premises, including workstations, restrooms, and common areas.'
      },
      {
        name: 'Full Day Helper (9 AM - 6 PM)',
        price: '₹1200/-',
        image: `${import.meta.env.BASE_URL ?? '/'}images/services/full day helper.png`,
        description: 'Dedicated housekeeping staff for 8-hour shifts to manage ongoing premises maintenance.'
      },
      {
        name: 'Housemaid (Full Day)',
        price: '₹1000/-',
        image: `${import.meta.env.BASE_URL ?? '/'}images/gallery/Housekeeping Staff.webp`,
        description: 'Reliable and verified domestic help for comprehensive home management and daily chores.'
      },
      {
        name: 'Baby Care',
        price: 'Contact for Quote',
        image: `${import.meta.env.BASE_URL ?? '/'}images/services/1kn.jpg`,
        description: 'Compassionate and trained baby care specialists ensuring your little ones are in safe and nurturing hands.'
      },
      {
        name: 'Patient Care',
        price: 'Contact for Quote',
        image: `${import.meta.env.BASE_URL ?? '/'}images/services/sahdasdi.png`,
        description: 'Supportive home-based patient and elderly care services provided by experienced, empathetic caregivers.'
      },
    ]
  },
  {
    category: 'Security Services',
    mainCategory: 'security',
    image: `${import.meta.env.BASE_URL ?? '/'}images/services/Security Services.jpg`,
    icon: Shield,
    color: 'text-primary-green',
    items: [
      {
        name: 'Residential Security (24/7)',
        price: 'Contact for Quote',
        image: `${import.meta.env.BASE_URL ?? '/'}images/gallery/Residential Security.jpg`,
        description: 'Round-the-clock manned guarding for residential complexes with visitor tracking and night checks.'
      },
      {
        name: 'Armed Security Briefing',
        price: 'Contact for Quote',
        image: `${import.meta.env.BASE_URL ?? '/'}images/gallery/Security Briefing.webp`,
        description: 'High-level protection with licensed armed personnel, trained in military-grade crisis response.'
      },
      {
        name: 'ATM/Bank Guarding',
        price: 'Contact for Quote',
        image: `${import.meta.env.BASE_URL ?? '/'}images/services/atm   bank guarding.jpg`,
        description: 'Specialized security for financial institutions with focus on protocol adherence and vigilance.'
      },
      {
        name: 'Industrial Estate Patrol',
        price: 'Contact for Quote',
        image: `${import.meta.env.BASE_URL ?? '/'}images/services/industrial estate patrol.jpg`,
        description: 'Perimeter protection and access control for large industrial sites with perimeter mobile patrols.'
      },
    ]
  },
  {
    category: 'Manpower Outsourcing',
    mainCategory: 'security', // Mapping to security for discipline
    image: `${import.meta.env.BASE_URL ?? '/'}images/services/staffing services.avif`,
    icon: Shield,
    color: 'text-primary-blue',
    items: [
      {
        name: 'Technical Manpower',
        price: 'Contact for Quote',
        image: `${import.meta.env.BASE_URL ?? '/'}images/services/technical manpower.jpg`,
        description: 'Provision of skilled technical personnel for specialized industrial and commercial operations.'
      },
      {
        name: 'Labour Supply Services',
        price: 'Contact for Quote',
        image: `${import.meta.env.BASE_URL ?? '/'}images/services/labour supply services.jpg`,
        description: 'Reliable and verified general labour supply for large-scale institutional requirements.'
      }
    ]
  }
];

export function Services() {
  const [selectedCategory, setSelectedCategory] = useState<'security' | 'housekeeping' | null>(null);

  const filteredData = selectedCategory
    ? pricingData.filter(item => item.mainCategory === selectedCategory)
    : [];

  return (
    <main className="pt-24 min-h-screen bg-gray-50">
      <SEO
        title="Our Services | Hindustan Security"
        description="Explore our comprehensive security and cleaning services in Vijayawada. Expert solutions for residential and corporate needs."
        keywords="security services vijayawada, home deep cleaning, housekeeping services, manpower supply"
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
