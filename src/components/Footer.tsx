import React from 'react';
import { Facebook, Twitter, Instagram, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => (
  <footer className="bg-gradient-to-t from-purple-50 to-transparent py-16">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <div>
          <h3 className="font-bold text-lg mb-4">AI Chef</h3>
          <p className="text-gray-600">
            Discover your perfect recipe with the power of AI.
          </p>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="text-gray-600 hover:text-indigo-600">Home</Link></li>
            <li><Link to="/recipes" className="text-gray-600 hover:text-indigo-600">Recipes</Link></li>
            <li><Link to="/about" className="text-gray-600 hover:text-indigo-600">About</Link></li>
            <li><Link to="/contact" className="text-gray-600 hover:text-indigo-600">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-4">Follow Us</h3>
          <div className="flex gap-4">
            <a href="#" className="text-gray-600 hover:text-indigo-600">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-600 hover:text-indigo-600">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-600 hover:text-indigo-600">
              <Instagram className="w-6 h-6" />
            </a>
          </div>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-4">Newsletter</h3>
          <form className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-full border focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
            <button className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700">
              Join
            </button>
          </form>
        </div>
      </div>
      <div className="text-center text-gray-600 flex items-center justify-center gap-1">
        Made with <Heart className="w-4 h-4 text-red-500" /> by AI Chef
      </div>
    </div>
  </footer>
);