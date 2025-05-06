
import React from 'react';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Check, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const Pricing = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      
      <main className="flex-grow">
        {/* Hero section */}
        <section className="py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 animated-gradient-bg"></div>
          <div className="container relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 slide-in" data-delay="0">Simple, Transparent Pricing</h1>
            <p className="text-xl text-gray-700 text-center max-w-3xl mx-auto slide-in" data-delay="1">
              Choose the plan that's right for your student's learning journey.
            </p>
          </div>
        </section>

        {/* Pricing plans */}
        <section className="py-16 relative">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Basic plan */}
              <div className="card-glow hover-scale slide-in" data-delay="2">
                <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-t-2xl">
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
                    <Button variant="outline" className="w-full rounded-full">Get Started</Button>
                  </Link>
                </div>
              </div>
              
              {/* Premium plan (highlighted) */}
              <div className="relative card-glow hover-scale slide-in z-10" data-delay="3">
                <div className="absolute -top-4 left-0 right-0 flex justify-center">
                  <span className="bg-gradient-to-r from-primary to-accent text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg">
                    MOST POPULAR
                  </span>
                </div>
                <div className="bg-gradient-to-br from-primary/10 to-white p-6 rounded-t-2xl pt-8">
                  <h3 className="text-xl font-bold">Premium</h3>
                  <p className="mt-2 text-gray-600">Ideal for regular practice</p>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">$19.99</span>
                    <span className="text-gray-600">/month</span>
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
                    <li className="flex items-start">
                      <Check size={20} className="mr-2 text-green-500 flex-shrink-0 mt-1" />
                      <span>Priority email support</span>
                    </li>
                  </ul>
                  <Link to="/signup" className="block mt-6">
                    <Button className="w-full rounded-full btn-shine">Get Started</Button>
                  </Link>
                </div>
              </div>
              
              {/* School plan */}
              <div className="card-glow hover-scale slide-in" data-delay="4">
                <div className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-t-2xl">
                  <h3 className="text-xl font-bold">School</h3>
                  <p className="mt-2 text-gray-600">For educational institutions</p>
                  <div className="mt-4 flex items-end gap-2">
                    <span className="text-4xl font-bold">Custom</span>
                    <span className="text-gray-600 mb-1">pricing</span>
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
                    <Button variant="outline" className="w-full rounded-full">Contact Us</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ section */}
        <section className="py-16 relative overflow-hidden">
          <div className="absolute inset-0 animated-gradient-bg opacity-40"></div>
          <div className="container max-w-4xl relative z-10">
            <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div className="card-glow p-6 hover-scale slide-in" data-delay="5">
                <h3 className="text-xl font-semibold mb-2">Can I cancel my subscription at any time?</h3>
                <p className="text-gray-600">Yes, you can cancel your subscription at any time. If you cancel, you'll have access until the end of your current billing period.</p>
              </div>
              
              <div className="card-glow p-6 hover-scale slide-in" data-delay="6">
                <h3 className="text-xl font-semibold mb-2">Is there a free trial available?</h3>
                <p className="text-gray-600">Yes, we offer a 7-day free trial for new users to try out our platform before committing to a subscription.</p>
              </div>
              
              <div className="card-glow p-6 hover-scale slide-in" data-delay="7">
                <h3 className="text-xl font-semibold mb-2">Do you offer family discounts?</h3>
                <p className="text-gray-600">Yes, we offer a 15% discount for families with multiple children. Contact our support team to set this up.</p>
              </div>
            </div>
            
            <div className="mt-10 text-center slide-in" data-delay="8">
              <Link to="/faq">
                <Button variant="link" className="text-primary hover:text-primary/80">View All FAQs</Button>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 bg-gradient-to-r from-primary/10 to-secondary/10">
          <div className="container text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to elevate your child's learning?</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of students already experiencing improved test scores and academic confidence.
            </p>
            <Link to="/signup">
              <Button size="lg" className="rounded-full px-8 btn-shine">
                <Sparkles size={20} className="mr-2" />
                Start Your Free Trial
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Pricing;
