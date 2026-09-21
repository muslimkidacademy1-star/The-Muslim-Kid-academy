import React, { useState, useRef, useEffect } from 'react';
import { ACADEMY_CONFIG } from '../data/academyData';
import {
  Sparkles,
  ChevronDown,
  Menu,
  X,
  BookOpen,
  GraduationCap,
  Video,
  CreditCard,
  MessageSquareQuote,
  ShieldCheck,
  HelpCircle,
  Home,
  Smile,
  Smartphone,
  Monitor
} from 'lucide-react';

interface HeaderProps {
  onOpenBooking: () => void;
  onOpenCurriculum: () => void;
  onOpenParentPortal?: () => void;
  viewMode: 'desktop' | 'mobile-preview';
  onToggleViewMode: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenBooking,
  onOpenCurriculum,
  onOpenParentPortal,
  viewMode,
  onToggleViewMode,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const handleMobileNavClick = (callback?: () => void) => {
    setIsMobileMenuOpen(false);
    if (callback) {
      callback();
    }
  };

  return (
    <header className="sticky top-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-[0_2px_15px_rgba(0,0,0,0.03)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="h-20 flex items-center justify-between gap-4">
          
          {/* Right Logo & Branding */}
          <a href="#" className="flex items-center gap-3 shrink-0 group">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-[#005963] text-white flex items-center justify-center p-1.5 shadow-sm ring-2 ring-[#e0f4f7] group-hover:scale-105 transition-transform overflow-hidden">
              <img
                src={ACADEMY_CONFIG.logoUrl}
                alt={ACADEMY_CONFIG.name}
                className="w-full h-full object-cover rounded-xl"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
            </div>
            <div className="flex flex-col text-right">
              <span className="font-extrabold text-base sm:text-xl text-[#003e45] tracking-tight leading-tight">
                {ACADEMY_CONFIG.name}
              </span>
              <span className="text-[11px] sm:text-xs text-[#f59e0b] font-bold">
                {ACADEMY_CONFIG.englishName}
              </span>
            </div>
          </a>

          {/* Center Navigation Links (Desktop - Decluttered to Primary Links Only) */}
          <nav className="hidden lg:flex items-center gap-7 text-slate-700 font-semibold text-sm">
            {/* Primary link 1: الرئيسية */}
            <a href="#" className="text-[#005963] font-black hover:opacity-85 transition-colors">
              الرئيسية
            </a>

            {/* Primary link 2: عن الأكاديمية */}
            <a href="#about" className="hover:text-[#005963] transition-colors">
              عن الأكاديمية
            </a>

            {/* Primary link 3: المناهج */}
            <button
              onClick={onOpenCurriculum}
              className="hover:text-[#005963] transition-colors cursor-pointer flex items-center gap-1 font-semibold"
            >
              <span>المناهج</span>
            </button>

            {/* Primary link 4: الأسئلة الشائعة */}
            <a href="#faq" className="hover:text-[#005963] transition-colors">
              الأسئلة الشائعة
            </a>

            {/* Secondary links tucked into a clean Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsDropdownOpen((prev) => !prev)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-semibold transition-all cursor-pointer ${
                  isDropdownOpen
                    ? 'bg-[#e0f4f7] text-[#005963]'
                    : 'text-slate-700 hover:text-[#005963] hover:bg-slate-100'
                }`}
                aria-expanded={isDropdownOpen}
              >
                <span>المزيد</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isDropdownOpen ? 'rotate-180 text-[#005963]' : 'text-slate-400'
                  }`}
                />
              </button>

              {/* Dropdown Menu Box */}
              {isDropdownOpen && (
                <div className="absolute top-full mt-2 -right-4 w-56 bg-white rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.12)] border border-slate-100 py-2.5 z-50 text-right animate-in fade-in slide-in-from-top-2 duration-150">
                  <a
                    href="#features"
                    onClick={() => setIsDropdownOpen(false)}
                    className="flex items-center gap-2.5 px-4 py-2.5 text-xs font-bold text-slate-700 hover:bg-[#e0f4f7]/60 hover:text-[#005963] transition-colors"
                  >
                    <ShieldCheck className="w-4 h-4 text-[#005963]" />
                    <span>مميزات حصص زووم</span>
                  </a>

                  <a
                    href="#samples"
                    onClick={() => setIsDropdownOpen(false)}
                    className="flex items-center gap-2.5 px-4 py-2.5 text-xs font-bold text-slate-700 hover:bg-[#e0f4f7]/60 hover:text-[#005963] transition-colors"
                  >
                    <Video className="w-4 h-4 text-[#005963]" />
                    <span>عينات الحصص المباشرة</span>
                  </a>

                  <a
                    href="#teachers"
                    onClick={() => setIsDropdownOpen(false)}
                    className="flex items-center gap-2.5 px-4 py-2.5 text-xs font-bold text-slate-700 hover:bg-[#e0f4f7]/60 hover:text-[#005963] transition-colors"
                  >
                    <GraduationCap className="w-4 h-4 text-[#005963]" />
                    <span>المعلمون والمعلمات</span>
                  </a>

                  <a
                    href="#pricing"
                    onClick={() => setIsDropdownOpen(false)}
                    className="flex items-center gap-2.5 px-4 py-2.5 text-xs font-bold text-slate-700 hover:bg-[#e0f4f7]/60 hover:text-[#005963] transition-colors"
                  >
                    <CreditCard className="w-4 h-4 text-[#005963]" />
                    <span>باقات واشتراكات الحصص</span>
                  </a>

                  <a
                    href="#reviews"
                    onClick={() => setIsDropdownOpen(false)}
                    className="flex items-center gap-2.5 px-4 py-2.5 text-xs font-bold text-slate-700 hover:bg-[#e0f4f7]/60 hover:text-[#005963] transition-colors"
                  >
                    <MessageSquareQuote className="w-4 h-4 text-[#005963]" />
                    <span>آراء أولياء الأمور</span>
                  </a>

                  {onOpenParentPortal && (
                    <button
                      onClick={() => {
                        setIsDropdownOpen(false);
                        onOpenParentPortal();
                      }}
                      className="w-full flex items-center gap-2.5 px-4 py-2.5 text-xs font-bold text-slate-700 hover:bg-[#e0f4f7]/60 hover:text-[#005963] transition-colors cursor-pointer text-right"
                    >
                      <Smile className="w-4 h-4 text-[#f59e0b]" />
                      <span>بوابة متابعة ولي الأمر</span>
                    </button>
                  )}

                  <div className="my-1 border-t border-slate-100" />

                  {/* Optional Preview Simulator Switcher in Dropdown */}
                  <button
                    onClick={() => {
                      setIsDropdownOpen(false);
                      onToggleViewMode();
                    }}
                    className="w-full flex items-center gap-2.5 px-4 py-2 text-xs font-semibold text-slate-500 hover:text-[#005963] transition-colors cursor-pointer text-right"
                  >
                    {viewMode === 'desktop' ? (
                      <>
                        <Smartphone className="w-3.5 h-3.5 text-slate-400" />
                        <span>محاكاة شاشة الجوال</span>
                      </>
                    ) : (
                      <>
                        <Monitor className="w-3.5 h-3.5 text-[#005963]" />
                        <span>الموقع بالشاشة الكاملة</span>
                      </>
                    )}
                  </button>
                </div>
              )}
            </div>
          </nav>

          {/* Left: Single Unified CTA Button + Mobile Hamburger Icon */}
          <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
            {/* Unified Primary CTA Button (Mustard Yellow) */}
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-2xl bg-[#f59e0b] hover:bg-[#d97706] text-[#451a03] font-black text-xs sm:text-sm transition-all shadow-[0_4px_14px_rgba(245,158,11,0.35)] hover:shadow-[0_8px_20px_rgba(217,119,6,0.45)] active:scale-95 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-[#78350f]" />
              <span>احجز حصة تجريبية</span>
            </button>

            {/* Mobile Hamburger Toggle Button */}
            <button
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              aria-label="فتح القائمة الرئيسية"
              className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-2xl bg-slate-100 hover:bg-[#e0f4f7] text-[#005963] border border-slate-200 transition-colors cursor-pointer"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-[#005963]" />
              ) : (
                <Menu className="w-6 h-6 text-[#005963]" />
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Slide-Down Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-20 bottom-0 bg-slate-900/50 backdrop-blur-xs z-50 flex flex-col justify-start">
          <div className="bg-white rounded-b-3xl shadow-2xl border-b border-slate-200 max-h-[calc(100vh-5rem)] overflow-y-auto p-5 space-y-4 animate-in slide-in-from-top-2 duration-200 text-right">
            
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <span className="text-xs font-bold text-slate-400">
                أقسام الأكاديمية
              </span>
              <span className="text-xs text-[#005963] font-extrabold bg-[#e0f4f7] px-2.5 py-1 rounded-full">
                حصص فردية 1-on-1
              </span>
            </div>

            <nav className="flex flex-col space-y-1">
              <a
                href="#"
                onClick={() => handleMobileNavClick()}
                className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-bold text-slate-800 hover:bg-[#e0f4f7] hover:text-[#005963] transition-colors"
              >
                <Home className="w-5 h-5 text-[#005963]" />
                <span>الرئيسية</span>
              </a>

              <a
                href="#about"
                onClick={() => handleMobileNavClick()}
                className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-bold text-slate-800 hover:bg-[#e0f4f7] hover:text-[#005963] transition-colors"
              >
                <ShieldCheck className="w-5 h-5 text-[#005963]" />
                <span>عن الأكاديمية وركائزنا</span>
              </a>

              <button
                onClick={() => handleMobileNavClick(onOpenCurriculum)}
                className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-bold text-slate-800 hover:bg-[#e0f4f7] hover:text-[#005963] transition-colors text-right cursor-pointer"
              >
                <BookOpen className="w-5 h-5 text-[#005963]" />
                <span>المناهج المعتمدة (نور البيان وتجويد)</span>
              </button>

              <a
                href="#features"
                onClick={() => handleMobileNavClick()}
                className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-bold text-slate-800 hover:bg-[#e0f4f7] hover:text-[#005963] transition-colors"
              >
                <Video className="w-5 h-5 text-[#005963]" />
                <span>لماذا التحفيظ الفردي عبر زووم؟</span>
              </a>

              <a
                href="#teachers"
                onClick={() => handleMobileNavClick()}
                className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-bold text-slate-800 hover:bg-[#e0f4f7] hover:text-[#005963] transition-colors"
              >
                <GraduationCap className="w-5 h-5 text-[#005963]" />
                <span>المعلمون والمعلمات المجازون</span>
              </a>

              <a
                href="#pricing"
                onClick={() => handleMobileNavClick()}
                className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-bold text-slate-800 hover:bg-[#e0f4f7] hover:text-[#005963] transition-colors"
              >
                <CreditCard className="w-5 h-5 text-[#005963]" />
                <span>باقات واشتراكات الحصص</span>
              </a>

              <a
                href="#reviews"
                onClick={() => handleMobileNavClick()}
                className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-bold text-slate-800 hover:bg-[#e0f4f7] hover:text-[#005963] transition-colors"
              >
                <MessageSquareQuote className="w-5 h-5 text-[#005963]" />
                <span>آراء أولياء الأمور</span>
              </a>

              <a
                href="#faq"
                onClick={() => handleMobileNavClick()}
                className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-bold text-slate-800 hover:bg-[#e0f4f7] hover:text-[#005963] transition-colors"
              >
                <HelpCircle className="w-5 h-5 text-[#005963]" />
                <span>الأسئلة الشائعة</span>
              </a>

              {onOpenParentPortal && (
                <button
                  onClick={() => handleMobileNavClick(onOpenParentPortal)}
                  className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-bold text-[#005963] bg-[#e0f4f7]/50 hover:bg-[#e0f4f7] transition-colors text-right cursor-pointer"
                >
                  <Smile className="w-5 h-5 text-[#f59e0b]" />
                  <span>بوابة ولي الأمر وتقارير المتابعة</span>
                </button>
              )}
            </nav>

            {/* Prominent CTA in Mobile Menu */}
            <div className="pt-3 border-t border-slate-100">
              <button
                onClick={() => handleMobileNavClick(onOpenBooking)}
                className="w-full py-4 px-6 rounded-2xl bg-[#f59e0b] hover:bg-[#d97706] text-[#451a03] font-black text-sm flex items-center justify-center gap-2.5 shadow-[0_8px_20px_rgba(245,158,11,0.35)] active:scale-95 cursor-pointer"
              >
                <Sparkles className="w-5 h-5 text-[#78350f]" />
                <span>احجز حصة تجريبية مجانية 100%</span>
              </button>
            </div>

          </div>
        </div>
      )}
    </header>
  );
};
