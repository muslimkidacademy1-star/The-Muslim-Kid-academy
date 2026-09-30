import React, { useState, useEffect, useRef } from 'react';
import {
  GraduationCap,
  Sparkles,
  ShieldCheck,
  Crown,
  Video
} from 'lucide-react';

export const TrustStats: React.FC = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Counter states
  const [teachersCount, setTeachersCount] = useState(0);
  const [sessionsCount, setSessionsCount] = useState(0);
  const [supervisorsCount, setSupervisorsCount] = useState(0);
  const [generalSupervisorCount, setGeneralSupervisorCount] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    const teachersTarget = 80;
    const duration = 1600;
    const startTime = performance.now();

    const animateCounters = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);

      setTeachersCount(Math.floor(easeOut * teachersTarget));
      setSessionsCount(Math.floor(easeOut * 750));
      setSupervisorsCount(Math.floor(easeOut * 8));
      setGeneralSupervisorCount(Math.min(1, Math.floor(easeOut * 1.5)));

      if (progress < 1) {
        requestAnimationFrame(animateCounters);
      } else {
        setTeachersCount(80);
        setSessionsCount(750);
        setSupervisorsCount(8);
        setGeneralSupervisorCount(1);
      }
    };

    requestAnimationFrame(animateCounters);
  }, [hasAnimated]);

  const stats = [
    {
      id: 1,
      prefix: '+',
      value: teachersCount,
      label: 'معلم ومعلمة معتمدين',
      description: 'مؤهلون ومجازون بالقراءات وخريجو الأزهر الشريف',
      icon: GraduationCap,
      color: 'bg-sky-50 text-sky-600',
    },
    {
      id: 2,
      prefix: '+',
      value: sessionsCount,
      label: 'حلقة فردية نشطة شهرياً',
      description: 'تُبث فردياً ومباشرة عبر زووم بكامل الخصوصية والتركيز',
      icon: Video,
      color: 'bg-amber-50 text-amber-600',
    },
    {
      id: 3,
      prefix: '',
      value: supervisorsCount,
      label: 'مشرفين متخصصين',
      description: 'متابعة حية لجودة الحلقات والتزام المعلمين والطلاب',
      icon: ShieldCheck,
      color: 'bg-emerald-50 text-emerald-600',
    },
    {
      id: 4,
      prefix: '',
      value: generalSupervisorCount,
      label: 'مشرف عام تربوي',
      description: 'يتابع المنظومة كاملة لضمان أسمى معايير الإتقان',
      icon: Crown,
      color: 'bg-purple-50 text-purple-600',
    },
  ];

  return (
    <section
      id="stats"
      ref={sectionRef}
      className="py-14 sm:py-18 bg-white border-y border-slate-200/80 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (SuperHi Clean Style) */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 text-sky-700 border border-sky-200 text-xs sm:text-sm font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>إحصائيات وأرقام تمنحك الاطمئنان</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
            منظومة إشراف ومتابعة حقيقية وراء كل حلقة
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            لا نترك الحلقات للصدفة، بل نطبق نموذجاً إشرافياً صارماً يضمن الاستمرارية والإتقان
          </p>
        </div>

        {/* Clean Stat Counter Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.id}
                className="bg-white border border-slate-200 rounded-2xl p-6 transition-all duration-300 hover:border-slate-300 hover:shadow-md text-right flex flex-col justify-between"
              >
                <div>
                  {/* Icon */}
                  <div className={`w-11 h-11 rounded-xl ${stat.color} flex items-center justify-center mb-4`}>
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Counter */}
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="text-4xl sm:text-5xl font-black text-[#0F172A] tracking-tight">
                      {stat.prefix}{stat.value}
                    </span>
                  </div>

                  {/* Label */}
                  <h3 className="text-base font-bold text-slate-800 mb-1.5">
                    {stat.label}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-500 text-xs leading-relaxed">
                    {stat.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400 font-semibold">
                  <span>منظومة متكاملة</span>
                  <span className="text-sky-600 font-bold">100% موثوق</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
