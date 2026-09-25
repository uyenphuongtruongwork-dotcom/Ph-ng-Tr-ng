import React from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface FooterProps {
  currentLang: Language;
  onNavigate: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ currentLang, onNavigate }) => {
  const t = translations[currentLang];

  return (
    <footer className="bg-[#1F2429] text-[#E5DFD5] border-t border-[#323940] transition-colors mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand & Ethos */}
          <div className="md:col-span-2 space-y-4">
            <span className="font-serif text-2xl font-semibold tracking-tight text-amber-100">
              {t.brandName}
            </span>
            <p className="text-xs text-[#ABA194] leading-relaxed max-w-md">
              {t.hero.subtitle}
            </p>
            <div className="pt-2">
              <span className="inline-block text-[11px] font-mono text-amber-300/80 uppercase tracking-widest border border-amber-300/30 px-2.5 py-1 rounded-sm">
                Student Concept & Cultural Research Project
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-amber-200/90 font-semibold">
              Khám Phá / Explore
            </h4>
            <ul className="space-y-2 text-xs text-[#C5BCB1]">
              <li>
                <button
                  onClick={() => {
                    onNavigate('home');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-amber-100 transition-colors cursor-pointer"
                >
                  {t.nav.home}
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('stories');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-amber-100 transition-colors cursor-pointer"
                >
                  {t.nav.stories}
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('shop');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-amber-100 transition-colors cursor-pointer"
                >
                  {t.nav.shop}
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('customizer');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-amber-100 transition-colors cursor-pointer"
                >
                  {t.nav.customizer}
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('about');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-amber-100 transition-colors cursor-pointer"
                >
                  {t.nav.about}
                </button>
              </li>
            </ul>
          </div>

          {/* Academic Disclosure & Ethics */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-amber-200/90 font-semibold">
              Minh Bạch & Di Sản
            </h4>
            <p className="text-[11px] text-[#A69C8F] leading-relaxed">
              Tôn vinh kỹ nghệ dệt thoi Thái, batik sáp ong H’Mông, thêu luồn chỉ Dao Đỏ và hai vùng tơ lụa Bảo Lộc, Vạn Phúc. Website mẫu phục vụ trình diễn học tập, không thực hiện giao dịch tài chính thật.
            </p>
            <div className="text-[11px] text-[#8A8175] pt-1">
              Hà Nội · Lâm Đồng · Tây Bắc © 2026
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-[#2F363E] flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#8C8377] gap-3">
          <div>
            © 2026 {t.brandName} — Đồ án sáng tạo bảo tồn di sản dệt may Việt Nam.
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span>H’Mông · Thái · Dao</span>
            <span>·</span>
            <span>Vạn Phúc · Bảo Lộc</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
