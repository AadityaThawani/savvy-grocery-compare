import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Calendar, Zap, Shield, Globe } from 'lucide-react';
const Projects = () => {
  return <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      <header className="bg-primary text-primary-foreground border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="text-2xl font-bold tracking-tight">Terrene Tech</Link>
            <nav className="flex gap-6">
              <Link to="/" className="px-3 py-2 rounded-lg text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10 transition-colors">
                Home
              </Link>
              <Link to="/about" className="px-3 py-2 rounded-lg text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10 transition-colors">
                About Us
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <Link to="/">
              <Button variant="outline" className="mb-4">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
            <h1 className="text-4xl font-bold text-foreground mb-4">Future Projects</h1>
            <p className="text-xl text-muted-foreground">
              Exploring the next generation of consumer technology solutions.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <Badge variant="secondary">Q2 2025</Badge>
                </div>
                <CardTitle>Gym Progress Tracker</CardTitle>
                <CardDescription>Quick easy to log and free service to track workouts and implement progressive overload the key to muscle building </CardDescription>
              </CardHeader>
              <CardContent>
                
                
              </CardContent>
            </Card>

            

            

            
          </div>

          
        </div>
      </main>
    </div>;
};
export default Projects;