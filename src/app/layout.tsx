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
const DESCRIPTION =
  "AV-TEC is India's leading AV solutions & event technology company based in Bengaluru since 1992. Professional audio line arrays, stage lighting, fine pitch LED walls, trussing rigging & corporate AV equipment rentals.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "AV-TEC | Audio Visual Solutions & Event Technology Bengaluru India",
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
    "audio visual solutions Bengaluru",
    "best AV company Bengaluru",
    "audio visual equipment rental Bangalore",
    "event technology company India",
    "sound system rental Bengaluru",
    "D&B line array hire Bangalore",
    "stage lighting rental India",
    "LED video wall rental Bengaluru",
    "P2.6 LED display hire India",
    "event production company India",
    "trussing and rigging rental Bengaluru",
    "corporate AV services Bengaluru",
    "conference AV solutions India",
    "AV equipment distribution India",
    "auditorium AV installation Bengaluru",
  ],
  authors: [{ name: "AV-TEC India" }],
  creator: "AV-TEC India",
  publisher: "AV-TEC India",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
    languages: {
      "en-IN": "/",
      "en": "/",
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "google-site-verification-id",
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
    title: "AV-TEC | Audio Visual Solutions & Event Technology Bengaluru India",
    description: DESCRIPTION,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "AV-TEC India Audio Visual Solutions" }],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "AV-TEC | Audio Visual Solutions & Event Technology Bengaluru India",
    description: DESCRIPTION,
    images: ["/og-image.png"],
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "ProfessionalService", "AudioVisualEquipmentRentalService"],
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
      telephone: "+91 79757 84962",
      email: ["ilangovan@avtecindia.com", "balaji@avtecindia.com"],
      priceRange: "₹₹₹",
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          opens: "00:00",
          closes: "23:59"
        }
      ],
      address: {
        "@type": "PostalAddress",
        streetAddress: "Bengaluru City",
        addressLocality: "Bengaluru",
        addressRegion: "Karnataka",
        postalCode: "560001",
        addressCountry: "IN",
      },
      hasMap: "https://www.google.com/maps/place/AV-TEC/@12.9868205,77.5990784,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae167ace1b6c7d:0x19c0a8b850319ad3!8m2!3d12.9868205!4d77.5990784",
      geo: {
        "@type": "GeoCoordinates",
        latitude: 12.9868205,
        longitude: 77.5990784
      },
      areaServed: [
        { "@type": "City", name: "Bengaluru" },
        { "@type": "City", name: "Bangalore" },
        { "@type": "State", name: "Karnataka" },
        { "@type": "Country", name: "India" }
      ],
      knowsAbout: [
        "Audio Visual Solutions",
        "D&B Line Array Sound Reinforcement",
        "Stage Lighting & Beam Moving Heads",
        "Fine Pitch P2.6 LED Video Walls",
        "Prolyte Roof & Truss Rigging Systems",
        "Corporate Conference Technical Production",
        "Auditorium & Boardroom AV Integrations"
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5.0",
        reviewCount: "8",
        bestRating: "5",
        worstRating: "1"
      },
      sameAs: [
        "https://www.avtecindia.com",
        "https://www.google.com/maps/place/AV-TEC/@12.9868205,77.5990784,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae167ace1b6c7d:0x19c0a8b850319ad3!8m2!3d12.9868205!4d77.5990784",
        "https://github.com/Shabiul/Av-tec-version-final-"
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "AV-TEC India",
      description: DESCRIPTION,
      publisher: {
        "@id": `${SITE_URL}/#organization`
      },
      potentialAction: {
        "@type": "SearchAction",
        target: `${SITE_URL}/rental?search={search_term_string}`,
        "query-input": "required name=search_term_string"
      }
    }
  ]
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
        <noscript>
          <style>{`.preloader-overlay { display: none !important; }`}</style>
        </noscript>
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
