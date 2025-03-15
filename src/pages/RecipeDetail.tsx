import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Clock, Users, Share2, Heart, ArrowLeft, Play } from 'lucide-react';
import { Button } from '../components/Button';
import { CookingMode } from '../components/CookingMode';

export const RecipeDetail = () => {
  const [isCookingMode, setIsCookingMode] = useState(false);
  const { id } = useParams();
  console.log(`Loading recipe with id: ${id}`); // Temporary use to avoid the unused variable warning

  // Mock recipe data (in a real app, this would come from an API)
  const recipe = {
    title: 'Creamy Mushroom Pasta',
    description: 'A delicious vegetarian pasta dish with creamy mushroom sauce.',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=1000',
    time: '30 min',
    servings: '4',
    ingredients: [
      '400g pasta',
      '300g mushrooms',
      '2 cloves garlic',
      '1 cup heavy cream',
      'Salt and pepper to taste',
    ],
    instructions: [
      'Boil pasta according to package instructions.',
      'Sauté mushrooms and garlic until golden brown.',
      'Add cream and simmer until thickened.',
      'Combine with pasta and season to taste.',
    ],
  };

  const StartCookingButton = () => (
    <button
      onClick={() => setIsCookingMode(true)}
      className="fixed bottom-8 right-8 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
    >
      <Play className="w-5 h-5" />
      Start Cooking
    </button>
  );

  return (
    <>
      <div className="py-8">
        <div className="container">
          <Button to="/recipes" variant="secondary" className="mb-6">
            <ArrowLeft className="w-5 h-5" />
            Back to Recipes
          </Button>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <img 
              src={recipe.image} 
              alt={recipe.title}
              className="w-full h-64 md:h-96 object-cover"
            />
            
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <h1 className="text-3xl font-bold">{recipe.title}</h1>
                <div className="flex gap-4">
                  <button className="p-2 rounded-full hover:bg-gray-100">
                    <Heart className="w-6 h-6" />
                  </button>
                  <button className="p-2 rounded-full hover:bg-gray-100">
                    <Share2 className="w-6 h-6" />
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-6 mb-8 text-gray-600">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span>{recipe.time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  <span>{recipe.servings} servings</span>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-xl font-bold mb-4">Ingredients</h2>
                  <ul className="space-y-2">
                    {recipe.ingredients.map((ingredient, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
                        {ingredient}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="text-xl font-bold mb-4">Instructions</h2>
                  <ol className="space-y-4">
                    {recipe.instructions.map((instruction, index) => (
                      <li key={index} className="flex gap-4">
                        <span className="flex-shrink-0 w-6 h-6 bg-indigo-600 text-white rounded-full flex items-center justify-center">
                          {index + 1}
                        </span>
                        {instruction}
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <StartCookingButton />
      {isCookingMode && (
        <CookingMode
          instructions={recipe.instructions}
          onClose={() => setIsCookingMode(false)}
        />
      )}
    </>
  );
};