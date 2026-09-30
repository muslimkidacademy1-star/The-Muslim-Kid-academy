import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustStats } from './components/TrustStats';
import { WhyChooseUs } from './components/WhyChooseUs';
import { HowToJoin } from './components/HowToJoin';
import { ClassPreviews } from './components/ClassPreviews';
import { PricingSection } from './components/PricingSection';
import { TeachersSection } from './components/TeachersSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { ParentPortalModal } from './components/ParentPortalModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | undefined>(undefined);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const handleOpenBooking = (planTitle?: string) => {
    setSelectedPlan(planTitle);
    setIsBookingOpen(true);
  };

  const handleExplorePlans = () => {
    const pricingElem = document.getElementById('pricing');
    if (pricingElem) {
      pricingElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFB] text-[#0F4F55] font-['Alexandria',sans-serif] selection:bg-[#E6F7F8] selection:text-[#187A82] antialiased">
      {/* 1. Header / Navbar (Sticky & Glassmorphic) */}
      <Header
        onOpenBooking={() => handleOpenBooking()}
        onOpenLogin={() => setIsLoginOpen(true)}
      />

      {/* Main Content */}
      <main>
        {/* 2. Hero Section */}
        <Hero
          onOpenBooking={() => handleOpenBooking()}
          onExplorePlans={handleExplorePlans}
        />

        {/* 7. Section: إحصائيات بالأرقام (Animated Counters / Social Proof) */}
        <TrustStats />

        {/* 3. Section: لماذا أكاديمية المسلم الصغير؟ (Why Choose Us) */}
        <WhyChooseUs onOpenBooking={() => handleOpenBooking()} />

        {/* 4. Section: كيفية الاشتراك؟ (Step-by-Step Interactive Guide) */}
        <HowToJoin onOpenBooking={() => handleOpenBooking()} />

        {/* Live Class Previews (Real Facebook Videos + Lightbox Modal) */}
        <ClassPreviews onOpenBooking={() => handleOpenBooking()} />

        {/* 5. Section: باقات الاشتراك الشهرية (Pricing Plans) */}
        <PricingSection onOpenBooking={(plan) => handleOpenBooking(plan)} />

        {/* 6. Section: نخبة من معلمينا (Our Tutors) */}
        <TeachersSection onOpenBooking={() => handleOpenBooking()} />
      </main>

      {/* 8. Footer */}
      <Footer />

      {/* Interactive Modals */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialPlan={selectedPlan}
      />

      <ParentPortalModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Floating Direct WhatsApp Button */}
      <FloatingWhatsApp />
    </div>
  );
}
