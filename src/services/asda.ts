
export interface Product {
  name: string;
  price: number;
  image: string;
}

export async function fetchAsdaPrice(productName: string): Promise<Product> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 700));
  
  const mockPrices: Record<string, Product> = {
    'hovis bread': { name: 'Hovis Medium White Sliced Loaf 800g', price: 1.20, image: '/placeholder.svg' },
    'bread': { name: 'Hovis Medium White Sliced Loaf 800g', price: 1.20, image: '/placeholder.svg' },
    'white bread': { name: 'Hovis Medium White Sliced Loaf 800g', price: 1.20, image: '/placeholder.svg' },
    'milk': { name: 'ASDA Fresh British Semi-Skimmed Milk 2 Pints 1.136L', price: 1.35, image: '/placeholder.svg' },
    'semi skimmed milk': { name: 'ASDA Fresh British Semi-Skimmed Milk 2 Pints 1.136L', price: 1.35, image: '/placeholder.svg' },
    'eggs': { name: 'ASDA Graded Free Range Large Eggs 12 Pack', price: 2.65, image: '/placeholder.svg' },
    'free range eggs': { name: 'ASDA Graded Free Range Large Eggs 12 Pack', price: 2.65, image: '/placeholder.svg' },
    'bananas': { name: 'ASDA Growers Selection Bananas Loose per kg', price: 1.10, image: '/placeholder.svg' },
    'loose bananas': { name: 'ASDA Growers Selection Bananas Loose per kg', price: 1.10, image: '/placeholder.svg' },
    'chicken breast': { name: 'ASDA Butcher\'s Selection British Chicken Breast 550g', price: 4.25, image: '/placeholder.svg' },
    'chicken': { name: 'ASDA Butcher\'s Selection British Chicken Breast 550g', price: 4.25, image: '/placeholder.svg' },
    'rice': { name: 'ASDA Basmati Rice 1kg', price: 1.85, image: '/placeholder.svg' },
    'basmati rice': { name: 'ASDA Basmati Rice 1kg', price: 1.85, image: '/placeholder.svg' },
    'pasta': { name: 'ASDA Smart Price Spaghetti 500g', price: 0.80, image: '/placeholder.svg' },
    'spaghetti': { name: 'ASDA Smart Price Spaghetti 500g', price: 0.80, image: '/placeholder.svg' },
    'tomatoes': { name: 'ASDA Growers Selection Cherry Tomatoes 250g', price: 1.85, image: '/placeholder.svg' },
    'cherry tomatoes': { name: 'ASDA Growers Selection Cherry Tomatoes 250g', price: 1.85, image: '/placeholder.svg' },
    'cheese': { name: 'ASDA Extra Mature White Cheddar Cheese 400g', price: 2.40, image: '/placeholder.svg' },
    'cheddar cheese': { name: 'ASDA Extra Mature White Cheddar Cheese 400g', price: 2.40, image: '/placeholder.svg' },
    'butter': { name: 'ASDA Farmhouse Salted Butter 250g', price: 1.60, image: '/placeholder.svg' },
    'salted butter': { name: 'ASDA Farmhouse Salted Butter 250g', price: 1.60, image: '/placeholder.svg' }
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
