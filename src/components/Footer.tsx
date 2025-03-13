
import { Flame, Instagram, Youtube, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black border-t border-wukong-gold/20 py-12 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
          <div className="flex items-center gap-2">
            <Flame className="h-5 w-5 text-wukong-amber" />
            <span className="text-xl font-display text-wukong-gold tracking-wider">WUKONG</span>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8">
            {[
              { name: 'Home', href: '#hero' },
              { name: 'About', href: '#about' },
              { name: 'Artist', href: '#artist' },
              { name: 'Gallery', href: '#gallery' },
              { name: 'Contact', href: '#contact' }
            ].map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white/70 hover:text-wukong-gold transition-colors duration-300 text-sm text-center md:text-left"
              >
                {item.name}
              </a>
            ))}
          </div>
          
          <div className="flex space-x-4">
            <a href="#" className="w-8 h-8 rounded-full flex items-center justify-center border border-wukong-gold/30 text-wukong-gold hover:bg-wukong-gold hover:text-black transition-colors">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="#" className="w-8 h-8 rounded-full flex items-center justify-center border border-wukong-gold/30 text-wukong-gold hover:bg-wukong-gold hover:text-black transition-colors">
              <Youtube className="h-4 w-4" />
            </a>
            <a href="#" className="w-8 h-8 rounded-full flex items-center justify-center border border-wukong-gold/30 text-wukong-gold hover:bg-wukong-gold hover:text-black transition-colors">
              <Twitter className="h-4 w-4" />
            </a>
            <a href="#contact" className="w-8 h-8 rounded-full flex items-center justify-center border border-wukong-gold/30 text-wukong-gold hover:bg-wukong-gold hover:text-black transition-colors">
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-wukong-gold/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-white/50 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Wukong Cosplay. All rights reserved.
          </div>
          
          <div className="text-center text-white/40 text-xs">
            <p>Black Myth: Wukong is a trademark of Game Science. This is a fan cosplay project.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
