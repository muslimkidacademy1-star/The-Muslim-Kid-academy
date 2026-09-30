import React, { useState } from 'react';
import { AcademyLogo } from './AcademyLogo';
import { X, Star, User, Lock, ArrowLeft, CheckCircle2, ShieldCheck, Sparkles, BookOpen } from 'lucide-react';

interface ParentPortalModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBooking: () => void;
}

export const ParentPortalModal: React.FC<ParentPortalModalProps> = ({
  isOpen,
  onClose,
  onOpenBooking,
}) => {
  const [activeTab, setActiveTab] = useState<'login' | 'preview'>('login');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [studentCode, setStudentCode] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggedIn(true);
  };

  const handleDemoLogin = () => {
    setPhoneNumber('+201065263212');
    setStudentCode('KID-842');
    setIsLoggedIn(true);
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
                بوابة ولي الأمر • تسجيل الدخول
              </h3>
              <p className="text-xs text-[#A5F3FC]">
                متابعة تقارير الحفظ وجدول الحصص وتسجيلات الزووم
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              setIsLoggedIn(false);
              onClose();
            }}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="إغلاق"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="flex border-b border-slate-100 bg-[#F1F7F8] px-6 pt-3 shrink-0">
          <button
            onClick={() => {
              setActiveTab('login');
              setIsLoggedIn(false);
            }}
            className={`pb-3 font-bold text-xs sm:text-sm px-4 border-b-2 transition-all cursor-pointer ${
              activeTab === 'login'
                ? 'border-[#187A82] text-[#0F4F55]'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            تسجيل الدخول للبوابة
          </button>

          <button
            onClick={() => setActiveTab('preview')}
            className={`pb-3 font-bold text-xs sm:text-sm px-4 border-b-2 transition-all cursor-pointer ${
              activeTab === 'preview'
                ? 'border-[#187A82] text-[#0F4F55]'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            نموذج تقرير المتابعة
          </button>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto flex-1">
          {activeTab === 'login' ? (
            isLoggedIn ? (
              <div className="space-y-5 py-2">
                <div className="p-4 bg-[#F0FDF4] border border-[#BBF7D0] rounded-2xl flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#16A34A] text-white flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-sm text-[#14532D]">
                      مرحباً بكم ولي أمر الطالب: عبد الرحمن يوسف
                    </h4>
                    <p className="text-xs text-[#166534]">
                      كود الطالب: KID-842 • الباقة: الإتقان والمتابعة المكثفة
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <h5 className="font-bold text-xs text-slate-500">حالة الحلقات والتقدم هذا الشهر</h5>
                  <div className="grid grid-cols-2 gap-3 text-right">
                    <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100">
                      <span className="text-[11px] text-slate-500 block">الحصص المنجزة</span>
                      <span className="text-lg font-black text-[#0F4F55]">8 من 8 حصص</span>
                    </div>
                    <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100">
                      <span className="text-[11px] text-slate-500 block">نسبة الإتقان والتجويد</span>
                      <span className="text-lg font-black text-[#187A82]">98% (ممتاز)</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-2">
                    <div className="flex items-center justify-between text-xs font-bold text-slate-700">
                      <span>آخر سورة تم إتقانها: سورة النبأ (كاملة)</span>
                      <span className="text-[#16A34A] bg-[#DCFCE7] px-2 py-0.5 rounded-full text-[10px]">متقن</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      ملاحظة المشرف: ما شاء الله، تطور ملحوظ في أحكام القلقلة والإخفاء والتزام رائع في موعد الحصة الأسبوعي.
                    </p>
                  </div>
                </div>

                <div className="pt-2 flex gap-3">
                  <button
                    onClick={() => {
                      onClose();
                      onOpenBooking();
                    }}
                    className="flex-1 py-3 px-4 rounded-xl bg-[#187A82] hover:bg-[#13666D] text-white font-bold text-xs cursor-pointer shadow-sm"
                  >
                    تجديد الاشتراك أو إضافة أخ
                  </button>

                  <button
                    onClick={() => setIsLoggedIn(false)}
                    className="py-3 px-4 rounded-xl border border-slate-200 text-slate-600 text-xs font-semibold hover:bg-slate-50 cursor-pointer"
                  >
                    تسجيل الخروج
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleLogin} className="space-y-4 py-2">
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  أدخل رقم الواتساب المسجل وكود الطالب للدخول المباشر إلى لوحة المتابعة الدورية.
                </p>

                <div>
                  <label className="block text-xs font-bold text-[#0F4F55] mb-1.5">
                    رقم الهاتف أو الواتساب المسجل
                  </label>
                  <input
                    type="tel"
                    required
                    dir="ltr"
                    placeholder="+966 / +20 ..."
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-[#187A82] focus:ring-2 focus:ring-[#187A82]/20 outline-none text-xs sm:text-sm text-left"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#0F4F55] mb-1.5">
                    كود الطالب (اختياري)
                  </label>
                  <input
                    type="text"
                    dir="ltr"
                    placeholder="مثال: KID-842"
                    value={studentCode}
                    onChange={(e) => setStudentCode(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-[#187A82] focus:ring-2 focus:ring-[#187A82]/20 outline-none text-xs sm:text-sm text-left"
                  />
                </div>

                <div className="pt-2 space-y-3">
                  <button
                    type="submit"
                    className="w-full py-3.5 px-5 rounded-2xl bg-[#0F4F55] hover:bg-[#187A82] text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer"
                  >
                    <Lock className="w-4 h-4 text-[#A5F3FC]" />
                    <span>تسجيل الدخول</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleDemoLogin}
                    className="w-full py-2.5 px-4 rounded-xl border border-slate-200 hover:border-[#187A82] hover:bg-[#E6F7F8]/50 text-[#187A82] text-xs font-bold transition-all cursor-pointer"
                  >
                    تجربة حساب افتراضي توضيحي (Demo Login)
                  </button>
                </div>

                <div className="pt-2 text-center">
                  <p className="text-xs text-slate-500">
                    لست مسجلاً بعد؟{' '}
                    <button
                      type="button"
                      onClick={() => {
                        onClose();
                        onOpenBooking();
                      }}
                      className="text-[#187A82] font-bold hover:underline cursor-pointer"
                    >
                      احجز حصة تجريبية مجانية الآن
                    </button>
                  </p>
                </div>
              </form>
            )
          ) : (
            <div className="space-y-4 py-2">
              <h4 className="font-extrabold text-sm text-[#0F4F55]">
                كيف يبدو تقرير طفلك الأسبوعي؟
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                يرسل المشرف تقريراً موثقاً يتضمن السور التي تم حفظها ومراجعتها، وأحكام التجويد المطبقة، وسلوك الطفل أثناء الحلقة مع شارات تحفيزية.
              </p>

              <div className="bg-[#F1F7F8] border border-[#187A82]/15 rounded-2xl p-4 space-y-3 text-xs">
                <div className="flex items-center justify-between font-bold border-b border-slate-200 pb-2">
                  <span className="text-[#0F4F55]">تقرير الأسبوع الثاني - جزء عم</span>
                  <span className="text-[#187A82]">درجة التقييم: 10 / 10</span>
                </div>
                <div className="space-y-1.5 text-slate-700">
                  <p>• <strong>الحفظ الجديد:</strong> سورة البروج (الآيات 1 - 12)</p>
                  <p>• <strong>المراجعة والتثبيت:</strong> سورة الانشقاق والمطففين</p>
                  <p>• <strong>التجويد العملي:</strong> التدريب على حروف القلقلة (قطب جد)</p>
                  <p>• <strong>التفاعل والسلوك:</strong> تركيز عالٍ وابتسامة رائعة وحفظ متقن</p>
                </div>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
