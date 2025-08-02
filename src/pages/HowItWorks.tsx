
import { ArrowLeft, AlertTriangle, ShoppingCart, Search, Receipt } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const HowItWorks = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Price Comparison
          </Link>
          
          <h1 className="text-3xl font-semibold text-foreground mb-3 tracking-tight">
            How Grocery Saver Works
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Learn how we help you compare grocery prices across different stores
          </p>
        </div>

        {/* Important Notice */}
        <Alert className="mb-8 border-amber-200 bg-amber-50 dark:border-amber-800 dark:bg-amber-950">
          <AlertTriangle className="h-4 w-4 text-amber-600 dark:text-amber-400" />
          <AlertDescription className="text-amber-800 dark:text-amber-200">
            <strong>Important:</strong> Prices displayed may not all be completely accurate due to a lack of API support from retailers and web scraping being actively blocked. This tool is still in the early stage and for quick comparisons only.
          </AlertDescription>
        </Alert>

        {/* How it Works Steps */}
        <div className="space-y-6 mb-8">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Search className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-xl">1. Enter Your Location</CardTitle>
                  <CardDescription>
                    Start by entering your postal code to find stores in your area
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We use your postal code to simulate store availability in your area. This helps us provide more relevant price comparisons.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <ShoppingCart className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-xl">2. Add Products</CardTitle>
                  <CardDescription>
                    Search for products or scan your receipt to build your shopping list
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Type product names to see suggestions from our database, or use the receipt scanner to automatically extract products from your shopping receipts.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Receipt className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-xl">3. Compare Prices</CardTitle>
                  <CardDescription>
                    View price comparisons across Tesco, Sainsbury's, and Asda
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Our comparison table shows prices from major UK supermarkets, helping you identify the best deals and potential savings.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Limitations */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-xl text-amber-600 dark:text-amber-400">
              Current Limitations
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-medium text-foreground mb-2">Mock Data</h4>
              <p className="text-muted-foreground">
                Currently, all prices are simulated using mock data as grocery stores do not provide public APIs for price information.
              </p>
            </div>
            <div>
              <h4 className="font-medium text-foreground mb-2">Web Scraping Restrictions</h4>
              <p className="text-muted-foreground">
                Major grocery retailers actively block automated price scraping to protect their competitive advantage.
              </p>
            </div>
            <div>
              <h4 className="font-medium text-foreground mb-2">Price Accuracy</h4>
              <p className="text-muted-foreground">
                Prices shown are estimates and may not reflect current store prices. Always verify prices before making purchasing decisions.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Future Plans */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Future Improvements</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Integration with official retailer APIs when available</li>
              <li>• Real-time price updates</li>
              <li>• Store availability checking</li>
              <li>• Price history tracking</li>
              <li>• Personalized recommendations</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default HowItWorks;
