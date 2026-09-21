import React, { useState, useEffect } from 'react';
import { TESTIMONIALS } from '../data/academyData';
import { Star, ChevronRight, ChevronLeft, CheckCircle, MessageSquareQuote, Sparkles, Heart, Award, Users } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface TestimonialsSectionProps {
  onOpenBooking: () => void;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ onOpenBooking }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [displayMode, setDisplayMode] = useState<'carousel' | 'grid'>('carousel');

  // Auto-advance carousel every 4.5 seconds unless paused
  useEffect(() => {
    if (!isAutoPlaying || displayMode === 'grid') return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isAutoPlaying, displayMode]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const currentItem = TESTIMONIALS[currentIndex];
  const nextItem = TESTIMONIALS[(currentIndex + 1) % TESTIMONIALS.length];
  const prevItem = TESTIMONIALS[(currentIndex - 1 + TESTIMONIALS.length) % TESTIMONIALS.length];

  return (
    <section id="reviews" className="py-20 md:py-28 bg-slate-50/50 relative overflow-hidden">
      {/* Background blurs */}
      <div className="absolute top-10 -right-20 w-80 h-80 rounded-full bg-[#f59e0b]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-80 h-80 rounded-full bg-[#005963]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#e0f4f7] text-[#005963] font-bold text-xs sm:text-sm border border-[#b2e5ed]">
            <Heart className="w-4 h-4 text-[#005963] fill-current" />
            <span>ثقة نعتز بها • تجارب موثقة</span>
          </div>

          <h2 className="font-extrabold text-[clamp(1.35rem,3.8vw,2.25rem)] text-[#003e45] tracking-tight leading-[1.25] break-words">
            آراء أولياء الأمور وقصص تميز أبطالنا
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            استمع لتجارب حقيقية من أمهات وآباء وثقوا في أكاديمية المسلم الصغير، وشاهدوا أثر الرفق والتشجيع في حفظ وتخلق أبنائهم بالقرآن.
          </p>

          {/* Social Proof Metric Pill */}
          <div className="flex items-center justify-center gap-3 pt-2">
            <div className="flex items-center gap-1 bg-white px-4 py-1.5 rounded-full shadow-xs border border-slate-200 text-xs font-bold text-slate-800">
              <span className="text-[#f59e0b] flex">
                <Star className="w-4 h-4 fill-current" />
              </span>
              <span>4.9 / 5.0</span>
              <span className="text-slate-400 mx-1">•</span>
              <span className="text-slate-500 font-normal">+750 تقييم معتمد</span>
            </div>
            <div className="hidden sm:flex items-center gap-1.5 text-xs text-slate-500">
              <CheckCircle className="w-4 h-4 text-emerald-600" />
              <span>اشتراكات عائلية فعلية</span>
            </div>
          </div>
        </div>

        {/* View Mode Toggle Controls */}
        <div className="flex items-center justify-between mb-8 pb-3 border-b border-slate-200">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-500">
            <span>طريقة العرض:</span>
            <button
              onClick={() => setDisplayMode('carousel')}
              className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer ${
                displayMode === 'carousel'
                  ? 'bg-[#005963] text-white shadow-xs'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              عرض متحرك (سلايدر)
            </button>
            <button
              onClick={() => setDisplayMode('grid')}
              className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer ${
                displayMode === 'grid'
                  ? 'bg-[#005963] text-white shadow-xs'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              عرض الشبكة ({TESTIMONIALS.length})
            </button>
          </div>

          {displayMode === 'carousel' && (
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className="text-xs text-slate-500 hover:text-[#005963] font-medium hidden sm:inline-block cursor-pointer"
              >
                {isAutoPlaying ? 'إيقاف الحركة المؤقتة' : 'تشغيل الحركة التلقائية'}
              </button>
              <div className="flex items-center gap-1">
                <button
                  onClick={handlePrev}
                  aria-label="الرأي السابق"
                  className="w-9 h-9 rounded-xl bg-white hover:bg-slate-100 text-[#005963] border border-slate-200 flex items-center justify-center transition-colors cursor-pointer shadow-xs"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  aria-label="الرأي التالي"
                  className="w-9 h-9 rounded-xl bg-white hover:bg-slate-100 text-[#005963] border border-slate-200 flex items-center justify-center transition-colors cursor-pointer shadow-xs"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Carousel View Mode */}
        {displayMode === 'carousel' ? (
          <div
            className="relative"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <div className="max-w-4xl mx-auto">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-[0_12px_40px_rgba(0,89,99,0.06)] border border-slate-100 relative text-right"
                >
                  {/* Big subtle quote watermark */}
                  <MessageSquareQuote className="absolute top-6 left-6 sm:top-10 sm:left-10 w-16 h-16 sm:w-24 sm:h-24 text-slate-100 pointer-events-none" />

                  <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
                    
                    {/* Child Profile & Country Details */}
                    <div className="md:col-span-4 flex flex-col items-center text-center space-y-3 p-5 rounded-2xl bg-slate-50 border border-slate-100">
                      <div className="relative">
                        <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl overflow-hidden bg-slate-100 p-1 ring-4 ring-[#fef3c7] shadow-sm">
                          <img
                            src={currentItem.childAvatar}
                            alt={currentItem.childName}
                            className="w-full h-full object-cover rounded-2xl"
                          />
                        </div>
                        <span className="absolute -bottom-2 -left-2 text-lg bg-white rounded-full p-1 shadow-sm border border-slate-200" title={currentItem.country}>
                          {currentItem.countryFlag}
                        </span>
                      </div>

                      <div>
                        <h4 className="font-extrabold text-base sm:text-lg text-slate-900">
                          {currentItem.childName}
                        </h4>
                        <p className="text-xs text-[#005963] font-bold">
                          العمر: {currentItem.childAge}
                        </p>
                        <p className="text-[11px] text-slate-500 font-medium">
                          {currentItem.city}، {currentItem.country}
                        </p>
                      </div>

                      {/* Milestone badge */}
                      <div className="w-full mt-2 pt-2 border-t border-slate-200">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#e0f4f7] text-[#005963] text-xs font-bold">
                          <Award className="w-3.5 h-3.5 text-[#f59e0b]" />
                          <span>{currentItem.milestone}</span>
                        </span>
                      </div>
                    </div>

                    {/* Testimonial Quote & Parent Details */}
                    <div className="md:col-span-8 flex flex-col justify-between space-y-5">
                      
                      {/* Top Bar: Stars + Verified Badge */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1 text-[#f59e0b]">
                          {Array.from({ length: currentItem.rating }).map((_, i) => (
                            <Star key={i} className="w-5 h-5 fill-current" />
                          ))}
                          <span className="text-xs font-bold text-slate-700 mr-1.5">
                            تقييم 5 نجوم ممتاز
                          </span>
                        </div>

                        <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                          <CheckCircle className="w-3.5 h-3.5" />
                          <span>اشتراك فعلي موثق</span>
                        </span>
                      </div>

                      {/* Actual Quote */}
                      <p className="text-slate-800 text-base sm:text-lg lg:text-xl font-normal leading-relaxed">
                        "{currentItem.text}"
                      </p>

                      {/* Bottom Parent Signature */}
                      <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                        <div>
                          <p className="font-extrabold text-sm sm:text-base text-slate-900">
                            {currentItem.parentName}
                          </p>
                          <p className="text-xs text-slate-500">
                            ولي أمر {currentItem.childName} • {currentItem.date}
                          </p>
                        </div>

                        <div className="text-left">
                          <span className="text-xs font-semibold text-[#005963] bg-slate-100 px-3 py-1 rounded-full">
                            حصة زووم فردية
                          </span>
                        </div>
                      </div>

                    </div>

                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Indicator Dots */}
            <div className="flex items-center justify-center gap-2 mt-6">
              {TESTIMONIALS.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  onClick={() => setCurrentIndex(dotIdx)}
                  aria-label={`انتقل إلى التقييم ${dotIdx + 1}`}
                  className={`h-2.5 rounded-full transition-all cursor-pointer ${
                    dotIdx === currentIndex
                      ? 'w-8 bg-[#005963]'
                      : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                  }`}
                />
              ))}
            </div>

          </div>
        ) : (
          /* Grid View Mode */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-right">
            {TESTIMONIALS.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-3xl p-7 shadow-[0_8px_30px_rgba(0,89,99,0.05)] hover:shadow-[0_16px_40px_rgba(0,89,99,0.1)] border border-slate-100 flex flex-col justify-between space-y-4 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="space-y-4">
                  {/* Top Child & Parent */}
                  <div className="flex items-center gap-3">
                    <div className="relative shrink-0">
                      <div className="w-14 h-14 rounded-2xl overflow-hidden bg-slate-100 ring-2 ring-[#fef3c7]">
                        <img
                          src={item.childAvatar}
                          alt={item.childName}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <span className="absolute -bottom-1 -left-1 text-xs bg-white rounded-full px-1 shadow-xs border border-slate-200">
                        {item.countryFlag}
                      </span>
                    </div>

                    <div>
                      <h3 className="font-extrabold text-sm text-slate-900">
                        {item.parentName}
                      </h3>
                      <p className="text-xs text-[#005963] font-bold">
                        {item.childName} ({item.childAge})
                      </p>
                      <span className="text-[11px] text-slate-500">
                        {item.city}، {item.country}
                      </span>
                    </div>
                  </div>

                  {/* Stars */}
                  <div className="flex items-center justify-between pt-1">
                    <div className="flex text-[#f59e0b]">
                      {Array.from({ length: item.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>

                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">
                      <CheckCircle className="w-3 h-3" />
                      <span>موثق</span>
                    </span>
                  </div>

                  {/* Milestone */}
                  <div className="p-2.5 rounded-xl bg-slate-50 text-[11px] font-bold text-[#005963] border border-slate-200 flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-[#f59e0b] shrink-0" />
                    <span>{item.milestone}</span>
                  </div>

                  {/* Quote */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    "{item.text}"
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-400 flex items-center justify-between">
                  <span>{item.date}</span>
                  <span className="text-[#005963] font-bold">تجربة زووم فردية</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Bottom Conversion Prompt */}
        <div className="mt-16 bg-white rounded-3xl p-8 sm:p-10 shadow-[0_12px_40px_rgba(0,89,99,0.06)] border border-slate-100 text-center max-w-3xl mx-auto space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-[#fef3c7] text-[#92400e] flex items-center justify-center mx-auto font-bold">
            <Sparkles className="w-6 h-6" />
          </div>

          <div className="space-y-1">
            <h3 className="font-extrabold text-xl sm:text-3xl text-[#003e45]">
              هل ترغب في أن يشاركنا طفلك قصة نجاحه القادمة؟
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto leading-relaxed">
              ابدأ الآن بحصة تجريبية مجانية 100% بدون أي التزام بالدفع، وتعرف على معلم طفلك المفضل وشاهد الفارق بنفسك.
            </p>
          </div>

          <div className="pt-3">
            <button
              onClick={onOpenBooking}
              className="px-8 py-4 rounded-2xl bg-[#f59e0b] hover:bg-[#d97706] text-[#451a03] font-black text-sm sm:text-base shadow-[0_10px_25px_rgba(245,158,11,0.35)] hover:shadow-[0_14px_30px_rgba(217,119,6,0.45)] active:scale-95 transition-all cursor-pointer inline-flex items-center gap-2"
            >
              <span>احجز الحصة التجريبية المجانية لطفلك الآن</span>
              <span className="font-mono text-xs bg-white/30 px-2 py-0.5 rounded-full">مجاناً</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
