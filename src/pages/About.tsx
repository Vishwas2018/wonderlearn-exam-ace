
import React from 'react';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      
      <main className="flex-grow">
        {/* Hero section */}
        <section className="bg-gradient-to-b from-white to-gray-50 py-16 md:py-24">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">About WonderLearn</h1>
            <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
              Helping Australian students excel through practice, progress tracking, and performance analytics.
            </p>
          </div>
        </section>

        {/* Our Story section */}
        <section className="py-16 bg-white">
          <div className="container max-w-4xl">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Story</h2>
            <div className="prose prose-lg mx-auto">
              <p className="mb-4">
                WonderLearn was founded in 2022 by a team of educational experts and technologists who saw a gap in the market for high-quality, accessible test preparation resources for Australian students.
              </p>
              <p className="mb-4">
                Having worked in the education sector for years, our founders witnessed firsthand the anxiety and stress that standardized tests like NAPLAN and ICAS can cause students and their families. They set out to create a platform that would not only prepare students for these assessments but also make the learning process engaging and stress-free.
              </p>
              <p>
                Today, WonderLearn serves thousands of students across Australia, providing them with the tools and resources they need to approach exams with confidence and achieve their academic goals.
              </p>
            </div>
          </div>
        </section>

        {/* Our Mission section */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Our Mission</h2>
              <Card className="border-none shadow-lg">
                <CardContent className="p-8">
                  <p className="text-xl text-center italic">
                    "To empower every Australian student with the knowledge, skills, and confidence to excel in their academic journey through accessible, engaging, and effective educational resources."
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Team section */}
        <section className="py-16 bg-white">
          <div className="container">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Team member 1 */}
              <div className="flex flex-col items-center">
                <div className="w-40 h-40 rounded-full bg-gray-200 mb-4"></div>
                <h3 className="text-xl font-semibold">Sarah Johnson</h3>
                <p className="text-gray-600">Co-Founder & CEO</p>
                <p className="text-sm text-center mt-4">Former principal with over 15 years of experience in education leadership.</p>
              </div>

              {/* Team member 2 */}
              <div className="flex flex-col items-center">
                <div className="w-40 h-40 rounded-full bg-gray-200 mb-4"></div>
                <h3 className="text-xl font-semibold">Michael Chen</h3>
                <p className="text-gray-600">Co-Founder & CTO</p>
                <p className="text-sm text-center mt-4">Educational technology expert with a passion for making learning accessible.</p>
              </div>

              {/* Team member 3 */}
              <div className="flex flex-col items-center">
                <div className="w-40 h-40 rounded-full bg-gray-200 mb-4"></div>
                <h3 className="text-xl font-semibold">Lisa Patel</h3>
                <p className="text-gray-600">Head of Curriculum</p>
                <p className="text-sm text-center mt-4">Former NAPLAN test developer with extensive knowledge of Australian curriculum.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
