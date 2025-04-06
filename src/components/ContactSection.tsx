import { useState } from 'react';
import ScrollReveal from './ui/ScrollReveal';
import { toast } from "sonner";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    service: 'photoshoot'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formspree.io/f/myzenrvy", { // <-- Replace with your actual Formspree endpoint
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          service: formData.service
        })
      });

      if (response.ok) {
        toast.success("Your message has been sent successfully!");
        setFormData({
          name: '',
          email: '',
          message: '',
          service: 'photoshoot'
        });
      } else {
        toast.error("Something went wrong. Please try again later.");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Network error. Please try again.");
    }
  };

  const services = [
    { value: 'photoshoot', label: 'Professional Photoshoot' },
    { value: 'event', label: 'Event Appearance' },
    { value: 'custom', label: 'Custom Costume Creation' },
    { value: 'workshop', label: 'Cosplay Workshop' }
  ];

  return (
    <section id="contact" className="bg-gradient-to-t from-black to-wukong-black section-padding relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-1/3 h-1/3 bg-wukong-gold/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          <ScrollReveal>
            <div>
              <span className="text-wukong-gold inline-block mb-3 uppercase tracking-widest text-sm font-medium">Get in Touch</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white">
                Book Your <span className="text-wukong-gold text-glow">Wukong</span> Experience
              </h2>
              <p className="text-white/80 mb-8 text-lg leading-relaxed">
                Whether you're looking for a professional photoshoot, event appearance, or custom cosplay creation, I'm here to bring the legendary Monkey King to your world.
              </p>
              <div className="bg-black/30 backdrop-blur-sm border border-wukong-gold/20 p-6 rounded-sm mb-8">
                <h3 className="text-white font-medium text-xl mb-4">Services Offered</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-wukong-gold mr-2">•</span>
                    <span className="text-white/80">Professional cosplay photoshoots with custom settings</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-wukong-gold mr-2">•</span>
                    <span className="text-white/80">Convention and event appearances</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-wukong-gold mr-2">•</span>
                    <span className="text-white/80">Custom costume and prop creation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-wukong-gold mr-2">•</span>
                    <span className="text-white/80">Cosplay workshops and tutorials</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-white font-medium text-xl mb-4">Location</h3>
                <p className="text-white/80 mb-2">Based in Shiv Vihar, Delhi NCR</p>
                <p className="text-white/80">Available for travel for major events</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <form 
              onSubmit={handleSubmit}
              className="bg-black/40 backdrop-blur-sm border border-wukong-gold/20 p-6 md:p-8 rounded-sm"
            >
              <h3 className="text-white font-display text-2xl mb-6">Send a Message</h3>

              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-white/80 mb-2 text-sm">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-black/50 border border-wukong-gold/30 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-wukong-gold/70 transition-colors"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-white/80 mb-2 text-sm">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-black/50 border border-wukong-gold/30 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-wukong-gold/70 transition-colors"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-white/80 mb-2 text-sm">Service Interested In</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-black/50 border border-wukong-gold/30 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-wukong-gold/70 transition-colors"
                  >
                    {services.map(service => (
                      <option key={service.value} value={service.value}>{service.label}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-white/80 mb-2 text-sm">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full bg-black/50 border border-wukong-gold/30 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-wukong-gold/70 transition-colors resize-none"
                    placeholder="Tell me about your project or event"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-wukong-gold hover:bg-wukong-amber text-wukong-black font-medium py-3 rounded-sm transition-colors"
                >
                  Send Message
                </button>
              </div>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
