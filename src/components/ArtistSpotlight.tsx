
import { ArrowRight } from 'lucide-react';
import ScrollReveal from './ui/ScrollReveal';

const ArtistSpotlight = () => {
  return (
    <section id="artist" className="bg-gradient-to-b from-black to-wukong-black section-padding relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="pattern-circles" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse" patternContentUnits="userSpaceOnUse">
            <circle id="pattern-circle" cx="10" cy="10" r="1.6257413380501518" fill="none" stroke="#D4AF37" strokeWidth="0.5"></circle>
          </pattern>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)"></rect>
        </svg>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal className="order-2 lg:order-1">
            <div className="bg-gradient-to-br from-wukong-black to-black/80 p-8 border border-wukong-gold/20 rounded-sm glassmorphism">
              <span className="text-wukong-gold inline-block mb-3 uppercase tracking-widest text-sm font-medium">The Artist</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-white">
                Tushar <span className="text-wukong-gold text-glow">Sun</span> Wukong
              </h2>
              
              <p className="text-white/80 mb-6">
                Award-winning cosplayer bringing the legendary Monkey King to life through meticulous craftsmanship and performance.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex gap-3">
                  <span className="text-wukong-gold">•</span>
                  <p className="text-white/80">Comic Con Champion for Best Game Character Cosplay</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-wukong-gold">•</span>
                  <p className="text-white/80">Featured in multiple gaming conventions across the country</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-wukong-gold">•</span>
                  <p className="text-white/80">Each costume piece hand-crafted with authentic materials</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-wukong-gold">•</span>
                  <p className="text-white/80">Performs choreographed routines inspired by the game's combat</p>
                </div>
              </div>
              
              <a 
                href="#contact" 
                className="group inline-flex items-center gap-2 text-wukong-gold hover:text-wukong-amber transition-colors"
              >
                Book for your event
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </ScrollReveal>
          
          <ScrollReveal className="order-1 lg:order-2">
            <div className="relative">
              <img 
                src="a8df78ee-28bc-410a-a841-516e2bc59603.png" 
                alt="Tushar as Sun Wukong" 
                className="w-full h-auto rounded-sm border-2 border-wukong-gold/20 image-glow"
              />
              <div className="absolute -bottom-4 -right-4 bg-black/80 backdrop-blur-sm border border-wukong-gold/30 p-3 rounded-sm">
                <p className="chinese-brush text-wukong-gold text-4xl">悟空</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
        
        <ScrollReveal delay={0.3}>
          <div className="mt-20 flex flex-wrap gap-4 justify-center">
            <div className="flex flex-col items-center p-6 bg-wukong-black/40 backdrop-blur-sm border border-wukong-gold/10 rounded-sm min-w-[180px]">
              <span className="text-3xl font-display text-wukong-gold mb-2">12+</span>
              <p className="text-white/70 text-center text-sm">Convention Appearances</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-wukong-black/40 backdrop-blur-sm border border-wukong-gold/10 rounded-sm min-w-[180px]">
              <span className="text-3xl font-display text-wukong-gold mb-2">300+</span>
              <p className="text-white/70 text-center text-sm">Hours of Crafting</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-wukong-black/40 backdrop-blur-sm border border-wukong-gold/10 rounded-sm min-w-[180px]">
              <span className="text-3xl font-display text-wukong-gold mb-2">5</span>
              <p className="text-white/70 text-center text-sm">Major Awards</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-wukong-black/40 backdrop-blur-sm border border-wukong-gold/10 rounded-sm min-w-[180px]">
              <span className="text-3xl font-display text-wukong-gold mb-2">8K+</span>
              <p className="text-white/70 text-center text-sm">Social Media Followers</p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ArtistSpotlight;
