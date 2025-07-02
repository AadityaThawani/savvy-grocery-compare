
export interface Product {
  name: string;
  price: number;
  image: string;
}

export async function fetchTescoPrice(productName: string): Promise<Product> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 800));
  
  const mockPrices: Record<string, Product> = {
    // Bread & Bakery
    'hovis bread': { name: 'Hovis Medium White Sliced Loaf 800g', price: 1.25, image: '/placeholder.svg' },
    'bread': { name: 'Hovis Medium White Sliced Loaf 800g', price: 1.25, image: '/placeholder.svg' },
    'white bread': { name: 'Hovis Medium White Sliced Loaf 800g', price: 1.25, image: '/placeholder.svg' },
    'warburtons': { name: 'Warburtons Medium White Sliced Bread 800g', price: 1.30, image: '/placeholder.svg' },
    'warburtons white bread': { name: 'Warburtons Medium White Sliced Bread 800g', price: 1.30, image: '/placeholder.svg' },
    'kingsmill': { name: 'Kingsmill Medium White Sliced Bread 800g', price: 1.28, image: '/placeholder.svg' },
    'mother pride': { name: 'Mother Pride Medium White Sliced Bread 800g', price: 1.22, image: '/placeholder.svg' },
    'baps': { name: 'Tesco White Sandwich Baps 6 Pack', price: 0.85, image: '/placeholder.svg' },
    'pitta bread': { name: 'Tesco White Pitta Breads 6 Pack', price: 0.75, image: '/placeholder.svg' },
    
    // Dairy & Eggs
    'milk': { name: 'Tesco British Semi-Skimmed Milk 2 Pints 1.136L', price: 1.45, image: '/placeholder.svg' },
    'semi skimmed milk': { name: 'Tesco British Semi-Skimmed Milk 2 Pints 1.136L', price: 1.45, image: '/placeholder.svg' },
    'whole milk': { name: 'Tesco British Whole Milk 2 Pints 1.136L', price: 1.45, image: '/placeholder.svg' },
    'skimmed milk': { name: 'Tesco British Skimmed Milk 2 Pints 1.136L', price: 1.45, image: '/placeholder.svg' },
    'eggs': { name: 'Tesco British Free Range Mixed Weight Large Eggs 12 Pack', price: 2.75, image: '/placeholder.svg' },
    'free range eggs': { name: 'Tesco British Free Range Mixed Weight Large Eggs 12 Pack', price: 2.75, image: '/placeholder.svg' },
    'organic eggs': { name: 'Tesco Organic Free Range Large Eggs 6 Pack', price: 2.20, image: '/placeholder.svg' },
    'apetina': { name: 'Apetina White Cheese In Brine 200g', price: 2.50, image: '/placeholder.svg' },
    'apetina paneer': { name: 'Apetina Paneer Cheese 225g', price: 2.75, image: '/placeholder.svg' },
    'paneer': { name: 'Apetina Paneer Cheese 225g', price: 2.75, image: '/placeholder.svg' },
    'feta cheese': { name: 'Apetina Traditional Feta Cheese 200g', price: 2.40, image: '/placeholder.svg' },
    
    // Cheese
    'cheese': { name: 'Tesco Mature Cheddar Cheese 400g', price: 2.50, image: '/placeholder.svg' },
    'cheddar cheese': { name: 'Tesco Mature Cheddar Cheese 400g', price: 2.50, image: '/placeholder.svg' },
    'cathedral city': { name: 'Cathedral City Mature Cheddar Cheese 350g', price: 3.25, image: '/placeholder.svg' },
    'philadelphia': { name: 'Philadelphia Original Soft Cheese 280g', price: 2.00, image: '/placeholder.svg' },
    'babybel': { name: 'Mini Babybel Original Cheese 6 Pack 120g', price: 2.50, image: '/placeholder.svg' },
    'butter': { name: 'Tesco Salted Butter 250g', price: 1.65, image: '/placeholder.svg' },
    'salted butter': { name: 'Tesco Salted Butter 250g', price: 1.65, image: '/placeholder.svg' },
    'lurpak': { name: 'Lurpak Slightly Salted Butter 250g', price: 2.25, image: '/placeholder.svg' },
    
    // Meat & Poultry
    'chicken breast': { name: 'Tesco British Chicken Breast Fillets 640g', price: 4.50, image: '/placeholder.svg' },
    'chicken': { name: 'Tesco British Chicken Breast Fillets 640g', price: 4.50, image: '/placeholder.svg' },
    'chicken thighs': { name: 'Tesco British Chicken Thigh Fillets 500g', price: 3.25, image: '/placeholder.svg' },
    'mince beef': { name: 'Tesco British Beef Mince 5% Fat 500g', price: 4.00, image: '/placeholder.svg' },
    'bacon': { name: 'Tesco Unsmoked Back Bacon 300g', price: 2.50, image: '/placeholder.svg' },
    'sausages': { name: 'Tesco Finest Pork Sausages 400g', price: 2.25, image: '/placeholder.svg' },
    
    // Fruits & Vegetables
    'bananas': { name: 'Tesco Bananas Loose per kg', price: 1.20, image: '/placeholder.svg' },
    'loose bananas': { name: 'Tesco Bananas Loose per kg', price: 1.20, image: '/placeholder.svg' },
    'apples': { name: 'Tesco Gala Apples Minimum 5 Pack', price: 1.50, image: '/placeholder.svg' },
    'carrots': { name: 'Tesco Carrots 1kg', price: 0.70, image: '/placeholder.svg' },
    'potatoes': { name: 'Tesco White Potatoes 2.5kg', price: 1.85, image: '/placeholder.svg' },
    'onions': { name: 'Tesco Brown Onions 1kg', price: 0.85, image: '/placeholder.svg' },
    'tomatoes': { name: 'Tesco Cherry Tomatoes 330g', price: 1.80, image: '/placeholder.svg' },
    'cherry tomatoes': { name: 'Tesco Cherry Tomatoes 330g', price: 1.80, image: '/placeholder.svg' },
    'cucumber': { name: 'Tesco Cucumber Each', price: 0.65, image: '/placeholder.svg' },
    'broccoli': { name: 'Tesco Tenderstem Broccoli 200g', price: 2.00, image: '/placeholder.svg' },
    
    // Rice, Pasta & Grains
    'rice': { name: 'Tesco Basmati Rice 1kg', price: 2.00, image: '/placeholder.svg' },
    'basmati rice': { name: 'Tesco Basmati Rice 1kg', price: 2.00, image: '/placeholder.svg' },
    'jasmine rice': { name: 'Tesco Thai Fragrant Jasmine Rice 1kg', price: 2.20, image: '/placeholder.svg' },
    'pasta': { name: 'Tesco Spaghetti 500g', price: 0.85, image: '/placeholder.svg' },
    'spaghetti': { name: 'Tesco Spaghetti 500g', price: 0.85, image: '/placeholder.svg' },
    'penne': { name: 'Tesco Penne Pasta 500g', price: 0.85, image: '/placeholder.svg' },
    'fusilli': { name: 'Tesco Fusilli Pasta 500g', price: 0.85, image: '/placeholder.svg' },
    'barilla': { name: 'Barilla Spaghetti No.5 500g', price: 1.25, image: '/placeholder.svg' },
    
    // Beverages
    'coca cola': { name: 'Coca-Cola Original Taste 2L', price: 2.25, image: '/placeholder.svg' },
    'pepsi': { name: 'Pepsi Original 2L', price: 2.00, image: '/placeholder.svg' },
    'orange juice': { name: 'Tropicana Original Orange Juice 950ml', price: 2.75, image: '/placeholder.svg' },
    'tropicana': { name: 'Tropicana Original Orange Juice 950ml', price: 2.75, image: '/placeholder.svg' },
    'tea bags': { name: 'Tesco Gold Tea Bags 160 Pack', price: 3.00, image: '/placeholder.svg' },
    'pg tips': { name: 'PG Tips Original Tea Bags 240 Pack', price: 4.50, image: '/placeholder.svg' },
    'coffee': { name: 'Nescafe Gold Blend Instant Coffee 200g', price: 6.00, image: '/placeholder.svg' },
    'nescafe': { name: 'Nescafe Gold Blend Instant Coffee 200g', price: 6.00, image: '/placeholder.svg' },
    
    // Snacks & Confectionery
    'chocolate': { name: 'Cadbury Dairy Milk Chocolate Bar 110g', price: 2.00, image: '/placeholder.svg' },
    'cadbury': { name: 'Cadbury Dairy Milk Chocolate Bar 110g', price: 2.00, image: '/placeholder.svg' },
    'kit kat': { name: 'Kit Kat 4 Finger Milk Chocolate Bar 41.5g', price: 0.80, image: '/placeholder.svg' },
    'mars bar': { name: 'Mars Bar 51g', price: 0.80, image: '/placeholder.svg' },
    'crisps': { name: 'Walkers Ready Salted Crisps 6x25g', price: 2.50, image: '/placeholder.svg' },
    'walkers': { name: 'Walkers Ready Salted Crisps 6x25g', price: 2.50, image: '/placeholder.svg' },
    'pringles': { name: 'Pringles Original 190g', price: 2.50, image: '/placeholder.svg' },
    
    // Frozen Foods
    'ice cream': { name: 'Ben & Jerrys Cookie Dough Ice Cream 465ml', price: 5.50, image: '/placeholder.svg' },
    'ben and jerrys': { name: 'Ben & Jerrys Cookie Dough Ice Cream 465ml', price: 5.50, image: '/placeholder.svg' },
    'frozen peas': { name: 'Tesco Frozen Garden Peas 1kg', price: 1.50, image: '/placeholder.svg' },
    'fish fingers': { name: 'Birds Eye Fish Fingers 10 Pack 280g', price: 3.25, image: '/placeholder.svg' },
    'birds eye': { name: 'Birds Eye Fish Fingers 10 Pack 280g', price: 3.25, image: '/placeholder.svg' },
    
    // Household & Cleaning
    'toilet paper': { name: 'Andrex Classic White Toilet Tissue 9 Rolls', price: 6.50, image: '/placeholder.svg' },
    'andrex': { name: 'Andrex Classic White Toilet Tissue 9 Rolls', price: 6.50, image: '/placeholder.svg' },
    'washing powder': { name: 'Persil Bio Washing Powder 2.6kg 40 Washes', price: 12.00, image: '/placeholder.svg' },
    'persil': { name: 'Persil Bio Washing Powder 2.6kg 40 Washes', price: 12.00, image: '/placeholder.svg' },
    'fairy liquid': { name: 'Fairy Original Washing Up Liquid 780ml', price: 2.50, image: '/placeholder.svg' },
    'fairy': { name: 'Fairy Original Washing Up Liquid 780ml', price: 2.50, image: '/placeholder.svg' }
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
