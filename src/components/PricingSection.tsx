import React, { useState } from 'react';
import {
  Check,
  Sparkles,
  Star,
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
      buttonText: 'اشترك في باقة التأسيس',
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
      buttonText: 'اشترك في باقة الإتقان',
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
        'مخصصة للقراءة الصحيحة للأطفال قبل المدرسة',
        'منهج معتمد (نور البيان / القاعدة النورانية)',
        'تأهيل الطفل لقراءة القرآن الكريم من المصحف مباشرة',
        'بطاقات تعليمية تفاعلية وألعاب كلمات ممتعة',
        'تقرير دوري عن تطور النطق ومخارج الحروف',
      ],
      buttonText: 'اشترك في باقة النورانية',
    },
  ];

  return (
    <section id="pricing" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 text-sky-700 border border-sky-200 text-xs sm:text-sm font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>خطط شفافة تناسب كل أسرة</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            باقات الاشتراك الشهرية
          </h2>

          <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed">
            جميع الباقات تتضمن حصصاً فردية 100%، ويمكنك تجربة حصة مجانية أولاً قبل دفع أي رسوم
          </p>

          {/* Sibling Switcher Tabs (SuperHi Segmented Pill Style) */}
          <div className="pt-4 flex justify-center">
            <div className="inline-flex items-center p-1 rounded-full bg-slate-100 border border-slate-200">
              <button
                type="button"
                onClick={() => setSiblingType('single')}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  siblingType === 'single'
                    ? 'bg-white text-[#0F172A] shadow-xs'
                    : 'text-slate-600 hover:text-[#0F172A]'
                }`}
              >
                طالب واحد
              </button>

              <button
                type="button"
                onClick={() => setSiblingType('two')}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  siblingType === 'two'
                    ? 'bg-white text-[#0F172A] shadow-xs'
                    : 'text-slate-600 hover:text-[#0F172A]'
                }`}
              >
                <span>أخوان (خصم إخوة)</span>
                <span className="text-[10px] bg-amber-100 text-amber-800 px-1.5 py-0.5 rounded-full font-bold">وفر</span>
              </button>

              <button
                type="button"
                onClick={() => setSiblingType('three')}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  siblingType === 'three'
                    ? 'bg-white text-[#0F172A] shadow-xs'
                    : 'text-slate-600 hover:text-[#0F172A]'
                }`}
              >
                <span>3 إخوة (عائلي)</span>
                <span className="text-[10px] bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded-full font-bold">أقصى توفير</span>
              </button>
            </div>
          </div>
        </div>

        {/* 3 Clear Pricing Cards with 'الأكثر طلباً' highlighted cleanly */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => {
            const isFeatured = plan.isPopular;

            return (
              <div
                key={plan.id}
                className={`relative rounded-2xl transition-all duration-300 flex flex-col justify-between p-7 sm:p-8 bg-white border ${
                  isFeatured
                    ? 'border-sky-500 shadow-md ring-2 ring-sky-500/20 lg:-translate-y-2'
                    : 'border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300'
                }`}
              >
                {/* Popular Badge */}
                {isFeatured && plan.popularBadge && (
                  <div className="absolute -top-3.5 right-1/2 translate-x-1/2 bg-sky-600 text-white text-xs font-bold px-4 py-1 rounded-full shadow-sm flex items-center gap-1.5 whitespace-nowrap">
                    <Star className="w-3.5 h-3.5 fill-current text-amber-300" />
                    <span>{plan.popularBadge}</span>
                  </div>
                )}

                <div>
                  {/* Title & Target */}
                  <div className="mb-4">
                    <span className="text-xs font-semibold text-sky-700 bg-sky-50 px-3 py-1 rounded-full border border-sky-100">
                      {plan.target}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-[#0F172A] mt-3">
                      {plan.title}
                    </h3>
                    <p className="text-slate-500 text-xs sm:text-sm mt-1">
                      {plan.tagline}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="my-5 py-4 border-y border-slate-100 flex items-baseline justify-start gap-2">
                    <span className="text-3xl sm:text-4xl font-black text-[#0F172A]">
                      {plan.pricing[siblingType]}
                    </span>
                    <span className="text-xs sm:text-sm font-medium text-slate-500">
                      / {plan.period}
                    </span>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 mb-8">
                    <p className="text-xs font-bold text-slate-400">مميزات الباقة تشمل:</p>
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-right text-xs sm:text-sm text-slate-700">
                        <div className={`w-5 h-5 rounded-full shrink-0 flex items-center justify-center mt-0.5 ${
                          isFeatured ? 'bg-sky-600 text-white' : 'bg-sky-50 text-sky-600'
                        }`}>
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                        <span className="leading-snug">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA: Pill Button */}
                <div>
                  <button
                    type="button"
                    onClick={() => onOpenBooking(plan.title)}
                    className={`w-full py-3.5 px-6 rounded-full font-bold text-sm sm:text-base flex items-center justify-center gap-2 transition-all duration-200 active:scale-98 cursor-pointer ${
                      isFeatured
                        ? 'bg-sky-600 hover:bg-sky-700 text-white shadow-sm hover:shadow-md'
                        : 'border border-slate-300 hover:border-slate-400 bg-white hover:bg-slate-50 text-slate-700'
                    }`}
                  >
                    <span>{plan.buttonText}</span>
                    <ArrowLeft className="w-4 h-4" />
                  </button>

                  <p className="text-center text-[11px] text-slate-400 mt-2.5">
                    حصة تجريبية مجانية 100% قبل دفع أي اشتراك
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
