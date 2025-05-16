import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Container from './Container';
import ThemeToggle from './ThemeToggle';
import { navigationItems } from '../../data/navigation';
import { cn } from '../../utils/cn';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Filter out 'Home' and 'Contact' links
  const filteredNavItems = navigationItems.filter(item => 
    item.path !== '/' && item.path !== '/contact'
  );

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when changing routes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-light-bg-primary/80 dark:bg-dark-bg-primary/80 backdrop-blur-md py-3 shadow-md'
          : 'bg-transparent py-5'
      )}
    >
      <Container>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            onClick={() => window.scrollTo(0, 0)}
            className="text-2xl font-title font-bold bg-gradient-to-r from-light-brand-primary to-light-brand-secondary dark:from-dark-brand-primary dark:to-dark-brand-secondary bg-clip-text text-transparent"
          >
            Van Borg
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {filteredNavItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => window.scrollTo(0, 0)}
                className={cn(
                  'text-light-text-primary dark:text-white hover:text-light-brand-primary dark:hover:text-dark-brand-primary transition-colors duration-200 font-title',
                  location.pathname === item.path && 'font-medium text-light-brand-primary dark:text-dark-brand-primary'
                )}
              >
                {item.label}
              </Link>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <ThemeToggle className="mr-2" />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-light-text-primary dark:text-white hover:bg-light-brand-secondary/20 dark:hover:bg-dark-brand-secondary/20 focus:outline-none transform active:scale-[0.90]"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 py-4 rounded-lg bg-light-bg-secondary dark:bg-dark-bg-secondary">
            <div className="flex flex-col space-y-4 px-4">
              <Link
                to="/"
                onClick={() => window.scrollTo(0, 0)}
                className={cn(
                  'py-2 text-light-text-primary dark:text-white hover:text-light-brand-primary dark:hover:text-dark-brand-primary transition-colors duration-200 font-title',
                  location.pathname === '/' && 'font-medium text-light-brand-primary dark:text-dark-brand-primary'
                )}
              >
                Home
              </Link>
              {filteredNavItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => window.scrollTo(0, 0)}
                  className={cn(
                    'py-2 text-light-text-primary dark:text-white hover:text-light-brand-primary dark:hover:text-dark-brand-primary transition-colors duration-200 font-title',
                    location.pathname === item.path && 'font-medium text-light-brand-primary dark:text-dark-brand-primary'
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </Container>
    </nav>
  );
};

export default Navbar;