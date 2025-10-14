import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import Script from "next/script"
import "./globals.css"

export const metadata: Metadata = {
  title: "Tidy Pipes Plumbing - Professional Plumbing Services | Licensed Plumbers",
  description:
    "Expert plumbing services in your area. Emergency repairs, leak detection, pipe installation, water heater service. Licensed, insured, and trusted by the community. Call (585) 507-8992.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  keywords: [
    "plumbing services",
    "emergency plumber",
    "leak detection",
    "pipe installation",
    "water heater repair",
    "residential plumbing",
    "commercial plumbing",
    "licensed plumber",
    "plumbing contractor",
  ],
  authors: [{ name: "Tidy Pipes Plumbing" }],
  creator: "Tidy Pipes Plumbing",
  publisher: "Tidy Pipes Plumbing",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://tidypipesplumbing.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Tidy Pipes Plumbing - Professional Plumbing Services",
    description:
      "Expert plumbing services with emergency repairs. Licensed, insured, and trusted by the community.",
    url: "https://tidypipesplumbing.com",
    siteName: "Tidy Pipes Plumbing",
    images: [
      {
        url: "https://tidy-pipes-plumbing-front-end.vercel.app/images/tidy-pipes-og-image.png",
        width: 1200,
        height: 630,
        alt: "Tidy Pipes Plumbing - Professional Plumbing Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Tidy Pipes Plumbing - Professional Plumbing Services",
    description:
      "Expert plumbing services with emergency repairs. Licensed, insured, and trusted.",
    images: ["/images/tidy-pipes-og-image.png"],
  },
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
  verification: {
    google: "your-google-verification-code",
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}
      >
        {/* ✅ Structured data for SEO (does not override favicon or metadata) */}
        <Script
          id="ld-json"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://tidypipesplumbing.com",
              name: "Tidy Pipes Plumbing",
              image: "https://tidypipesplumbing.com/images/tidy-pipes-logo.jpg",
              description:
                "Professional plumbing services including emergency repairs, leak detection, pipe installation, and water heater service. Licensed and insured plumbers serving residential and commercial customers.",
              url: "https://tidypipesplumbing.com",
              telephone: "(585) 507-8992",
              email: "info@tidypipesplumbing.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "123 Main Street",
                addressLocality: "Your City",
                addressRegion: "Your State",
                postalCode: "12345",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "40.7128",
                longitude: "-74.0060",
              },
              openingHours: "Mo-Su 00:00-23:59",
              serviceArea: {
                "@type": "GeoCircle",
                geoMidpoint: {
                  "@type": "GeoCoordinates",
                  latitude: "40.7128",
                  longitude: "-74.0060",
                },
                geoRadius: "50000",
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Plumbing Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Emergency Plumbing Repairs",
                      description: "emergency plumbing repair services",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Leak Detection",
                      description: "Professional leak detection and repair services",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Pipe Installation",
                      description: "New pipe installation and replacement services",
                    },
                  },
                ],
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "127",
              },
              priceRange: "$$",
            }),
          }}
        />
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
