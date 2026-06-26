import { useEffect, useState } from 'react';
import { pricingStore } from '../../../utils/PricingStore';
import { pricingMatrix, ANNUAL_DISCOUNT } from '../../../tokens/pricing';
import { useNumberCounter } from '../../../hooks/useNumberCounter';

interface IsolatedPriceProps {
  tierId: string;
}

export function IsolatedPrice({ tierId }: IsolatedPriceProps) {
  // Local state to trigger re-renders only on store updates
  const [, setTick] = useState(0);

  useEffect(() => {
    // Subscribe directly to pricing store updates
    const unsubscribe = pricingStore.subscribe(() => {
      setTick((t) => t + 1);
    });
    return unsubscribe;
  }, []);

  const currency = pricingStore.getCurrency();
  const billing = pricingStore.getBilling();

  const tier = pricingMatrix.find((t) => t.id === tierId);
  if (!tier) return null;

  const priceConfig = tier.basePrice[currency];
  let finalPrice = priceConfig.value;

  if (billing === 'annual') {
    finalPrice = Math.round(finalPrice * (1 - ANNUAL_DISCOUNT));
  }

  // Connect count up animation (only updates this component during ticking)
  const { count, ref } = useNumberCounter(finalPrice, { duration: 500 });

  return (
    <span className="flex items-center">
      <span className="mr-1">{priceConfig.symbol}</span>
      <span ref={priceRefCallback(ref)} className="font-mono">
        {count.toLocaleString()}
      </span>
    </span>
  );
}

// Helper to handle ref callback safely
function priceRefCallback(ref: React.RefObject<HTMLElement | null>) {
  return (node: HTMLElement | null) => {
    if (ref) {
      (ref as any).current = node;
    }
  };
}
