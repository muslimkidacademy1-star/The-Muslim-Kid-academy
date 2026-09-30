import React from 'react';

interface AcademyLogoProps {
  variant?: 'teal' | 'white' | 'badge';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  showSubtitle?: boolean;
}

export const AcademyLogo: React.FC<AcademyLogoProps> = ({
  variant = 'teal',
  size = 'md',
  className = '',
  showSubtitle = true,
}) => {
  const isWhite = variant === 'white';
  const textColor = isWhite ? '#ffffff' : '#187A82';
  const subtitleColor = isWhite ? '#A5F3FC' : '#187A82';

  if (variant === 'badge') {
    return (
      <div className={`flex items-center gap-3 ${className}`}>
        <div className="w-11 h-11 rounded-2xl bg-[#187A82] text-white flex items-center justify-center p-1 shadow-md ring-2 ring-[#E6F7F8]">
          <svg viewBox="0 0 100 100" className="w-full h-full select-none" fill="none">
            <text
              x="50"
              y="44"
              textAnchor="middle"
              fill="#ffffff"
              fontFamily="'Readex Pro', 'IBM Plex Sans Arabic', sans-serif"
              fontWeight="900"
              fontSize="24"
              letterSpacing="-0.5px"
            >
              المسلم
            </text>
            <text
              x="50"
              y="70"
              textAnchor="middle"
              fill="#ffffff"
              fontFamily="'Readex Pro', 'IBM Plex Sans Arabic', sans-serif"
              fontWeight="900"
              fontSize="22"
              letterSpacing="-0.5px"
            >
              الصغير
            </text>
            <circle cx="43" cy="78" r="2.2" fill="#ffffff" />
            <circle cx="49" cy="78" r="2.2" fill="#ffffff" />
            <text
              x="50"
              y="88"
              textAnchor="middle"
              fill="#ffffff"
              fontFamily="'Readex Pro', sans-serif"
              fontWeight="700"
              fontSize="6.5"
              letterSpacing="0.8px"
            >
              The Muslim Kid
            </text>
          </svg>
        </div>
      </div>
    );
  }

  // Exact Horizontal Lockup matching Logo-01.png
  const heightClasses = {
    sm: 'h-8 sm:h-9',
    md: 'h-10 sm:h-12',
    lg: 'h-12 sm:h-14',
    xl: 'h-16 sm:h-20',
  };

  return (
    <div className={`inline-flex items-center select-none group transition-transform ${className}`}>
      {/* SVG Vector Render of Logo-01.png */}
      <svg
        viewBox="0 0 460 120"
        className={`${heightClasses[size]} w-auto max-w-full drop-shadow-xs transition-transform duration-200 group-hover:scale-[1.02]`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          {/* Main Arabic Wordmark: "المسلم الصغير" */}
          <text
            x="230"
            y="72"
            textAnchor="middle"
            fill={textColor}
            fontFamily="'Readex Pro', 'IBM Plex Sans Arabic', 'Tajawal', sans-serif"
            fontWeight="900"
            fontSize="54"
            letterSpacing="-0.5px"
          >
            المسلم الصغير
          </text>

          {/* Dots below the letter (ياء) in الصغير */}
          <circle cx="152" cy="91" r="4.2" fill={textColor} />
          <circle cx="166" cy="91" r="4.2" fill={textColor} />

          {/* English Subtitle: "The Muslim Kid" positioned under الصغير */}
          {showSubtitle && (
            <text
              x="160"
              y="108"
              textAnchor="middle"
              fill={subtitleColor}
              fontFamily="'Readex Pro', 'IBM Plex Sans Arabic', system-ui, sans-serif"
              fontWeight="700"
              fontSize="13"
              letterSpacing="0.4px"
            >
              The Muslim Kid
            </text>
          )}
        </g>
      </svg>
    </div>
  );
};
