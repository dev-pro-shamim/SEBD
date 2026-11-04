import React from "react";
import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import EngagementModels from "@/components/home/EngagementModels";
import FeaturedCasesSection from "@/components/home/FeaturedCasesSection";
import ServicesSection from "@/components/home/ServicesSection";
import ProductsAndSolutionsSection from "@/components/home/ProductsAndSolutionsSection";
import TechStackSection from "@/components/home/TechStackSection";
import IndustryExpertise from "@/components/home/IndustryExpertise";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import DevelopmentProcess from "@/components/home/DevelopmentProcess";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import TeamSection from "@/components/home/TeamSection";
import FaqSection from "@/components/home/FaqSection";
import FinalCtaSection from "@/components/home/FinalCtaSection";

export default function HomePage() {
  return (
    <>
      {/* Section 1: Hero */}
      <HeroSection />

      {/* Section 2: Company Expertise & Global Stats */}
      <StatsSection />

      {/* Section 3: Engagement Models */}
      <EngagementModels />

      {/* Section 4: Featured Case Studies */}
      <FeaturedCasesSection />

      {/* Section 5: Services */}
      <ServicesSection />

      {/* Section 6: Products & Solutions */}
      <ProductsAndSolutionsSection />

      {/* Section 7: Technology Stack */}
      <TechStackSection />

      {/* Section 8: Industries We Serve */}
      <IndustryExpertise />

      {/* Section 9: Why Choose SmartEdge */}
      <WhyChooseUs />

      {/* Section 10: Development Process */}
      <DevelopmentProcess />

      {/* Section 11: Testimonials */}
      <TestimonialsSection />

      {/* Section 12: Team & Expertise */}
      <TeamSection />

      {/* Section 13: FAQ */}
      <FaqSection />

      {/* Section 14: Final CTA */}
      <FinalCtaSection />
    </>
  );
}
