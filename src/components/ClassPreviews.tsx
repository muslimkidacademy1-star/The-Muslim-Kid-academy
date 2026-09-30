import React from 'react';
import { CLASS_SAMPLES } from '../data/academyData';
import { Play, Sparkles, ExternalLink, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface ClassPreviewsProps {
  onOpenBooking: () => void;
}

export const ClassPreviews: React.FC<ClassPreviewsProps> = ({ onOpenBooking }) => {
  return (
    <section id="class-previews" className="py-16 md:py-24 bg-[#F8FAFB] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#187A82]/20 shadow-xs text-[#187A82] font-bold text-xs sm:text-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" />
            <span>معاينة حية وموثقة</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F4F55] tracking-tight">
            شاهد كيف تسير الحصص مع أبنائنا
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            فيديوهات واقعية من داخل حصص زووم التفاعلية توضح لين المعلمين والمعلمات، تصحيح التجويد برفق، وأجواء التحفيز والمرح.
          </p>
        </div>

        {/* 6 Cards Responsive Grid (3 columns on Desktop, 1 on Mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {CLASS_SAMPLES.map((sample, idx) => (
            <a
              key={sample.id || idx}
              href={sample.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`مشاهدة فيديو: ${sample.title}`}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl border border-[#187A82]/15 hover:border-[#187A82]/40 transition-all duration-300 flex flex-col group hover:scale-105 hover:-translate-y-1.5 text-right cursor-pointer"
            >
              {/* Media Thumbnail Container with Play Overlay */}
              <div className="relative aspect-video bg-slate-900 overflow-hidden select-none">
                <img
                  src={sample.image}
                  alt={sample.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (target.src.indexOf('fallback') === -1) {
                      target.src = '/family-banner.png';
                    }
                  }}
                />

                {/* Dark Gradient Overlay for Contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent group-hover:from-slate-950/50 transition-colors" />

                {/* Category Badge on Top-Right */}
                <div className="absolute top-3 right-3 px-3 py-1.5 rounded-full text-xs font-extrabold shadow-md bg-white/95 backdrop-blur-md text-[#0F4F55] border border-white/40 flex items-center gap-1.5">
                  <span>{sample.categoryBadge}</span>
                </div>

                {/* Prominent Centered Play Button */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="relative flex items-center justify-center">
                    <span className="absolute w-16 h-16 rounded-full bg-[#187A82]/40 animate-ping group-hover:bg-[#187A82]/60" />
                    <div className="w-14 h-14 rounded-full bg-[#187A82] text-white flex items-center justify-center shadow-2xl transform group-hover:scale-115 active:scale-95 transition-all ring-4 ring-white/90 group-hover:bg-[#13666D]">
                      <Play className="w-6 h-6 fill-current mr-0.5" />
                    </div>
                  </div>
                </div>

                {/* Bottom Bar: Action Pill */}
                <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-md text-white text-[11px] px-2.5 py-1 rounded-lg font-bold flex items-center gap-1.5 border border-white/20 group-hover:bg-[#187A82] transition-colors">
                  <ExternalLink className="w-3 h-3" />
                  <span>مشاهدة الفيديو على فيسبوك ↗</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs text-slate-500 font-bold">
                    <span className="inline-flex items-center gap-1 text-[#187A82]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#187A82]" />
                      <span>{sample.teacherName}</span>
                    </span>
                    <span className="text-slate-400 font-normal">{sample.studentAge}</span>
                  </div>

                  <h3 className="font-extrabold text-base sm:text-lg text-[#0F4F55] group-hover:text-[#187A82] transition-colors leading-snug">
                    {sample.title}
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                    {sample.description}
                  </p>
                </div>

                {/* Action CTA Button inside Card */}
                <div className="pt-3 border-t border-slate-100 flex items-center gap-2">
                  <span className="w-full py-2.5 px-3 rounded-xl bg-[#E6F7F8] group-hover:bg-[#187A82] text-[#187A82] group-hover:text-white font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-xs">
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>مشاهدة الفيديو الآن</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Reassurance Banner under Videos */}
        <div className="mt-14 text-center bg-white rounded-3xl p-6 sm:p-8 border border-[#187A82]/15 shadow-sm max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 text-[#187A82] font-bold text-sm">
            <ShieldCheck className="w-5 h-5" />
            <span>خصوصية تامة 100% وأمان لأطفالكم</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
            جميع المقاطع المعروضة تمت موافقة أولياء الأمور الكريمة على نشرها تشجيعاً لأبنائهم. يتم تقديم الحصص بشكل خاص تماماً ومغلق بين المعلم والطالب.
          </p>
          <div className="pt-2">
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#187A82] hover:bg-[#13666D] text-white font-bold text-xs sm:text-sm transition-all shadow-md hover:shadow-lg active:scale-95 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-[#FDE68A]" />
              <span>احجز حصة لطفلك وجرّب بنفسك مجاناً</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
