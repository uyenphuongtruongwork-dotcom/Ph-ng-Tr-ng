import React, { useState, useEffect } from 'react';
import { Sparkles, ShoppingBag, RotateCcw, X, Check } from 'lucide-react';
import {
  Language,
  ProductId,
  CustomOptions,
  WallArtCustomOptions,
  ClutchCustomOptions,
  ScarfCustomOptions,
  TwillyCustomOptions,
} from '../types';
import { translations } from '../data/translations';
import { PRODUCTS_LIST, getProductById, formatVND } from '../data/products';
import { ProductVisualizer } from '../components/ProductVisualizer';

interface CustomizerPageProps {
  currentLang: Language;
  initialProductId?: ProductId;
  onProductChange?: (productId: ProductId) => void;
  onAddToCart: (
    productId: ProductId,
    productName: string,
    basePrice: number,
    addonsTotal: number,
    customOptions: CustomOptions,
    summaryText: string
  ) => void;
  onOpenCart: () => void;
  onClose?: () => void;
  hideHeader?: boolean;
}

const DEFAULT_WALL_ART: WallArtCustomOptions = {
  size: '40x60',
  backgroundColor: 'cream',
  brocadePosition: 'center',
  frameType: 'oak_natural',
};

const DEFAULT_CLUTCH: ClutchCustomOptions = {
  bodyColor: 'deep_indigo',
  brocadePattern: 'hmong_indigo_spiral',
  hardwareColor: 'antique_brass',
  monogramText: '',
  miniSymbol: 'none',
};

const DEFAULT_SCARF: ScarfCustomOptions = {
  baseColor: 'ivory_silk',
  borderColor: 'indigo_rolled',
  motifStyle: 'van_phuc_subtle',
  monogramText: '',
  miniSymbol: 'none',
};

const DEFAULT_TWILLY: TwillyCustomOptions = {
  dualColorway: 'indigo_and_ivory',
  motifPattern: 'geometric_rhombus',
  monogramText: '',
  miniSymbol: 'none',
};

export const CustomizerPage: React.FC<CustomizerPageProps> = ({
  currentLang,
  initialProductId = 'heritage-wall-art',
  onProductChange,
  onAddToCart,
  onOpenCart,
  onClose,
  hideHeader = false,
}) => {
  const t = translations[currentLang] || translations.vi;
  const c = t.customizer;

  const [selectedProductId, setSelectedProductId] = useState<ProductId>(initialProductId);

  // Per-product customizer states
  const [wallArtOptions, setWallArtOptions] = useState<WallArtCustomOptions>({ ...DEFAULT_WALL_ART });
  const [clutchOptions, setClutchOptions] = useState<ClutchCustomOptions>({ ...DEFAULT_CLUTCH });
  const [scarfOptions, setScarfOptions] = useState<ScarfCustomOptions>({ ...DEFAULT_SCARF });
  const [twillyOptions, setTwillyOptions] = useState<TwillyCustomOptions>({ ...DEFAULT_TWILLY });

  const [addedToast, setAddedToast] = useState(false);

  // Sync when initialProductId changes from external triggers
  useEffect(() => {
    if (initialProductId && initialProductId !== selectedProductId) {
      setSelectedProductId(initialProductId);
    }
  }, [initialProductId]);

  const handleSelectProduct = (id: ProductId) => {
    setSelectedProductId(id);
    onProductChange?.(id);
  };

  const handleResetCurrent = () => {
    if (selectedProductId === 'heritage-wall-art') setWallArtOptions({ ...DEFAULT_WALL_ART });
    else if (selectedProductId === 'the-heritage-clutch') setClutchOptions({ ...DEFAULT_CLUTCH });
    else if (selectedProductId === 'the-story-scarf') setScarfOptions({ ...DEFAULT_SCARF });
    else if (selectedProductId === 'the-mini-twilly') setTwillyOptions({ ...DEFAULT_TWILLY });
  };

  const currentProduct = getProductById(selectedProductId);
  const prodData = t.productsData[selectedProductId] || {
    name: selectedProductId,
    categoryLabel: '',
    shortDesc: '',
  };

  // Calculate surcharges & summaries with translated values
  let addonsTotal = 0;
  const summaryParts: string[] = [];

  if (selectedProductId === 'heritage-wall-art') {
    if (wallArtOptions.frameType === 'premium_brass') {
      addonsTotal += 150000;
      summaryParts.push(c.wallArt.frames.premium_brass);
    } else {
      summaryParts.push(c.wallArt.frames.oak_natural);
    }
    summaryParts.push(`${c.wallArt.size}: ${c.wallArt.sizes[wallArtOptions.size] || wallArtOptions.size}`);
    summaryParts.push(`${c.wallArt.bgColor}: ${c.wallArt.bgColors[wallArtOptions.backgroundColor] || wallArtOptions.backgroundColor}`);
    summaryParts.push(`${c.wallArt.position}: ${c.wallArt.positions[wallArtOptions.brocadePosition] || wallArtOptions.brocadePosition}`);
  } else if (selectedProductId === 'the-heritage-clutch') {
    if (clutchOptions.monogramText && clutchOptions.monogramText.trim()) {
      addonsTotal += 50000;
      summaryParts.push(`${c.clutch.monogram}: "${clutchOptions.monogramText.trim().toUpperCase()}"`);
    }
    if (clutchOptions.miniSymbol && clutchOptions.miniSymbol !== 'none') {
      addonsTotal += 100000;
      summaryParts.push(`${c.clutch.symbol}: ${c.clutch.symbols[clutchOptions.miniSymbol] || clutchOptions.miniSymbol}`);
    }
    summaryParts.push(`${c.clutch.bodyColor}: ${c.clutch.bodyColors[clutchOptions.bodyColor] || clutchOptions.bodyColor}`);
    summaryParts.push(`${c.clutch.brocadePattern}: ${c.clutch.patterns[clutchOptions.brocadePattern] || clutchOptions.brocadePattern}`);
    summaryParts.push(`${c.clutch.hardwareColor}: ${c.clutch.hardwares[clutchOptions.hardwareColor] || clutchOptions.hardwareColor}`);
  } else if (selectedProductId === 'the-story-scarf') {
    if (scarfOptions.monogramText && scarfOptions.monogramText.trim()) {
      addonsTotal += 50000;
      summaryParts.push(`${c.scarf.monogram}: "${scarfOptions.monogramText.trim().toUpperCase()}"`);
    }
    if (scarfOptions.miniSymbol && scarfOptions.miniSymbol !== 'none') {
      addonsTotal += 100000;
      summaryParts.push(`${c.scarf.symbol}: ${c.scarf.symbols[scarfOptions.miniSymbol] || scarfOptions.miniSymbol}`);
    }
    summaryParts.push(`${c.scarf.baseColor}: ${c.scarf.baseColors[scarfOptions.baseColor] || scarfOptions.baseColor}`);
    summaryParts.push(`${c.scarf.borderColor}: ${c.scarf.borderColors[scarfOptions.borderColor] || scarfOptions.borderColor}`);
    summaryParts.push(`${c.scarf.motifStyle}: ${c.scarf.motifs[scarfOptions.motifStyle] || scarfOptions.motifStyle}`);
  } else if (selectedProductId === 'the-mini-twilly') {
    if (twillyOptions.monogramText && twillyOptions.monogramText.trim()) {
      addonsTotal += 50000;
      summaryParts.push(`${c.twilly.monogram}: "${twillyOptions.monogramText.trim().toUpperCase()}"`);
    }
    if (twillyOptions.miniSymbol && twillyOptions.miniSymbol !== 'none') {
      addonsTotal += 100000;
      summaryParts.push(`${c.twilly.symbol}: ${c.twilly.symbols[twillyOptions.miniSymbol] || twillyOptions.miniSymbol}`);
    }
    summaryParts.push(`${c.twilly.dualColorway}: ${c.twilly.colorways[twillyOptions.dualColorway] || twillyOptions.dualColorway}`);
    summaryParts.push(`${c.twilly.motifPattern}: ${c.twilly.patterns[twillyOptions.motifPattern] || twillyOptions.motifPattern}`);
  }

  const basePrice = currentProduct.basePrice;
  const totalPrice = basePrice + addonsTotal;

  // Active custom options object
  const activeCustomOptions: CustomOptions =
    selectedProductId === 'heritage-wall-art'
      ? { type: 'heritage-wall-art', options: wallArtOptions }
      : selectedProductId === 'the-heritage-clutch'
      ? { type: 'the-heritage-clutch', options: clutchOptions }
      : selectedProductId === 'the-story-scarf'
      ? { type: 'the-story-scarf', options: scarfOptions }
      : { type: 'the-mini-twilly', options: twillyOptions };

  const handleAddCustomToCart = () => {
    onAddToCart(
      selectedProductId,
      prodData.name,
      basePrice,
      addonsTotal,
      activeCustomOptions,
      summaryParts.join(' · ')
    );
    setAddedToast(true);
    setTimeout(() => setAddedToast(false), 3500);
  };

  return (
    <div className="w-full space-y-8">
      {/* Header (optional if embedded or modal) */}
      {!hideHeader && (
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E8DEC8] pb-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 text-xs font-mono text-[#8A3D2B] font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-amber-700" />
              <span>Interactive Co-Creation Studio</span>
            </div>
            <h1 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight">
              {c.pageTitle}
            </h1>
            <p className="text-xs text-stone-600 leading-relaxed max-w-2xl">
              {c.pageSubtitle}
            </p>
          </div>

          <div className="flex items-center gap-2 self-end sm:self-auto">
            <button
              onClick={handleResetCurrent}
              className="px-3 py-1.5 rounded-lg border border-[#D5C9B8] bg-white text-stone-600 hover:text-stone-900 text-xs font-medium flex items-center gap-1.5 cursor-pointer shadow-xs transition-colors"
              title="Đặt lại tùy chọn mặc định"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Đặt lại</span>
            </button>
            {onClose && (
              <button
                onClick={onClose}
                className="p-1.5 rounded-full bg-white border border-[#D5C9B8] text-stone-600 hover:text-stone-900 transition-colors cursor-pointer shadow-xs"
                aria-label="Close Studio"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>
      )}

      {/* Product Selector Tabs */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label className="text-xs font-mono uppercase tracking-wider text-stone-700 font-bold">
            {c.selectProduct}:
          </label>
          <span className="text-[11px] font-mono text-stone-500">
            4 / 4 Tác Phẩm
          </span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5">
          {PRODUCTS_LIST.map((p) => {
            const pData = t.productsData[p.id] || { name: p.id };
            const isSelected = selectedProductId === p.id;
            return (
              <button
                key={p.id}
                onClick={() => handleSelectProduct(p.id)}
                className={`p-3.5 rounded-xl text-left border transition-all cursor-pointer relative ${
                  isSelected
                    ? 'border-[#8A3D2B] bg-[#F5ECE3] shadow-sm ring-2 ring-[#8A3D2B]/80'
                    : 'border-[#E6DDCE] bg-white hover:bg-[#FAF7F2]'
                }`}
              >
                <div className="flex items-center justify-between text-[11px] font-mono text-stone-500">
                  <span>{formatVND(p.basePrice)}</span>
                  {isSelected && <span className="w-2 h-2 rounded-full bg-[#8A3D2B]" />}
                </div>
                <div
                  className={`text-xs font-bold mt-1 line-clamp-1 ${
                    isSelected ? 'text-[#8A3D2B]' : 'text-stone-800'
                  }`}
                >
                  {pData.name}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Studio Workspace: Visualizer Left + Controls Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Sticky Preview Section */}
        <div className="lg:col-span-6 lg:sticky lg:top-24 space-y-4">
          <div className="p-3 sm:p-4 bg-white rounded-2xl border border-[#E6DDCE] shadow-sm">
            <ProductVisualizer
              productId={selectedProductId}
              options={activeCustomOptions}
              sizeClass="w-full h-80 sm:h-[400px]"
              showCaption={true}
            />
          </div>

          {/* Pricing Formula Breakdown Box */}
          <div className="p-4 sm:p-5 rounded-xl bg-[#F5EFE6] border border-[#E4D8C6] space-y-3 shadow-xs">
            <div className="text-xs font-mono uppercase tracking-wider text-stone-700 font-bold flex items-center justify-between">
              <span>{c.formula}</span>
              <span className="text-stone-500">VND</span>
            </div>

            <div className="grid grid-cols-3 gap-2 text-center pt-2 border-t border-[#DFD5C4]">
              <div>
                <div className="text-[11px] text-stone-500">{c.basePrice}</div>
                <div className="font-mono text-xs sm:text-sm font-semibold text-stone-800">
                  {formatVND(basePrice)}
                </div>
              </div>
              <div>
                <div className="text-[11px] text-stone-500">{c.addonsFee}</div>
                <div className="font-mono text-xs sm:text-sm font-semibold text-amber-800">
                  +{formatVND(addonsTotal)}
                </div>
              </div>
              <div className="bg-[#EFE8DC] py-1 px-1 rounded-md">
                <div className="text-[11px] font-bold text-[#8A3D2B]">{c.totalPrice}</div>
                <div className="font-mono text-sm sm:text-base font-bold text-[#8A3D2B]">
                  {formatVND(totalPrice)}
                </div>
              </div>
            </div>

            {/* Design Summary text */}
            <div className="text-[11px] text-stone-600 font-mono pt-2 border-t border-[#DFD5C4] leading-relaxed">
              <span className="font-semibold text-stone-800">Chi tiết: </span>
              {summaryParts.join(' · ')}
            </div>
          </div>

          {/* Add to Cart CTA */}
          <div className="space-y-2">
            <button
              onClick={handleAddCustomToCart}
              className="w-full py-3.5 px-6 bg-[#8A3D2B] hover:bg-[#723223] text-white rounded-xl font-bold text-sm transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>{t.productDetail.addToCartBtn} — {formatVND(totalPrice)}</span>
            </button>

            {addedToast && (
              <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-lg text-xs flex items-center justify-between animate-in fade-in">
                <span className="flex items-center gap-1.5 font-medium">
                  <Check className="w-4 h-4 text-emerald-600" />
                  {c.addToCartSuccess}
                </span>
                <button
                  onClick={onOpenCart}
                  className="font-bold underline hover:text-emerald-950 cursor-pointer"
                >
                  {t.nav.cart}
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Right Customization Controls Module */}
        <div className="lg:col-span-6 bg-white p-5 sm:p-7 rounded-2xl border border-[#E6DDCE] shadow-xs space-y-6">
          <div className="border-b border-[#F0EAE0] pb-3">
            <div className="text-[11px] font-mono text-[#8A3D2B] uppercase tracking-wider font-semibold">
              Bảng Tùy Chỉnh Chi Tiết
            </div>
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-stone-900 mt-0.5">
              {prodData.name}
            </h2>
            <p className="text-xs text-stone-500 mt-1">
              {c.interactiveNotice}
            </p>
          </div>

          {/* 1. WALL ART CONTROLS */}
          {selectedProductId === 'heritage-wall-art' && (
            <div className="space-y-5">
              {/* Size */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-stone-800 block">
                  {c.wallArt.size}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {(['30x40', '40x60', '50x70'] as const).map((sz) => (
                    <button
                      key={sz}
                      onClick={() => setWallArtOptions((prev) => ({ ...prev, size: sz }))}
                      className={`p-2.5 rounded-lg border text-left text-xs font-medium transition-colors cursor-pointer ${
                        wallArtOptions.size === sz
                          ? 'border-[#8A3D2B] bg-[#F5ECE3] text-[#8A3D2B] font-semibold'
                          : 'border-[#E2D8C9] hover:bg-[#FAF7F2] text-stone-700'
                      }`}
                    >
                      {c.wallArt.sizes[sz] || sz}
                    </button>
                  ))}
                </div>
              </div>

              {/* Background Canvas Color */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-stone-800 block">
                  {c.wallArt.bgColor}
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {(['cream', 'indigo', 'slate', 'terracotta'] as const).map((bg) => (
                    <button
                      key={bg}
                      onClick={() => setWallArtOptions((prev) => ({ ...prev, backgroundColor: bg }))}
                      className={`p-2.5 rounded-lg border text-xs font-medium flex items-center gap-2 cursor-pointer ${
                        wallArtOptions.backgroundColor === bg
                          ? 'border-[#8A3D2B] bg-[#F5ECE3] text-[#8A3D2B] font-semibold'
                          : 'border-[#E2D8C9] hover:bg-[#FAF7F2] text-stone-700'
                      }`}
                    >
                      <span
                        className="w-3.5 h-3.5 rounded-full border border-stone-300 flex-shrink-0"
                        style={{
                          backgroundColor:
                            bg === 'cream'
                              ? '#F4ECE1'
                              : bg === 'indigo'
                              ? '#182B3C'
                              : bg === 'slate'
                              ? '#414B52'
                              : '#863C2A',
                        }}
                      />
                      <span className="truncate">{c.wallArt.bgColors[bg] || bg}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Brocade Placement */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-stone-800 block">
                  {c.wallArt.position}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {(['center', 'asymmetric', 'horizontal_stripe'] as const).map((pos) => (
                    <button
                      key={pos}
                      onClick={() => setWallArtOptions((prev) => ({ ...prev, brocadePosition: pos }))}
                      className={`p-2.5 rounded-lg border text-left text-xs font-medium transition-colors cursor-pointer ${
                        wallArtOptions.brocadePosition === pos
                          ? 'border-[#8A3D2B] bg-[#F5ECE3] text-[#8A3D2B] font-semibold'
                          : 'border-[#E2D8C9] hover:bg-[#FAF7F2] text-stone-700'
                      }`}
                    >
                      {c.wallArt.positions[pos] || pos}
                    </button>
                  ))}
                </div>
              </div>

              {/* Frame Style (with Surcharge) */}
              <div className="space-y-1.5">
                <div className="flex justify-between items-baseline">
                  <label className="text-xs font-semibold text-stone-800 block">
                    {c.wallArt.frame}
                  </label>
                  <span className="text-[11px] font-mono text-amber-800 font-semibold">
                    {c.fees.frameFee}
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <button
                    onClick={() => setWallArtOptions((prev) => ({ ...prev, frameType: 'oak_natural' }))}
                    className={`p-3 rounded-lg border text-left text-xs font-medium cursor-pointer ${
                      wallArtOptions.frameType === 'oak_natural'
                        ? 'border-[#8A3D2B] bg-[#F5ECE3] text-[#8A3D2B] font-semibold'
                        : 'border-[#E2D8C9] hover:bg-[#FAF7F2] text-stone-700'
                    }`}
                  >
                    {c.wallArt.frames.oak_natural}
                  </button>
                  <button
                    onClick={() => setWallArtOptions((prev) => ({ ...prev, frameType: 'premium_brass' }))}
                    className={`p-3 rounded-lg border text-left text-xs font-medium cursor-pointer ${
                      wallArtOptions.frameType === 'premium_brass'
                        ? 'border-[#8A3D2B] bg-[#F5ECE3] text-[#8A3D2B] font-semibold'
                        : 'border-[#E2D8C9] hover:bg-[#FAF7F2] text-stone-700'
                    }`}
                  >
                    {c.wallArt.frames.premium_brass}
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* 2. THE HERITAGE CLUTCH CONTROLS */}
          {selectedProductId === 'the-heritage-clutch' && (
            <div className="space-y-5">
              {/* Body Color */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-stone-800 block">
                  {c.clutch.bodyColor}
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {(['graphite', 'deep_indigo', 'warm_cognac', 'sand_cream'] as const).map((color) => (
                    <button
                      key={color}
                      onClick={() => setClutchOptions((prev) => ({ ...prev, bodyColor: color }))}
                      className={`p-2.5 rounded-lg border text-xs font-medium flex items-center gap-2 cursor-pointer ${
                        clutchOptions.bodyColor === color
                          ? 'border-[#8A3D2B] bg-[#F5ECE3] text-[#8A3D2B] font-semibold'
                          : 'border-[#E2D8C9] hover:bg-[#FAF7F2] text-stone-700'
                      }`}
                    >
                      <span
                        className="w-3.5 h-3.5 rounded-full border border-stone-300 flex-shrink-0"
                        style={{
                          backgroundColor:
                            color === 'graphite'
                              ? '#202224'
                              : color === 'deep_indigo'
                              ? '#182C40'
                              : color === 'warm_cognac'
                              ? '#6E3A1A'
                              : '#D6C8B4',
                        }}
                      />
                      <span className="truncate">{c.clutch.bodyColors[color] || color}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Brocade Pattern */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-stone-800 block">
                  {c.clutch.brocadePattern}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {(['hmong_indigo_spiral', 'thai_rhombus_diamond', 'dao_red_pine'] as const).map((patt) => (
                    <button
                      key={patt}
                      onClick={() => setClutchOptions((prev) => ({ ...prev, brocadePattern: patt }))}
                      className={`p-2.5 rounded-lg border text-left text-xs font-medium cursor-pointer ${
                        clutchOptions.brocadePattern === patt
                          ? 'border-[#8A3D2B] bg-[#F5ECE3] text-[#8A3D2B] font-semibold'
                          : 'border-[#E2D8C9] hover:bg-[#FAF7F2] text-stone-700'
                      }`}
                    >
                      {c.clutch.patterns[patt] || patt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Hardware Finish */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-stone-800 block">
                  {c.clutch.hardwareColor}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {(['antique_brass', 'matte_gold', 'smoked_silver'] as const).map((hw) => (
                    <button
                      key={hw}
                      onClick={() => setClutchOptions((prev) => ({ ...prev, hardwareColor: hw }))}
                      className={`p-2.5 rounded-lg border text-left text-xs font-medium cursor-pointer ${
                        clutchOptions.hardwareColor === hw
                          ? 'border-[#8A3D2B] bg-[#F5ECE3] text-[#8A3D2B] font-semibold'
                          : 'border-[#E2D8C9] hover:bg-[#FAF7F2] text-stone-700'
                      }`}
                    >
                      {c.clutch.hardwares[hw] || hw}
                    </button>
                  ))}
                </div>
              </div>

              {/* Monogram Text (Surcharge: +50k) */}
              <div className="space-y-1.5">
                <div className="flex justify-between items-baseline">
                  <label className="text-xs font-semibold text-stone-800 block">
                    {c.clutch.monogram}
                  </label>
                  <span className="text-[11px] font-mono text-amber-800 font-semibold">
                    {c.fees.monogramFee}
                  </span>
                </div>
                <input
                  type="text"
                  maxLength={4}
                  value={clutchOptions.monogramText}
                  onChange={(e) =>
                    setClutchOptions((prev) => ({
                      ...prev,
                      monogramText: e.target.value.toUpperCase(),
                    }))
                  }
                  placeholder={c.clutch.monogramPlaceholder}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[#D5C9B8] text-xs font-mono uppercase tracking-widest focus:outline-hidden focus:border-[#8A3D2B] bg-[#FCFBF8]"
                />
              </div>

              {/* Mini Embroidered Symbol (Surcharge: +100k) */}
              <div className="space-y-1.5">
                <div className="flex justify-between items-baseline">
                  <label className="text-xs font-semibold text-stone-800 block">
                    {c.clutch.symbol}
                  </label>
                  <span className="text-[11px] font-mono text-amber-800 font-semibold">
                    {c.fees.symbolFee}
                  </span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {(['none', 'crane', 'lotus', 'mountain_cloud'] as const).map((sym) => (
                    <button
                      key={sym}
                      onClick={() => setClutchOptions((prev) => ({ ...prev, miniSymbol: sym }))}
                      className={`p-2.5 rounded-lg border text-xs font-medium text-center cursor-pointer ${
                        clutchOptions.miniSymbol === sym
                          ? 'border-[#8A3D2B] bg-[#F5ECE3] text-[#8A3D2B] font-semibold'
                          : 'border-[#E2D8C9] hover:bg-[#FAF7F2] text-stone-700'
                      }`}
                    >
                      {c.clutch.symbols[sym] || sym}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* 3. THE STORY SCARF CONTROLS */}
          {selectedProductId === 'the-story-scarf' && (
            <div className="space-y-5">
              {/* Base Silk Tint */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-stone-800 block">
                  {c.scarf.baseColor}
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {(['ivory_silk', 'coral_blush', 'jade_teal', 'saffron_gold'] as const).map((scolor) => (
                    <button
                      key={scolor}
                      onClick={() => setScarfOptions((prev) => ({ ...prev, baseColor: scolor }))}
                      className={`p-2.5 rounded-lg border text-xs font-medium flex items-center gap-2 cursor-pointer ${
                        scarfOptions.baseColor === scolor
                          ? 'border-[#8A3D2B] bg-[#F5ECE3] text-[#8A3D2B] font-semibold'
                          : 'border-[#E2D8C9] hover:bg-[#FAF7F2] text-stone-700'
                      }`}
                    >
                      <span
                        className="w-3.5 h-3.5 rounded-full border border-stone-300 flex-shrink-0"
                        style={{
                          backgroundColor:
                            scolor === 'ivory_silk'
                              ? '#F9F5EC'
                              : scolor === 'coral_blush'
                              ? '#F3D2C9'
                              : scolor === 'jade_teal'
                              ? '#1B474C'
                              : '#E5A93D',
                        }}
                      />
                      <span className="truncate">{c.scarf.baseColors[scolor] || scolor}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Hand-rolled Border Hem */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-stone-800 block">
                  {c.scarf.borderColor}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {(['indigo_rolled', 'rhododendron_red', 'gilded_amber'] as const).map((bcolor) => (
                    <button
                      key={bcolor}
                      onClick={() => setScarfOptions((prev) => ({ ...prev, borderColor: bcolor }))}
                      className={`p-2.5 rounded-lg border text-left text-xs font-medium cursor-pointer ${
                        scarfOptions.borderColor === bcolor
                          ? 'border-[#8A3D2B] bg-[#F5ECE3] text-[#8A3D2B] font-semibold'
                          : 'border-[#E2D8C9] hover:bg-[#FAF7F2] text-stone-700'
                      }`}
                    >
                      {c.scarf.borderColors[bcolor] || bcolor}
                    </button>
                  ))}
                </div>
              </div>

              {/* Silk Motif Style */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-stone-800 block">
                  {c.scarf.motifStyle}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {(['van_phuc_subtle', 'ly_dynasty_wave', 'brocade_silk_border'] as const).map((m) => (
                    <button
                      key={m}
                      onClick={() => setScarfOptions((prev) => ({ ...prev, motifStyle: m }))}
                      className={`p-2.5 rounded-lg border text-left text-xs font-medium cursor-pointer ${
                        scarfOptions.motifStyle === m
                          ? 'border-[#8A3D2B] bg-[#F5ECE3] text-[#8A3D2B] font-semibold'
                          : 'border-[#E2D8C9] hover:bg-[#FAF7F2] text-stone-700'
                      }`}
                    >
                      {c.scarf.motifs[m] || m}
                    </button>
                  ))}
                </div>
              </div>

              {/* Monogram (Surcharge: +50k) */}
              <div className="space-y-1.5">
                <div className="flex justify-between items-baseline">
                  <label className="text-xs font-semibold text-stone-800 block">
                    {c.scarf.monogram}
                  </label>
                  <span className="text-[11px] font-mono text-amber-800 font-semibold">
                    {c.fees.monogramFee}
                  </span>
                </div>
                <input
                  type="text"
                  maxLength={4}
                  value={scarfOptions.monogramText}
                  onChange={(e) =>
                    setScarfOptions((prev) => ({
                      ...prev,
                      monogramText: e.target.value.toUpperCase(),
                    }))
                  }
                  placeholder={c.scarf.monogramPlaceholder}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[#D5C9B8] text-xs font-mono uppercase tracking-widest focus:outline-hidden focus:border-[#8A3D2B] bg-[#FCFBF8]"
                />
              </div>

              {/* Mini Symbol (Surcharge: +100k) */}
              <div className="space-y-1.5">
                <div className="flex justify-between items-baseline">
                  <label className="text-xs font-semibold text-stone-800 block">
                    {c.scarf.symbol}
                  </label>
                  <span className="text-[11px] font-mono text-amber-800 font-semibold">
                    {c.fees.symbolFee}
                  </span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {(['none', 'crane', 'lotus', 'mountain_cloud'] as const).map((sym) => (
                    <button
                      key={sym}
                      onClick={() => setScarfOptions((prev) => ({ ...prev, miniSymbol: sym }))}
                      className={`p-2.5 rounded-lg border text-xs font-medium text-center cursor-pointer ${
                        scarfOptions.miniSymbol === sym
                          ? 'border-[#8A3D2B] bg-[#F5ECE3] text-[#8A3D2B] font-semibold'
                          : 'border-[#E2D8C9] hover:bg-[#FAF7F2] text-stone-700'
                      }`}
                    >
                      {c.scarf.symbols[sym] || sym}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* 4. THE MINI TWILLY CONTROLS */}
          {selectedProductId === 'the-mini-twilly' && (
            <div className="space-y-5">
              {/* Dual Ends Colorway */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-stone-800 block">
                  {c.twilly.dualColorway}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {(['indigo_and_ivory', 'crimson_and_cream', 'saffron_and_slate'] as const).map((cw) => (
                    <button
                      key={cw}
                      onClick={() => setTwillyOptions((prev) => ({ ...prev, dualColorway: cw }))}
                      className={`p-2.5 rounded-lg border text-left text-xs font-medium cursor-pointer ${
                        twillyOptions.dualColorway === cw
                          ? 'border-[#8A3D2B] bg-[#F5ECE3] text-[#8A3D2B] font-semibold'
                          : 'border-[#E2D8C9] hover:bg-[#FAF7F2] text-stone-700'
                      }`}
                    >
                      {c.twilly.colorways[cw] || cw}
                    </button>
                  ))}
                </div>
              </div>

              {/* Motif Accent */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-stone-800 block">
                  {c.twilly.motifPattern}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {(['geometric_rhombus', 'batik_floral', 'flowing_silk'] as const).map((pat) => (
                    <button
                      key={pat}
                      onClick={() => setTwillyOptions((prev) => ({ ...prev, motifPattern: pat }))}
                      className={`p-2.5 rounded-lg border text-left text-xs font-medium cursor-pointer ${
                        twillyOptions.motifPattern === pat
                          ? 'border-[#8A3D2B] bg-[#F5ECE3] text-[#8A3D2B] font-semibold'
                          : 'border-[#E2D8C9] hover:bg-[#FAF7F2] text-stone-700'
                      }`}
                    >
                      {c.twilly.patterns[pat] || pat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Monogram (Surcharge: +50k) */}
              <div className="space-y-1.5">
                <div className="flex justify-between items-baseline">
                  <label className="text-xs font-semibold text-stone-800 block">
                    {c.twilly.monogram}
                  </label>
                  <span className="text-[11px] font-mono text-amber-800 font-semibold">
                    {c.fees.monogramFee}
                  </span>
                </div>
                <input
                  type="text"
                  maxLength={4}
                  value={twillyOptions.monogramText}
                  onChange={(e) =>
                    setTwillyOptions((prev) => ({
                      ...prev,
                      monogramText: e.target.value.toUpperCase(),
                    }))
                  }
                  placeholder={c.twilly.monogramPlaceholder}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[#D5C9B8] text-xs font-mono uppercase tracking-widest focus:outline-hidden focus:border-[#8A3D2B] bg-[#FCFBF8]"
                />
              </div>

              {/* Mini Symbol (Surcharge: +100k) */}
              <div className="space-y-1.5">
                <div className="flex justify-between items-baseline">
                  <label className="text-xs font-semibold text-stone-800 block">
                    {c.twilly.symbol}
                  </label>
                  <span className="text-[11px] font-mono text-amber-800 font-semibold">
                    {c.fees.symbolFee}
                  </span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {(['none', 'crane', 'lotus', 'mountain_cloud'] as const).map((sym) => (
                    <button
                      key={sym}
                      onClick={() => setTwillyOptions((prev) => ({ ...prev, miniSymbol: sym }))}
                      className={`p-2.5 rounded-lg border text-xs font-medium text-center cursor-pointer ${
                        twillyOptions.miniSymbol === sym
                          ? 'border-[#8A3D2B] bg-[#F5ECE3] text-[#8A3D2B] font-semibold'
                          : 'border-[#E2D8C9] hover:bg-[#FAF7F2] text-stone-700'
                      }`}
                    >
                      {c.twilly.symbols[sym] || sym}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
