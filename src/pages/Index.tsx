
import React, { useEffect, useRef } from 'react';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, 
  Target, 
  TrendingUp, 
  Lock, 
  ArrowRight, 
  ArrowUpRight, 
  Calendar, 
  Award,
  Database,
  BarChart
} from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const Home = () => {
  // Function to handle intersection observer for scroll animations
  const setupIntersectionObserver = () => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document.querySelectorAll('.reveal-element').forEach((el) => {
      observer.observe(el);
      (el as HTMLElement).style.opacity = '0'; // Hide initially
    });
  };

  useEffect(() => {
    setupIntersectionObserver();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-16 md:py-28 overflow-hidden animated-gradient-bg">
        <div className="container px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 z-10 reveal-element">
              <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
                <span className="text-gradient">Elevate</span> Your <br />
                Learning Journey
              </h1>
              <p className="text-xl text-gray-700 mb-8 max-w-xl">
                Master NAPLAN & ICAS with confidence. Our tailored practice exams help students excel with personalized feedback and analytics.
              </p>
              <div className="flex flex-wrap gap-5">
                <Link to="/exams">
                  <Button size="lg" className="rounded-full px-8 py-6 shadow-lg hover:shadow-primary/20 text-lg btn-shine">
                    Start Free Exam <ArrowRight className="ml-2" />
                  </Button>
                </Link>
                <Link to="/pricing">
                  <Button size="lg" variant="outline" className="rounded-full px-8 py-6 text-lg border-2 hover:bg-primary/5">
                    View Plans
                  </Button>
                </Link>
              </div>
              
              <div className="mt-10 flex items-center space-x-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-r from-primary/80 to-accent/80 flex items-center justify-center text-white text-xs font-bold border-2 border-white">
                      {i}
                    </div>
                  ))}
                </div>
                <p className="text-sm text-gray-600">
                  Trusted by <span className="font-bold text-primary">10,000+</span> students across Australia
                </p>
              </div>
            </div>
            
            <div className="lg:col-span-6 relative">
              <div className="relative z-10 reveal-element">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl card-glow">
                  <AspectRatio ratio={16/9}>
                    <img 
                      src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                      alt="Students learning with ElevatEdAccess" 
                      className="w-full h-full object-cover"
                    />
                  </AspectRatio>
                  
                  {/* Floating elements */}
                  <div className="absolute top-5 right-5 bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-lg float-element-slow">
                    <div className="flex items-center gap-2">
                      <Award className="text-primary w-5 h-5" />
                      <span className="text-sm font-semibold">98% Success Rate</span>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-5 left-5 bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-lg float-element">
                    <div className="flex items-center gap-2">
                      <Calendar className="text-secondary w-5 h-5" />
                      <span className="text-sm font-semibold">Updated for 2025</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Background elements */}
              <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -z-10"></div>
              <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-primary/15 rounded-full blur-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="container px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto reveal-element">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose <span className="text-gradient">ElevatEdAccess</span>
            </h2>
            <p className="text-lg text-gray-600 mb-16">
              Our platform is designed to boost student confidence and academic performance with realistic exam practice
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-6">
            <div className="card-glow p-6 reveal-element hover-scale" style={{ "--delay": 0 } as React.CSSProperties}>
              <div className="h-14 w-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Target className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">NAPLAN & ICAS Practice</h3>
              <p className="text-gray-600">
                Authentic exam questions that match the style and format of real NAPLAN and ICAS tests.
              </p>
            </div>

            <div className="card-glow p-6 reveal-element hover-scale" style={{ "--delay": 1 } as React.CSSProperties}>
              <div className="h-14 w-14 bg-secondary/10 rounded-full flex items-center justify-center mb-6">
                <Database className="h-7 w-7 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Comprehensive Library</h3>
              <p className="text-gray-600">
                Extensive collection of practice exams covering all year levels and key subject areas.
              </p>
            </div>

            <div className="card-glow p-6 reveal-element hover-scale" style={{ "--delay": 2 } as React.CSSProperties}>
              <div className="h-14 w-14 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                <BarChart className="h-7 w-7 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-3">Smart Analytics</h3>
              <p className="text-gray-600">
                Detailed performance insights that highlight strengths and pinpoint areas needing improvement.
              </p>
            </div>

            <div className="card-glow p-6 reveal-element hover-scale" style={{ "--delay": 3 } as React.CSSProperties}>
              <div className="h-14 w-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Lock className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Safe Environment</h3>
              <p className="text-gray-600">
                A distraction-free, secure space specifically designed for focused exam preparation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20">
        <div className="container px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 reveal-element">How ElevatEdAccess Works</h2>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            <div className="reveal-element">
              <div className="relative">
                <div className="absolute -top-10 left-0 text-8xl font-bold text-primary/10">1</div>
                <div className="card-glow p-8 pt-12 relative">
                  <img 
                    src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=500&h=300" 
                    alt="Choose exam" 
                    className="w-full h-40 object-cover rounded-lg mb-6" 
                  />
                  <h3 className="text-xl font-bold mb-3">Choose Your Exam</h3>
                  <p className="text-gray-600">
                    Select your year level and subject, then browse through our NAPLAN or ICAS style practice exams.
                  </p>
                </div>
              </div>
            </div>

            <div className="reveal-element" style={{ "--delay": 1 } as React.CSSProperties}>
              <div className="relative">
                <div className="absolute -top-10 left-0 text-8xl font-bold text-primary/10">2</div>
                <div className="card-glow p-8 pt-12 relative">
                  <img 
                    src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=500&h=300" 
                    alt="Take exam" 
                    className="w-full h-40 object-cover rounded-lg mb-6" 
                  />
                  <h3 className="text-xl font-bold mb-3">Complete the Exam</h3>
                  <p className="text-gray-600">
                    Take your time answering questions in our distraction-free, student-friendly exam environment.
                  </p>
                </div>
              </div>
            </div>

            <div className="reveal-element" style={{ "--delay": 2 } as React.CSSProperties}>
              <div className="relative">
                <div className="absolute -top-10 left-0 text-8xl font-bold text-primary/10">3</div>
                <div className="card-glow p-8 pt-12 relative">
                  <img 
                    src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=500&h=300" 
                    alt="Review results" 
                    className="w-full h-40 object-cover rounded-lg mb-6" 
                  />
                  <h3 className="text-xl font-bold mb-3">Review Your Results</h3>
                  <p className="text-gray-600">
                    Get instant feedback, detailed explanations, and monitor your progress over time with our analytics.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-16 reveal-element">
            <Link to="/exams">
              <Button size="lg" className="rounded-full px-8 py-6 shadow-lg hover:shadow-primary/20 text-lg btn-shine">
                Try a Free Exam <ArrowUpRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="container px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 reveal-element">
            What Students & Parents Say
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-6">
            <div className="card-glow p-8 reveal-element">
              <div className="flex items-center mb-6 text-yellow-400">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "ElevatEdAccess helped me improve my maths skills so much! I went from being nervous about NAPLAN to feeling confident. The practice exams are just like the real thing!"
              </p>
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">E</div>
                <div className="ml-4">
                  <p className="font-semibold">Emma S.</p>
                  <p className="text-sm text-gray-600">Year 6 Student</p>
                </div>
              </div>
            </div>

            <div className="card-glow p-8 reveal-element" style={{ "--delay": 1 } as React.CSSProperties}>
              <div className="flex items-center mb-6 text-yellow-400">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "As a parent, I love that I can see my child's progress and identify areas that need more attention. The detailed breakdowns after each exam are incredibly helpful."
              </p>
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-secondary/20 flex items-center justify-center text-secondary font-bold">M</div>
                <div className="ml-4">
                  <p className="font-semibold">Michael T.</p>
                  <p className="text-sm text-gray-600">Parent of Year 4 Student</p>
                </div>
              </div>
            </div>

            <div className="card-glow p-8 reveal-element" style={{ "--delay": 2 } as React.CSSProperties}>
              <div className="flex items-center mb-6 text-yellow-400">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "ElevatEdAccess's practice exams really helped me understand what to expect on test day. The explanations after each question helped me learn from my mistakes."
              </p>
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold">J</div>
                <div className="ml-4">
                  <p className="font-semibold">James K.</p>
                  <p className="text-sm text-gray-600">Year 8 Student</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 z-0"></div>
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>
        
        <div className="container px-4 md:px-8 relative z-10">
          <div className="card-glow p-10 md:p-16 text-center max-w-4xl mx-auto reveal-element">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Excel in Your Exams?</h2>
            <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
              Join thousands of students already improving their test scores with our specialized practice exams and detailed analytics.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-5">
              <Link to="/signup">
                <Button size="lg" className="rounded-full px-10 py-6 shadow-lg hover:shadow-primary/20 text-lg btn-shine w-full sm:w-auto">
                  Get Started Free
                </Button>
              </Link>
              <Link to="/exams">
                <Button size="lg" variant="outline" className="rounded-full px-10 py-6 border-2 text-lg hover:bg-primary/5 w-full sm:w-auto">
                  Browse Exams
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
