import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const EducationSection = () => {
  const education = [
    {
      institution: "Lovely Professional University",
      degree: "Bachelor of Technology - Computer Science and Engineering",
      location: "Punjab, India",
      period: "Since August 2022",
      Cgpa: "7.20"
    },
    {
      institution: "Mahavir Inter College",
      degree: "Intermediate",
      location: "Jalaun, Uttar Pradesh",
      period: "April 2022",
      percentage: "74%"
    },
    {
      institution: "Mahavir Inter College",
      degree: "Secondary",
      location: "Jalaun, Uttar Pradesh",
      period: "March 2018",
      percentage: "83.5%"
    }
  ];

  const certifications = [
    {
      title: "Full Stack Development using MERN Stack",
      issuer: "CipherSchools",
      period: "June 2024 - July 2024",
      link: "https://www.cipherschools.com/certificate/preview?id=66a76d5ed15c5abc1ea65ef5"
    },
    {
      title: "Server-side JavaScript with Node.JS by NIIT",
      issuer: "Coursera",
      period: "January 2024 - April 2024",
      link: "https://www.coursera.org/account/accomplishments/certificate/8HYZMWMH2RD8"
    },
    {
      title: "HTML, CSS and JavaScript for Web Developers",
      issuer: "John Hopkins University",
      period: "January 2024 - April 2024",
      link: "https://www.coursera.org/account/accomplishments/certificate/CJ83KDPYZV7M"
    },
    {
      title: "The Bits and Bytes of Computer Networking",
      issuer: "Google (Coursera)",
      period: "January 2024 - February 2024",
      link: "https://www.coursera.org/account/accomplishments/certificate/MYDHFMUR83YF"
    }
  ];

  return (
    <div id="education" className="section-container bg-gradient-to-br from-white via-gray-50 to-gray-100 py-16">
      <h2 className="section-title text-center text-4xl font-bold text-portfolio-navy mb-12">Education & Certifications</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto px-4">
        
        {/* Education Section */}
        <div>
          <h3 className="text-2xl font-semibold text-portfolio-blue mb-8">Education</h3>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <Card 
                key={index} 
                className="transition-transform hover:scale-105 hover:shadow-2xl bg-white rounded-xl border border-gray-200
                hover:bg-gradient-to-r hover:from-red-600 hover:to-black hover:text-white"
              >
                <CardHeader className="pb-0">
                  <CardTitle className="text-xl font-bold text-portfolio-navy">{edu.institution}</CardTitle>
                </CardHeader>
                <CardContent className="py-4">
                  <p className="font-medium text-lg">{edu.degree}</p>
                  <p className="text-sm text-gray-500 mt-1">{edu.location}</p>
                  <div className="flex justify-between items-center mt-3 text-sm">
                    <span className="text-portfolio-blue">{edu.period}</span>
                    <span className="font-semibold">
                      {edu.Cgpa ? `Cgpa: ${edu.Cgpa}` : `Percentage: ${edu.percentage}`}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div>
          <h3 className="text-2xl font-semibold text-portfolio-blue mb-8">Certifications</h3>
          <div className="space-y-6">
            {certifications.map((cert, index) => (
              <a 
                href={cert.link}
                key={index}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-xl p-6 shadow-sm bg-white border border-gray-200
                transition-all duration-300 hover:bg-gradient-to-r hover:from-red-600 hover:to-black hover:text-white hover:scale-105"
              >
                <h4 className="text-lg font-semibold mb-2">{cert.title}</h4>
                {cert.issuer && (
                  <p className="text-sm mb-1">{cert.issuer}</p>
                )}
                <p className="text-sm">{cert.period}</p>
              </a>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default EducationSection;
