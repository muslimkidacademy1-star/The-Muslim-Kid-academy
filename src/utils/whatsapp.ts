import { ACADEMY_CONFIG } from '../data/academyData';
import { BookingFormData } from '../types';

export const OFFICIAL_WHATSAPP_LINK =
  'https://wa.me/201065263121?text=السلام%20عليكم،%20أود%20الاستفسار%20عن%20حجز%20حصة%20تجريبية%20لطفلي%20في%20أكاديمية%20المسلم%20الصغير';

export function getWhatsAppUrl(customText?: string): string {
  const baseNumber = ACADEMY_CONFIG.whatsappRaw;
  const defaultMessage = 'السلام عليكم، أود الاستفسار عن حجز حصة تجريبية لطفلي في أكاديمية المسلم الصغير';
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
