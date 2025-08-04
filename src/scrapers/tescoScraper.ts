import axios from 'axios';
import * as cheerio from 'cheerio';
import { commonItems } from './commonItems';

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