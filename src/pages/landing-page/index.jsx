import React from 'react';
import AnchorNavigation from '../../components/ui/AnchorNavigation';
import WhatsAppFloatingButton from '../../components/ui/WhatsAppFloatingButton';
import ScrollProgressIndicator from '../../components/ui/ScrollProgressIndicator';

// Import all components
import HeroSection from './components/HeroSection';
import VillageIdentitySection from './components/VillageIdentitySection';
import BusinessUnitsSection from './components/BusinessUnitsSection';
import ProgramsTimelineSection from './components/ProgramsTimelineSection';
import LeadershipTeamSection from './components/LeadershipTeamSection';
import LocationSection from './components/LocationSection';
import ProductGallerySection from './components/ProductGallerySection';
import TestimonialsSection from './components/TestimonialsSection';
import FAQSection from './components/FAQSection';
import ContactSection from './components/ContactSection';
import FooterSection from './components/FooterSection';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Fixed Navigation Components */}
      <ScrollProgressIndicator />
      <AnchorNavigation />
      <WhatsAppFloatingButton phoneNumber="6281234567890" />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section - Above the fold */}
        <HeroSection />

        {/* Village Identity & Storytelling */}
        <VillageIdentitySection />

        {/* Business Units Showcase */}
        <BusinessUnitsSection />

        {/* Programs Timeline */}
        <ProgramsTimelineSection />

        {/* Leadership Team */}
        <LeadershipTeamSection />

        {/* Interactive Location */}
        <LocationSection />

        {/* Product Gallery */}
        <ProductGallerySection />

        {/* Community Testimonials */}
        <TestimonialsSection />

        {/* FAQ Section */}
        <FAQSection />

        {/* Contact Form */}
        <ContactSection />
      </main>

      {/* Footer */}
      <FooterSection />
    </div>
  );
};

export default LandingPage;