export interface PriceConfig {
  value: number;
  symbol: string;
}

export interface PricingTierConfig {
  id: string;
  name: string;
  badge?: string;
  basePrice: {
    USD: PriceConfig;
    EUR: PriceConfig;
    INR: PriceConfig;
  };
  features: string[];
}

export const ANNUAL_DISCOUNT = 0.20; // 20% annual discount

export const pricingMatrix: PricingTierConfig[] = [
  {
    id: 'pro',
    name: 'AETHERIS PRO',
    badge: 'Most Selected',
    basePrice: {
      USD: { value: 2450, symbol: '$' },
      EUR: { value: 2250, symbol: '€' },
      INR: { value: 200000, symbol: '₹' },
    },
    features: [
      '100 Million Token Processing',
      'Advanced Semantic Modeling',
      '24/7 Priority Engineer Support'
    ]
  }
];
