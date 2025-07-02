
export interface Product {
  name: string;
  price: number;
  image: string;
}

export async function fetchAsdaPrice(productName: string): Promise<Product> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 700));
  
  const mockPrices: Record<string, Product> = {
    // Bread & Bakery
    'hovis bread': { name: 'Hovis Medium White Sliced Loaf 800g', price: 1.20, image: '/placeholder.svg' },
    'bread': { name: 'Hovis Medium White Sliced Loaf 800g', price: 1.20, image: '/placeholder.svg' },
    'white bread': { name: 'Hovis Medium White Sliced Loaf 800g', price: 1.20, image: '/placeholder.svg' },
    'warburtons': { name: 'Warburtons Medium White Sliced Bread 800g', price: 1.25, image: '/placeholder.svg' },
    'warburtons white bread': { name: 'Warburtons Medium White Sliced Bread 800g', price: 1.25, image: '/placeholder.svg' },
    'kingsmill': { name: 'Kingsmill Medium White Sliced Bread 800g', price: 1.23, image: '/placeholder.svg' },
    'mother pride': { name: 'Mother Pride Medium White Sliced Bread 800g', price: 1.18, image: '/placeholder.svg' },
    'baps': { name: 'ASDA White Sandwich Baps 6 Pack', price: 0.80, image: '/placeholder.svg' },
    'pitta bread': { name: 'ASDA White Pitta Breads 6 Pack', price: 0.70, image: '/placeholder.svg' },
    
    // Dairy & Eggs
    'milk': { name: 'ASDA Fresh British Semi-Skimmed Milk 2 Pints 1.136L', price: 1.35, image: '/placeholder.svg' },
    'semi skimmed milk': { name: 'ASDA Fresh British Semi-Skimmed Milk 2 Pints 1.136L', price: 1.35, image: '/placeholder.svg' },
    'whole milk': { name: 'ASDA Fresh British Whole Milk 2 Pints 1.136L', price: 1.35, image: '/placeholder.svg' },
    'skimmed milk': { name: 'ASDA Fresh British Skimmed Milk 2 Pints 1.136L', price: 1.35, image: '/placeholder.svg' },
    'eggs': { name: 'ASDA Graded Free Range Large Eggs 12 Pack', price: 2.65, image: '/placeholder.svg' },
    'free range eggs': { name: 'ASDA Graded Free Range Large Eggs 12 Pack', price: 2.65, image: '/placeholder.svg' },
    'organic eggs': { name: 'ASDA Organic Free Range Large Eggs 6 Pack', price: 2.15, image: '/placeholder.svg' },
    'apetina': { name: 'Apetina White Cheese In Brine 200g', price: 2.45, image: '/placeholder.svg' },
    'apetina paneer': { name: 'Apetina Paneer Cheese 225g', price: 2.70, image: '/placeholder.svg' },
    'paneer': { name: 'Apetina Paneer Cheese 225g', price: 2.70, image: '/placeholder.svg' },
    'feta cheese': { name: 'Apetina Traditional Feta Cheese 200g', price: 2.35, image: '/placeholder.svg' },
    
    // Cheese
    'cheese': { name: 'ASDA Extra Mature White Cheddar Cheese 400g', price: 2.40, image: '/placeholder.svg' },
    'cheddar cheese': { name: 'ASDA Extra Mature White Cheddar Cheese 400g', price: 2.40, image: '/placeholder.svg' },
    'cathedral city': { name: 'Cathedral City Mature Cheddar Cheese 350g', price: 3.15, image: '/placeholder.svg' },
    'philadelphia': { name: 'Philadelphia Original Soft Cheese 280g', price: 1.95, image: '/placeholder.svg' },
    'babybel': { name: 'Mini Babybel Original Cheese 6 Pack 120g', price: 2.45, image: '/placeholder.svg' },
    'butter': { name: 'ASDA Farmhouse Salted Butter 250g', price: 1.60, image: '/placeholder.svg' },
    'salted butter': { name: 'ASDA Farmhouse Salted Butter 250g', price: 1.60, image: '/placeholder.svg' },
    'lurpak': { name: 'Lurpak Slightly Salted Butter 250g', price: 2.20, image: '/placeholder.svg' },
    
    // Meat & Poultry
    'chicken breast': { name: 'ASDA Butcher\'s Selection British Chicken Breast 550g', price: 4.25, image: '/placeholder.svg' },
    'chicken': { name: 'ASDA Butcher\'s Selection British Chicken Breast 550g', price: 4.25, image: '/placeholder.svg' },
    'chicken thighs': { name: 'ASDA British Chicken Thigh Fillets 500g', price: 3.15, image: '/placeholder.svg' },
    'mince beef': { name: 'ASDA Butchers Selection British Beef Mince 5% Fat 500g', price: 3.85, image: '/placeholder.svg' },
    'bacon': { name: 'ASDA Unsmoked Back Bacon 300g', price: 2.35, image: '/placeholder.svg' },
    'sausages': { name: 'ASDA Butchers Selection Pork Sausages 400g', price: 2.15, image: '/placeholder.svg' },
    
    // Fruits & Vegetables
    'bananas': { name: 'ASDA Growers Selection Bananas Loose per kg', price: 1.10, image: '/placeholder.svg' },
    'loose bananas': { name: 'ASDA Growers Selection Bananas Loose per kg', price: 1.10, image: '/placeholder.svg' },
    'apples': { name: 'ASDA Growers Selection Gala Apples Minimum 6 Pack', price: 1.45, image: '/placeholder.svg' },
    'carrots': { name: 'ASDA Growers Selection Carrots 1kg', price: 0.68, image: '/placeholder.svg' },
    'potatoes': { name: 'ASDA Growers Selection White Potatoes 2.5kg', price: 1.75, image: '/placeholder.svg' },
    'onions': { name: 'ASDA Growers Selection Brown Onions 1kg', price: 0.80, image: '/placeholder.svg' },
    'tomatoes': { name: 'ASDA Growers Selection Cherry Tomatoes 250g', price: 1.85, image: '/placeholder.svg' },
    'cherry tomatoes': { name: 'ASDA Growers Selection Cherry Tomatoes 250g', price: 1.85, image: '/placeholder.svg' },
    'cucumber': { name: 'ASDA Growers Selection Cucumber Each', price: 0.60, image: '/placeholder.svg' },
    'broccoli': { name: 'ASDA Growers Selection Tenderstem Broccoli 200g', price: 1.95, image: '/placeholder.svg' },
    
    // Rice, Pasta & Grains
    'rice': { name: 'ASDA Basmati Rice 1kg', price: 1.85, image: '/placeholder.svg' },
    'basmati rice': { name: 'ASDA Basmati Rice 1kg', price: 1.85, image: '/placeholder.svg' },
    'jasmine rice': { name: 'ASDA Thai Fragrant Jasmine Rice 1kg', price: 2.15, image: '/placeholder.svg' },
    'pasta': { name: 'ASDA Smart Price Spaghetti 500g', price: 0.80, image: '/placeholder.svg' },
    'spaghetti': { name: 'ASDA Smart Price Spaghetti 500g', price: 0.80, image: '/placeholder.svg' },
    'penne': { name: 'ASDA Smart Price Penne Pasta 500g', price: 0.80, image: '/placeholder.svg' },
    'fusilli': { name: 'ASDA Smart Price Fusilli Pasta 500g', price: 0.80, image: '/placeholder.svg' },
    'barilla': { name: 'Barilla Spaghetti No.5 500g', price: 1.20, image: '/placeholder.svg' },
    
    // Beverages
    'coca cola': { name: 'Coca-Cola Original Taste 2L', price: 2.15, image: '/placeholder.svg' },
    'pepsi': { name: 'Pepsi Original 2L', price: 1.95, image: '/placeholder.svg' },
    'orange juice': { name: 'Tropicana Original Orange Juice 950ml', price: 2.65, image: '/placeholder.svg' },
    'tropicana': { name: 'Tropicana Original Orange Juice 950ml', price: 2.65, image: '/placeholder.svg' },
    'tea bags': { name: 'ASDA Gold Tea Bags 160 Pack', price: 2.85, image: '/placeholder.svg' },
    'pg tips': { name: 'PG Tips Original Tea Bags 240 Pack', price: 4.25, image: '/placeholder.svg' },
    'coffee': { name: 'Nescafe Gold Blend Instant Coffee 200g', price: 5.75, image: '/placeholder.svg' },
    'nescafe': { name: 'Nescafe Gold Blend Instant Coffee 200g', price: 5.75, image: '/placeholder.svg' },
    
    // Snacks & Confectionery
    'chocolate': { name: 'Cadbury Dairy Milk Chocolate Bar 110g', price: 1.95, image: '/placeholder.svg' },
    'cadbury': { name: 'Cadbury Dairy Milk Chocolate Bar 110g', price: 1.95, image: '/placeholder.svg' },
    'kit kat': { name: 'Kit Kat 4 Finger Milk Chocolate Bar 41.5g', price: 0.75, image: '/placeholder.svg' },
    'mars bar': { name: 'Mars Bar 51g', price: 0.75, image: '/placeholder.svg' },
    'crisps': { name: 'Walkers Ready Salted Crisps 6x25g', price: 2.40, image: '/placeholder.svg' },
    'walkers': { name: 'Walkers Ready Salted Crisps 6x25g', price: 2.40, image: '/placeholder.svg' },
    'pringles': { name: 'Pringles Original 190g', price: 2.40, image: '/placeholder.svg' },
    
    // Frozen Foods
    'ice cream': { name: 'Ben & Jerrys Cookie Dough Ice Cream 465ml', price: 5.25, image: '/placeholder.svg' },
    'ben and jerrys': { name: 'Ben & Jerrys Cookie Dough Ice Cream 465ml', price: 5.25, image: '/placeholder.svg' },
    'frozen peas': { name: 'ASDA Frozen Garden Peas 1kg', price: 1.40, image: '/placeholder.svg' },
    'fish fingers': { name: 'Birds Eye Fish Fingers 10 Pack 280g', price: 3.15, image: '/placeholder.svg' },
    'birds eye': { name: 'Birds Eye Fish Fingers 10 Pack 280g', price: 3.15, image: '/placeholder.svg' },
    
    // Household & Cleaning
    'toilet paper': { name: 'Andrex Classic White Toilet Tissue 9 Rolls', price: 6.25, image: '/placeholder.svg' },
    'andrex': { name: 'Andrex Classic White Toilet Tissue 9 Rolls', price: 6.25, image: '/placeholder.svg' },
    'washing powder': { name: 'Persil Bio Washing Powder 2.6kg 40 Washes', price: 11.50, image: '/placeholder.svg' },
    'persil': { name: 'Persil Bio Washing Powder 2.6kg 40 Washes', price: 11.50, image: '/placeholder.svg' },
    'fairy liquid': { name: 'Fairy Original Washing Up Liquid 780ml', price: 2.40, image: '/placeholder.svg' },
    'fairy': { name: 'Fairy Original Washing Up Liquid 780ml', price: 2.40, image: '/placeholder.svg' }
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
