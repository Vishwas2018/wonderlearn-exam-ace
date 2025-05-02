
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full py-4 bg-white/90 backdrop-blur-sm border-b border-border">
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl font-extrabold bg-gradient-to-r from-elevatEd-500 to-secondary bg-clip-text text-transparent">
            ElevatEdAccess
          </span>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/exams" className="font-medium hover:text-elevatEd-500 transition-colors">
            Exams
          </Link>
          <Link to="/pricing" className="font-medium hover:text-elevatEd-500 transition-colors">
            Pricing
          </Link>
          <Link to="/about" className="font-medium hover:text-elevatEd-500 transition-colors">
            About
          </Link>
          <Link to="/contact" className="font-medium hover:text-elevatEd-500 transition-colors">
            Contact
          </Link>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Link to="/login">
            <Button variant="outline">Log In</Button>
          </Link>
          <Link to="/signup">
            <Button>Sign Up Free</Button>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-gray-600"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg">
          <nav className="container py-4 flex flex-col space-y-4">
            <Link to="/exams" className="font-medium hover:text-elevatEd-500 transition-colors p-2">
              Exams
            </Link>
            <Link to="/pricing" className="font-medium hover:text-elevatEd-500 transition-colors p-2">
              Pricing
            </Link>
            <Link to="/about" className="font-medium hover:text-elevatEd-500 transition-colors p-2">
              About
            </Link>
            <Link to="/contact" className="font-medium hover:text-elevatEd-500 transition-colors p-2">
              Contact
            </Link>
            <div className="pt-2 space-y-2">
              <Link to="/login" className="block w-full">
                <Button variant="outline" className="w-full">Log In</Button>
              </Link>
              <Link to="/signup" className="block w-full">
                <Button className="w-full">Sign Up Free</Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navigation;
