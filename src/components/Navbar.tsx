
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X, Flame } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-6 md:px-10 py-4',
        isScrolled ? 'bg-black/80 backdrop-blur-sm border-b border-wukong-gold/20' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        <a 
          href="#hero" 
          className="text-2xl font-display text-wukong-gold flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <Flame className="h-6 w-6 text-wukong-amber animate-pulse-slow" />
          <span className="tracking-wider">WUKONG</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {['About', 'Gallery', 'Services', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-white/90 hover:text-wukong-gold transition-colors duration-300 font-medium tracking-wide text-sm"
            >
              {item}
            </a>
          ))}
          <a 
            href="#contact" 
            className="bg-wukong-gold/10 hover:bg-wukong-gold/20 border border-wukong-gold/50 text-wukong-gold px-5 py-2 rounded-sm transition-all duration-300"
          >
            Book Now
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={cn(
          "fixed inset-0 z-40 bg-black/95 flex flex-col justify-center items-center space-y-8 transition-all duration-500 ease-in-out md:hidden",
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        {['About', 'Gallery', 'Services', 'Contact'].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-white hover:text-wukong-gold transition-colors duration-300 font-display text-xl tracking-wide"
            onClick={() => setIsMenuOpen(false)}
          >
            {item}
          </a>
        ))}
        <a 
          href="#contact" 
          className="bg-wukong-gold/10 hover:bg-wukong-gold/20 border border-wukong-gold/50 text-wukong-gold px-6 py-3 rounded-sm transition-all duration-300 mt-4"
          onClick={() => setIsMenuOpen(false)}
        >
          Book Now
        </a>
      </div>
    </header>
  );
};

export default Navbar;
