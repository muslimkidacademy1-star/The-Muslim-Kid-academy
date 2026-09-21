import React from 'react';
import { ACADEMY_CONFIG } from '../data/academyData';
import { Phone, Send, Clock, BookOpen, Heart, Sparkles } from 'lucide-react';
import { getWhatsAppUrl } from '../utils/whatsapp';

interface FooterProps {
  onOpenCurriculum: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenCurriculum }) => {
  return (
    <footer className="w-full bg-slate-900 text-slate-400 pt-16 pb-12 border-t border-slate-800 text-right">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-[#005963] text-white flex items-center justify-center p-1.5 shadow-sm ring-2 ring-white/10">
                <img
                  src={ACADEMY_CONFIG.logoUrl}
                  alt={ACADEMY_CONFIG.name}
                  className="w-full h-full object-cover rounded-xl"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
              </div>
              <div>
                <span className="font-extrabold text-xl text-white block">
                  {ACADEMY_CONFIG.name}
                </span>
                <span className="text-xs text-[#f59e0b] font-bold">
                  {ACADEMY_CONFIG.englishName}
                </span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-md font-normal">
              أكاديمية رائدة متخصصة في تعليم وتحفيظ القرآن الكريم للأطفال بحصص فردية 1-on-1 مباشرة عبر زووم، مع نخبة من المعلمين والمعلمات الأزهريين المجازين.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-slate-500">
              <span>جميع الحقوق محفوظة للأكاديمية © {new Date().getFullYear()}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-extrabold text-sm sm:text-base text-white">
              روابط الأكاديمية
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  عن الأكاديمية وركائزنا
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-white transition-colors">
                  لماذا التحفيظ الفردي عبر زووم؟
                </a>
              </li>
              <li>
                <a href="#teachers" className="hover:text-white transition-colors">
                  المعلمون والمعلمات
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">
                  باقات واشتراكات الحصص
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-white transition-colors">
                  آراء وتجارب أولياء الأمور
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenCurriculum}
                  className="hover:text-white transition-colors text-right cursor-pointer"
                >
                  استعراض المناهج المعتمدة
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h4 className="font-extrabold text-sm sm:text-base text-white">
              التواصل والدعم
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li className="flex items-center gap-2 text-slate-300">
                <Phone className="w-4 h-4 text-[#f59e0b] shrink-0" />
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#f59e0b] transition-colors"
                  dir="ltr"
                >
                  {ACADEMY_CONFIG.phone}
                </a>
              </li>
              <li className="flex items-center gap-2 text-slate-300">
                <Send className="w-4 h-4 text-[#f59e0b] shrink-0" />
                <a
                  href={ACADEMY_CONFIG.telegramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#f59e0b] transition-colors"
                >
                  قناة التليجرام الرسمية
                </a>
              </li>
              <li className="flex items-center gap-2 text-slate-400">
                <Clock className="w-4 h-4 text-slate-500 shrink-0" />
                <span>المواعيد: مرونة يومية من 8 ص حتى 10 م</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p className="text-center sm:text-right">
            تعليم تفاعلي فردي (1-on-1) مصمم خصيصاً ليتناسب مع وتيرة وقدرات كل طفل.
          </p>
          <div className="flex items-center gap-1 text-slate-400">
            <span>صُنع بحب وإخلاص لخدمة كتاب الله</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-current" />
          </div>
        </div>
      </div>
    </footer>
  );
};
