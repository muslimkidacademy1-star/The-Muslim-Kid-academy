import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustStats } from './components/TrustStats';
import { WhyZoom } from './components/WhyZoom';
import { FourPillars } from './components/FourPillars';
import { ClassPreviews } from './components/ClassPreviews';
import { TeachersSection } from './components/TeachersSection';
import { BonusesSection } from './components/BonusesSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { PricingSection } from './components/PricingSection';
import { BookingSteps } from './components/BookingSteps';
import { FaqSection } from './components/FaqSection';
import { FinalCta } from './components/FinalCta';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Footer } from './components/Footer';
import { MobileBottomNav } from './components/MobileBottomNav';
import { BookingModal } from './components/BookingModal';
import { CurriculumModal } from './components/CurriculumModal';
import { ParentPortalModal } from './components/ParentPortalModal';
import { Smartphone, Monitor, Sparkles } from 'lucide-react';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | undefined>(undefined);
  const [isCurriculumOpen, setIsCurriculumOpen] = useState(false);
  const [isParentPortalOpen, setIsParentPortalOpen] = useState(false);
  const [viewMode, setViewMode] = useState<'desktop' | 'mobile-preview'>('desktop');
  const [activeMobileTab, setActiveMobileTab] = useState('home');
  const [isMobileScreen, setIsMobileScreen] = useState(false);

  useEffect(() => {
    const checkWidth = () => {
      setIsMobileScreen(window.innerWidth < 1024);
    };
    checkWidth();
    window.addEventListener('resize', checkWidth);
    return () => window.removeEventListener('resize', checkWidth);
  }, []);

  const handleOpenBooking = (planTitle?: string) => {
    setSelectedPlan(planTitle);
    setIsBookingOpen(true);
  };

  const handleToggleViewMode = () => {
    setViewMode((prev) => (prev === 'desktop' ? 'mobile-preview' : 'desktop'));
  };

  const renderContent = (isMobileContainer = false) => (
    <>
      <Hero
        onOpenBooking={() => handleOpenBooking()}
        isMobileLayout={isMobileContainer}
      />
      <TrustStats />
      <WhyZoom />
      <FourPillars onOpenCurriculum={() => setIsCurriculumOpen(true)} />
      <ClassPreviews onOpenBooking={() => handleOpenBooking()} />
      <TeachersSection />
      <BonusesSection />
      <TestimonialsSection onOpenBooking={() => handleOpenBooking()} />
      <PricingSection onSelectPlan={(plan) => handleOpenBooking(plan)} />
      <BookingSteps onOpenBooking={() => handleOpenBooking()} />
      <FaqSection />
      <FinalCta />
      <Footer onOpenCurriculum={() => setIsCurriculumOpen(true)} />
    </>
  );

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-[#fef3c7] selection:text-[#78350f]">
      
      {/* Top Notification Banner for New Visitors */}
      <div className="bg-[#003e45] text-white text-xs py-2.5 px-4 text-center flex items-center justify-center gap-2 border-b border-white/10">
        <Sparkles className="w-3.5 h-3.5 text-[#f59e0b]" />
        <span>
          عرض خاص: احجز حصة تجريبية مجانية 100% لطفلك + حضور مجاني للقاء السيرة الأسبوعي
        </span>
      </div>

      {/* Main Responsive Header */}
      <Header
        onOpenBooking={() => handleOpenBooking()}
        onOpenCurriculum={() => setIsCurriculumOpen(true)}
        onOpenParentPortal={() => setIsParentPortalOpen(true)}
        viewMode={viewMode}
        onToggleViewMode={handleToggleViewMode}
      />

      {/* View Mode Mode: If user toggles Mobile Simulator on desktop */}
      {viewMode === 'mobile-preview' && !isMobileScreen ? (
        <div className="py-10 px-4 bg-[#e5e2dd] min-h-[calc(100vh-5rem)] flex flex-col items-center">
          <div className="mb-4 flex items-center gap-3 bg-white px-5 py-2.5 rounded-2xl shadow-xs border border-[#bec8ca]/40 text-xs font-semibold">
            <span className="text-[#00525b] font-bold">
              معاينة شاشة الهاتف الذكي (كما في الصورة المرفقة 3)
            </span>
            <button
              onClick={() => setViewMode('desktop')}
              className="text-[#7e5713] hover:underline cursor-pointer"
            >
              العودة للموقع الكامل
            </button>
          </div>

          {/* Smartphone Frame Chassis */}
          <div className="relative w-full max-w-[430px] h-[890px] bg-black rounded-[50px] shadow-2xl ring-12 ring-gray-900 overflow-hidden flex flex-col border-[4px] border-gray-800">
            {/* Phone Speaker & Notch */}
            <div className="h-7 bg-black flex items-center justify-center shrink-0 relative z-30">
              <div className="w-24 h-4 bg-gray-950 rounded-full flex items-center justify-center">
                <div className="w-10 h-1.5 bg-gray-800 rounded-full" />
              </div>
            </div>

            {/* Scrollable Screen Body inside the phone */}
            <div className="flex-1 overflow-y-auto bg-white relative pb-24">
              {renderContent(true)}
            </div>

            {/* Phone Bottom Bar inside simulator */}
            <MobileBottomNav
              activeTab={activeMobileTab}
              onTabChange={setActiveMobileTab}
              onOpenBooking={() => handleOpenBooking()}
              onOpenCurriculum={() => setIsCurriculumOpen(true)}
              onOpenParentPortal={() => setIsParentPortalOpen(true)}
            />
          </div>
        </div>
      ) : (
        // Standard Responsive Website Mode
        <main className="w-full pb-16 lg:pb-0">
          {renderContent(false)}
        </main>
      )}

      {/* Floating WhatsApp Quick Action Button for Desktop */}
      <FloatingWhatsApp />

      {/* Bottom Navigation for Mobile Devices */}
      <div className="lg:hidden">
        <MobileBottomNav
          activeTab={activeMobileTab}
          onTabChange={setActiveMobileTab}
          onOpenBooking={() => handleOpenBooking()}
          onOpenCurriculum={() => setIsCurriculumOpen(true)}
          onOpenParentPortal={() => setIsParentPortalOpen(true)}
        />
      </div>

      {/* Interactive Free Trial Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialPlan={selectedPlan}
      />

      {/* Curriculum Details Modal */}
      <CurriculumModal
        isOpen={isCurriculumOpen}
        onClose={() => setIsCurriculumOpen(false)}
        onOpenBooking={() => {
          setIsCurriculumOpen(false);
          handleOpenBooking();
        }}
      />

      {/* Parent Portal & Reviews Modal */}
      <ParentPortalModal
        isOpen={isParentPortalOpen}
        onClose={() => setIsParentPortalOpen(false)}
        onOpenBooking={() => {
          setIsParentPortalOpen(false);
          handleOpenBooking();
        }}
      />

    </div>
  );
}
