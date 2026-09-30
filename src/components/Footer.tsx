import React, { useState } from 'react';
import { ACADEMY_CONFIG } from '../data/academyData';
import {
  MessageCircle,
  Send,
  ChevronLeft,
  X
} from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [modalContent, setModalContent] = useState<{ title: string; text: string } | null>(null);

  const officialWhatsAppLink =
    'https://wa.me/201065263121?text=السلام%20عليكم،%20أود%20الاستفسار%20عن%20حجز%20حصة%20تجريبية%20لطفلي%20في%20أكاديمية%20المسلم%20الصغير';

  const quickLinks = [
    { label: 'الرئيسية', href: '#hero' },
    { label: 'لماذا نحن؟', href: '#why-us' },
    { label: 'باقات الاشتراك', href: '#pricing' },
    { label: 'معلمونا ومعلماتنا', href: '#teachers' },
    {
      label: 'تواصل معنا (واتساب)',
      href: officialWhatsAppLink,
      isExternal: true,
    },
  ];

  return (
    <footer id="contact" className="bg-[#0F172A] text-slate-300 pt-16 pb-12 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          
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
                  className="h-11 sm:h-12 w-auto object-contain rounded-xl ring-1 ring-white/10 transition-transform duration-200 group-hover:scale-105"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (target.src.indexOf('official-logo.png') === -1) {
                      target.src = '/official-logo.png';
                    }
                  }}
                />
              </a>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-md font-normal">
              منصة تعليمية متخصصة في غرس حب القرآن الكريم في قلوب الناشئة عبر حصص فردية مباشرة (1 إلى 1) تحت إشراف تربوي أزهري متكامل.
            </p>

            {/* Direct WhatsApp Contact CTA */}
            <div className="pt-2">
              <a
                href={officialWhatsAppLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs sm:text-sm transition-all shadow-sm hover:shadow-md hover:scale-105 active:scale-95"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>تواصل معنا عبر واتساب</span>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links (3 cols) */}
          <div className="lg:col-span-3 text-right space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              روابط سريعة
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target={link.isExternal ? '_blank' : undefined}
                    rel={link.isExternal ? 'noopener noreferrer' : undefined}
                    className="hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <ChevronLeft className="w-3.5 h-3.5 text-slate-500" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Direct Contacts & Channels (4 cols) */}
          <div className="lg:col-span-4 text-right space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              قنوات التواصل والمتابعة
            </h4>
            
            <div className="space-y-2.5 text-xs sm:text-sm text-slate-300">
              <a
                href={officialWhatsAppLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-800/60 hover:bg-slate-800 border border-slate-700/60 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span dir="ltr">{ACADEMY_CONFIG.phone}</span>
                <span className="text-[11px] text-slate-400 mr-auto">واتساب رسمي</span>
              </a>

              <a
                href={ACADEMY_CONFIG.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-800/60 hover:bg-slate-800 border border-slate-700/60 transition-colors"
              >
                <Send className="w-4 h-4 text-sky-400" />
                <span>قناة التيليجرام الرسمية</span>
                <span className="text-[11px] text-slate-400 mr-auto">أنشطة وتلاوات</span>
              </a>
            </div>

            {/* Social media links */}
            <div className="pt-2 flex items-center gap-2.5">
              <a
                href="https://www.facebook.com/share/v/1HtwUNn73s/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="صفحة الفيسبوك"
                className="w-9 h-9 rounded-full bg-slate-800 hover:bg-sky-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors shadow-xs"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              <a
                href={ACADEMY_CONFIG.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="تيليجرام"
                className="w-9 h-9 rounded-full bg-slate-800 hover:bg-sky-500 text-slate-300 hover:text-white flex items-center justify-center transition-colors shadow-xs"
              >
                <Send className="w-4 h-4" />
              </a>

              <a
                href={officialWhatsAppLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="واتساب"
                className="w-9 h-9 rounded-full bg-slate-800 hover:bg-[#25D366] text-slate-300 hover:text-white flex items-center justify-center transition-colors shadow-xs"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>

        {/* Bottom Bar: Copyright & Terms */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p className="text-center sm:text-right">
            جميع الحقوق محفوظة © {currentYear} لـ <span className="text-slate-300 font-bold">أكاديمية المسلم الصغير</span>.
          </p>

          <div className="flex items-center gap-4 text-[11px]">
            <a href="#hero" className="hover:text-slate-300 transition-colors">عن الأكاديمية</a>
            <span>•</span>
            <button
              type="button"
              onClick={() => setModalContent({ title: 'سياسة الخصوصية', text: 'نلتزم بالحفاظ التام على خصوصية بيانات الأطفال وسجلات الحلقات وأرقام الهواتف وعدم مشاركتها مع أي جهة خارجية.' })}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              سياسة الخصوصية
            </button>
            <span>•</span>
            <button
              type="button"
              onClick={() => setModalContent({ title: 'الشروط والأحكام', text: 'تضمن الأكاديمية إمكانية تعويض الحصص الملغاة بإشعار مسبق قبل الحصة بساعتين على الأقل، وحرية استبدال المعلم عند الرغبة.' })}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              الشروط والأحكام
            </button>
          </div>
        </div>

      </div>

      {/* Info Modal */}
      {modalContent && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white text-slate-900 rounded-2xl max-w-md w-full p-6 text-right shadow-2xl relative">
            <button
              type="button"
              onClick={() => setModalContent(null)}
              className="absolute top-4 left-4 p-1.5 rounded-full hover:bg-slate-100 text-slate-500 hover:text-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <h3 className="text-lg font-bold text-slate-900 mb-3">{modalContent.title}</h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-6">{modalContent.text}</p>
            <button
              type="button"
              onClick={() => setModalContent(null)}
              className="w-full py-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm transition-colors"
            >
              إغلاق
            </button>
          </div>
        </div>
      )}
    </footer>
  );
};
