import type React from "react"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const montserrat = Montserrat({ subsets: ["latin"] })

const siteUrl = "https://spelectrical.co.za"
const title = "SP Electrical Services | Professional Electricians in Cape Town"
const description =
  "Professional electrical services in Cape Town. Licensed electricians offering residential, commercial, and industrial electrical work. 24/7 emergency line."

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/globe-favicon-32.png", type: "image/png", sizes: "32x32" },
      { url: "/globe-favicon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/globe-favicon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/globe-apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "SP Electrical Services",
    images: [{ url: "/globe-favicon-512.png", width: 512, height: 512 }],
    locale: "en_ZA",
    type: "website",
  },
  twitter: {
    card: "summary",
    title,
    description,
    images: ["/globe-favicon-512.png"],
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Electrician",
  name: "SP Electrical Services",
  image: `${siteUrl}/globe-favicon-512.png`,
  telephone: "+27666729270",
  email: "info@spelectrical.co.za",
  url: siteUrl,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Cape Town",
    addressRegion: "Western Cape",
    addressCountry: "ZA",
  },
  areaServed: [
    "Central Cape Town",
    "Northern Suburbs",
    "Southern Suburbs",
    "Eastern Suburbs",
    "Atlantic Seaboard",
    "Constantia",
    "Observatory",
    "Rondebosch",
    "Newlands",
    "Camps Bay",
  ],
  openingHours: "Mo-Su 00:00-23:59",
  priceRange: "$$",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${montserrat.className} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
