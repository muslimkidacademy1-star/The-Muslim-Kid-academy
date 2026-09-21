import React from 'react';
import { MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '../utils/whatsapp';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <aside className="fixed bottom-6 left-6 z-40 flex items-center group">
      <a
        href={getWhatsAppUrl('السلام عليكم، أود الاستفسار عن حلقات القرآن للأطفال في أكاديمية المسلم الصغير')}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="تواصل معنا عبر واتساب"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-4px_rgba(27,107,118,0.35)] transition-transform hover:scale-110 active:scale-95 pulse-soft"
      >
        <MessageCircle className="w-7 h-7" />

        {/* Live Notification Dot */}
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75" />
          <span className="relative inline-flex rounded-full h-4 w-4 bg-[#f59e0b]" />
        </span>
      </a>
    </aside>
  );
};
