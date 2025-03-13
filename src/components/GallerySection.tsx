
import { useState, useRef } from 'react';
import ScrollReveal from './ui/ScrollReveal';
import { cn } from '@/lib/utils';

const GallerySection = () => {
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const images = [
    {
      src: "/lovable-uploads/a4c5e03b-d6d0-4d26-98e2-337c28f01ab4.png",
      alt: "Wukong Cosplay Portrait",
      caption: "Character portrayal with authentic facial features and expressions"
    },
    {
      src: "/lovable-uploads/6a38616e-7721-4d74-8d03-0a6681330d32.png",
      alt: "Wukong Silhouette",
      caption: "Dramatic silhouette against sunset highlighting the iconic staff"
    },
    {
      src: "/lovable-uploads/215804df-33e7-40e5-8748-0449bfc8a328.png",
      alt: "Wukong Studio Portrait",
      caption: "Detailed armor craftsmanship with intricate golden embellishments"
    },
    {
      src: "/lovable-uploads/f531e1cc-fcdc-471b-a8b9-dc399381c41a.png",
      alt: "Wukong Sunset Pose",
      caption: "Atmospheric composition showcasing the mythical presence"
    }
  ];

  const handleImageClick = (src: string) => {
    setActiveImage(src);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setActiveImage(null);
    document.body.style.overflow = '';
  };

  const handleModalClick = (e: React.MouseEvent) => {
    if (modalRef.current && e.target === modalRef.current) {
      closeModal();
    }
  };

  return (
    <section id="gallery" className="bg-black section-padding relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-1/4 right-0 w-1/3 h-1/3 bg-wukong-gold/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/4 w-1/4 h-1/4 bg-wukong-gold/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-wukong-gold inline-block mb-3 uppercase tracking-widest text-sm font-medium">Visual Journey</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white">
              Cosplay <span className="text-wukong-gold text-glow">Gallery</span>
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto text-lg">
              Explore the artistry and craftsmanship behind my Black Myth: Wukong cosplay creations. Each image captures the essence of the Monkey King.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
          {images.map((image, index) => (
            <ScrollReveal key={index} delay={0.1 * index} className="h-full">
              <div 
                className="relative overflow-hidden rounded-sm cursor-pointer group h-full"
                onClick={() => handleImageClick(image.src)}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={image.src} 
                    alt={image.alt} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-80 transition-opacity group-hover:opacity-90"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 transition-transform duration-300 group-hover:translate-y-0">
                  <p className="text-white/90 text-sm">{image.caption}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Fullscreen modal for images */}
      <div 
        ref={modalRef}
        className={cn(
          "fixed inset-0 z-50 bg-black/95 flex items-center justify-center transition-opacity duration-300",
          activeImage ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={handleModalClick}
      >
        <button 
          className="absolute top-6 right-6 text-white hover:text-wukong-gold z-10"
          onClick={closeModal}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        
        {activeImage && (
          <div className="max-w-5xl max-h-[80vh] w-full h-full px-6">
            <img 
              src={activeImage} 
              alt="Enlarged cosplay view" 
              className="w-full h-full object-contain"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;
