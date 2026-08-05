import type { Metadata } from "next";
import { MotionProvider } from "@/components/motion/MotionProvider";
import { portfolio, siteUrl } from "@/data/portfolio";
import {
  homeDescription,
  homeTitle,
  socialImage,
  twitterImageUrl,
} from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: homeTitle,
    template: "%s | Hesham Ali",
  },
  description: homeDescription,
  applicationName: "Hesham Ali Portfolio",
  authors: [{ name: portfolio.person.name, url: siteUrl }],
  creator: portfolio.person.name,
  publisher: portfolio.person.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    title: homeTitle,
    description: homeDescription,
    siteName: "Hesham Ali Portfolio",
    locale: "en_US",
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

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: portfolio.person.name,
  url: siteUrl,
  jobTitle: portfolio.person.role,
  email: `mailto:${portfolio.person.email}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Alexandria",
    addressCountry: "EG",
  },
  sameAs,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
