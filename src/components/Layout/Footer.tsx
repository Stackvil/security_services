import { Link } from 'react-router-dom';

const logoSrc = `${import.meta.env.BASE_URL ?? '/'}images/crk_logo.png`;

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-brand-950 text-slate-300">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-10 lg:px-0 lg:py-14">
        <div className="grid gap-10 md:grid-cols-[2fr,1fr,1fr]">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <span className="inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-2xl bg-white shadow-lg shadow-black/20">
                <img
                  src={logoSrc}
                  alt="Hindusthan Supervision Security & Risk Management Advisory"
                  className="h-full w-full object-contain"
                />
              </span>
              <div className="leading-tight">
                <p className="text-xs font-semibold tracking-[0.18em] text-accent-400">
                  Hindusthan Supervision
                </p>
                <p className="text-sm font-bold text-white">
                  Security Services
                </p>
              </div>
            </div>
            <p className="max-w-md text-sm text-slate-400">
              Professional guarding, electronic surveillance, and bespoke
              security solutions for retail, corporate, industrial and premium
              residential clients across India.
            </p>
            <p className="mt-4 text-xs text-slate-500">
              © {new Date().getFullYear()} Hindusthan Supervision Security Services. All rights
              reserved.
            </p>
          </div>

          <div className="text-sm">
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-white">
              Quick Links
            </h4>
            <ul className="space-y-1.5 text-slate-400">
              <li>
                <Link to="/services" className="hover:text-accent-400 transition-colors">
                  Guarding Services
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="hover:text-accent-400 transition-colors">
                  Security Solutions
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-accent-400 transition-colors">
                  About Hindusthan Supervision
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-accent-400 transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          <div className="text-sm">
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-white">
              24/7 Command Centre
            </h4>
            <p className="text-slate-400">
              Phone:{' '}
              <a href="tel:+919059501501" className="font-semibold text-slate-200 hover:text-accent-400 transition-colors">
                +91 90595 01501
              </a>
            </p>
            <p className="mt-1 text-slate-400">
              Email:{' '}
              <a
                href="mailto:control@crksecurity.in"
                className="font-semibold text-slate-200 hover:text-accent-400 transition-colors"
              >
                control@crksecurity.in
              </a>
            </p>
            <p className="mt-3 max-w-xs text-xs text-slate-500">
              CRK House, 7th Cross, Business District, Bengaluru, Karnataka.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}


