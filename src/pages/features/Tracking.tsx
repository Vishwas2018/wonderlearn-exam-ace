
import React from 'react';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Tracking = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      
      <main className="flex-grow">
        {/* Hero section */}
        <section className="bg-gradient-to-b from-white to-gray-50 py-16 md:py-24">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">Progress Tracking</h1>
            <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
              Monitor learning growth and identify opportunities for improvement with our intuitive tracking tools.
            </p>
          </div>
        </section>

        {/* Features grid */}
        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="border rounded-lg p-6">
                <div className="w-12 h-12 bg-wl-blue/10 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-wl-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Performance Over Time</h3>
                <p className="text-gray-600">
                  Track progress across multiple practice sessions and exams to identify patterns and growth over time with easy-to-understand visualizations.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="border rounded-lg p-6">
                <div className="w-12 h-12 bg-wl-blue/10 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-wl-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Skill Breakdown</h3>
                <p className="text-gray-600">
                  See detailed breakdowns of performance across different skill areas and competencies to pinpoint specific strengths and areas for improvement.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="border rounded-lg p-6">
                <div className="w-12 h-12 bg-wl-blue/10 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-wl-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Goal Setting</h3>
                <p className="text-gray-600">
                  Set personalized learning goals and track progress toward achieving them with clear visual indicators of success and milestones.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Dashboard preview */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Your Personal Learning Dashboard</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                All your progress information in one intuitive, easy-to-navigate interface.
              </p>
            </div>
            
            <div className="bg-white shadow-lg rounded-lg overflow-hidden border">
              <div className="h-96 bg-gray-200 flex items-center justify-center">
                <p className="text-gray-500 italic">Dashboard screenshot</p>
              </div>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">For Students</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="mt-1 mr-3">
                      <svg className="w-5 h-5 text-wl-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span>Visualize progress across different subjects and skills</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mt-1 mr-3">
                      <svg className="w-5 h-5 text-wl-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span>Identify patterns in question types that need more focus</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mt-1 mr-3">
                      <svg className="w-5 h-5 text-wl-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span>Set personal goals and celebrate achievements</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">For Parents</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="mt-1 mr-3">
                      <svg className="w-5 h-5 text-wl-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span>Monitor your child's progress with regular updates</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mt-1 mr-3">
                      <svg className="w-5 h-5 text-wl-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span>Understand strengths and weaknesses to provide targeted support</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mt-1 mr-3">
                      <svg className="w-5 h-5 text-wl-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span>Receive recommendations for resources to help at home</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <Link to="/signup">
                <Button>Get Started with Progress Tracking</Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Tracking;
