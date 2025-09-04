"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Inter } from "next/font/google";
import "../styles/index.css";
import { Providers } from "./providers";
import { Metadata } from "next";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

// ✅ Global SEO Metadata
export const metadata: Metadata = {
  title: "Cell AI | Battery Intelligence & Digital Twin for EVs & IoT",
  description:
    "Cell AI powers battery intelligence with SOC/SOH estimation, digital twins, and scalable BMS for EVs, energy storage, and IoT solutions.",
  keywords: [
    "battery intelligence",
    "BMS",
    "SOC estimation",
    "SOH estimation",
    "digital twin",
    "EV battery management",
    "IoT battery monitoring",
    "energy storage",
  ],
  openGraph: {
    title: "Cell AI | Battery Intelligence & Digital Twin Solutions",
    description:
      "Revolutionizing EV and IoT batteries with SOC/SOH estimation, digital twins, and model-based BMS.",
    url: "https://www.cellai.in",
    siteName: "Cell AI",
    images: [
      {
        url: "https://www.cellai.in/images/logo/cellAi.svg", // ✅ deployed logo path
        width: 800,
        height: 800,
        alt: "Cell AI Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cell AI | Battery Intelligence & Digital Twin Solutions",
    description:
      "Scalable BMS, SOC/SOH estimation, and digital twin technologies for EVs and IoT.",
    images: ["https://www.cellai.in/images/logo/cellAi.svg"],
  },
  icons: {
    icon: "/images/logo/cellAi.svg", // ✅ favicon/logo reference
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head>
        {/* ✅ Schema.org JSON-LD */}
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Cell AI",
              url: "https://www.cellai.in",
              logo: "https://www.cellai.in/images/logo/cellAi.svg",
              contactPoint: {
                "@type": "ContactPoint",
                email: "cellaiinnovations@gmail.com",
                contactType: "Customer Support",
              },
              sameAs: [],
            }),
          }}
        />
      </head>

      <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
        <Providers>
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}
