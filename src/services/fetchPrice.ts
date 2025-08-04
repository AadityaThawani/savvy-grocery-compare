import { commonItems } from '../scrapers/commonItems';
import { getPrice as getTescoPrice } from '../scrapers/tescoScraper';
import { getPrice as getAsdaPrice } from '../scrapers/asdaScraper';
import { getPrice as getSainsburysPrice } from '../scrapers/sainsburysScraper';

interface CachedPrice {
  price: number;
  timestamp: number;
}

interface PriceCache {
  [store: string]: {
    [item: string]: CachedPrice;
  };
}

class PriceService {
  private cache: PriceCache = {};
  private readonly CACHE_DURATION = 1.5 * 24 * 60 * 60 * 1000; // 1.5 days in milliseconds

  constructor() {
    this.loadCache();
  }

  private loadCache(): void {
    try {
      const cached = localStorage.getItem('grocery_price_cache');
      if (cached) {
        this.cache = JSON.parse(cached);
      }
    } catch (error) {
      console.error('Error loading price cache:', error);
      this.cache = {};
    }
  }

  private saveCache(): void {
    try {
      localStorage.setItem('grocery_price_cache', JSON.stringify(this.cache));
    } catch (error) {
      console.error('Error saving price cache:', error);
    }
  }

  private isCacheValid(timestamp: number): boolean {
    return Date.now() - timestamp < this.CACHE_DURATION;
  }

  private getCachedPrice(store: string, item: string): number | null {
    const storeCache = this.cache[store];
    if (!storeCache) return null;
    
    const cachedItem = storeCache[item.toLowerCase()];
    if (!cachedItem) return null;
    
    if (!this.isCacheValid(cachedItem.timestamp)) {
      // Cache expired, remove it
      delete storeCache[item.toLowerCase()];
      this.saveCache();
      return null;
    }
    
    return cachedItem.price;
  }

  private setCachedPrice(store: string, item: string, price: number): void {
    if (!this.cache[store]) {
      this.cache[store] = {};
    }
    
    this.cache[store][item.toLowerCase()] = {
      price,
      timestamp: Date.now()
    };
    
    this.saveCache();
  }

  private generateRandomPrice(): number {
    // Generate random price between £2-£6
    return parseFloat((Math.random() * 4 + 2).toFixed(2));
  }

  async fetchPrice(item: string, store: 'tesco' | 'asda' | 'sainsburys'): Promise<number> {
    const normalizedItem = item.toLowerCase();
    
    // Check cache first
    const cachedPrice = this.getCachedPrice(store, normalizedItem);
    if (cachedPrice !== null) {
      return cachedPrice;
    }

    let price: number;

    // Check if item is in common items list
    if (commonItems.includes(normalizedItem)) {
      try {
        let scrapedPrice: number | null = null;
        
        switch (store) {
          case 'tesco':
            scrapedPrice = await getTescoPrice(normalizedItem);
            break;
          case 'asda':
            scrapedPrice = await getAsdaPrice(normalizedItem);
            break;
          case 'sainsburys':
            scrapedPrice = await getSainsburysPrice(normalizedItem);
            break;
        }

        price = scrapedPrice ?? this.generateRandomPrice();
      } catch (error) {
        console.error(`Error fetching price for ${item} from ${store}:`, error);
        price = this.generateRandomPrice();
      }
    } else {
      // Generate random price for items not in common list
      price = this.generateRandomPrice();
    }

    // Cache the result
    this.setCachedPrice(store, normalizedItem, price);
    
    return price;
  }

  // Method to clear cache manually if needed
  clearCache(): void {
    this.cache = {};
    localStorage.removeItem('grocery_price_cache');
  }

  // Method to get cache stats
  getCacheStats(): { totalItems: number; stores: string[] } {
    const stores = Object.keys(this.cache);
    const totalItems = stores.reduce((total, store) => {
      return total + Object.keys(this.cache[store] || {}).length;
    }, 0);
    
    return { totalItems, stores };
  }
}

// Export singleton instance
export const priceService = new PriceService();

// Export convenience function
export async function fetchPrice(item: string, store: 'tesco' | 'asda' | 'sainsburys'): Promise<number> {
  return priceService.fetchPrice(item, store);
}