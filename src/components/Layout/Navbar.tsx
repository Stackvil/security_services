import { Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const logoSrc = `${import.meta.env.BASE_URL ?? '/'}images/crk_logo.png`;

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About' },
  { to: '/solutions', label: 'Solutions' },
  { to: '/testimonials', label: 'Testimonials' },
  { to: '/contact', label: 'Contact' }
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 lg:px-0">
        <Link to="/" className="flex items-center gap-2">
          <span className="inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-2xl bg-white shadow-lg shadow-brand-500/40">
            <img
              src={logoSrc}
              alt="CRK Security & Risk Management Advisory"
              className="h-full w-full object-contain"
            />
          </span>
          <div className="leading-tight">
            <p className="text-sm font-semibold tracking-[0.18em] text-brand-600">
              CRK
            </p>
            <p className="text-sm font-bold text-slate-900">
              Security Services
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 lg:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                [
                  'relative transition-colors hover:text-slate-900',
                  isActive ? 'text-slate-900' : ''
                ].join(' ')
              }
            >
              {({ isActive }) => (
                <>
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-brand-500"
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <p className="hidden text-xs font-medium text-slate-500 md:block">
            24/7 Control Room
            <span className="block text-sm font-semibold text-slate-900">
              +91-98765-43210
            </span>
          </p>
          <Link
            to="/contact"
            className="hidden rounded-full bg-brand-500 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-white shadow-lg shadow-brand-500/40 transition hover:bg-brand-400 sm:block"
          >
            Contact Us
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-600 transition hover:bg-slate-100 lg:hidden"
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
            className="border-t border-slate-200 bg-white lg:hidden"
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
                          ? 'bg-brand-50 text-brand-600'
                          : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                      ].join(' ')
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
                <Link
                  to="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="mt-3 block rounded-lg bg-brand-500 px-4 py-2 text-center text-sm font-semibold uppercase tracking-[0.16em] text-white shadow-lg shadow-brand-500/40 transition hover:bg-brand-400"
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


