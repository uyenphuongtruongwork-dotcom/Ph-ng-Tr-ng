export type Language = 'vi' | 'en' | 'fr' | 'ko' | 'ja' | 'zh';

export type ProductId = 
  | 'heritage-wall-art' 
  | 'the-heritage-clutch' 
  | 'the-story-scarf' 
  | 'the-mini-twilly';

export type MaterialCategory = 'brocade_linen' | 'silk' | 'hybrid';
export type PurposeCategory = 'decor' | 'daily_accessories' | 'silk_fashion';
export type GiftTypeCategory = 'housewarming' | 'international' | 'personal_loved';

export interface ProductDefinition {
  id: ProductId;
  basePrice: number; // in VND
  materialCategory: MaterialCategory;
  purposeCategory: PurposeCategory;
  giftType: GiftTypeCategory;
  imageFallbackAlt: string;
}

export interface WallArtCustomOptions {
  size: '30x40' | '40x60' | '50x70';
  backgroundColor: 'cream' | 'indigo' | 'slate' | 'terracotta';
  brocadePosition: 'center' | 'asymmetric' | 'horizontal_stripe';
  frameType: 'oak_natural' | 'premium_brass'; // premium_brass is +150,000 VND
}

export interface ClutchCustomOptions {
  bodyColor: 'graphite' | 'deep_indigo' | 'warm_cognac' | 'sand_cream';
  brocadePattern: 'hmong_indigo_spiral' | 'thai_rhombus_diamond' | 'dao_red_pine';
  hardwareColor: 'antique_brass' | 'matte_gold' | 'smoked_silver';
  monogramText: string; // +50,000 VND if non-empty
  miniSymbol: 'none' | 'crane' | 'lotus' | 'mountain_cloud'; // +100,000 VND if not 'none'
}

export interface ScarfCustomOptions {
  baseColor: 'ivory_silk' | 'coral_blush' | 'jade_teal' | 'saffron_gold';
  borderColor: 'indigo_rolled' | 'rhododendron_red' | 'gilded_amber';
  motifStyle: 'van_phuc_subtle' | 'ly_dynasty_wave' | 'brocade_silk_border';
  monogramText: string; // +50,000 VND if non-empty
  miniSymbol: 'none' | 'crane' | 'lotus' | 'mountain_cloud'; // +100,000 VND if not 'none'
}

export interface TwillyCustomOptions {
  dualColorway: 'indigo_and_ivory' | 'crimson_and_cream' | 'saffron_and_slate';
  motifPattern: 'geometric_rhombus' | 'batik_floral' | 'flowing_silk';
  monogramText: string; // +50,000 VND if non-empty
  miniSymbol: 'none' | 'crane' | 'lotus' | 'mountain_cloud'; // +100,000 VND if not 'none'
}

export type CustomOptions = 
  | { type: 'heritage-wall-art'; options: WallArtCustomOptions }
  | { type: 'the-heritage-clutch'; options: ClutchCustomOptions }
  | { type: 'the-story-scarf'; options: ScarfCustomOptions }
  | { type: 'the-mini-twilly'; options: TwillyCustomOptions };

export interface CartItem {
  cartItemId: string;
  productId: ProductId;
  productName: string;
  basePrice: number;
  addonsTotal: number;
  totalPrice: number;
  customOptions: CustomOptions;
  quantity: number;
  summaryText: string;
}

export interface CurrencyRate {
  code: string;
  symbol: string;
  ratePerVnd: number; // e.g. 1 / 25450 for USD
  decimals: number;
  sourceNote: string;
}
