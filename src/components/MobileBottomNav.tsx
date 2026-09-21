import React from 'react';
import { Home, BookOpen, GraduationCap, CalendarCheck, Smile, MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '../utils/whatsapp';

interface MobileBottomNavProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  onOpenBooking: () => void;
  onOpenCurriculum: () => void;
  onOpenParentPortal: () => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  activeTab,
  onTabChange,
  onOpenBooking,
  onOpenCurriculum,
  onOpenParentPortal,
}) => {
  const handleTabClick = (tabId: string) => {
    onTabChange(tabId);
    if (tabId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (tabId === 'curriculum') {
      onOpenCurriculum();
    } else if (tabId === 'teachers') {
      const el = document.getElementById('teachers');
      el?.scrollIntoView({ behavior: 'smooth' });
    } else if (tabId === 'booking') {
      onOpenBooking();
    } else if (tabId === 'parent-portal') {
      onOpenParentPortal();
    }
  };

  return (
    <>
      {/* Thumb-friendly Floating WhatsApp Pill right above the bottom bar */}
      <div className="fixed bottom-20 inset-x-4 z-40 max-w-md mx-auto pointer-events-none">
        <div className="pointer-events-auto bg-white/95 backdrop-blur-md p-2 rounded-full shadow-[0_10px_25px_rgba(0,0,0,0.12)] border border-slate-200 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 pr-3">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
            <span className="text-xs font-extrabold text-[#005963]">
              المعلمون متاحون الآن
            </span>
          </div>
          <a
            href={getWhatsAppUrl('مرحباً، أود حجز حصة تجريبية مجانية لطفلي عبر زووم في أكاديمية المسلم الصغير')}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full bg-[#f59e0b] text-[#451a03] hover:bg-[#d97706] font-black text-xs flex items-center gap-1.5 shadow-xs active:scale-95 transition-transform"
          >
            <MessageCircle className="w-4 h-4 text-[#78350f]" />
            <span>واتساب مباشر</span>
          </a>
        </div>
      </div>

      {/* Fixed Mobile Bottom Bar */}
      <nav
        className="fixed bottom-0 inset-x-0 z-50 bg-white/95 backdrop-blur-xl border-t border-slate-200 shadow-[0_-4px_20px_rgba(0,0,0,0.06)] pb-safe"
        aria-label="التنقل الرئيسي للهاتف"
      >
        <div className="flex justify-around items-center h-16 px-3 max-w-md mx-auto text-xs">
          
          {/* Tab 1: الرئيسية */}
          <button
            onClick={() => handleTabClick('home')}
            className={`flex flex-col items-center justify-center gap-1 min-w-[54px] min-h-[48px] transition-colors cursor-pointer ${
              activeTab === 'home'
                ? 'text-[#005963] font-black'
                : 'text-slate-500 hover:text-[#005963]'
            }`}
          >
            <Home className="w-5 h-5" />
            <span className="text-[11px]">الرئيسية</span>
          </button>

          {/* Tab 2: المناهج */}
          <button
            onClick={() => handleTabClick('curriculum')}
            className={`flex flex-col items-center justify-center gap-1 min-w-[54px] min-h-[48px] transition-colors cursor-pointer ${
              activeTab === 'curriculum'
                ? 'text-[#005963] font-black'
                : 'text-slate-500 hover:text-[#005963]'
            }`}
          >
            <BookOpen className="w-5 h-5" />
            <span className="text-[11px]">المناهج</span>
          </button>

          {/* Tab 3: المعلمون */}
          <button
            onClick={() => handleTabClick('teachers')}
            className={`flex flex-col items-center justify-center gap-1 min-w-[54px] min-h-[48px] transition-colors cursor-pointer ${
              activeTab === 'teachers'
                ? 'text-[#005963] font-black'
                : 'text-slate-500 hover:text-[#005963]'
            }`}
          >
            <GraduationCap className="w-5 h-5" />
            <span className="text-[11px]">المعلمون</span>
          </button>

          {/* Tab 4: الحصص */}
          <button
            onClick={() => handleTabClick('booking')}
            className={`flex flex-col items-center justify-center gap-1 min-w-[54px] min-h-[48px] transition-colors cursor-pointer ${
              activeTab === 'booking'
                ? 'text-[#005963] font-black'
                : 'text-slate-500 hover:text-[#005963]'
            }`}
          >
            <CalendarCheck className="w-5 h-5" />
            <span className="text-[11px]">الحصص</span>
          </button>

          {/* Tab 5: ولي الأمر */}
          <button
            onClick={() => handleTabClick('parent-portal')}
            className={`flex flex-col items-center justify-center gap-1 min-w-[54px] min-h-[48px] transition-colors cursor-pointer ${
              activeTab === 'parent-portal'
                ? 'text-[#005963] font-black'
                : 'text-slate-500 hover:text-[#005963]'
            }`}
          >
            <Smile className="w-5 h-5" />
            <span className="text-[11px]">ولي الأمر</span>
          </button>

        </div>
      </nav>
    </>
  );
};
