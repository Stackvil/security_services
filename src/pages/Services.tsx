import { SEO } from '../components/SEO';
import { SectionShell } from '../components/Sections/SectionShell';
import { CheckCircle, Shield, Sparkles, Sofa, Clock } from 'lucide-react';

const pricingData = [
  {
    category: 'Home Deep Cleaning',
    image: `${import.meta.env.BASE_URL ?? '/'}images/services/home deep cleaning.jpg`,
    icon: Sparkles,
    color: 'text-primary-blue',
    items: [
      { name: 'Studio Apartment (Up to 400 Sqft)', price: '₹2500/-' },
      { name: '1 BHK (401 to 600 Sqft)', price: '₹3800/-' },
      { name: '2 BHK (601 to 1000 Sqft)', price: '₹4500/-' },
      { name: '3 BHK (1001 to 1500 Sqft)', price: '₹6000/-' },
      { name: '4 BHK (1501 to 2100 Sqft)', price: '₹7000/-' },
      { name: 'Villa (3000 to 4000 Sqft)', price: '₹11999/-' },
    ]
  },

  {
    category: 'Specialized Cleaning',
    image: `${import.meta.env.BASE_URL ?? '/'}images/services/Specialized Cleaning.jpg`,
    icon: Sparkles,
    color: 'text-purple-600',
    items: [
      { name: 'Bathroom Deep Cleaning', price: '₹599/-' },
      { name: 'Kitchen Deep Cleaning', price: '₹999/-' },
      { name: 'Festival Deep Cleaning', price: 'Call for Quote' },
      { name: 'Party/Function Cleanup', price: 'Call for Quote' },
      { name: 'Move-in/Move-out Cleaning', price: 'Call for Quote' },
      { name: 'Balcony/Terrace Cleaning', price: '₹499/-' },
    ]
  },
  {
    category: 'Staffing & Care Services',
    image: `${import.meta.env.BASE_URL ?? '/'}images/services/staffing services.avif`,
    icon: CheckCircle,
    color: 'text-pink-500',
    items: [
      { name: 'Ayama / Nanny', price: 'Monthly' },
      { name: 'Baby Care Specialist', price: 'Monthly' },
      { name: 'Patient Care Taker', price: 'Monthly' },
      { name: 'Cooking Staff', price: 'Monthly' },
      { name: 'Receptionist / Front Desk', price: 'Monthly' },
      { name: 'Housemaid (Full Day)', price: 'Monthly' },
    ]
  },
  {
    category: 'Security Services',
    image: `${import.meta.env.BASE_URL ?? '/'}images/services/Security Services.jpg`,
    icon: Shield,
    color: 'text-primary-green',
    items: [
      { name: 'Unarmed Guard (8 Hours)', price: 'Call for Quote' },
      { name: 'Unarmed Guard (12 Hours)', price: 'Call for Quote' },
      { name: 'Armed Security (8 Hours)', price: 'Call for Quote' },
      { name: 'Armed Security (12 Hours)', price: 'Call for Quote' },
      { name: 'Event Bouncer (Per Shift)', price: 'Call for Quote' },
      { name: 'Personal Bodyguard', price: 'Call for Quote' },
    ]
  }
];

export function Services() {
  return (
    <main className="pt-24 min-h-screen bg-gray-50">
      <SEO
        title="Services & Pricing | Hindusthan Supervision Security"
        description="Transparent pricing for security and cleaning services in Vijayawada. Deep cleaning starts at ₹2500, Sofa cleaning at ₹1000."
        keywords="cleaning rates vijayawada, security guard charges, deep cleaning price list, housekeeping rates"
      />

      <section className="bg-primary-blue text-white py-16 text-center">
        <div className="container-custom">
          <h1 className="text-4xl font-bold mb-4">Our Services & Pricing</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Professional services with transparent, affordable rates. No hidden charges.
          </p>
        </div>
      </section>

      <SectionShell title="Transparent Pricing" subtitle="Get the best value for your money. Custom packages available for corporate clients.">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pricingData.map((plan, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col">
              <div className="h-48 overflow-hidden relative group">
                <img
                  src={plan.image}
                  alt={plan.category}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                  <h3 className="text-xl font-bold text-white shadow-sm">{plan.category}</h3>
                </div>
              </div>

              <div className="p-6 flex-grow">
                <ul className="space-y-4">
                  {plan.items.map((item, i) => (
                    <li key={i} className="flex justify-between items-start text-sm border-b border-gray-100 pb-2 last:border-0 last:pb-0">
                      <span className="text-gray-600 font-medium">{item.name}</span>
                      <span className="font-bold text-primary-blue whitespace-nowrap ml-2">{item.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-4 bg-gray-50 border-t border-gray-100 text-center mt-auto">
                <a href="/contact" className="block w-full py-2 rounded border border-primary-green text-primary-green font-bold text-sm hover:bg-primary-green hover:text-white transition-colors uppercase">
                  Book Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </SectionShell>

      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-primary-blue mb-12">Why Our Pricing?</h2>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="p-6">
              <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center text-primary-green mb-4">
                <CheckCircle size={32} />
              </div>
              <h3 className="font-bold text-lg mb-2">No Hidden Costs</h3>
              <p className="text-gray-600">The price you see is the price you pay. Taxes applicable as per govt norms.</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center text-primary-blue mb-4">
                <Shield size={32} />
              </div>
              <h3 className="font-bold text-lg mb-2">Fully Insured</h3>
              <p className="text-gray-600">Our services are backed by comprehensive insurance for your peace of mind.</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 mx-auto bg-yellow-100 rounded-full flex items-center justify-center text-accent-yellow mb-4">
                <Clock size={32} />
              </div>
              <h3 className="font-bold text-lg mb-2">Flexible Packages</h3>
              <p className="text-gray-600">Customized monthly and annual contracts available for offices and societies.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
