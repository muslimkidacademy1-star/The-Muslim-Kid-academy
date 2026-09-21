import React from 'react';
import { BOOKING_STEPS } from '../data/academyData';
import { Send, MessageCircle, Sparkles, ArrowLeft } from 'lucide-react';
import { getWhatsAppUrl } from '../utils/whatsapp';

interface BookingStepsProps {
  onOpenBooking: () => void;
}

export const BookingSteps: React.FC<BookingStepsProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="px-4 py-1.5 rounded-full bg-[#e0f4f7] text-[#005963] font-bold text-xs sm:text-sm inline-block border border-[#b2e5ed]">
            بكل بساطة وسرعة
          </span>
          <h2 className="font-extrabold text-[clamp(1.35rem,3.8vw,2.25rem)] text-[#003e45] tracking-tight leading-[1.25] break-words">
            3 خطوات سهلة لبدء رحلة طفلك القرآنية
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            لا توجد استمارات معقدة؛ كل شيء يتم بسلاسة ومرونة تناسب جدول أسرتكم الكريمة.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {BOOKING_STEPS.map((step, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgba(0,89,99,0.05)] hover:shadow-[0_16px_40px_rgba(0,89,99,0.1)] border border-slate-100 text-center space-y-4 hover:-translate-y-1.5 transition-all duration-300 relative"
            >
              <div
                className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto font-black text-2xl shadow-xs text-white ${
                  idx === 1 ? 'bg-[#f59e0b] text-[#451a03]' : 'bg-[#005963]'
                }`}
              >
                {step.step}
              </div>

              <h3 className="font-extrabold text-lg sm:text-xl text-slate-900">
                {step.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div className="text-center pt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-3 px-8 py-4.5 rounded-2xl bg-[#f59e0b] hover:bg-[#d97706] text-[#451a03] font-black text-sm sm:text-base transition-all shadow-[0_10px_25px_rgba(245,158,11,0.35)] active:scale-95 cursor-pointer"
          >
            <Sparkles className="w-5 h-5 text-[#78350f]" />
            <span>ابدأ الخطوة الأولى: احجز الحصة المجانية</span>
            <ArrowLeft className="w-5 h-5 text-[#78350f]" />
          </button>

          <a
            href={getWhatsAppUrl('السلام عليكم، أرغب في الاستفسار وحجز الحصة التجريبية المجانية لطفلي')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-4.5 rounded-2xl bg-slate-50 hover:bg-slate-100 text-[#005963] font-bold text-sm sm:text-base border border-slate-200 transition-colors"
          >
            <MessageCircle className="w-5 h-5 text-emerald-600" />
            <span>محادثة واتساب مباشرة</span>
          </a>
        </div>

      </div>
    </section>
  );
};
