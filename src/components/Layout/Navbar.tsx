import { Link, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

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
            className="rounded-full bg-brand-500 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-white shadow-lg shadow-brand-500/40 transition hover:bg-brand-400"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  );
}


