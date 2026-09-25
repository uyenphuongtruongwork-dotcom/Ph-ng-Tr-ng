import { ProductDefinition, ProductId } from '../types';

export const PRODUCTS_LIST: ProductDefinition[] = [
  {
    id: 'heritage-wall-art',
    basePrice: 890000,
    materialCategory: 'brocade_linen',
    purposeCategory: 'decor',
    giftType: 'housewarming',
    imageFallbackAlt: 'Heritage Wall Art - Vietnamese Brocade on Canvas',
  },
  {
    id: 'the-heritage-clutch',
    basePrice: 690000,
    materialCategory: 'hybrid',
    purposeCategory: 'daily_accessories',
    giftType: 'international',
    imageFallbackAlt: 'The Heritage Clutch - Brocade Accent Bag',
  },
  {
    id: 'the-story-scarf',
    basePrice: 1290000,
    materialCategory: 'silk',
    purposeCategory: 'silk_fashion',
    giftType: 'personal_loved',
    imageFallbackAlt: 'The Story Scarf - Handcrafted Vietnamese Mulberry Silk',
  },
  {
    id: 'the-mini-twilly',
    basePrice: 390000,
    materialCategory: 'silk',
    purposeCategory: 'daily_accessories',
    giftType: 'personal_loved',
    imageFallbackAlt: 'The Mini Twilly - Versatile Mulberry Silk Ribbon',
  },
];

export const getProductById = (id: ProductId): ProductDefinition => {
  const found = PRODUCTS_LIST.find((p) => p.id === id);
  return found || PRODUCTS_LIST[0];
};

export const formatVND = (amount: number): string => {
  return new Intl.NumberFormat('vi-VN').format(amount) + ' VND';
};

export const formatCurrency = (
  amountVnd: number,
  currencyCode: string,
  rateData: { symbol: string; ratePerVnd: number; decimals: number }
): string => {
  if (currencyCode === 'VND') {
    return formatVND(amountVnd);
  }
  const converted = amountVnd * rateData.ratePerVnd;
  return `${rateData.symbol}${converted.toLocaleString(undefined, {
    minimumFractionDigits: rateData.decimals,
    maximumFractionDigits: rateData.decimals,
  })}`;
};
