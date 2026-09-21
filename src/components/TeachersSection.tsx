import React, { useState } from 'react';
import { TEACHERS } from '../data/academyData';
import { Teacher } from '../types';
import { Award, Check, Sparkles, MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '../utils/whatsapp';

interface TeachersSectionProps {
  onSelectTeacher?: (teacherName: string) => void;
}

export const TeachersSection: React.FC<TeachersSectionProps> = ({ onSelectTeacher }) => {
  const [filter, setFilter] = useState<'all' | 'female' | 'male'>('all');

  const filteredTeachers = TEACHERS.filter((t) => {
    if (filter === 'all') return true;
    return t.category === filter;
  });

  return (
    <section id="teachers" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <span className="px-4 py-1.5 rounded-full bg-[#e0f4f7] text-[#005963] font-bold text-xs sm:text-sm inline-block border border-[#b2e5ed]">
            كوادر أزهرية معتمدة ومجازة
          </span>
          <h2 className="font-extrabold text-[clamp(1.35rem,3.8vw,2.25rem)] text-[#003e45] tracking-tight leading-[1.25] break-words">
            معلمونا ومعلماتنا.. حفظ وإتقان وأمانة تربوية
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            نختار معلمينا بعناية فائقة؛ لا نكتفي بالإجازة القرآنية العالية، بل نحرص على الصبر وطيب الخلق والقدرة على التعامل مع نفسية الطفل وبناء ألفة معه.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center gap-2 mb-14">
          <button
            onClick={() => setFilter('all')}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              filter === 'all'
                ? 'bg-[#005963] text-white shadow-sm'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            جميع المعلمين والمعلمات ({TEACHERS.length})
          </button>
          <button
            onClick={() => setFilter('female')}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              filter === 'female'
                ? 'bg-[#f59e0b] text-[#451a03] shadow-sm'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            معلمات للبنات والأطفال المبكرة
          </button>
          <button
            onClick={() => setFilter('male')}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              filter === 'male'
                ? 'bg-[#005963] text-white shadow-sm'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            معلمون للبنين والأشبال
          </button>
        </div>

        {/* Teachers Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredTeachers.map((teacher) => (
            <div
              key={teacher.id}
              className="bg-white rounded-3xl p-7 sm:p-8 shadow-[0_8px_30px_rgba(0,89,99,0.05)] hover:shadow-[0_20px_45px_rgba(0,89,99,0.1)] border border-slate-100 text-center flex flex-col items-center space-y-4 group hover:-translate-y-1.5 transition-all duration-300"
            >
              {/* Teacher Avatar Container */}
              <div className="relative">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden bg-slate-100 p-1 ring-4 ring-slate-100 group-hover:ring-[#005963]/30 transition-all shadow-sm">
                  <img
                    src={teacher.image}
                    alt={teacher.name}
                    className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <span className="absolute -bottom-2 inset-x-0 mx-auto w-max px-3 py-0.5 rounded-full bg-[#fef3c7] text-[#92400e] text-[11px] font-extrabold shadow-xs border border-[#fde68a]">
                  {teacher.badge}
                </span>
              </div>

              {/* Info */}
              <div className="pt-2">
                <h3 className="font-extrabold text-lg sm:text-xl text-slate-900">
                  {teacher.name}
                </h3>
                <p className="text-xs sm:text-sm text-[#005963] font-bold mt-0.5">
                  {teacher.title}
                </p>
              </div>

              {/* Bio */}
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-right flex-1">
                {teacher.bio}
              </p>

              {/* Specialties */}
              <div className="w-full pt-4 border-t border-slate-100 flex flex-wrap justify-center gap-1.5">
                {teacher.specialties.map((spec, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-2.5 py-1 bg-slate-50 rounded-full text-xs font-semibold text-slate-700 border border-slate-200"
                  >
                    {spec}
                  </span>
                ))}
              </div>

              {/* Teacher Action CTA */}
              <a
                href={getWhatsAppUrl(`السلام عليكم، أرغب في حجز حصة تجريبية لطفلي مع ${teacher.name} في أكاديمية المسلم الصغير`)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-2xl bg-slate-100 hover:bg-[#005963] text-[#005963] hover:text-white font-bold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>طلب تجربة مع {teacher.name.split(' ')[1] || teacher.name}</span>
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
