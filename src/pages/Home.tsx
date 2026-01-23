import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { Shield, Users, Clock, CheckCircle, Award, ThumbsUp, ChevronRight } from 'lucide-react';

export function Home() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Security Services',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, phone, service } = formData;
    const message = `*New Estimate Request*\n\n*Name:* ${name}\n*Phone:* ${phone}\n*Service:* ${service}`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/919059501501?text=${encodedMessage}`, '_blank');
  };

  return (
    <>
      <SEO
        title="Best Security Services in Vijayawada | Hindusthan Supervision"
        description="Hindusthan Supervision provides top-tier security services, housekeeping, and facility management in Vijayawada. Request a free estimate today."
        keywords="security services, housekeeping, manpower, vijayawada, facility management"
      />

      {/* Hero Section */}
      <section
        className="relative bg-brand-900 text-white py-20 lg:py-32 overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url("${import.meta.env.BASE_URL ?? '/'}images/clean img.webp")` }}
      >

        <div className="container-custom relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="bg-accent-yellow text-brand-900 font-bold px-3 py-1 text-sm rounded uppercase tracking-wider">
              Welcome to Hindusthan Supervision
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
              Professional Security & <br />Facility Management Services
            </h1>
            <p className="text-lg text-gray-200 max-w-lg">
              We provide expert security guards, housekeeping staff, and comprehensive facility solutions tailored to your needs.
            </p>
            <div className="flex gap-4">
              <Link to="/contact" className="btn-primary">
                Contact Us
              </Link>
              <Link to="/services" className="bg-white text-primary-blue font-bold py-2 px-6 rounded-md hover:bg-gray-100 transition-all uppercase">
                Our Services
              </Link>
            </div>
          </div>

          <div className="bg-white text-dark-text p-8 rounded-lg shadow-2xl max-w-md ml-auto">
            <h3 className="text-2xl font-bold text-primary-blue mb-4 text-center">Request A Free Estimate</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full px-4 py-3 border border-gray-300 rounded focus:border-primary-green focus:outline-none"
                required
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full px-4 py-3 border border-gray-300 rounded focus:border-primary-green focus:outline-none"
                required
              />
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded focus:border-primary-green focus:outline-none text-gray-500"
              >
                <option>Security Services</option>
                <option>Housekeeping</option>
                <option>Manpower Supply</option>
              </select>
              <button type="submit" className="w-full bg-primary-green text-white font-bold py-3 rounded hover:bg-opacity-90 transition-colors uppercase">
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-blue mb-3">Our Outstanding Services</h2>
            <div className="h-1 w-20 bg-primary-green mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer a wide range of customized services to meet your residential, corporate, and industrial needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: 'Security Services', desc: 'Manned guarding, armed guards, and electronic surveillance for all sectors.' },
              { icon: Users, title: 'Manpower Supply', desc: 'Skilled, semi-skilled, and unskilled labor for various industrial requirements.' },
              { icon: CheckCircle, title: 'Housekeeping', desc: 'Professional cleaning services for offices, malls, and residential complexes.' },
              { icon: Award, title: 'Facility Management', desc: 'Integrated facility management including electrical, plumbing, and maintenance.' },
              { icon: Clock, title: 'Event Security', desc: 'Crowd control, VIP protection, and traffic management for events.' },
              { icon: ThumbsUp, title: 'Risk Advisory', desc: 'Expert consultation on security audits and risk assessment.' },
            ].map((service, idx) => (
              <div key={idx} className="group p-6 border rounded-lg hover:shadow-xl transition-all duration-300 text-center hover:border-primary-green">
                <div className="w-16 h-16 mx-auto bg-gray-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary-blue transition-colors">
                  <service.icon className="text-primary-blue group-hover:text-white transition-colors" size={32} />
                </div>
                <h3 className="text-xl font-bold text-dark-text mb-3 group-hover:text-primary-blue">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.desc}</p>
                <Link to="/services" className="text-primary-green font-bold text-sm uppercase hover:underline">Read More</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Affordable Pricing Plan - Added per request */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-blue mb-2">Affordable Pricing Plan</h2>
            <p className="text-gray-500">Complete various tasks, multiplied by the prevailing wage for maids and house cleaners in a specific area.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {/* Card 1: Home Cleaning */}
            <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition hover:-translate-y-2 duration-300 relative group">
              <div className="bg-primary-blue h-40 relative flex items-center justify-center">
                <div className="text-center text-white z-10">
                  <div className="flex items-center justify-center gap-1">
                    <span className="text-5xl font-bold">₹2500</span>
                    <span className="text-xs opacity-80 mt-4">/ Onwards</span>
                  </div>
                </div>
                {/* Curve decoration */}
                <div className="absolute bottom-0 left-0 right-0 h-10 bg-white rounded-t-[50%] scale-x-150 translate-y-1/2"></div>
              </div>
              <div className="relative z-10 -mt-5 text-center mb-8">
                <span className="bg-blue-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-md inline-block">
                  Home Cleaning
                </span>
              </div>

              <div className="px-8 pb-8 text-center space-y-4 text-sm text-gray-600">
                <p className="border-b border-gray-100 pb-2">Studio Apartment (Upto 400 Sqft) - ₹2500/-</p>
                <p className="border-b border-gray-100 pb-2">1 BHK (401 to 600 Sqft) - ₹3800/- *</p>
                <p className="border-b border-gray-100 pb-2">2 BHK (601 to 1000 Sqft) - ₹4500/- *</p>
                <p className="border-b border-gray-100 pb-2">3 BHK (1001 to 1500 Sqft) - ₹6000/- *</p>
                <p className="border-b border-gray-100 pb-2">4 BHK (1501 to 2100 Sqft) - ₹7000/- *</p>
                <p className="border-b border-gray-100 pb-2">5 BHK (2101 to 2500 Sqft) - ₹8000/- *</p>
                <p className="border-b border-gray-100 pb-2">Villa (3000 to 4000 Sqft) - ₹11999/- *</p>
                <p>Villa (4000 to 5000 Sqft) - ₹14999/- *</p>
              </div>
              <div className="p-8 pt-0 text-center">
                <Link to="/contact" className="inline-block bg-accent-yellow text-brand-950 font-bold py-3 px-8 rounded hover:bg-opacity-90 transition-all uppercase text-sm">
                  Book Now &gt;
                </Link>
              </div>
            </div>

            {/* Card 2: Security Services - Highlighted */}
            <div className="bg-white rounded-lg overflow-hidden shadow-2xl transform scale-105 z-10 relative group border-t-4 border-accent-yellow">
              <div className="bg-blue-500 h-40 relative flex items-center justify-center">
                <div className="text-center text-white z-10">
                  <div className="flex items-center justify-center gap-1">
                    <span className="text-5xl font-bold">Call</span>
                    <span className="text-xs opacity-80 mt-4">/ For Quote</span>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-10 bg-white rounded-t-[50%] scale-x-150 translate-y-1/2"></div>
              </div>
              <div className="relative z-10 -mt-5 text-center mb-8">
                <span className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-md inline-block">
                  Security Services
                </span>
              </div>

              <div className="px-8 pb-8 text-center space-y-4 text-sm text-gray-600">
                <p className="border-b border-gray-100 pb-2">Unarmed Guard (8 Hours) - Call for Quote</p>
                <p className="border-b border-gray-100 pb-2">Unarmed Guard (12 Hours) - Call for Quote</p>
                <p className="border-b border-gray-100 pb-2">Armed Security (8 Hours) - Call for Quote</p>
                <p className="border-b border-gray-100 pb-2">Armed Security (12 Hours) - Call for Quote</p>
                <p className="border-b border-gray-100 pb-2">Event Bouncer (Per Shift) - Call for Quote</p>
                <p className="border-b border-gray-100 pb-2">Personal Bodyguard - Call for Quote</p>
              </div>
              <div className="p-8 pt-0 text-center">
                <Link to="/contact" className="inline-block bg-accent-yellow text-brand-950 font-bold py-3 px-8 rounded hover:bg-opacity-90 transition-all uppercase text-sm">
                  Book Now &gt;
                </Link>
              </div>
            </div>

            {/* Card 3: Carpet Cleaning */}
            <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition hover:-translate-y-2 duration-300 relative group">
              <div className="bg-primary-blue h-40 relative flex items-center justify-center">
                <div className="text-center text-white z-10">
                  <div className="flex items-center justify-center gap-1">
                    <span className="text-5xl font-bold">₹777</span>
                    <span className="text-xs opacity-80 mt-4">/ Onwards</span>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-10 bg-white rounded-t-[50%] scale-x-150 translate-y-1/2"></div>
              </div>
              <div className="relative z-10 -mt-5 text-center mb-8">
                <span className="bg-blue-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-md inline-block">
                  Carpet Cleaning
                </span>
              </div>

              <div className="px-8 pb-8 text-center space-y-4 text-sm text-gray-600">
                <p className="border-b border-gray-100 pb-2">House / Home Carpets</p>
                <p className="border-b border-gray-100 pb-2">Small Carpet(15 to 70 sq/ft) - ₹777/*</p>
                <p className="border-b border-gray-100 pb-2">Middle Carpet(70 to 150 sq/ft) - ₹1099/*</p>
                <p className="border-b border-gray-100 pb-2">Large Carpet(150 to 250 sq/ft) - ₹1299</p>
                <p className="border-b border-gray-100 pb-2 font-bold text-primary-blue mt-4">Office Carpet</p>
                <p className="border-b border-gray-100 pb-2">Area-250 to 500 sq/ft - ₹12/- per sq/ft</p>
                <p className="border-b border-gray-100 pb-2">Area-500 to 1000 sq/ft - ₹9/- per sq/ft</p>
                <p>Area-1000 to 2000 sq/ft - ₹7/- per sq/ft</p>
              </div>
              <div className="p-8 pt-0 text-center">
                <Link to="/contact" className="inline-block bg-accent-yellow text-brand-950 font-bold py-3 px-8 rounded hover:bg-opacity-90 transition-all uppercase text-sm">
                  Book Now &gt;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-primary-blue mb-4">Why Choose Us?</h2>
            <div className="h-1 w-20 bg-primary-green mb-6"></div>
            <p className="text-gray-600 mb-8 leading-relaxed">
              We are committed to delivering excellence through our trained professionals and customer-centric approach. Here is why we are the preferred choice in Vijayawada.
            </p>

            <div className="space-y-6">
              {[
                { title: 'Expert Team', desc: 'Highly trained and verified security personnel.' },
                { title: 'Affordable Services', desc: 'Cost-effective solutions without compromising quality.' },
                { title: '24/7 Support', desc: 'Round-the-clock control room and rapid response team.' },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle className="text-primary-green" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-dark-text">{item.title}</h4>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            {/* Placeholder for an image or graphic */}
            <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-primary-green">
              <h3 className="text-xl font-bold text-primary-blue mb-4">Our Stats</h3>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="p-4 bg-gray-50 rounded">
                  <div className="text-3xl font-bold text-primary-green">120+</div>
                  <div className="text-sm text-gray-500">Clients</div>
                </div>
                <div className="p-4 bg-gray-50 rounded">
                  <div className="text-3xl font-bold text-primary-green">500+</div>
                  <div className="text-sm text-gray-500">Employees</div>
                </div>
                <div className="p-4 bg-gray-50 rounded">
                  <div className="text-3xl font-bold text-primary-green">8+</div>
                  <div className="text-sm text-gray-500">Years</div>
                </div>
                <div className="p-4 bg-gray-50 rounded">
                  <div className="text-3xl font-bold text-primary-green">100%</div>
                  <div className="text-sm text-gray-500">Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-primary-blue text-white text-center">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-4">Ready to secure your premises?</h2>
          <p className="text-xl opacity-90 mb-8">Get a customized security plan for your business or home.</p>
          <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
            Get a Quote <ChevronRight size={20} />
          </Link>
        </div>
      </section>
    </>
  );
}
