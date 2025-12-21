import { Link } from 'react-router-dom';
import consumerLogo from '@/assets/consumer-logo.png';

export default function TermsOfService() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-sm">
                <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
                    <Link to="/" className="flex items-center gap-3">
                        <img
                            src={consumerLogo}
                            alt="Consumer Advocate Resolution Center"
                            className="h-16 w-auto"
                        />
                    </Link>
                    <Link to="/">
                        <button className="px-4 py-1.5 text-sm rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 font-medium">
                            Back to Home
                        </button>
                    </Link>
                </div>
            </header>

            {/* Content */}
            <main className="max-w-4xl mx-auto px-6 py-16">
                <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
                <p className="text-gray-600 mb-8">Last Updated: December 21, 2026</p>

                <div className="prose prose-gray max-w-none space-y-8">
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
                        <p className="text-gray-600 leading-relaxed">
                            By accessing and using the Consumer Advocate Resolution Center ("C.A.R.C.") website and services, 
                            you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not 
                            use our services.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Description of Services</h2>
                        <p className="text-gray-600 leading-relaxed">
                            C.A.R.C. provides AI-powered credit report analysis services designed to help consumers identify 
                            potential errors, discrepancies, and Fair Credit Reporting Act (FCRA) violations in their credit reports. 
                            Our services include:
                        </p>
                        <ul className="list-disc pl-6 text-gray-600 space-y-2 mt-4">
                            <li>Credit report analysis and comparison across bureaus</li>
                            <li>Identification of potential FCRA violations</li>
                            <li>Educational resources about consumer credit rights</li>
                            <li>Referrals to legal professionals when applicable</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Not Legal Advice</h2>
                        <p className="text-gray-600 leading-relaxed">
                            The information provided by C.A.R.C. is for educational and informational purposes only and does not 
                            constitute legal advice. Our analysis identifies potential issues for further review by qualified legal 
                            professionals. You should consult with a licensed attorney for legal advice regarding your specific situation.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. User Responsibilities</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            By using our services, you agree to:
                        </p>
                        <ul className="list-disc pl-6 text-gray-600 space-y-2">
                            <li>Provide accurate and complete information</li>
                            <li>Only upload your own credit reports or reports you are authorized to access</li>
                            <li>Use our services for lawful purposes only</li>
                            <li>Not attempt to interfere with or compromise the security of our systems</li>
                            <li>Maintain the confidentiality of your account information</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Intellectual Property</h2>
                        <p className="text-gray-600 leading-relaxed">
                            All content on this website, including text, graphics, logos, and software, is the property of 
                            Consumer Advocate Resolution Center and is protected by intellectual property laws. You may not 
                            reproduce, distribute, or create derivative works without our express written permission.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Limitation of Liability</h2>
                        <p className="text-gray-600 leading-relaxed">
                            To the fullest extent permitted by law, C.A.R.C. shall not be liable for any indirect, incidental, 
                            special, consequential, or punitive damages arising out of or related to your use of our services. 
                            Our total liability shall not exceed the amount you paid for our services, if any.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Disclaimer of Warranties</h2>
                        <p className="text-gray-600 leading-relaxed">
                            Our services are provided "as is" and "as available" without warranties of any kind, either express 
                            or implied. We do not guarantee that our analysis will identify all errors or violations in your 
                            credit reports, or that disputes based on our analysis will be successful.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Indemnification</h2>
                        <p className="text-gray-600 leading-relaxed">
                            You agree to indemnify and hold harmless C.A.R.C., its officers, directors, employees, and agents 
                            from any claims, damages, losses, or expenses arising from your use of our services or violation 
                            of these Terms.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Modifications to Terms</h2>
                        <p className="text-gray-600 leading-relaxed">
                            We reserve the right to modify these Terms of Service at any time. Changes will be effective 
                            immediately upon posting to our website. Your continued use of our services after changes 
                            constitutes acceptance of the modified terms.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Governing Law</h2>
                        <p className="text-gray-600 leading-relaxed">
                            These Terms of Service shall be governed by and construed in accordance with the laws of the 
                            United States, without regard to conflicts of law principles.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Contact Information</h2>
                        <p className="text-gray-600 leading-relaxed">
                            For questions about these Terms of Service, please contact us:
                        </p>
                        <div className="mt-4 p-6 bg-white rounded-xl border border-gray-200">
                            <p className="text-gray-900 font-semibold">Consumer Advocate Resolution Center</p>
                            <p className="text-gray-600">Email: <a href="mailto:Consumeradvocatecenter@gmail.com" className="text-primary hover:underline">Consumeradvocatecenter@gmail.com</a></p>
                            <p className="text-gray-600">Phone: <a href="tel:1-888-817-2272" className="text-primary hover:underline">1-888-817-CARC (2272)</a></p>
                        </div>
                    </section>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-gray-900 text-white">
                <div className="max-w-7xl mx-auto px-6 py-16">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
                        <div className="flex items-center gap-4">
                            <img
                                src={consumerLogo}
                                alt="Consumer Advocate Resolution Center"
                                className="h-16 w-auto brightness-0 invert"
                            />
                        </div>
                        <div className="flex flex-col md:flex-row items-center gap-6">
                            <a href="tel:1-888-817-2272" className="text-lg font-semibold hover:text-primary transition-colors">
                                1-888-817-CARC (2272)
                            </a>
                            <Link to="/analyze">
                                <button className="px-6 py-3 rounded-full bg-primary text-white font-semibold hover:bg-primary/90 transition-all shadow-lg">
                                    Start Free Analysis
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="border-t border-gray-700 pt-8">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-gray-400 text-sm">
                            <p>© 2026 Consumer Advocate Resolution Center. All Rights Reserved.</p>
                            <div className="flex items-center gap-4">
                                <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
                                <Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
                                <Link to="/disclaimer" className="hover:text-white transition-colors">Disclaimer</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
