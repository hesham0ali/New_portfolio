import type { Metadata } from "next";
import { IBM_Plex_Sans_Arabic } from "next/font/google";
import { FloatingControls } from "@/components/layout/floating-controls";
import { MotionProvider } from "@/components/motion/MotionProvider";
import { personId, portfolio, siteUrl, websiteId } from "@/data/portfolio";
import {
  homeDescription,
  homeTitle,
  socialImage,
  twitterImageUrl,
} from "@/lib/seo";
import { createWhatsAppServiceUrl } from "@/lib/whatsapp";
import "./globals.css";

const plexSansArabic = IBM_Plex_Sans_Arabic({
  weight: ["400", "500", "600"],
  subsets: ["arabic", "latin"],
  display: "swap",
  variable: "--font-plex-sans-arabic",
  fallback: ["Tahoma", "Arial", "sans-serif"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: homeTitle,
    template: "%s | هشام علي",
  },
  description: homeDescription,
  applicationName: "هشام علي — مطور سلة",
  authors: [{ name: portfolio.person.name, url: siteUrl }],
  creator: portfolio.person.name,
  publisher: portfolio.person.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    title: homeTitle,
    description: homeDescription,
    siteName: "هشام علي — مطور سلة",
    locale: "ar_SA",
    images: [socialImage],
  },
  twitter: {
    card: "summary_large_image",
    title: homeTitle,
    description: homeDescription,
    images: [twitterImageUrl],
  },
  icons: {
    icon: [{ url: "/icon", type: "image/png", sizes: "64x64" }],
    apple: [
      { url: "/apple-icon", type: "image/png", sizes: "180x180" },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const sameAs = [
  portfolio.person.linkedInUrl,
  ...(portfolio.person.githubUrl ? [portfolio.person.githubUrl] : []),
];

const floatingWhatsAppMessage = `مرحبًا هشام،
أرغب في الاستفسار عن خدمات تصميم وتطوير متاجر سلة.

تفاصيل المشروع:
`;

const globalJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": personId,
      name: portfolio.person.name,
      url: siteUrl,
      jobTitle: portfolio.person.role,
      description:
        "متخصص في تصميم وتجهيز متاجر سلة وتخصيص الثيمات وتطوير واجهات المتاجر الإلكترونية.",
      sameAs,
      knowsAbout: [
        "Salla",
        "E-commerce storefront design",
        "Salla theme customization",
        "Frontend development",
        "CSS",
        "JavaScript",
        "Twilight",
        "Responsive web design",
      ],
    },
    {
      "@type": "WebSite",
      "@id": websiteId,
      url: siteUrl,
      name: "هشام علي — مطور سلة",
      inLanguage: "ar",
      author: { "@id": personId },
      creator: { "@id": personId },
      publisher: { "@id": personId },
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ar"
      dir="rtl"
      data-scroll-behavior="smooth"
      className={plexSansArabic.variable}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(globalJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <MotionProvider>
          {children}
          <FloatingControls
            whatsappUrl={createWhatsAppServiceUrl(
              portfolio.person.whatsapp.url,
              floatingWhatsAppMessage,
            )}
          />
        </MotionProvider>
      </body>
    </html>
  );
}
