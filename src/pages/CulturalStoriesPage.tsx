import React from 'react';
import { ArrowRight, BookOpen, Compass, ShieldCheck } from 'lucide-react';
import { Language, ProductId } from '../types';
import { translations } from '../data/translations';
import {
  HmongIndigoSpiralPattern,
  ThaiRhombusPattern,
  DaoRedPinePattern,
  VanPhucCloudJacquard,
} from '../components/PatternSVG';

interface CulturalStoriesPageProps {
  currentLang: Language;
  onNavigate: (tab: string, productId?: ProductId) => void;
}

export const CulturalStoriesPage: React.FC<CulturalStoriesPageProps> = ({
  currentLang,
  onNavigate,
}) => {
  const t = translations[currentLang];
  const cs = t.culturalStories;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFE5D6] text-[#8A3D2B] text-xs font-mono font-semibold uppercase tracking-wider">
          <BookOpen className="w-3.5 h-3.5" />
          <span>{cs.badge}</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-stone-900 leading-tight">
          {cs.title}
        </h1>
        <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
          {cs.intro}
        </p>
      </div>

      {/* Part 1: Indigenous Brocades (H'Mông, Thái, Dao) */}
      <div className="space-y-12">
        <div className="border-b border-[#E8DEC8] pb-3">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
            I. Kỹ nghệ thổ cẩm dệt tay của ba cộng đồng dân tộc
          </h2>
          <p className="text-xs text-stone-500 font-mono mt-1">
            Mỗi hoa văn là một ký hiệu văn hóa, một ước vọng sinh tồn và hài hòa cùng rừng thiêng.
          </p>
        </div>

        {/* 1. H'Mông */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white/70 p-6 sm:p-8 rounded-2xl border border-[#E6DDCE] shadow-xs">
          <div className="lg:col-span-5 relative">
            <div className="w-full h-64 sm:h-72 rounded-xl overflow-hidden border-2 border-stone-200 shadow-md">
              <HmongIndigoSpiralPattern />
            </div>
            <div className="mt-2 text-[11px] text-stone-500 text-center font-mono">
              Hoa văn sáp ong H’Mông · Mặt trời & Xoắn ốc sinh sôi
            </div>
          </div>
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-mono text-[#8A3D2B] font-semibold uppercase tracking-wider">
              Bản Tả Phìn / Sapa · Sợi Lanh Nhuộm Chàm
            </span>
            <h3 className="font-serif text-2xl font-bold text-stone-900">
              {cs.hmongTitle}
            </h3>
            <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
              {cs.hmongDesc}
            </p>
            <div className="p-3 bg-[#F4EFE6] rounded-lg text-xs text-stone-800 font-mono border border-[#E5DAC8]">
              <span className="font-bold text-[#8A3D2B]">Kỹ thuật chủ chốt: </span>
              {cs.hmongTech}
            </div>
            <div className="pt-2">
              <button
                onClick={() => onNavigate('customizer', 'the-heritage-clutch')}
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#8A3D2B] hover:text-[#6E3022] transition-colors cursor-pointer"
              >
                <span>{cs.viewRelatedProduct}: The Heritage Clutch (Batik H’Mông)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* 2. Thái */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white/70 p-6 sm:p-8 rounded-2xl border border-[#E6DDCE] shadow-xs">
          <div className="lg:col-span-7 space-y-4 order-2 lg:order-1">
            <span className="text-xs font-mono text-[#8A3D2B] font-semibold uppercase tracking-wider">
              Tây Bắc (Mai Châu, Mộc Châu) · Dệt Khung Cửi Cổ
            </span>
            <h3 className="font-serif text-2xl font-bold text-stone-900">
              {cs.thaiTitle}
            </h3>
            <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
              {cs.thaiDesc}
            </p>
            <div className="p-3 bg-[#F4EFE6] rounded-lg text-xs text-stone-800 font-mono border border-[#E5DAC8]">
              <span className="font-bold text-[#8A3D2B]">Kỹ thuật chủ chốt: </span>
              {cs.thaiTech}
            </div>
            <div className="pt-2">
              <button
                onClick={() => onNavigate('customizer', 'heritage-wall-art')}
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#8A3D2B] hover:text-[#6E3022] transition-colors cursor-pointer"
              >
                <span>{cs.viewRelatedProduct}: Heritage Wall Art (Dệt thoi Thái)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
          <div className="lg:col-span-5 relative order-1 lg:order-2">
            <div className="w-full h-64 sm:h-72 rounded-xl overflow-hidden border-2 border-stone-200 shadow-md">
              <ThaiRhombusPattern />
            </div>
            <div className="mt-2 text-[11px] text-stone-500 text-center font-mono">
              Họa tiết quả trám Thái · Biểu tượng mùa màng no ấm
            </div>
          </div>
        </div>

        {/* 3. Dao */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white/70 p-6 sm:p-8 rounded-2xl border border-[#E6DDCE] shadow-xs">
          <div className="lg:col-span-5 relative">
            <div className="w-full h-64 sm:h-72 rounded-xl overflow-hidden border-2 border-stone-200 shadow-md">
              <DaoRedPinePattern />
            </div>
            <div className="mt-2 text-[11px] text-stone-500 text-center font-mono">
              Thêu cây thông & Dấu chân cọp Dao Đỏ
            </div>
          </div>
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-mono text-[#8A3D2B] font-semibold uppercase tracking-wider">
              Bản Khoang / Tả Phìn · Thêu Không Mẫu Vẽ
            </span>
            <h3 className="font-serif text-2xl font-bold text-stone-900">
              {cs.daoTitle}
            </h3>
            <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
              {cs.daoDesc}
            </p>
            <div className="p-3 bg-[#F4EFE6] rounded-lg text-xs text-stone-800 font-mono border border-[#E5DAC8]">
              <span className="font-bold text-[#8A3D2B]">Kỹ thuật chủ chốt: </span>
              {cs.daoTech}
            </div>
            <div className="pt-2">
              <button
                onClick={() => onNavigate('customizer', 'the-heritage-clutch')}
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#8A3D2B] hover:text-[#6E3022] transition-colors cursor-pointer"
              >
                <span>{cs.viewRelatedProduct}: The Heritage Clutch (Thêu Dao Đỏ)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Part 2: Vietnamese Mulberry Silk Origins (Vạn Phúc vs Bảo Lộc) */}
      <div className="space-y-10 pt-6">
        <div className="border-b border-[#E8DEC8] pb-3">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
            II. {cs.silkTitle}
          </h2>
          <p className="text-xs text-stone-500 font-mono mt-1">
            {cs.silkIntro}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Vạn Phúc */}
          <div className="p-8 rounded-2xl bg-white/80 border border-[#E6DDCE] shadow-xs space-y-4 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-full h-48 rounded-lg overflow-hidden border border-[#E0D5C3] shadow-inner text-stone-800">
                <VanPhucCloudJacquard tint="#FAF6EE" />
              </div>
              <span className="text-xs font-mono text-[#8A3D2B] uppercase tracking-wider font-semibold">
                Bắc Bộ · Lịch Sử & Cổ Điển
              </span>
              <h3 className="font-serif text-2xl font-bold text-stone-900">
                {cs.vanPhucTitle}
              </h3>
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                {cs.vanPhucDesc}
              </p>
            </div>
            <button
              onClick={() => onNavigate('customizer', 'the-story-scarf')}
              className="pt-4 inline-flex items-center gap-2 text-xs font-semibold text-[#8A3D2B] hover:text-[#6E3022] cursor-pointer"
            >
              <span>Tùy biến The Story Scarf với dệt chìm Vạn Phúc</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Bảo Lộc */}
          <div className="p-8 rounded-2xl bg-white/80 border border-[#E6DDCE] shadow-xs space-y-4 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-full h-48 rounded-lg overflow-hidden border border-[#E0D5C3] bg-gradient-to-tr from-[#EBE3D3] via-[#FAF6ED] to-[#F5ECE0] p-6 flex flex-col justify-center items-center shadow-inner">
                <div className="font-serif text-2xl text-stone-800 font-semibold tracking-wide">
                  Tơ Kén Trắng Bảo Lộc
                </div>
                <div className="text-[11px] font-mono text-stone-500 mt-1">
                  Độ se sợi cao · Mềm mướt như làn da thứ hai
                </div>
              </div>
              <span className="text-xs font-mono text-[#8A3D2B] uppercase tracking-wider font-semibold">
                Tây Nguyên · Hiện Đại & Óng Mượt
              </span>
              <h3 className="font-serif text-2xl font-bold text-stone-900">
                {cs.baoLocTitle}
              </h3>
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                {cs.baoLocDesc}
              </p>
            </div>
            <button
              onClick={() => onNavigate('customizer', 'the-mini-twilly')}
              className="pt-4 inline-flex items-center gap-2 text-xs font-semibold text-[#8A3D2B] hover:text-[#6E3022] cursor-pointer"
            >
              <span>Tùy biến The Mini Twilly với lụa Bảo Lộc</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Provenance Integrity Guarantee Banner */}
        <div className="p-6 rounded-xl bg-amber-50/80 border border-amber-300/80 flex items-start gap-4">
          <ShieldCheck className="w-6 h-6 text-amber-800 flex-shrink-0 mt-0.5" />
          <div className="space-y-1">
            <h4 className="text-xs font-bold font-mono text-amber-950 uppercase tracking-wide">
              Quy chuẩn minh bạch & Không phóng đại
            </h4>
            <p className="text-xs text-amber-900 leading-relaxed">
              {cs.integrityNote}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
