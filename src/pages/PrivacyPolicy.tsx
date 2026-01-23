import { SectionShell } from '../components/Sections/SectionShell';
import { SEO } from '../components/SEO';

export function PrivacyPolicy() {
    return (
        <main className="pt-24">
            <SEO
                title="Privacy Policy - Hindusthan Supervision"
                description="Privacy Policy for Hindusthan Supervision Security Services. We value your privacy and protect your data."
                keywords="privacy policy, security services privacy, data protection"
            />
            <SectionShell
                eyebrow="Legal"
                title="Privacy Policy"
                subtitle="Your privacy is important to us. This policy outlines how we handle your personal information."
            >
                <div className="prose prose-slate max-w-none text-slate-600">
                    <p>Last updated: January 23, 2026</p>

                    <h2 className="text-slate-900">1. Information We Collect</h2>
                    <p>
                        We collect information you provide directly to us when you request a quote, contact us, or use our services. This may include your name, email address, phone number, and details about your security requirements.
                    </p>

                    <h2 className="text-slate-900">2. How We Use Your Information</h2>
                    <p>
                        We use the information we collect to:
                    </p>
                    <ul className="list-disc pl-5">
                        <li>Provide, maintain, and improve our services.</li>
                        <li>Respond to your comments, questions, and requests.</li>
                        <li>Send you technical notices, updates, and security alerts.</li>
                        <li>Communicate with you about services, offers, and events.</li>
                    </ul>

                    <h2 className="text-slate-900">3. Information Sharing</h2>
                    <p>
                        We do not share your personal information with third parties except as described in this policy or with your consent. We may share information with vendors and service providers who perform services on our behalf.
                    </p>

                    <h2 className="text-slate-900">4. Data Security</h2>
                    <p>
                        We take reasonable measures to help protect information about you from loss, theft, misuse, and unauthorized access, disclosure, alteration, and destruction.
                    </p>

                    <h2 className="text-slate-900">5. Contact Us</h2>
                    <p>
                        If you have any questions about this Privacy Policy, please contact us at info@hindusthansupervision.com.
                    </p>
                </div>
            </SectionShell>
        </main>
    );
}
