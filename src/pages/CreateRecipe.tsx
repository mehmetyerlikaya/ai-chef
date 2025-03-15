import React, { useState } from 'react';
import { ChefHat, Sparkles, Clock, Users, UtensilsCrossed, Filter } from 'lucide-react';

interface PreferenceOption {
  id: string;
  label: string;
  icon?: React.ReactNode;
}

const dietaryPreferences: PreferenceOption[] = [
  { id: 'vegetarian', label: 'Vegetarian' },
  { id: 'vegan', label: 'Vegan' },
  { id: 'glutenFree', label: 'Gluten Free' },
  { id: 'dairyFree', label: 'Dairy Free' },
  { id: 'keto', label: 'Keto' },
  { id: 'paleo', label: 'Paleo' },
];

const cookingSkills: PreferenceOption[] = [
  { id: 'beginner', label: 'Beginner' },
  { id: 'intermediate', label: 'Intermediate' },
  { id: 'advanced', label: 'Advanced' },
];

const PreferenceSelector = ({ 
  options, 
  selected, 
  onChange, 
  title 
}: { 
  options: PreferenceOption[];
  selected: string[];
  onChange: (values: string[]) => void;
  title: string;
}) => (
  <div className="mb-6">
    <h3 className="text-lg font-semibold mb-3">{title}</h3>
    <div className="flex flex-wrap gap-2">
      {options.map((option) => (
        <button
          key={option.id}
          className={`px-4 py-2 rounded-full border transition-all ${
            selected.includes(option.id)
              ? 'bg-indigo-600 text-white border-indigo-600'
              : 'border-gray-300 hover:border-indigo-600'
          }`}
          onClick={() => {
            const newSelected = selected.includes(option.id)
              ? selected.filter(id => id !== option.id)
              : [...selected, option.id];
            onChange(newSelected);
          }}
        >
          {option.label}
        </button>
      ))}
    </div>
  </div>
);

const IngredientInput = () => (
  <div className="mb-6">
    <h3 className="text-lg font-semibold mb-3">Available Ingredients</h3>
    <div className="flex gap-2">
      <input
        type="text"
        placeholder="Add ingredients you have..."
        className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
      />
      <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
        Add
      </button>
    </div>
    <div className="mt-2 text-sm text-gray-600">
      Tip: Add main ingredients you want to use or have available
    </div>
  </div>
);

export const CreateRecipe = () => {
  const [selectedDietary, setSelectedDietary] = useState<string[]>([]);
  const [selectedSkill, setSelectedSkill] = useState<string[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = () => {
    setIsGenerating(true);
    // Here you would integrate with your AI service
    setTimeout(() => {
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <div className="flex items-center gap-3 mb-8">
          <ChefHat className="w-8 h-8 text-indigo-600" />
          <h1 className="text-3xl font-bold">Create Your Perfect Recipe</h1>
        </div>

        <PreferenceSelector
          title="Dietary Preferences"
          options={dietaryPreferences}
          selected={selectedDietary}
          onChange={setSelectedDietary}
        />

        <PreferenceSelector
          title="Cooking Skill Level"
          options={cookingSkills}
          selected={selectedSkill}
          onChange={setSelectedSkill}
        />

        <IngredientInput />

        <div className="flex justify-center">
          <button
            onClick={handleGenerate}
            disabled={isGenerating}
            className={`
              flex items-center gap-2 px-8 py-3 
              bg-gradient-to-r from-indigo-600 to-purple-600 
              text-white rounded-full text-lg font-semibold
              transform transition-all duration-200
              ${isGenerating ? 'opacity-75' : 'hover:scale-105'}
            `}
          >
            <Sparkles className="w-5 h-5" />
            {isGenerating ? 'Creating Recipe...' : 'Generate Recipe'}
          </button>
        </div>
      </div>
    </div>
  );
};