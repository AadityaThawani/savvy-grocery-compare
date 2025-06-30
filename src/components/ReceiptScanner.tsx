
import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Upload } from 'lucide-react';
import { extractProductsFromReceipt } from '@/services/aiService';

interface ReceiptScannerProps {
  onProductsExtracted: (products: string[]) => void;
  disabled: boolean;
}

const ReceiptScanner = ({ onProductsExtracted, disabled }: ReceiptScannerProps) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setIsProcessing(true);
    try {
      const extractedProducts = await extractProductsFromReceipt(file);
      onProductsExtracted(extractedProducts);
    } catch (error) {
      console.error('Error processing receipt:', error);
    } finally {
      setIsProcessing(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Upload Receipt</CardTitle>
      </CardHeader>
      <CardContent>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileSelect}
          className="hidden"
        />
        <Button
          onClick={handleUploadClick}
          disabled={disabled || isProcessing}
          className="w-full"
          variant="outline"
        >
          <Upload className="mr-2 h-4 w-4" />
          {isProcessing ? 'Processing Receipt...' : 'Upload Receipt'}
        </Button>
      </CardContent>
    </Card>
  );
};

export default ReceiptScanner;
