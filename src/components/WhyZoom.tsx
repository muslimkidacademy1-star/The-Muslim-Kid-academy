import React from 'react';
import { WHY_US_FEATURES } from '../data/academyData';
import { Focus, Gauge, Home, Award, CheckCircle, Sparkles } from 'lucide-react';

export const WhyZoom: React.FC = () => {
  const getFeatureIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Focus className="w-7 h-7 text-[#005963]" />;
      case 1:
        return <Gauge className="w-7 h-7 text-[#f59e0b]" />;
      case 2:
        return <Home className="w-7 h-7 text-[#005963]" />;
      case 3:
      default:
        return <Award className="w-7 h-7 text-[#f59e0b]" />;
    }
  };

  return (
    <section id="features" className="py-20 md:py-28 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="px-4 py-1.5 rounded-full bg-[#e0f4f7] text-[#005963] font-bold text-xs sm:text-sm inline-block border border-[#b2e5ed]">
            الفارق التربوي الحقيقي
          </span>
          <h2 className="font-extrabold text-[clamp(1.35rem,3.8vw,2.25rem)] text-[#003e45] tracking-tight leading-[1.25] break-words">
            لماذا يفضل الآباء التحفيظ الفردي المباشر على زووم؟
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            الحلقات الجماعية قد تصيب الطفل بالخجل أو التشتت، بينما يمنحه المعلم الفردي بيئة دافئة مخصصة تضاعف سرعة حفظه وتغرس حب كتاب الله.
          </p>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {WHY_US_FEATURES.map((feat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-8 shadow-[0_8px_25px_rgba(0,0,0,0.03)] hover:shadow-[0_18px_40px_rgba(0,89,99,0.08)] border border-slate-100 transition-all duration-300 flex flex-col justify-between space-y-5 group hover:-translate-y-1.5 cursor-default text-right"
            >
              <div className="space-y-4">
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${
                    idx % 2 === 0 ? 'bg-[#e0f4f7]' : 'bg-[#fef3c7]'
                  }`}
                >
                  {getFeatureIcon(idx)}
                </div>

                <h3 className="font-bold text-lg sm:text-xl text-slate-900">
                  {feat.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {feat.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-[#b45309]">
                <CheckCircle className="w-4 h-4 text-[#f59e0b] shrink-0" />
                <span>{feat.highlight}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
