import React from 'react';
import { X, Star, Award, CheckCircle2, Heart, MessageSquareQuote } from 'lucide-react';

interface ParentPortalModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBooking: () => void;
}

export const ParentPortalModal: React.FC<ParentPortalModalProps> = ({
  isOpen,
  onClose,
  onOpenBooking,
}) => {
  if (!isOpen) return null;

  const parentReviews = [
    {
      parent: 'أم عبد الله',
      country: 'المملكة العربية السعودية (الرياض)',
      child: 'عبد الله (7 سنوات)',
      text: 'ما شاء الله تبارك الله، ابني كان ينفر من الحلقات الجماعية بسبب الخجل، لكن مع الشيخ في الحصة الفردية أصبح ينتظر موعد الحصة بحماس وحفظ جزء عم في وقت قياسي وبإتقان مخارج ممتاز.',
      rating: 5,
    },
    {
      parent: 'أبو مريم',
      country: 'مصر (القاهرة)',
      child: 'مريم (6 سنوات)',
      text: 'أسلوب الأستاذة مريم فوق الرائع، أسلوب قصصي وتشجيع بالنجمات والشارات خلى بنتي تحب القرآن من قلبها وتكرر الآيات حتى وهي تلعب. جزاكم الله خيراً.',
      rating: 5,
    },
    {
      parent: 'أم يحيى وسارة',
      country: 'الإمارات (دبي)',
      child: 'يحيى (9 سنوات) وسارة (11 سنة)',
      text: 'استفدنا من باقة الإخوة، المعلمون قمة في الاحترام والأمانة، والتقارير الأسبوعية بتخلينا متابعين كل سورة وحكم تجويدي أول بأول. راحة بال تامة.',
      rating: 5,
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-100 text-right max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="p-5 bg-[#005963] text-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#f59e0b] text-[#451a03] flex items-center justify-center font-bold">
              <Heart className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-extrabold text-base sm:text-lg">
                بوابة ولي الأمر • تقارير المتابعة وآراء الأسر
              </h3>
              <p className="text-xs text-cyan-200">
                نظام متابعة أسبوعي شفاف وتقارير أداء دورية تضعك في قلب رحلة طفلك
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          
          {/* Section 1: Weekly Progress Report Sample */}
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-[#005963]" />
                <span className="font-extrabold text-sm sm:text-base text-slate-900">
                  نموذج تقرير المتابعة الأسبوعي للطفل
                </span>
              </div>
              <span className="px-3 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
                إنجاز ممتاز
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="bg-white p-3 rounded-xl border border-slate-200 space-y-1">
                <span className="text-slate-500 font-medium">سورة الأسبوع الجديدة:</span>
                <p className="font-bold text-slate-900">سورة الفجر (الآيات 1 - 15)</p>
              </div>
              <div className="bg-white p-3 rounded-xl border border-slate-200 space-y-1">
                <span className="text-slate-500 font-medium">المراجعة والتثبيت:</span>
                <p className="font-bold text-slate-900">سورة البلد والشمس والليل</p>
              </div>
              <div className="bg-white p-3 rounded-xl border border-slate-200 space-y-1">
                <span className="text-slate-500 font-medium">الحكم التجويدي المكتسب:</span>
                <p className="font-bold text-slate-900">القلقلة ومخارج الحروف اللثوية</p>
              </div>
            </div>

            <div className="bg-white p-3.5 rounded-xl border border-slate-200 text-xs space-y-1">
              <span className="font-bold text-[#005963]">ملاحظة المعلم لولي الأمر:</span>
              <p className="text-slate-600 leading-relaxed">
                «ما شاء الله، عبد الله متميز جداً ومستجيب ومبتسم طوال الحصة. تم تكريمه بنجوم الشجاعة في نطق حرف الظاء.»
              </p>
            </div>
          </div>

          {/* Section 2: Parent Testimonials */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <MessageSquareQuote className="w-5 h-5 text-[#f59e0b]" />
              <h4 className="font-extrabold text-base text-slate-900">
                ماذا يقول أولياء الأمور عن أسلوبنا؟
              </h4>
            </div>

            <div className="grid grid-cols-1 gap-3">
              {parentReviews.map((rev, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-2 text-right"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-bold text-sm text-slate-900 block">
                        {rev.parent}
                      </span>
                      <span className="text-[11px] text-[#005963] font-bold">
                        {rev.child} • {rev.country}
                      </span>
                    </div>

                    <div className="flex text-[#f59e0b]">
                      {Array.from({ length: rev.rating }).map((_, rIdx) => (
                        <Star key={rIdx} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    "{rev.text}"
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Action */}
          <div className="text-center pt-2">
            <button
              onClick={() => {
                onClose();
                onOpenBooking();
              }}
              className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-[#f59e0b] hover:bg-[#d97706] text-[#451a03] font-black text-xs sm:text-sm shadow-md active:scale-95 transition-all cursor-pointer"
            >
              ابدأ تجربة طفلك المجانية وانضم لأسر الأكاديمية
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
