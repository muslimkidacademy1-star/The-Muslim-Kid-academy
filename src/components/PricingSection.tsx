import React, { useState } from 'react';
import {
  Check,
  Sparkles,
  Users,
  ShieldCheck,
  Star,
  Clock,
  ArrowLeft
} from 'lucide-react';

interface PricingSectionProps {
  onOpenBooking: (planTitle?: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onOpenBooking }) => {
  const [siblingType, setSiblingType] = useState<'single' | 'two' | 'three'>('single');

  const plans = [
    {
      id: 'foundation',
      title: 'باقة التأسيس والتلقين',
      tagline: 'تأسيس متين وبداية محببة للصغار',
      target: 'للأطفال من عمر 4 إلى 7 سنوات',
      pricing: {
        single: '600 ج.م',
        two: '1,100 ج.م',
        three: '1,500 ج.م',
      },
      period: 'شهرياً',
      isPopular: false,
      features: [
        'حصتان أسبوعياً (8 حصص فردية شهرياً)',
        'تأسيس مخارج الحروف وقصار السور بالتلقين',
        'جلسة فردية مباشرة 100% مع المعلم',
        'تقرير شهري موجه لولي الأمر لمتابعة الإنجاز',
        'متابعة فردية وتشجيع مستمر بنظام النجوم',
        'مرونة في تعويض الحصص عند الإخطار المسبق',
      ],
      buttonText: 'اشترك الآن في باقة التأسيس',
    },
    {
      id: 'mastery',
      title: 'باقة الإتقان والمتابعة المكثفة',
      tagline: 'الخيار الأفضل للتميز والحفظ التراكمي السريع',
      target: 'للأطفال من عمر 7 إلى 15 سنة',
      pricing: {
        single: '950 ج.م',
        two: '1,750 ج.م',
        three: '2,400 ج.م',
      },
      period: 'شهرياً',
      isPopular: true,
      popularBadge: 'الأكثر طلباً وموصى بها ★',
      features: [
        '3 إلى 4 حصص أسبوعياً (12 إلى 16 حصة شهرياً)',
        'متابعة مشرف خاص للحلقة وتقييم الجودة أسبوعياً',
        'حفظ وتجويد متقن وتثبيت دوري للأجزاء',
        'اختبارات مرحلية دورية وشهادات تقدير معتمدة',
        'تفسير مبسط لمعاني الآيات وقصص الأنبياء',
        'أولوية كاملة في تثبيت المواعيد الأكثر ملاءمة',
        'لقاء شهري مباشر مع المشرف التربوي',
      ],
      buttonText: 'اشترك الآن في باقة الإتقان',
    },
    {
      id: 'nourania',
      title: 'باقة اللغة العربية والقاعدة النورانية',
      tagline: 'مخصصة للقراءة الصحيحة للأطفال الصغار',
      target: 'لتعليم القراءة العربية السليمة والتهجي',
      pricing: {
        single: '650 ج.م',
        two: '1,200 ج.م',
        three: '1,650 ج.م',
      },
      period: 'شهرياً',
      isPopular: false,
      features: [
        'حصتان أسبوعياً تركزان على الهجاء والنطق',
        'مخصصة للقراءة الصحيحة للأطفال الصغار قبل المدرسة',
        'منهج معتمد (نور البيان / فتح الرحمن / القاعدة النورانية)',
        'تأهيل الطفل لقراءة القرآن الكريم من المصحف مباشرة',
        'بطاقات تعليمية تفاعلية وألعاب كلمات ممتعة',
        'تقرير دوري عن تطور النطق ومخارج الحروف',
      ],
      buttonText: 'اشترك الآن في باقة النورانية',
    },
  ];

  return (
    <section id="pricing" className="py-16 sm:py-24 bg-white relative overflow-hidden">
      {/* Background Subtle Ambience */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#187A82]/6 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#0F4F55]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E6F7F8] text-[#187A82] font-bold text-xs sm:text-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" />
            <span>خطط شفافة تناسب كل أسرة</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F4F55] tracking-tight">
            باقات الاشتراك الشهرية
          </h2>

          <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed">
            جميع الباقات تتضمن حصصاً فردية 100%، ويمكنك تجربة حصة مجانية أولاً قبل دفع أي رسوم
          </p>

          {/* Sibling Switcher Tabs */}
          <div className="pt-4 flex justify-center">
            <div className="inline-flex items-center p-1.5 rounded-2xl bg-[#F1F7F8] border border-[#187A82]/15">
              <button
                onClick={() => setSiblingType('single')}
                className={`px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  siblingType === 'single'
                    ? 'bg-white text-[#0F4F55] shadow-sm'
                    : 'text-slate-600 hover:text-[#0F4F55]'
                }`}
              >
                طالب واحد
              </button>

              <button
                onClick={() => setSiblingType('two')}
                className={`px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  siblingType === 'two'
                    ? 'bg-white text-[#0F4F55] shadow-sm'
                    : 'text-slate-600 hover:text-[#0F4F55]'
                }`}
              >
                <span>أخوان (خصم إخوة)</span>
                <span className="text-[10px] bg-[#FEF3C7] text-[#92400E] px-1.5 py-0.5 rounded-md font-extrabold">وفر</span>
              </button>

              <button
                onClick={() => setSiblingType('three')}
                className={`px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  siblingType === 'three'
                    ? 'bg-white text-[#0F4F55] shadow-sm'
                    : 'text-slate-600 hover:text-[#0F4F55]'
                }`}
              >
                <span>3 إخوة (عائلي)</span>
                <span className="text-[10px] bg-[#DCFCE7] text-[#15803D] px-1.5 py-0.5 rounded-md font-extrabold">أقصى توفير</span>
              </button>
            </div>
          </div>
        </div>

        {/* 3 Clean Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => {
            const isFeatured = plan.isPopular;

            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl transition-all duration-300 flex flex-col justify-between p-7 sm:p-8 ${
                  isFeatured
                    ? 'bg-white border-2 border-[#187A82] shadow-[0_20px_50px_rgba(24,122,130,0.18)] lg:-translate-y-2 ring-4 ring-[#187A82]/10'
                    : 'bg-[#F8FAFB] hover:bg-white border border-[#187A82]/15 shadow-sm hover:shadow-xl'
                }`}
              >
                {/* Popular Badge */}
                {isFeatured && plan.popularBadge && (
                  <div className="absolute -top-4 right-1/2 translate-x-1/2 bg-[#187A82] text-white text-xs font-black px-4 py-1.5 rounded-full shadow-md flex items-center gap-1.5">
                    <Star className="w-3.5 h-3.5 fill-current text-[#FDE68A]" />
                    <span>{plan.popularBadge}</span>
                  </div>
                )}

                <div>
                  {/* Title & Target */}
                  <div className="mb-4">
                    <span className="text-xs font-bold text-[#187A82] bg-[#E6F7F8] px-3 py-1 rounded-full">
                      {plan.target}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-[#0F4F55] mt-3">
                      {plan.title}
                    </h3>
                    <p className="text-slate-500 text-xs sm:text-sm mt-1">
                      {plan.tagline}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="my-6 py-5 border-y border-slate-100 flex items-baseline justify-start gap-2">
                    <span className="text-3xl sm:text-4xl font-extrabold text-[#0F4F55]">
                      {plan.pricing[siblingType]}
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-slate-500">
                      / {plan.period}
                    </span>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3.5 mb-8">
                    <p className="text-xs font-bold text-slate-400">مميزات الباقة تشمل:</p>
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-right text-xs sm:text-sm text-slate-700">
                        <div className={`w-5 h-5 rounded-full shrink-0 flex items-center justify-center mt-0.5 ${
                          isFeatured ? 'bg-[#187A82] text-white' : 'bg-[#E6F7F8] text-[#187A82]'
                        }`}>
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                        <span className="leading-snug">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA: اشترك الآن */}
                <div>
                  <button
                    onClick={() => onOpenBooking(plan.title)}
                    className={`w-full py-4 px-6 rounded-2xl font-extrabold text-sm sm:text-base flex items-center justify-center gap-2 transition-all duration-300 active:scale-98 cursor-pointer ${
                      isFeatured
                        ? 'bg-[#187A82] hover:bg-[#13666D] text-white shadow-[0_10px_25px_rgba(24,122,130,0.35)] hover:shadow-[0_14px_30px_rgba(24,122,130,0.45)]'
                        : 'border-2 border-[#187A82]/30 hover:border-[#187A82] bg-white hover:bg-[#E6F7F8]/40 text-[#0F4F55]'
                    }`}
                  >
                    <span>{plan.buttonText}</span>
                    <ArrowLeft className="w-4 h-4" />
                  </button>

                  <p className="text-center text-[11px] text-slate-400 mt-2.5">
                    حصة تجريبية مجانية أولاً قبل تثبيت الاشتراك
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Reassurance Footer */}
        <div className="mt-12 text-center text-xs sm:text-sm text-slate-500 flex flex-wrap items-center justify-center gap-6">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#187A82]" />
            <span>ضمان استرداد أو استبدال المعلم في أي وقت</span>
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-[#187A82]" />
            <span>تعويض الحصص عند الإخطار قبلها بـ 24 ساعة</span>
          </span>
          <span className="flex items-center gap-1.5">
            <Users className="w-4 h-4 text-[#187A82]" />
            <span>إمكانية اختيار معلم ذكر للبنين أو معلمة للبنات</span>
          </span>
        </div>

      </div>
    </section>
  );
};
