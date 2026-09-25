import React, { useState } from 'react';
import { SlidersHorizontal, RotateCcw } from 'lucide-react';
import { Language, ProductId, MaterialCategory, PurposeCategory, GiftTypeCategory } from '../types';
import { translations } from '../data/translations';
import { PRODUCTS_LIST, formatVND } from '../data/products';
import { ProductVisualizer } from '../components/ProductVisualizer';

interface ShopPageProps {
  currentLang: Language;
  onNavigate: (tab: string, productId?: ProductId) => void;
}

export const ShopPage: React.FC<ShopPageProps> = ({ currentLang, onNavigate }) => {
  const t = translations[currentLang];

  const [selectedMaterial, setSelectedMaterial] = useState<string>('all');
  const [selectedPurpose, setSelectedPurpose] = useState<string>('all');
  const [selectedGift, setSelectedGift] = useState<string>('all');

  const filteredProducts = PRODUCTS_LIST.filter((product) => {
    if (selectedMaterial !== 'all' && product.materialCategory !== selectedMaterial) {
      return false;
    }
    if (selectedPurpose !== 'all' && product.purposeCategory !== selectedPurpose) {
      return false;
    }
    if (selectedGift !== 'all' && product.giftType !== selectedGift) {
      return false;
    }
    return true;
  });

  const hasActiveFilters =
    selectedMaterial !== 'all' || selectedPurpose !== 'all' || selectedGift !== 'all';

  const clearFilters = () => {
    setSelectedMaterial('all');
    setSelectedPurpose('all');
    setSelectedGift('all');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Title & Introduction */}
      <div className="space-y-3 max-w-3xl">
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-stone-900 tracking-tight">
          {t.shop.title}
        </h1>
        <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
          {t.shop.subtitle}
        </p>
      </div>

      {/* Filter Control Section */}
      <div className="p-6 bg-white rounded-xl border border-[#E6DDCE] shadow-xs space-y-6">
        <div className="flex items-center justify-between border-b border-[#F0EAE1] pb-3">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-stone-800 font-semibold">
            <SlidersHorizontal className="w-3.5 h-3.5 text-[#8A3D2B]" />
            <span>Bộ Lọc Sản Phẩm & Mục Đích</span>
          </div>

          {hasActiveFilters && (
            <button
              onClick={clearFilters}
              className="text-xs text-[#8A3D2B] hover:text-[#6F2E20] font-medium flex items-center gap-1 cursor-pointer transition-colors"
            >
              <RotateCcw className="w-3 h-3" />
              <span>{t.shop.clearFilters}</span>
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Material Filter */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-stone-700 block">
              {t.shop.filterMaterial}
            </label>
            <div className="flex flex-wrap gap-1.5">
              <button
                onClick={() => setSelectedMaterial('all')}
                className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors cursor-pointer ${
                  selectedMaterial === 'all'
                    ? 'bg-[#8A3D2B] text-white shadow-xs'
                    : 'bg-[#F4EFE6] text-stone-700 hover:bg-[#EAE2D5]'
                }`}
              >
                {t.shop.all}
              </button>
              <button
                onClick={() => setSelectedMaterial('brocade_linen')}
                className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors cursor-pointer ${
                  selectedMaterial === 'brocade_linen'
                    ? 'bg-[#8A3D2B] text-white shadow-xs'
                    : 'bg-[#F4EFE6] text-stone-700 hover:bg-[#EAE2D5]'
                }`}
              >
                {t.shop.materials.brocade_linen}
              </button>
              <button
                onClick={() => setSelectedMaterial('silk')}
                className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors cursor-pointer ${
                  selectedMaterial === 'silk'
                    ? 'bg-[#8A3D2B] text-white shadow-xs'
                    : 'bg-[#F4EFE6] text-stone-700 hover:bg-[#EAE2D5]'
                }`}
              >
                {t.shop.materials.silk}
              </button>
              <button
                onClick={() => setSelectedMaterial('hybrid')}
                className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors cursor-pointer ${
                  selectedMaterial === 'hybrid'
                    ? 'bg-[#8A3D2B] text-white shadow-xs'
                    : 'bg-[#F4EFE6] text-stone-700 hover:bg-[#EAE2D5]'
                }`}
              >
                {t.shop.materials.hybrid}
              </button>
            </div>
          </div>

          {/* Purpose Filter */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-stone-700 block">
              {t.shop.filterPurpose}
            </label>
            <div className="flex flex-wrap gap-1.5">
              <button
                onClick={() => setSelectedPurpose('all')}
                className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors cursor-pointer ${
                  selectedPurpose === 'all'
                    ? 'bg-[#8A3D2B] text-white shadow-xs'
                    : 'bg-[#F4EFE6] text-stone-700 hover:bg-[#EAE2D5]'
                }`}
              >
                {t.shop.all}
              </button>
              <button
                onClick={() => setSelectedPurpose('decor')}
                className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors cursor-pointer ${
                  selectedPurpose === 'decor'
                    ? 'bg-[#8A3D2B] text-white shadow-xs'
                    : 'bg-[#F4EFE6] text-stone-700 hover:bg-[#EAE2D5]'
                }`}
              >
                {t.shop.purposes.decor}
              </button>
              <button
                onClick={() => setSelectedPurpose('daily_accessories')}
                className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors cursor-pointer ${
                  selectedPurpose === 'daily_accessories'
                    ? 'bg-[#8A3D2B] text-white shadow-xs'
                    : 'bg-[#F4EFE6] text-stone-700 hover:bg-[#EAE2D5]'
                }`}
              >
                {t.shop.purposes.daily_accessories}
              </button>
              <button
                onClick={() => setSelectedPurpose('silk_fashion')}
                className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors cursor-pointer ${
                  selectedPurpose === 'silk_fashion'
                    ? 'bg-[#8A3D2B] text-white shadow-xs'
                    : 'bg-[#F4EFE6] text-stone-700 hover:bg-[#EAE2D5]'
                }`}
              >
                {t.shop.purposes.silk_fashion}
              </button>
            </div>
          </div>

          {/* Gift Type Filter */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-stone-700 block">
              {t.shop.filterGift}
            </label>
            <div className="flex flex-wrap gap-1.5">
              <button
                onClick={() => setSelectedGift('all')}
                className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors cursor-pointer ${
                  selectedGift === 'all'
                    ? 'bg-[#8A3D2B] text-white shadow-xs'
                    : 'bg-[#F4EFE6] text-stone-700 hover:bg-[#EAE2D5]'
                }`}
              >
                {t.shop.all}
              </button>
              <button
                onClick={() => setSelectedGift('housewarming')}
                className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors cursor-pointer ${
                  selectedGift === 'housewarming'
                    ? 'bg-[#8A3D2B] text-white shadow-xs'
                    : 'bg-[#F4EFE6] text-stone-700 hover:bg-[#EAE2D5]'
                }`}
              >
                {t.shop.gifts.housewarming}
              </button>
              <button
                onClick={() => setSelectedGift('international')}
                className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors cursor-pointer ${
                  selectedGift === 'international'
                    ? 'bg-[#8A3D2B] text-white shadow-xs'
                    : 'bg-[#F4EFE6] text-stone-700 hover:bg-[#EAE2D5]'
                }`}
              >
                {t.shop.gifts.international}
              </button>
              <button
                onClick={() => setSelectedGift('personal_loved')}
                className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors cursor-pointer ${
                  selectedGift === 'personal_loved'
                    ? 'bg-[#8A3D2B] text-white shadow-xs'
                    : 'bg-[#F4EFE6] text-stone-700 hover:bg-[#EAE2D5]'
                }`}
              >
                {t.shop.gifts.personal_loved}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Product Results Counter */}
      <div className="text-xs text-stone-500 font-mono">
        Hiển thị {filteredProducts.length} {t.shop.productsFound}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProducts.map((prod) => {
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
              className="rounded-xl bg-white border border-[#E6DDCE] overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              {/* Product Visualizer */}
              <div className="p-3 bg-[#FAF7F2] border-b border-[#F0E8DC]">
                <ProductVisualizer
                  productId={prod.id}
                  options={defaultOptions}
                  sizeClass="w-full h-60"
                  showCaption={false}
                />
              </div>

              {/* Body */}
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
    </div>
  );
};
