
import React from 'react';

const AboutSection = () => {
  const skills = [
    { category: 'Languages', items: ['C', 'C++', 'Java', 'JavaScript', 'HTML/CSS', 'Python'] },
    { category: 'Frameworks', items: ['ReactJs', 'Angular', 'Bootstrap', 'NodeJS', 'ExpressJS'] },
    { category: 'Tools/Platforms', items: ['VS Code', 'Git', 'GitHub', 'MySQL', 'MongoDB', 'PostgreSQL'] },
    { category: 'Soft Skills', items: ['Problem-Solving', 'Self-Learning', 'Presentation', 'Adaptability', 'Project Management'] }
  ];

  return (
    <div id="about" className="section-container bg-white">
      <h2 className="section-title">About Me</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        <div className="lg:col-span-1">
          <div className="bg-portfolio-light-gray p-6 rounded-lg h-full flex items-center justify-center">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-portfolio-navy">Contact Information</h3>
              <div className="space-y-2">
                <p><span className="font-semibold">Email:</span> <a href="mailto:kp210542@gmail.com" className="text-portfolio-blue hover:underline">kp210542@gmail.com</a></p>
                <p><span className="font-semibold">Phone:</span> <a href="tel:+917651995122" className="text-portfolio-blue hover:underline">+91-7651995122</a></p>
                <p><span className="font-semibold">LinkedIn:</span> <a href="https://www.linkedin.com/in/karan-singh-pal-5846ab24b/" target="_blank" rel="noopener noreferrer" className="text-portfolio-blue hover:underline">Karan Singh Pal</a></p>
                <p><span className="font-semibold">GitHub:</span> <a href="https://github.com/Karansinghpal" target="_blank" rel="noopener noreferrer" className="text-portfolio-blue hover:underline">Karansinghpal</a></p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-2">
          <h3 className="text-2xl font-semibold text-portfolio-navy mb-4">Skills</h3>
          <div className="space-y-6">
            {skills.map((skillGroup) => (
              <div key={skillGroup.category}>
                <h4 className="text-lg font-medium text-portfolio-blue mb-2">{skillGroup.category}:</h4>
                <div className="flex flex-wrap">
                  {skillGroup.items.map((skill) => (
                    <span key={skill} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
