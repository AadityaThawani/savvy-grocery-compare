import { useState, useEffect } from 'react';
import { Eye } from 'lucide-react';

interface ViewCounterProps {
  className?: string;
}

export const ViewCounter = ({ className = '' }: ViewCounterProps) => {
  const [viewCount, setViewCount] = useState<number>(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const recordView = async () => {
      try {
        // Simulate API call with localStorage
        const response = await fetch('/api/view-count', {
          method: 'GET',
        }).catch(() => {
          // Fallback to localStorage if no API
          const stored = localStorage.getItem('homepage_view_count');
          if (stored) {
            const data = JSON.parse(stored);
            return { json: () => Promise.resolve(data) };
          }
          
          // First time visitor
          const newData = { totalViews: 1, lastUpdated: new Date().toISOString() };
          localStorage.setItem('homepage_view_count', JSON.stringify(newData));
          localStorage.setItem('visitor_has_viewed', 'true');
          return { json: () => Promise.resolve(newData) };
        });

        if (response && typeof response.json === 'function') {
          const data = await response.json();
          setViewCount(data.totalViews || 0);
        } else {
          // Handle the case where we get view count data directly
          const hasViewed = localStorage.getItem('visitor_has_viewed');
          if (!hasViewed) {
            const stored = localStorage.getItem('homepage_view_count');
            const currentData = stored ? JSON.parse(stored) : { totalViews: 0 };
            const newData = {
              totalViews: currentData.totalViews + 1,
              lastUpdated: new Date().toISOString()
            };
            localStorage.setItem('homepage_view_count', JSON.stringify(newData));
            localStorage.setItem('visitor_has_viewed', 'true');
            setViewCount(newData.totalViews);
          } else {
            const stored = localStorage.getItem('homepage_view_count');
            const data = stored ? JSON.parse(stored) : { totalViews: 0 };
            setViewCount(data.totalViews);
          }
        }
      } catch (error) {
        console.error('Error recording view:', error);
        // Fallback to localStorage
        const stored = localStorage.getItem('homepage_view_count');
        if (stored) {
          const data = JSON.parse(stored);
          setViewCount(data.totalViews || 0);
        }
      } finally {
        setLoading(false);
      }
    };

    recordView();
  }, []);

  if (loading) {
    return (
      <div className={`flex items-center gap-2 text-muted-foreground ${className}`}>
        <Eye className="h-4 w-4" />
        <span className="text-sm">Loading...</span>
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-2 text-muted-foreground ${className}`}>
      <Eye className="h-4 w-4" />
      <span className="text-sm">
        {viewCount.toLocaleString()} view{viewCount !== 1 ? 's' : ''}
      </span>
    </div>
  );
};