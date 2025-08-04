
import { useState } from 'react';
import Header from '@/components/Header';
import PostalCodeInput from '@/components/PostalCodeInput';
import ProductInput from '@/components/ProductInput';
import ReceiptScanner from '@/components/ReceiptScanner';
import PriceComparisonTable from '@/components/PriceComparisonTable';
import { ViewCounter } from '@/components/ViewCounter';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [postalCode, setPostalCode] = useState<string | null>(null);
  const [products, setProducts] = useState<string[]>([]);
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
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-6xl">
        <div className="space-y-8">
          {/* Hero Section */}
          <div className="text-center py-8 relative">
            <ViewCounter className="absolute top-0 right-0" />
            <h2 className="text-3xl font-semibold text-foreground mb-3 tracking-tight">
              Compare grocery prices across stores
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Find the best deals by comparing prices from Tesco, Sainsbury's, and Asda all in one place.
            </p>
          </div>

          {/* Input Section */}
          <div className="bg-card rounded-2xl border border-border/50 p-6 shadow-sm apple-transition apple-hover">
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
          <div className="bg-card rounded-2xl border border-border/50 shadow-sm apple-transition">
            <PriceComparisonTable
              products={products}
              onRemoveProduct={handleRemoveProduct}
            />
          </div>
        </div>
      </main>
      
      <footer className="bg-card border-t border-border/50 py-8 mt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; 2024 Grocery Saver. Save money on your weekly shop.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
