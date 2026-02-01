import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, Facebook, Instagram, Menu, X, ChevronDown } from 'lucide-react';

const logoSrc = `${import.meta.env.BASE_URL ?? '/'}images/logo.jpg.jpeg`;

const navItems = [
  { to: '/', label: 'ABOUT US' },
  { to: '/services', label: 'SERVICES' }, // Could be a dropdown
  { to: '/gallery', label: 'TRAINING' },
  { to: '/blog', label: 'BLOG' },
  { to: '/contact', label: 'CONTACT US' },
  { to: '/careers', label: 'CAREER' }, // Added as per user request
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary-blue text-white py-2 text-sm hidden lg:block">
        <div className="container-custom flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href="tel:+919059501501" className="flex items-center gap-2 hover:text-accent-yellow transition-colors">
              <Phone size={16} fill="currentColor" />
              <span>+91 90595 01501</span>
            </a>
            <a href="mailto:info@hindusthansecurityjobs.com" className="flex items-center gap-2 hover:text-accent-yellow transition-colors">
              <Mail size={16} />
              <span>info@hindusthansecurityjobs.com</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="opacity-80">Follow Us:</span>
            <div className="flex gap-3">
              <a href="#" className="hover:text-accent-yellow transition-colors"><Facebook size={16} /></a>
              <a href="#" className="hover:text-accent-yellow transition-colors"><Instagram size={16} /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-white py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center gap-8">

          {/* Left Side: Side Logo & Branding */}
          <div className="flex-shrink-0 hidden md:flex items-center gap-4 lg:gap-6 group">
            <img
              src={`${import.meta.env.BASE_URL ?? '/'}images/sidelogo.png`}
              alt="Side Logo"
              className="h-12 lg:h-20 w-auto object-contain transition-transform group-hover:scale-105"
            />
            <div className="flex flex-col justify-center">
              <span className="text-primary-blue font-black text-xl lg:text-4xl tracking-tighter leading-none">HINDUSTAN</span>
              <span className="text-primary-green font-bold text-[10px] lg:text-sm tracking-[0.2em] uppercase opacity-90 mt-1">Security Services</span>
            </div>
          </div>

          <div className="hidden lg:flex flex-grow justify-center items-center px-4">
            {/* Desktop Menu */}
            <nav className="flex items-center gap-6 xl:gap-8">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `text-[11px] font-black uppercase tracking-[0.15em] transition-all hover:text-primary-green relative whitespace-nowrap ${isActive ? 'text-primary-green' : 'text-slate-600'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {item.label}
                      {isActive && <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary-green rounded-full"></span>}
                    </>
                  )}
                </NavLink>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-6 flex-shrink-0">
            {/* Branding - Strictly on the Right */}
            <Link to="/" className="flex items-center group">
              <img src={logoSrc} alt="Logo" className="h-12 md:h-16 lg:h-20 w-auto object-contain transition-transform group-hover:scale-105" />
            </Link>

            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden text-primary-blue hover:text-primary-green transition-colors ml-2"
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/50 z-50 lg:hidden"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed inset-y-0 right-0 w-[280px] bg-white z-50 shadow-2xl lg:hidden"
            >
              <div className="p-4 flex justify-between items-center border-b">
                <span className="font-bold text-primary-blue">MENU</span>
                <button onClick={() => setMobileMenuOpen(false)} className="text-red-500">
                  <X size={24} />
                </button>
              </div>
              <nav className="p-4 flex flex-col gap-2">
                {navItems.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    onClick={() => setMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `block py-3 px-4 rounded-lg font-medium transition-colors ${isActive ? 'bg-primary-green/10 text-primary-green' : 'text-dark-text hover:bg-gray-50'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
                <Link
                  to="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="mt-4 block text-center bg-accent-yellow text-white py-3 rounded font-bold uppercase"
                >
                  Get a Quote
                </Link>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
