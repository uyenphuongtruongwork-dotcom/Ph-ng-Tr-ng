import React from 'react';
import { ArrowLeft, Sparkles, Check, ArrowRight, ShieldCheck } from 'lucide-react';
import { Language, ProductId, CustomOptions } from '../types';
import { translations } from '../data/translations';
import { getProductById, formatVND } from '../data/products';
import { ProductVisualizer } from '../components/ProductVisualizer';

interface ProductDetailPageProps {
  productId: ProductId;
  currentLang: Language;
  onNavigate: (tab: string, productId?: ProductId) => void;
  onAddToCart: (
    productId: ProductId,
    productName: string,
    basePrice: number,
    addonsTotal: number,
    customOptions: CustomOptions,
    summaryText: string
  ) => void;
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({
  productId,
  currentLang,
  onNavigate,
  onAddToCart,
}) => {
  const t = translations[currentLang];
  const prod = getProductById(productId);
  const prodData = t.productsData[productId] || {
    name: productId,
    categoryLabel: '',
    shortDesc: '',
    detailedDesc: '',
    materialInfo: '',
    designStory: '',
    technique: '',
  };

  const defaultOptions: CustomOptions =
    productId === 'heritage-wall-art'
      ? {
          type: 'heritage-wall-art',
          options: {
            size: '40x60',
            backgroundColor: 'cream',
            brocadePosition: 'center',
            frameType: 'oak_natural',
          },
        }
      : productId === 'the-heritage-clutch'
      ? {
          type: 'the-heritage-clutch',
          options: {
            bodyColor: 'deep_indigo',
            brocadePattern: 'hmong_indigo_spiral',
            hardwareColor: 'antique_brass',
            monogramText: '',
            miniSymbol: 'none',
          },
        }
      : productId === 'the-story-scarf'
      ? {
          type: 'the-story-scarf',
          options: {
            baseColor: 'ivory_silk',
            borderColor: 'indigo_rolled',
            motifStyle: 'van_phuc_subtle',
            monogramText: '',
            miniSymbol: 'none',
          },
        }
      : {
          type: 'the-mini-twilly',
          options: {
            dualColorway: 'indigo_and_ivory',
            motifPattern: 'geometric_rhombus',
            monogramText: '',
            miniSymbol: 'none',
          },
        };

  const handleQuickAdd = () => {
    onAddToCart(
      productId,
      prodData.name,
      prod.basePrice,
      0,
      defaultOptions,
      'Phiên bản tiêu chuẩn gốc (Standard edition)'
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Back Button */}
      <button
        onClick={() => onNavigate('shop')}
        className="inline-flex items-center gap-2 text-xs font-semibold text-stone-600 hover:text-stone-900 transition-colors cursor-pointer"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Quay lại Cửa hàng / Back to Shop</span>
      </button>

      {/* Main PDP Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Sticky Visualizer */}
        <div className="lg:col-span-6 sticky top-24 space-y-4">
          <div className="p-4 bg-white rounded-2xl border border-[#E6DDCE] shadow-sm">
            <ProductVisualizer
              productId={productId}
              options={defaultOptions}
              sizeClass="w-full h-96 sm:h-[460px]"
              showCaption={true}
            />
          </div>

          <div className="flex items-center justify-between text-xs text-stone-500 font-mono px-2">
            <span>Bản phối chuẩn nghệ nhân</span>
            <span>Mã: DSV-{productId.toUpperCase()}</span>
          </div>
        </div>

        {/* Right Contiguous Purchase & Narrative Module */}
        <div className="lg:col-span-6 space-y-8">
          {/* Header & Pricing */}
          <div className="space-y-3 pb-6 border-b border-[#E8DEC8]">
            <span className="text-xs font-mono text-[#8A3D2B] uppercase tracking-wider font-semibold">
              {prodData.categoryLabel}
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 leading-tight">
              {prodData.name}
            </h1>
            <div className="pt-2 flex items-baseline gap-3">
              <span className="font-mono text-3xl font-bold text-[#8A3D2B]">
                {formatVND(prod.basePrice)}
              </span>
              <span className="text-xs text-stone-500 font-mono">
                {t.productDetail.basePriceLabel} (Chưa gồm phụ phí tùy chọn)
              </span>
            </div>
          </div>

          {/* Description */}
          <p className="text-sm text-stone-700 leading-relaxed">
            {prodData.detailedDesc}
          </p>

          {/* Action CTAs: Direct Customizer CTA (Prominent) + Quick Add */}
          <div className="space-y-3 p-5 rounded-xl bg-[#F6EFE5] border border-[#E4D8C6]">
            <div className="text-xs font-semibold text-stone-800 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-700" />
              <span>Cá nhân hóa tác phẩm theo phong cách của bạn</span>
            </div>

            <p className="text-xs text-stone-600 leading-relaxed">
              Bạn có thể tự chọn màu nền, dải thổ cẩm, màu khóa hoặc yêu cầu thêu tên viết tắt riêng với chi phí công khai.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => onNavigate('customizer', productId)}
                className="flex-1 py-3.5 px-5 bg-[#8A3D2B] hover:bg-[#723223] text-white rounded-lg font-semibold text-xs transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>{t.productDetail.designYourOwnBtn}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={handleQuickAdd}
                className="py-3.5 px-5 bg-white hover:bg-stone-50 text-stone-900 border border-[#D5C9B8] rounded-lg font-semibold text-xs transition-colors cursor-pointer"
              >
                {t.productDetail.addToCartBtn} (Bản chuẩn)
              </button>
            </div>
          </div>

          {/* Materials, Story, & Craft Technique Accordions / Sections */}
          <div className="space-y-6 divide-y divide-[#EFE8DD] pt-4">
            {/* Specs */}
            <div className="pt-6 space-y-2">
              <h3 className="text-xs font-mono uppercase tracking-wider font-bold text-stone-900">
                {t.productDetail.materialSpecs}
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                {prodData.materialInfo}
              </p>
            </div>

            {/* Design Story */}
            <div className="pt-6 space-y-2">
              <h3 className="text-xs font-mono uppercase tracking-wider font-bold text-stone-900">
                {t.productDetail.culturalNarrative}
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                {prodData.designStory}
              </p>
            </div>

            {/* Artisan Technique */}
            <div className="pt-6 space-y-2">
              <h3 className="text-xs font-mono uppercase tracking-wider font-bold text-stone-900">
                {t.productDetail.craftTechnique}
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                {prodData.technique}
              </p>
            </div>
          </div>

          {/* Guarantee Note */}
          <div className="p-4 rounded-lg bg-white border border-[#E6DDCE] flex items-center gap-3 text-xs text-stone-600">
            <ShieldCheck className="w-5 h-5 text-emerald-700 flex-shrink-0" />
            <span>{t.productDetail.guaranteeNote}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
