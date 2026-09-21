import React from 'react';
import { ACADEMY_CONFIG } from '../data/academyData';
import { getWhatsAppUrl } from '../utils/whatsapp';
import {
  CheckCircle2,
  Sparkles,
  Star,
  ShieldCheck,
  Clock,
  ArrowLeft,
  Video,
  Volume2,
  MessageCircle
} from 'lucide-react';
import heroChildTabletImg from '../assets/images/muslim_kid_tablet_1790002670016.jpg';

interface HeroProps {
  onOpenBooking: () => void;
  isMobileLayout?: boolean;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, isMobileLayout = false }) => {
  return (
    <section className="relative pt-6 pb-14 sm:pt-10 sm:pb-20 md:pt-16 md:pb-24 bg-white overflow-hidden">
      {/* Subtle modern soft UI backdrop blurs */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#005963]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-20 left-10 w-[450px] h-[450px] bg-[#f59e0b]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Mobile & Desktop layout: flex-col ensures Text is ALWAYS on top (order-1), Photo underneath (order-2) */}
        <div className={`flex flex-col ${isMobileLayout ? '' : 'lg:grid lg:grid-cols-12'} gap-8 sm:gap-12 lg:gap-16 items-center`}>
          
          {/* Text Column: Headline, Subheadline, Primary/Secondary CTAs, and Badges */}
          <div className={`order-1 lg:order-none ${isMobileLayout ? 'w-full' : 'lg:col-span-7'} flex flex-col items-start text-right space-y-5 sm:space-y-7`}>
            
            {/* Soft UI Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#e0f4f7] border border-[#b2e5ed] text-[#005963] font-bold text-xs sm:text-sm shadow-xs transition-transform hover:scale-[1.02]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#005963] animate-pulse" />
              <span>أكاديمية تعليم القرآن الكريم للأطفال أونلاين</span>
              <span className="bg-white/80 text-[#005963] text-[11px] px-2 py-0.5 rounded-full font-extrabold mr-1">
                حصص فردية 100%
              </span>
            </div>

            {/* Fluid Typography Headline (clamp prevents overflow on narrow mobile screens) */}
            <h1 className="font-extrabold text-[clamp(1.75rem,5.2vw,3.5rem)] text-[#003e45] tracking-tight leading-[1.24] sm:leading-[1.18] break-words">
              نغرس نور القرآن في قلب طفلك..
              <span className="block text-[#005963] mt-2 font-black">
                بحب، ورفق، وحفظ متقن
              </span>
            </h1>

            {/* Short Subheadline with responsive fluid text */}
            <p className="text-slate-600 text-[clamp(0.95rem,2.1vw,1.2rem)] leading-relaxed max-w-xl font-normal">
              حلقات فردية مباشرة (1-on-1) عبر زووم مع معلمين ومعلمات مجازين أزهريين، بأسلوب تفاعلي ممتع يربط الطفل بالقرآن مدى الحياة.
            </p>

            {/* CTAs: Primary Solid Button (Orange/Mustard) + Secondary Outline Button (WhatsApp) */}
            <div className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-1">
              
              {/* Primary Solid Button in Vibrant Orange/Mustard Yellow */}
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2.5 px-7 sm:px-8 py-4 sm:py-4.5 rounded-2xl bg-[#f59e0b] hover:bg-[#d97706] text-[#451a03] font-black text-sm sm:text-base transition-all duration-200 shadow-[0_10px_25px_rgba(245,158,11,0.35)] hover:shadow-[0_14px_30px_rgba(217,119,6,0.45)] active:scale-95 cursor-pointer group"
              >
                <Sparkles className="w-5 h-5 text-[#78350f] group-hover:rotate-12 transition-transform shrink-0" />
                <span>احجز حصة تجريبية مجانية</span>
                <ArrowLeft className="w-4 h-4 text-[#78350f] group-hover:-translate-x-1 transition-transform shrink-0" />
              </button>

              {/* Secondary Outline Button (WhatsApp) */}
              <a
                href={getWhatsAppUrl('السلام عليكم، أود استفساراً سريعاً عن حصص القرآن للأطفال في أكاديمية المسلم الصغير')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl border-2 border-[#005963] hover:bg-[#005963]/5 text-[#005963] font-bold text-sm sm:text-base bg-transparent transition-all duration-200 active:scale-95"
              >
                <MessageCircle className="w-4 h-4 text-[#005963] shrink-0" />
                <span>تواصل عبر واتساب</span>
              </a>

            </div>

            {/* Horizontal Badges: spaced evenly with small unified-color icons */}
            <div className="w-full pt-4 mt-2 border-t border-slate-100 flex flex-wrap sm:flex-nowrap items-center justify-between gap-3 text-xs sm:text-sm text-slate-600 font-medium">
              <span className="flex items-center gap-1.5 shrink-0">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#005963] shrink-0" />
                <span>حصة مجانية 100%</span>
              </span>
              <span className="flex items-center gap-1.5 shrink-0">
                <ShieldCheck className="w-3.5 h-3.5 text-[#005963] shrink-0" />
                <span>معلم مخصص لطفلك</span>
              </span>
              <span className="flex items-center gap-1.5 shrink-0">
                <Clock className="w-3.5 h-3.5 text-[#005963] shrink-0" />
                <span>مرونة كاملة بالمواعيد</span>
              </span>
            </div>

          </div>

          {/* Photo Column: ALWAYS below text on mobile (order-2), side-by-side on desktop */}
          <div className={`order-2 lg:order-none w-full ${isMobileLayout ? 'mt-4' : 'lg:col-span-5'} relative flex justify-center`}>
            <div className="relative w-full max-w-lg">
              
              {/* Soft modern glowing background halo */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#005963]/10 to-[#f59e0b]/15 rounded-3xl transform rotate-3 scale-105 filter blur-2xl pointer-events-none" />

              {/* Main Photo Card Container */}
              <div className="relative bg-white rounded-3xl p-3 sm:p-4 shadow-[0_20px_50px_rgba(0,89,99,0.1)] border border-slate-100 overflow-hidden">
                
                {/* Joyful Child Photo */}
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-100">
                  <img
                    src={heroChildTabletImg}
                    alt="طفل يتعلم القرآن الكريم بسعادة على التابلت في حصة فردية مباشرة"
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700 ease-out"
                  />

                  {/* Gentle gradient overlay for contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent pointer-events-none" />

                  {/* Top Floating Live Badge */}
                  <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-sm flex items-center gap-2 border border-white/40">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#10b981] animate-ping" />
                    <span className="text-xs font-bold text-[#005963]">
                      جلسة مباشرة على زووم
                    </span>
                  </div>

                  {/* Bottom Image Tag */}
                  <div className="absolute bottom-3 inset-x-3 text-white flex items-center justify-between text-xs px-3.5 py-2.5 bg-black/40 backdrop-blur-md rounded-xl border border-white/20">
                    <span className="font-semibold flex items-center gap-1.5">
                      <Volume2 className="w-4 h-4 text-[#f59e0b]" />
                      تجويد تفاعلي وقصص قرآنية
                    </span>
                    <span className="font-mono bg-white/20 px-2 py-0.5 rounded-md text-[11px]">
                      1-on-1 Zoom
                    </span>
                  </div>
                </div>

                {/* Floating Rating Mini-Card (Bottom-Right/Center) */}
                <div className="mt-3 bg-slate-50/80 rounded-2xl p-3 sm:p-3.5 border border-slate-100 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#005963] text-white flex items-center justify-center font-bold text-sm shadow-xs shrink-0">
                      <Video className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-1 text-[#f59e0b]">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-current" />
                        ))}
                        <span className="text-xs font-bold text-slate-800 mr-1">5.0</span>
                      </div>
                      <p className="text-[11px] sm:text-xs text-slate-500 font-medium mt-0.5">
                        أكثر من 750 عائلة راضية عن نتائج أطفالها
                      </p>
                    </div>
                  </div>

                  <span className="px-3 py-1 rounded-full bg-[#fef3c7] text-[#92400e] text-[11px] sm:text-xs font-extrabold shrink-0">
                    99% إتقان
                  </span>
                </div>

              </div>

              {/* Floating Accent Badge Top Left */}
              <div className="absolute -top-4 -left-4 hidden sm:flex items-center gap-2 bg-white px-4 py-2.5 rounded-2xl shadow-[0_10px_25px_rgba(0,0,0,0.06)] border border-slate-100 text-xs font-bold text-[#005963] animate-bounce duration-1000">
                <Sparkles className="w-4 h-4 text-[#f59e0b]" />
                <span>حصة مجانية اليوم!</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
