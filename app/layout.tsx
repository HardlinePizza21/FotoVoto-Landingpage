import type { Metadata } from "next";
import { Open_Sans, Montserrat } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";

const openSans = Open_Sans({
  variable: "--font-sans",
  subsets: ["latin", "hebrew"],
  weight: ["400", "600", "700"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "FotoVoto",
  description: "Koda is a global voting and question platform with dynamic management, AI-generated visuals, monetization tools, and multi-language support across mobile and web.",
  icons: {
    icon: "/icon_logo.svg",
  },
  robots: {
    index: true,
    follow: true
  },
  openGraph: {
    title: "FotoVoto",
    description: "Koda is a global voting and question platform with dynamic management, AI-generated visuals, monetization tools, and multi-language support across mobile and web.",
    url: "https://fotovoto.app/",
    siteName: "FotoVoto",
    images: [
      {
        url: "https://fotovoto.app/icon_logo.svg",
        width: 500,
        height: 194
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "FotoVoto",
    description: "Plataforma de votación digital segura y moderna.",
    images: ["https://fotovoto.app/icon_logo.svg"]
  },
  keywords: [
    "voting platform",
    "interactive questions",
    "online voting app",
    "question creation platform",
    "visual voting system",
    "global voting platform",
    "customizable voting app",
    "digital polling platform",
  ],

  alternates: {
    canonical: "https://fotovototest.jrbaringer.workers.dev"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${openSans.variable} ${montserrat.variable} antialiased flex flex-col min-h-dvh pb-10`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
