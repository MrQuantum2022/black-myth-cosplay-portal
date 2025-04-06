
import ScrollReveal from './ui/ScrollReveal';
import { Sword, Star, Circle } from 'lucide-react';

const CosplaySection = () => {
  const features = [
    {
      icon: <Sword className="h-6 w-6 text-wukong-gold" />,
      title: "Authentic Weaponry",
      description: "Expertly crafted replicas of the Monkey King's iconic Ruyi Jingu Bang staff with meticulous attention to detail."
    },
    {
      icon: <Circle className="h-6 w-6 text-wukong-gold" />,
      title: "Premium Materials",
      description: "High-quality fabrics, armor, and accessories sourced to create durable, comfortable, and visually stunning costumes."
    },
    {
      icon: <Star className="h-6 w-6 text-wukong-gold" />,
      title: "Character Embodiment",
      description: "Full character immersion with posture training, movement coaching, and character expression guidance."
    }
  ];

  return (
    <section id="about" className="relative bg-gradient-to-b from-black to-wukong-black section-padding overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-wukong-gold/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-wukong-gold/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <ScrollReveal>
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 border-t-2 border-l-2 border-wukong-gold/30"></div>
              <div className="relative overflow-hidden rounded-sm">
                <img 
                  src="./lovable-uploads/363e53dc-f32d-4908-9abc-6ede6b65b3cd.png" 
                  alt="Wukong Cosplay" 
                  className="w-full h-auto hover:scale-105 transition-transform duration-700 ease-in-out"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 border-b-2 border-r-2 border-wukong-gold/30"></div>
            </div>
          </ScrollReveal>

          <div>
            <ScrollReveal delay={0.1}>
              <span className="text-wukong-gold inline-block mb-3 uppercase tracking-widest text-sm font-medium">The Artistry</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white">
                Master <span className="text-wukong-gold text-glow">Cosplay</span> Craftsmanship
              </h2>
              <p className="text-white/80 mb-8 text-lg leading-relaxed">
                With over 3 years of experience in character design and cosplay artistry, I bring the iconic Monkey King from Black Myth: Wukong to life through intricate costume creation, authentic prop replication, and complete character embodiment. Each element is meticulously handcrafted to capture the essence of this legendary figure.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
                {features.map((feature, index) => (
                  <div key={index} className="bg-black/30 backdrop-blur-sm border border-wukong-gold/10 p-6 rounded-sm hover:border-wukong-gold/30 transition-all duration-300">
                    <div className="bg-wukong-gold/10 p-3 rounded-sm inline-block mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-white font-medium text-lg mb-2">{feature.title}</h3>
                    <p className="text-white/70 text-sm">{feature.description}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CosplaySection;
