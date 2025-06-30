
export interface Product {
  name: string;
  price: number;
  image: string;
}

export async function fetchTescoPrice(productName: string): Promise<Product> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 800));
  
  const mockPrices: Record<string, Product> = {
    'hovis bread': { name: 'Hovis Medium White Sliced Loaf 800g', price: 1.25, image: '/placeholder.svg' },
    'bread': { name: 'Hovis Medium White Sliced Loaf 800g', price: 1.25, image: '/placeholder.svg' },
    'white bread': { name: 'Hovis Medium White Sliced Loaf 800g', price: 1.25, image: '/placeholder.svg' },
    'milk': { name: 'Tesco British Semi-Skimmed Milk 2 Pints 1.136L', price: 1.45, image: '/placeholder.svg' },
    'semi skimmed milk': { name: 'Tesco British Semi-Skimmed Milk 2 Pints 1.136L', price: 1.45, image: '/placeholder.svg' },
    'eggs': { name: 'Tesco British Free Range Mixed Weight Large Eggs 12 Pack', price: 2.75, image: '/placeholder.svg' },
    'free range eggs': { name: 'Tesco British Free Range Mixed Weight Large Eggs 12 Pack', price: 2.75, image: '/placeholder.svg' },
    'bananas': { name: 'Tesco Bananas Loose per kg', price: 1.20, image: '/placeholder.svg' },
    'loose bananas': { name: 'Tesco Bananas Loose per kg', price: 1.20, image: '/placeholder.svg' },
    'chicken breast': { name: 'Tesco British Chicken Breast Fillets 640g', price: 4.50, image: '/placeholder.svg' },
    'chicken': { name: 'Tesco British Chicken Breast Fillets 640g', price: 4.50, image: '/placeholder.svg' },
    'rice': { name: 'Tesco Basmati Rice 1kg', price: 2.00, image: '/placeholder.svg' },
    'basmati rice': { name: 'Tesco Basmati Rice 1kg', price: 2.00, image: '/placeholder.svg' },
    'pasta': { name: 'Tesco Spaghetti 500g', price: 0.85, image: '/placeholder.svg' },
    'spaghetti': { name: 'Tesco Spaghetti 500g', price: 0.85, image: '/placeholder.svg' },
    'tomatoes': { name: 'Tesco Cherry Tomatoes 330g', price: 1.80, image: '/placeholder.svg' },
    'cherry tomatoes': { name: 'Tesco Cherry Tomatoes 330g', price: 1.80, image: '/placeholder.svg' },
    'cheese': { name: 'Tesco Mature Cheddar Cheese 400g', price: 2.50, image: '/placeholder.svg' },
    'cheddar cheese': { name: 'Tesco Mature Cheddar Cheese 400g', price: 2.50, image: '/placeholder.svg' },
    'butter': { name: 'Tesco Salted Butter 250g', price: 1.65, image: '/placeholder.svg' },
    'salted butter': { name: 'Tesco Salted Butter 250g', price: 1.65, image: '/placeholder.svg' }
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
