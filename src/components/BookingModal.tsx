import React, { useState } from 'react';
import { BookingFormData } from '../types';
import { createBookingWhatsAppUrl } from '../utils/whatsapp';
import { X, Sparkles, Send, CheckCircle2, User, HeartHandshake } from 'lucide-react';

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

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const url = createBookingWhatsAppUrl(formData);
    setSubmitted(true);
    window.open(url, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-100 text-right max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="p-5 bg-[#005963] text-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#f59e0b] text-[#451a03] flex items-center justify-center font-bold">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-extrabold text-base sm:text-lg">
                حجز حصة تجريبية مجانية 100%
              </h3>
              <p className="text-xs text-cyan-200">
                لا يتطلب أي بطاقة بنكية • تحديد مستوى الطفل مباشرة
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

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-5">
          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="font-extrabold text-xl text-slate-900">
                تم تجهيز استمارة حجز الحصة التجريبية!
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                تم تحويلك إلى واتساب لإرسال بيانات طفلك للإدارة مباشرة، وسيتواصل معك منسق الحصص خلال دقائق لتحديد موعد الحصة الأنسب.
              </p>
              <button
                onClick={onClose}
                className="mt-4 px-6 py-2.5 rounded-xl bg-[#005963] text-white font-bold text-xs sm:text-sm cursor-pointer hover:bg-[#003e45]"
              >
                إغلاق النافذة
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-right">
              
              {/* Child Name & Age */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-800">
                    اسم الطفل / البطل <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="مثال: يوسف، فاطمة..."
                    value={formData.childName}
                    onChange={(e) => setFormData({ ...formData, childName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-hidden focus:border-[#005963] focus:bg-white transition-all text-right"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-800">
                    عمر الطفل <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="مثال: 7 سنوات"
                    value={formData.age}
                    onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-hidden focus:border-[#005963] focus:bg-white transition-all text-right"
                  />
                </div>
              </div>

              {/* Gender & Teacher Preference */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-800">
                    الجنس
                  </label>
                  <select
                    value={formData.gender}
                    onChange={(e) => setFormData({ ...formData, gender: e.target.value as 'boy' | 'girl' | '' })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-hidden focus:border-[#005963] focus:bg-white transition-all text-right"
                  >
                    <option value="">اختر الجنس</option>
                    <option value="boy">ولد (بطل)</option>
                    <option value="girl">بنت (بطلة)</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-800">
                    تفضيل المعلم
                  </label>
                  <select
                    value={formData.teacherPreference}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        teacherPreference: e.target.value as any,
                      })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-hidden focus:border-[#005963] focus:bg-white transition-all text-right"
                  >
                    <option value="any">لا فرق (الأفضل لمستوى الطفل)</option>
                    <option value="female">معلمة (خاتمة ومجازة)</option>
                    <option value="male">معلم (شيخ مجاز)</option>
                  </select>
                </div>
              </div>

              {/* Quran Level */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-800">
                  المستوى الحالي للطفل
                </label>
                <select
                  value={formData.level}
                  onChange={(e) => setFormData({ ...formData, level: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-hidden focus:border-[#005963] focus:bg-white transition-all text-right"
                >
                  <option value="مبتدئ / تأسيس نور البيان">مبتدئ / يبدأ من الصفر (نور البيان وتأسيس القراءة)</option>
                  <option value="يحفظ قصار السور">يحفظ بعض قصار السور من جزء عم</option>
                  <option value="أتم جزء عم أو أكثر">أتم جزء عم أو أكثر ويرغب في الحفظ والتجويد</option>
                  <option value="مراجعة وتثبيت وإجازة">مراجعة وتثبيت وإتقان مخارج الحروف</option>
                </select>
              </div>

              {/* Country & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-800">
                    دولة الإقامة
                  </label>
                  <select
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-hidden focus:border-[#005963] focus:bg-white transition-all text-right"
                  >
                    <option value="مصر">مصر</option>
                    <option value="السعودية">المملكة العربية السعودية</option>
                    <option value="الإمارات">الإمارات العربية المتحدة</option>
                    <option value="الكويت">الكويت</option>
                    <option value="قطر">قطر</option>
                    <option value="عمان">سلطنة عمان</option>
                    <option value="البحرين">البحرين</option>
                    <option value="أوروبا / أمريكا / أخرى">أوروبا / أمريكا / كندا / أخرى</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-800">
                    رقم هاتف ولي الأمر (واتساب)
                  </label>
                  <input
                    type="tel"
                    placeholder="مثال: +966 50 123 4567"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-hidden focus:border-[#005963] focus:bg-white transition-all text-right"
                    dir="ltr"
                  />
                </div>
              </div>

              {/* Preferred Time */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-800">
                  الأوقات المفضلة للحصة
                </label>
                <input
                  type="text"
                  placeholder="مثال: أيام السبت والثلاثاء بعد 5 مساءً"
                  value={formData.preferredTime}
                  onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-hidden focus:border-[#005963] focus:bg-white transition-all text-right"
                />
              </div>

              {/* Notes */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-800">
                  ملاحظات أو رغبات خاصة (اختياري)
                </label>
                <textarea
                  rows={2}
                  placeholder="مثال: الطفل خجول قليلاً، أو نرغب في باقة 45 دقيقة..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-hidden focus:border-[#005963] focus:bg-white transition-all text-right"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-2xl bg-[#f59e0b] hover:bg-[#d97706] text-[#451a03] font-black text-sm sm:text-base transition-all shadow-[0_10px_25px_rgba(245,158,11,0.35)] active:scale-95 flex items-center justify-center gap-2.5 cursor-pointer"
                >
                  <Send className="w-5 h-5 text-[#78350f]" />
                  <span>إرسال وتأكيد الحصة التجريبية عبر واتساب</span>
                </button>
              </div>

              <div className="flex items-center justify-center gap-1.5 text-xs text-slate-500 text-center pt-1">
                <HeartHandshake className="w-4 h-4 text-[#005963]" />
                <span>حصة مجانية بالكامل للتعارف وبناء الألفة بدون أي التزام مالي</span>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
