
import React from 'react';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Analytics = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      
      <main className="flex-grow">
        {/* Hero section */}
        <section className="bg-gradient-to-b from-white to-gray-50 py-16 md:py-24">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">Performance Analytics</h1>
            <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
              Gain deeper insights into learning patterns with advanced analytics and data visualization.
            </p>
          </div>
        </section>

        {/* Main feature section */}
        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Data-Driven Learning</h2>
                <p className="text-lg text-gray-600 mb-6">
                  WonderLearn's analytics platform transforms practice data into actionable insights, helping students and parents make informed decisions about study focus and learning strategies.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="mt-1 mr-3">
                      <svg className="w-5 h-5 text-wl-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                      </svg>
                    </div>
                    <span>Detailed performance breakdowns by subject, topic, and question type</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mt-1 mr-3">
                      <svg className="w-5 h-5 text-wl-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                      </svg>
                    </div>
                    <span>Time analysis for question answering and test completion</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mt-1 mr-3">
                      <svg className="w-5 h-5 text-wl-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                      </svg>
                    </div>
                    <span>Comparison with peers and benchmark standards</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mt-1 mr-3">
                      <svg className="w-5 h-5 text-wl-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                      </svg>
                    </div>
                    <span>Custom reports and downloadable performance summaries</span>
                  </li>
                </ul>
                
                <div className="mt-8">
                  <Link to="/signup">
                    <Button>Try Analytics Features</Button>
                  </Link>
                </div>
              </div>
              
              <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
                <p className="text-gray-500 italic">Analytics dashboard screenshot</p>
              </div>
            </div>
          </div>
        </section>

        {/* Chart types section */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl font-bold mb-12 text-center">Visualize Performance in Multiple Ways</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Chart type 1 */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="h-48 bg-gray-100 rounded mb-4 flex items-center justify-center">
                  <p className="text-gray-400">Progress line chart</p>
                </div>
                <h3 className="text-xl font-semibold mb-2">Progress Over Time</h3>
                <p className="text-gray-600">
                  Track improvement with line charts showing score progression across practice sessions and exams.
                </p>
              </div>
              
              {/* Chart type 2 */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="h-48 bg-gray-100 rounded mb-4 flex items-center justify-center">
                  <p className="text-gray-400">Subject radar chart</p>
                </div>
                <h3 className="text-xl font-semibold mb-2">Subject Proficiency</h3>
                <p className="text-gray-600">
                  Visualize strengths across different subjects and topics with intuitive radar charts.
                </p>
              </div>
              
              {/* Chart type 3 */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="h-48 bg-gray-100 rounded mb-4 flex items-center justify-center">
                  <p className="text-gray-400">Time allocation pie chart</p>
                </div>
                <h3 className="text-xl font-semibold mb-2">Time Analysis</h3>
                <p className="text-gray-600">
                  Understand how time is spent on different question types to optimize test-taking strategies.
                </p>
              </div>
              
              {/* Chart type 4 */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="h-48 bg-gray-100 rounded mb-4 flex items-center justify-center">
                  <p className="text-gray-400">Skill breakdown bar chart</p>
                </div>
                <h3 className="text-xl font-semibold mb-2">Skill Breakdown</h3>
                <p className="text-gray-600">
                  Identify specific skills that need attention with detailed bar charts showing performance by skill area.
                </p>
              </div>
              
              {/* Chart type 5 */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="h-48 bg-gray-100 rounded mb-4 flex items-center justify-center">
                  <p className="text-gray-400">Error pattern heat map</p>
                </div>
                <h3 className="text-xl font-semibold mb-2">Error Patterns</h3>
                <p className="text-gray-600">
                  Spot patterns in mistakes with heat maps highlighting recurring error types and concepts.
                </p>
              </div>
              
              {/* Chart type 6 */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="h-48 bg-gray-100 rounded mb-4 flex items-center justify-center">
                  <p className="text-gray-400">Benchmark comparison chart</p>
                </div>
                <h3 className="text-xl font-semibold mb-2">Performance Benchmarking</h3>
                <p className="text-gray-600">
                  Compare results with peers and national averages to set realistic goals and track relative progress.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA section */}
        <section className="py-16 bg-wl-blue/5">
          <div className="container max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-6">Turn Data into Learning Success</h2>
            <p className="text-xl text-gray-600 mb-8">
              Our analytics platform doesn't just show numbers—it provides actionable insights that lead to improved performance and learning outcomes.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/signup">
                <Button size="lg">Start Free Trial</Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg">Contact for School Plans</Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Analytics;
