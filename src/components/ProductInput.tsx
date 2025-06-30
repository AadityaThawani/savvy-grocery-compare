
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { suggestProducts } from '@/services/aiService';

interface ProductInputProps {
  onAddProduct: (productName: string) => void;
  disabled: boolean;
}

const ProductInput = ({ onAddProduct, disabled }: ProductInputProps) => {
  const [productName, setProductName] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    if (productName.length > 2 && !disabled) {
      const timeoutId = setTimeout(async () => {
        try {
          const suggestions = await suggestProducts(productName);
          setSuggestions(suggestions);
          setShowSuggestions(true);
        } catch (error) {
          console.error('Error fetching suggestions:', error);
        }
      }, 300);

      return () => clearTimeout(timeoutId);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }, [productName, disabled]);

  const handleAddProduct = (name: string) => {
    onAddProduct(name);
    setProductName('');
    setShowSuggestions(false);
  };

  const handleSuggestionClick = (suggestion: string) => {
    handleAddProduct(suggestion);
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
            {showSuggestions && suggestions.length > 0 && (
              <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-md shadow-lg z-10 mt-1">
                {suggestions.map((suggestion, index) => (
                  <button
                    key={index}
                    className="w-full text-left px-4 py-2 hover:bg-accent hover:text-accent-foreground transition-colors"
                    onClick={() => handleSuggestionClick(suggestion)}
                  >
                    {suggestion}
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
