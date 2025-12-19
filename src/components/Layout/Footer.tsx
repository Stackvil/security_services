import { Link } from 'react-router-dom';

const logoSrc = `${import.meta.env.BASE_URL ?? '/'}images/crk_logo.png`;

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-10 lg:px-0 lg:py-14">
        <div className="grid gap-10 md:grid-cols-[2fr,1fr,1fr]">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <span className="inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-2xl bg-white shadow-lg shadow-brand-500/40">
                <img
                  src={logoSrc}
                  alt="CRK Security & Risk Management Advisory"
                  className="h-full w-full object-contain"
                />
              </span>
              <div className="leading-tight">
                <p className="text-xs font-semibold tracking-[0.18em] text-brand-600">
                  CRK
                </p>
                <p className="text-sm font-bold text-slate-900">
                  Security Services
                </p>
              </div>
            </div>
            <p className="max-w-md text-sm text-slate-500">
              Professional guarding, electronic surveillance, and bespoke
              security solutions for retail, corporate, industrial and premium
              residential clients across India.
            </p>
            <p className="mt-4 text-xs text-slate-400">
              © {new Date().getFullYear()} CRK Security Services. All rights
              reserved.
            </p>
          </div>

          <div className="text-sm">
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Quick Links
            </h4>
            <ul className="space-y-1.5 text-slate-600">
              <li>
                <Link to="/services" className="hover:text-slate-50">
                  Guarding Services
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="hover:text-slate-50">
                  Security Solutions
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-slate-50">
                  About CRK
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-slate-50">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          <div className="text-sm">
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              24/7 Command Centre
            </h4>
            <p className="text-slate-600">
              Phone:{' '}
              <a href="tel:+919876543210" className="font-semibold">
                +91-98765-43210
              </a>
            </p>
            <p className="mt-1 text-slate-300">
              Email:{' '}
              <a
                href="mailto:control@crksecurity.in"
                className="font-semibold"
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


