import React from 'react';
import { 
  ChefHat, 
  Sparkles, 
  Brain, 
  UtensilsCrossed, 
  ShoppingCart, 
  Clock,
  Leaf,
  Scale,
  Heart,
  Calendar
} from 'lucide-react';
import { Button } from '../components/Button';

// Feature card component with 3D effect and modern design
const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description 
}: { 
  icon: React.ElementType;
  title: string;
  description: string;
}) => (
  <div className="group relative bg-white rounded-2xl p-6 shadow-lg transform transition-all duration-300 hover:scale-105 hover:-rotate-1 hover:shadow-2xl">
    <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl transform -rotate-2 group-hover:rotate-0 transition-transform duration-300"></div>
    <div className="relative">
      <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center mb-4 transform transition-transform group-hover:rotate-6 group-hover:scale-110">
        <Icon className="w-6 h-6 text-white" />
      </div>
      <h3 className="text-xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
        {title}
      </h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

// Stats card with 3D effect and modern design
const StatCard = ({ 
  icon: Icon, 
  title, 
  value,
  description,
  color,
  hoverColor 
}: { 
  icon: React.ElementType;
  title: string;
  value: string;
  description: string;
  color: string;
  hoverColor: string;
}) => (
  <div className={`group relative ${color} hover:${hoverColor} rounded-2xl p-8 shadow-lg 
    transform transition-all duration-300 hover:scale-105 hover:-rotate-1 hover:shadow-2xl`}>
    <div className="absolute inset-0 bg-white/40 rounded-2xl transform -rotate-2 group-hover:rotate-0 transition-transform duration-300"></div>
    <div className="relative">
      <div className="flex items-center gap-4 mb-4">
        <div className="p-3 bg-white rounded-xl shadow-inner transform transition-transform group-hover:rotate-6 group-hover:scale-110">
          <Icon className="w-8 h-8 text-indigo-600" />
        </div>
        <div>
          <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
            {value}
          </span>
          <h3 className="text-lg font-medium text-gray-700">{title}</h3>
        </div>
      </div>
      <p className="text-gray-700">{description}</p>
    </div>
  </div>
);

// Hero section component
const Hero = () => (
  <header className="relative flex flex-col items-center justify-center min-h-[80vh] px-4 py-16">
    <div className="absolute inset-0 bg-gradient-to-b from-purple-50 via-pink-50 to-white"></div>
    <div className="relative z-10 text-center max-w-4xl mx-auto">
      <div className="relative inline-block mb-8">
        <img 
          src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=1000" 
          alt="Cooking ingredients"
          className="w-48 h-48 rounded-full object-cover shadow-xl ring-4 ring-white"
        />
        <div className="absolute -top-4 -right-4 p-3 bg-white rounded-full shadow-lg animate-bounce">
          <ChefHat className="w-8 h-8 text-indigo-600" />
        </div>
      </div>
      
      <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
        Your Personal AI Chef
      </h1>
      <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
        Experience the future of cooking with our AI-powered recipe assistant. 
        Get personalized recipes, smart meal planning, and ingredient optimization 
        tailored to your preferences.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button to="/recipes">
          <Sparkles className="w-5 h-5" />
          Create Recipe
        </Button>
        <Button to="/about" variant="secondary">
          Learn More
        </Button>
      </div>
    </div>
  </header>
);

// Features section
const Features = () => (
  <section className="py-20 bg-gradient-to-b from-white to-purple-50">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">How AI Chef Helps You Cook</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Our advanced AI technology transforms your cooking experience with smart features 
          designed to make meal preparation effortless and enjoyable.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <FeatureCard
          icon={Brain}
          title="Smart Recipe Generation"
          description="Get personalized recipes based on your dietary preferences, cooking skill, and available ingredients."
        />
        <FeatureCard
          icon={Scale}
          title="Portion Optimization"
          description="Automatically adjust ingredient quantities for your desired number of servings."
        />
        <FeatureCard
          icon={Leaf}
          title="Dietary Customization"
          description="Customize recipes to match your dietary restrictions and preferences."
        />
        <FeatureCard
          icon={ShoppingCart}
          title="Smart Shopping Lists"
          description="Generate organized shopping lists with exact quantities needed for your recipes."
        />
        <FeatureCard
          icon={UtensilsCrossed}
          title="Cooking Techniques"
          description="Learn new cooking techniques with step-by-step instructions and tips."
        />
        <FeatureCard
          icon={Clock}
          title="Time Management"
          description="Get estimated preparation times and cooking schedules to plan your meals."
        />
      </div>
    </div>
  </section>
);

// Stats grid component
const StatsSection = () => (
  <section className="py-20">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Your Cooking Journey</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Track your progress and discover new possibilities with AI-powered cooking assistance.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <StatCard
          title="Recipe Creations"
          value="12"
          icon={UtensilsCrossed}
          description="Unique recipes created with AI assistance"
          color="bg-yellow-50"
          hoverColor="bg-yellow-100"
        />
        <StatCard
          title="AI Suggestions"
          value="24"
          icon={Brain}
          description="Personalized recipe recommendations"
          color="bg-green-50"
          hoverColor="bg-green-100"
        />
        <StatCard
          title="Saved Favorites"
          value="8"
          icon={Heart}
          description="Your collection of favorite recipes"
          color="bg-pink-50"
          hoverColor="bg-pink-100"
        />
        <StatCard
          title="Weekly Meal Plans"
          value="3"
          icon={Calendar}
          description="Organized meal plans for the week"
          color="bg-blue-50"
          hoverColor="bg-blue-100"
        />
      </div>
    </div>
  </section>
);

// Call-to-action section
const CallToAction = () => (
  <section className="py-20 bg-gradient-to-b from-purple-50 to-white">
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Cooking?</h2>
        <p className="text-xl text-gray-600 mb-8">
          Join thousands of home chefs who are discovering the joy of AI-assisted cooking. 
          Create your first recipe today!
        </p>
        <Button to="/recipes">
          <Sparkles className="w-5 h-5" />
          Start Cooking
        </Button>
      </div>
    </div>
  </section>
);

export const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <StatsSection />
      <CallToAction />
    </>
  );
};