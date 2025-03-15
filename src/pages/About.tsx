import React from 'react';
import { Bot, Utensils, Users, Shield } from 'lucide-react';

const Feature = ({ 
  icon: Icon, 
  title, 
  description 
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) => (
  <div className="flex flex-col items-center text-center">
    <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
      <Icon className="w-8 h-8 text-indigo-600" />
    </div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export const About = () => {
  return (
    <div className="py-16">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold mb-6">About AI Chef</h1>
          <p className="text-xl text-gray-600">
            We're revolutionizing the way you cook by combining artificial intelligence 
            with your personal taste preferences to create perfect recipes just for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <Feature
            icon={Bot}
            title="AI-Powered"
            description="Our advanced AI understands your preferences and creates personalized recipes."
          />
          <Feature
            icon={Utensils}
            title="Custom Recipes"
            description="Get unique recipes tailored to your dietary needs and taste preferences."
          />
          <Feature
            icon={Users}
            title="Community"
            description="Join a community of food lovers sharing their favorite recipes."
          />
          <Feature
            icon={Shield}
            title="Quality First"
            description="All recipes are tested and verified for quality and accuracy."
          />
        </div>

        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 mb-8">
              We believe everyone deserves access to delicious, healthy recipes that match 
              their unique preferences and dietary needs. Our AI-powered platform makes 
              this possible by creating personalized recipes that you'll love to cook and share.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};