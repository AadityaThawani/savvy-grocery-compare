
export interface Product {
  name: string;
  price: number;
  image: string;
}

export async function fetchAsdaPrice(productName: string): Promise<Product> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 700));
  
  const mockPrices: Record<string, Product> = {
    'hovis bread': { name: 'Hovis Medium White Loaf', price: 1.20, image: '/placeholder.svg' },
    'milk': { name: 'ASDA Semi-Skimmed Milk 1L', price: 1.35, image: '/placeholder.svg' },
    'eggs': { name: 'ASDA Free Range Eggs 12 Pack', price: 2.65, image: '/placeholder.svg' },
    'bananas': { name: 'ASDA Bananas 1kg', price: 1.10, image: '/placeholder.svg' },
    'chicken breast': { name: 'ASDA Chicken Breast 500g', price: 4.25, image: '/placeholder.svg' },
    'rice': { name: 'ASDA Basmati Rice 1kg', price: 1.85, image: '/placeholder.svg' },
    'pasta': { name: 'ASDA Spaghetti 500g', price: 0.80, image: '/placeholder.svg' },
    'tomatoes': { name: 'ASDA Cherry Tomatoes 250g', price: 1.85, image: '/placeholder.svg' },
    'cheese': { name: 'ASDA Mature Cheddar 200g', price: 2.40, image: '/placeholder.svg' },
    'butter': { name: 'ASDA Salted Butter 250g', price: 1.60, image: '/placeholder.svg' }
  };

  const normalizedName = productName.toLowerCase();
  return mockPrices[normalizedName] || { 
    name: productName, 
    price: Math.random() * 5 + 1, 
    image: '/placeholder.svg' 
  };
}
