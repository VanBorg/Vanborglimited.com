import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/ui/Navbar';
import Footer from './components/ui/Footer';

import Home from './pages/Home';
import PricingAndServices from './pages/Services';
import PrivacyPolicy from './pages/Privacy';
import TermsOfService from './pages/Terms';
import Sitemap from './pages/Sitemap';

// ScrollToTop component to handle scroll behavior on route change
function ScrollToTop() {
  const { pathname, hash } = useLocation();
  
  useEffect(() => {
    if (hash) {
      // If there's a hash, attempt to scroll to that element
      setTimeout(() => {
        // Properly format the hash for querySelector (remove the # from the hash)
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          // Add offset to account for fixed header (adjust the value as needed)
          const yOffset = -100; 
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          
          window.scrollTo({
            top: y,
            behavior: 'smooth'
          });
          
          // Add a highlight effect to make it clear where we scrolled to
          const originalBackground = element.style.backgroundColor;
          element.style.backgroundColor = 'rgba(220, 38, 38, 0.1)';
          setTimeout(() => {
            element.style.backgroundColor = originalBackground;
          }, 1500);
        } else {
          console.error(`Element with id "${id}" not found`);
        }
      }, 800); // Longer delay to ensure elements are rendered
    } else {
      // If no hash, scroll to top
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  
  return null;
}

const App: React.FC = () => {
  // Update the document title
  useEffect(() => {
    document.title = 'Van Borg - AI Automation & Chatbot Agency';
  }, []);
  
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen bg-light-bg-primary dark:bg-dark-bg-primary">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<PricingAndServices />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<TermsOfService />} />
              <Route path="/sitemap" element={<Sitemap />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;