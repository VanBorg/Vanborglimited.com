import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './Container';
import { cn } from '../../utils/cn';
import { Github, Linkedin, Twitter, Instagram, Facebook, MapPin, Mail, Phone, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-light-bg-secondary dark:bg-dark-bg-secondary pt-12 pb-6 border-t border-light-text-secondary/10 dark:border-dark-text-secondary/10">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          {/* Brand & Company Info column */}
          <div className="md:col-span-2">
            <Link
              to="/"
              className="text-2xl font-title font-bold bg-gradient-to-r from-light-brand-primary to-light-brand-secondary dark:from-dark-brand-primary dark:to-dark-brand-secondary bg-clip-text text-transparent inline-block mb-4"
            >
              Van Borg
            </Link>
            <p className="text-light-text-secondary dark:text-dark-text-secondary mb-4 font-body">
              Building permanent AI systems that capture leads, book clients, boost sales, and save you time.
            </p>
            
            <div className="mt-6">
              <h3 className="font-semibold text-light-text-primary dark:text-dark-text-primary mb-3 font-title">Company Information</h3>
              <div className="space-y-2 text-light-text-secondary dark:text-dark-text-secondary text-sm">
                <p className="font-medium">Van Borg Limited</p>
                <p>Registered in England and Wales</p>
                <p>Company Number: 16172283</p>
                <p>Incorporated: 9 January 2025</p>
              </div>
            </div>
            
            <div className="flex space-x-4 mt-6">
              <SocialLink href="https://twitter.com" icon={<Twitter size={18} />} />
              <SocialLink href="https://linkedin.com" icon={<Linkedin size={18} />} />
              <SocialLink href="https://facebook.com" icon={<Facebook size={18} />} />
              <SocialLink href="https://github.com" icon={<Github size={18} />} />
              <SocialLink href="https://instagram.com" icon={<Instagram size={18} />} />
            </div>
          </div>

          {/* Pages column */}
          <div className="md:col-span-1">
            <h3 className="font-semibold text-light-text-primary dark:text-dark-text-primary mb-4 font-title">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-light-text-secondary dark:text-dark-text-secondary hover:text-light-brand-primary dark:hover:text-dark-brand-primary transition-colors duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-light-text-secondary dark:text-dark-text-secondary hover:text-light-brand-primary dark:hover:text-dark-brand-primary transition-colors duration-200"
                >
                  Pricing and Services
                </Link>
              </li>
              <li>
                <Link
                  to="/sitemap"
                  className="text-light-text-secondary dark:text-dark-text-secondary hover:text-light-brand-primary dark:hover:text-dark-brand-primary transition-colors duration-200"
                >
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Legal column */}
          <div className="md:col-span-1">
            <h3 className="font-semibold text-light-text-primary dark:text-dark-text-primary mb-4 font-title">Business</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/privacy"
                  className="text-light-text-secondary dark:text-dark-text-secondary hover:text-light-brand-primary dark:hover:text-dark-brand-primary transition-colors duration-200"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-light-text-secondary dark:text-dark-text-secondary hover:text-light-brand-primary dark:hover:text-dark-brand-primary transition-colors duration-200"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact column */}
          <div className="md:col-span-1">
            <h3 className="font-semibold text-light-text-primary dark:text-dark-text-primary mb-4 font-title">Contact</h3>
            <ul className="space-y-3 text-light-text-secondary dark:text-dark-text-secondary">
              <li className="flex items-start">
                <Mail className="w-5 h-5 text-light-brand-primary dark:text-dark-brand-primary mr-2 flex-shrink-0 mt-0.5" />
                <span>info@vanborglimited.com</span>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-light-brand-primary dark:text-dark-brand-primary mr-2 flex-shrink-0 mt-0.5" />
                <div>
                  <p>71–75 Shelton Street</p>
                  <p>Covent Garden</p>
                  <p>London, WC2H 9JQ</p>
                  <p>United Kingdom</p>
                </div>
              </li>
              <li className="flex items-start mt-2">
                <ExternalLink className="w-5 h-5 text-light-brand-primary dark:text-dark-brand-primary mr-2 flex-shrink-0 mt-0.5" />
                <a 
                  href="https://www.vanborglimited.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-light-brand-primary dark:hover:text-dark-brand-primary transition-colors duration-200"
                >
                  www.vanborglimited.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright and other footer info */}
        <div className="border-t border-light-text-secondary/10 dark:border-dark-text-secondary/10 pt-6 mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary mb-4 md:mb-0">
              © {currentYear} Van Borg Limited. All rights reserved. Managing Director: Nicolaas P. Sterenborg
            </p>
            <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">
              This site uses cookies for functional analytics. No tracking or selling.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

// Helper component for social links
interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'w-8 h-8 flex items-center justify-center rounded-full',
        'bg-light-bg-primary dark:bg-dark-bg-primary',
        'text-light-text-primary dark:text-dark-text-primary',
        'hover:bg-light-brand-primary hover:text-white',
        'dark:hover:bg-dark-brand-primary dark:hover:text-white',
        'transition-colors duration-200'
      )}
    >
      {icon}
    </a>
  );
};

export default Footer;