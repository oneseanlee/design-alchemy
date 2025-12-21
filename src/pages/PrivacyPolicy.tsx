import { Link } from 'react-router-dom';
import consumerLogo from '@/assets/consumer-logo.png';

export default function PrivacyPolicy() {
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
                <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
                <p className="text-gray-600 mb-8">Last Updated: December 21, 2026</p>

                <div className="prose prose-gray max-w-none space-y-8">
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
                        <p className="text-gray-600 leading-relaxed">
                            Consumer Advocate Resolution Center ("C.A.R.C.," "we," "us," or "our") is committed to protecting your privacy. 
                            This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our 
                            website and use our credit report analysis services.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Information We Collect</h2>
                        <h3 className="text-xl font-medium text-gray-800 mb-3">Personal Information</h3>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            We may collect personal information that you voluntarily provide to us, including:
                        </p>
                        <ul className="list-disc pl-6 text-gray-600 space-y-2">
                            <li>Name and email address</li>
                            <li>Phone number</li>
                            <li>Credit report documents (processed securely and not stored permanently)</li>
                            <li>Communication preferences</li>
                        </ul>

                        <h3 className="text-xl font-medium text-gray-800 mb-3 mt-6">Automatically Collected Information</h3>
                        <p className="text-gray-600 leading-relaxed">
                            When you access our website, we may automatically collect certain information including your IP address, 
                            browser type, operating system, access times, and pages viewed.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. How We Use Your Information</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            We use the information we collect to:
                        </p>
                        <ul className="list-disc pl-6 text-gray-600 space-y-2">
                            <li>Provide our credit report analysis services</li>
                            <li>Identify potential FCRA violations on your behalf</li>
                            <li>Communicate with you about our services</li>
                            <li>Connect you with legal resources when applicable</li>
                            <li>Improve our website and services</li>
                            <li>Comply with legal obligations</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Data Security</h2>
                        <p className="text-gray-600 leading-relaxed">
                            We implement 256-bit encryption and industry-standard security measures to protect your personal information. 
                            Credit reports uploaded for analysis are processed securely and are not stored permanently on our servers. 
                            Files are automatically deleted after analysis is complete.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Information Sharing</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            We do not sell, trade, or rent your personal information to third parties. We may share your information with:
                        </p>
                        <ul className="list-disc pl-6 text-gray-600 space-y-2">
                            <li>Partnered law firms for case review (only with your consent)</li>
                            <li>Service providers who assist in operating our website</li>
                            <li>Legal authorities when required by law</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Your Rights</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            You have the right to:
                        </p>
                        <ul className="list-disc pl-6 text-gray-600 space-y-2">
                            <li>Access the personal information we hold about you</li>
                            <li>Request correction of inaccurate information</li>
                            <li>Request deletion of your personal information</li>
                            <li>Opt-out of marketing communications</li>
                            <li>Withdraw consent at any time</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Cookies and Tracking</h2>
                        <p className="text-gray-600 leading-relaxed">
                            We may use cookies and similar tracking technologies to enhance your experience on our website. 
                            You can control cookie preferences through your browser settings.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Children's Privacy</h2>
                        <p className="text-gray-600 leading-relaxed">
                            Our services are not intended for individuals under 18 years of age. We do not knowingly collect 
                            personal information from children.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Changes to This Policy</h2>
                        <p className="text-gray-600 leading-relaxed">
                            We may update this Privacy Policy from time to time. We will notify you of any changes by posting 
                            the new Privacy Policy on this page and updating the "Last Updated" date.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Contact Us</h2>
                        <p className="text-gray-600 leading-relaxed">
                            If you have questions about this Privacy Policy or our practices, please contact us at:
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
