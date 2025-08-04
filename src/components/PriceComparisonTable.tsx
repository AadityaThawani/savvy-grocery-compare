
import { useState, useEffect } from 'react';
import { Trash2, ShoppingBasket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { fetchPrice } from '@/services/fetchPrice';

interface PriceData {
  tesco: number | null;
  sainsburys: number | null;
  asda: number | null;
}

interface PriceComparisonTableProps {
  products: string[];
  onRemoveProduct: (productName: string) => void;
}

const PriceComparisonTable = ({ products, onRemoveProduct }: PriceComparisonTableProps) => {
  const [priceData, setPriceData] = useState<Record<string, PriceData>>({});
  const [loading, setLoading] = useState<Record<string, boolean>>({});

  useEffect(() => {
    products.forEach(product => {
      if (!priceData[product]) {
        fetchPricesForProduct(product);
      }
    });
  }, [products]);

  const fetchPricesForProduct = async (productName: string) => {
    setLoading(prev => ({ ...prev, [productName]: true }));
    
    try {
      const [tesco, sainsburys, asda] = await Promise.all([
        fetchPrice(productName, 'tesco'),
        fetchPrice(productName, 'sainsburys'),
        fetchPrice(productName, 'asda')
      ]);

      setPriceData(prev => ({
        ...prev,
        [productName]: { tesco, sainsburys, asda }
      }));
    } catch (error) {
      console.error('Error fetching prices for', productName, error);
    } finally {
      setLoading(prev => ({ ...prev, [productName]: false }));
    }
  };

  const getCheapestPrice = (productName: string) => {
    const data = priceData[productName];
    if (!data || data.tesco === null || data.sainsburys === null || data.asda === null) return null;

    const prices = [
      { store: 'tesco', price: data.tesco },
      { store: 'sainsburys', price: data.sainsburys },
      { store: 'asda', price: data.asda }
    ];

    return prices.reduce((min, current) => 
      current.price < min.price ? current : min
    );
  };

  const calculateTotal = (store: 'tesco' | 'sainsburys' | 'asda') => {
    return products.reduce((total, product) => {
      const data = priceData[product];
      if (data && data[store] !== null) {
        return total + data[store]!;
      }
      return total;
    }, 0);
  };

  if (products.length === 0) {
    return (
      <Card>
        <CardContent className="flex flex-col items-center justify-center py-12">
          <ShoppingBasket className="h-16 w-16 text-muted-foreground mb-4" />
          <p className="text-lg text-muted-foreground">Your basket is empty</p>
          <p className="text-sm text-muted-foreground mt-2">Add products to compare prices</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Price Comparison</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Product</TableHead>
              <TableHead>Tesco</TableHead>
              <TableHead>Sainsbury's</TableHead>
              <TableHead>Asda</TableHead>
              <TableHead className="w-[50px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product) => {
              const data = priceData[product];
              const cheapest = getCheapestPrice(product);
              const isLoading = loading[product];

              return (
                <TableRow key={product}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <img
                        src="/placeholder.svg"
                        alt={product}
                        className="w-12 h-12 object-cover rounded"
                      />
                      <span className="font-medium">{product}</span>
                    </div>
                  </TableCell>
                  <TableCell className={cheapest?.store === 'tesco' ? 'text-accent font-bold' : ''}>
                    {isLoading ? 'Loading...' : (data?.tesco !== null && data?.tesco !== undefined) ? `£${data.tesco.toFixed(2)}` : '-'}
                  </TableCell>
                  <TableCell className={cheapest?.store === 'sainsburys' ? 'text-accent font-bold' : ''}>
                    {isLoading ? 'Loading...' : (data?.sainsburys !== null && data?.sainsburys !== undefined) ? `£${data.sainsburys.toFixed(2)}` : '-'}
                  </TableCell>
                  <TableCell className={cheapest?.store === 'asda' ? 'text-accent font-bold' : ''}>
                    {isLoading ? 'Loading...' : (data?.asda !== null && data?.asda !== undefined) ? `£${data.asda.toFixed(2)}` : '-'}
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => onRemoveProduct(product)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
        
        <div className="mt-6 pt-4 border-t">
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <p className="font-semibold text-lg">Tesco Total</p>
              <p className="text-2xl font-bold">£{calculateTotal('tesco').toFixed(2)}</p>
            </div>
            <div className="text-center">
              <p className="font-semibold text-lg">Sainsbury's Total</p>
              <p className="text-2xl font-bold">£{calculateTotal('sainsburys').toFixed(2)}</p>
            </div>
            <div className="text-center">
              <p className="font-semibold text-lg">Asda Total</p>
              <p className="text-2xl font-bold">£{calculateTotal('asda').toFixed(2)}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PriceComparisonTable;
