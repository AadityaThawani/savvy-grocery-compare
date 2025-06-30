
// Mock AI service to simulate Genkit functionality

export async function suggestProducts(query: string): Promise<string[]> {
  // Simulate AI processing delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  const productDatabase = [
    'Hovis Medium White Sliced Loaf 800g', 
    'Warburtons Medium White Sliced Bread 800g', 
    'Kingsmill Medium White Sliced Bread 800g',
    'Tesco British Semi-Skimmed Milk 2 Pints 1.136L', 
    'Sainsbury\'s British Semi-Skimmed Milk 2 Pints 1.136L', 
    'ASDA Fresh British Semi-Skimmed Milk 2 Pints 1.136L',
    'Tesco British Free Range Mixed Weight Large Eggs 12 Pack', 
    'Sainsbury\'s Woodland Free Range Large Eggs x12', 
    'ASDA Graded Free Range Large Eggs 12 Pack',
    'Tesco Bananas Loose per kg', 
    'Sainsbury\'s Fairtrade Bananas Loose per kg', 
    'ASDA Growers Selection Bananas Loose per kg',
    'Tesco British Chicken Breast Fillets 640g', 
    'Sainsbury\'s British Chicken Breast Fillets 600g', 
    'ASDA Butcher\'s Selection British Chicken Breast 550g',
    'Tesco Basmati Rice 1kg', 
    'Sainsbury\'s Basmati Rice 1kg', 
    'ASDA Basmati Rice 1kg',
    'Tesco Spaghetti 500g', 
    'Sainsbury\'s Italian Spaghetti 500g', 
    'ASDA Smart Price Spaghetti 500g',
    'Tesco Cherry Tomatoes 330g', 
    'Sainsbury\'s Cherry Tomatoes Punnet 300g', 
    'ASDA Growers Selection Cherry Tomatoes 250g',
    'Tesco Mature Cheddar Cheese 400g', 
    'Sainsbury\'s Mature White Cheddar Cheese 350g', 
    'ASDA Extra Mature White Cheddar Cheese 400g',
    'Tesco Salted Butter 250g', 
    'Sainsbury\'s British Salted Butter 250g', 
    'ASDA Farmhouse Salted Butter 250g'
  ];

  const filtered = productDatabase.filter(product => 
    product.toLowerCase().includes(query.toLowerCase())
  );

  return filtered.slice(0, 5);
}

export async function extractProductsFromReceipt(imageFile: File): Promise<string[]> {
  // Simulate AI processing delay for image analysis
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  // Mock extracted products with realistic brand names and details
  const mockExtractedProducts = [
    'Hovis Medium White Sliced Loaf 800g',
    'Tesco British Semi-Skimmed Milk 2 Pints 1.136L',
    'Tesco British Free Range Mixed Weight Large Eggs 12 Pack',
    'Tesco Bananas Loose per kg',
    'Tesco British Chicken Breast Fillets 640g',
    'Tesco Basmati Rice 1kg'
  ];

  console.log('Processing receipt image:', imageFile.name);
  return mockExtractedProducts;
}
