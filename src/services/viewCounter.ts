interface ViewCounterData {
  totalViews: number;
  lastUpdated: string;
}

class ViewCounterService {
  private readonly STORAGE_KEY = 'homepage_view_count';
  private readonly VISITOR_KEY = 'visitor_has_viewed';

  getViewCount(): ViewCounterData {
    try {
      const stored = localStorage.getItem(this.STORAGE_KEY);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (error) {
      console.error('Error reading view count:', error);
    }
    
    return {
      totalViews: 0,
      lastUpdated: new Date().toISOString()
    };
  }

  incrementViewCount(): ViewCounterData {
    // Check if this visitor has already been counted
    const hasViewed = localStorage.getItem(this.VISITOR_KEY);
    
    if (hasViewed) {
      // Return current count without incrementing
      return this.getViewCount();
    }

    const currentData = this.getViewCount();
    const newData: ViewCounterData = {
      totalViews: currentData.totalViews + 1,
      lastUpdated: new Date().toISOString()
    };

    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(newData));
      localStorage.setItem(this.VISITOR_KEY, 'true');
    } catch (error) {
      console.error('Error saving view count:', error);
    }

    return newData;
  }

  // Method to simulate API endpoint behavior
  async recordView(): Promise<ViewCounterData> {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 100));
    return this.incrementViewCount();
  }
}

export const viewCounterService = new ViewCounterService();