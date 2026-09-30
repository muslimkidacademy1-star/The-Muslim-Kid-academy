import React, { useState, useEffect, useRef } from 'react';
import {
  GraduationCap,
  Sparkles,
  ShieldCheck,
  Crown,
  Users,
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
      { threshold: 0.25 }
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
    const duration = 1800; // ms
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
      target: '+80',
      label: 'معلم ومعلمة',
      description: 'مؤهلون ومجازون بالقراءات وخريجو الأزهر الشريف',
      icon: GraduationCap,
      color: 'bg-[#E6F7F8] text-[#187A82]',
    },
    {
      id: 2,
      prefix: '+',
      value: sessionsCount,
      target: '+750',
      label: 'حلقة قرآنية نشطة شهرياً',
      description: 'تُبث فردياً ومباشرة عبر زووم بكل خصوصية وتركيز',
      icon: Video,
      color: 'bg-[#FEF3C7] text-[#D97706]',
    },
    {
      id: 3,
      prefix: '',
      value: supervisorsCount,
      target: '8',
      label: 'مشرفين متخصصين',
      description: 'لمتابعة جودة الحلقات والتزام المعلمين وتقدم الطلاب',
      icon: ShieldCheck,
      color: 'bg-[#E0F2FE] text-[#0284C7]',
    },
    {
      id: 4,
      prefix: '',
      value: generalSupervisorCount,
      target: '1',
      label: 'مشرف عام تربوي',
      description: 'يتابع المنظومة كاملة لضمان أعلى معايير الإتقان',
      icon: Crown,
      color: 'bg-[#F3E8FF] text-[#9333EA]',
    },
  ];

  return (
    <section
      id="stats"
      ref={sectionRef}
      className="py-16 sm:py-20 bg-[#0F4F55] text-white relative overflow-hidden"
    >
      {/* Background Subtle Teal Glows */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-[#187A82]/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-[#23949D]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-[#A5F3FC] border border-white/15 text-xs sm:text-sm font-bold">
            <Sparkles className="w-3.5 h-3.5 text-[#FDE68A]" />
            <span>إحصائيات بالأرقام تمنحك راحة البال</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            منظومة إشراف ومتابعة حقيقية وراء كل حلقة
          </h2>

          <p className="text-[#D4F1F4] text-xs sm:text-base leading-relaxed">
            لا نترك الحلقات للصدفة، بل نطبق نموذجاً إشرافياً صارماً يضمن الاستمرارية والالتزام
          </p>
        </div>

        {/* High-Impact Stat Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.id}
                className="bg-white/10 backdrop-blur-md border border-white/15 hover:border-[#187A82]/60 rounded-3xl p-7 transition-all duration-300 hover:bg-white/15 hover:-translate-y-1 shadow-lg text-right flex flex-col justify-between"
              >
                <div>
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-2xl ${stat.color} flex items-center justify-center mb-5 shadow-xs`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Animated Counter Display */}
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-4xl sm:text-5xl font-black text-white tracking-tight">
                      {stat.prefix}{stat.value}
                    </span>
                  </div>

                  {/* Stat Title */}
                  <h3 className="text-lg font-bold text-[#A5F3FC] mb-2">
                    {stat.label}
                  </h3>

                  {/* Stat Description */}
                  <p className="text-[#E6F7F8]/80 text-xs leading-relaxed">
                    {stat.description}
                  </p>
                </div>

                {/* Bottom line */}
                <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-[#D4F1F4] font-semibold">
                  <span>منظومة متكاملة</span>
                  <span className="text-[#A5F3FC]">100% موثوق</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
