export interface TestimonialItem {
  id: string;
  clientName: string;
  role: string;
  company: string;
  country: string;
  countryCode: string;
  serviceProvided: string;
  quote: string;
  rating: number;
  verified: boolean;
  projectImpact: string;
}

export const testimonialsData: TestimonialItem[] = [
  {
    id: "test-01",
    clientName: "Md. Kamrul Hasan",
    role: "Director of Operations",
    company: "MK Shipping Lines",
    country: "Bangladesh",
    countryCode: "BD",
    serviceProvided: "Online Ticketing & Fleet Logistics System",
    quote:
      "SmartEdge Bangladesh completely revolutionized our launch ticketing and cabin booking operations. We went from chaotic counter queues and double-booking errors to a seamless real-time digital system handling thousands of daily passenger bookings without a single crash.",
    rating: 5,
    verified: true,
    projectImpact: "Over 500,000 passenger tickets booked with 99.98% system uptime.",
  },
  {
    id: "test-02",
    clientName: "David Sterling",
    role: "Co-Founder & VP Engineering",
    company: "SaaS Product Studio",
    country: "United Kingdom",
    countryCode: "GB",
    serviceProvided: "Dedicated Full-Stack Next.js Squad",
    quote:
      "Partnering with SmartEdge was one of the best technical decisions we made. Their dedicated Next.js and Node engineers plugged straight into our Jira sprints and communicated as smoothly as our in-house London team. Their code quality and architecture are world-class.",
    rating: 5,
    verified: true,
    projectImpact: "Shipped enterprise multi-tenant version 3 months ahead of initial schedule.",
  },
  {
    id: "test-03",
    clientName: "Shafiqul Alam",
    role: "Managing Partner",
    company: "Aurora Retail Group",
    country: "Bangladesh",
    countryCode: "BD",
    serviceProvided: "Omnichannel Headless E-Commerce & POS",
    quote:
      "Our mobile page loading speed dropped from 4.8 seconds to under 1.2 seconds after SmartEdge rebuilt our platform with Next.js. Our online checkout conversion rate jumped by 38% in the first month alone, and our physical stores stay in 100% stock sync.",
    rating: 5,
    verified: true,
    projectImpact: "38% increase in mobile conversion with zero flash-sale downtime.",
  },
  {
    id: "test-04",
    clientName: "Elena Rostova",
    role: "Head of Product",
    company: "MedTech Logistics Solutions",
    country: "Germany",
    countryCode: "DE",
    serviceProvided: "Custom Software & Fleet Tracking Automation",
    quote:
      "The SmartEdge team demonstrated deep understanding of healthcare compliance and cold-chain logistics requirements. Their automated temperature alerts and GPS dispatch app saved our operations significant manual tracking time every single week.",
    rating: 5,
    verified: true,
    projectImpact: "Real-time telemetry tracking across 80+ cold-chain distribution vehicles.",
  },
  {
    id: "test-05",
    clientName: "Tanvir Ahmed",
    role: "Chief Executive Officer",
    company: "Esquire Digital Agency",
    country: "Bangladesh",
    countryCode: "BD",
    serviceProvided: "Enterprise Cloud ERP & Accounting",
    quote:
      "We evaluated multiple expensive foreign ERP subscriptions before selecting SmartEdge. By developing our custom ERP system with them, we gained an exact fit for our local VAT, billing, and project accounting, saving thousands in annual user license fees.",
    rating: 5,
    verified: true,
    projectImpact: "Eliminated 100% of recurring third-party ERP seat licenses.",
  },
];
