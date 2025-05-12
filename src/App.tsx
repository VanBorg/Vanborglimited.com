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
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
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