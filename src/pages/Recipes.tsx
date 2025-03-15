import React from 'react';
import { Search, Filter, Clock, Users, ChefHat, Sparkles, Leaf, UtensilsCrossed } from 'lucide-react';
import { Link } from 'react-router-dom';

const recipes = [
  {
    id: 1,
    title: 'Creamy Mushroom Pasta',
    description: 'A delicious vegetarian pasta dish with creamy mushroom sauce.',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=1000',
    time: '30 min',
    servings: '4',
  },
  {
    id: 2,
    title: 'Grilled Salmon Bowl',
    description: 'Healthy grilled salmon with quinoa and fresh vegetables.',
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&q=80&w=1000',
    time: '25 min',
    servings: '2',
  },
  // Add more recipes as needed
];

const RecipeCard = ({ 
  title, 
  description, 
  image, 
  time, 
  servings,
  id 
}: {
  title: string;
  description: string;
  image: string;
  time: string;
  servings: string;
  id: number;
}) => (
  <Link 
    to={`/recipes/${id}`}
    className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
  >
    <img 
      src={image} 
      alt={title}
      className="w-full h-48 object-cover"
    />
    <div className="p-6">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex items-center gap-4 text-gray-500">
        <div className="flex items-center gap-1">
          <Clock className="w-4 h-4" />
          <span>{time}</span>
        </div>
        <div className="flex items-center gap-1">
          <Users className="w-4 h-4" />
          <span>{servings} servings</span>
        </div>
      </div>
    </div>
  </Link>
);

// Add a new floating action button for recipe creation
const CreateRecipeButton = () => (
  <button className="fixed bottom-8 right-8 bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-4 rounded-full shadow-lg transform hover:scale-110 transition-all duration-300 group flex items-center gap-3">
    <div className="relative">
      <ChefHat className="w-6 h-6" />
      <Sparkles className="w-4 h-4 absolute -top-1 -right-1 text-yellow-300 animate-pulse" />
    </div>
    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">Create Recipe</span>
  </button>
);

// Enhanced search with smart filters
const SmartSearch = () => (
  <div className="bg-white p-6 rounded-2xl shadow-lg mb-8">
    <div className="flex flex-col md:flex-row gap-4 mb-6">
      <div className="flex-1 relative">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search by ingredients, cuisine, or dietary preferences..."
          className="w-full pl-12 pr-4 py-3 rounded-full border focus:outline-none focus:ring-2 focus:ring-indigo-600"
        />
      </div>
      <div className="flex gap-2">
        <button className="px-4 py-2 rounded-full border hover:bg-gray-50 flex items-center gap-2">
          <Clock className="w-4 h-4" />
          <span>Cook Time</span>
        </button>
        <button className="px-4 py-2 rounded-full border hover:bg-gray-50 flex items-center gap-2">
          <Leaf className="w-4 h-4" />
          <span>Dietary</span>
        </button>
        <button className="px-4 py-2 rounded-full border hover:bg-gray-50 flex items-center gap-2">
          <UtensilsCrossed className="w-4 h-4" />
          <span>Difficulty</span>
        </button>
      </div>
    </div>
  </div>
);

export const Recipes = () => {
  return (
    <div className="py-8">
      <div className="container">
        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search recipes..."
                className="w-full pl-12 pr-4 py-3 rounded-full border focus:outline-none focus:ring-2 focus:ring-indigo-600"
              />
            </div>
            <button className="flex items-center gap-2 px-6 py-3 rounded-full border hover:bg-gray-50">
              <Filter className="w-5 h-5" />
              Filters
            </button>
          </div>
        </div>

        {/* Recipe Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} {...recipe} />
          ))}
        </div>
      </div>
    </div>
  );
};