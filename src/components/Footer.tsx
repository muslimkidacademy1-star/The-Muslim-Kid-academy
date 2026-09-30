import React from 'react';
import { ACADEMY_CONFIG } from '../data/academyData';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { AcademyLogo } from './AcademyLogo';
import {
  MessageCircle,
  Phone,
  Send,
  Heart,
  Sparkles,
  ShieldCheck,
  ChevronLeft
} from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'الرئيسية', href: '#hero' },
    { label: 'لماذا نحن؟', href: '#why-us' },
    { label: 'كيفية الاشتراك', href: '#how-to-join' },
    { label: 'باقات الاشتراك', href: '#pricing' },
    { label: 'معلمونا ومعلماتنا', href: '#teachers' },
    {
      label: 'تواصل معنا (واتساب)',
      href: 'https://wa.me/201065263121?text=السلام%20عليكم،%20أود%20الاستفسار%20عن%20حجز%20حصة%20تجريبية%20لطفلي%20في%20أكاديمية%20المسلم%20الصغير',
      isExternal: true,
    },
  ];

  return (
    <footer id="contact" className="bg-[#0A373C] text-white pt-16 pb-12 border-t border-[#187A82]/30 relative overflow-hidden">
      {/* Background Subtle Ambience in Teal */}
      <div className="absolute top-0 right-1/3 w-96 h-96 bg-[#187A82]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          
          {/* Col 1: Academy Summary & Brand with Official Logo (5 cols) */}
          <div className="lg:col-span-5 text-right space-y-4">
            <div className="flex items-center gap-3">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center group"
                aria-label="أكاديمية المسلم الصغير - العودة للرئيسية"
              >
                <img
                  src="https://i.ibb.co/qY2L3Gdp/E14601-E1-3-D74-4280-B599-14-C0-FD7-B6561.jpg"
                  alt="أكاديمية المسلم الصغير"
                  className="h-12 sm:h-14 w-auto object-contain rounded-2xl shadow-lg ring-2 ring-white/10 transition-transform duration-200 group-hover:scale-105"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (target.src.indexOf('official-logo.png') === -1) {
                      target.src = '/official-logo.png';
                    }
                  }}
                />
              </a>
            </div>

            <p className="text-[#D4F1F4] text-xs sm:text-sm leading-relaxed max-w-md font-normal">
              منصة تعليمية متخصصة في غرس حب القرآن الكريم في قلوب الناشئة عبر حصص فردية مباشرة (1 إلى 1) تحت إشراف تربوي ونخبة من معلمي ومعلمات الأزهر الشريف.
            </p>

            {/* Direct WhatsApp Contact CTA */}
            <div className="pt-2">
              <a
                href="https://wa.me/201065263121?text=السلام%20عليكم،%20أود%20الاستفسار%20عن%20حجز%20حصة%20تجريبية%20لطفلي%20في%20أكاديمية%20المسلم%20الصغير"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-5 py-3 rounded-2xl bg-[#25D366] hover:bg-[#20ba59] text-white font-extrabold text-xs sm:text-sm transition-all shadow-[0_4px_16px_rgba(37,211,102,0.3)] hover:scale-102 active:scale-98"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>تواصل معنا مباشرة عبر واتساب</span>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links (3 cols) */}
          <div className="lg:col-span-3 text-right space-y-4">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider">
              روابط سريعة
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#D4F1F4]">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target={link.isExternal ? '_blank' : undefined}
                    rel={link.isExternal ? 'noopener noreferrer' : undefined}
                    className="hover:text-[#A5F3FC] transition-colors flex items-center gap-1.5"
                  >
                    <ChevronLeft className="w-3.5 h-3.5 text-[#23949D]" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Direct Contacts & Channels (4 cols) */}
          <div className="lg:col-span-4 text-right space-y-4">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider">
              قنوات التواصل والمتابعة
            </h4>
            
            <div className="space-y-2.5 text-xs sm:text-sm text-[#D4F1F4]">
              <a
                href="https://wa.me/201065263121?text=السلام%20عليكم،%20أود%20الاستفسار%20عن%20حجز%20حصة%20تجريبية%20لطفلي%20في%20أكاديمية%20المسلم%20الصغير"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 p-3 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span dir="ltr">{ACADEMY_CONFIG.phone}</span>
                <span className="text-[11px] text-[#A5F3FC]/70 mr-auto">واتساب مباشر</span>
              </a>

              <a
                href={ACADEMY_CONFIG.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 p-3 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 transition-colors"
              >
                <Send className="w-4 h-4 text-[#A5F3FC]" />
                <span>قناة التيليجرام الرسمية</span>
                <span className="text-[11px] text-[#A5F3FC]/70 mr-auto">أنشطة وتلاوات</span>
              </a>
            </div>

            {/* Social media links */}
            <div className="pt-2 flex items-center gap-2.5">
              <a
                href="https://www.facebook.com/share/v/1HtwUNn73s/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="صفحة الفيسبوك"
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-[#187A82] text-white flex items-center justify-center transition-colors shadow-xs"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              <a
                href={ACADEMY_CONFIG.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="تيليجرام"
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-[#187A82] text-white flex items-center justify-center transition-colors shadow-xs"
              >
                <Send className="w-5 h-5" />
              </a>

              <a
                href="https://wa.me/201065263121?text=السلام%20عليكم،%20أود%20الاستفسار%20عن%20حجز%20حصة%20تجريبية%20لطفلي%20في%20أكاديمية%20المسلم%20الصغير"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="واتساب"
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-[#25D366] text-white flex items-center justify-center transition-colors shadow-xs"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>

          </div>

        </div>

        {/* Bottom Bar: Copyright & Terms */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#D4F1F4]/70">
          <p className="text-center sm:text-right">
            جميع الحقوق محفوظة © {currentYear} لـ <span className="text-white font-bold">أكاديمية المسلم الصغير</span>.
          </p>

          <div className="flex items-center gap-4 text-[11px]">
            <a href="#about" className="hover:text-white transition-colors">عن الأكاديمية</a>
            <span>•</span>
            <a href="#privacy" onClick={(e) => { e.preventDefault(); alert('سياسة الخصوصية: نلتزم بالحفاظ التام على خصوصية بيانات الأطفال وسجلات الحصص.'); }} className="hover:text-white transition-colors">سياسة الخصوصية</a>
            <span>•</span>
            <a href="#terms" onClick={(e) => { e.preventDefault(); alert('الشروط والأحكام: تضمن الأكاديمية تعويض الحصص الملغاة بإشعار مسبق وحرية استبدال المعلم.'); }} className="hover:text-white transition-colors">الشروط والأحكام</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
