import type { MetadataRoute } from "next"

// Required by Next.js for metadata routes under `output: "export"` (static export).
export const dynamic = "force-static"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://spelectrical.co.za",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ]
}
