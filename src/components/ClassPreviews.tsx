import React, { useState, useEffect } from 'react';
import { CLASS_SAMPLES } from '../data/academyData';
import { ClassSample } from '../types';
import { Play, User, Sparkles, X, ExternalLink, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface ClassPreviewsProps {
  onOpenBooking: () => void;
}

export const ClassPreviews: React.FC<ClassPreviewsProps> = ({ onOpenBooking }) => {
  const [activeSample, setActiveSample] = useState<ClassSample | null>(null);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveSample(null);
      }
    };
    if (activeSample) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeSample]);

  const handleOpenSample = (sample: ClassSample) => {
    setActiveSample(sample);
  };

  return (
    <section id="samples" className="py-16 md:py-24 bg-slate-50/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <span className="px-4 py-1.5 rounded-full bg-[#e0f4f7] text-[#005963] font-bold text-xs sm:text-sm inline-block border border-[#b2e5ed]">
            معاينة حية وموثقة
          </span>
          <h2 className="font-extrabold text-[clamp(1.35rem,3.8vw,2.25rem)] text-[#003e45] tracking-tight leading-[1.25] break-words">
            شاهد كيف تسير الحصص مع أبنائنا
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            فيديوهات واقعية من داخل حصص زووم التفاعلية توضح لين المعلمين والمعلمات، تصحيح التجويد برفق، وأجواء التحفيز والمرح.
          </p>
        </div>

        {/* Samples Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {CLASS_SAMPLES.map((sample) => (
            <div
              key={sample.id}
              className="bg-white rounded-3xl overflow-hidden shadow-[0_6px_25px_rgba(0,89,99,0.06)] hover:shadow-[0_16px_40px_rgba(0,89,99,0.12)] border border-slate-100 transition-all duration-300 flex flex-col group hover:-translate-y-1.5 text-right"
            >
              {/* Entire Media Thumbnail Area is CLICKABLE */}
              <div
                onClick={() => handleOpenSample(sample)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleOpenSample(sample);
                  }
                }}
                className="relative aspect-video bg-slate-900 overflow-hidden cursor-pointer select-none"
                aria-label={`تشغيل فيديو ${sample.title}`}
              >
                <img
                  src={sample.image}
                  alt={sample.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                />
                
                {/* Play Button Overlay with Pulse */}
                <div className="absolute inset-0 bg-[#003e45]/30 group-hover:bg-[#003e45]/20 transition-colors flex items-center justify-center">
                  <div className="relative flex items-center justify-center">
                    <span className="absolute w-16 h-16 rounded-full bg-[#f59e0b]/40 animate-ping" />
                    <div className="w-14 h-14 rounded-full bg-[#f59e0b] hover:bg-[#d97706] text-[#451a03] flex items-center justify-center shadow-2xl transform group-hover:scale-115 active:scale-95 transition-all ring-4 ring-white/80">
                      <Play className="w-6 h-6 fill-current mr-0.5" />
                    </div>
                  </div>
                </div>

                {/* Category Badge */}
                <span
                  className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-black shadow-md ${
                    sample.categoryType === 'boys'
                      ? 'bg-[#005963] text-white'
                      : sample.categoryType === 'girls'
                      ? 'bg-[#f59e0b] text-[#451a03]'
                      : 'bg-slate-900 text-white'
                  }`}
                >
                  {sample.categoryBadge}
                </span>

                {/* Duration / Format Tag */}
                <span className="absolute bottom-3 left-3 px-2.5 py-0.5 rounded-lg bg-black/70 backdrop-blur-xs text-[11px] font-bold text-white flex items-center gap-1">
                  <span>فيديو مباشر</span>
                </span>
              </div>

              {/* Sample Details */}
              <div className="p-6 sm:p-7 flex flex-col justify-between flex-1 space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs text-slate-500 font-semibold">
                    <span className="flex items-center gap-1.5 text-[#005963] font-bold">
                      <User className="w-3.5 h-3.5" />
                      {sample.teacherName}
                    </span>
                    <span className="bg-slate-100 px-2.5 py-0.5 rounded-full text-slate-600 font-medium">
                      {sample.studentAge}
                    </span>
                  </div>

                  <h3
                    onClick={() => handleOpenSample(sample)}
                    className="font-extrabold text-base sm:text-lg text-slate-900 leading-snug cursor-pointer hover:text-[#005963] transition-colors"
                  >
                    {sample.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {sample.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                  <span className="text-xs font-bold text-[#b45309]">
                    {sample.highlightTag}
                  </span>

                  {/* Fully Clickable Action Buttons */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleOpenSample(sample)}
                      className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#005963] hover:text-[#003e45] bg-[#e0f4f7]/70 hover:bg-[#e0f4f7] px-3 py-1.5 rounded-xl transition-colors cursor-pointer"
                    >
                      <Play className="w-3 h-3 fill-current" />
                      <span>مشاهدة الحصة</span>
                    </button>

                    <a
                      href={sample.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="فتح في فيسبوك"
                      aria-label={`فتح فيديو ${sample.title} في فيسبوك`}
                      className="p-1.5 rounded-xl text-slate-400 hover:text-[#005963] hover:bg-slate-100 transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Video Lightbox Modal */}
        {activeSample && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200"
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                setActiveSample(null);
              }
            }}
          >
            <div className="relative w-full max-w-3xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-100 text-right animate-in zoom-in-95 duration-200 flex flex-col max-h-[92vh]">
              
              {/* Modal Top Bar */}
              <div className="p-4 bg-[#005963] text-white flex items-center justify-between gap-3 shrink-0">
                <div className="flex items-center gap-2.5 overflow-hidden">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#10b981] animate-ping shrink-0" />
                  <span className="font-extrabold text-sm sm:text-base truncate">
                    {activeSample.title}
                  </span>
                  <span className="hidden sm:inline-block px-2.5 py-0.5 rounded-full bg-white/20 text-[11px] font-bold">
                    {activeSample.categoryBadge}
                  </span>
                </div>

                <button
                  onClick={() => setActiveSample(null)}
                  aria-label="إغلاق الفيديو"
                  className="w-8 h-8 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center transition-colors cursor-pointer shrink-0"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Embedded Video Box */}
              <div className="relative bg-black flex-1 min-h-[300px] sm:min-h-[420px] max-h-[65vh] flex items-center justify-center overflow-hidden">
                <iframe
                  src={`https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(
                    activeSample.videoUrl
                  )}&show_text=false&t=0&autoplay=true`}
                  title={activeSample.title}
                  className="w-full h-full min-h-[300px] sm:min-h-[420px]"
                  style={{ border: 'none', overflow: 'hidden' }}
                  scrolling="no"
                  frameBorder="0"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  allowFullScreen={true}
                />
              </div>

              {/* Modal Footer Controls & CTA */}
              <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3.5 shrink-0">
                
                {/* Secondary direct link in new tab */}
                <a
                  href={activeSample.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#005963] hover:text-[#003e45] bg-white hover:bg-[#e0f4f7] px-4 py-2.5 rounded-xl border border-slate-200 transition-colors w-full sm:w-auto justify-center"
                >
                  <ExternalLink className="w-4 h-4 text-[#005963]" />
                  <span>فتح الفيديو في فيسبوك مباشرة</span>
                </a>

                {/* Primary Booking CTA */}
                <button
                  onClick={() => {
                    setActiveSample(null);
                    onOpenBooking();
                  }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#f59e0b] hover:bg-[#d97706] text-[#451a03] font-black text-xs sm:text-sm shadow-md active:scale-95 transition-all cursor-pointer whitespace-nowrap"
                >
                  <Sparkles className="w-4 h-4 text-[#78350f]" />
                  <span>احجز حصة تجريبية لطفلك مجاناً</span>
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
