import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Preloader from "@/components/Preloader";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://www.avtecindia.com";
const SITE_NAME = "AV-TEC (avtecindia.com)";
const DESCRIPTION =
  "AV-TEC (avtecindia.com) - Premier audio visual and event technology solutions since 1992. Sound system rental, stage lighting, LED video walls, conference AV, equipment rental, and technical support across Bengaluru and India.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "AV-TEC | Audio Visual & Event Technology Bengaluru India | avtecindia.com",
    template: "%s | AV-TEC India",
  },
  description: DESCRIPTION,
  keywords: [
    "AV-TEC",
    "AV TEC",
    "AV TEC India",
    "AV-TEC India",
    "avtecindia",
    "avtecindia.com",
    "www.avtecindia.com",
    "AV-TEC Audio Visual",
    "audio visual company India",
    "event technology Bengaluru",
    "sound system rental Bengaluru",
    "stage lighting rental India",
    "LED video wall rental Bengaluru",
    "event production company India",
    "AV equipment rental India",
    "conference AV services Bengaluru",
  ],
  authors: [{ name: "AV-TEC" }],
  creator: "AV-TEC",
  publisher: "AV-TEC",
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/assets/images/logos/logo-web.png", type: "image/png" },
    ],
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "AV-TEC India",
    title: "AV-TEC | Audio Visual & Event Technology Bengaluru India",
    description: DESCRIPTION,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "AV-TEC India" }],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "AV-TEC | Audio Visual & Event Technology Bengaluru India",
    description: DESCRIPTION,
    images: ["/og-image.png"],
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#organization`,
  name: "AV-TEC",
  alternateName: [
    "AV TEC",
    "AV-TEC India",
    "AV TEC India",
    "avtecindia",
    "avtecindia.com",
    "AV-TEC Audio Visual & Event Technology"
  ],
  url: SITE_URL,
  logo: `${SITE_URL}/assets/images/logos/logo-web.png`,
  image: `${SITE_URL}/og-image.png`,
  description: DESCRIPTION,
  foundingDate: "1992",
  telephone: "+91-79757-84962",
  email: ["ilangovan@avtecindia.com", "balaji@avtecindia.com"],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bengaluru",
    addressRegion: "Karnataka",
    addressCountry: "IN",
  },
  areaServed: "IN",
  sameAs: [
    "https://www.avtecindia.com",
    "https://github.com/Shabiul/Av-tec-version-final-"
  ],
};

const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(t){document.documentElement.setAttribute('data-theme',t);}}catch(e){}})()`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <Preloader />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <a href="#main" className="skip-link">Skip to content</a>
        <Header />
        <main id="main" className="main-content">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
