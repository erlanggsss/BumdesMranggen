import React, { useState } from 'react';
import AnchorNavigation from '../../components/ui/AnchorNavigationIndicator';
import WhatsAppFloatingButton from '../../components/ui/WhatsAppFloatingButton';
import ScrollProgressIndicator from '../../components/ui/ScrollProgressIndicator';

// Import all components
import HeroSection from './components/HeroSection';
import VillageIdentitySection from './components/VillageIdentitySection';
import BusinessUnitsSection from './components/BussinessUnitsSection';
import LeadershipTeamSection from './components/LeadershipTeamSection';
import FAQSection from './components/FAQSection';
import ContactSection from './components/ContactSection';
import FooterSection from './components/FooterSection';

const LandingPage = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Fixed Navigation Components */}
      <ScrollProgressIndicator />
      <AnchorNavigation onMenuStateChange={setIsMobileMenuOpen} />
      <WhatsAppFloatingButton phoneNumber="6283843343328" isMenuOpen={isMobileMenuOpen} />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section - Above the fold */}
        <HeroSection />

        {/* Village Identity & Storytelling */}
        <VillageIdentitySection />

        {/* Business Units Showcase */}
        <BusinessUnitsSection />

        {/* Leadership Team */}
        <LeadershipTeamSection />

        {/* Contact Form */}
        <ContactSection />

        {/* FAQ Section */}
        <FAQSection />
      </main>

      {/* Footer */}
      <FooterSection />
    </div>
  );
};

export default LandingPage;