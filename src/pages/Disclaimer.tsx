import { Link } from 'react-router-dom';
import consumerLogo from '@/assets/consumer-logo.png';

export default function Disclaimer() {
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
                <h1 className="text-4xl font-bold text-gray-900 mb-8">Disclaimer</h1>
                <p className="text-gray-600 mb-8">Last Updated: December 21, 2026</p>

                <div className="prose prose-gray max-w-none space-y-8">
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">General Disclaimer</h2>
                        <p className="text-gray-600 leading-relaxed">
                            The information provided by Consumer Advocate Resolution Center ("C.A.R.C.") on our website and 
                            through our services is for general informational and educational purposes only. All information 
                            is provided in good faith; however, we make no representation or warranty of any kind, express or 
                            implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness 
                            of any information.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Not Legal Advice</h2>
                        <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-4">
                            <p className="text-amber-800 font-medium">
                                Important: C.A.R.C. is not a law firm and does not provide legal advice.
                            </p>
                        </div>
                        <p className="text-gray-600 leading-relaxed">
                            The credit report analysis and information provided by C.A.R.C. should not be construed as legal advice. 
                            Our AI-powered analysis identifies potential errors, discrepancies, and possible Fair Credit Reporting Act 
                            (FCRA) violations for informational purposes only. This analysis is not a substitute for professional 
                            legal counsel.
                        </p>
                        <p className="text-gray-600 leading-relaxed mt-4">
                            If you believe you have a legal claim or need legal advice, you should consult with a qualified attorney 
                            licensed in your jurisdiction. Any legal case review mentioned on our website is provided by independent, 
                            partnered law firms, not by C.A.R.C.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">No Guarantees</h2>
                        <p className="text-gray-600 leading-relaxed">
                            While our AI analysis is designed to help identify potential issues in your credit reports, we do not 
                            guarantee that:
                        </p>
                        <ul className="list-disc pl-6 text-gray-600 space-y-2 mt-4">
                            <li>All errors or violations will be identified</li>
                            <li>Identified issues constitute actual FCRA violations</li>
                            <li>Any dispute or legal claim will be successful</li>
                            <li>You will receive any specific monetary damages or compensation</li>
                            <li>Credit bureaus or creditors will respond favorably to disputes</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Settlement Information</h2>
                        <p className="text-gray-600 leading-relaxed">
                            Any references to settlements, damages, or compensation amounts on our website are provided for 
                            informational purposes and represent past results. Past results do not guarantee future outcomes. 
                            Each case is unique, and results depend on the specific facts and circumstances involved.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Third-Party Services</h2>
                        <p className="text-gray-600 leading-relaxed">
                            Our website may contain links to third-party websites or services. C.A.R.C. does not control and is 
                            not responsible for the content, privacy policies, or practices of any third-party websites or services. 
                            We do not endorse or make any representations about third-party websites.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">AI Analysis Limitations</h2>
                        <p className="text-gray-600 leading-relaxed">
                            Our credit report analysis uses artificial intelligence technology. While we strive for accuracy, 
                            AI systems have inherent limitations and may not identify all issues or may occasionally produce 
                            inaccurate results. Users should review all analysis results carefully and seek professional verification 
                            for important decisions.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Use at Your Own Risk</h2>
                        <p className="text-gray-600 leading-relaxed">
                            Your use of our website and services is at your sole risk. Under no circumstance shall C.A.R.C. be 
                            liable for any direct, indirect, incidental, consequential, special, or exemplary damages arising 
                            from your use of or inability to use our services.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Consumer Rights Information</h2>
                        <p className="text-gray-600 leading-relaxed">
                            Information provided about the Fair Credit Reporting Act and other consumer protection laws is for 
                            educational purposes. Laws and regulations may change, and interpretations may vary by jurisdiction. 
                            For the most current and accurate legal information, consult official government sources or a 
                            qualified attorney.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
                        <p className="text-gray-600 leading-relaxed">
                            If you have questions about this Disclaimer, please contact us:
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
