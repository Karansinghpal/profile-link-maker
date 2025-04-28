
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-portfolio-navy text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Karan Singh Pal</h3>
            <p className="text-gray-300 mb-4">Full Stack Developer specializing in MERN stack development with expertise in creating responsive and user-friendly interfaces.</p>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/in/karan-singh-pal-5846ab24b/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://github.com/Karansinghpal"
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="mailto:kp210542@gmail.com"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
              </li>
              <li>
                <a href="#projects" className="text-gray-300 hover:text-white transition-colors">Projects</a>
              </li>
              <li>
                <a href="#education" className="text-gray-300 hover:text-white transition-colors">Education</a>
              </li>
              <li>
                <a href="#achievements" className="text-gray-300 hover:text-white transition-colors">Achievements</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                Email: <a href="mailto:kp210542@gmail.com" className="hover:text-white transition-colors">kp210542@gmail.com</a>
              </li>
              <li>
                Phone: <a href="tel:+917651995122" className="hover:text-white transition-colors">+91-7651995122</a>
              </li>
              <li>
                LinkedIn: <a href="https://www.linkedin.com/in/karan-singh-pal-5846ab24b/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Karan Singh Pal</a>
              </li>
              <li>
                GitHub: <a href="https://github.com/Karansinghpal" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Karansinghpal</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Karan Singh Pal. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
