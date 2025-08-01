
import { ShoppingBasket, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-primary text-primary-foreground border-b border-primary/10 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-3">
            <div className="p-2 bg-primary-foreground/10 rounded-xl">
              <ShoppingBasket className="h-6 w-6" />
            </div>
            <h1 className="text-xl font-semibold tracking-tight">Grocery Saver</h1>
          </Link>
          
          <nav>
            <Link 
              to="/grocery-saver/how-it-works" 
              className="flex items-center gap-2 px-3 py-2 rounded-lg text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10 transition-colors"
            >
              <HelpCircle className="h-4 w-4" />
              How it Works
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
