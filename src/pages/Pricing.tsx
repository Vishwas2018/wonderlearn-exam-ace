
import React from 'react';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const Pricing = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      
      <main className="flex-grow">
        {/* Hero section */}
        <section className="bg-gradient-to-b from-white to-gray-50 py-16 md:py-24">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">Simple, Transparent Pricing</h1>
            <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
              Choose the plan that's right for your student's learning journey.
            </p>
          </div>
        </section>

        {/* Pricing plans */}
        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Basic plan */}
              <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-gray-50 p-6">
                  <h3 className="text-xl font-bold">Basic</h3>
                  <p className="mt-2 text-gray-600">Perfect for casual practice</p>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">$9.99</span>
                    <span className="text-gray-600">/month</span>
                  </div>
                </div>
                <div className="p-6">
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <Check size={20} className="mr-2 text-green-500 flex-shrink-0 mt-1" />
                      <span>Access to 10 practice exams</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={20} className="mr-2 text-green-500 flex-shrink-0 mt-1" />
                      <span>Basic progress tracking</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={20} className="mr-2 text-green-500 flex-shrink-0 mt-1" />
                      <span>Answer explanations</span>
                    </li>
                  </ul>
                  <Link to="/signup" className="block mt-6">
                    <Button variant="outline" className="w-full">Get Started</Button>
                  </Link>
                </div>
              </div>
              
              {/* Premium plan (highlighted) */}
              <div className="border-2 border-wl-blue rounded-lg overflow-hidden shadow-md transform md:-translate-y-2 scale-105">
                <div className="bg-wl-blue text-white p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold">Premium</h3>
                    <span className="bg-white text-wl-blue text-xs font-bold px-2 py-1 rounded-full">POPULAR</span>
                  </div>
                  <p className="mt-2">Ideal for regular practice</p>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">$19.99</span>
                    <span>/month</span>
                  </div>
                </div>
                <div className="p-6">
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <Check size={20} className="mr-2 text-green-500 flex-shrink-0 mt-1" />
                      <span>Unlimited practice exams</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={20} className="mr-2 text-green-500 flex-shrink-0 mt-1" />
                      <span>Advanced progress tracking</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={20} className="mr-2 text-green-500 flex-shrink-0 mt-1" />
                      <span>Detailed performance analytics</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={20} className="mr-2 text-green-500 flex-shrink-0 mt-1" />
                      <span>Personalized recommendations</span>
                    </li>
                  </ul>
                  <Link to="/signup" className="block mt-6">
                    <Button className="w-full">Get Started</Button>
                  </Link>
                </div>
              </div>
              
              {/* School plan */}
              <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-gray-50 p-6">
                  <h3 className="text-xl font-bold">School</h3>
                  <p className="mt-2 text-gray-600">For educational institutions</p>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">Custom</span>
                  </div>
                </div>
                <div className="p-6">
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <Check size={20} className="mr-2 text-green-500 flex-shrink-0 mt-1" />
                      <span>All Premium features</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={20} className="mr-2 text-green-500 flex-shrink-0 mt-1" />
                      <span>Bulk student accounts</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={20} className="mr-2 text-green-500 flex-shrink-0 mt-1" />
                      <span>Teacher dashboard</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={20} className="mr-2 text-green-500 flex-shrink-0 mt-1" />
                      <span>Class performance reports</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={20} className="mr-2 text-green-500 flex-shrink-0 mt-1" />
                      <span>Priority support</span>
                    </li>
                  </ul>
                  <Link to="/contact" className="block mt-6">
                    <Button variant="outline" className="w-full">Contact Us</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ section */}
        <section className="py-16 bg-gray-50">
          <div className="container max-w-4xl">
            <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Can I cancel my subscription at any time?</h3>
                <p className="text-gray-600">Yes, you can cancel your subscription at any time. If you cancel, you'll have access until the end of your current billing period.</p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">Is there a free trial available?</h3>
                <p className="text-gray-600">Yes, we offer a 7-day free trial for new users to try out our platform before committing to a subscription.</p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">Do you offer family discounts?</h3>
                <p className="text-gray-600">Yes, we offer a 15% discount for families with multiple children. Contact our support team to set this up.</p>
              </div>
            </div>
            
            <div className="mt-10 text-center">
              <Link to="/faq">
                <Button variant="link">View All FAQs</Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Pricing;
