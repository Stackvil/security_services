import { SectionShell } from '../components/Sections/SectionShell';
import { SEO } from '../components/SEO';

export function TermsOfService() {
    return (
        <main className="pt-24">
            <SEO
                title="Terms of Service - Hindusthan Supervision"
                description="Terms of Service for Hindusthan Supervision Security Services. Please read our terms carefully."
                keywords="terms of service, legal, security services terms"
            />
            <SectionShell
                eyebrow="Legal"
                title="Terms of Service"
                subtitle="By using our services, you agree to the following terms and conditions."
            >
                <div className="prose prose-slate max-w-none text-slate-600">
                    <p>Last updated: January 23, 2026</p>

                    <h2 className="text-slate-900">1. Acceptance of Terms</h2>
                    <p>
                        By accessing or using the services provided by Hindusthan Supervision, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                    </p>

                    <h2 className="text-slate-900">2. Services</h2>
                    <p>
                        Hindusthan Supervision provides security guarding, facility management, and hygiene services. The specific scope of services will be defined in individual service agreements with our clients.
                    </p>

                    <h2 className="text-slate-900">3. User Responsibilities</h2>
                    <p>
                        Users of our website and services agree to provide accurate information and to use our services only for lawful purposes. You are responsible for maintaining the confidentiality of any account information.
                    </p>

                    <h2 className="text-slate-900">4. Intellectual Property</h2>
                    <p>
                        All content on this website, including text, graphics, logos, and images, is the property of Hindusthan Supervision and is protected by copyright and other intellectual property laws.
                    </p>

                    <h2 className="text-slate-900">5. Limitation of Liability</h2>
                    <p>
                        Hindusthan Supervision shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of our services.
                    </p>

                    <h2 className="text-slate-900">6. Governing Law</h2>
                    <p>
                        These terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law principles.
                    </p>

                    <h2 className="text-slate-900">7. Changes to Terms</h2>
                    <p>
                        We reserve the right to modify these terms at any time. We will notify users of any changes by posting the new terms on this page.
                    </p>

                    <h2 className="text-slate-900">8. Contact Information</h2>
                    <p>
                        If you have any questions about these Terms of Service, please contact us at info@hindusthansecurityjobs.com.
                    </p>
                </div>
            </SectionShell>
        </main>
    );
}
