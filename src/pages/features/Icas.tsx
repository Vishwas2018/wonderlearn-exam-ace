
import React from 'react';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const Icas = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      
      <main className="flex-grow">
        {/* Hero section */}
        <section className="bg-gradient-to-b from-white to-gray-50 py-16 md:py-24">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">ICAS Practice</h1>
            <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
              Excel in the International Competitions and Assessments for Schools with targeted preparation.
            </p>
          </div>
        </section>

        {/* Features section */}
        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="bg-gray-200 rounded-lg h-80 flex items-center justify-center">
                <p className="text-gray-500 italic">ICAS practice screenshot</p>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6">Comprehensive ICAS Preparation</h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Check size={24} className="mr-3 text-green-500 flex-shrink-0 mt-1" />
                    <span>Practice tests for all ICAS subjects: Digital Technologies, English, Mathematics, Science, and Writing</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={24} className="mr-3 text-green-500 flex-shrink-0 mt-1" />
                    <span>Coverage for all year levels from Year 2 to Year 12</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={24} className="mr-3 text-green-500 flex-shrink-0 mt-1" />
                    <span>Questions designed to match the high cognitive level of actual ICAS tests</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={24} className="mr-3 text-green-500 flex-shrink-0 mt-1" />
                    <span>Special focus on problem-solving and critical thinking skills</span>
                  </li>
                </ul>
                <div className="mt-8">
                  <Link to="/signup">
                    <Button>Start Practicing Now</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Subject breakdown */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl font-bold mb-12 text-center">ICAS Subject Areas</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Digital Technologies */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Digital Technologies</h3>
                <p className="text-gray-600 mb-4">Assess computational thinking and application of digital technologies knowledge with questions on hardware, software, networks, and data representation.</p>
                <ul className="text-sm space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-wl-blue rounded-full mr-2"></span>
                    <span>Online search techniques</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-wl-blue rounded-full mr-2"></span>
                    <span>Database and spreadsheet operations</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-wl-blue rounded-full mr-2"></span>
                    <span>Programming logic</span>
                  </li>
                </ul>
              </div>
              
              {/* English */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">English</h3>
                <p className="text-gray-600 mb-4">Develop reading comprehension and analytical skills with texts ranging from narrative to persuasive across various contexts.</p>
                <ul className="text-sm space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-wl-blue rounded-full mr-2"></span>
                    <span>Text comprehension</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-wl-blue rounded-full mr-2"></span>
                    <span>Literary analysis</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-wl-blue rounded-full mr-2"></span>
                    <span>Language mechanics</span>
                  </li>
                </ul>
              </div>
              
              {/* Mathematics */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Mathematics</h3>
                <p className="text-gray-600 mb-4">Master mathematical concepts and problem-solving strategies across number, algebra, geometry, measurement, and data.</p>
                <ul className="text-sm space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-wl-blue rounded-full mr-2"></span>
                    <span>Numerical reasoning</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-wl-blue rounded-full mr-2"></span>
                    <span>Spatial problem solving</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-wl-blue rounded-full mr-2"></span>
                    <span>Data interpretation</span>
                  </li>
                </ul>
              </div>
              
              {/* Science */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Science</h3>
                <p className="text-gray-600 mb-4">Explore scientific concepts and inquiry skills across Earth and space, physical, and life sciences.</p>
                <ul className="text-sm space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-wl-blue rounded-full mr-2"></span>
                    <span>Scientific investigation</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-wl-blue rounded-full mr-2"></span>
                    <span>Data analysis</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-wl-blue rounded-full mr-2"></span>
                    <span>Concept application</span>
                  </li>
                </ul>
              </div>
              
              {/* Writing */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Writing</h3>
                <p className="text-gray-600 mb-4">Develop written expression skills through practice prompts that assess language mechanics, creativity, and organization.</p>
                <ul className="text-sm space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-wl-blue rounded-full mr-2"></span>
                    <span>Narrative writing</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-wl-blue rounded-full mr-2"></span>
                    <span>Persuasive writing</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-wl-blue rounded-full mr-2"></span>
                    <span>Structure and organization</span>
                  </li>
                </ul>
              </div>
              
              {/* ICAS All Stars */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">ICAS All Stars</h3>
                <p className="text-gray-600 mb-4">Challenge high-performing students with our advanced preparation for the prestigious ICAS All Stars competition.</p>
                <ul className="text-sm space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-wl-blue rounded-full mr-2"></span>
                    <span>Advanced problem solving</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-wl-blue rounded-full mr-2"></span>
                    <span>Critical thinking</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-wl-blue rounded-full mr-2"></span>
                    <span>Cross-disciplinary concepts</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <Link to="/signup">
                <Button>Start Your ICAS Preparation</Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Icas;
