import React from 'react';
import { CURRICULUM_MODULES } from '../data/academyData';
import { X, BookOpen, Check, Award, Sparkles } from 'lucide-react';

interface CurriculumModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBooking: () => void;
}

export const CurriculumModal: React.FC<CurriculumModalProps> = ({
  isOpen,
  onClose,
  onOpenBooking,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-100 text-right max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="p-5 bg-[#005963] text-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#f59e0b] text-[#451a03] flex items-center justify-center font-bold">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-extrabold text-base sm:text-lg">
                المناهج التعليمية المعتمدة بالأكاديمية
              </h3>
              <p className="text-xs text-cyan-200">
                مناهج متدرجة تراعي القدرات العمرية وتجمع بين الحفظ والتطبيق
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {CURRICULUM_MODULES.map((module) => (
              <div
                key={module.id}
                className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-[#fef3c7] text-[#92400e]">
                      {module.badge}
                    </span>
                    <span className="text-xs text-[#005963] font-bold">
                      {module.target}
                    </span>
                  </div>

                  <h4 className="font-extrabold text-base text-slate-900">
                    {module.title}
                  </h4>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {module.summary}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200">
                  <span className="text-xs font-bold text-slate-800 block mb-1.5">
                    أبرز مخرجات المنهج:
                  </span>
                  <ul className="space-y-1 text-xs text-slate-600">
                    {module.topics.map((t, idx) => (
                      <li key={idx} className="flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="p-5 rounded-2xl bg-[#e0f4f7] border border-[#b2e5ed] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-right">
              <Award className="w-8 h-8 text-[#005963] shrink-0" />
              <div>
                <h5 className="font-extrabold text-sm sm:text-base text-[#003e45]">
                  تحديد المنهج الأنسب لطفلك
                </h5>
                <p className="text-xs text-slate-600">
                  يقوم المعلم في الحصة التجريبية بقياس المستوى واقتراح الخطة المخصصة.
                </p>
              </div>
            </div>

            <button
              onClick={() => {
                onClose();
                onOpenBooking();
              }}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#f59e0b] hover:bg-[#d97706] text-[#451a03] font-black text-xs sm:text-sm shrink-0 cursor-pointer shadow-md transition-all active:scale-95"
            >
              حجز جلسة تحديد المستوى
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
