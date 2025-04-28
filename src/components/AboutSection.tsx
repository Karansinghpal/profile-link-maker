import React from 'react';

const AboutSection = () => {
  const skills = [
    { category: 'Languages', items: ['C', 'C++', 'Java', 'JavaScript', 'HTML/CSS', 'Python'] },
    { category: 'Frameworks', items: ['ReactJs', 'Angular', 'Bootstrap', 'NodeJS', 'ExpressJS'] },
    { category: 'Tools/Platforms', items: ['VS Code', 'Git', 'GitHub', 'MySQL', 'MongoDB', 'PostgreSQL'] },
    { category: 'Soft Skills', items: ['Problem-Solving', 'Self-Learning', 'Presentation', 'Adaptability', 'Project Management'] }
  ];

  return (
    <div id="about" className="py-16 bg-gradient-to-b from-white to-portfolio-light-gray">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-portfolio-navy text-center mb-12">
          About Me
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Contact Card */}
          <div className="lg:col-span-1">
            <div className="bg-white shadow-lg rounded-lg p-8 h-full flex flex-col justify-center border border-gray-200">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-portfolio-blue">Contact Information</h3>
                <div className="space-y-3 text-gray-700">
                  <p>
                    <span className="font-semibold">Email:</span>{' '}
                    <a href="mailto:kp210542@gmail.com" className="text-portfolio-navy hover:text-portfolio-blue underline">
                      kp210542@gmail.com
                    </a>
                  </p>
                  <p>
                    <span className="font-semibold">Phone:</span>{' '}
                    <a href="tel:+917651995122" className="text-portfolio-navy hover:text-portfolio-blue underline">
                      +91-7651995122
                    </a>
                  </p>
                  <p>
                    <span className="font-semibold">LinkedIn:</span>{' '}
                    <a href="https://www.linkedin.com/in/karan-singh-pal-5846ab24b/" target="_blank" rel="noopener noreferrer" className="text-portfolio-navy hover:text-portfolio-blue underline">
                      Karan Singh Pal
                    </a>
                  </p>
                  <p>
                    <span className="font-semibold">GitHub:</span>{' '}
                    <a href="https://github.com/Karansinghpal" target="_blank" rel="noopener noreferrer" className="text-portfolio-navy hover:text-portfolio-blue underline">
                      Karansinghpal
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Card */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-semibold text-portfolio-blue mb-8">Skills</h3>
            <div className="space-y-8">
              {skills.map((skillGroup) => (
                <div key={skillGroup.category}>
                  <h4 className="text-2xl text-portfolio-navy font-medium mb-3">
                    {skillGroup.category}:
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {skillGroup.items.map((skill) => (
                      <span
                        key={skill}
                        className="bg-portfolio-blue/10 text-portfolio-navy px-4 py-2 rounded-full text-sm font-medium hover:bg-portfolio-blue/20 transition-all duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
