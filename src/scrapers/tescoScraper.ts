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
    // In a real implementation, you would scrape Tesco's website
    // but this requires handling CORS, rate limiting, and anti-bot measures
    
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 500 + Math.random() * 1000));
    
    // Return realistic prices based on item type
    const priceMap: { [key: string]: [number, number] } = {
      bread: [0.85, 1.50],
      milk: [1.20, 1.80],
      eggs: [1.50, 2.50],
      rice: [2.00, 4.00],
      pasta: [0.50, 1.20],
      chicken: [3.00, 6.00],
      apples: [1.50, 2.50],
      bananas: [0.80, 1.20],
      potatoes: [1.00, 2.00],
      onions: [0.60, 1.20],
      tomatoes: [1.50, 2.50],
      carrots: [0.40, 0.80],
      cheese: [2.50, 5.00],
      butter: [1.80, 2.50],
      yogurt: [2.00, 3.50],
      cereal: [2.50, 4.50],
      beef: [5.00, 8.00],
      pork: [3.50, 6.00],
      fish: [4.00, 7.00],
      "orange juice": [1.50, 2.50],
      "tea bags": [2.00, 4.00],
      coffee: [3.00, 6.00],
      sugar: [0.80, 1.50],
      flour: [0.60, 1.20],
      "olive oil": [2.50, 5.00],
      garlic: [0.60, 1.00],
      "bell peppers": [1.50, 2.50],
      broccoli: [1.00, 1.80],
      cucumber: [0.60, 1.00],
      lettuce: [0.80, 1.50]
    };

    const [min, max] = priceMap[item.toLowerCase()] || [1.00, 3.00];
    return parseFloat((Math.random() * (max - min) + min).toFixed(2));

  } catch (error) {
    console.error(`Error scraping Tesco price for ${item}:`, error);
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
      bread: ["Hovis Medium White Bread 800g", "Warburtons White Bread 400g", "Kingsmill Soft White Medium Bread 800g"],
      milk: ["Tesco British Whole Milk 2.27L", "Cravendale Fresh Whole Milk 2L", "Arla British Whole Milk 2.27L"],
      eggs: ["Tesco British Mixed Weight Large Eggs 12 Pack", "Happy Egg Co Free Range Large Eggs 12 Pack", "Clarence Court Old Cotswold Legbar Eggs 6 Pack"],
      rice: ["Uncle Ben's Original Long Grain Rice 1Kg", "Tesco Basmati Rice 1Kg", "Royal Umbrella Thai Jasmine Rice 1Kg"],
      pasta: ["Barilla Spaghetti No.5 500g", "Tesco Fusilli 500g", "Dolmio Pasta Tubes 500g"],
      chicken: ["Tesco British Chicken Breast Fillets 1Kg", "Bernard Matthews Chicken Breast Mini Fillets 400g", "Tesco Whole British Chicken"],
      cheese: ["Cathedral City Mature Cheddar 350g", "Tesco British Mild Cheddar 400g", "Philadelphia Original Soft Cheese 280g"],
      paneer: ["Tesco Paneer 225g", "Amul Fresh Paneer 200g", "KTC Paneer 300g"],
      coke: ["Coca-Cola Original Taste 330ml Can", "Coca-Cola Zero Sugar 330ml Can", "Coca-Cola 2L Bottle"],
      butter: ["Lurpak Slightly Salted Butter 250g", "Tesco British Butter 250g", "Anchor Butter 250g"],
      yogurt: ["Activia Strawberry Yogurt 4x125g", "Tesco Greek Style Natural Yogurt 500g", "Muller Corner Vanilla 4x135g"],
      cereal: ["Kellogg's Corn Flakes 500g", "Tesco Bran Flakes 500g", "Weetabix Original 24 Pack"],
      apples: ["Tesco Royal Gala Apples 6 Pack", "Pink Lady Apples 6 Pack", "Granny Smith Apples 6 Pack"],
      bananas: ["Tesco Bananas Loose per kg", "Organic Bananas 5 Pack", "Fair Trade Bananas 5 Pack"],
      potatoes: ["Tesco King Edward Potatoes 2.5kg", "Maris Piper Potatoes 2kg", "Baby New Potatoes 1kg"],
      tomatoes: ["Tesco Cherry Tomatoes on the Vine 300g", "Tesco Beef Tomatoes 4 Pack", "Baby Plum Tomatoes 350g"],
      onions: ["Tesco Brown Onions 3kg", "Tesco Red Onions 1kg", "Tesco White Onions 1kg"],
      carrots: ["Tesco Carrots 1kg", "Organic Carrots 1kg", "Chantenay Carrots 400g"]
    };

    const suggestions: ProductSuggestion[] = [];
    const lowerQuery = query.toLowerCase();
    
    // Find matching products
    for (const [category, products] of Object.entries(productDatabase)) {
      if (category.includes(lowerQuery) || lowerQuery.includes(category)) {
        for (const product of products) {
          if (suggestions.length >= 3) break;
          
          // Get price for this category
          const priceMap: { [key: string]: [number, number] } = {
            bread: [0.85, 1.50],
            milk: [1.20, 1.80],
            eggs: [1.50, 2.50],
            rice: [2.00, 4.00],
            pasta: [0.50, 1.20],
            chicken: [3.00, 6.00],
            cheese: [2.50, 5.00],
            paneer: [1.80, 3.20],
            coke: [0.70, 1.50],
            butter: [1.80, 2.50],
            yogurt: [2.00, 3.50],
            cereal: [2.50, 4.50],
            apples: [1.50, 2.50],
            bananas: [0.80, 1.20],
            potatoes: [1.00, 2.00],
            tomatoes: [1.50, 2.50],
            onions: [0.60, 1.20],
            carrots: [0.40, 0.80]
          };
          
          const [min, max] = priceMap[category] || [1.00, 3.00];
          const price = parseFloat((Math.random() * (max - min) + min).toFixed(2));
          
          suggestions.push({
            name: product,
            price,
            store: 'Tesco'
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
            bread: [0.85, 1.50],
            milk: [1.20, 1.80],
            eggs: [1.50, 2.50],
            rice: [2.00, 4.00],
            pasta: [0.50, 1.20],
            chicken: [3.00, 6.00],
            cheese: [2.50, 5.00],
            paneer: [1.80, 3.20],
            coke: [0.70, 1.50],
            butter: [1.80, 2.50],
            yogurt: [2.00, 3.50],
            cereal: [2.50, 4.50],
            apples: [1.50, 2.50],
            bananas: [0.80, 1.20],
            potatoes: [1.00, 2.00],
            tomatoes: [1.50, 2.50],
            onions: [0.60, 1.20],
            carrots: [0.40, 0.80]
          };
          
          const [min, max] = priceMap[category] || [1.00, 3.00];
          const price = parseFloat((Math.random() * (max - min) + min).toFixed(2));
          
          suggestions.push({
            name: product,
            price,
            store: 'Tesco'
          });
        }
      }
    }
    
    return suggestions;
  } catch (error) {
    console.error('Error getting Tesco product suggestions:', error);
    return [];
  }
}