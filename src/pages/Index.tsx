
import React, { useEffect, useRef } from 'react';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { CheckCircle, Target, TrendingUp, Lock, ArrowRight } from 'lucide-react';

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

    document.querySelectorAll('.scroll-animation').forEach((el) => {
      observer.observe(el);
      el.style.opacity = '0'; // Hide initially
    });
  };

  useEffect(() => {
    setupIntersectionObserver();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-50 to-purple-50 overflow-hidden">
        <div className="container py-16 md:py-24 flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-8 mb-10 lg:mb-0 z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
              Master NAPLAN & ICAS with Confidence
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Practice. Progress. Perform with WonderLearn – Australia's premier educational assessment platform.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/exams">
                <Button size="lg" className="text-lg px-8 py-6">
                  Start Free Exam
                </Button>
              </Link>
              <Link to="/pricing">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                  View Pricing
                </Button>
              </Link>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                alt="Student learning with WonderLearn" 
                className="w-full h-auto rounded-lg animate-hero-zoom"
                style={{ objectFit: 'cover' }} 
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-wl-blue/20 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Decorative background elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-wl-yellow/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-wl-purple/10 rounded-full blur-xl"></div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Choose <span className="text-wl-blue">WonderLearn</span>?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <div className="scroll-animation flex flex-col items-center text-center p-6 rounded-xl hover:shadow-lg transition-all hover:bg-blue-50 hover-scale">
              <div className="h-14 w-14 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Target className="h-7 w-7 text-wl-blue" />
              </div>
              <h3 className="text-xl font-bold mb-3">NAPLAN & ICAS-style practice</h3>
              <p className="text-gray-600">
                Authentic exam questions designed to mirror the style and format of real NAPLAN and ICAS tests.
              </p>
            </div>

            <div className="scroll-animation flex flex-col items-center text-center p-6 rounded-xl hover:shadow-lg transition-all hover:bg-purple-50 hover-scale">
              <div className="h-14 w-14 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="h-7 w-7 text-wl-purple" />
              </div>
              <h3 className="text-xl font-bold mb-3">Daily progress tracking</h3>
              <p className="text-gray-600">
                Track your progress over time with detailed history and analytics of past exams and performance.
              </p>
            </div>

            <div className="scroll-animation flex flex-col items-center text-center p-6 rounded-xl hover:shadow-lg transition-all hover:bg-green-50 hover-scale">
              <div className="h-14 w-14 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <TrendingUp className="h-7 w-7 text-wl-green" />
              </div>
              <h3 className="text-xl font-bold mb-3">Smart feedback & analytics</h3>
              <p className="text-gray-600">
                Receive personalized feedback and detailed performance analytics after each completed exam.
              </p>
            </div>

            <div className="scroll-animation flex flex-col items-center text-center p-6 rounded-xl hover:shadow-lg transition-all hover:bg-yellow-50 hover-scale">
              <div className="h-14 w-14 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                <Lock className="h-7 w-7 text-amber-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">Secure testing environment</h3>
              <p className="text-gray-600">
                A distraction-free, secure environment designed specifically for focused exam preparation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">How WonderLearn Works</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="scroll-animation relative flex flex-col items-center text-center p-6">
              <div className="absolute -top-10 text-6xl font-bold text-gray-100">1</div>
              <div className="bg-white p-6 rounded-xl shadow-md w-full">
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=500&h=300" 
                  alt="Choose exam" 
                  className="w-full h-40 object-cover rounded-lg mb-4" 
                />
                <h3 className="text-xl font-bold mb-3">Choose Your Exam</h3>
                <p className="text-gray-600">
                  Select your year level and subject, then choose from NAPLAN or ICAS style practice exams.
                </p>
              </div>
            </div>

            <div className="scroll-animation relative flex flex-col items-center text-center p-6" style={{"--delay": 1} as React.CSSProperties}>
              <div className="absolute -top-10 text-6xl font-bold text-gray-100">2</div>
              <div className="bg-white p-6 rounded-xl shadow-md w-full">
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=500&h=300" 
                  alt="Take exam" 
                  className="w-full h-40 object-cover rounded-lg mb-4" 
                />
                <h3 className="text-xl font-bold mb-3">Complete the Exam</h3>
                <p className="text-gray-600">
                  Take your time to answer questions in our distraction-free, student-friendly exam environment.
                </p>
              </div>
            </div>

            <div className="scroll-animation relative flex flex-col items-center text-center p-6" style={{"--delay": 2} as React.CSSProperties}>
              <div className="absolute -top-10 text-6xl font-bold text-gray-100">3</div>
              <div className="bg-white p-6 rounded-xl shadow-md w-full">
                <img 
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=500&h=300" 
                  alt="Review results" 
                  className="w-full h-40 object-cover rounded-lg mb-4" 
                />
                <h3 className="text-xl font-bold mb-3">Review Your Results</h3>
                <p className="text-gray-600">
                  Get instant feedback, detailed explanations, and track your progress over time.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/exams">
              <Button size="lg" className="text-lg px-8">
                Try a Free Exam <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            What Students & Parents Say
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-10">
            <div className="scroll-animation bg-blue-50 p-6 rounded-xl">
              <div className="flex items-center mb-4 text-yellow-400">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
              </div>
              <p className="text-gray-700 mb-4">
                "WonderLearn helped me improve my maths skills so much! I went from being nervous about NAPLAN to feeling confident. The practice exams are just like the real thing!"
              </p>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-blue-200 flex items-center justify-center text-blue-600 font-bold">E</div>
                <div className="ml-3">
                  <p className="font-semibold">Emma S.</p>
                  <p className="text-sm text-gray-600">Year 6 Student</p>
                </div>
              </div>
            </div>

            <div className="scroll-animation bg-purple-50 p-6 rounded-xl" style={{"--delay": 1} as React.CSSProperties}>
              <div className="flex items-center mb-4 text-yellow-400">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
              </div>
              <p className="text-gray-700 mb-4">
                "As a parent, I love that I can see my child's progress and identify areas that need more attention. The detailed breakdowns after each exam are incredibly helpful."
              </p>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-purple-200 flex items-center justify-center text-purple-600 font-bold">M</div>
                <div className="ml-3">
                  <p className="font-semibold">Michael T.</p>
                  <p className="text-sm text-gray-600">Parent of Year 4 Student</p>
                </div>
              </div>
            </div>

            <div className="scroll-animation bg-green-50 p-6 rounded-xl" style={{"--delay": 2} as React.CSSProperties}>
              <div className="flex items-center mb-4 text-yellow-400">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
              </div>
              <p className="text-gray-700 mb-4">
                "The ICAS practice tests helped me score a distinction in science! I love how the platform explains why answers are right or wrong. It helped me understand concepts better."
              </p>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-green-200 flex items-center justify-center text-green-600 font-bold">J</div>
                <div className="ml-3">
                  <p className="font-semibold">James L.</p>
                  <p className="text-sm text-gray-600">Year 9 Student</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-12 bg-gray-50">
        <div className="container text-center">
          <p className="text-lg font-medium text-gray-600 mb-8">
            Trusted by over 10,000 Australian students
          </p>
          <div className="flex flex-wrap justify-center gap-8 opacity-70">
            <div className="w-32 h-12 bg-gray-300 rounded flex items-center justify-center">
              <span className="font-bold text-gray-600">School 1</span>
            </div>
            <div className="w-32 h-12 bg-gray-300 rounded flex items-center justify-center">
              <span className="font-bold text-gray-600">School 2</span>
            </div>
            <div className="w-32 h-12 bg-gray-300 rounded flex items-center justify-center">
              <span className="font-bold text-gray-600">School 3</span>
            </div>
            <div className="w-32 h-12 bg-gray-300 rounded flex items-center justify-center">
              <span className="font-bold text-gray-600">School 4</span>
            </div>
            <div className="w-32 h-12 bg-gray-300 rounded flex items-center justify-center">
              <span className="font-bold text-gray-600">School 5</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-wl-blue to-wl-purple text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Excel in Your Exams?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of Australian students who are mastering NAPLAN and ICAS with WonderLearn.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/signup">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6 bg-white text-wl-blue hover:bg-gray-100">
                Sign Up Free
              </Button>
            </Link>
            <Link to="/exams">
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-white text-white hover:bg-white/10">
                Explore Exams
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
