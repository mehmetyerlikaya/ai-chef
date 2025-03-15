import React from 'react';
import { Link } from 'react-router-dom';
import { ChefHat, Book, Info, Phone, PlusCircle } from 'lucide-react';

const Navigation = () => (
  <nav className="bg-white shadow-lg">
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex justify-between h-16">
        <div className="flex items-center">
          <Link to="/" className="flex items-center gap-2">
            <ChefHat className="h-8 w-8 text-indigo-600" />
            <span className="text-xl font-bold">AI Chef</span>
          </Link>
        </div>
        
        <div className="flex items-center gap-6">
          <Link to="/recipes/create" className="flex items-center gap-2 text-indigo-600 hover:text-indigo-800">
            <PlusCircle className="h-5 w-5" />
            <span>Create Recipe</span>
          </Link>
          <Link to="/recipes" className="flex items-center gap-2 hover:text-gray-600">
            <Book className="h-5 w-5" />
            <span>Recipes</span>
          </Link>
          <Link to="/about" className="flex items-center gap-2 hover:text-gray-600">
            <Info className="h-5 w-5" />
            <span>About</span>
          </Link>
          <Link to="/contact" className="flex items-center gap-2 hover:text-gray-600">
            <Phone className="h-5 w-5" />
            <span>Contact</span>
          </Link>
        </div>
      </div>
    </div>
  </nav>
);

export const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen bg-gray-50">
    <Navigation />
    <main>{children}</main>
  </div>
);
