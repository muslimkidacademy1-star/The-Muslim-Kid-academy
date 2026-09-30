import React, { useState } from 'react';
import {
  GraduationCap,
  Sparkles,
  Award,
  CheckCircle2,
  Heart,
  BookOpen,
  ArrowLeft
} from 'lucide-react';

interface TeachersSectionProps {
  onOpenBooking: () => void;
}

export const TeachersSection: React.FC<TeachersSectionProps> = ({ onOpenBooking }) => {
  const [filter, setFilter] = useState<'all' | 'male' | 'female'>('all');

  const teachersList = [
    {
      id: 't-ahmed-khaled',
      name: 'الشيخ أحمد خالد',
      badge: 'المشرف العام على الأكاديمية ⭐',
      title: 'إمام وخطيب بوزارة الأوقاف • مجاز بالقراءات',
      qualifications:
        'مجاز في قراءات عاصم وابن كثير وقالون ومتون الجزرية والتحفة، متخصص في غرس القرآن في نفوس الأطفال بأسلوب تحفيزي قائم على التدرج وتبسيط التجويد والمتابعة المباشرة مع أولياء الأمور.',
      photo: 'https://i.ibb.co/LXMK7WTh/504469854-3822777424533135-8334855069230282353-n.jpg',
      photoFallback: '/supervisor.jpg',
      gender: 'male',
      tags: ['مجاز بالقراءات', 'أسلوب تحفيزي', 'إمام بالأوقاف', 'إدارة وتثبيت'],
      experienceYears: 'خبرة 10 سنوات',
      isOnline: true,
      buttonText: 'طلب حصة تجريبية معه',
    },
    {
      id: 't-belal-sheha',
      name: 'الشيخ بلال شيحة',
      badge: 'إجازة عاصم ونافع بالسند 🌟',
      title: 'ليسانس تفسير القرآن • خطيب بالأوقاف',
      qualifications:
        "مجاز بسند متصل في قراءتي عاصم ونافع، خبرة أكثر من 18 عاماً في تحفيظ النشء؛ يركز على جودة القراءة وإتقان مخارج الحروف وفهم المعنى تحت مبدأ: 'ابنك أمانة لننشئ معاً ولداً تربى على مائدة القرآن'.",
      photo: 'https://i.ibb.co/27TqvvjD/Whats-App-Image-2026-09-10-at-15-28-14.jpg',
      photoFallback: '/sheikh-belal.jpg',
      gender: 'male',
      tags: ['قراءة عاصم ونافع', 'إتقان التجويد', 'فن التعامل مع الأطفال', 'متخصص تفسير'],
      experienceYears: 'خبرة +18 عاماً',
      isOnline: true,
      buttonText: 'طلب حصة تجريبية معه',
    },
    {
      id: 't-mohamed-abu-shta',
      name: 'الشيخ محمد أبو شتا',
      badge: 'أزهري مجاز بالسند 📜',
      title: 'خريج جامعة الأزهر • خطيب بوزارة الأوقاف',
      qualifications:
        'مجاز بالسند المتصل في قراءة عاصم ومتني التحفة والجزرية، يتميز بمهارة ضبط مخارج الحروف وغرس الآداب الإسلامية، مع قدرة عالية على معالجة فتور الأطفال ومراعاة الفروق الفردية وتقديم تقارير دورية دقيقة.',
      photo: 'https://i.ibb.co/2YSV70jC/Whats-App-Image-2026-09-10-at-15-33-41.jpg',
      photoFallback: '/sheikh-mohamed.jpg',
      gender: 'male',
      tags: ['خريج الأزهر', 'سند متصل', 'إتقان المخارج', 'تقارير دورية'],
      experienceYears: 'خبرة 10 سنوات',
      isOnline: true,
      buttonText: 'طلب حصة تجريبية معه',
    },
    {
      id: 't-islam-ayman',
      name: 'أ. إسلام أيمن',
      badge: 'باحث بلاغة وخريج أزهر 🌟',
      title: 'باحث بلاغة بجامعة المنصورة • خريج الأزهر وخطيب بالأوقاف',
      qualifications:
        'مجاز برواية حفص، حاصل على شهادة تميز دولية في تعليم العربية، يجمع بين تحفيظ القرآن الكريم والتمكين اللغوي والبلاغي، مع التركيز على بناء شخصية الطفل وأخلاقه بأسلوب حواري وتفاعلي متدرج.',
      photo: 'https://i.ibb.co/ynjR3G67/Whats-App-Image-2026-09-20-at-15-40-55.jpg',
      photoFallback: '/islam-ayman.jpg',
      gender: 'male',
      tags: ['باحث بلاغة', 'خريج الأزهر', 'لغة عربية وقرآن', 'بناء الشخصية'],
      experienceYears: 'خبرة 6 سنوات',
      isOnline: true,
      buttonText: 'طلب حصة تجريبية معه',
    },
    {
      id: 't-maryam',
      name: 'الأستاذة مريم الشافعي',
      badge: 'إجازة حفص وتربية إيجابية 🌸',
      title: 'معلمة معتمدة للقراءات ونور البيان',
      qualifications:
        'مجازة برواية حفص عن عاصم، حاصلة على دبلومة التربية الإيجابية المعاصرة، متخصصة في التدريس للأعمار المبكرة (4 إلى 10 سنوات) بأساليب التلعيب وتيسير التجويد.',
      photo:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAaVzw4CqFtanEnj0NvVPlwiWSrA27DRlpxdgn3YZAA-G54Dj4JUhdXOEVRDsHxwc6hwgYTFrQxSpkVoBixK6R2jOKIxcWbNoipCQYbZu1BSQHm-EIilWYC843B43nmisYM8LJpFDrDeU0WmhELmKoWfxfUwnIvHBxcr-agFtsvGusFzlOGSm_8aY1hd3LFKzkvgDJqkmpRNfXgzKoRiUgH8CWq0NEaGGGKnhYeiPaIZrFJ4uTg-Bq9jw',
      gender: 'female',
      tags: ['صبورة جداً', 'أسلوب تفاعلي', 'نور البيان بالقصص', 'تأسيس مبكر'],
      experienceYears: '6 سنوات خبرة',
      isOnline: true,
      buttonText: 'طلب حصة تجريبية معها',
    },
  ];

  const filteredTeachers = teachersList.filter((t) => {
    if (filter === 'all') return t.gender === 'male'; // Returns the 4 core cards that fit the 4-column / 2x2 grid
    return t.gender === filter;
  });

  return (
    <section id="teachers" className="py-16 sm:py-24 bg-[#F8FAFB] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#187A82]/20 shadow-xs text-[#187A82] font-bold text-xs sm:text-sm">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>كوادر تعليمية على أعلى مستوى</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F4F55] tracking-tight">
            نخبة من معلمينا ومعلماتنا
          </h2>

          <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed">
            نختار 1 من بين كل 20 متقدماً بعد اختبارات شاقة في الحفظ، والتجويد، والتربية النفسية للأطفال
          </p>

          {/* Gender Filter Buttons */}
          <div className="pt-2 flex justify-center gap-2">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                filter === 'all'
                  ? 'bg-[#187A82] text-white shadow-sm'
                  : 'bg-white text-slate-600 hover:bg-[#E6F7F8] border border-slate-200'
              }`}
            >
              جميع المعلمين والمعلمات
            </button>
            <button
              onClick={() => setFilter('male')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                filter === 'male'
                  ? 'bg-[#187A82] text-white shadow-sm'
                  : 'bg-white text-slate-600 hover:bg-[#E6F7F8] border border-slate-200'
              }`}
            >
              معلمون (للبنين)
            </button>
            <button
              onClick={() => setFilter('female')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                filter === 'female'
                  ? 'bg-[#187A82] text-white shadow-sm'
                  : 'bg-white text-slate-600 hover:bg-[#E6F7F8] border border-slate-200'
              }`}
            >
              معلمات (للبنات والأعمار المبكرة)
            </button>
          </div>
        </div>

        {/* Teachers Cards Grid: 4 columns on large screens (lg:grid-cols-4), 2x2 on medium screens (md:grid-cols-2), 1 on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredTeachers.map((teacher) => (
            <div
              key={teacher.id}
              className="bg-white rounded-3xl p-5 sm:p-6 border border-[#187A82]/15 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5"
            >
              <div>
                {/* Header: Avatar, Name, Title */}
                <div className="flex items-start gap-3.5 mb-4">
                  <div className="relative shrink-0">
                    <img
                      src={teacher.photo}
                      alt={teacher.name}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        if (teacher.photoFallback && target.src.indexOf('fallback') === -1) {
                          target.src = teacher.photoFallback;
                        }
                      }}
                      className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover ring-2 ring-slate-100 group-hover:ring-[#187A82] shadow-sm transition-all"
                    />
                    {teacher.isOnline && (
                      <span className="absolute -bottom-1.5 right-1/2 translate-x-1/2 bg-emerald-600 text-white text-[9px] sm:text-[10px] font-bold px-1.5 py-0.5 rounded-full ring-2 ring-white flex items-center gap-1 shadow-2xs whitespace-nowrap">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-200 animate-pulse" />
                        <span>متصل الآن</span>
                      </span>
                    )}
                  </div>

                  <div className="text-right flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-1 mb-1">
                      {teacher.badge && (
                        <span className="text-[10px] font-extrabold text-amber-900 bg-amber-100/90 border border-amber-300 px-2 py-0.5 rounded-full inline-flex items-center gap-0.5 shadow-2xs">
                          <span>{teacher.badge}</span>
                        </span>
                      )}
                      <span className="text-[10px] font-bold text-[#187A82] bg-[#E6F7F8] px-2 py-0.5 rounded-full inline-block">
                        {teacher.experienceYears}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-extrabold text-[#0F4F55] group-hover:text-[#187A82] transition-colors leading-snug">
                      {teacher.name}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-slate-600 font-semibold mt-1 leading-snug">
                      {teacher.title}
                    </p>
                  </div>
                </div>

                {/* Qualifications */}
                <div className="bg-[#F1F7F8] rounded-2xl p-3.5 border border-[#187A82]/10 mb-4 text-right">
                  <p className="text-xs text-slate-700 leading-relaxed font-normal">
                    {teacher.qualifications}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {teacher.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-[10px] sm:text-[11px] font-semibold px-2.5 py-1 rounded-xl bg-slate-100 text-slate-700 group-hover:bg-[#E6F7F8] group-hover:text-[#187A82] transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button: طلب حصة تجريبية معه */}
              <a
                href="https://wa.me/201065263121?text=السلام%20عليكم،%20أود%20الاستفسار%20عن%20حجز%20حصة%20تجريبية%20لطفلي%20في%20أكاديمية%20المسلم%20الصغير"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-3 rounded-xl border border-[#187A82]/30 hover:border-[#187A82] bg-white hover:bg-[#187A82] text-[#0F4F55] hover:text-white font-bold text-xs sm:text-sm transition-all duration-200 flex items-center justify-center gap-2 group-hover:shadow-sm cursor-pointer mt-2"
              >
                <span>{teacher.buttonText || 'طلب حصة تجريبية معه'}</span>
                <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              </a>
            </div>
          ))}
        </div>

        {/* Safety & Quality Assurance Notice */}
        <div className="mt-12 bg-white rounded-3xl p-6 sm:p-8 border border-[#187A82]/15 text-center max-w-3xl mx-auto shadow-sm">
          <div className="flex items-center justify-center gap-2 text-[#187A82] font-bold text-sm mb-2">
            <Award className="w-5 h-5" />
            <span>معايير الاعتماد الصارمة</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            جميع معلمينا حاصلون على إجازات مسندة برواية حفص عن عاصم، ويخضعون لتدريب دوري على أحدث أساليب التحفيز الرقمي والتعامل التربوي مع مختلف الفئات العمرية.
          </p>
        </div>

      </div>
    </section>
  );
};
