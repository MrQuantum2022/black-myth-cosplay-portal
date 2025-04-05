
import { useEffect, useState, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const [offset, setOffset] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const scrollY = window.scrollY;
      setOffset(scrollY * 0.5); // Adjust the multiplier to control parallax speed
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      id="hero" 
      ref={heroRef}
      className="relative h-screen overflow-hidden bg-wukong-black flex flex-col items-center justify-center"
    >
      {/* Background image with parallax effect */}
      <div 
        className="absolute inset-0 h-[110%] w-full bg-cover bg-center hero-mask"
        style={{ 
          backgroundImage: "url('./lovable-uploads/d79f3f73-d06e-49bd-a294-644f95f32088.png')",
          transform: `translateY(${offset}px)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-6 text-center flex flex-col items-center">
        <span className="text-wukong-gold tracking-widest text-sm md:text-base uppercase font-medium mb-4 animate-fade-in-up opacity-0" style={{ animationDelay: '0.3s' }}>
          The Legend Reborn
        </span>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <span className="block">BLACK MYTH</span>
          <span className="text-wukong-gold text-glow">WUKONG</span>
        </h1>
        
        <p className="max-w-2xl text-white/80 mb-8 text-lg md:text-xl opacity-0 animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
          Bringing the Mythical Monkey King to life through exquisite craftsmanship and authentic cosplay artistry.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
          <a 
            href="#gallery" 
            className="bg-wukong-gold hover:bg-wukong-amber text-wukong-black font-medium px-8 py-3 rounded-sm transition-all duration-300"
          >
            View Gallery
          </a>
          <a 
            href="#contact" 
            className="bg-transparent hover:bg-white/10 border border-wukong-gold text-wukong-gold px-8 py-3 rounded-sm transition-all duration-300"
          >
            Book Session
          </a>
        </div>
        
        {/* Chinese character */}
        <div className="absolute right-10 top-1/2 -translate-y-1/2 opacity-20 hidden lg:block">
          <p className="chinese-brush text-wukong-gold text-[15rem] leading-none animate-pulse-slow">悟</p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/70 hover:text-white transition-colors cursor-pointer animate-bounce">
        <a href="#about" aria-label="Scroll down">
          <ChevronDown className="h-8 w-8" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
