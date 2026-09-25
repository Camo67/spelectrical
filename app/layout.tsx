import type React from "react"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const montserrat = Montserrat({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SP Electrical Services | Professional Electricians in Cape Town",
  description:
    "Professional electrical services in Cape Town. Licensed electricians offering residential, commercial, and industrial electrical work.",
  generator: "v0.app",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/globe-favicon-32.png", type: "image/png", sizes: "32x32" },
      { url: "/globe-favicon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/globe-favicon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/globe-apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
