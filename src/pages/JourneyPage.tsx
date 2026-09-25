import React, { useState } from 'react';
import {
  ArrowDown,
  ArrowRight,
  Sparkles,
  BookOpen,
  SlidersHorizontal,
  ChevronRight,
  ShieldCheck,
  Feather,
  Palette,
  MessageSquare,
  Eye,
} from 'lucide-react';
import { Language, ProductId, CustomOptions } from '../types';
import { translations } from '../data/translations';
import { journeyTranslations } from '../data/journeyTranslations';
import { PRODUCTS_LIST, formatVND } from '../data/products';
import { ProductVisualizer } from '../components/ProductVisualizer';
import {
  HmongIndigoSpiralPattern,
  ThaiRhombusPattern,
  DaoRedPinePattern,
  VanPhucCloudJacquard,
} from '../components/PatternSVG';
import { CustomizerPage } from './CustomizerPage';

interface JourneyPageProps {
  currentLang: Language;
  activeCustomizerId: ProductId;
  onCustomizerProductChange: (productId: ProductId) => void;
  onOpenCart: () => void;
  onAddToCart: (
    productId: ProductId,
    productName: string,
    basePrice: number,
    addonsTotal: number,
    customOptions: CustomOptions,
    summaryText: string
  ) => void;
  onViewProductDetail: (productId: ProductId) => void;
  onCustomizeProduct: (productId: ProductId) => void;
}

export const JourneyPage: React.FC<JourneyPageProps> = ({
  currentLang,
  activeCustomizerId,
  onCustomizerProductChange,
  onOpenCart,
  onAddToCart,
  onViewProductDetail,
  onCustomizeProduct,
}) => {
  const t = translations[currentLang];
  const jt = journeyTranslations[currentLang] || journeyTranslations.en;

  // Shop filter state (All / Brocade / Silk)
  const [shopFilter, setShopFilter] = useState<'all' | 'brocade' | 'silk'>('all');

  // Smooth scroll helper
  const scrollTo = (elementId: string) => {
    const el = document.getElementById(elementId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleExploreBrocade = () => {
    setShopFilter('brocade');
    scrollTo('shop');
  };

  const handleExploreSilk = () => {
    setShopFilter('silk');
    scrollTo('shop');
  };

  // Filter products for Shop section
  const displayProducts = PRODUCTS_LIST.filter((p) => {
    if (shopFilter === 'brocade') {
      return p.id === 'heritage-wall-art' || p.id === 'the-heritage-clutch';
    }
    if (shopFilter === 'silk') {
      return p.id === 'the-story-scarf' || p.id === 'the-mini-twilly';
    }
    return true;
  });

  return (
    <div className="relative space-y-28 md:space-y-36 pb-20">
      {/* ========================================================================= */}
      {/* PHẦN 1 — MÀN HÌNH MỞ ĐẦU (HERO) */}
      {/* ========================================================================= */}
      <section
        id="hero"
        className="relative min-h-[92vh] sm:min-h-screen flex flex-col justify-between pt-8 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#F5EFE6] via-[#FAF7F2] to-[#FAF7F2] border-b border-[#E8DEC8]"
      >
        <div className="max-w-7xl mx-auto w-full my-auto py-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFE4D6] border border-[#DFCBB5] text-[#8A3D2B] text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{jt.hero.badge}</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1E293B] leading-[1.12] text-balance">
                {jt.hero.title}
              </h1>

              <p className="text-base sm:text-lg text-[#554D45] leading-relaxed max-w-xl font-normal">
                {jt.hero.subtitle}
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => scrollTo('our-story')}
                  className="px-6 py-3.5 bg-[#8A3D2B] hover:bg-[#733324] text-white rounded-lg font-medium text-sm transition-all shadow-md hover:shadow-lg flex items-center gap-2 cursor-pointer"
                >
                  <span>{jt.hero.exploreStoryBtn}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => {
                    setShopFilter('all');
                    scrollTo('shop');
                  }}
                  className="px-6 py-3.5 bg-[#EAE2D4] hover:bg-[#DFD5C4] text-[#2C2825] border border-[#CFC2AF] rounded-lg font-medium text-sm transition-all cursor-pointer"
                >
                  {jt.hero.shopCollectionBtn}
                </button>
              </div>

              {/* Editorial Quality Label */}
              <div className="pt-4 flex items-center gap-4 text-xs text-[#7A7065] font-mono">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-600" />
                  Thổ cẩm dệt tay H’Mông · Thái · Dao
                </span>
                <span className="opacity-40">/</span>
                <span>Lụa tơ tằm Bảo Lộc & Vạn Phúc</span>
              </div>
            </div>

            {/* Right Large Hero Visual: Brocade & Silk Together */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md space-y-4">
                {/* Main Showcase: Duo Composition of Brocade & Silk */}
                <div className="relative p-4 bg-white/90 rounded-2xl shadow-2xl border border-[#E6DDCE] overflow-hidden">
                  <div className="grid grid-cols-2 gap-3 h-80 sm:h-96">
                    {/* Left Half: Brocade Clutch with H'Mông Spiral */}
                    <div className="relative rounded-xl overflow-hidden border border-[#E6DDCE] bg-[#FAF7F2] p-2 flex flex-col justify-between">
                      <div className="text-[10px] font-mono text-[#8A3D2B] uppercase tracking-wider font-semibold">
                        Brocade Handweave
                      </div>
                      <div className="my-auto h-44 rounded-lg overflow-hidden border border-black/10 shadow-sm">
                        <HmongIndigoSpiralPattern />
                      </div>
                      <div className="text-[11px] font-serif font-bold text-stone-800">
                        The Heritage Clutch
                      </div>
                    </div>

                    {/* Right Half: Luminous Mulberry Silk with Soft Waves */}
                    <div className="relative rounded-xl overflow-hidden border border-[#E6DDCE] bg-[#FAF6EE] p-2 flex flex-col justify-between">
                      <div className="text-[10px] font-mono text-emerald-800 uppercase tracking-wider font-semibold">
                        Mulberry Silk
                      </div>
                      <div className="my-auto h-44 rounded-lg overflow-hidden border border-[#E8DFC8] shadow-inner text-stone-700">
                        <VanPhucCloudJacquard tint="#FBF8F1" />
                      </div>
                      <div className="text-[11px] font-serif font-bold text-stone-800">
                        The Story Scarf
                      </div>
                    </div>
                  </div>

                  {/* Caption underneath visual */}
                  <div className="mt-3 pt-3 border-t border-[#F0EAE0] flex items-center justify-between text-xs font-mono text-stone-600">
                    <span>Di sản dệt may đương đại</span>
                    <span className="text-[#8A3D2B] font-semibold">Dệt Sắc Việt</span>
                  </div>
                </div>

                {/* Floating Craft Badge */}
                <div className="bg-[#1E293B] text-amber-200 px-4 py-2.5 rounded-lg shadow-lg border border-amber-300/30 text-xs font-mono flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                    <span>Thiết kế & Tùy biến tương tác</span>
                  </span>
                  <span className="text-[11px] text-amber-300/70">100% Nguyên bản</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll to Explore Indicator */}
        <div className="text-center pt-6">
          <button
            onClick={() => scrollTo('our-story')}
            className="inline-flex flex-col items-center gap-1.5 text-xs font-mono text-stone-500 hover:text-stone-900 transition-colors cursor-pointer group"
          >
            <span className="tracking-wider uppercase text-[11px]">
              {jt.hero.scrollToExplore}
            </span>
            <ArrowDown className="w-3.5 h-3.5 animate-bounce group-hover:translate-y-0.5 transition-transform text-[#8A3D2B]" />
          </button>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* PHẦN 2 — GIỚI THIỆU THƯƠNG HIỆU */}
      {/* ========================================================================= */}
      <section
        id="our-story"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24 space-y-12"
      >
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-mono text-[#8A3D2B] uppercase tracking-widest font-semibold">
            {jt.brandStory.tagline}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 leading-tight">
            {jt.brandStory.title}
          </h2>
          <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-normal">
            {jt.brandStory.description}
          </p>
        </div>

        {/* 3 Pillars: Cultural stories, Personal design, Multilingual AI assistant */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
          {/* Pillar 1: Cultural Stories */}
          <div className="p-8 rounded-2xl bg-white border border-[#E6DDCE] shadow-xs space-y-4 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-[#F5EFE6] text-[#8A3D2B] flex items-center justify-center">
              <BookOpen className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-bold text-stone-900">
              {jt.brandStory.pillars.culture.title}
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              {jt.brandStory.pillars.culture.desc}
            </p>
          </div>

          {/* Pillar 2: Personalized Design */}
          <div className="p-8 rounded-2xl bg-white border border-[#E6DDCE] shadow-xs space-y-4 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-[#F5EFE6] text-[#8A3D2B] flex items-center justify-center">
              <Palette className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-bold text-stone-900">
              {jt.brandStory.pillars.customization.title}
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              {jt.brandStory.pillars.customization.desc}
            </p>
          </div>

          {/* Pillar 3: Multilingual AI Assistant */}
          <div className="p-8 rounded-2xl bg-white border border-[#E6DDCE] shadow-xs space-y-4 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-[#F5EFE6] text-[#8A3D2B] flex items-center justify-center">
              <MessageSquare className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-bold text-stone-900">
              {jt.brandStory.pillars.aiAssistant.title}
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              {jt.brandStory.pillars.aiAssistant.desc}
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* PHẦN 3 — CÂU CHUYỆN THỔ CẨM */}
      {/* ========================================================================= */}
      <section
        id="brocade"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24 space-y-12"
      >
        <div className="border-b border-[#E8DEC8] pb-6 space-y-2">
          <span className="text-xs font-mono text-[#8A3D2B] uppercase tracking-widest font-semibold">
            {jt.brocadeStory.tagline}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900">
            {jt.brocadeStory.title}
          </h2>
        </div>

        {/* Large Visual & Craft Explanation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left: Large visual montage of authentic motifs & loom */}
          <div className="lg:col-span-6 space-y-4">
            <div className="p-4 bg-white rounded-2xl border border-[#E6DDCE] shadow-lg">
              <div className="grid grid-cols-3 gap-3 h-72 sm:h-80">
                <div className="rounded-lg overflow-hidden shadow-inner border border-black/10">
                  <HmongIndigoSpiralPattern />
                </div>
                <div className="rounded-lg overflow-hidden shadow-inner border border-black/10">
                  <ThaiRhombusPattern />
                </div>
                <div className="rounded-lg overflow-hidden shadow-inner border border-black/10">
                  <DaoRedPinePattern />
                </div>
              </div>
              <div className="mt-3 text-center text-xs font-mono text-stone-500">
                Hoa văn sáp ong H’Mông · Dệt thoi quả trám Thái · Thêu đếm chỉ Dao Đỏ
              </div>
            </div>
          </div>

          {/* Right: Explanatory Content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <h3 className="font-serif text-2xl font-bold text-stone-900">
                Thổ cẩm là gì và giá trị thủ công độc bản
              </h3>
              <p className="text-sm text-stone-700 leading-relaxed">
                {jt.brocadeStory.whatIsBrocade}
              </p>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                {jt.brocadeStory.craftValue}
              </p>
            </div>

            {/* Diversity across 3 communities */}
            <div className="space-y-3 pt-2">
              <div className="p-3.5 rounded-xl bg-white border border-[#E6DDCE] text-xs space-y-1">
                <div className="font-bold text-stone-900 font-serif text-sm">
                  {jt.brocadeStory.communities.hmong.name}
                </div>
                <div className="text-stone-600">
                  {jt.brocadeStory.communities.hmong.desc}
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-white border border-[#E6DDCE] text-xs space-y-1">
                <div className="font-bold text-stone-900 font-serif text-sm">
                  {jt.brocadeStory.communities.thai.name}
                </div>
                <div className="text-stone-600">
                  {jt.brocadeStory.communities.thai.desc}
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-white border border-[#E6DDCE] text-xs space-y-1">
                <div className="font-bold text-stone-900 font-serif text-sm">
                  {jt.brocadeStory.communities.dao.name}
                </div>
                <div className="text-stone-600">
                  {jt.brocadeStory.communities.dao.desc}
                </div>
              </div>
            </div>

            {/* Application into Wall Art & Clutch */}
            <div className="p-4 rounded-xl bg-[#F5EFE6] border border-[#E4D8C6] space-y-2">
              <h4 className="text-xs font-bold text-stone-900 uppercase font-mono tracking-wider">
                {jt.brocadeStory.applicationTitle}
              </h4>
              <p className="text-xs text-stone-700 leading-relaxed">
                {jt.brocadeStory.applicationDesc}
              </p>
            </div>

            {/* CTA leading to Shop filtered by Brocade */}
            <div>
              <button
                onClick={handleExploreBrocade}
                className="px-6 py-3 bg-[#8A3D2B] hover:bg-[#723223] text-white rounded-lg text-xs font-semibold transition-all shadow-md flex items-center gap-2 cursor-pointer"
              >
                <span>{jt.brocadeStory.exploreBtn}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* PHẦN 4 — CÂU CHUYỆN LỤA TƠ TẰM */}
      {/* ========================================================================= */}
      <section
        id="silk"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24 space-y-12"
      >
        <div className="border-b border-[#E8DEC8] pb-6 space-y-2">
          <span className="text-xs font-mono text-emerald-800 uppercase tracking-widest font-semibold">
            {jt.silkStory.tagline}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900">
            {jt.silkStory.title}
          </h2>
        </div>

        {/* Light, Soft, Airy Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left: Explanatory Content */}
          <div className="lg:col-span-6 space-y-6 order-2 lg:order-1">
            <div className="space-y-3">
              <h3 className="font-serif text-2xl font-bold text-stone-900">
                Sự thanh khiết của tơ tằm nguyên bản
              </h3>
              <p className="text-sm text-stone-700 leading-relaxed">
                {jt.silkStory.intro}
              </p>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                {jt.silkStory.characteristics}
              </p>
            </div>

            {/* 2 Silk Origins: Vạn Phúc vs Bảo Lộc */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white border border-[#E6DDCE] space-y-1.5 shadow-xs">
                <span className="text-[10px] font-mono text-emerald-800 font-bold uppercase tracking-wider">
                  Bắc Bộ · Lịch Sử Nghìn Năm
                </span>
                <h4 className="font-serif text-base font-bold text-stone-900">
                  {jt.silkStory.regions.vanPhuc.name}
                </h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {jt.silkStory.regions.vanPhuc.desc}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#E6DDCE] space-y-1.5 shadow-xs">
                <span className="text-[10px] font-mono text-emerald-800 font-bold uppercase tracking-wider">
                  Tây Nguyên · Mật Độ Cao Cấp
                </span>
                <h4 className="font-serif text-base font-bold text-stone-900">
                  {jt.silkStory.regions.baoLoc.name}
                </h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {jt.silkStory.regions.baoLoc.desc}
                </p>
              </div>
            </div>

            {/* Application into Scarf & Twilly */}
            <div className="p-4 rounded-xl bg-[#FAF5EB] border border-[#E8DFC8] space-y-2">
              <h4 className="text-xs font-bold text-stone-900 uppercase font-mono tracking-wider">
                {jt.silkStory.applicationTitle}
              </h4>
              <p className="text-xs text-stone-700 leading-relaxed">
                {jt.silkStory.applicationDesc}
              </p>
            </div>

            {/* CTA leading to Shop filtered by Silk */}
            <div>
              <button
                onClick={handleExploreSilk}
                className="px-6 py-3 bg-[#1E293B] hover:bg-[#2C3849] text-amber-100 rounded-lg text-xs font-semibold transition-all shadow-md flex items-center gap-2 cursor-pointer"
              >
                <span>{jt.silkStory.exploreBtn}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right: Soft, Luminous Silk Visual Showcase */}
          <div className="lg:col-span-6 order-1 lg:order-2 space-y-4">
            <div className="p-6 bg-gradient-to-b from-white via-[#FCF9F2] to-[#F5ECE0] rounded-2xl border border-[#E8DEC8] shadow-lg flex flex-col items-center justify-center min-h-[340px]">
              <div className="w-full h-64 rounded-xl overflow-hidden border border-[#E0D5BF] shadow-inner text-stone-700 relative">
                <VanPhucCloudJacquard tint="#FAF6EE" />
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-white/40 pointer-events-none" />
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-xs px-3 py-1.5 rounded-md border border-[#E2D8C0] text-xs font-mono text-stone-800 shadow-xs">
                  Lụa Vân Vạn Phúc & Lụa tơ tằm Bảo Lộc
                </div>
              </div>
              <div className="mt-4 text-xs font-mono text-stone-500 text-center">
                Mềm mại như làn sương sớm · Viền cuộn mép tay thủ công
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* PHẦN 5 — TỪ CHẤT LIỆU ĐẾN THIẾT KẾ RIÊNG */}
      {/* ========================================================================= */}
      <section
        id="customizer"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24 space-y-12"
      >
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-mono text-[#8A3D2B] uppercase tracking-widest font-semibold">
            {jt.designSteps.tagline}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 leading-tight">
            {jt.designSteps.title}
          </h2>
          <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
            {jt.designSteps.subtitle}
          </p>
        </div>

        {/* 3 Visual Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-[#E6DDCE] shadow-xs space-y-3 relative">
            <span className="font-mono text-3xl font-bold text-[#8A3D2B]/30 block">
              {jt.designSteps.step1.num}
            </span>
            <h3 className="font-serif text-lg font-bold text-stone-900">
              {jt.designSteps.step1.title}
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              {jt.designSteps.step1.desc}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#E6DDCE] shadow-xs space-y-3 relative">
            <span className="font-mono text-3xl font-bold text-[#8A3D2B]/30 block">
              {jt.designSteps.step2.num}
            </span>
            <h3 className="font-serif text-lg font-bold text-stone-900">
              {jt.designSteps.step2.title}
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              {jt.designSteps.step2.desc}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#E6DDCE] shadow-xs space-y-3 relative">
            <span className="font-mono text-3xl font-bold text-[#8A3D2B]/30 block">
              {jt.designSteps.step3.num}
            </span>
            <h3 className="font-serif text-lg font-bold text-stone-900">
              {jt.designSteps.step3.title}
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              {jt.designSteps.step3.desc}
            </p>
          </div>
        </div>

        {/* CTA leading to Design Tool */}
        <div className="flex justify-center pt-2">
          <button
            onClick={() => scrollTo('design-studio-workspace')}
            className="px-8 py-3.5 bg-[#8A3D2B] hover:bg-[#723223] text-white rounded-xl font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center gap-2.5 cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>{jt.designSteps.openStudioBtn}</span>
            <ArrowDown className="w-4 h-4" />
          </button>
        </div>

        {/* Interactive Customizer Studio Workspace */}
        <div
          id="design-studio-workspace"
          className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E6DDCE] shadow-xl space-y-8 scroll-mt-24"
        >
          <CustomizerPage
            currentLang={currentLang}
            initialProductId={activeCustomizerId}
            onProductChange={onCustomizerProductChange}
            onAddToCart={onAddToCart}
            onOpenCart={onOpenCart}
          />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* PHẦN 6 — MUA HÀNG */}
      {/* ========================================================================= */}
      <section
        id="shop"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24 space-y-12"
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#E8DEC8] pb-6">
          <div>
            <span className="text-xs font-mono text-[#8A3D2B] uppercase tracking-widest font-semibold">
              {jt.shopSection.tagline}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 mt-1">
              {jt.shopSection.title}
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 mt-2 max-w-xl">
              {jt.shopSection.subtitle}
            </p>
          </div>

          {/* Filter Bar: All / Brocade / Silk */}
          <div className="flex items-center gap-1.5 p-1 bg-[#EFE9DF] rounded-lg self-start md:self-auto">
            <button
              onClick={() => setShopFilter('all')}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors cursor-pointer ${
                shopFilter === 'all'
                  ? 'bg-white text-stone-900 shadow-xs font-semibold'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              {jt.shopSection.filterAll}
            </button>
            <button
              onClick={() => setShopFilter('brocade')}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors cursor-pointer ${
                shopFilter === 'brocade'
                  ? 'bg-white text-[#8A3D2B] shadow-xs font-semibold'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              {jt.shopSection.filterBrocade}
            </button>
            <button
              onClick={() => setShopFilter('silk')}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors cursor-pointer ${
                shopFilter === 'silk'
                  ? 'bg-white text-emerald-900 shadow-xs font-semibold'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              {jt.shopSection.filterSilk}
            </button>
          </div>
        </div>

        {/* 4 Cards Grid (or filtered 2 cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayProducts.map((prod) => {
            const prodData = t.productsData[prod.id] || {
              name: prod.id,
              categoryLabel: '',
              shortDesc: '',
            };

            const defaultOptions =
              prod.id === 'heritage-wall-art'
                ? {
                    type: 'heritage-wall-art' as const,
                    options: {
                      size: '40x60' as const,
                      backgroundColor: 'cream' as const,
                      brocadePosition: 'center' as const,
                      frameType: 'oak_natural' as const,
                    },
                  }
                : prod.id === 'the-heritage-clutch'
                ? {
                    type: 'the-heritage-clutch' as const,
                    options: {
                      bodyColor: 'deep_indigo' as const,
                      brocadePattern: 'hmong_indigo_spiral' as const,
                      hardwareColor: 'antique_brass' as const,
                      monogramText: '',
                      miniSymbol: 'none' as const,
                    },
                  }
                : prod.id === 'the-story-scarf'
                ? {
                    type: 'the-story-scarf' as const,
                    options: {
                      baseColor: 'ivory_silk' as const,
                      borderColor: 'indigo_rolled' as const,
                      motifStyle: 'van_phuc_subtle' as const,
                      monogramText: '',
                      miniSymbol: 'none' as const,
                    },
                  }
                : {
                    type: 'the-mini-twilly' as const,
                    options: {
                      dualColorway: 'indigo_and_ivory' as const,
                      motifPattern: 'geometric_rhombus' as const,
                      monogramText: '',
                      miniSymbol: 'none' as const,
                    },
                  };

            return (
              <div
                key={prod.id}
                className="group rounded-2xl bg-white border border-[#E6DDCE] overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                {/* Visualizer Thumbnail */}
                <div className="p-3 bg-[#FAF7F2] border-b border-[#F0E8DC]">
                  <ProductVisualizer
                    productId={prod.id}
                    options={defaultOptions}
                    sizeClass="w-full h-56"
                    showCaption={false}
                  />
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="text-[11px] font-mono text-[#8A3D2B] uppercase tracking-wider">
                      {prodData.categoryLabel}
                    </div>
                    <h3 className="font-serif text-lg font-bold text-stone-900 mt-1 line-clamp-1">
                      {prodData.name}
                    </h3>
                    <p className="text-xs text-stone-600 mt-2 line-clamp-2 leading-relaxed">
                      {prodData.shortDesc}
                    </p>
                  </div>

                  {/* Pricing & Buttons */}
                  <div className="pt-3 border-t border-[#F2ECE3]">
                    <div className="flex items-baseline justify-between mb-3">
                      <span className="text-[11px] text-stone-500 font-mono">
                        {jt.shopSection.basePrice}:
                      </span>
                      <span className="font-mono text-sm font-bold text-[#8A3D2B]">
                        {formatVND(prod.basePrice)}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => onViewProductDetail(prod.id)}
                        className="py-2 px-2.5 rounded-md bg-[#F4EFE6] hover:bg-[#EAE2D5] text-stone-800 text-xs font-medium transition-colors text-center cursor-pointer"
                      >
                        {jt.shopSection.viewDetails}
                      </button>
                      <button
                        onClick={() => onCustomizeProduct(prod.id)}
                        className="py-2 px-2.5 rounded-md bg-[#8A3D2B] hover:bg-[#723223] text-white text-xs font-medium transition-colors text-center cursor-pointer"
                      >
                        {jt.shopSection.designYourOwn}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
