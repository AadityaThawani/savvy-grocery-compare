
export interface Product {
  name: string;
  price: number;
  image: string;
}

export async function fetchSainsburysPrice(productName: string): Promise<Product> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 900));
  
  const mockPrices: Record<string, Product> = {
    'hovis bread': { name: 'Hovis Medium White Bread', price: 1.30, image: '/placeholder.svg' },
    'milk': { name: 'Sainsbury\'s Semi-Skimmed Milk 1L', price: 1.40, image: '/placeholder.svg' },
    'eggs': { name: 'Sainsbury\'s Free Range Eggs 12', price: 2.80, image: '/placeholder.svg' },
    'bananas': { name: 'Sainsbury\'s Bananas 1kg', price: 1.15, image: '/placeholder.svg' },
    'chicken breast': { name: 'Sainsbury\'s Chicken Breast 500g', price: 4.75, image: '/placeholder.svg' },
    'rice': { name: 'Sainsbury\'s Basmati Rice 1kg', price: 1.90, image: '/placeholder.svg' },
    'pasta': { name: 'Sainsbury\'s Spaghetti 500g', price: 0.90, image: '/placeholder.svg' },
    'tomatoes': { name: 'Sainsbury\'s Cherry Tomatoes 250g', price: 1.75, image: '/placeholder.svg' },
    'cheese': { name: 'Sainsbury\'s Mature Cheddar 200g', price: 2.45, image: '/placeholder.svg' },
    'butter': { name: 'Sainsbury\'s Salted Butter 250g', price: 1.70, image: '/placeholder.svg' }
  };

  const normalizedName = productName.toLowerCase();
  return mockPrices[normalizedName] || { 
    name: productName, 
    price: Math.random() * 5 + 1, 
    image: '/placeholder.svg' 
  };
}
