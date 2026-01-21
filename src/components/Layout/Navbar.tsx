import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, Facebook, Twitter, Instagram, Linkedin, Menu, X, ChevronDown } from 'lucide-react';

const logoSrc = `${import.meta.env.BASE_URL ?? '/'}images/logo.jpg.jpeg`;

const navItems = [
  { to: '/', label: 'HOME' },
  { to: '/about', label: 'ABOUT US' },
  { to: '/services', label: 'SERVICES' }, // Could be a dropdown
  { to: '/gallery', label: 'GALLERY' },
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
            <a href="mailto:info@safaiwale.in" className="flex items-center gap-2 hover:text-accent-yellow transition-colors">
              <Mail size={16} />
              <span>info@securityservices.com</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="opacity-80">Follow Us:</span>
            <div className="flex gap-3">
              <a href="#" className="hover:text-accent-yellow transition-colors"><Facebook size={16} /></a>
              <a href="#" className="hover:text-accent-yellow transition-colors"><Twitter size={16} /></a>
              <a href="#" className="hover:text-accent-yellow transition-colors"><Instagram size={16} /></a>
              <a href="#" className="hover:text-accent-yellow transition-colors"><Linkedin size={16} /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-white py-4'}`}>
        <div className="w-full px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Logo */}
          {/* Logo */}
          <Link to="/" className="flex items-center gap-4 group">
            <img src={logoSrc} alt="Logo" className="h-16 w-auto object-contain transition-transform group-hover:scale-105" />
            <div className="leading-tight hidden sm:block flex flex-col justify-center">
              <p className="text-primary-blue font-bold text-xl tracking-wide">HINDUSTHAN SUPERVISION</p>
              <p className="text-primary-green font-semibold text-sm tracking-[0.2em] uppercase">Security Services</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `text-sm font-bold uppercase transition-colors hover:text-primary-green ${isActive ? 'text-primary-green' : 'text-dark-text'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Call to Action & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link
              to="/contact"
              className="hidden lg:inline-block bg-accent-yellow text-white px-6 py-2.5 rounded font-bold uppercase text-sm hover:bg-black transition-colors"
            >
              Get a Quote
            </Link>

            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden text-primary-blue hover:text-primary-green transition-colors"
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
