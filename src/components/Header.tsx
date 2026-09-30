import React, { useState, useEffect } from 'react';
import {
  Sparkles,
  Menu,
  X,
  User,
  ArrowLeft
} from 'lucide-react';

interface HeaderProps {
  onOpenBooking: () => void;
  onOpenLogin: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenBooking,
  onOpenLogin,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const officialWhatsAppLink =
    'https://wa.me/201065263121?text=السلام%20عليكم،%20أود%20الاستفسار%20عن%20حجز%20حصة%20تجريبية%20لطفلي%20في%20أكاديمية%20المسلم%20الصغير';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  const navLinks = [
    { label: 'الرئيسية', href: '#hero' },
    { label: 'لماذا نحن؟', href: '#why-us' },
    { label: 'الباقات', href: '#pricing' },
    { label: 'معلمونا', href: '#teachers' },
    { label: 'تواصل معنا', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 inset-x-0 z-50 transition-all duration-200">
      {/* 1. SuperHi Top Announcement Bar */}
      <aside aria-label="إعلان هام" className="bg-sky-50 border-b border-sky-100 text-sky-950 text-xs sm:text-[13px] py-2 px-4 transition-colors">
        <div className="max-w-7xl mx-auto flex items-center justify-center text-center">
          <a
            href={officialWhatsAppLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-medium hover:text-sky-700 transition-colors group"
          >
            <span className="text-amber-500 font-bold shrink-0">✨</span>
            <span>حصة تجريبية مجانية 100% لطفلك قبل أي التزام •</span>
            <span className="font-bold underline decoration-sky-400 group-hover:decoration-sky-600 underline-offset-2 flex items-center gap-1">
              احجز الآن عبر واتساب
              <ArrowLeft className="w-3 h-3 group-hover:-translate-x-0.5 transition-transform" />
            </span>
          </a>
        </div>
      </aside>

      {/* 2. Main Sticky Navbar (SuperHi Clean White Style) */}
      <div
        className={`bg-white/95 backdrop-blur-md border-b border-slate-200 transition-all duration-200 ${
          isScrolled ? 'py-3 shadow-xs' : 'py-3.5 sm:py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            
            {/* Right: Academy Logo */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center group py-1"
              aria-label="أكاديمية المسلم الصغير - العودة للرئيسية"
            >
              <img
                src="https://i.ibb.co/qY2L3Gdp/E14601-E1-3-D74-4280-B599-14-C0-FD7-B6561.jpg"
                alt="أكاديمية المسلم الصغير"
                className="h-10 sm:h-11 w-auto object-contain rounded-xl transition-transform duration-200 group-hover:scale-105"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  if (target.src.indexOf('official-logo.png') === -1) {
                    target.src = '/official-logo.png';
                  }
                }}
              />
            </a>

            {/* Center: Clean Nav Links */}
            <nav className="hidden lg:flex items-center gap-8 text-[#0F172A] font-semibold text-sm">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-slate-600 hover:text-[#0F172A] transition-colors relative py-1 hover:font-bold"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Left: Action Buttons (SuperHi Pills) */}
            <div className="hidden sm:flex items-center gap-3 shrink-0">
              {/* Ghost Button: تسجيل الدخول */}
              <button
                type="button"
                onClick={onOpenLogin}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 text-slate-700 hover:text-[#0F172A] hover:border-slate-300 hover:bg-slate-50 text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer"
              >
                <User className="w-3.5 h-3.5 text-slate-500" />
                <span>تسجيل الدخول</span>
              </button>

              {/* Pill Button: احجز حصة تجريبية (rounded-full bg-sky-600 text-white hover:bg-sky-700) */}
              <a
                href={officialWhatsAppLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-sky-600 hover:bg-sky-700 active:bg-sky-800 text-white font-bold text-xs sm:text-sm transition-all duration-200 shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-95 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>احجز حصة تجريبية</span>
              </a>
            </div>

            {/* Mobile Actions */}
            <div className="flex sm:hidden items-center gap-2">
              <a
                href={officialWhatsAppLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs shadow-xs cursor-pointer"
              >
                احجز حصة
              </a>
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors"
                aria-label="القائمة الرئيسية"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

            {/* Tablet Hamburger (sm to lg) */}
            <div className="hidden sm:flex lg:hidden items-center">
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors"
                aria-label="القائمة الرئيسية"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[105px] bottom-0 bg-slate-900/40 backdrop-blur-xs z-50 flex flex-col justify-start">
          <div className="bg-white rounded-b-3xl shadow-xl border-b border-slate-200 max-h-[calc(100vh-7rem)] overflow-y-auto p-5 space-y-4 animate-in slide-in-from-top-2 duration-200 text-right">
            
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <span className="text-xs font-bold text-slate-400">
                أقسام الموقع
              </span>
              <span className="text-xs text-sky-700 font-bold bg-sky-50 px-2.5 py-1 rounded-full border border-sky-200/60">
                حصص فردية 100% 🎯
              </span>
            </div>

            <nav className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-between px-3.5 py-2.5 rounded-xl font-bold text-slate-800 hover:bg-slate-50 hover:text-sky-700 transition-colors"
                >
                  <span>{link.label}</span>
                  <span className="text-xs text-slate-400">←</span>
                </a>
              ))}
            </nav>

            {/* Action buttons inside drawer */}
            <div className="pt-3 border-t border-slate-100 space-y-2.5">
              <a
                href={officialWhatsAppLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full py-3.5 px-5 rounded-full bg-sky-600 hover:bg-sky-700 text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-sm cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>احجز حصة تجريبية مجانية</span>
              </a>

              <button
                type="button"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenLogin();
                }}
                className="w-full py-3 px-5 rounded-full border border-slate-200 text-slate-700 hover:bg-slate-50 font-bold text-sm flex items-center justify-center gap-2 cursor-pointer"
              >
                <User className="w-4 h-4 text-slate-500" />
                <span>تسجيل الدخول / بوابة ولي الأمر</span>
              </button>
            </div>

          </div>
        </div>
      )}
    </header>
  );
};
