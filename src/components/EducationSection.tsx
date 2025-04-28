
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const EducationSection = () => {
  const education = [
    {
      institution: "Lovely Professional University",
      degree: "Bachelor of Technology - Computer Science and Engineering",
      location: "Punjab, India",
      period: "Since August 2022",
      gpa: "7.00"
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
      period: "June 2024 - July 2024"
    },
    {
      title: "Server-side JavaScript with Node.JS by NIIT",
      issuer: "Coursera",
      period: "January 2024 - April 2024"
    },
    {
      title: "HTML, CSS and JavaScript for Web Developers",
      issuer: "John Hopkins University",
      period: "January 2024 - April 2024"
    },
    {
      title: "The Bits and Bytes of Computer Networking",
      issuer: "",
      period: "January 2024 - February 2024"
    }
  ];

  return (
    <div id="education" className="section-container bg-white">
      <h2 className="section-title">Education & Certifications</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-8">
        <div>
          <h3 className="text-2xl font-semibold text-portfolio-navy mb-6">Education</h3>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-bold text-portfolio-navy">{edu.institution}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-medium">{edu.degree}</p>
                  <p className="text-sm text-portfolio-gray mt-1">{edu.location}</p>
                  <div className="flex justify-between items-center mt-2 text-sm">
                    <span className="text-portfolio-blue">{edu.period}</span>
                    <span className="font-semibold">
                      {edu.gpa ? `GPA: ${edu.gpa}` : `Percentage: ${edu.percentage}`}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-2xl font-semibold text-portfolio-navy mb-6">Certifications</h3>
          <div className="space-y-4">
            {certifications.map((cert, index) => (
              <div 
                key={index} 
                className="p-4 rounded-lg border border-gray-200 hover:border-portfolio-blue transition-colors"
              >
                <h4 className="font-semibold text-portfolio-navy">{cert.title}</h4>
                {cert.issuer && <p className="text-sm text-gray-600 mt-1">Issuer: {cert.issuer}</p>}
                <p className="text-sm text-portfolio-blue mt-2">{cert.period}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationSection;
