import React from 'react';
import { Gift, Sparkles, MessageCircle, Calendar, CheckCircle2 } from 'lucide-react';
import { getWhatsAppUrl } from '../utils/whatsapp';

export const BonusesSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-[#003e45] via-[#005963] to-[#086b76] text-white relative overflow-hidden">
      {/* Decorative blurs */}
      <div className="absolute -top-16 -right-16 w-80 h-80 rounded-full bg-white/5 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-16 -left-16 w-80 h-80 rounded-full bg-[#f59e0b]/15 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10 text-right">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Text & 2 Gift Cards */}
          <div className="lg:col-span-8 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f59e0b]/20 text-[#fef3c7] font-bold text-xs sm:text-sm border border-[#f59e0b]/40">
              <Gift className="w-4 h-4 text-[#f59e0b]" />
              <span>مفاجآت وهدايا مجانية لكل المشتركين</span>
            </div>

            <h2 className="font-extrabold text-[clamp(1.4rem,4.2vw,2.5rem)] text-white leading-tight break-words">
              لا تكتفي بالحفظ الفردي فقط..
              <span className="block text-[#f59e0b] mt-2 font-black">
                استمتع ببرامجنا القيمية المجانية المساندة
              </span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              
              {/* Bonus 1 */}
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/15 flex gap-4 text-right">
                <div className="w-12 h-12 rounded-2xl bg-[#f59e0b] text-[#451a03] flex items-center justify-center shrink-0 shadow-sm font-black">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-extrabold text-base sm:text-lg text-white">
                    هدية 1: حصة تجريبية مجانية 100%
                  </h3>
                  <p className="text-xs sm:text-sm text-cyan-100 leading-relaxed">
                    جلسة تقييمية كاملة لمستوى طفلك مع المعلم للتعارف بدون أي التزام مادي مسبق.
                  </p>
                </div>
              </div>

              {/* Bonus 2 */}
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/15 flex gap-4 text-right">
                <div className="w-12 h-12 rounded-2xl bg-[#e0f4f7] text-[#005963] flex items-center justify-center shrink-0 shadow-sm font-black">
                  <Calendar className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-extrabold text-base sm:text-lg text-white">
                    هدية 2: لقاء الجمعة الأسبوعي في السيرة
                  </h3>
                  <p className="text-xs sm:text-sm text-cyan-100 leading-relaxed">
                    حلقة أسبوعية جامعة عبر تيليجرام لمدارسة السيرة العطرة وقصص الصحابة والأذكار بصحبة صالحة.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Action Column */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-end justify-center space-y-3">
            <a
              href={getWhatsAppUrl('السلام عليكم، أود حجز الحصة التجريبية المجانية والاستفادة من هدايا أكاديمية المسلم الصغير')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto text-center px-8 py-4.5 rounded-2xl bg-[#f59e0b] hover:bg-[#d97706] text-[#451a03] font-black text-base transition-all shadow-[0_12px_28px_-6px_rgba(245,158,11,0.5)] active:scale-95 flex items-center justify-center gap-2.5 cursor-pointer"
            >
              <MessageCircle className="w-5 h-5 text-[#451a03]" />
              <span>احصل على الهدايا واحجز التجربة</span>
            </a>
            <div className="flex items-center gap-2 text-xs text-cyan-200">
              <CheckCircle2 className="w-4 h-4 text-[#f59e0b]" />
              <span>فريق الإدارة متواجد للرد الفوري والمساعدة</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
