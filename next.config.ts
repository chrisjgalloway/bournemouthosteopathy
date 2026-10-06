import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fully static site, served from Netlify's CDN.
  output: "export",
  // Keep the old WordPress URLs (/osteopathic/, /cranial/, /contact/).
  trailingSlash: true,
  images: { unoptimized: true },
  // A parent folder has its own lockfile; pin the root to this project.
  turbopack: { root: import.meta.dirname },
};

export default nextConfig;
