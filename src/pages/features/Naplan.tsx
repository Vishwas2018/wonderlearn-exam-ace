
import React from 'react';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const Naplan = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      
      <main className="flex-grow">
        {/* Hero section */}
        <section className="bg-gradient-to-b from-white to-gray-50 py-16 md:py-24">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">NAPLAN Practice</h1>
            <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
              Comprehensive preparation for the National Assessment Program – Literacy and Numeracy.
            </p>
          </div>
        </section>

        {/* Features section */}
        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Practice with Confidence</h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Check size={24} className="mr-3 text-green-500 flex-shrink-0 mt-1" />
                    <span>Practice tests that mirror the official NAPLAN format</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={24} className="mr-3 text-green-500 flex-shrink-0 mt-1" />
                    <span>Coverage of all test domains: Reading, Writing, Language Conventions, and Numeracy</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={24} className="mr-3 text-green-500 flex-shrink-0 mt-1" />
                    <span>Tests available for Years 3, 5, 7, and 9</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={24} className="mr-3 text-green-500 flex-shrink-0 mt-1" />
                    <span>Question formats aligned with the online NAPLAN assessment</span>
                  </li>
                </ul>
                <div className="mt-8">
                  <Link to="/signup">
                    <Button>Start Practicing Now</Button>
                  </Link>
                </div>
              </div>
              <div className="bg-gray-200 rounded-lg h-80 flex items-center justify-center">
                <p className="text-gray-500 italic">NAPLAN practice screenshot</p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits section */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl font-bold mb-12 text-center">Why Practice with WonderLearn?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-wl-blue/10 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-wl-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Authentic Experience</h3>
                <p className="text-gray-600">Our practice tests are designed to replicate the actual NAPLAN experience, including timing, question types, and difficulty levels.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-wl-blue/10 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-wl-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Detailed Explanations</h3>
                <p className="text-gray-600">Learn from mistakes with comprehensive answer explanations that help reinforce concepts and improve understanding.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-wl-blue/10 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-wl-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Progress Tracking</h3>
                <p className="text-gray-600">Monitor improvement over time with detailed analytics that highlight strengths and areas needing additional focus.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16">
          <div className="container max-w-4xl">
            <h2 className="text-3xl font-bold mb-12 text-center">What Parents and Students Say</h2>
            
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <p className="italic text-gray-600 mb-4">"My daughter was extremely nervous about NAPLAN, but after practicing with WonderLearn, she felt confident and prepared. She improved significantly in areas where she previously struggled."</p>
                <p className="font-medium">— Parent of Year 5 student</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <p className="italic text-gray-600 mb-4">"The practice tests on WonderLearn were just like the real NAPLAN. I wasn't surprised by anything on test day because I'd already seen similar questions while practicing."</p>
                <p className="font-medium">— Year 9 student</p>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <Link to="/signup">
                <Button>Try NAPLAN Practice for Free</Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Naplan;
