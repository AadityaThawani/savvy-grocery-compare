
import { useState } from 'react';
import Header from '@/components/Header';
import PostalCodeInput from '@/components/PostalCodeInput';
import ProductInput from '@/components/ProductInput';
import ReceiptScanner from '@/components/ReceiptScanner';
import PriceComparisonTable from '@/components/PriceComparisonTable';
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
      
      <main className="container mx-auto px-6 py-8 space-y-6">
        <PostalCodeInput
          onPostalCodeConfirmed={handlePostalCodeConfirmed}
          confirmedPostalCode={postalCode}
        />

        <div className="grid md:grid-cols-2 gap-6">
          <ProductInput
            onAddProduct={handleAddProduct}
            disabled={isDisabled}
          />
          <ReceiptScanner
            onProductsExtracted={handleProductsExtracted}
            disabled={isDisabled}
          />
        </div>

        <PriceComparisonTable
          products={products}
          onRemoveProduct={handleRemoveProduct}
        />
      </main>
      
      <footer className="bg-card border-t py-6 mt-12">
        <div className="container mx-auto px-6 text-center text-muted-foreground">
          <p>&copy; 2024 Grocery Saver. Save money on your weekly shop.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
