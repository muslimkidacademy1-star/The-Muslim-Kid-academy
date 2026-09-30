import React, { useState, useEffect } from 'react';
import { AcademyLogo } from './AcademyLogo';
import {
  Sparkles,
  Menu,
  X,
  User,
  CheckCircle,
  PhoneCall
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
    { label: 'كيفية الاشتراك', href: '#how-to-join' },
    { label: 'الباقات', href: '#pricing' },
    { label: 'معلمونا', href: '#teachers' },
    { label: 'تواصل معنا', href: '#contact' },
  ];

  return (
    <header
      className={`sticky top-0 inset-x-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-[0_4px_20px_rgba(24,122,130,0.08)] border-b border-[#187A82]/15 py-3'
          : 'bg-white/85 backdrop-blur-sm border-b border-slate-100 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Official Academy Logo Image (Navigates to Top) */}
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
              className="h-10 sm:h-12 w-auto object-contain rounded-xl transition-transform duration-200 group-hover:scale-105 shadow-xs"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                if (target.src.indexOf('official-logo.png') === -1) {
                  target.src = '/official-logo.png';
                }
              }}
            />
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7 text-[#0F4F55] font-semibold text-sm">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-slate-700 hover:text-[#187A82] transition-colors relative py-1 after:absolute after:bottom-0 after:right-0 after:w-0 after:h-0.5 after:bg-[#187A82] hover:after:w-full after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            {/* Ghost Button: تسجيل الدخول */}
            <button
              onClick={onOpenLogin}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 text-[#0F4F55] hover:text-[#187A82] hover:border-[#187A82]/40 hover:bg-[#E6F7F8]/50 text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer"
            >
              <User className="w-4 h-4 text-slate-500" />
              <span>تسجيل الدخول</span>
            </button>

            {/* High-contrast CTA: احجز حصة تجريبية (in Official Petroleum Teal) */}
            <a
              href="https://wa.me/201065263121?text=السلام%20عليكم،%20أود%20الاستفسار%20عن%20حجز%20حصة%20تجريبية%20لطفلي%20في%20أكاديمية%20المسلم%20الصغير"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#187A82] hover:bg-[#13666D] text-white font-bold text-xs sm:text-sm transition-all duration-200 shadow-[0_4px_16px_rgba(24,122,130,0.35)] hover:shadow-[0_6px_22px_rgba(24,122,130,0.45)] active:scale-95 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-[#FDE68A]" />
              <span>احجز حصة تجريبية</span>
            </a>
          </div>

          {/* Mobile Actions */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href="https://wa.me/201065263121?text=السلام%20عليكم،%20أود%20الاستفسار%20عن%20حجز%20حصة%20تجريبية%20لطفلي%20في%20أكاديمية%20المسلم%20الصغير"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 rounded-xl bg-[#187A82] text-white font-bold text-xs shadow-sm cursor-pointer"
            >
              حصة تجريبية
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 rounded-xl bg-[#E6F7F8] text-[#187A82] hover:bg-[#D4F1F4] transition-colors"
              aria-label="القائمة الرئيسية"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {/* Tablet Hamburger (sm to lg) */}
          <div className="hidden sm:flex lg:hidden items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 rounded-xl bg-[#E6F7F8] text-[#187A82] hover:bg-[#D4F1F4] transition-colors"
              aria-label="القائمة الرئيسية"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[73px] bottom-0 bg-slate-900/50 backdrop-blur-xs z-50 flex flex-col justify-start">
          <div className="bg-white rounded-b-3xl shadow-2xl border-b border-slate-200 max-h-[calc(100vh-5rem)] overflow-y-auto p-5 space-y-4 animate-in slide-in-from-top-2 duration-200 text-right">
            
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <span className="text-xs font-bold text-slate-400">
                أقسام الموقع
              </span>
              <span className="text-xs text-[#187A82] font-extrabold bg-[#E6F7F8] px-2.5 py-1 rounded-full">
                حصص فردية 100% 🎯
              </span>
            </div>

            <nav className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-between px-3.5 py-2.5 rounded-xl font-bold text-slate-800 hover:bg-[#E6F7F8] hover:text-[#187A82] transition-colors"
                >
                  <span>{link.label}</span>
                  <span className="text-xs text-slate-400">←</span>
                </a>
              ))}
            </nav>

            {/* Action buttons inside drawer */}
            <div className="pt-3 border-t border-slate-100 space-y-2.5">
              <a
                href="https://wa.me/201065263121?text=السلام%20عليكم،%20أود%20الاستفسار%20عن%20حجز%20حصة%20تجريبية%20لطفلي%20في%20أكاديمية%20المسلم%20الصغير"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full py-3.5 px-5 rounded-xl bg-[#187A82] hover:bg-[#13666D] text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-[0_4px_16px_rgba(24,122,130,0.35)] cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-[#FDE68A]" />
                <span>احجز حصة تجريبية مجانية</span>
              </a>

              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenLogin();
                }}
                className="w-full py-3 px-5 rounded-xl border border-slate-200 text-[#0F4F55] hover:bg-slate-50 font-bold text-sm flex items-center justify-center gap-2 cursor-pointer"
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
