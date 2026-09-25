import type { MetadataRoute } from "next"

// Required by Next.js for metadata routes under `output: "export"` (static export).
export const dynamic = "force-static"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://spelectrical.co.za/sitemap.xml",
  }
}
