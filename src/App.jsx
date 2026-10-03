import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AppsSection from './components/AppsSection';
import ClientWorkSection from './components/ClientWorkSection';
import ServicesSection from './components/ServicesSection';
import AdMobSection from './components/AdMobSection';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import PrivacyModal from './components/PrivacyModal';

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 flex flex-col font-sans selection:bg-cyan-500 selection:text-black">
      {/* Navigation */}
      <Navbar 
        onOpenContact={() => setIsContactOpen(true)}
        onOpenPrivacy={() => setIsPrivacyOpen(true)}
      />

      {/* Main Content */}
      <main className="flex-1">
        <Hero 
          onOpenContact={() => setIsContactOpen(true)}
        />

        <AppsSection 
          onOpenContact={() => setIsContactOpen(true)}
        />

        <ClientWorkSection />

        <ServicesSection 
          onOpenContact={() => setIsContactOpen(true)}
        />

        <AdMobSection />
      </main>

      {/* Footer */}
      <Footer 
        onOpenContact={() => setIsContactOpen(true)}
        onOpenPrivacy={() => setIsPrivacyOpen(true)}
      />

      {/* Modals */}
      <ContactModal 
        isOpen={isContactOpen} 
        onClose={() => setIsContactOpen(false)} 
      />

      <PrivacyModal 
        isOpen={isPrivacyOpen} 
        onClose={() => setIsPrivacyOpen(false)} 
      />
    </div>
  );
}
