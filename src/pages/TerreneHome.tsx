import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShoppingBasket, Users, Lightbulb, ArrowRight } from 'lucide-react';
const TerreneHome = () => {
  return <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      <header className="bg-primary text-primary-foreground border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <h1 className="text-2xl font-bold tracking-tight">Terrene Tech</h1>
            <nav className="flex gap-6">
              <Link to="/about" className="px-3 py-2 rounded-lg text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10 transition-colors">
                About Us
              </Link>
              <Link to="/projects" className="px-3 py-2 rounded-lg text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10 transition-colors">
                Future Projects
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Innovative Solutions for Tomorrow
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building cutting-edge technology solutions that make everyday life easier and more efficient.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <ShoppingBasket className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Grocery Saver</CardTitle>
              <CardDescription>
                Compare prices across major UK supermarkets and save money on your weekly shop.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link to="/grocery-saver">
                <Button className="w-full group">
                  Try Grocery Saver
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>About Terrene Tech</CardTitle>
              <CardDescription>
                Learn about our team and the vision driving our innovative projects.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link to="/about">
                <Button variant="outline" className="w-full group">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Future Projects</CardTitle>
              <CardDescription>
                Discover what we're working on next and how it will impact the future.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link to="/projects">
                <Button variant="outline" className="w-full group">
                  Explore Projects
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>;
};
export default TerreneHome;