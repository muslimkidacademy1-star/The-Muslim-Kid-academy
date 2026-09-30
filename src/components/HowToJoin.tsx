import React, { useState } from 'react';
import {
  FileText,
  Search,
  CalendarCheck,
  Rocket,
  CheckCircle2,
  Sparkles,
  ArrowLeft
} from 'lucide-react';

interface HowToJoinProps {
  onOpenBooking: () => void;
}

export const HowToJoin: React.FC<HowToJoinProps> = ({ onOpenBooking }) => {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      stepNumber: 1,
      title: 'طلب الحصة التجريبية',
      description: 'سجل بيانات طفلك في دقيقة واحدة عبر نموذج التسجيل أو واتساب، وحدد عمره ومستواه التقريبي.',
      detail: 'لا يتطلب الأمر أي بطاقة بنكية، الحصة مجانية 100% لتجربة أسلوب المعلم.',
      icon: FileText,
      badge: 'دقيقة واحدة',
    },
    {
      stepNumber: 2,
      title: 'تقييم المستوى وتحديد المعلم',
      description: 'جلسة استكشافية قصيرة ومحببة مع معلم متخصص لاختيار المسار الأنسب لقدرات طفلك.',
      detail: 'نحدد بدقة ما إذا كان الطفل يحتاج تأسيس مخارج الحروف وقاعدة نورانية أو حفظ مباشر.',
      icon: Search,
      badge: 'جلسة ودية',
    },
    {
      stepNumber: 3,
      title: 'اختيار باقة الاشتراك والمواعيد',
      description: 'مرونة كاملة في الأيام والأوقات، مع اختيار الباقة التي تناسب جدول الأسرة وروتين الطفل.',
      detail: 'يمكنك اختيار معلم أو معلمة، وتحديد الأيام وساعات البث المناسبة لكم.',
      icon: CalendarCheck,
      badge: 'مرونة تامة',
    },
    {
      stepNumber: 4,
      title: 'انطلاق الحلقات والتقارير الأسبوعية',
      description: 'متابعة دورية لتطور الحفظ، مع تقارير أداء ومكافآت تحفيزية مستمرة تشجع طفلك على الإنجاز.',
      detail: 'إشراف مباشر من 8 مشرفين متخصصين مع تسجيل الحلقات ومراجعة دورية للأداء.',
      icon: Rocket,
      badge: 'رحلة مباركة',
    },
  ];

  return (
    <section id="how-to-join" className="py-16 sm:py-24 bg-[#F8FAFB] relative overflow-hidden">
      {/* Background Subtle Blurs */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#187A82]/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#0F4F55]/6 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#187A82]/20 shadow-xs text-[#187A82] font-bold text-xs sm:text-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" />
            <span>خطوات بسيطة وواضحة</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F4F55] tracking-tight">
            كيفية الاشتراك في <span className="text-[#187A82]">أكاديمية المسلم الصغير</span>؟
          </h2>

          <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed">
            4 خطوات ميسرة تبدأ بتجربة حرة ومجانية حتى تطمئن تماماً وتضمن راحة طفلك
          </p>
        </div>

        {/* Stepper with sleek connecting lines */}
        <div className="relative mb-14">
          {/* Horizontal Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 -translate-y-8 right-12 left-12 h-1 bg-slate-200 z-0">
            <div
              className="h-full bg-gradient-to-l from-[#187A82] to-[#23949D] transition-all duration-500 rounded-full"
              style={{ width: `${((activeStep - 1) / 3) * 100}%` }}
            />
          </div>

          {/* Grid of 4 Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative z-10">
            {steps.map((item) => {
              const Icon = item.icon;
              const isActive = activeStep === item.stepNumber;
              const isPassed = activeStep >= item.stepNumber;

              return (
                <div
                  key={item.stepNumber}
                  onClick={() => setActiveStep(item.stepNumber)}
                  className={`cursor-pointer rounded-3xl p-6 sm:p-7 transition-all duration-300 border text-right relative flex flex-col justify-between ${
                    isActive
                      ? 'bg-white border-[#187A82] shadow-[0_15px_35px_rgba(24,122,130,0.18)] ring-2 ring-[#187A82]/20 -translate-y-1'
                      : 'bg-white/80 hover:bg-white border-[#187A82]/15 shadow-sm hover:shadow-md'
                  }`}
                >
                  <div>
                    {/* Top Row: Number pill & Icon */}
                    <div className="flex items-center justify-between mb-6">
                      {/* Step Number Circle */}
                      <div
                        className={`w-12 h-12 rounded-2xl flex items-center justify-center font-extrabold text-base transition-all duration-300 ${
                          isPassed
                            ? 'bg-[#187A82] text-white shadow-md'
                            : 'bg-slate-100 text-slate-500'
                        }`}
                      >
                        {item.stepNumber}
                      </div>

                      {/* Icon */}
                      <div
                        className={`w-11 h-11 rounded-xl flex items-center justify-center transition-colors ${
                          isActive
                            ? 'bg-[#E6F7F8] text-[#187A82]'
                            : 'bg-slate-100 text-slate-600'
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Step Title */}
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[11px] font-bold text-[#187A82] bg-[#E6F7F8] px-2.5 py-0.5 rounded-full">
                        خطوة {item.stepNumber}
                      </span>
                      <span className="text-xs text-slate-400 font-semibold">{item.badge}</span>
                    </div>

                    <h3 className="text-lg font-bold text-[#0F4F55] mb-3">
                      {item.title}
                    </h3>

                    {/* Main Description */}
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                      {item.description}
                    </p>
                  </div>

                  {/* Detail Highlight box */}
                  <div
                    className={`pt-3 mt-3 border-t text-xs leading-relaxed transition-colors ${
                      isActive
                        ? 'border-[#187A82]/20 text-[#187A82] bg-[#E6F7F8]/50 p-3 rounded-xl'
                        : 'border-slate-100 text-slate-500'
                    }`}
                  >
                    <div className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#187A82] shrink-0 mt-0.5" />
                      <span>{item.detail}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA for Stepper */}
        <div className="text-center pt-4">
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-[#187A82] hover:bg-[#13666D] text-white font-extrabold text-base transition-all duration-300 shadow-[0_10px_25px_rgba(24,122,130,0.35)] hover:shadow-[0_14px_30px_rgba(24,122,130,0.45)] hover:scale-102 active:scale-98 cursor-pointer"
          >
            <Sparkles className="w-5 h-5 text-[#FDE68A]" />
            <span>ابدأ بالخطوة الأولى: اطلب الحصة التجريبية الآن</span>
            <ArrowLeft className="w-4 h-4 text-white" />
          </button>
        </div>

      </div>
    </section>
  );
};
