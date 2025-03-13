
import { Flame } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black border-t border-wukong-gold/20 py-12 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Flame className="h-5 w-5 text-wukong-amber" />
            <span className="text-xl font-display text-wukong-gold tracking-wider">WUKONG</span>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8">
            {['About', 'Gallery', 'Services', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-white/70 hover:text-wukong-gold transition-colors duration-300 text-sm text-center md:text-left"
              >
                {item}
              </a>
            ))}
          </div>
          
          <div className="text-white/50 text-sm">
            &copy; {currentYear} Wukong Cosplay. All rights reserved.
          </div>
        </div>
        
        <div className="border-t border-wukong-gold/10 mt-8 pt-8 text-center text-white/40 text-xs">
          <p>Black Myth: Wukong is a trademark of Game Science. This is a fan cosplay project.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
