
export interface Product {
  name: string;
  price: number;
  image: string;
}

export async function fetchTescoPrice(productName: string): Promise<Product> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 800));
  
  const mockPrices: Record<string, Product> = {
    'hovis bread': { name: 'Hovis Medium Bread', price: 1.25, image: '/placeholder.svg' },
    'milk': { name: 'Tesco Semi-Skimmed Milk 1L', price: 1.45, image: '/placeholder.svg' },
    'eggs': { name: 'Tesco Free Range Eggs 12 Pack', price: 2.75, image: '/placeholder.svg' },
    'bananas': { name: 'Tesco Bananas 1kg', price: 1.20, image: '/placeholder.svg' },
    'chicken breast': { name: 'Tesco Chicken Breast 500g', price: 4.50, image: '/placeholder.svg' },
    'rice': { name: 'Tesco Basmati Rice 1kg', price: 2.00, image: '/placeholder.svg' },
    'pasta': { name: 'Tesco Spaghetti 500g', price: 0.85, image: '/placeholder.svg' },
    'tomatoes': { name: 'Tesco Cherry Tomatoes 250g', price: 1.80, image: '/placeholder.svg' },
    'cheese': { name: 'Tesco Mature Cheddar 200g', price: 2.50, image: '/placeholder.svg' },
    'butter': { name: 'Tesco Salted Butter 250g', price: 1.65, image: '/placeholder.svg' }
  };

  const normalizedName = productName.toLowerCase();
  return mockPrices[normalizedName] || { 
    name: productName, 
    price: Math.random() * 5 + 1, 
    image: '/placeholder.svg' 
  };
}
