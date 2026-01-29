import { Link } from 'react-router-dom';
import { Facebook, Instagram, MapPin, Phone, Mail, ChevronRight } from 'lucide-react';

const logoSrc = `${import.meta.env.BASE_URL ?? '/'}images/logo.jpg.jpeg`;

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1A1A1A] text-gray-300 pt-16 pb-8 border-t-4 border-primary-green">
      <div className="container-custom grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        {/* Column 1: About */}
        <div>
          <div className="mb-6 bg-white p-2 inline-block rounded">
            <img src={logoSrc} alt="Logo" className="h-12 w-auto" />
          </div>
          <p className="text-sm leading-relaxed mb-6 text-gray-400">
            Hindusthan Security & Risk Management Advisory provides top-tier security and facility management services across India.
          </p>
          <div className="flex gap-3">
            <a href="#" className="bg-primary-blue p-2 rounded hover:bg-primary-green transition-colors text-white"><Facebook size={18} /></a>
            <a href="#" className="bg-primary-blue p-2 rounded hover:bg-primary-green transition-colors text-white"><Instagram size={18} /></a>
          </div>
        </div>

        {/* Column 2: Services */}
        <div>
          <h3 className="text-white text-lg font-bold mb-6 relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-1 after:w-12 after:bg-primary-green">
            Our Services
          </h3>
          <ul className="space-y-3">
            <li><Link to="/services" className="flex items-center hover:text-primary-green transition-colors"><ChevronRight size={16} className="text-primary-green mr-2" />Security Services</Link></li>
            <li><Link to="/services" className="flex items-center hover:text-primary-green transition-colors"><ChevronRight size={16} className="text-primary-green mr-2" />Housekeeping</Link></li>
            <li><Link to="/services" className="flex items-center hover:text-primary-green transition-colors"><ChevronRight size={16} className="text-primary-green mr-2" />Manpower Supply</Link></li>
            <li><Link to="/services" className="flex items-center hover:text-primary-green transition-colors"><ChevronRight size={16} className="text-primary-green mr-2" />Facility Management</Link></li>
            <li><Link to="/services" className="flex items-center hover:text-primary-green transition-colors"><ChevronRight size={16} className="text-primary-green mr-2" />Event Security</Link></li>
          </ul>
        </div>

        {/* Column 3: Quick Links */}
        <div>
          <h3 className="text-white text-lg font-bold mb-6 relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-1 after:w-12 after:bg-primary-green">
            Quick Links
          </h3>
          <ul className="space-y-3">
            <li><Link to="/" className="text-slate-400 hover:text-primary-green transition-colors text-sm">About Us</Link></li>
            <li><Link to="/services" className="text-slate-400 hover:text-primary-green transition-colors text-sm">Our Services</Link></li>
            <li><Link to="/gallery" className="text-slate-400 hover:text-primary-green transition-colors text-sm">Training</Link></li>
            <li><Link to="/careers" className="text-slate-400 hover:text-primary-green transition-colors text-sm">Careers</Link></li>
            <li><Link to="/blog" className="text-slate-400 hover:text-primary-green transition-colors text-sm">Blog</Link></li>
            <li><Link to="/contact" className="text-slate-400 hover:text-primary-green transition-colors text-sm">Contact Us</Link></li>
          </ul>
        </div>

        {/* Column 4: Contact Us */}
        <div>
          <h3 className="text-white text-lg font-bold mb-6 relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-1 after:w-12 after:bg-primary-green">
            Contact Us
          </h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <MapPin size={20} className="text-primary-green mt-1 flex-shrink-0" />
              <span className="text-sm">Second Floor, Ramu Enclave, Eluru Rd, Opp. SRR Govt College, Maruthi Nagar, Machavaram, Vijayawada, Andhra Pradesh 520004</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={20} className="text-primary-green flex-shrink-0" />
              <span className="text-sm">+91 90595 01501</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={20} className="text-primary-green flex-shrink-0" />
              <span className="text-sm">info@hindusthansecurityjobs.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800 pt-8 mt-8">
        <div className="container-custom flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>&copy; {currentYear} Hindusthan Security. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
