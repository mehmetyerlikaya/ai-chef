import React from 'react';
import { Timer, Scale, Thermometer } from 'lucide-react';

export const SmartKitchen = () => (
  <div className="bg-white rounded-2xl shadow-lg p-6">
    <h3 className="text-xl font-bold mb-4">Smart Kitchen</h3>
    <div className="grid grid-cols-3 gap-4">
      <div className="bg-gray-50 rounded-xl p-4">
        <Timer className="w-6 h-6 mb-2 text-indigo-600" />
        <h4 className="font-medium">Timer</h4>
        <p className="text-sm text-gray-600">15:00 remaining</p>
      </div>
      <div className="bg-gray-50 rounded-xl p-4">
        <Scale className="w-6 h-6 mb-2 text-indigo-600" />
        <h4 className="font-medium">Scale</h4>
        <p className="text-sm text-gray-600">250g measured</p>
      </div>
      <div className="bg-gray-50 rounded-xl p-4">
        <Thermometer className="w-6 h-6 mb-2 text-indigo-600" />
        <h4 className="font-medium">Temperature</h4>
        <p className="text-sm text-gray-600">180°C</p>
      </div>
    </div>
  </div>
);