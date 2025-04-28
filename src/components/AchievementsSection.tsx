
import React from 'react';

const AchievementsSection = () => {
  const achievements = [
    {
      title: "Completed a Project Of Notes Application by CipherSchools",
      date: "July 2024",
      description: "Successfully built and deployed a full-featured notes application with user authentication and real-time updates."
    },
    {
      title: "Participated in Online quiz on Cyber Hygiene Practices",
      date: "December 2023",
      description: "Demonstrated knowledge in cybersecurity best practices and protection against common threats."
    },
    {
      title: "NSS Volunteer (August 2022 – Present)",
      date: "Ongoing",
      description: "Organized social events such as blood donation camps, plantation drives, and community service activities."
    }
  ];

  return (
    <div id="achievements" className="section-container bg-portfolio-light-gray">
      <h2 className="section-title">Achievements</h2>
      
      <div className="mt-8">
        <div className="max-w-3xl mx-auto">
          {achievements.map((achievement, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="pl-4">
                <h3 className="font-bold text-xl text-portfolio-navy">{achievement.title}</h3>
                <p className="text-portfolio-blue font-medium my-1">{achievement.date}</p>
                <p className="text-gray-600">{achievement.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="flex justify-center mt-12">
        <div className="w-full max-w-4xl bg-white rounded-lg p-8 shadow-md flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2 h-48 bg-portfolio-light-blue rounded-lg overflow-hidden">
            {/* Placeholder for achievement image */}
            <div className="w-full h-full flex items-center justify-center text-white text-lg font-medium">
              Achievement Image Placeholder
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl font-semibold text-portfolio-navy mb-3">Volunteering Experience</h3>
            <p className="text-gray-600">
              As an NSS volunteer since August 2022, I've been actively involved in organizing social events 
              including blood donation camps and plantation drives. This experience has strengthened my leadership 
              and teamwork skills while making a positive impact on the community.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AchievementsSection;
