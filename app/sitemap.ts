import type { MetadataRoute } from "next";
import { pages } from "@/lib/seo";
import { site } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return Object.values(pages).map((page) => ({
    url: `${site.url}${page.path}`,
    lastModified: page.modified,
  }));
}
