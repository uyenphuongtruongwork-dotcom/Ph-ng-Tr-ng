import React from 'react';
import { ArrowRight, Sparkles, Compass, ShieldCheck } from 'lucide-react';
import { Language, ProductId } from '../types';
import { translations } from '../data/translations';
import { PRODUCTS_LIST, formatVND } from '../data/products';
import { ProductVisualizer } from '../components/ProductVisualizer';

interface HomePageProps {
  currentLang: Language;
  onNavigate: (tab: string, productId?: ProductId) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ currentLang, onNavigate }) => {
  const t = translations[currentLang];

  return (
    <div className="space-y-20 pb-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#F5EFE6] via-[#FAF7F2] to-[#FAF7F2] pt-12 pb-20 border-b border-[#E8DEC8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Copy */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFE4D6] border border-[#DFCBB5] text-[#8A3D2B] text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{t.hero.badge}</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1E293B] leading-[1.15] text-balance">
                {t.hero.title}
              </h1>

              <p className="text-base sm:text-lg text-[#554D45] leading-relaxed max-w-2xl">
                {t.hero.subtitle}
              </p>

              {/* CTAs */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onNavigate('shop')}
                  className="px-6 py-3.5 bg-[#8A3D2B] hover:bg-[#733324] text-white rounded-lg font-medium text-sm transition-all shadow-md hover:shadow-lg flex items-center gap-2 cursor-pointer"
                >
                  <span>{t.hero.exploreBtn}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onNavigate('customizer')}
                  className="px-6 py-3.5 bg-[#EAE2D4] hover:bg-[#DFD5C4] text-[#2C2825] border border-[#CFC2AF] rounded-lg font-medium text-sm transition-all cursor-pointer"
                >
                  {t.hero.customBtn}
                </button>
              </div>

              {/* Ethos Trust Marker */}
              <div className="pt-6 border-t border-[#E8DEC8] flex items-center gap-3 text-xs text-[#7A7065] font-mono">
                <span className="w-2 h-2 rounded-full bg-emerald-600" />
                <span>{t.hero.craftEthos}</span>
              </div>
            </div>

            {/* Right Focal Showcase: Layered Craft Preview */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md">
                {/* Visualizer Hero Card */}
                <div className="p-3 bg-white/80 rounded-2xl shadow-xl border border-[#E6DDCE]">
                  <ProductVisualizer
                    productId="the-heritage-clutch"
                    options={{
                      type: 'the-heritage-clutch',
                      options: {
                        bodyColor: 'deep_indigo',
                        brocadePattern: 'hmong_indigo_spiral',
                        hardwareColor: 'antique_brass',
                        monogramText: 'VIET',
                        miniSymbol: 'crane',
                      },
                    }}
                    sizeClass="w-full h-80 sm:h-96"
                    showCaption={true}
                  />
                  <div className="mt-4 px-3 pb-2 flex items-center justify-between">
                    <div>
                      <div className="text-xs text-stone-500 font-mono">The Heritage Clutch</div>
                      <div className="font-serif text-base font-semibold text-stone-900">
                        Phiên bản tùy biến thử nghiệm
                      </div>
                    </div>
                    <span className="font-mono text-sm font-bold text-[#8A3D2B]">
                      {formatVND(690000 + 50000 + 100000)}
                    </span>
                  </div>
                </div>

                {/* Subtle Floating Badge */}
                <div className="absolute -bottom-4 -left-4 bg-[#1E293B] text-amber-200 px-4 py-2.5 rounded-lg shadow-lg border border-amber-300/30 text-xs font-mono hidden sm:flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-400" />
                  <span>Dệt tay H’Mông & Lụa Bảo Lộc</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Pillars: Cultural Authenticity */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-xl bg-white/70 border border-[#E8DFC0] shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#EFE5D6] text-[#8A3D2B] flex items-center justify-center font-bold">
              01
            </div>
            <h3 className="font-serif text-lg font-semibold text-stone-900">
              Kỹ nghệ thổ cẩm 3 dân tộc
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Tôn vinh kỹ thuật vẽ sáp ong batik H’Mông, dệt thoi quả trám của người Thái và thêu đếm sợi ngược của người Dao Đỏ.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-white/70 border border-[#E8DFC0] shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#EFE5D6] text-[#8A3D2B] flex items-center justify-center font-bold">
              02
            </div>
            <h3 className="font-serif text-lg font-semibold text-stone-900">
              Hai dòng tơ lụa di sản
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Phân định minh bạch lụa Vân nghìn năm Vạn Phúc (Hà Đông) và lụa tơ tằm se sợi cao cấp từ thủ phủ Bảo Lộc (Lâm Đồng).
            </p>
          </div>

          <div className="p-6 rounded-xl bg-white/70 border border-[#E8DFC0] shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#EFE5D6] text-[#8A3D2B] flex items-center justify-center font-bold">
              03
            </div>
            <h3 className="font-serif text-lg font-semibold text-stone-900">
              Tùy biến tương tác trực quan
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Trải nghiệm phối màu, chọn dải thổ cẩm và thêu chữ cái mang dấu ấn cá nhân với công thức tính giá minh bạch tức thì.
            </p>
          </div>
        </div>
      </section>

      {/* Featured 4 Heritage Creations */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#E8DEC8] pb-6">
          <div>
            <div className="text-xs font-mono text-[#8A3D2B] uppercase tracking-wider font-semibold">
              Bộ Sưu Tập Sáng Tạo
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 mt-1">
              {t.featured.heading}
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 mt-2 max-w-xl">
              {t.featured.subheading}
            </p>
          </div>

          <button
            onClick={() => onNavigate('shop')}
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#8A3D2B] hover:text-[#703022] transition-colors cursor-pointer"
          >
            <span>Xem toàn bộ cửa hàng</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCTS_LIST.map((prod) => {
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
                className="group rounded-xl bg-white border border-[#E6DDCE] overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
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

                  {/* Price & Action Buttons */}
                  <div className="pt-3 border-t border-[#F2ECE3]">
                    <div className="flex items-baseline justify-between mb-3">
                      <span className="text-[11px] text-stone-500 font-mono">
                        {t.featured.startingFrom}:
                      </span>
                      <span className="font-mono text-sm font-bold text-[#8A3D2B]">
                        {formatVND(prod.basePrice)}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => onNavigate('detail', prod.id)}
                        className="py-2 px-3 rounded-md bg-[#F4EFE6] hover:bg-[#EAE2D5] text-stone-800 text-xs font-medium transition-colors text-center cursor-pointer"
                      >
                        {t.featured.viewDetail}
                      </button>
                      <button
                        onClick={() => onNavigate('customizer', prod.id)}
                        className="py-2 px-3 rounded-md bg-[#8A3D2B] hover:bg-[#723223] text-white text-xs font-medium transition-colors text-center cursor-pointer"
                      >
                        {t.featured.customizeNow}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Cultural Banner Callout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl bg-[#1E293B] text-amber-50 p-8 sm:p-12 overflow-hidden shadow-xl border border-amber-300/20">
          <div className="relative z-10 max-w-2xl space-y-4">
            <span className="text-xs font-mono text-amber-300 uppercase tracking-widest font-semibold">
              {t.culturalStories.badge}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold leading-tight text-white">
              {t.culturalStories.title}
            </h2>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
              {t.culturalStories.intro}
            </p>
            <div className="pt-2">
              <button
                onClick={() => onNavigate('stories')}
                className="px-5 py-2.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-stone-950 font-semibold text-xs transition-colors shadow-md cursor-pointer flex items-center gap-2"
              >
                <Compass className="w-4 h-4" />
                <span>Đọc tư liệu văn hóa chi tiết</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
