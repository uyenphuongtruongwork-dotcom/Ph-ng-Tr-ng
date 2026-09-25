import React from 'react';

interface PatternProps {
  className?: string;
  width?: number | string;
  height?: number | string;
}

// 1. H'Mông Solar Spiral & Batik Cross-Stitch
export const HmongIndigoSpiralPattern: React.FC<PatternProps> = ({ className = '', width = '100%', height = '100%' }) => (
  <svg width={width} height={height} viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect width="200" height="200" fill="#1b2a38" />
    <pattern id="hmong-dots" width="20" height="20" patternUnits="userSpaceOnUse">
      <circle cx="10" cy="10" r="1.5" fill="#e8eaed" fillOpacity="0.4" />
    </pattern>
    <rect width="200" height="200" fill="url(#hmong-dots)" />
    
    {/* Central Solar Spiral */}
    <g transform="translate(100, 100)" stroke="#f5ede0" strokeWidth="2.5" fill="none" strokeLinecap="round">
      <path d="M0,0 C10,-10 20,-5 20,10 C20,25 -5,30 -20,20 C-35,10 -30,-25 -10,-35 C15,-45 45,-30 45,0 C45,35 10,55 -25,50 C-60,45 -65,-10 -45,-45 C-25,-80 30,-75 60,-45" />
      <circle cx="0" cy="0" r="4" fill="#d97706" />
      
      {/* 4 Cardinal Sacred Notches */}
      <line x1="-50" y1="0" x2="-65" y2="0" stroke="#f5ede0" strokeWidth="3" />
      <line x1="50" y1="0" x2="65" y2="0" stroke="#f5ede0" strokeWidth="3" />
      <line x1="0" y1="-50" x2="0" y2="-65" stroke="#f5ede0" strokeWidth="3" />
      <line x1="0" y1="50" x2="0" y2="65" stroke="#f5ede0" strokeWidth="3" />
    </g>

    {/* Geometric Border Accents */}
    <g stroke="#d97706" strokeWidth="1.5" fill="none">
      <path d="M10,10 L30,30 L50,10 L70,30 L90,10 L110,30 L130,10 L150,30 L170,10 L190,30" />
      <path d="M10,190 L30,170 L50,190 L70,170 L90,190 L110,170 L130,190 L150,170 L170,190 L190,170" />
    </g>
    
    {/* Cross-stitch points */}
    <g fill="#e11d48">
      <rect x="25" y="95" width="8" height="8" transform="rotate(45 29 99)" />
      <rect x="165" y="95" width="8" height="8" transform="rotate(45 169 99)" />
      <rect x="95" y="25" width="8" height="8" transform="rotate(45 99 29)" />
      <rect x="95" y="165" width="8" height="8" transform="rotate(45 99 169)" />
    </g>
  </svg>
);

// 2. Thái Northwest Rhombus (Quả Trám)
export const ThaiRhombusPattern: React.FC<PatternProps> = ({ className = '', width = '100%', height = '100%' }) => (
  <svg width={width} height={height} viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect width="200" height="200" fill="#991b1b" />
    
    {/* Stepped Lozenge / Quả Trám */}
    <g transform="translate(100, 100)">
      {/* Outer Diamond */}
      <polygon points="0,-75 75,0 0,75 -75,0" fill="#1e3a8a" stroke="#f59e0b" strokeWidth="3" />
      {/* Middle Diamond */}
      <polygon points="0,-50 50,0 0,50 -50,0" fill="#fef3c7" stroke="#dc2626" strokeWidth="2.5" />
      {/* Inner Center Diamond */}
      <polygon points="0,-25 25,0 0,25 -25,0" fill="#d97706" />
      <polygon points="0,-12 12,0 0,12 -12,0" fill="#ffffff" />

      {/* Decorative Hooks / Răng cưa bên cánh */}
      <g stroke="#f59e0b" strokeWidth="2" fill="none">
        <path d="M-60,-15 L-75,0 L-60,15" />
        <path d="M60,-15 L75,0 L60,15" />
        <path d="M-15,-60 L0,-75 L15,-60" />
        <path d="M-15,60 L0,75 L15,60" />
      </g>
    </g>

    {/* Corner Diamond Repeats */}
    <g fill="#1e3a8a" stroke="#f59e0b" strokeWidth="2">
      <polygon points="0,0 25,0 0,25" />
      <polygon points="200,0 175,0 200,25" />
      <polygon points="0,200 25,200 0,175" />
      <polygon points="200,200 175,200 200,175" />
    </g>

    {/* Horizontal weave line texture */}
    <line x1="0" y1="20" x2="200" y2="20" stroke="#fef3c7" strokeOpacity="0.3" strokeDasharray="3 3" />
    <line x1="0" y1="180" x2="200" y2="180" stroke="#fef3c7" strokeOpacity="0.3" strokeDasharray="3 3" />
  </svg>
);

// 3. Dao Sacred Pine & Tiger Paw (Cây thông & Dấu chân cọp)
export const DaoRedPinePattern: React.FC<PatternProps> = ({ className = '', width = '100%', height = '100%' }) => (
  <svg width={width} height={height} viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect width="200" height="200" fill="#18181b" />
    
    {/* Pine Tree Motifs / Họa tiết cây thông */}
    <g transform="translate(100, 75)" fill="#dc2626" stroke="#fbbf24" strokeWidth="1">
      {/* Tier 1 */}
      <polygon points="0,-40 18,-20 -18,-20" />
      {/* Tier 2 */}
      <polygon points="0,-22 28,-2 -28,-2" />
      {/* Tier 3 */}
      <polygon points="0,-4 38,18 -38,18" />
      {/* Trunk */}
      <rect x="-4" y="18" width="8" height="15" fill="#fbbf24" />
    </g>

    {/* Tiger Paw Sacred Marks / Dấu chân cọp */}
    <g transform="translate(100, 150)" fill="#f59e0b">
      <circle cx="-20" cy="-10" r="5" fill="#f43f5e" />
      <circle cx="-7" cy="-16" r="5" fill="#f43f5e" />
      <circle cx="7" cy="-16" r="5" fill="#f43f5e" />
      <circle cx="20" cy="-10" r="5" fill="#f43f5e" />
      <path d="M-15,4 C-15,-4 15,-4 15,4 C15,12 8,16 0,16 C-8,16 -15,12 -15,4 Z" fill="#fbbf24" />
    </g>

    {/* Lateral geometric stars */}
    <g fill="#f8fafc">
      <circle cx="25" cy="50" r="2.5" />
      <circle cx="25" cy="150" r="2.5" />
      <circle cx="175" cy="50" r="2.5" />
      <circle cx="175" cy="150" r="2.5" />
      {/* Coin silver charm ring */}
      <circle cx="25" cy="100" r="8" fill="none" stroke="#e2e8f0" strokeWidth="2" />
      <circle cx="175" cy="100" r="8" fill="none" stroke="#e2e8f0" strokeWidth="2" />
    </g>
  </svg>
);

// 4. Vạn Phúc Tone-on-tone Cloud Jacquard
export const VanPhucCloudJacquard: React.FC<PatternProps & { tint?: string }> = ({
  className = '',
  width = '100%',
  height = '100%',
  tint = '#fbf9f5',
}) => (
  <svg width={width} height={height} viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect width="200" height="200" fill={tint} />
    {/* Subtle Cloud-wave Jacquard Motif */}
    <g stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.18" fill="none" strokeLinecap="round">
      <path d="M20,60 C35,45 65,45 80,60 C95,75 125,75 140,60 C155,45 185,55 195,70" />
      <path d="M10,130 C25,115 55,115 70,130 C85,145 115,145 130,130 C145,115 175,125 190,140" />
      {/* Cloud spirals */}
      <path d="M60,45 C50,35 35,40 40,55 C45,65 60,60 62,52" />
      <path d="M150,115 C140,105 125,110 130,125 C135,135 150,130 152,122" />
    </g>
  </svg>
);

// 5. Stylized Embroidered Symbols (Crane, Lotus, Mountain Cloud)
export const EmbroideredSymbol: React.FC<{ symbol: 'none' | 'crane' | 'lotus' | 'mountain_cloud'; color?: string; size?: number }> = ({
  symbol,
  color = '#d97706',
  size = 28,
}) => {
  if (symbol === 'none') return null;

  if (symbol === 'crane') {
    // Heritage Crane / Chim Hạc di sản
    return (
      <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M20 6C17 11 11 15 6 17C14 18 20 22 21 28C22 22 28 18 36 17C31 15 25 11 22 6C21 8 20 8 20 6Z"
          fill={color}
          stroke="#fff"
          strokeWidth="0.5"
        />
        <circle cx="21" cy="5" r="1.5" fill={color} />
        <line x1="21" y1="28" x2="21" y2="35" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
        <line x1="18" y1="35" x2="21" y2="35" stroke={color} strokeWidth="1.5" />
      </svg>
    );
  }

  if (symbol === 'lotus') {
    // Lotus / Hoa Sen cách điệu
    return (
      <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Central petal */}
        <path d="M20 7C17 14 17 25 20 30C23 25 23 14 20 7Z" fill={color} />
        {/* Left petal */}
        <path d="M20 18C13 16 9 22 10 28C14 29 18 26 20 23Z" fill={color} fillOpacity="0.85" />
        {/* Right petal */}
        <path d="M20 18C27 16 31 22 30 28C26 29 22 26 20 23Z" fill={color} fillOpacity="0.85" />
        {/* Base lotus leaf curve */}
        <path d="M7 32C14 34 26 34 33 32" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }

  // Mountain & Highland Cloud / Mây ngàn non cao
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Highland Peaks */}
      <polygon points="12,28 20,14 28,28" fill={color} />
      <polygon points="24,28 30,18 36,28" fill={color} fillOpacity="0.75" />
      <polygon points="4,28 10,20 16,28" fill={color} fillOpacity="0.75" />
      {/* Floating Cloud */}
      <path
        d="M10 12C11 9 15 9 16 11C18 10 22 11 22 13C24 13 25 15 24 16C23 17 11 17 10 16C8 15 9 13 10 12Z"
        fill="#fef3c7"
        stroke={color}
        strokeWidth="1"
      />
    </svg>
  );
};
