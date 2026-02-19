import Link from "next/link";
import { BackgroundBlobs, PolicySection, HighlightedBox } from "../utils";
export default function PrivacyPolicy() {
    return (
        <div className="relative min-h-screen bg-slate-900 text-white overflow-hidden z-10">

            <BackgroundBlobs />

            <header className="w-full border-b border-gray-700 px-6 md:px-24 py-5">
                <Link href="/" className="inline-block">
                    <img
                        src="/icon_logo.svg"
                        alt="FotoVoto Logo"
                        className="h-10 w-auto"
                    />
                </Link>
            </header>

            <main className="max-w-4xl mx-auto px-6 md:px-8 py-16 space-y-16">
                <div className="text-center space-y-3">
                    <h1 className="text-4xl font-bold">Privacy Policy</h1>
                    <p className="text-slate-400 text-sm">
                        Last updated: January 2026
                    </p>
                </div>

                <PolicySection
                    number="1"
                    title="Introduction"
                >
                    <p>
                        Welcome to FotoVoto. We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy notice, or our practices with regards to your personal information, please contact us.
                    </p>
                    <p>
                        When you use our mobile application, and more generally, use any of our services, we appreciate that you are trusting us with your personal information. We take your privacy very seriously.
                    </p>
                </PolicySection>

                <PolicySection
                    number="2"
                    title="Data Collection"
                >
                    <p>
                        We collect personal information that you voluntarily provide to us when you register on the App, express an interest in obtaining information about us or our products and Services.
                    </p>

                    <HighlightedBox title="Information we automatically collect:">
                        <ul className="list-disc list-inside space-y-0 marker:text-orange-500 marker:text-3xl text-white">
                            <li>
                                Log and Usage Data: Diagnostic, usage and performance information.
                            </li>
                            <li>
                                Device Data: Information about your mobile device (ID, model,
                                manufacturer).
                            </li>
                            <li>
                                Push Notifications: We may request to send you push notifications regarding your account.
                            </li>
                        </ul>
                    </HighlightedBox>
                </PolicySection>

                <PolicySection number="3" title="Usage Policy">
                    <p>
                        We use personal information collected via our App for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.
                    </p>

                    <p>
                        We use the information we collect or receive: To facilitate account creation and logon process, to post testimonials, to request feedback, and to enable user-to-user communications.
                    </p>
                </PolicySection>

                <PolicySection number="4" title="Third-Party Sharing">
                    <p>
                        We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations.
                    </p>
                    <p>
                        We may process or share your data that we hold based on the following legal basis: Consent, Legitimate Interests, Performance of a Contract, and Legal Obligations. Specifically, we may share data with Google Analytics and AWS for infrastructure and usage tracking.
                    </p>
                </PolicySection>

                <PolicySection number="5" title="User Rights">
                    <p>
                        In some regions (like the EEA and UK), you have certain rights under applicable data protection laws. These may include the right (i) to request access and obtain a copy of your personal information, (ii) to request rectification or erasure; (iii) to restrict the processing of your personal information; and (iv) if applicable, to data portability.
                    </p>
                    <p>
                        To make such a request, please use the contact details provided below. We will consider and act upon any request in accordance with applicable data protection laws.
                    </p>
                </PolicySection>
            </main>
        </div>
    );
}


