type PriceListener = () => void;

class PricingStore {
  private currency: 'USD' | 'EUR' | 'INR' = 'USD';
  private billing: 'monthly' | 'annual' = 'annual';
  private listeners = new Set<PriceListener>();

  subscribe(listener: PriceListener) {
    this.listeners.add(listener);
    return () => {
      this.listeners.delete(listener);
    };
  }

  setCurrency(curr: 'USD' | 'EUR' | 'INR') {
    if (this.currency !== curr) {
      this.currency = curr;
      this.notify();
    }
  }

  setBilling(bill: 'monthly' | 'annual') {
    if (this.billing !== bill) {
      this.billing = bill;
      this.notify();
    }
  }

  getCurrency() {
    return this.currency;
  }

  getBilling() {
    return this.billing;
  }

  private notify() {
    this.listeners.forEach((listener) => {
      try {
        listener();
      } catch (e) {
        console.error('Error in price subscriber:', e);
      }
    });
  }
}

export const pricingStore = new PricingStore();
export type { PricingStore };
