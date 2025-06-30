
export interface Product {
  name: string;
  price: number;
  image: string;
}

export async function fetchSainsburysPrice(productName: string): Promise<Product> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 900));
  
  const mockPrices: Record<string, Product> = {
    'hovis bread': { name: 'Hovis Medium White Thick Sliced Bread 800g', price: 1.30, image: '/placeholder.svg' },
    'bread': { name: 'Hovis Medium White Thick Sliced Bread 800g', price: 1.30, image: '/placeholder.svg' },
    'white bread': { name: 'Hovis Medium White Thick Sliced Bread 800g', price: 1.30, image: '/placeholder.svg' },
    'milk': { name: 'Sainsbury\'s British Semi-Skimmed Milk 2 Pints 1.136L', price: 1.40, image: '/placeholder.svg' },
    'semi skimmed milk': { name: 'Sainsbury\'s British Semi-Skimmed Milk 2 Pints 1.136L', price: 1.40, image: '/placeholder.svg' },
    'eggs': { name: 'Sainsbury\'s Woodland Free Range Large Eggs x12', price: 2.80, image: '/placeholder.svg' },
    'free range eggs': { name: 'Sainsbury\'s Woodland Free Range Large Eggs x12', price: 2.80, image: '/placeholder.svg' },
    'bananas': { name: 'Sainsbury\'s Fairtrade Bananas Loose per kg', price: 1.15, image: '/placeholder.svg' },
    'loose bananas': { name: 'Sainsbury\'s Fairtrade Bananas Loose per kg', price: 1.15, image: '/placeholder.svg' },
    'chicken breast': { name: 'Sainsbury\'s British Chicken Breast Fillets 600g', price: 4.75, image: '/placeholder.svg' },
    'chicken': { name: 'Sainsbury\'s British Chicken Breast Fillets 600g', price: 4.75, image: '/placeholder.svg' },
    'rice': { name: 'Sainsbury\'s Basmati Rice 1kg', price: 1.90, image: '/placeholder.svg' },
    'basmati rice': { name: 'Sainsbury\'s Basmati Rice 1kg', price: 1.90, image: '/placeholder.svg' },
    'pasta': { name: 'Sainsbury\'s Italian Spaghetti 500g', price: 0.90, image: '/placeholder.svg' },
    'spaghetti': { name: 'Sainsbury\'s Italian Spaghetti 500g', price: 0.90, image: '/placeholder.svg' },
    'tomatoes': { name: 'Sainsbury\'s Cherry Tomatoes Punnet 300g', price: 1.75, image: '/placeholder.svg' },
    'cherry tomatoes': { name: 'Sainsbury\'s Cherry Tomatoes Punnet 300g', price: 1.75, image: '/placeholder.svg' },
    'cheese': { name: 'Sainsbury\'s Mature White Cheddar Cheese 350g', price: 2.45, image: '/placeholder.svg' },
    'cheddar cheese': { name: 'Sainsbury\'s Mature White Cheddar Cheese 350g', price: 2.45, image: '/placeholder.svg' },
    'butter': { name: 'Sainsbury\'s British Salted Butter 250g', price: 1.70, image: '/placeholder.svg' },
    'salted butter': { name: 'Sainsbury\'s British Salted Butter 250g', price: 1.70, image: '/placeholder.svg' }
  };

  const normalizedName = productName.toLowerCase();
  
  // Find matching products
  const matchingKeys = Object.keys(mockPrices).filter(key => 
    key.includes(normalizedName) || normalizedName.includes(key)
  );
  
  if (matchingKeys.length > 0) {
    return mockPrices[matchingKeys[0]];
  }
  
  return { 
    name: `${productName} - Brand Not Found`, 
    price: Math.random() * 5 + 1, 
    image: '/placeholder.svg' 
  };
}
