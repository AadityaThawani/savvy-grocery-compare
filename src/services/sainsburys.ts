
export interface Product {
  name: string;
  price: number;
  image: string;
}

export async function fetchSainsburysPrice(productName: string): Promise<Product> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 900));
  
  const mockPrices: Record<string, Product> = {
    // Bread & Bakery
    'hovis bread': { name: 'Hovis Medium White Thick Sliced Bread 800g', price: 1.30, image: '/placeholder.svg' },
    'bread': { name: 'Hovis Medium White Thick Sliced Bread 800g', price: 1.30, image: '/placeholder.svg' },
    'white bread': { name: 'Hovis Medium White Thick Sliced Bread 800g', price: 1.30, image: '/placeholder.svg' },
    'warburtons': { name: 'Warburtons Medium White Sliced Bread 800g', price: 1.35, image: '/placeholder.svg' },
    'warburtons white bread': { name: 'Warburtons Medium White Sliced Bread 800g', price: 1.35, image: '/placeholder.svg' },
    'kingsmill': { name: 'Kingsmill Medium White Sliced Bread 800g', price: 1.32, image: '/placeholder.svg' },
    'mother pride': { name: 'Mother Pride Medium White Sliced Bread 800g', price: 1.25, image: '/placeholder.svg' },
    'baps': { name: 'Sainsburys White Sandwich Baps 6 Pack', price: 0.90, image: '/placeholder.svg' },
    'pitta bread': { name: 'Sainsburys White Pitta Breads 6 Pack', price: 0.80, image: '/placeholder.svg' },
    
    // Dairy & Eggs
    'milk': { name: 'Sainsbury\'s British Semi-Skimmed Milk 2 Pints 1.136L', price: 1.40, image: '/placeholder.svg' },
    'semi skimmed milk': { name: 'Sainsbury\'s British Semi-Skimmed Milk 2 Pints 1.136L', price: 1.40, image: '/placeholder.svg' },
    'whole milk': { name: 'Sainsbury\'s British Whole Milk 2 Pints 1.136L', price: 1.40, image: '/placeholder.svg' },
    'skimmed milk': { name: 'Sainsbury\'s British Skimmed Milk 2 Pints 1.136L', price: 1.40, image: '/placeholder.svg' },
    'eggs': { name: 'Sainsbury\'s Woodland Free Range Large Eggs x12', price: 2.80, image: '/placeholder.svg' },
    'free range eggs': { name: 'Sainsbury\'s Woodland Free Range Large Eggs x12', price: 2.80, image: '/placeholder.svg' },
    'organic eggs': { name: 'Sainsburys Organic Free Range Large Eggs 6 Pack', price: 2.25, image: '/placeholder.svg' },
    'apetina': { name: 'Apetina White Cheese In Brine 200g', price: 2.55, image: '/placeholder.svg' },
    'apetina paneer': { name: 'Apetina Paneer Cheese 225g', price: 2.80, image: '/placeholder.svg' },
    'paneer': { name: 'Apetina Paneer Cheese 225g', price: 2.80, image: '/placeholder.svg' },
    'feta cheese': { name: 'Apetina Traditional Feta Cheese 200g', price: 2.45, image: '/placeholder.svg' },
    
    // Cheese
    'cheese': { name: 'Sainsbury\'s Mature White Cheddar Cheese 350g', price: 2.45, image: '/placeholder.svg' },
    'cheddar cheese': { name: 'Sainsbury\'s Mature White Cheddar Cheese 350g', price: 2.45, image: '/placeholder.svg' },
    'cathedral city': { name: 'Cathedral City Mature Cheddar Cheese 350g', price: 3.30, image: '/placeholder.svg' },
    'philadelphia': { name: 'Philadelphia Original Soft Cheese 280g', price: 2.05, image: '/placeholder.svg' },
    'babybel': { name: 'Mini Babybel Original Cheese 6 Pack 120g', price: 2.55, image: '/placeholder.svg' },
    'butter': { name: 'Sainsbury\'s British Salted Butter 250g', price: 1.70, image: '/placeholder.svg' },
    'salted butter': { name: 'Sainsbury\'s British Salted Butter 250g', price: 1.70, image: '/placeholder.svg' },
    'lurpak': { name: 'Lurpak Slightly Salted Butter 250g', price: 2.30, image: '/placeholder.svg' },
    
    // Meat & Poultry
    'chicken breast': { name: 'Sainsbury\'s British Chicken Breast Fillets 600g', price: 4.75, image: '/placeholder.svg' },
    'chicken': { name: 'Sainsbury\'s British Chicken Breast Fillets 600g', price: 4.75, image: '/placeholder.svg' },
    'chicken thighs': { name: 'Sainsburys British Chicken Thigh Fillets 500g', price: 3.50, image: '/placeholder.svg' },
    'mince beef': { name: 'Sainsburys British Beef Mince 5% Fat 500g', price: 4.25, image: '/placeholder.svg' },
    'bacon': { name: 'Sainsburys Unsmoked Back Bacon 300g', price: 2.75, image: '/placeholder.svg' },
    'sausages': { name: 'Sainsburys Taste the Difference Pork Sausages 400g', price: 2.50, image: '/placeholder.svg' },
    
    // Fruits & Vegetables
    'bananas': { name: 'Sainbury\'s Fairtrade Bananas Loose per kg', price: 1.15, image: '/placeholder.svg' },
    'loose bananas': { name: 'Sainsbury\'s Fairtrade Bananas Loose per kg', price: 1.15, image: '/placeholder.svg' },
    'apples': { name: 'Sainsburys Gala Apples Minimum 6 Pack', price: 1.65, image: '/placeholder.svg' },
    'carrots': { name: 'Sainsburys Carrots 1kg', price: 0.75, image: '/placeholder.svg' },
    'potatoes': { name: 'Sainsburys White Potatoes 2.5kg', price: 1.95, image: '/placeholder.svg' },
    'onions': { name: 'Sainsburys Brown Onions 1kg', price: 0.90, image: '/placeholder.svg' },
    'tomatoes': { name: 'Sainsbury\'s Cherry Tomatoes Punnet 300g', price: 1.75, image: '/placeholder.svg' },
    'cherry tomatoes': { name: 'Sainsbury\'s Cherry Tomatoes Punnet 300g', price: 1.75, image: '/placeholder.svg' },
    'cucumber': { name: 'Sainsburys Cucumber Each', price: 0.70, image: '/placeholder.svg' },
    'broccoli': { name: 'Sainsburys Tenderstem Broccoli 200g', price: 2.20, image: '/placeholder.svg' },
    
    // Rice, Pasta & Grains
    'rice': { name: 'Sainsbury\'s Basmati Rice 1kg', price: 1.90, image: '/placeholder.svg' },
    'basmati rice': { name: 'Sainsbury\'s Basmati Rice 1kg', price: 1.90, image: '/placeholder.svg' },
    'jasmine rice': { name: 'Sainsburys Thai Fragrant Jasmine Rice 1kg', price: 2.30, image: '/placeholder.svg' },
    'pasta': { name: 'Sainsbury\'s Italian Spaghetti 500g', price: 0.90, image: '/placeholder.svg' },
    'spaghetti': { name: 'Sainsbury\'s Italian Spaghetti 500g', price: 0.90, image: '/placeholder.svg' },
    'penne': { name: 'Sainsburys Penne Pasta 500g', price: 0.90, image: '/placeholder.svg' },
    'fusilli': { name: 'Sainsburys Fusilli Pasta 500g', price: 0.90, image: '/placeholder.svg' },
    'barilla': { name: 'Barilla Spaghetti No.5 500g', price: 1.30, image: '/placeholder.svg' },
    
    // Beverages
    'coca cola': { name: 'Coca-Cola Original Taste 2L', price: 2.30, image: '/placeholder.svg' },
    'pepsi': { name: 'Pepsi Original 2L', price: 2.05, image: '/placeholder.svg' },
    'orange juice': { name: 'Tropicana Original Orange Juice 950ml', price: 2.80, image: '/placeholder.svg' },
    'tropicana': { name: 'Tropicana Original Orange Juice 950ml', price: 2.80, image: '/placeholder.svg' },
    'tea bags': { name: 'Sainsburys Gold Tea Bags 160 Pack', price: 3.20, image: '/placeholder.svg' },
    'pg tips': { name: 'PG Tips Original Tea Bags 240 Pack', price: 4.75, image: '/placeholder.svg' },
    'coffee': { name: 'Nescafe Gold Blend Instant Coffee 200g', price: 6.25, image: '/placeholder.svg' },
    'nescafe': { name: 'Nescafe Gold Blend Instant Coffee 200g', price: 6.25, image: '/placeholder.svg' },
    
    // Snacks & Confectionery
    'chocolate': { name: 'Cadbury Dairy Milk Chocolate Bar 110g', price: 2.05, image: '/placeholder.svg' },
    'cadbury': { name: 'Cadbury Dairy Milk Chocolate Bar 110g', price: 2.05, image: '/placeholder.svg' },
    'kit kat': { name: 'Kit Kat 4 Finger Milk Chocolate Bar 41.5g', price: 0.85, image: '/placeholder.svg' },
    'mars bar': { name: 'Mars Bar 51g', price: 0.85, image: '/placeholder.svg' },
    'crisps': { name: 'Walkers Ready Salted Crisps 6x25g', price: 2.60, image: '/placeholder.svg' },
    'walkers': { name: 'Walkers Ready Salted Crisps 6x25g', price: 2.60, image: '/placeholder.svg' },
    'pringles': { name: 'Pringles Original 190g', price: 2.60, image: '/placeholder.svg' },
    
    // Frozen Foods
    'ice cream': { name: 'Ben & Jerrys Cookie Dough Ice Cream 465ml', price: 5.75, image: '/placeholder.svg' },
    'ben and jerrys': { name: 'Ben & Jerrys Cookie Dough Ice Cream 465ml', price: 5.75, image: '/placeholder.svg' },
    'frozen peas': { name: 'Sainsburys Frozen Garden Peas 1kg', price: 1.60, image: '/placeholder.svg' },
    'fish fingers': { name: 'Birds Eye Fish Fingers 10 Pack 280g', price: 3.50, image: '/placeholder.svg' },
    'birds eye': { name: 'Birds Eye Fish Fingers 10 Pack 280g', price: 3.50, image: '/placeholder.svg' },
    
    // Household & Cleaning
    'toilet paper': { name: 'Andrex Classic White Toilet Tissue 9 Rolls', price: 6.75, image: '/placeholder.svg' },
    'andrex': { name: 'Andrex Classic White Toilet Tissue 9 Rolls', price: 6.75, image: '/placeholder.svg' },
    'washing powder': { name: 'Persil Bio Washing Powder 2.6kg 40 Washes', price: 12.50, image: '/placeholder.svg' },
    'persil': { name: 'Persil Bio Washing Powder 2.6kg 40 Washes', price: 12.50, image: '/placeholder.svg' },
    'fairy liquid': { name: 'Fairy Original Washing Up Liquid 780ml', price: 2.60, image: '/placeholder.svg' },
    'fairy': { name: 'Fairy Original Washing Up Liquid 780ml', price: 2.60, image: '/placeholder.svg' }
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
