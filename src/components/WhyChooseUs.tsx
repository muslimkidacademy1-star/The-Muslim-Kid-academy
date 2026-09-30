import React from 'react';
import {
  UserCheck,
  ShieldCheck,
  Award,
  CalendarClock,
  Sparkles,
  ArrowLeft
} from 'lucide-react';

interface WhyChooseUsProps {
  onOpenBooking: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onOpenBooking }) => {
  const officialWhatsAppLink =
    'https://wa.me/201065263121?text=السلام%20عليكم،%20أود%20الاستفسار%20عن%20حجز%20حصة%20تجريبية%20لطفلي%20في%20أكاديمية%20المسلم%20الصغير';

  const features = [
    {
      id: 1,
      title: 'حصص فردية تماماً (1 إلى 1)',
      description: 'طفل واحد فقط مع المعلم، بدون مجموعات، لضمان كامل التركيز والانتباه وتلقي التوجيه المباشر طوال وقت الحصة.',
      tag: 'بدون تشتيت',
      icon: UserCheck,
      iconColor: 'bg-sky-50 text-sky-600',
    },
    {
      id: 2,
      title: 'منظومة إشراف ومتابعة دقيقة',
      description: 'مشرفون متخصصون لمتابعة أداء المعلم والتزام الحلقة وتقدم الطفل، مع تقارير دورية تُرسل لولي الأمر بانتظام.',
      tag: 'جودة مستمرة',
      icon: ShieldCheck,
      iconColor: 'bg-emerald-50 text-emerald-600',
    },
    {
      id: 3,
      title: 'معلمون مؤهلون وأزهريون',
      description: 'اجتياز اختبارات دقيقة في الحفظ والإتقان والتربية النفسية، مع مراعاة الصبر والأسلوب التفاعلي المشوق مع الصغار.',
      tag: 'إتقان وخبرة',
      icon: Award,
      iconColor: 'bg-amber-50 text-amber-600',
    },
    {
      id: 4,
      title: 'جداول ومواعيد مرنة للأسرة',
      description: 'أوقات تناسب جدول دراسة طفلك وروتين الأسرة اليومي، مع إمكانية التنسيق المسبق لتعويض الحصص عند أي ظرف طارئ.',
      tag: 'مرونة تامة',
      icon: CalendarClock,
      iconColor: 'bg-purple-50 text-purple-600',
    },
  ];

  return (
    <section id="why-us" className="py-16 sm:py-24 bg-[#F8FAFC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 text-sky-700 border border-sky-200 text-xs sm:text-sm font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>لماذا نحن خيارك الأول؟</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            لماذا تختار <span className="text-sky-600">أكاديمية المسلم الصغير</span> لطفلك؟
          </h2>

          <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed">
            صممنا بيئة قرآنية متكاملة تجمع بين الإتقان العلمي الأزهري والتربية بالحب والتشجيع
          </p>
        </div>

        {/* 4 Clean White Cards with 1px border and modern minimalist icons */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.id}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Top row: Icon & Tag */}
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div className={`w-12 h-12 rounded-xl ${feature.iconColor} flex items-center justify-center transition-transform duration-300 group-hover:scale-105`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-600">
                      {feature.tag}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-[#0F172A] mb-2.5 group-hover:text-sky-600 transition-colors">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center text-xs font-semibold text-sky-600 group-hover:translate-x-[-4px] transition-transform">
                  <span>اكتشف المزيد</span>
                  <ArrowLeft className="w-3.5 h-3.5 mr-1" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Strip in SuperHi Clean Style */}
        <div className="mt-12 text-center">
          <a
            href={officialWhatsAppLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-slate-300 text-slate-700 hover:text-sky-600 hover:border-sky-300 text-xs sm:text-sm font-bold shadow-xs hover:shadow-sm transition-all"
          >
            <span>هل تود تجربة حصة مجانية لطفلك؟</span>
            <span className="text-sky-600 font-extrabold underline underline-offset-4">تواصل معنا عبر واتساب</span>
            <ArrowLeft className="w-4 h-4 text-sky-600" />
          </a>
        </div>

      </div>
    </section>
  );
};
