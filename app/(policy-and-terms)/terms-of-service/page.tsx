import Image from "next/image";
import { BackgroundBlobs, PolicySection, HighlightedBox } from "../utils";
export default function TermsAndConditions() {
    return (
        <div className="relative min-h-screen bg-slate-900 text-white overflow-hidden z-10">

            <BackgroundBlobs />

            <header className="w-full border-b border-gray-700 px-6 md:px-24 py-5">
                <img src="/icon_logo.svg" alt="FotoVoto Logo" className="h-10 w-auto" />
            </header>

            <main className="max-w-5xl mx-auto px-6 md:px-24 py-16 space-y-16">

                <div className="text-center space-y-3">
                    <h1 className="text-4xl font-bold">Terms & Conditions</h1>
                    <p className="text-slate-500 text-sm">
                        Last updated: January 2026
                    </p>
                </div>

                <PolicySection
                    number="1"
                    title="Introduction & Acceptance"
                >
                    <p className="text-lg leading-7">
                        Welcome to FotoVoto. By accessing or using our mobile application and related services (collectively, the "Service"), you agree to be bound by these Terms & Conditions. If you do not agree to these terms, please do not use the Service.
                    </p>

                    <p className="text-lg leading-7">
                        We reserve the right to modify these terms at any time. We will notify users of any significant changes by posting a notice within the app or via email. Your continued use of FotoVoto after such changes constitutes acceptance of the new terms.
                    </p>
                </PolicySection>

                <PolicySection
                    number="2"
                    title="User Accounts & Eligibility"
                >
                    <p className="text-lg leading-7">
                        You retain all ownership rights to the photos and content you upload to FotoVoto. However, by uploading content, you grant FotoVoto a worldwide, non-exclusive, royalty-free license to use, copy, reproduce, process, adapt, modify, publish, and display such content solely for the purpose of providing and improving the Service.
                    </p>

                    <HighlightedBox title="Important Note:">
                        <ul className="list-disc list-inside marker:text-orange-500 marker:text-lg space-y-2 text-white">
                            <li>
                                We do not sell your photos to third parties.
                            </li>
                        </ul>
                    </HighlightedBox>
                </PolicySection>

                <PolicySection
                    number="3"
                    title="Prohibited Conduct"
                >
                    <p className="text-lg leading-7">
                        You agree not to engage in any of the following prohibited activities:
                    </p>

                    <HighlightedBox title="Reglas de uso">
                        <ul className="space-y-2 text-white text-sm">
                            {/* Usamos flex y items-center para alinear la imagen y el texto */}
                            <li className="flex items-center">
                                <Image
                                    src="/check_circle.svg"
                                    alt="Check Circle Icon"
                                    width={20}
                                    height={20}
                                    className="mr-2" // margen derecho para separar del texto
                                />
                                Uploading illegal or offensive content.
                            </li>
                            <li className="flex items-center">
                                <Image
                                    src="/check_circle.svg"
                                    alt="Check Circle Icon"
                                    width={20}
                                    height={20}
                                    className="mr-2"
                                />
                                Harassing or bullying other users.
                            </li>
                            <li className="flex items-center">
                                <Image
                                    src="/check_circle.svg"
                                    alt="Check Circle Icon"
                                    width={20}
                                    height={20}
                                    className="mr-2"
                                />
                                Attempting to hack or disrupt the Service.
                            </li>
                            <li className="flex items-center">
                                <Image
                                    src="/check_circle.svg"
                                    alt="Check Circle Icon"
                                    width={20}
                                    height={20}
                                    className="mr-2"
                                />
                                Using automated bots to scrape data.
                            </li>
                        </ul>
                    </HighlightedBox>
                </PolicySection>

                <PolicySection
                    number="4"
                    title="Limitation of Liability"
                >
                    <p className="text-lg leading-7">
                        To the maximum extent permitted by law, FotoVoto shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly.
                    </p>
                </PolicySection>

            </main>
        </div>
    );
}
