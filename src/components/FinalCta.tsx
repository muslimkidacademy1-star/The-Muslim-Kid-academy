import React from 'react';
import { ACADEMY_CONFIG } from '../data/academyData';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { BookOpen, Phone, MessageCircle, Lock, Zap, Sparkles } from 'lucide-react';

export const FinalCta: React.FC = () => {
  const customWhatsAppText =
    'السلام عليكم، أرغب في حجز حصة تجريبية مجانية لطفلي في أكاديمية المسلم الصغير (الاسم: ... السن: ... الدولة: ...)';

  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Background blurs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#005963]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12 text-center relative z-10 space-y-8">
        
        {/* Top Icon Emblem */}
        <div className="w-20 h-20 rounded-3xl bg-[#fef3c7] text-[#92400e] flex items-center justify-center mx-auto shadow-sm ring-4 ring-[#fde68a]">
          <BookOpen className="w-10 h-10 text-[#d97706]" />
        </div>

        {/* Text */}
        <div className="space-y-3">
          <h2 className="font-extrabold text-[clamp(1.4rem,4.2vw,2.5rem)] text-[#003e45] tracking-tight leading-tight break-words">
            ابدأ اليوم.. واغرس نور القرآن في قلب طفلك
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            حصة تجريبية واحدة كفيلة بأن تجعل طفلك يشعر بالفرق، ويحب القرآن ومعلمه. احجز الحصة المجانية الآن دون أي تكلفة.
          </p>
        </div>

        {/* Action Box with Soft Minimal Drop Shadow */}
        <div className="bg-white p-7 sm:p-10 rounded-3xl shadow-[0_20px_60px_rgba(0,89,99,0.08)] border border-slate-100 max-w-2xl mx-auto space-y-6 text-right">
          
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-[#005963] font-extrabold text-sm sm:text-base border-b border-slate-100 pb-4">
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-[#f59e0b]" />
              <span>تواصل مباشر وفوري مع الإدارة:</span>
            </div>
            <a
              href={`tel:${ACADEMY_CONFIG.phone}`}
              className="font-mono text-lg text-slate-800 hover:text-[#005963] transition-colors"
              dir="ltr"
            >
              {ACADEMY_CONFIG.phone}
            </a>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            اضغط الزر أدناه لإرسال رسالة جاهزة تتضمن بيانات طفلك وسيقوم فريق الإدارة بالتنسيق معكم في دقائق معدودة:
          </p>

          <a
            href={getWhatsAppUrl(customWhatsAppText)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 w-full py-4.5 px-6 rounded-2xl bg-[#f59e0b] hover:bg-[#d97706] text-[#451a03] font-black text-base shadow-[0_12px_28px_-6px_rgba(245,158,11,0.4)] hover:shadow-[0_16px_32px_-6px_rgba(217,119,6,0.5)] transition-all transform hover:scale-[1.01] active:scale-95 cursor-pointer"
          >
            <MessageCircle className="w-6 h-6 shrink-0 text-[#78350f]" />
            <span>احجز الحصة التجريبية المجانية عبر واتساب الآن</span>
          </a>

          <div className="flex items-center justify-center gap-6 text-xs text-slate-500 pt-1">
            <span className="flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5 text-slate-400" />
              <span>خصوصية وسرية تامة</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-[#f59e0b]" />
              <span>رد سريع خلال دقائق</span>
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};
