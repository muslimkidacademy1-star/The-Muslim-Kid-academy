import React from 'react';
import {
  Sparkles,
  ArrowLeft,
  CheckCircle2,
  Star,
  ShieldCheck,
  Video,
  Clock
} from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
  onExplorePlans: () => void;
  isMobileLayout?: boolean;
}

export const Hero: React.FC<HeroProps> = ({
  onExplorePlans,
}) => {
  const officialWhatsAppLink =
    'https://wa.me/201065263121?text=السلام%20عليكم،%20أود%20الاستفسار%20عن%20حجز%20حصة%20تجريبية%20لطفلي%20في%20أكاديمية%20المسلم%20الصغير';

  const highlights = [
    {
      icon: Video,
      title: 'حصص فردية 100%',
      desc: 'بث مباشر 1 إلى 1 عبر زووم بكامل التركيز والخصوصية',
    },
    {
      icon: ShieldCheck,
      title: 'إشراف أزهري مباشر',
      desc: 'نخبة من معلمي ومعلمات الأزهر الشريف المجازين بالسند',
    },
    {
      icon: Clock,
      title: 'مواعيد مرنة للأسرة',
      desc: 'جدول يناسب دراسة طفلك مع إمكانية تعويض الحصص',
    },
  ];

  return (
    <section id="hero" className="relative pt-10 sm:pt-14 lg:pt-18 pb-14 sm:pb-18 lg:pb-20 overflow-hidden bg-[#F8FAFC]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* 1. Tag / Badge: SuperHi Soft Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-50 text-sky-700 border border-sky-200 text-xs sm:text-sm font-semibold mb-6 shadow-xs animate-in fade-in duration-300">
          <span className="w-2 h-2 rounded-full bg-sky-500 shrink-0 animate-pulse" />
          <span>تحفيظ القرآن الكريم واللغة العربية للأطفال أونلاين</span>
        </div>

        {/* 2. H1 Title: Bold, modern, large (#0F172A) */}
        <h1 className="font-black text-3xl sm:text-5xl lg:text-6xl text-[#0F172A] leading-[1.25] tracking-tight mb-5 max-w-4xl">
          أعظم استثمار في طفلك..
          <span className="block text-[#0284C7] mt-2">
            القرآن في قلبه وأنت مطمئن
          </span>
        </h1>

        {/* 3. Subtitle */}
        <p className="text-slate-600 text-base sm:text-lg lg:text-xl leading-relaxed mb-8 max-w-2xl font-normal">
          حصص فردية (1 إلى 1) بإشراف تربوي متكامل ومنهجية تحبب طفلك في كتاب الله واللغة العربية، دون تشتيت أو إحراج.
        </p>

        {/* 4. Action Area: Pill Buttons */}
        <div className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 mb-8">
          {/* Primary CTA: WhatsApp Link */}
          <a
            href={officialWhatsAppLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#0284C7] hover:bg-[#0369A1] active:bg-[#075985] text-white font-bold text-sm sm:text-base shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-95 transition-all cursor-pointer whitespace-nowrap"
          >
            <Sparkles className="w-4 h-4 text-amber-300 shrink-0" />
            <span>ابدأ بحصة تجريبية مجانية</span>
            <ArrowLeft className="w-4 h-4 shrink-0" />
          </a>

          {/* Secondary CTA: Scroll to pricing */}
          <button
            type="button"
            onClick={onExplorePlans}
            className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full border border-slate-300 hover:border-slate-400 bg-white hover:bg-slate-50 text-slate-700 font-bold text-sm sm:text-base shadow-xs hover:shadow-sm transition-all cursor-pointer whitespace-nowrap"
          >
            <span>استكشف الباقات</span>
          </button>
        </div>

        {/* 5. Trust Badges in Clean Minimal Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-6">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-slate-700 text-xs sm:text-sm font-semibold shadow-xs">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>معلم خاص لطفلك</span>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-slate-700 text-xs sm:text-sm font-semibold shadow-xs">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>مواعيد مرنة</span>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-slate-700 text-xs sm:text-sm font-semibold shadow-xs">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>100% فردية</span>
          </div>
        </div>

        {/* 6. Social Proof / Rating */}
        <div className="flex items-center justify-center gap-3 pt-2 text-xs sm:text-sm text-slate-500 font-medium mb-12">
          <div className="flex items-center gap-0.5 text-amber-400">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-current" />
            ))}
          </div>
          <span className="font-semibold text-slate-700">+750 ولي أمر يثقون بنا</span>
          <span className="text-slate-300">|</span>
          <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-bold text-xs border border-emerald-200/60">
            نسبة الرضا 99%
          </span>
        </div>

        {/* 7. SuperHi 3 Minimal Feature Cards (No images, purely editorial & informative) */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 pt-4 text-right">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-xs hover:shadow-sm hover:border-slate-300 transition-all text-right flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0 mt-0.5">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-sm sm:text-base text-[#0F172A] mb-1">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-xs leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
