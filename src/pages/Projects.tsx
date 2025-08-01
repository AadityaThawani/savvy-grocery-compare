import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Calendar, Zap, Shield, Globe } from 'lucide-react';

const Projects = () => {
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
                to="/about" 
                className="px-3 py-2 rounded-lg text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10 transition-colors"
              >
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
                <CardTitle>Smart Energy Monitor</CardTitle>
                <CardDescription>
                  Real-time household energy tracking with AI-powered optimization recommendations.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  An intelligent system that monitors your home's energy consumption patterns and 
                  provides personalized recommendations to reduce your bills and carbon footprint.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">IoT</Badge>
                  <Badge variant="outline">AI/ML</Badge>
                  <Badge variant="outline">Sustainability</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <Badge variant="secondary">Q3 2025</Badge>
                </div>
                <CardTitle>Privacy Guardian</CardTitle>
                <CardDescription>
                  Personal data protection toolkit for everyday internet users.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  A comprehensive suite of tools to help users understand, control, and protect 
                  their personal data across websites, apps, and online services.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Privacy</Badge>
                  <Badge variant="outline">Security</Badge>
                  <Badge variant="outline">Browser Extension</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                  <Badge variant="secondary">Q4 2025</Badge>
                </div>
                <CardTitle>Local Events Hub</CardTitle>
                <CardDescription>
                  Community-driven platform for discovering local events and activities.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Connect with your local community through a personalized feed of events, 
                  activities, and gatherings tailored to your interests and location.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Community</Badge>
                  <Badge variant="outline">Social</Badge>
                  <Badge variant="outline">Mobile App</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Globe className="h-6 w-6 text-primary" />
                  </div>
                  <Badge variant="secondary">2026</Badge>
                </div>
                <CardTitle>Carbon Footprint Tracker</CardTitle>
                <CardDescription>
                  Personal sustainability assistant with actionable insights.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Track your environmental impact across transportation, consumption, and lifestyle 
                  choices with personalized recommendations for sustainable living.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Sustainability</Badge>
                  <Badge variant="outline">Analytics</Badge>
                  <Badge variant="outline">Gamification</Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <h2 className="text-2xl font-bold mb-4">Interested in collaborating?</h2>
            <p className="text-muted-foreground mb-6">
              We're always looking for partners, contributors, and early adopters for our projects.
            </p>
            <div className="flex gap-4 justify-center">
              <Link to="/grocery-saver">
                <Button>Try Our Current Project</Button>
              </Link>
              <Link to="/about">
                <Button variant="outline">Learn About Our Team</Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Projects;