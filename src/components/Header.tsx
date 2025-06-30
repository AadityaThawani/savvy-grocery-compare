
import { ShoppingBasket } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-primary text-primary-foreground py-4 px-6 shadow-md">
      <div className="container mx-auto flex items-center gap-3">
        <ShoppingBasket className="h-8 w-8" />
        <h1 className="text-2xl font-bold">Grocery Saver</h1>
      </div>
    </header>
  );
};

export default Header;
