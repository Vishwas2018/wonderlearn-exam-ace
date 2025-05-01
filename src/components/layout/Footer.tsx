
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 pt-12 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="block">
              <span className="text-xl font-extrabold bg-gradient-to-r from-wl-blue to-wl-purple bg-clip-text text-transparent">
                WonderLearn
              </span>
            </Link>
            <p className="text-sm text-gray-600 max-w-xs">
              Practice. Progress. Perform with WonderLearn – Australia's premier educational assessment platform.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-gray-800 mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-gray-600 hover:text-wl-blue transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-gray-600 hover:text-wl-blue transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/exams" className="text-gray-600 hover:text-wl-blue transition-colors">
                  Exams
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-600 hover:text-wl-blue transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-gray-800 mb-4">Features</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/features/naplan" className="text-gray-600 hover:text-wl-blue transition-colors">
                  NAPLAN Practice
                </Link>
              </li>
              <li>
                <Link to="/features/icas" className="text-gray-600 hover:text-wl-blue transition-colors">
                  ICAS Practice
                </Link>
              </li>
              <li>
                <Link to="/features/tracking" className="text-gray-600 hover:text-wl-blue transition-colors">
                  Progress Tracking
                </Link>
              </li>
              <li>
                <Link to="/features/analytics" className="text-gray-600 hover:text-wl-blue transition-colors">
                  Performance Analytics
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-gray-800 mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-600">support@wonderlearn.com.au</li>
              <li className="pt-4 flex space-x-4">
                <a href="#" className="text-gray-500 hover:text-wl-blue">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-500 hover:text-wl-blue">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-500 hover:text-wl-blue">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-500 hover:text-wl-blue">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.543 6.498C22 8.28 22 12 22 12s0 3.72-.457 5.502c-.254.985-.997 1.76-1.938 2.022C17.896 20 12 20 12 20s-5.893 0-7.605-.476c-.945-.266-1.687-1.04-1.938-2.022C2 15.72 2 12 2 12s0-3.72.457-5.502c.254-.985.997-1.76 1.938-2.022C6.107 4 12 4 12 4s5.896 0 7.605.476c.945.266 1.687 1.04 1.938 2.022zM10 15.5l6-3.5-6-3.5v7z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600">© 2025 WonderLearn. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-sm text-gray-600 hover:text-wl-blue transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm text-gray-600 hover:text-wl-blue transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
