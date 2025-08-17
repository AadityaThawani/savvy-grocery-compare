import axios from 'axios';
import * as cheerio from 'cheerio';
import { commonItems } from './commonItems';

interface ProductSuggestion {
  name: string;
  price: number;
  store: string;
}

export async function getPrice(item: string): Promise<number | null> {
  // Check if item contains any keywords from our supported list or price map
  const itemLower = item.toLowerCase();
  const hasKeyword = commonItems.some(commonItem => 
    itemLower.includes(commonItem) || commonItem.includes(itemLower)
  );

  try {
    // Mock scraping implementation for now
    // In a real implementation, you would scrape Asda's website
    // but this requires handling CORS, rate limiting, and anti-bot measures
    
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 500 + Math.random() * 1000));
    
    // Return realistic prices based on item type (slightly different from Tesco)
    const priceMap: { [key: string]: [number, number] } = {
      bread: [0.80, 1.40],
      milk: [1.15, 1.75],
      eggs: [1.40, 2.40],
      rice: [1.90, 3.80],
      pasta: [0.45, 1.10],
      chicken: [2.80, 5.80],
      apples: [1.40, 2.40],
      bananas: [0.75, 1.15],
      potatoes: [0.95, 1.90],
      onions: [0.55, 1.15],
      tomatoes: [1.40, 2.40],
      carrots: [0.35, 0.75],
      cheese: [2.40, 4.80],
      butter: [1.70, 2.40],
      yogurt: [1.90, 3.40],
      cereal: [2.40, 4.40],
      beef: [4.80, 7.80],
      pork: [3.40, 5.80],
      fish: [3.80, 6.80],
      "orange juice": [1.40, 2.40],
      "tea bags": [1.90, 3.80],
      coffee: [2.80, 5.80],
      sugar: [0.75, 1.40],
      flour: [0.55, 1.15],
      "olive oil": [2.40, 4.80],
      garlic: [0.55, 0.95],
      "bell peppers": [1.40, 2.40],
      broccoli: [0.95, 1.70],
      cucumber: [0.55, 0.95],
      lettuce: [0.75, 1.40]
    };

    // Find the best matching price range based on keywords in the item name
    let priceRange = [1.00, 3.00]; // default
    for (const [key, range] of Object.entries(priceMap)) {
      if (itemLower.includes(key) || key.includes(itemLower)) {
        priceRange = range;
        break;
      }
    }
    
    if (!hasKeyword) {
      // If no keyword match, still return a reasonable price for any product
      priceRange = [1.00, 4.00];
    }

    const [min, max] = priceRange;
    return parseFloat((Math.random() * (max - min) + min).toFixed(2));

  } catch (error) {
    console.error(`Error scraping Asda price for ${item}:`, error);
    return null;
  }
}

export async function getProductSuggestions(query: string): Promise<ProductSuggestion[]> {
  if (query.length < 2) return [];
  
  try {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 300 + Math.random() * 500));
    
    // Mock product suggestions based on query
    const productDatabase: { [key: string]: string[] } = {
      bread: ["ASDA Smart Price White Bread 800g", "Mother Pride White Medium Bread 800g", "ASDA Extra Special Seeded Batch 400g"],
      milk: ["ASDA British Whole Milk 2.27L", "Lactofree Whole Milk 1L", "ASDA Smart Price Whole Milk 2.27L"],
      eggs: ["ASDA Smart Price Large Eggs 15 Pack", "ASDA Woodland Free Range Large Eggs 12 Pack", "Burford Browns Free Range Eggs 6 Pack"],
      rice: ["ASDA Smart Price Long Grain Rice 1Kg", "ASDA Basmati Rice 1Kg", "Ben's Original Long Grain Rice 1Kg"],
      pasta: ["ASDA Smart Price Spaghetti 500g", "ASDA Penne Pasta 500g", "Napolina Spaghetti 500g"],
      chicken: ["ASDA Butcher's Selection Chicken Breast 1Kg", "ASDA Smart Price Chicken Breast Fillets 650g", "ASDA Extra Special Free Range Chicken Breast"],
      cheese: ["ASDA Smart Price Mild Cheddar 400g", "Cathedral City Mature Cheddar 350g", "ASDA Extra Special Vintage Cheddar 200g"],
      paneer: ["ASDA Paneer 200g", "Pataks Paneer 300g", "Mother Dairy Paneer 200g"],
      coke: ["Coca-Cola Original 330ml Can", "Coca-Cola Zero Sugar 330ml Can", "Coca-Cola 1.75L Bottle"],
      butter: ["ASDA Smart Price Butter 250g", "Lurpak Slightly Salted 250g", "Country Life Butter 250g"],
      yogurt: ["ASDA Smart Price Natural Yogurt 500g", "Activia Natural 4x125g", "Greek Style Yogurt 500g"],
      cereal: ["ASDA Smart Price Corn Flakes 500g", "Kellogg's Rice Krispies 510g", "ASDA Bran Flakes 500g"],
      apples: ["ASDA Grower's Selection Gala Apples 6 Pack", "ASDA Pink Lady Apples 4 Pack", "Braeburn Apples 6 Pack"],
      bananas: ["ASDA Grower's Selection Bananas 5 Pack", "Fair Trade Bananas Loose per kg", "Organic Bananas 5 Pack"],
      potatoes: ["ASDA Grower's Selection King Edward 2.5kg", "ASDA Maris Piper 2kg", "ASDA Baby Potatoes 1kg"],
      tomatoes: ["ASDA Grower's Selection Vine Tomatoes 6 Pack", "ASDA Cherry Tomatoes 300g", "ASDA Beef Tomatoes 4 Pack"],
      onions: ["ASDA Grower's Selection Brown Onions 3kg", "ASDA Red Onions 1kg", "ASDA Spring Onions Bunch"],
      carrots: ["ASDA Grower's Selection Carrots 1kg", "ASDA Organic Carrots 500g", "ASDA Chantenay Carrots 400g"]
    };

    const suggestions: ProductSuggestion[] = [];
    const lowerQuery = query.toLowerCase();
    
    // Find matching products
    for (const [category, products] of Object.entries(productDatabase)) {
      if (category.includes(lowerQuery) || lowerQuery.includes(category)) {
        for (const product of products) {
          if (suggestions.length >= 3) break;
          
          // Get price for this category (Asda typically slightly cheaper)
          const priceMap: { [key: string]: [number, number] } = {
            bread: [0.80, 1.40],
            milk: [1.15, 1.75],
            eggs: [1.40, 2.40],
            rice: [1.90, 3.80],
            pasta: [0.45, 1.10],
            chicken: [2.80, 5.80],
            cheese: [2.40, 4.80],
            paneer: [1.70, 3.10],
            coke: [0.65, 1.40],
            butter: [1.70, 2.40],
            yogurt: [1.90, 3.40],
            cereal: [2.40, 4.40],
            apples: [1.40, 2.40],
            bananas: [0.75, 1.15],
            potatoes: [0.95, 1.90],
            tomatoes: [1.40, 2.40],
            onions: [0.55, 1.15],
            carrots: [0.35, 0.75]
          };
          
          const [min, max] = priceMap[category] || [0.95, 2.95];
          const price = parseFloat((Math.random() * (max - min) + min).toFixed(2));
          
          suggestions.push({
            name: product,
            price,
            store: 'Asda'
          });
        }
      }
    }
    
    // Also check if any product names contain the query
    for (const [category, products] of Object.entries(productDatabase)) {
      for (const product of products) {
        if (suggestions.length >= 5) break;
        if (product.toLowerCase().includes(lowerQuery) && 
            !suggestions.some(s => s.name === product)) {
          
          const priceMap: { [key: string]: [number, number] } = {
            bread: [0.80, 1.40],
            milk: [1.15, 1.75],
            eggs: [1.40, 2.40],
            rice: [1.90, 3.80],
            pasta: [0.45, 1.10],
            chicken: [2.80, 5.80],
            cheese: [2.40, 4.80],
            paneer: [1.70, 3.10],
            coke: [0.65, 1.40],
            butter: [1.70, 2.40],
            yogurt: [1.90, 3.40],
            cereal: [2.40, 4.40],
            apples: [1.40, 2.40],
            bananas: [0.75, 1.15],
            potatoes: [0.95, 1.90],
            tomatoes: [1.40, 2.40],
            onions: [0.55, 1.15],
            carrots: [0.35, 0.75]
          };
          
          const [min, max] = priceMap[category] || [0.95, 2.95];
          const price = parseFloat((Math.random() * (max - min) + min).toFixed(2));
          
          suggestions.push({
            name: product,
            price,
            store: 'Asda'
          });
        }
      }
    }
    
    return suggestions;
  } catch (error) {
    console.error('Error getting Asda product suggestions:', error);
    return [];
  }
}