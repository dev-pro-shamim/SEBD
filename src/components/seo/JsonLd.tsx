import React from "react";

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://smartedgebangladesh.com/#organization",
    name: "SmartEdge Bangladesh",
    legalName: "SmartEdge Bangladesh Ltd.",
    alternateName: ["SEBD", "SmartEdge IT", "SmartEdge Bangladesh Software"],
    url: "https://smartedgebangladesh.com",
    logo: "https://smartedgebangladesh.com/android-chrome-512x512.png",
    image: "https://smartedgebangladesh.com/android-chrome-512x512.png",
    description:
      "Enterprise software development, custom web and mobile app engineering, ERP platforms, and AI automation company serving businesses in Bangladesh and worldwide.",
    foundingDate: "2018",
    email: "info@smartedgebangladesh.com",
    telephone: "+8801743589784",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1294 Rokeya Sharani, Mirpur-10, Next to Metro Pillar No. 267",
      addressLocality: "Dhaka",
      postalCode: "1216",
      addressCountry: "BD",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "23.7998031",
      longitude: "90.3715711",
    },
    hasMap: "https://maps.google.com/?q=23.7998031,90.3715711",
    sameAs: [
      "https://www.facebook.com/SmartEdgeTechnologiesltd/",
      "https://wa.me/8801743589784",
      "https://www.linkedin.com/company/smartedge-bangladesh",
      "https://github.com/dev-pro-shamim/SEBD",
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+8801743589784",
        contactType: "customer service",
        email: "info@smartedgebangladesh.com",
        availableLanguage: ["English", "Bengali"],
        areaServed: ["BD", "US", "GB", "CA", "AU", "DE", "NL", "AE"],
      },
      {
        "@type": "ContactPoint",
        telephone: "+8801743589784",
        contactType: "sales",
        email: "sales@smartedgebangladesh.com",
        availableLanguage: ["English", "Bengali"],
        areaServed: ["Global"],
      },
    ],
    knowsAbout: [
      "Custom Software Development",
      "Enterprise ERP & CRM Systems",
      "Next.js Web Applications",
      "React Full Stack Development",
      "Mobile App Development with Flutter & React Native",
      "AI Automation & RAG Systems",
      "High-Performance Cloud Architecture",
      "E-Commerce & Digital Commerce Platforms",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://smartedgebangladesh.com/#localbusiness",
    name: "SmartEdge Bangladesh",
    image: "https://smartedgebangladesh.com/android-chrome-512x512.png",
    url: "https://smartedgebangladesh.com",
    telephone: "+8801743589784",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1294 Rokeya Sharani, Mirpur-10, Next to Metro Pillar No. 267",
      addressLocality: "Dhaka",
      postalCode: "1216",
      addressCountry: "BD",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "23.7998031",
      longitude: "90.3715711",
    },
    hasMap: "https://maps.google.com/?q=23.7998031,90.3715711",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:00",
        closes: "19:00",
      },
    ],
    currenciesAccepted: "BDT, USD, GBP, EUR, CAD, AUD",
    paymentAccepted: "Bank Transfer, Credit Card, Wire Transfer",
    areaServed: [
      { "@type": "Country", name: "Bangladesh" },
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "United Kingdom" },
      { "@type": "Country", name: "Canada" },
      { "@type": "Country", name: "Australia" },
      { "@type": "Country", name: "Germany" },
      { "@type": "Country", name: "Netherlands" },
      { "@type": "Country", name: "United Arab Emirates" },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function WebSiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://smartedgebangladesh.com/#website",
    url: "https://smartedgebangladesh.com",
    name: "SmartEdge Bangladesh",
    description: "Enterprise Software & Product Engineering Company",
    publisher: {
      "@id": "https://smartedgebangladesh.com/#organization",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: "https://smartedgebangladesh.com/blog?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
    inLanguage: "en-US",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export function BreadcrumbSchema({ items }: { items: BreadcrumbItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http")
        ? item.url
        : `https://smartedgebangladesh.com${item.url}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export interface ServiceSchemaProps {
  name: string;
  description: string;
  url: string;
  category?: string;
}

export function ServiceSchema({ name, description, url, category }: ServiceSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: name,
    description: description,
    serviceType: category || "Software Engineering Service",
    provider: {
      "@type": "Organization",
      name: "SmartEdge Bangladesh",
      url: "https://smartedgebangladesh.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "1294 Rokeya Sharani, Mirpur-10, Next to Metro Pillar No. 267",
        addressLocality: "Dhaka",
        postalCode: "1216",
        addressCountry: "BD",
      },
    },
    url: url.startsWith("http") ? url : `https://smartedgebangladesh.com${url}`,
    areaServed: ["BD", "US", "GB", "CA", "AU", "DE", "NL", "AE"],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export interface ArticleSchemaProps {
  headline: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  authorName?: string;
  image?: string;
  keywords?: string[];
}

export function ArticleSchema({
  headline,
  description,
  url,
  datePublished,
  dateModified,
  authorName = "SmartEdge Engineering Team",
  image = "https://smartedgebangladesh.com/android-chrome-512x512.png",
  keywords = [],
}: ArticleSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url.startsWith("http") ? url : `https://smartedgebangladesh.com${url}`,
    },
    headline: headline,
    description: description,
    image: image,
    datePublished: datePublished,
    dateModified: dateModified || datePublished,
    author: {
      "@type": "Person",
      name: authorName,
      affiliation: {
        "@type": "Organization",
        name: "SmartEdge Bangladesh",
      },
    },
    publisher: {
      "@type": "Organization",
      name: "SmartEdge Bangladesh",
      logo: {
        "@type": "ImageObject",
        url: "https://smartedgebangladesh.com/android-chrome-512x512.png",
      },
    },
    keywords: keywords.join(", "),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
