
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import CosplaySection from '../components/CosplaySection';
import GallerySection from '../components/GallerySection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Index = () => {
  // Smooth scroll implementation
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (anchor && anchor.hash && anchor.hash.startsWith('#')) {
        e.preventDefault();
        
        const targetElement = document.querySelector(anchor.hash);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.getBoundingClientRect().top + window.scrollY - 80, // Offset for navbar
            behavior: 'smooth'
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      <main>
        <HeroSection />
        <CosplaySection />
        <GallerySection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
