
// Mock AI service to simulate Genkit functionality

export async function suggestProducts(query: string): Promise<string[]> {
  // Simulate AI processing delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  const productDatabase = [
    'Hovis Bread', 'Warburtons Bread', 'Kingsmill Bread',
    'Semi-Skimmed Milk', 'Whole Milk', 'Skimmed Milk',
    'Free Range Eggs', 'Organic Eggs', 'Large Eggs',
    'Bananas', 'Organic Bananas', 'Fair Trade Bananas',
    'Chicken Breast', 'Chicken Thighs', 'Whole Chicken',
    'Basmati Rice', 'Jasmine Rice', 'Brown Rice',
    'Spaghetti', 'Penne Pasta', 'Fusilli Pasta',
    'Cherry Tomatoes', 'Plum Tomatoes', 'Beef Tomatoes',
    'Mature Cheddar', 'Mild Cheddar', 'Red Leicester',
    'Salted Butter', 'Unsalted Butter', 'Spreadable Butter'
  ];

  const filtered = productDatabase.filter(product => 
    product.toLowerCase().includes(query.toLowerCase())
  );

  return filtered.slice(0, 5);
}

export async function extractProductsFromReceipt(imageFile: File): Promise<string[]> {
  // Simulate AI processing delay for image analysis
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  // Mock extracted products - in reality this would use OCR and AI
  const mockExtractedProducts = [
    'Hovis Bread',
    'Semi-Skimmed Milk',
    'Free Range Eggs',
    'Bananas',
    'Chicken Breast',
    'Basmati Rice'
  ];

  console.log('Processing receipt image:', imageFile.name);
  return mockExtractedProducts;
}
