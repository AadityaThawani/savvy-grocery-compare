import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Target, Users, Lightbulb } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      <header className="bg-primary text-primary-foreground border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="text-2xl font-bold tracking-tight">Terrene Tech</Link>
            <nav className="flex gap-6">
              <Link 
                to="/" 
                className="px-3 py-2 rounded-lg text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10 transition-colors"
              >
                Home
              </Link>
              <Link 
                to="/projects" 
                className="px-3 py-2 rounded-lg text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10 transition-colors"
              >
                Future Projects
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Link to="/">
              <Button variant="outline" className="mb-4">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
            <h1 className="text-4xl font-bold text-foreground mb-4">About Terrene Tech</h1>
            <p className="text-xl text-muted-foreground">
              We're passionate about creating technology solutions that solve real-world problems and improve people's daily lives.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To develop innovative technology solutions that make everyday tasks more efficient, 
                  accessible, and cost-effective for people across the UK and beyond.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Lightbulb className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To be at the forefront of technological innovation, creating tools that empower 
                  consumers to make smarter decisions and live more efficiently.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Our Story</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Terrene Tech was founded with a simple belief: technology should make life easier, not more complicated. 
                We started by identifying everyday problems that people face and working backwards to create elegant, 
                user-friendly solutions.
              </p>
              <p className="text-muted-foreground">
                Our first project, Grocery Saver, was born from the frustration of trying to find the best deals 
                across different supermarkets. We realized that while price comparison sites exist for many products, 
                grocery shopping remained fragmented and time-consuming.
              </p>
              <p className="text-muted-foreground">
                Today, we continue to explore new opportunities where technology can create meaningful impact, 
                always keeping user experience and practical value at the center of what we do.
              </p>
            </CardContent>
          </Card>

          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to explore our projects?</h2>
            <div className="flex gap-4 justify-center">
              <Link to="/grocery-saver">
                <Button>Try Grocery Saver</Button>
              </Link>
              <Link to="/projects">
                <Button variant="outline">View Future Projects</Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;