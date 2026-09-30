import React from 'react';
import {
  UserCheck,
  ShieldAlert,
  Award,
  CalendarClock,
  Sparkles,
  ArrowLeft
} from 'lucide-react';

interface WhyChooseUsProps {
  onOpenBooking: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onOpenBooking }) => {
  const features = [
    {
      id: 1,
      title: 'حصص فردية تماماً',
      description: 'طفل واحد فقط مع المعلم، بدون مجموعات، لضمان كامل التركيز والانتباه وتلقي التوجيه المباشر طوال وقت الحصة.',
      tag: '1 على 1 بدون تشتيت',
      icon: UserCheck,
      color: 'bg-[#E6F7F8] text-[#187A82]',
      borderHover: 'hover:border-[#187A82]',
    },
    {
      id: 2,
      title: 'منظومة إشراف ومتابعة',
      description: '8 مشرفين متخصصين لمتابعة أداء المعلم والتزام الحلقة وتقدم الطفل، مع تقارير دورية تُرسل لولي الأمر بانتظام.',
      tag: 'رقابة جودة صارمة',
      icon: ShieldAlert,
      color: 'bg-[#F0FDF4] text-[#16A34A]',
      borderHover: 'hover:border-[#16A34A]',
    },
    {
      id: 3,
      title: 'معلمون مؤهلون للتعامل مع الأطفال',
      description: 'اجتياز اختبارات دقيقة في الحفظ والإتقان والتربية النفسية، مع مراعاة الصبر والأسلوب التفاعلي المشوق مع الصغار.',
      tag: 'أزهريون ومجازون',
      icon: Award,
      color: 'bg-[#FEF3C7] text-[#D97706]',
      borderHover: 'hover:border-[#D97706]',
    },
    {
      id: 4,
      title: 'جداول ومواعيد مرنة',
      description: 'أوقات تناسب جدول دراسة طفلك وروتين الأسرة اليومي، مع إمكانية التنسيق المسبق لتعويض الحصص عند أي ظرف طارئ.',
      tag: 'راحة وتوافق تام',
      icon: CalendarClock,
      color: 'bg-[#F3E8FF] text-[#9333EA]',
      borderHover: 'hover:border-[#9333EA]',
    },
  ];

  return (
    <section id="why-us" className="py-16 sm:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E6F7F8] text-[#187A82] font-bold text-xs sm:text-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" />
            <span>لماذا نحن خيارك الأول؟</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F4F55] tracking-tight">
            لماذا تختار <span className="text-[#187A82]">أكاديمية المسلم الصغير</span> لطفلك؟
          </h2>

          <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed">
            صممنا بيئة قرآنية متكاملة تجمع بين الإتقان العلمي الأزهري والتربية بالحب والتشجيع
          </p>
        </div>

        {/* 4 Interactive Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.id}
                className={`group relative bg-[#F8FAFB] hover:bg-white rounded-3xl p-7 border border-[#187A82]/15 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1.5 flex flex-col justify-between ${feature.borderHover}`}
              >
                <div>
                  {/* Icon & Badge Row */}
                  <div className="flex items-center justify-between gap-3 mb-6">
                    <div className={`w-14 h-14 rounded-2xl ${feature.color} flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-slate-200/60 text-slate-700">
                      {feature.tag}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-[#0F4F55] mb-3 group-hover:text-[#187A82] transition-colors">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Bottom Step Indicator */}
                <div className="pt-6 mt-6 border-t border-slate-200/60 flex items-center justify-between text-xs font-bold text-slate-400 group-hover:text-[#187A82] transition-colors">
                  <span>ميزة رقم 0{feature.id}</span>
                  <ArrowLeft className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:-translate-x-1 transition-all" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to action strip below */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#0F4F55] via-[#187A82] to-[#0F4F55] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="text-right space-y-1 sm:space-y-1.5">
            <h4 className="text-lg sm:text-xl font-extrabold text-white">
              جاهز لتجربة حقيقية مع أحد معلمينا المتميزين؟
            </h4>
            <p className="text-[#D4F1F4] text-xs sm:text-sm">
              الحصة الأولى مجانية بالكامل، بدون أي التزام مالي أو دفع مسبق.
            </p>
          </div>

          <button
            onClick={onOpenBooking}
            className="shrink-0 px-6 py-3.5 rounded-2xl bg-white text-[#187A82] hover:bg-[#E6F7F8] font-extrabold text-sm transition-all shadow-[0_4px_16px_rgba(0,0,0,0.15)] active:scale-95 cursor-pointer flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-[#F59E0B]" />
            <span>احجز الحصة التجريبية الآن</span>
          </button>
        </div>

      </div>
    </section>
  );
};
