import type { Metadata } from "next";
import { MotionProvider } from "@/components/motion/MotionProvider";
import { portfolio, siteUrl } from "@/data/portfolio";
import "./globals.css";

const title = "Hesham Ali | Backend, WordPress & E-commerce Software Engineer";
const description =
  "Portfolio of Hesham Ali, a Junior Software Engineer working across backend development, APIs, integrations, workflow automation, custom WordPress plugins, Multisite platforms, and Salla e-commerce stores.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  authors: [{ name: portfolio.person.name }],
  creator: portfolio.person.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    title: "Hesham Ali — Software Engineer Portfolio",
    description:
      "Backend systems, WordPress development, API integrations, workflow automation, and e-commerce solutions.",
    siteName: "Hesham Ali Portfolio",
    locale: "en_US",
    images: [
      {
        url: "/logo.png",
        width: 1536,
        height: 1024,
        alt: "Hesham Ali",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hesham Ali — Software Engineer Portfolio",
    description:
      "Backend systems, WordPress development, API integrations, workflow automation, and e-commerce solutions.",
    images: ["/logo.png"],
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
