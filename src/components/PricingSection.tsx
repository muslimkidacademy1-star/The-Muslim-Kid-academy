import React, { useState } from 'react';
import { PRICING_PLANS } from '../data/academyData';
import { Check, Sparkles, MessageCircle, HelpCircle, Users, ArrowLeft } from 'lucide-react';
import { getWhatsAppUrl } from '../utils/whatsapp';

interface PricingSectionProps {
  onSelectPlan: (planTitle: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectPlan }) => {
  const [activeSiblingCount, setActiveSiblingCount] = useState<1 | 2 | 3>(1);

  return (
    <section id="pricing" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <span className="px-4 py-1.5 rounded-full bg-[#fef3c7] text-[#92400e] font-bold text-xs sm:text-sm inline-block border border-[#fde68a]">
            استثمار مبارك يدوم أثره في الدنيا والآخرة
          </span>
          <h2 className="font-extrabold text-[clamp(1.35rem,3.8vw,2.25rem)] text-[#003e45] tracking-tight leading-[1.25] break-words">
            باقات اشتراك مرنة وعادلة تناسب كل أسرة
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            اختر الخطة والمدة الأنسب لطفلك. جميع الحصص فردية مباشرة مع معلمين ومعلمات معتمدين، مع إمكانية تجربة حصة كاملة مجاناً أولاً.
          </p>
        </div>

        {/* Sibling Discount Interactive Toggle */}
        <div className="flex flex-col items-center justify-center gap-3 mb-14">
          <div className="bg-slate-100 p-1.5 rounded-2xl flex items-center gap-1 border border-slate-200">
            <button
              onClick={() => setActiveSiblingCount(1)}
              className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeSiblingCount === 1
                  ? 'bg-[#005963] text-white shadow-xs'
                  : 'text-slate-600 hover:text-[#005963]'
              }`}
            >
              طفل واحد
            </button>
            <button
              onClick={() => setActiveSiblingCount(2)}
              className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeSiblingCount === 2
                  ? 'bg-[#005963] text-white shadow-xs'
                  : 'text-slate-600 hover:text-[#005963]'
              }`}
            >
              طفلان (خصم إخوة)
            </button>
            <button
              onClick={() => setActiveSiblingCount(3)}
              className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeSiblingCount === 3
                  ? 'bg-[#f59e0b] text-[#451a03] shadow-xs'
                  : 'text-slate-600 hover:text-[#f59e0b]'
              }`}
            >
              3 إخوة (أعلى توفير)
            </button>
          </div>
          <span className="text-xs text-[#b45309] font-bold flex items-center gap-1">
            <Users className="w-3.5 h-3.5" />
            <span>يتم تدريس كل طفل في حصته الفردية الخاصة به بالكامل</span>
          </span>
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {PRICING_PLANS.map((plan) => {
            const currentPrice =
              activeSiblingCount === 1
                ? plan.prices.oneChild
                : activeSiblingCount === 2
                ? plan.prices.twoSiblings
                : plan.prices.threeSiblings;

            return (
              <div
                key={plan.id}
                className={`bg-white rounded-3xl p-7 sm:p-9 flex flex-col justify-between space-y-7 transition-all duration-300 text-right relative ${
                  plan.isPopular
                    ? 'shadow-[0_20px_50px_rgba(245,158,11,0.18)] border-2 border-[#f59e0b] lg:-translate-y-3'
                    : 'shadow-[0_8px_30px_rgba(0,89,99,0.05)] hover:shadow-[0_16px_40px_rgba(0,89,99,0.1)] border border-slate-100'
                }`}
              >
                {/* Popular Header Badge */}
                {plan.isPopular && (
                  <div className="absolute -top-3.5 inset-x-8 text-center bg-[#f59e0b] text-[#451a03] py-1 rounded-full text-xs font-black tracking-wide shadow-sm flex items-center justify-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{plan.featuredTag}</span>
                  </div>
                )}

                <div className="space-y-5 pt-1">
                  
                  {/* Title & Age */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-[#b45309]">
                        {plan.subtitle}
                      </span>
                      <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-[#005963]">
                        {plan.targetAge}
                      </span>
                    </div>
                    <h3 className="font-extrabold text-2xl text-slate-900">
                      {plan.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {plan.description}
                    </p>
                  </div>

                  {/* Dynamic Active Price Display */}
                  <div
                    className={`p-5 rounded-2xl space-y-2.5 ${
                      plan.isPopular ? 'bg-amber-50/70 border border-amber-200' : 'bg-slate-50'
                    }`}
                  >
                    <div className="flex items-baseline justify-between">
                      <span className="text-xs font-bold text-slate-700">
                        {activeSiblingCount === 1 ? 'اشتراك طفل واحد:' : activeSiblingCount === 2 ? 'اشتراك طفلين (أخوة):' : 'اشتراك 3 إخوة:'}
                      </span>
                      <div className="flex items-baseline gap-1">
                        <span className="font-black text-3xl font-mono text-[#003e45]">
                          {currentPrice}
                        </span>
                        <span className="text-xs text-slate-500 font-medium">شهرياً</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-xs text-slate-500 pt-2 border-t border-slate-200">
                      <span>مدة الحصة: <strong>{plan.durationMinutes} دقيقة</strong></span>
                      <span>الفئة: <strong>{plan.targetAge}</strong></span>
                    </div>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-3 pt-2">
                    {plan.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                        <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                </div>

                {/* Card CTA Button */}
                <div className="space-y-3 pt-4 border-t border-slate-100">
                  <button
                    onClick={() => onSelectPlan(plan.title)}
                    className={`w-full py-4 rounded-2xl font-black text-sm transition-all shadow-md active:scale-95 cursor-pointer flex items-center justify-center gap-2 ${
                      plan.isPopular
                        ? 'bg-[#f59e0b] hover:bg-[#d97706] text-[#451a03] shadow-amber-500/20'
                        : 'bg-[#005963] hover:bg-[#003e45] text-white'
                    }`}
                  >
                    <span>احجز حصة تجريبية لهذه الباقة</span>
                    <ArrowLeft className="w-4 h-4" />
                  </button>

                  <p className="text-center text-[11px] text-slate-400">
                    لا يتم دفع أي مبالغ حتى انتهاء الحصة التجريبية ورضاك التام
                  </p>
                </div>

              </div>
            );
          })}
        </div>

        {/* Currency & Multi-Country Notice */}
        <div className="mt-14 bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-right">
          <div className="space-y-1">
            <h4 className="font-extrabold text-sm sm:text-base text-slate-900">
              تقيم خارج مصر أو في دولة أخرى؟
            </h4>
            <p className="text-xs text-slate-600">
              نقبل التحويل بالريال السعودي، الدرهم الإماراتي، الدولار الأمريكي، أو الباوند الإسترليني عبر وسائل دفع آمنة تناسب بلدك.
            </p>
          </div>
          <a
            href={getWhatsAppUrl('السلام عليكم، أرغب في معرفة أسعار باقات تحفيظ القرآن بعملة بلدي')}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-2xl bg-white hover:bg-slate-100 text-[#005963] font-bold text-xs sm:text-sm border border-slate-200 transition-colors shrink-0 shadow-xs"
          >
            استفسر عن عملة بلدك
          </a>
        </div>

      </div>
    </section>
  );
};
