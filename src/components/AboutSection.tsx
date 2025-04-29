
import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  const skills = [
    { category: 'Languages', items: ['C', 'C++', 'Java', 'JavaScript', 'HTML/CSS', 'Python'] },
    { category: 'Frameworks', items: ['ReactJs', 'Angular', 'Bootstrap', 'NodeJS', 'ExpressJS'] },
    { category: 'Tools/Platforms', items: ['VS Code', 'Git', 'GitHub', 'MySQL', 'MongoDB', 'PostgreSQL'] },
    { category: 'Soft Skills', items: ['Problem-Solving', 'Self-Learning', 'Presentation', 'Adaptability', 'Project Management'] }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center text-blue-900 mb-16"
        >
          About Me
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Contact Card */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-white shadow-xl rounded-3xl p-8 flex flex-col justify-center border border-gray-200 hover:shadow-2xl transition-all duration-300"
          >
            <h3 className="text-2xl font-bold text-blue-600 mb-6 text-center">Contact Information</h3>
            <div className="space-y-5 text-gray-700 text-center">
              <p>
                <span className="font-semibold">Email:</span>{' '}
                <a href="mailto:kp210542@gmail.com" className="text-gray-800 hover:text-blue-600 underline transition-colors">
                  kp210542@gmail.com
                </a>
              </p>
              <p>
                <span className="font-semibold">Phone:</span>{' '}
                <a href="tel:+917651995122" className="text-gray-800 hover:text-blue-600 underline transition-colors">
                  +91-7651995122
                </a>
              </p>
              <p>
                <span className="font-semibold">LinkedIn:</span>{' '}
                <a href="https://www.linkedin.com/in/karan-singh-pal-5846ab24b/" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-blue-600 underline transition-colors">
                  Karan Singh Pal
                </a>
              </p>
              <p>
                <span className="font-semibold">GitHub:</span>{' '}
                <a href="https://github.com/Karansinghpal" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-blue-600 underline transition-colors">
                  Karansinghpal
                </a>
              </p>
            </div>
          </motion.div>

          {/* Skills Card */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="lg:col-span-2 bg-white shadow-xl rounded-3xl p-10 border border-gray-200 hover:shadow-2xl transition-all duration-300"
          >
            <h3 className="text-3xl font-bold text-blue-600 mb-10 text-center">Skills</h3>
            <div className="space-y-10">
              {skills.map((skillGroup) => (
                <div key={skillGroup.category}>
                  <h4 className="text-2xl text-blue-900 font-semibold mb-4">
                    {skillGroup.category}:
                  </h4>
                  <div className="flex flex-wrap gap-4">
                    {skillGroup.items.map((skill) => (
                      <motion.span
                        key={skill}
                        whileHover={{ scale: 1.1 }}
                        className="bg-blue-100 text-blue-900 px-5 py-2 rounded-full text-sm font-medium hover:bg-blue-200 transition-all cursor-pointer"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
