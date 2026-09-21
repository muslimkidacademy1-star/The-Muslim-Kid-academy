import { ACADEMY_CONFIG } from '../data/academyData';
import { BookingFormData } from '../types';

export function getWhatsAppUrl(customText?: string): string {
  const baseNumber = ACADEMY_CONFIG.whatsappRaw;
  const defaultMessage = 'السلام عليكم، أرغب في حجز حصة تجريبية مجانية لطفلي في أكاديمية المسلم الصغير';
  const text = customText || defaultMessage;
  return `https://wa.me/${baseNumber}?text=${encodeURIComponent(text)}`;
}

export function createBookingWhatsAppUrl(data: BookingFormData): string {
  const lines = [
    'السلام عليكم ورحمة الله وبركاته،',
    'أرغب في حجز حصة تجريبية مجانية لطفلي في أكاديمية المسلم الصغير:',
    `👤 اسم الطفل: ${data.childName || 'لم يُحدد'}`,
    `🎂 السن: ${data.age || 'لم يُحدد'}`,
    `🚻 النوع: ${data.gender === 'boy' ? 'ولد (بنين)' : data.gender === 'girl' ? 'بنت (بنات)' : 'لم يُحدد'}`,
    `👨‍🏫 تفضيل المعلم: ${data.teacherPreference === 'female' ? 'معلمة' : data.teacherPreference === 'male' ? 'معلم' : 'لا فرق'}`,
    `📖 المستوى الحالي: ${data.level || 'مبتدئ / تأسيس'}`,
    `🌍 الدولة / المدينة: ${data.country || 'مصر'}`,
    `⏰ الوقت المفضل: ${data.preferredTime || 'مساءً بعد العصر'}`,
    data.notes ? `📝 ملاحظات إضافية: ${data.notes}` : '',
  ].filter(Boolean);

  return getWhatsAppUrl(lines.join('\n'));
}
