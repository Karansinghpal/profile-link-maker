
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, GitHub, Linkedin, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center bg-gradient-to-br from-white to-portfolio-light-gray">
      <div className="container mx-auto px-4 py-16 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <h1 className="text-5xl md:text-6xl font-bold text-portfolio-navy mb-4">
              Karan Singh Pal
            </h1>
            <h2 className="text-2xl md:text-3xl text-portfolio-blue font-semibold mb-6">
              Full Stack Developer
            </h2>
            <p className="text-lg text-gray-600 max-w-lg mb-8">
              Building robust and scalable web applications using modern technologies.
              Specialized in MERN stack development with a focus on creating responsive and user-friendly interfaces.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-portfolio-navy hover:bg-portfolio-blue text-white transition-colors">
                <Link to="#contact" className="flex items-center gap-2">
                  Contact Me <ArrowRight size={16} />
                </Link>
              </Button>
              <Button variant="outline" className="border-portfolio-navy text-portfolio-navy hover:bg-portfolio-light-gray">
                <Link to="#projects" className="flex items-center gap-2">
                  View Projects <ArrowRight size={16} />
                </Link>
              </Button>
            </div>
            <div className="flex mt-8 gap-4">
              <a 
                href="https://www.linkedin.com/in/karan-singh-pal-5846ab24b/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-portfolio-navy hover:text-portfolio-blue transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="https://github.com/Karansinghpal"
                target="_blank" 
                rel="noopener noreferrer"
                className="text-portfolio-navy hover:text-portfolio-blue transition-colors"
              >
                <GitHub size={24} />
              </a>
              <a 
                href="mailto:kp210542@gmail.com"
                className="text-portfolio-navy hover:text-portfolio-blue transition-colors"
              >
                <Mail size={24} />
              </a>
              <a 
                href="tel:+917651995122"
                className="text-portfolio-navy hover:text-portfolio-blue transition-colors"
              >
                <Phone size={24} />
              </a>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-portfolio-light-gray border-4 border-portfolio-blue overflow-hidden">
              {/* Image placeholder */}
              <img 
                src="/public/lovable-uploads/5aaca06a-357f-4126-9979-226f62ed1a1f.png" 
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
