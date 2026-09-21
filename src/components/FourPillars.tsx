import React from 'react';
import { METHODOLOGY_PILLARS } from '../data/academyData';
import { ArrowLeft, BookOpen } from 'lucide-react';

interface FourPillarsProps {
  onOpenCurriculum: () => void;
}

export const FourPillars: React.FC<FourPillarsProps> = ({ onOpenCurriculum }) => {
  return (
    <section id="about" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Header row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
          <div className="space-y-3 max-w-2xl text-right">
            <span className="px-4 py-1.5 rounded-full bg-[#fef3c7] text-[#92400e] font-bold text-xs sm:text-sm inline-block border border-[#fde68a]">
              منهجية الأكاديمية التربوية
            </span>
            <h2 className="font-extrabold text-[clamp(1.35rem,3.8vw,2.25rem)] text-[#003e45] tracking-tight leading-[1.25] break-words">
              طريقتنا التفاعلية: 4 ركائز لبناء جيل قرآني
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              لا نكتفي بالتلقين المجرد، بل نصنع رابطة وجدانية عميقة بين الطفل والقرآن عبر خطوات تربوية متكاملة تحببه في كتاب ربه.
            </p>
          </div>

          <div className="shrink-0">
            <button
              onClick={onOpenCurriculum}
              className="inline-flex items-center gap-2 text-[#005963] hover:text-[#003e45] font-extrabold text-sm transition-colors cursor-pointer group"
            >
              <BookOpen className="w-4 h-4 text-[#f59e0b]" />
              <span>استعرض تفاصيل المناهج المعتمدة</span>
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* 2x2 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {METHODOLOGY_PILLARS.map((pillar, index) => (
            <div
              key={index}
              className="bg-white p-7 sm:p-9 rounded-3xl shadow-[0_8px_30px_rgba(0,89,99,0.05)] hover:shadow-[0_16px_40px_rgba(0,89,99,0.09)] border border-slate-100 flex flex-col sm:flex-row gap-6 items-start text-right hover:-translate-y-1 transition-all duration-300"
            >
              {/* Number Badge */}
              <div
                className={`w-14 h-14 rounded-2xl shrink-0 flex items-center justify-center font-black text-2xl shadow-xs text-white ${
                  index % 2 === 0 ? 'bg-[#005963]' : 'bg-[#f59e0b] text-[#451a03]'
                }`}
              >
                {pillar.number}
              </div>

              {/* Pillar Body */}
              <div className="space-y-3 flex-1">
                <h3 className="font-extrabold text-lg sm:text-xl text-slate-900 leading-snug">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {pillar.description}
                </p>
                <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center gap-1.5">
                  {pillar.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="text-[11px] font-bold text-[#005963] bg-[#e0f4f7] px-2.5 py-0.5 rounded-full border border-[#b2e5ed]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
