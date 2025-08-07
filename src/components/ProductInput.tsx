
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getProductSuggestions as getTescoSuggestions } from '@/scrapers/tescoScraper';
import { getProductSuggestions as getAsdaSuggestions } from '@/scrapers/asdaScraper';
import { getProductSuggestions as getSainsburysSuggestions } from '@/scrapers/sainsburysScraper';

interface ProductInputProps {
  onAddProduct: (productName: string) => void;
  disabled: boolean;
}

interface StoreProduct {
  name: string;
  price: number;
  store: string;
}

const ProductInput = ({ onAddProduct, disabled }: ProductInputProps) => {
  const [productName, setProductName] = useState('');
  const [storeProducts, setStoreProducts] = useState<StoreProduct[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (productName.length > 2 && !disabled) {
      const timeoutId = setTimeout(async () => {
        setLoading(true);
        try {
          // Fetch product suggestions from all three stores
          const [tescoSuggestions, asdaSuggestions, sainsburysSuggestions] = await Promise.all([
            getTescoSuggestions(productName),
            getAsdaSuggestions(productName),
            getSainsburysSuggestions(productName)
          ]);

          // Combine all suggestions
          const allSuggestions = [
            ...tescoSuggestions,
            ...asdaSuggestions,
            ...sainsburysSuggestions
          ];

          // Convert to StoreProduct format
          const products: StoreProduct[] = allSuggestions.map(suggestion => ({
            name: suggestion.name,
            price: suggestion.price,
            store: suggestion.store
          }));

          setStoreProducts(products);
          setShowSuggestions(true);
        } catch (error) {
          console.error('Error fetching product suggestions:', error);
        } finally {
          setLoading(false);
        }
      }, 300);

      return () => clearTimeout(timeoutId);
    } else {
      setStoreProducts([]);
      setShowSuggestions(false);
    }
  }, [productName, disabled]);

  const handleAddProduct = (name: string) => {
    onAddProduct(name);
    setProductName('');
    setShowSuggestions(false);
  };

  const handleSuggestionClick = (suggestion: StoreProduct) => {
    handleAddProduct(suggestion.name);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Add Product</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="relative">
            <Input
              placeholder="Enter product name (e.g. Hovis Bread)"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              disabled={disabled}
              className="w-full"
            />
            {showSuggestions && storeProducts.length > 0 && (
              <div className="absolute top-full left-0 right-0 bg-card border border-border rounded-md shadow-lg z-50 mt-1 max-h-64 overflow-y-auto">
                {loading && (
                  <div className="px-4 py-2 text-sm text-muted-foreground">
                    Loading products...
                  </div>
                )}
                {!loading && storeProducts.map((product, index) => (
                  <button
                    key={index}
                    className="w-full text-left px-4 py-3 hover:bg-accent hover:text-accent-foreground transition-colors border-b border-border/50 last:border-b-0 apple-transition"
                    onClick={() => handleSuggestionClick(product)}
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="font-medium text-sm">{product.name}</div>
                        <div className="text-xs text-muted-foreground">Available at {product.store}</div>
                      </div>
                      <div className="text-sm font-semibold text-primary">
                        £{product.price.toFixed(2)}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
          <Button
            onClick={() => handleAddProduct(productName)}
            disabled={disabled || !productName.trim()}
            className="w-full"
          >
            Add Manually
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductInput;
