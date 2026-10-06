import { pageJsonLd, type PageSeo } from "@/lib/seo";

export default function JsonLd({ page }: { page: PageSeo }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd(page)) }}
    />
  );
}
