import React from 'react';
import {
  Sparkles,
  ArrowLeft,
  CheckCircle2,
  Video,
  Star,
  ShieldCheck,
  Clock,
  Sparkle
} from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
  onExplorePlans: () => void;
  isMobileLayout?: boolean;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenBooking,
  onExplorePlans,
}) => {
  return (
    <section id="hero" className="relative py-4 sm:py-6 lg:py-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* Panoramic Banner Container with rounded-3xl and subtle shadow */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-[#0c3645]/20 border border-white/20 min-h-[580px] sm:min-h-[620px] lg:min-h-[660px] flex items-center bg-[#0e485e]">
          
          {/* Panoramic Family Background Image */}
          <img
            src="https://i.ibb.co/ycLZqzmy/Chat-GPT-30-2026-03-21-12.png"
            alt="عائلة مسلمة سعيدة تتابع حصة تحفيظ قرآن أونلاين - أكاديمية المسلم الصغير"
            className="absolute inset-0 w-full h-full object-cover object-left md:object-center"
            onError={(e) => {
              // Local high-resolution cache fallback (1916x821)
              const target = e.target as HTMLImageElement;
              if (target.src.indexOf('family-banner.png') === -1) {
                target.src = '/family-banner.png';
              }
            }}
          />

          {/* Dynamic Gradient Overlay:
              - Mobile: bg-gradient-to-t (dark gradient from bottom to top for 100% legibility)
              - Desktop RTL: bg-gradient-to-l (from dark teal/blue on right where text floats to transparent on left where family sits)
          */}
          <div
            className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#082834] via-[#0d3f52]/90 via-65% to-black/25 md:bg-gradient-to-l md:from-[#092d3b]/95 md:via-[#0d3f52]/85 md:via-55% md:to-transparent"
            aria-hidden="true"
          />

          {/* Additional subtle atmospheric glow */}
          <div
            className="absolute top-0 right-0 w-96 h-96 bg-[#0284C7]/15 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          {/* Main Content Area */}
          <div className="relative z-10 w-full h-full py-10 px-5 sm:px-10 lg:px-14 flex items-center">
            
            {/* Desktop RTL: Right Side 60% Width for Floating Text */}
            <div className="w-full lg:w-[60%] flex flex-col items-start text-right">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-md border border-white/30 text-xs sm:text-sm font-bold text-white shadow-sm mb-5">
                <span className="w-2 h-2 rounded-full bg-[#38BDF8] animate-pulse" />
                <span>تحفيظ القرآن الكريم للأطفال أونلاين • إشراف تربوي متكامل</span>
              </div>

              {/* Main Hook (H1, bold, large typography matching Logo) */}
              <h1 className="font-black text-[clamp(2.1rem,4.5vw,3.6rem)] text-white tracking-tight leading-snug sm:leading-tight mb-4 drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)]">
                أعظم استثمار في طفلك..
                <span className="block text-[#7DD3FC] mt-1.5 font-black">
                  القرآن في قلبه وأنت مطمئن
                </span>
              </h1>

              {/* Subtitle with font-normal and text-slate-200 */}
              <p className="text-slate-200 text-base sm:text-lg lg:text-xl leading-relaxed max-w-xl font-normal mb-8 drop-shadow-xs">
                تعليم القرآن الكريم واللغة العربية للأطفال أونلاين عبر حصص فردية (1 إلى 1) تضمن التركيز الكامل بإشراف دقيق.
              </p>

              {/* Action Buttons: Sky Blue CTA + Ghost/Outline Button with font-bold */}
              <div className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-8">
                {/* Primary CTA: Bright Sky Blue Button */}
                <a
                  href="https://wa.me/201065263121?text=السلام%20عليكم،%20أود%20الاستفسار%20عن%20حجز%20حصة%20تجريبية%20لطفلي%20في%20أكاديمية%20المسلم%20الصغير"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl bg-[#0284C7] hover:bg-[#0369A1] active:bg-[#075985] text-white font-bold text-base transition-all duration-300 shadow-[0_10px_25px_rgba(2,132,199,0.4)] hover:shadow-[0_14px_30px_rgba(2,132,199,0.55)] hover:-translate-y-0.5 active:translate-y-0 active:scale-98 cursor-pointer group"
                >
                  <Sparkles className="w-5 h-5 text-[#FDE68A] group-hover:rotate-12 transition-transform" />
                  <span>ابدأ بحصة تجريبية مجانية</span>
                  <ArrowLeft className="w-4 h-4 text-white group-hover:-translate-x-1 transition-transform" />
                </a>

                {/* Secondary CTA: Ghost/Outline Button */}
                <button
                  type="button"
                  onClick={onExplorePlans}
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl border-2 border-white/70 hover:border-white bg-white/10 hover:bg-white/20 active:bg-white/25 backdrop-blur-md text-white font-bold text-base transition-all duration-300 shadow-sm hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                >
                  <span>استكشف الباقات والخطط</span>
                </button>
              </div>

              {/* Trust Badges Below Buttons */}
              <div className="w-full pt-5 border-t border-white/20 flex flex-wrap items-center gap-y-2.5 gap-x-5 text-xs sm:text-sm text-white/95 font-semibold">
                <div className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#38BDF8] shrink-0" />
                  <span>حصة تجريبية 100% مجانية</span>
                </div>
                <div className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#38BDF8] shrink-0" />
                  <span>معلم خاص لطفلك</span>
                </div>
                <div className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#38BDF8] shrink-0" />
                  <span>مواعيد مرنة</span>
                </div>
              </div>

              {/* Social Proof Mini Bar */}
              <div className="mt-4 flex items-center gap-3 text-xs sm:text-sm text-white/80 font-medium">
                <div className="flex items-center gap-0.5 text-[#F59E0B]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <span>+750 ولي أمر يثقون بنا</span>
                <span className="text-white/40">|</span>
                <span className="px-2 py-0.5 rounded-full bg-[#38BDF8]/20 text-[#7DD3FC] border border-[#38BDF8]/30 font-bold text-xs">
                  رضا 99%
                </span>
              </div>

            </div>

          </div>

          {/* Floating Live Teacher Glass Badge on Left (Desktop only, away from faces) */}
          <div className="hidden xl:flex absolute bottom-6 left-6 z-20 items-center gap-3 px-4 py-2.5 rounded-2xl bg-white/15 backdrop-blur-md border border-white/25 shadow-lg text-white">
            <div className="w-9 h-9 rounded-xl bg-[#0284C7] flex items-center justify-center font-bold text-xs shadow-inner">
              <Video className="w-4 h-4 text-white" />
            </div>
            <div className="text-right">
              <div className="text-xs font-bold text-white flex items-center gap-1.5">
                <span>المعلم المباشر</span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              </div>
              <div className="text-[10px] text-[#BAE6FD]">جلسة فردية مباشرة 1-on-1</div>
            </div>
            <span className="mr-2 px-2.5 py-1 rounded-lg bg-white/20 text-white text-[11px] font-extrabold">
              🎯 حصص 100%
            </span>
          </div>

        </div>
      </div>
    </section>
  );
};

