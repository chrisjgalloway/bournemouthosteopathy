import type { Metadata } from "next";
import { site } from "@/lib/site";

// SEO values copied from the live WordPress/Yoast site so rankings carry over.
export type PageSeo = {
  path: string;
  title: string;
  description: string;
  ogType: "website" | "article";
  published: string;
  modified: string;
  readingTime: string;
  breadcrumb?: string;
};

export const pages = {
  home: {
    path: "/",
    title: "Bournemouth Osteopathic & Cranial Centre",
    description:
      "We offer gentle and effective osteopathic treatment for people of all ages, including sports people, the elderly, pregnant women, babies and children.",
    ogType: "website",
    published: "2017-05-24T20:56:50+00:00",
    modified: "2019-03-07T02:10:21+00:00",
    readingTime: "3 minutes",
  },
  osteopathic: {
    path: "/osteopathic/",
    title: "Bournemouth Osteopathy - Healthcare that Diagnoses and Treats",
    description:
      "Osteopathy is an established system of healthcare that diagnoses and treats imbalances with the structure and function of the body.",
    ogType: "article",
    published: "2017-05-24T21:01:07+00:00",
    modified: "2019-03-07T02:04:56+00:00",
    readingTime: "4 minutes",
    breadcrumb: "Osteopathic",
  },
  cranial: {
    path: "/cranial/",
    title: "Cranial Osteopathy",
    description:
      "The osteopath uses their highly trained sense of touch, to identify and correct mechanical disturbances and limitations in joints, skull and around the body",
    ogType: "article",
    published: "2017-05-24T21:01:09+00:00",
    modified: "2017-11-28T17:01:59+00:00",
    readingTime: "2 minutes",
    breadcrumb: "Cranial",
  },
  contact: {
    path: "/contact/",
    title: "Contact Bournemouth Osteopathy",
    description:
      "The clinic is conveniently located close to Bournemouth town centre and offers onsite parking. Reception is covered daily with a 24 hour answer service",
    ogType: "article",
    published: "2017-05-24T21:01:11+00:00",
    modified: "2023-05-20T13:15:51+00:00",
    readingTime: "4 minutes",
    breadcrumb: "Contact",
  },
} satisfies Record<string, PageSeo>;

export const ogImage = {
  url: "/og-image.png",
  width: 1200,
  height: 630,
  alt: "Bournemouth Osteopathic & Cranial Centre: gentle and effective treatment for people of all ages",
  type: "image/png",
};

export function pageMetadata(page: PageSeo): Metadata {
  const url = `${site.url}${page.path}`;
  return {
    title: { absolute: page.title },
    description: page.description,
    alternates: { canonical: url },
    openGraph: {
      locale: "en_GB",
      type: page.ogType,
      title: page.title,
      description: page.description,
      url,
      siteName: site.name,
      images: [ogImage],
      ...(page.ogType === "article" ? { modifiedTime: page.modified } : {}),
    },
    twitter: { card: "summary_large_image", images: [ogImage] },
    other: {
      "twitter:label1": "Estimated reading time",
      "twitter:data1": page.readingTime,
    },
  };
}

export function pageJsonLd(page: PageSeo) {
  const url = `${site.url}${page.path}`;
  const home = `${site.url}/`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": url,
        url,
        name: page.title,
        isPartOf: { "@id": `${home}#website` },
        primaryImageOfPage: { "@id": `${home}#ogimage` },
        datePublished: page.published,
        dateModified: page.modified,
        description: page.description,
        breadcrumb: { "@id": `${url}#breadcrumb` },
        inLanguage: "en-GB",
        potentialAction: [{ "@type": "ReadAction", target: [url] }],
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: page.breadcrumb
          ? [
              { "@type": "ListItem", position: 1, name: "Home", item: home },
              { "@type": "ListItem", position: 2, name: page.breadcrumb },
            ]
          : [{ "@type": "ListItem", position: 1, name: "Home" }],
      },
      {
        "@type": "WebSite",
        "@id": `${home}#website`,
        url: home,
        name: site.name,
        description: site.phone,
        inLanguage: "en-GB",
      },
      {
        "@type": "ImageObject",
        "@id": `${home}#ogimage`,
        url: `${home}og-image.png`,
        width: 1200,
        height: 630,
      },
      {
        "@type": "MedicalClinic",
        "@id": `${home}#clinic`,
        name: site.name,
        url: home,
        image: `${home}og-image.png`,
        logo: `${home}images/logo.png`,
        telephone: site.phoneIntl,
        email: site.email,
        address: {
          "@type": "PostalAddress",
          streetAddress: site.address[0],
          addressLocality: site.address[1],
          postalCode: site.address[2],
          addressCountry: "GB",
        },
        geo: { "@type": "GeoCoordinates", latitude: site.map.lat, longitude: site.map.lng },
      },
    ],
  };
}
