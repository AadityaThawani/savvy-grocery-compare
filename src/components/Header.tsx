
import { ShoppingBasket } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-primary text-primary-foreground border-b border-primary/10 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary-foreground/10 rounded-xl">
              <ShoppingBasket className="h-6 w-6" />
            </div>
            <h1 className="text-xl font-semibold tracking-tight">Grocery Saver</h1>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
