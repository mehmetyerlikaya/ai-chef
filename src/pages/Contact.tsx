import React from 'react';
import { Mail, MessageSquare, MapPin } from 'lucide-react';
import { Button } from '../components/Button';

const ContactInfo = ({ 
  icon: Icon, 
  title, 
  content 
}: {
  icon: React.ElementType;
  title: string;
  content: string;
}) => (
  <div className="flex items-center gap-4">
    <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
      <Icon className="w-6 h-6 text-indigo-600" />
    </div>
    <div>
      <h3 className="font-bold">{title}</h3>
      <p className="text-gray-600">{content}</p>
    </div>
  </div>
);

export const Contact = () => {
  return (
    <div className="py-16">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
            <p className="text-xl text-gray-600">
              Have questions about AI Chef? We're here to help!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="space-y-8 mb-8">
                <ContactInfo
                  icon={Mail}
                  title="Email Us"
                  content="support@aichef.com"
                />
                <ContactInfo
                  icon={MessageSquare}
                  title="Live Chat"
                  content="Available 24/7"
                />
                <ContactInfo
                  icon={MapPin}
                  title="Location"
                  content="San Francisco, CA"
                />
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-indigo-600"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-indigo-600"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-indigo-600"
                  ></textarea>
                </div>
                <Button className="w-full justify-center">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};