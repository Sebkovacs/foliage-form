import React, { useState, useEffect, Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Philosophy from './components/Philosophy';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import CookieConsent from './components/CookieConsent';
import StyleQuiz from './components/StyleQuiz';
import AssetGenerator from './components/AssetGenerator';
import { ArrowUp, Loader2 } from 'lucide-react';
import { PageView } from './types';

// Lazy load heavy image-rich components
const FeaturedPlants = lazy(() => import('./components/FeaturedPlants'));
const DesignerPots = lazy(() => import('./components/DesignerPots'));
const Portfolio = lazy(() => import('./components/Portfolio'));
const Research = lazy(() => import('./components/Research'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const FAQ = lazy(() => import('./components/FAQ'));

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [currentPage, setCurrentPage] = useState<PageView>('home');
  const [showGenerator, setShowGenerator] = useState(false);
  
  // Style Quiz State
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizResult, setQuizResult] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    // Keyboard Listener for Asset Generator (Ctrl + Shift + G)
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && (e.key === 'G' || e.key === 'g')) {
        e.preventDefault();
        setShowGenerator(prev => !prev);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Dynamic Document Title
  useEffect(() => {
    const baseTitle = "Foliage & Form | Interior Plant Styling";
    switch (currentPage) {
      case 'privacy':
        document.title = `Privacy Policy | ${baseTitle}`;
        break;
      case 'terms':
        document.title = `Terms of Service | ${baseTitle}`;
        break;
      default:
        document.title = baseTitle;
    }
  }, [currentPage]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const navigateTo = (page: PageView) => {
    setCurrentPage(page);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleQuizComplete = (result: string) => {
    setQuizResult(result);
    setShowQuiz(false);
    // Scroll to contact form
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col min-h-screen relative">
      <Navbar currentPage={currentPage} onNavigate={navigateTo} />
      
      <main className="flex-grow">
        {currentPage === 'home' && (
          <>
            <Hero onStartQuiz={() => setShowQuiz(true)} />
            <About />
            <Philosophy />
            
            <Suspense fallback={
              <div className="py-24 flex justify-center items-center bg-white">
                <Loader2 className="w-8 h-8 text-clay animate-spin" />
              </div>
            }>
              <FeaturedPlants />
              <DesignerPots />
              <Services />
              <Research />
              <Portfolio />
              <Testimonials />
              <FAQ />
            </Suspense>

            <Contact initialMessage={quizResult} />
          </>
        )}
        
        {currentPage === 'privacy' && <PrivacyPolicy />}
        {currentPage === 'terms' && <TermsOfService />}
      </main>

      <Footer onNavigate={navigateTo} />
      <CookieConsent onNavigate={navigateTo} />
      
      {/* Interactive Overlays */}
      {showQuiz && (
        <StyleQuiz 
          onClose={() => setShowQuiz(false)} 
          onComplete={handleQuizComplete} 
        />
      )}

      {showGenerator && (
        <AssetGenerator onClose={() => setShowGenerator(false)} />
      )}

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-50 bg-forest-green text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:bg-charcoal focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-forest-green ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6" />
      </button>
    </div>
  );
}

export default App;