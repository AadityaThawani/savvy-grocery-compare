import axios from 'axios';
import * as cheerio from 'cheerio';
import { commonItems } from './commonItems';

interface ProductSuggestion {
  name: string;
  price: number;
  store: string;
}

export async function getPrice(item: string): Promise<number | null> {
  // Check if item is in our supported list
  if (!commonItems.includes(item.toLowerCase())) {
    return null;
  }

  try {
    // Mock scraping implementation for now
    // In a real implementation, you would scrape Sainsbury's website
    // but this requires handling CORS, rate limiting, and anti-bot measures
    
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 500 + Math.random() * 1000));
    
    // Return realistic prices based on item type (typically slightly higher than competitors)
    const priceMap: { [key: string]: [number, number] } = {
      bread: [0.90, 1.60],
      milk: [1.25, 1.85],
      eggs: [1.60, 2.60],
      rice: [2.10, 4.10],
      pasta: [0.55, 1.25],
      chicken: [3.10, 6.10],
      apples: [1.60, 2.60],
      bananas: [0.85, 1.25],
      potatoes: [1.05, 2.05],
      onions: [0.65, 1.25],
      tomatoes: [1.60, 2.60],
      carrots: [0.45, 0.85],
      cheese: [2.60, 5.10],
      butter: [1.85, 2.60],
      yogurt: [2.10, 3.60],
      cereal: [2.60, 4.60],
      beef: [5.10, 8.10],
      pork: [3.60, 6.10],
      fish: [4.10, 7.10],
      "orange juice": [1.60, 2.60],
      "tea bags": [2.10, 4.10],
      coffee: [3.10, 6.10],
      sugar: [0.85, 1.60],
      flour: [0.65, 1.25],
      "olive oil": [2.60, 5.10],
      garlic: [0.65, 1.05],
      "bell peppers": [1.60, 2.60],
      broccoli: [1.05, 1.85],
      cucumber: [0.65, 1.05],
      lettuce: [0.85, 1.60]
    };

    const [min, max] = priceMap[item.toLowerCase()] || [1.05, 3.05];
    return parseFloat((Math.random() * (max - min) + min).toFixed(2));

  } catch (error) {
    console.error(`Error scraping Sainsbury\'s price for ${item}:`, error);
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
      bread: ["Sainsbury's Soft White Medium Bread 800g", "Hovis Best of Both Medium Bread 750g", "Sainsbury's Taste the Difference Sourdough 400g"],
      milk: ["Sainsbury's British Whole Milk 2.27L", "Organic Whole Milk 1L", "Sainsbury's Semi Skimmed Milk 2.27L"],
      eggs: ["Sainsbury's Woodland Free Range Large Eggs 12 Pack", "Sainsbury's So Organic Large Eggs 6 Pack", "Clarence Court Burford Brown Eggs 6 Pack"],
      rice: ["Sainsbury's Basmati Rice 1Kg", "Sainsbury's Long Grain Rice 1Kg", "Tilda Pure Basmati Rice 1Kg"],
      pasta: ["Sainsbury's Spaghetti 500g", "Sainsbury's Penne 500g", "Barilla Linguine 500g"],
      chicken: ["Sainsbury's British Chicken Breast Fillets 1Kg", "Sainsbury's Woodland Free Range Chicken Breast 480g", "Sainsbury's Taste the Difference Chicken Breast"],
      cheese: ["Sainsbury's British Mature Cheddar 400g", "Cathedral City Extra Mature 350g", "Sainsbury's Taste the Difference Vintage Cheddar 200g"],
      paneer: ["Sainsbury's Paneer 225g", "Nanak Paneer 283g", "Patak's Paneer 300g"],
      coke: ["Coca-Cola Original Taste 330ml", "Coca-Cola Zero Sugar 330ml", "Coca-Cola Classic 2L"],
      butter: ["Sainsbury's British Butter 250g", "Lurpak Slightly Salted 250g", "Kerrygold Pure Irish Butter 250g"],
      yogurt: ["Sainsbury's Greek Style Natural Yogurt 500g", "Rachel's Organic Natural Yogurt 450g", "Onken Natural Set Yogurt 450g"],
      cereal: ["Sainsbury's Corn Flakes 500g", "Sainsbury's Bran Flakes 500g", "Weetabix Chocolate 24 Pack"],
      apples: ["Sainsbury's Pink Lady Apples 6 Pack", "Sainsbury's Royal Gala Apples 6 Pack", "Sainsbury's Granny Smith Apples 6 Pack"],
      bananas: ["Sainsbury's Fairtrade Bananas 5 Pack", "Sainsbury's Bananas Loose per kg", "Sainsbury's Organic Bananas 5 Pack"],
      potatoes: ["Sainsbury's King Edward Potatoes 2.5kg", "Sainsbury's Maris Piper 2kg", "Sainsbury's Baby New Potatoes 1kg"],
      tomatoes: ["Sainsbury's Vine Ripened Tomatoes 6 Pack", "Sainsbury's Cherry Tomatoes 300g", "Sainsbury's Baby Plum Tomatoes 350g"],
      onions: ["Sainsbury's Brown Onions 3kg", "Sainsbury's Red Onions 1kg", "Sainsbury's White Onions 1kg"],
      carrots: ["Sainsbury's Carrots 1kg", "Sainsbury's Organic Carrots 1kg", "Sainsbury's Chantenay Carrots 400g"]
    };

    const suggestions: ProductSuggestion[] = [];
    const lowerQuery = query.toLowerCase();
    
    // Find matching products
    for (const [category, products] of Object.entries(productDatabase)) {
      if (category.includes(lowerQuery) || lowerQuery.includes(category)) {
        for (const product of products) {
          if (suggestions.length >= 3) break;
          
          // Get price for this category (Sainsbury's typically slightly higher)
          const priceMap: { [key: string]: [number, number] } = {
            bread: [0.90, 1.60],
            milk: [1.25, 1.85],
            eggs: [1.60, 2.60],
            rice: [2.10, 4.10],
            pasta: [0.55, 1.25],
            chicken: [3.10, 6.10],
            cheese: [2.60, 5.10],
            paneer: [1.85, 3.25],
            coke: [0.75, 1.55],
            butter: [1.85, 2.60],
            yogurt: [2.10, 3.60],
            cereal: [2.60, 4.60],
            apples: [1.60, 2.60],
            bananas: [0.85, 1.25],
            potatoes: [1.05, 2.05],
            tomatoes: [1.60, 2.60],
            onions: [0.65, 1.25],
            carrots: [0.45, 0.85]
          };
          
          const [min, max] = priceMap[category] || [1.05, 3.05];
          const price = parseFloat((Math.random() * (max - min) + min).toFixed(2));
          
          suggestions.push({
            name: product,
            price,
            store: "Sainsbury's"
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
            bread: [0.90, 1.60],
            milk: [1.25, 1.85],
            eggs: [1.60, 2.60],
            rice: [2.10, 4.10],
            pasta: [0.55, 1.25],
            chicken: [3.10, 6.10],
            cheese: [2.60, 5.10],
            paneer: [1.85, 3.25],
            coke: [0.75, 1.55],
            butter: [1.85, 2.60],
            yogurt: [2.10, 3.60],
            cereal: [2.60, 4.60],
            apples: [1.60, 2.60],
            bananas: [0.85, 1.25],
            potatoes: [1.05, 2.05],
            tomatoes: [1.60, 2.60],
            onions: [0.65, 1.25],
            carrots: [0.45, 0.85]
          };
          
          const [min, max] = priceMap[category] || [1.05, 3.05];
          const price = parseFloat((Math.random() * (max - min) + min).toFixed(2));
          
          suggestions.push({
            name: product,
            price,
            store: "Sainsbury's"
          });
        }
      }
    }
    
    return suggestions;
  } catch (error) {
    console.error('Error getting Sainsbury\'s product suggestions:', error);
    return [];
  }
}