import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import ProductInput from '@/components/ProductInput';
import PriceComparisonTable from '@/components/PriceComparisonTable';
import ReceiptScanner from '@/components/ReceiptScanner';
import PostalCodeInput from '@/components/PostalCodeInput';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, ShoppingCart, Calculator, Receipt } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const GrocerySaver = () => {
  const [products, setProducts] = useState<string[]>([]);
  const [postalCode, setPostalCode] = useState<string | null>(null);
  const { toast } = useToast();

  const handlePostalCodeConfirmed = (code: string) => {
    setPostalCode(code);
    toast({
      title: "Postal Code Confirmed",
      description: `Set to ${code}. You can now add products!`,
    });
  };

  const handleAddProduct = (productName: string) => {
    if (!products.includes(productName)) {
      setProducts(prev => [...prev, productName]);
      toast({
        title: "Product Added",
        description: `${productName} has been added to your basket.`,
      });
    } else {
      toast({
        title: "Product Already Added",
        description: `${productName} is already in your basket.`,
        variant: "destructive",
      });
    }
  };

  const handleProductsExtracted = (extractedProducts: string[]) => {
    const newProducts = extractedProducts.filter(product => !products.includes(product));
    setProducts(prev => [...prev, ...newProducts]);
    toast({
      title: "Receipt Processed",
      description: `Added ${newProducts.length} new products from your receipt.`,
    });
  };

  const handleRemoveProduct = (productName: string) => {
    setProducts(prev => prev.filter(p => p !== productName));
    toast({
      title: "Product Removed",
      description: `${productName} has been removed from your basket.`,
    });
  };

  const isDisabled = !postalCode;

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30">
      <div className="mb-4 p-4 bg-muted/50 border-b">
        <div className="container mx-auto">
          <Link to="/">
            <Button variant="outline" size="sm">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Terrene Tech
            </Button>
          </Link>
        </div>
      </div>
      
      <Header />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Compare Grocery Prices Across UK Supermarkets
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find the best deals on your shopping list by comparing prices from Tesco, Sainsbury's, and Asda.
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-8">
          {/* Input Section */}
          <div className="bg-card rounded-2xl border border-border/50 p-6 shadow-sm">
            <PostalCodeInput
              onPostalCodeConfirmed={handlePostalCodeConfirmed}
              confirmedPostalCode={postalCode}
            />

            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <ProductInput
                onAddProduct={handleAddProduct}
                disabled={isDisabled}
              />
              <ReceiptScanner
                onProductsExtracted={handleProductsExtracted}
                disabled={isDisabled}
              />
            </div>
          </div>

          {/* Comparison Table */}
          <div className="bg-card rounded-2xl border border-border/50 shadow-sm">
            <PriceComparisonTable
              products={products}
              onRemoveProduct={handleRemoveProduct}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default GrocerySaver;