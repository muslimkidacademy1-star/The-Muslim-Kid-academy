import React from 'react';
import { STATS } from '../data/academyData';
import { GraduationCap, Award, Users, Smile, Sparkles } from 'lucide-react';

export const TrustStats: React.FC = () => {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <GraduationCap className="w-6 h-6 text-[#005963]" />;
      case 1:
        return <Award className="w-6 h-6 text-[#f59e0b]" />;
      case 2:
        return <Users className="w-6 h-6 text-[#005963]" />;
      case 3:
      default:
        return <Smile className="w-6 h-6 text-[#f59e0b]" />;
    }
  };

  const getGradient = (idx: number) => {
    if (idx % 2 === 0) {
      return 'from-[#e0f4f7] to-[#c5edf3] text-[#005963]';
    }
    return 'from-[#fef3c7] to-[#fde68a] text-[#78350f]';
  };

  return (
    <section className="py-12 md:py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Floating cards grid with soft minimal drop shadows */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {STATS.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 sm:p-8 rounded-3xl shadow-[0_10px_30px_rgba(0,89,99,0.05)] hover:shadow-[0_20px_45px_rgba(0,89,99,0.1)] border border-slate-100 flex flex-col items-center text-center space-y-3 hover:-translate-y-1.5 transition-all duration-300 group cursor-default"
            >
              {/* 3D-styled Soft UI Icon Container */}
              <div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${getGradient(
                  index
                )} flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform duration-300`}
              >
                {getIcon(index)}
              </div>

              {/* Number with high-contrast typography */}
              <span className="font-black text-3xl sm:text-4xl text-[#003e45] font-mono tracking-tight">
                {item.number}
              </span>

              {/* Title & Subtitle */}
              <div className="space-y-1">
                <h4 className="font-extrabold text-base sm:text-lg text-slate-900">
                  {item.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-[200px]">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
