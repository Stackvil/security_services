import { SectionShell } from '../components/Sections/SectionShell';


import { SEO } from '../components/SEO';

export function About() {
  return (
    <main className="pt-12">
      <SEO
        title="About Us - Security Experts in Vijayawada"
        description="Providing professional security guard services and risk management advisory in Vijayawada since 2012. 350+ deployed guards."
        keywords="about security company, security experience Vijayawada, manned guarding experts, risk management advisory"
      />
      <SectionShell
        eyebrow="Leadership & Expertise"
        title="Backed by Discipline, Driven by Excellence."
        subtitle="Hindusthan Security Services is led by a team of ex-service professionals dedicated to bringing military-grade precision to the private security and facility management sector."
      >
        <div className="space-y-8">
          {/* Leadership Cards - Horizontal Layout */}
          <div className="grid gap-8 lg:grid-cols-2 max-w-6xl mx-auto">
            <div className="flex items-center gap-6 p-8 bg-slate-50 rounded-3xl border border-slate-100 shadow-sm transition-all hover:shadow-md hover:bg-white group">
              <div className="w-24 h-24 md:w-36 md:h-36 rounded-full overflow-hidden border-4 border-white shadow-xl bg-slate-100 flex-shrink-0 transition-transform group-hover:scale-105">
                <img
                  src={`${import.meta.env.BASE_URL ?? '/'}images/85.png`}
                  alt="B. Dharma Rao"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-black text-slate-900 leading-tight">B. DHARMA RAO</h3>
                <p className="text-[11px] font-bold text-primary-blue uppercase tracking-[0.25em] mt-3 mb-4 opacity-70">Ex. Serviceman</p>
                <div className="h-1 w-12 bg-primary-green rounded-full opacity-60"></div>
              </div>
            </div>

            <div className="flex items-center gap-6 p-8 bg-slate-50 rounded-3xl border border-slate-100 shadow-sm transition-all hover:shadow-md hover:bg-white group">
              <div className="w-24 h-24 md:w-36 md:h-36 rounded-full overflow-hidden border-4 border-white shadow-xl bg-slate-100 flex-shrink-0 transition-transform group-hover:scale-105">
                <img
                  src={`${import.meta.env.BASE_URL ?? '/'}images/86.png`}
                  alt="Y. Rangarao"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-black text-slate-900 leading-tight">Y. RANGARAO</h3>
                <p className="text-[11px] font-bold text-primary-blue uppercase tracking-[0.25em] mt-3 mb-4 opacity-70">Ex. Serviceman</p>
                <div className="h-1 w-12 bg-primary-green rounded-full opacity-60"></div>
              </div>
            </div>
          </div>

          {/* Main Description - Now below */}
          <div className="max-w-4xl mx-auto space-y-8 text-slate-600">
            <div className="space-y-4">
              <p className="text-3xl font-black text-slate-900 leading-[1.15] tracking-tight">
                An ex-serviceman organisation that provides <span className="text-primary-blue">unrivalled experience</span> in protecting your business.
              </p>
              <p className="text-xl leading-relaxed opacity-80">
                Hindusthan Security Services is a professionally managed organization backed by highly qualified ex-service professionals. Our operations are driven by military discipline, strong ethics, and practical field experience.
              </p>
              <p className="text-base leading-relaxed opacity-70">
                We are an <span className="font-bold text-slate-900">ISO 9001:2008 compliant company</span>, committed to delivering international standards of security and facility management.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 py-8 border-y border-slate-100">
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-primary-green">
                  <div className="w-10 h-[2px] bg-current opacity-40"></div>
                  <span className="font-black uppercase tracking-[0.3em] text-[10px]">Rigorous Vetting</span>
                </div>
                <p className="text-sm leading-relaxed">Our pre-employment procedure involves a <span className="font-semibold text-slate-900">thorough background check</span> on all employees to ensure no criminal history, maintaining the highest levels of trust and integrity.</p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-primary-green">
                  <div className="w-10 h-[2px] bg-current opacity-40"></div>
                  <span className="font-black uppercase tracking-[0.3em] text-[10px]">Quality Management</span>
                </div>
                <p className="text-sm leading-relaxed">We regularly update our Quality Management Systems to ensure customers receive the best services the industry has to offer, infusing quality and productivity in every operation.</p>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm text-center transition-all hover:shadow-lg hover:border-primary-green/20">
                <p className="text-4xl font-black text-primary-blue">100%</p>
                <p className="text-[9px] font-black uppercase tracking-[0.25em] text-slate-400 mt-3">Compliance</p>
              </div>
              <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm text-center transition-all hover:shadow-lg hover:border-primary-blue/20">
                <p className="text-4xl font-black text-primary-blue">Digital</p>
                <p className="text-[9px] font-black uppercase tracking-[0.25em] text-slate-400 mt-3">Tracking</p>
              </div>
              <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm text-center transition-all hover:shadow-lg hover:border-accent-yellow/20">
                <p className="text-4xl font-black text-primary-blue">24/7</p>
                <p className="text-[9px] font-black uppercase tracking-[0.25em] text-slate-400 mt-3">Response</p>
              </div>
              <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm text-center transition-all hover:shadow-lg hover:border-primary-green/20">
                <p className="text-4xl font-black text-primary-blue">Ex-SM</p>
                <p className="text-[9px] font-black uppercase tracking-[0.25em] text-slate-400 mt-3">Managed</p>
              </div>
            </div>
          </div>
        </div>
      </SectionShell>

      {/* Compliance Transition Section */}
      <section className="pb-24 pt-8">
        <div className="container-custom">
          <div className="bg-slate-900 rounded-[3rem] p-12 md:p-16 relative overflow-hidden group shadow-2xl">
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
              <div className="max-w-xl text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-black text-white mb-6 uppercase tracking-tight leading-none">
                  Compliance is the residue of <span className="text-primary-green">good security.</span>
                </h2>
                <p className="text-slate-400 text-lg font-medium italic opacity-80 leading-relaxed">
                  Explore our exhaustive list of statutory compliances and digital-first operational processes.
                </p>
              </div>
              <a
                href="/compliance"
                className="group/btn relative inline-flex items-center gap-4 bg-white text-primary-blue px-10 py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-xs hover:bg-primary-green hover:text-white transition-all shadow-xl hover:-translate-y-1"
              >
                View Full Compliance
                <div className="w-8 h-[2px] bg-primary-blue group-hover/btn:bg-white transition-colors"></div>
              </a>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32 group-hover:scale-110 transition-transform duration-700"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary-green/10 rounded-full translate-y-24 -translate-x-24 group-hover:scale-110 transition-transform duration-700"></div>
          </div>
        </div>
      </section>
    </main>
  );
}


