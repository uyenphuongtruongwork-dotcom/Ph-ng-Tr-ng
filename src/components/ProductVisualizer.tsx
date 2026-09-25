import React from 'react';
import { CustomOptions, ProductId } from '../types';
import {
  HmongIndigoSpiralPattern,
  ThaiRhombusPattern,
  DaoRedPinePattern,
  VanPhucCloudJacquard,
  EmbroideredSymbol,
} from './PatternSVG';

interface ProductVisualizerProps {
  productId: ProductId;
  options: CustomOptions;
  sizeClass?: string;
  showCaption?: boolean;
}

export const ProductVisualizer: React.FC<ProductVisualizerProps> = ({
  productId,
  options,
  sizeClass = 'w-full h-80 md:h-96',
  showCaption = true,
}) => {
  // Helper to render appropriate product
  const renderPreview = () => {
    switch (productId) {
      case 'heritage-wall-art': {
        const wallOptions = {
          size: '40x60' as const,
          backgroundColor: 'cream' as const,
          brocadePosition: 'center' as const,
          frameType: 'oak_natural' as const,
          ...(options && options.type === 'heritage-wall-art' ? options.options : {}),
        };

        const bgColors: Record<string, string> = {
          cream: '#F4ECE1',
          indigo: '#182B3C',
          slate: '#414B52',
          terracotta: '#863C2A',
        };

        const selectedBg = bgColors[wallOptions.backgroundColor] || bgColors.cream;
        const isDarkBg = wallOptions.backgroundColor !== 'cream';
        const frameClass =
          wallOptions.frameType === 'premium_brass'
            ? 'p-3 sm:p-4 rounded-sm border-4 sm:border-8 border-[#C5A059] shadow-xl bg-[#2a241b]'
            : 'p-3 sm:p-4 rounded-sm border-4 sm:border-8 border-[#C39A67] shadow-lg bg-[#3b2a1a]';

        return (
          <div className="relative w-full h-full flex items-center justify-center p-3 sm:p-6 bg-[#EFE9DF]/50">
            {/* Wall shadow and frame */}
            <div
              className={`relative transition-all duration-300 w-full max-w-[280px] sm:max-w-[320px] max-h-[92%] flex items-center justify-center ${frameClass}`}
              style={{
                aspectRatio:
                  wallOptions.size === '30x40'
                    ? '3/4'
                    : wallOptions.size === '40x60'
                    ? '2/3'
                    : '5/7',
              }}
            >
              {/* Inner matboard / canvas */}
              <div
                className="w-full h-full relative overflow-hidden transition-colors duration-300 shadow-inner flex flex-col justify-center"
                style={{ backgroundColor: selectedBg }}
              >
                {/* Subtle linen texture weave */}
                <div
                  className="absolute inset-0 pointer-events-none opacity-20"
                  style={{
                    backgroundImage:
                      'radial-gradient(#000 0.75px, transparent 0.75px), radial-gradient(#fff 0.75px, transparent 0.75px)',
                    backgroundSize: '8px 8px',
                    backgroundPosition: '0 0, 4px 4px',
                  }}
                />

                {/* Brocade Accent Placement */}
                {wallOptions.brocadePosition === 'center' && (
                  <div className="mx-auto w-24 h-24 sm:w-32 sm:h-32 shadow-md border-2 border-white/40 overflow-hidden relative z-10 transition-transform">
                    <HmongIndigoSpiralPattern />
                  </div>
                )}

                {wallOptions.brocadePosition === 'asymmetric' && (
                  <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 w-20 h-20 sm:w-28 sm:h-28 shadow-md border-2 border-white/40 overflow-hidden z-10">
                    <ThaiRhombusPattern />
                  </div>
                )}

                {wallOptions.brocadePosition === 'horizontal_stripe' && (
                  <div className="w-full h-14 sm:h-20 shadow-sm border-y-2 border-white/30 overflow-hidden z-10 my-auto">
                    <ThaiRhombusPattern />
                  </div>
                )}

                {/* Craft authenticity label mark */}
                <div
                  className={`absolute bottom-2 left-2 text-[8px] sm:text-[9px] uppercase tracking-widest font-mono z-10 ${
                    isDarkBg ? 'text-amber-200/70' : 'text-stone-600/70'
                  }`}
                >
                  Dệt Sắc Việt · {wallOptions.size || '40x60'}
                </div>
              </div>
            </div>
          </div>
        );
      }

      case 'the-heritage-clutch': {
        const clutchOptions = {
          bodyColor: 'deep_indigo' as const,
          brocadePattern: 'hmong_indigo_spiral' as const,
          hardwareColor: 'antique_brass' as const,
          monogramText: '',
          miniSymbol: 'none' as const,
          ...(options && options.type === 'the-heritage-clutch' ? options.options : {}),
        };

        const bodyColors: Record<string, string> = {
          graphite: '#202224',
          deep_indigo: '#182C40',
          warm_cognac: '#6E3A1A',
          sand_cream: '#D6C8B4',
        };

        const hardwareGradients: Record<string, string> = {
          antique_brass: 'bg-gradient-to-r from-[#8F6B32] via-[#C9A25D] to-[#7D5A27]',
          matte_gold: 'bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#C59B27]',
          smoked_silver: 'bg-gradient-to-r from-[#717882] via-[#A8B0BC] to-[#606771]',
        };

        const selectedBody = bodyColors[clutchOptions.bodyColor] || bodyColors.deep_indigo;
        const selectedHardware = hardwareGradients[clutchOptions.hardwareColor] || hardwareGradients.antique_brass;

        return (
          <div className="relative w-full h-full flex items-center justify-center p-3 sm:p-6 bg-[#EBE4D8]/50">
            {/* Proportional Clutch Envelope Silhouette */}
            <div className="relative w-full max-w-[320px] sm:max-w-[360px] aspect-[16/10] rounded-xl shadow-2xl overflow-hidden transition-all flex flex-col justify-between border border-black/15">
              {/* Clutch Body Base */}
              <div
                className="absolute inset-0 transition-colors duration-300"
                style={{ backgroundColor: selectedBody }}
              />

              {/* Envelope Flap angled top */}
              <div className="relative z-10 w-full h-[44%] border-b border-black/20 overflow-hidden shadow-sm flex-shrink-0">
                <div
                  className="w-full h-full relative"
                  style={{
                    backgroundColor: selectedBody,
                    filter: 'brightness(1.08)',
                    clipPath: 'polygon(0 0, 100% 0, 100% 65%, 50% 100%, 0 65%)',
                  }}
                >
                  {/* Flap Stitching Line */}
                  <div
                    className="absolute inset-x-2 top-2 bottom-3 pointer-events-none opacity-40 border-dashed border-amber-100"
                    style={{
                      clipPath: 'polygon(0 0, 100% 0, 100% 65%, 50% 100%, 0 65%)',
                    }}
                  />
                  {/* Metal lock clasp on the tip */}
                  <div
                    className={`absolute bottom-0.5 left-1/2 -translate-x-1/2 w-6 h-4 sm:w-7 sm:h-5 rounded-xs shadow-md border border-black/30 ${selectedHardware}`}
                  />
                </div>
              </div>

              {/* Brocade Accent Band across front */}
              <div className="relative z-10 w-full h-[32%] shadow-inner border-y border-black/30 overflow-hidden my-auto flex-shrink-0">
                {clutchOptions.brocadePattern === 'thai_rhombus_diamond' ? (
                  <ThaiRhombusPattern />
                ) : clutchOptions.brocadePattern === 'dao_red_pine' ? (
                  <DaoRedPinePattern />
                ) : (
                  <HmongIndigoSpiralPattern />
                )}
              </div>

              {/* Lower Section: Monogram & Mini Embroidered Emblem */}
              <div className="relative z-10 w-full h-[24%] px-3 sm:px-4 flex items-center justify-between flex-shrink-0 bg-black/10">
                {/* Monogram tag */}
                <div className="flex items-center gap-1.5">
                  {clutchOptions.monogramText ? (
                    <div className="px-2 py-0.5 rounded-sm bg-black/50 border border-amber-400/80 text-amber-200 text-[11px] sm:text-xs font-serif font-bold tracking-widest uppercase shadow-sm">
                      {clutchOptions.monogramText}
                    </div>
                  ) : (
                    <div className="text-[9px] sm:text-[10px] text-amber-100/60 uppercase tracking-widest font-mono">
                      Dệt Sắc Việt
                    </div>
                  )}
                </div>

                {/* Embroidered Symbol */}
                {clutchOptions.miniSymbol && clutchOptions.miniSymbol !== 'none' && (
                  <div className="p-1 rounded-full bg-black/30 border border-amber-300/50 flex items-center justify-center">
                    <EmbroideredSymbol symbol={clutchOptions.miniSymbol} size={18} color="#F59E0B" />
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      }

      case 'the-story-scarf': {
        const scarfOptions = {
          baseColor: 'ivory_silk' as const,
          borderColor: 'indigo_rolled' as const,
          motifStyle: 'van_phuc_subtle' as const,
          monogramText: '',
          miniSymbol: 'none' as const,
          ...(options && options.type === 'the-story-scarf' ? options.options : {}),
        };

        const silkTints: Record<string, string> = {
          ivory_silk: '#F9F5EC',
          coral_blush: '#F3D2C9',
          jade_teal: '#1B474C',
          saffron_gold: '#E5A93D',
        };

        const borderTints: Record<string, string> = {
          indigo_rolled: '#172738',
          rhododendron_red: '#8E1D2A',
          gilded_amber: '#B57B23',
        };

        const selectedSilk = silkTints[scarfOptions.baseColor] || silkTints.ivory_silk;
        const selectedBorder = borderTints[scarfOptions.borderColor] || borderTints.indigo_rolled;
        const isDarkSilk = scarfOptions.baseColor === 'jade_teal';

        return (
          <div className="relative w-full h-full flex items-center justify-center p-3 sm:p-6 bg-[#EBE5DB]/50">
            {/* Scarf draped square */}
            <div
              className="relative w-full max-w-[270px] sm:max-w-[310px] aspect-square rounded-sm shadow-2xl overflow-hidden transition-all border-4 sm:border-[6px] flex flex-col justify-between"
              style={{
                backgroundColor: selectedSilk,
                borderColor: selectedBorder,
              }}
            >
              {/* Silk Lustre Sheen Overlay */}
              <div
                className="absolute inset-0 pointer-events-none opacity-40 mix-blend-soft-light"
                style={{
                  background:
                    'linear-gradient(135deg, rgba(255,255,255,0.85) 0%, transparent 40%, rgba(255,255,255,0.45) 70%, transparent 100%)',
                }}
              />

              {/* Silk Motif Center */}
              <div className="absolute inset-4 sm:inset-6 flex items-center justify-center">
                {scarfOptions.motifStyle === 'ly_dynasty_wave' ? (
                  <div className="w-full h-full flex items-center justify-center p-4">
                    <svg viewBox="0 0 100 100" className="w-full h-full opacity-35 stroke-current text-amber-500 fill-none" strokeWidth="2">
                      <path d="M10,50 Q25,20 50,50 T90,50" />
                      <path d="M10,65 Q25,35 50,65 T90,65" />
                      <path d="M10,35 Q25,5 50,35 T90,35" />
                      <circle cx="50" cy="50" r="18" strokeDasharray="3 2" />
                    </svg>
                  </div>
                ) : scarfOptions.motifStyle === 'brocade_silk_border' ? (
                  <div className="w-full h-full p-2 border-2 border-dashed border-amber-600/40 rounded-sm flex items-center justify-center">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 opacity-40">
                      <ThaiRhombusPattern />
                    </div>
                  </div>
                ) : (
                  <div className={`w-full h-full ${isDarkSilk ? 'text-white' : 'text-stone-800'}`}>
                    <VanPhucCloudJacquard tint={selectedSilk} />
                  </div>
                )}
              </div>

              {/* Corner Roll Hem mark and monogram */}
              <div className="absolute bottom-2.5 right-2.5 sm:bottom-3 sm:right-3 flex flex-col items-end gap-1 z-10">
                {scarfOptions.monogramText && (
                  <span
                    className={`font-serif text-xs sm:text-sm font-semibold tracking-widest border-b pb-0.5 ${
                      isDarkSilk ? 'text-amber-300 border-amber-300/60' : 'text-stone-800 border-stone-800/60'
                    }`}
                  >
                    {scarfOptions.monogramText}
                  </span>
                )}
                {scarfOptions.miniSymbol && scarfOptions.miniSymbol !== 'none' && (
                  <EmbroideredSymbol
                    symbol={scarfOptions.miniSymbol}
                    size={20}
                    color={isDarkSilk ? '#FBBF24' : '#B45309'}
                  />
                )}
              </div>

              <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 text-[8px] sm:text-[9px] uppercase tracking-widest font-mono opacity-50 z-10">
                Lụa Tơ Tằm Bảo Lộc
              </div>
            </div>
          </div>
        );
      }

      case 'the-mini-twilly': {
        const twillyOptions = {
          dualColorway: 'indigo_and_ivory' as const,
          motifPattern: 'geometric_rhombus' as const,
          monogramText: '',
          miniSymbol: 'none' as const,
          ...(options && options.type === 'the-mini-twilly' ? options.options : {}),
        };

        const colorsMap: Record<string, { tip: string; body: string; text: string }> = {
          indigo_and_ivory: { tip: '#182C40', body: '#F6F2E9', text: '#2C2825' },
          crimson_and_cream: { tip: '#8A1F2D', body: '#EAE1D2', text: '#2C2825' },
          saffron_and_slate: { tip: '#D48928', body: '#424C54', text: '#FAF7F2' },
        };

        const colors = colorsMap[twillyOptions.dualColorway] || colorsMap.indigo_and_ivory;

        return (
          <div className="relative w-full h-full flex items-center justify-center p-3 sm:p-6 bg-[#EDE7DD]/50">
            {/* Flowing Angled Twilly Ribbon */}
            <div className="relative w-full max-w-[340px] sm:max-w-[380px] h-20 sm:h-24 flex items-center shadow-xl rounded-sm overflow-hidden rotate-[-3deg] border border-black/10">
              {/* Left Angled Tip */}
              <div
                className="w-14 sm:w-16 h-full flex-shrink-0 relative overflow-hidden"
                style={{
                  backgroundColor: colors.tip,
                  clipPath: 'polygon(0 0, 100% 0, 75% 100%, 0 100%)',
                }}
              >
                <div className="absolute inset-0 opacity-30">
                  <ThaiRhombusPattern />
                </div>
              </div>

              {/* Main Ribbon Body */}
              <div
                className="flex-grow h-full relative flex items-center justify-between px-3 sm:px-4 transition-colors"
                style={{ backgroundColor: colors.body, color: colors.text }}
              >
                {/* Ribbon Motif Accent */}
                <div className="flex items-center gap-2 sm:gap-3 opacity-70">
                  {twillyOptions.motifPattern === 'batik_floral' ? (
                    <div className="w-7 h-7 sm:w-8 sm:h-8 opacity-60">
                      <HmongIndigoSpiralPattern />
                    </div>
                  ) : twillyOptions.motifPattern === 'flowing_silk' ? (
                    <div className="flex flex-col gap-1 w-16 sm:w-20">
                      <div className="h-0.5 w-full bg-amber-600/50" />
                      <div className="h-0.5 w-3/4 bg-amber-600/50" />
                      <div className="h-0.5 w-1/2 bg-amber-600/50" />
                    </div>
                  ) : (
                    <div className="flex gap-1.5 sm:gap-2">
                      <div className="w-4 h-4 sm:w-5 sm:h-5 rotate-45 border border-amber-600 bg-amber-600/20" />
                      <div className="w-4 h-4 sm:w-5 sm:h-5 rotate-45 border border-amber-600 bg-amber-600/20" />
                      <div className="w-4 h-4 sm:w-5 sm:h-5 rotate-45 border border-amber-600 bg-amber-600/20" />
                    </div>
                  )}
                </div>

                {/* Monogram and Symbol */}
                <div className="flex items-center gap-2">
                  {twillyOptions.monogramText && (
                    <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full border border-current flex items-center justify-center font-serif text-xs sm:text-sm font-bold">
                      {twillyOptions.monogramText.toUpperCase()}
                    </div>
                  )}
                  {twillyOptions.miniSymbol && twillyOptions.miniSymbol !== 'none' && (
                    <EmbroideredSymbol symbol={twillyOptions.miniSymbol} size={18} color="#D97706" />
                  )}
                </div>
              </div>

              {/* Right Angled Tip */}
              <div
                className="w-14 sm:w-16 h-full flex-shrink-0 relative overflow-hidden"
                style={{
                  backgroundColor: colors.tip,
                  clipPath: 'polygon(25% 0, 100% 0, 100% 100%, 0 100%)',
                }}
              >
                <div className="absolute inset-0 opacity-30">
                  <ThaiRhombusPattern />
                </div>
              </div>
            </div>
          </div>
        );
      }

      default: {
        return (
          <div className="w-full h-full flex items-center justify-center bg-[#FAF7F2] p-4 text-xs font-mono text-stone-500">
            Dệt Sắc Việt Studio
          </div>
        );
      }
    }
  };

  return (
    <div className={`relative overflow-hidden rounded-lg bg-[#FAF7F2] border border-[#E8DEC8] ${sizeClass}`}>
      {renderPreview()}

      {showCaption && (
        <div className="absolute top-3 right-3 bg-stone-900/85 backdrop-blur-sm text-[#F7F3EB] text-[10px] tracking-wider px-2.5 py-1 rounded-sm uppercase font-mono z-20 flex items-center gap-1.5 shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
          Bản xem trước trực quan
        </div>
      )}
    </div>
  );
};
