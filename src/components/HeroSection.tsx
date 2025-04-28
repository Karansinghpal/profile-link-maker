import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Github, Linkedin, Mail, Phone } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center bg-gradient-to-br from-white to-portfolio-light-gray">
      <div className="container mx-auto px-4 py-16 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="order-2 md:order-1">
            <h1 className="text-4xl md:text-6xl font-bold text-portfolio-navy mb-4">
              Karan Singh Pal
            </h1>
            <h2 className="text-2xl md:text-3xl text-portfolio-blue font-semibold mb-6">
              Full Stack Developer
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-lg mb-8 leading-relaxed">
              Building robust and scalable web applications using modern technologies.
              Specialized in MERN stack development with a focus on creating responsive and user-friendly interfaces.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button className="bg-portfolio-navy hover:bg-portfolio-blue text-white transition-colors">
                <a href="#contact" className="flex items-center gap-2">
                  Contact Me <ArrowRight size={16} />
                </a>
              </Button>
              <Button variant="outline" className="border-portfolio-navy text-portfolio-navy hover:bg-portfolio-light-gray transition-colors">
                <a href="#projects" className="flex items-center gap-2">
                  View Projects <ArrowRight size={16} />
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex mt-8 gap-5">
              <a 
                href="https://www.linkedin.com/in/karan-singh-pal-5846ab24b/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-portfolio-navy hover:text-portfolio-blue transition-colors"
              >
                <Linkedin size={28} />
              </a>
              <a 
                href="https://github.com/Karansinghpal"
                target="_blank" 
                rel="noopener noreferrer"
                className="text-portfolio-navy hover:text-portfolio-blue transition-colors"
              >
                <Github size={28} />
              </a>
              <a 
                href="mailto:kp5495423@gmail.com"
                className="text-portfolio-navy hover:text-portfolio-blue transition-colors"
              >
                <Mail size={28} />
              </a>
              <a 
                href="tel:+917651995122"
                className="text-portfolio-navy hover:text-portfolio-blue transition-colors"
              >
                <Phone size={28} />
              </a>
            </div>
          </div>

          {/* Image Section */}
          <div className="order-1 md:order-2 flex justify-center">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-portfolio-light-gray border-4 border-portfolio-blue overflow-hidden hover:scale-105 transition-transform duration-300 shadow-lg">
              <img 
                src="/KaranNew.jpg" 
                alt="Karan Singh Pal" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
