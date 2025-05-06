
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, LogOut, User } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { user, isAuthenticated, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => {
    return location.pathname === path ? 'text-primary font-bold' : 'text-foreground hover:text-primary transition-colors duration-200';
  };

  const handleLogout = () => {
    logout();
    // Close mobile menu if open
    setIsMenuOpen(false);
  };

  return (
    <header className={`sticky top-0 z-50 w-full py-3 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="relative">
            <span className="text-2xl font-extrabold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              ElevatEdAccess
            </span>
            <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-secondary"></div>
          </div>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/exams" className={`font-medium ${isActive('/exams')}`}>
            Exams
          </Link>
          <Link to="/pricing" className={`font-medium ${isActive('/pricing')}`}>
            Pricing
          </Link>
          <div className="relative group">
            <button className={`font-medium flex items-center group ${isActive('/features')}`}>
              Features <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
            </button>
            <div className="absolute left-0 top-full mt-2 w-48 rounded-xl overflow-hidden bg-white/90 backdrop-blur-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top scale-95 group-hover:scale-100">
              <div className="py-2">
                <Link to="/features/naplan" className="block px-4 py-2 hover:bg-accent/10 transition-colors">NAPLAN Prep</Link>
                <Link to="/features/icas" className="block px-4 py-2 hover:bg-accent/10 transition-colors">ICAS Practice</Link>
                <Link to="/features/tracking" className="block px-4 py-2 hover:bg-accent/10 transition-colors">Progress Tracking</Link>
                <Link to="/features/analytics" className="block px-4 py-2 hover:bg-accent/10 transition-colors">Performance Analytics</Link>
              </div>
            </div>
          </div>
          <Link to="/about" className={`font-medium ${isActive('/about')}`}>
            About
          </Link>
          <Link to="/contact" className={`font-medium ${isActive('/contact')}`}>
            Contact
          </Link>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          {isAuthenticated ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="rounded-full px-4 flex items-center gap-2 hover:bg-primary/5">
                  <User size={16} />
                  {user?.name || 'Account'}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link to="/profile" className="w-full">Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/dashboard" className="w-full">Dashboard</Link>
                </DropdownMenuItem>
                {user?.isSubscribed ? (
                  <DropdownMenuItem>
                    <Link to="/subscription" className="w-full">Manage Subscription</Link>
                  </DropdownMenuItem>
                ) : (
                  <DropdownMenuItem>
                    <Link to="/pricing" className="w-full">Upgrade to Premium</Link>
                  </DropdownMenuItem>
                )}
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout} className="text-red-500 cursor-pointer">
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <>
              <Link to="/login">
                <Button variant="outline" className="rounded-full px-6 hover:bg-primary/5">Log In</Button>
              </Link>
              <Link to="/signup">
                <Button className="rounded-full px-6 shadow-lg hover:shadow-primary/20 btn-shine">Sign Up Free</Button>
              </Link>
            </>
          )}
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-gray-600 rounded-full hover:bg-gray-100"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-lg">
          <nav className="container py-4 flex flex-col space-y-3">
            <Link 
              to="/exams" 
              className={`font-medium p-2 rounded-lg ${isActive('/exams') ? 'bg-primary/10' : 'hover:bg-gray-100'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Exams
            </Link>
            <Link 
              to="/pricing" 
              className={`font-medium p-2 rounded-lg ${isActive('/pricing') ? 'bg-primary/10' : 'hover:bg-gray-100'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <div className="border-t border-gray-200 pt-2 pb-1">
              <p className="px-2 text-sm text-gray-500 font-semibold">Features</p>
            </div>
            <Link 
              to="/features/naplan" 
              className="font-medium p-2 pl-4 rounded-lg hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              NAPLAN Prep
            </Link>
            <Link 
              to="/features/icas" 
              className="font-medium p-2 pl-4 rounded-lg hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              ICAS Practice
            </Link>
            <Link 
              to="/features/tracking" 
              className="font-medium p-2 pl-4 rounded-lg hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Progress Tracking
            </Link>
            <Link 
              to="/features/analytics" 
              className="font-medium p-2 pl-4 rounded-lg hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Performance Analytics
            </Link>
            <div className="border-t border-gray-200 pt-2"></div>
            <Link 
              to="/about" 
              className={`font-medium p-2 rounded-lg ${isActive('/about') ? 'bg-primary/10' : 'hover:bg-gray-100'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className={`font-medium p-2 rounded-lg ${isActive('/contact') ? 'bg-primary/10' : 'hover:bg-gray-100'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            
            {isAuthenticated ? (
              <>
                <div className="border-t border-gray-200 pt-3 mt-2">
                  <div className="px-2 py-1">
                    <p className="text-sm text-gray-500">Signed in as <span className="font-medium">{user?.email}</span></p>
                  </div>
                  <div className="grid grid-cols-2 gap-3 mt-2">
                    <Link to="/dashboard" className="block w-full" onClick={() => setIsMenuOpen(false)}>
                      <Button variant="outline" className="w-full rounded-full">Dashboard</Button>
                    </Link>
                    <Button 
                      variant="destructive" 
                      className="w-full rounded-full" 
                      onClick={handleLogout}
                    >
                      Log Out
                    </Button>
                  </div>
                </div>
              </>
            ) : (
              <div className="pt-2 grid grid-cols-2 gap-3">
                <Link to="/login" className="block w-full" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="outline" className="w-full rounded-full">Log In</Button>
                </Link>
                <Link to="/signup" className="block w-full" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full rounded-full btn-shine">Sign Up Free</Button>
                </Link>
              </div>
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navigation;
