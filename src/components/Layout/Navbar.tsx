import { Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const logoSrc = `${import.meta.env.BASE_URL ?? '/'}images/crk_logo.png`;

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About' },
  { to: '/solutions', label: 'Solutions' },
  { to: '/careers', label: 'Careers' },
  { to: '/testimonials', label: 'Testimonials' },
  { to: '/contact', label: 'Contact' }
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-brand-950/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 lg:px-0">
        <Link to="/" className="flex items-center gap-2">
          <span className="inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-2xl bg-white shadow-lg shadow-black/20">
            <img
              src={logoSrc}
              alt="Hindusthan Supervision Security & Risk Management Advisory"
              className="h-full w-full object-contain"
            />
          </span>
          <div className="leading-tight">
            <p className="text-sm font-semibold tracking-[0.18em] text-accent-400">
              Hindusthan Supervision
            </p>
            <p className="text-sm font-bold text-white">
              Security Services
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-300 lg:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                [
                  'relative transition-colors hover:text-white',
                  isActive ? 'text-white' : ''
                ].join(' ')
              }
            >
              {({ isActive }) => (
                <>
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-accent-500"
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <p className="hidden text-xs font-medium text-slate-400 md:block">
            24/7 Control Room
            <span className="block text-sm font-semibold text-white transition-colors">
              +91 90595 01501
            </span>
          </p>
          <Link
            to="/contact"
            className="hidden rounded-full bg-accent-500 px-5 py-2.5 text-xs font-bold uppercase tracking-[0.16em] text-brand-950 shadow-lg shadow-accent-500/20 transition hover:bg-accent-400 sm:block"
          >
            Contact Us
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-300 transition hover:bg-white/10 lg:hidden"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="border-t border-white/10 bg-brand-950 lg:hidden"
          >
            <nav className="mx-auto max-w-6xl px-4 py-4">
              <div className="space-y-1">
                {navItems.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    onClick={() => setMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      [
                        'block rounded-lg px-4 py-2 text-sm font-medium transition',
                        isActive
                          ? 'bg-white/10 text-white'
                          : 'text-slate-400 hover:bg-white/5 hover:text-white'
                      ].join(' ')
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
                <Link
                  to="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="mt-3 block rounded-lg bg-accent-500 px-4 py-2 text-center text-sm font-bold uppercase tracking-[0.16em] text-brand-950 shadow-lg shadow-accent-500/20 transition hover:bg-accent-400"
                >
                  Contact Us
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}


