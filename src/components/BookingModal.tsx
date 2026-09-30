import React, { useState, useEffect } from 'react';
import { BookingFormData } from '../types';
import { createBookingWhatsAppUrl } from '../utils/whatsapp';
import { AcademyLogo } from './AcademyLogo';
import { X, Sparkles, Send, CheckCircle2, User, HeartHandshake, ShieldCheck } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPlan?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialPlan,
}) => {
  const [formData, setFormData] = useState<BookingFormData>({
    childName: '',
    age: '',
    gender: '',
    teacherPreference: 'any',
    level: 'مبتدئ / تأسيس نور البيان',
    country: 'مصر',
    phone: '',
    preferredTime: 'مساءً (بعد المدرسة)',
    notes: initialPlan ? `مهتم بـ ${initialPlan}` : '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [whatsappLink, setWhatsappLink] = useState('');

  useEffect(() => {
    if (initialPlan) {
      setFormData((prev) => ({ ...prev, notes: `مهتم بـ ${initialPlan}` }));
    }
  }, [initialPlan]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const url = createBookingWhatsAppUrl(formData);
    setWhatsappLink(url);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-200 text-right max-h-[92vh] flex flex-col">
        
        {/* Header in Petroleum Teal */}
        <div className="p-5 bg-[#0F4F55] text-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <AcademyLogo variant="badge" />
            <div>
              <h3 className="font-extrabold text-base sm:text-lg">
                طلب حصة تجريبية مجانية 100%
              </h3>
              <p className="text-xs text-[#A5F3FC]">
                بدون أي مقابل مالي • نلتقي مباشرة على Zoom
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="إغلاق"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Form Body or Success State */}
        <div className="p-6 overflow-y-auto flex-1">
          {submitted ? (
            <div className="text-center py-6 space-y-5">
              <div className="w-16 h-16 rounded-full bg-[#E6F7F8] text-[#187A82] mx-auto flex items-center justify-center shadow-inner">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <div className="space-y-2">
                <h4 className="text-xl font-black text-[#0F4F55]">
                  جزاكم الله خيراً! بيانات الحصة جاهزة
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  تم تجهيز رسالة التنسيق الخاصة بطفلك <span className="font-bold text-[#187A82]">({formData.childName || 'البطل'})</span>. انقر أدناه لإرسالها فوراً لمسؤول التسجيل عبر واتساب وسيتواصل معك خلال دقائق.
                </p>
              </div>

              <div className="pt-3 flex flex-col gap-3">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 px-6 rounded-2xl bg-[#25D366] hover:bg-[#20ba59] text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-[0_6px_20px_rgba(37,211,102,0.35)] transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>فتح محادثة واتساب لإتمام الحجز الآن</span>
                </a>

                <button
                  onClick={handleReset}
                  className="text-xs text-slate-500 hover:text-[#187A82] font-semibold py-2"
                >
                  العودة للصفحة الرئيسية
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Selected Plan indicator if present */}
              {initialPlan && (
                <div className="p-3 bg-[#E6F7F8] text-[#187A82] rounded-2xl text-xs font-bold flex items-center justify-between border border-[#187A82]/20">
                  <span>الباقة المختارة: {initialPlan}</span>
                  <span className="text-[11px] bg-white px-2 py-0.5 rounded-full font-bold">حصة تجريبية مجاناً</span>
                </div>
              )}

              {/* Row 1: Child Name & Age */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#0F4F55] mb-1.5">
                    اسم الطفل (أو الطفلة) *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="مثال: يوسف أحمد"
                    value={formData.childName}
                    onChange={(e) => setFormData({ ...formData, childName: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-[#187A82] focus:ring-2 focus:ring-[#187A82]/20 outline-none text-xs sm:text-sm text-right"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#0F4F55] mb-1.5">
                    عمر الطفل *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="مثال: 7 سنوات"
                    value={formData.age}
                    onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-[#187A82] focus:ring-2 focus:ring-[#187A82]/20 outline-none text-xs sm:text-sm text-right"
                  />
                </div>
              </div>

              {/* Row 2: Teacher Gender & Level */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#0F4F55] mb-1.5">
                    تفضيل المعلم
                  </label>
                  <select
                    value={formData.teacherPreference}
                    onChange={(e) => setFormData({ ...formData, teacherPreference: e.target.value as 'any' | 'male' | 'female' })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-[#187A82] focus:ring-2 focus:ring-[#187A82]/20 outline-none text-xs sm:text-sm bg-white text-right"
                  >
                    <option value="any">لا فرق (الأفضل لطفلي)</option>
                    <option value="male">معلم ذكر (أزهري مجاز)</option>
                    <option value="female">معلمة (مجازة ومتخصصة بالصغار)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#0F4F55] mb-1.5">
                    المستوى الحالي
                  </label>
                  <select
                    value={formData.level}
                    onChange={(e) => setFormData({ ...formData, level: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-[#187A82] focus:ring-2 focus:ring-[#187A82]/20 outline-none text-xs sm:text-sm bg-white text-right"
                  >
                    <option value="مبتدئ / تأسيس نور البيان">مبتدئ / تأسيس نور البيان</option>
                    <option value="يحفظ جزء عم أو أقل">يحفظ جزء عم أو أقل</option>
                    <option value="يحفظ من 2 إلى 5 أجزاء">يحفظ من 2 إلى 5 أجزاء</option>
                    <option value="متقدم (أكثر من 5 أجزاء)">متقدم (أكثر من 5 أجزاء)</option>
                  </select>
                </div>
              </div>

              {/* Row 3: Country & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#0F4F55] mb-1.5">
                    بلد الإقامة
                  </label>
                  <input
                    type="text"
                    placeholder="مثال: السعودية، مصر، الإمارات، أوروبا"
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-[#187A82] focus:ring-2 focus:ring-[#187A82]/20 outline-none text-xs sm:text-sm text-right"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#0F4F55] mb-1.5">
                    رقم الواتساب للتواصل *
                  </label>
                  <input
                    type="tel"
                    required
                    dir="ltr"
                    placeholder="+966 / +20 ..."
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-[#187A82] focus:ring-2 focus:ring-[#187A82]/20 outline-none text-xs sm:text-sm text-left"
                  />
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-xs font-bold text-[#0F4F55] mb-1.5">
                  ملاحظات أو مواعيد مفضلة
                </label>
                <textarea
                  rows={2}
                  placeholder="مثال: يفضل الحصص بعد العصر، يعاني من تشتت خفيف..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:border-[#187A82] focus:ring-2 focus:ring-[#187A82]/20 outline-none text-xs text-right resize-none"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-2xl bg-[#187A82] hover:bg-[#13666D] text-white font-extrabold text-sm sm:text-base flex items-center justify-center gap-2 shadow-[0_8px_20px_rgba(24,122,130,0.35)] transition-all cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-[#FDE68A]" />
                  <span>تأكيد طلب الحصة المجانية عبر واتساب</span>
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400">
                <ShieldCheck className="w-3.5 h-3.5 text-[#187A82]" />
                <span>بياناتكم سرية تماماً وتستخدم للتنسيق التربوي فقط</span>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
