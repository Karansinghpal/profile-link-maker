
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Book Management System",
      period: "April 2024 - May 2024",
      description: "Developed a full-stack book management system using MongoDB, Express.js, React.js, and Node.js. Implemented CRUD operations for adding, updating, deleting, and retrieving book records. Designed a responsive UI for seamless user experience.",
      tech: ["MongoDB", "Express.js", "React.js", "Node.js", "RESTful APIs"],
      features: ["CRUD operations", "Responsive UI", "Efficient data handling"]
    },
    {
      title: "Notes Application",
      period: "June 2024 - July 2024",
      description: "Developed a Notes Application using the MERN stack with features like note creation, editing, and deletion. Implemented user authentication, real-time updates, and local storage for seamless user experience. Optimized backend with Node.js and MongoDB to ensure fast and secure data handling.",
      tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Postman", "Redux/JS"],
      features: ["User authentication", "Real-time updates", "Local storage"]
    },
    {
      title: "E-Commerce",
      period: "January 2024 - April 2024",
      description: "Designed a responsive interface using React.js and integrated secure backend APIs. Implemented robust data validation protocols, reducing security vulnerabilities by identifying critical issues within the first month. Implemented user authentication, payment gateway services, and performance optimizations for an enhanced user experience.",
      tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Postman"],
      features: ["Security validation", "Payment gateway", "Performance optimization"]
    }
  ];

  return (
    <div id="projects" className="section-container bg-portfolio-light-gray">
      <h2 className="section-title">Projects</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {projects.map((project, index) => (
          <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
            <CardHeader className="bg-white">
              <CardTitle className="text-xl font-bold text-portfolio-navy">{project.title}</CardTitle>
              <CardDescription className="text-portfolio-gray">{project.period}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow pt-6">
              <p className="text-gray-700 mb-4">{project.description}</p>
              <div className="mb-4">
                <h4 className="font-medium text-sm text-portfolio-navy mb-2">Key Features:</h4>
                <ul className="list-disc list-inside text-sm">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="text-gray-600">{feature}</li>
                  ))}
                </ul>
              </div>
            </CardContent>
            <CardFooter className="bg-white border-t border-gray-100 pt-4">
              <div className="flex flex-wrap gap-1">
                {project.tech.map((tech, idx) => (
                  <Badge key={idx} variant="outline" className="bg-portfolio-navy text-white hover:bg-portfolio-blue">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <div className="w-full max-w-4xl bg-white rounded-lg p-6 shadow-md">
          <h3 className="text-xl font-semibold text-portfolio-navy mb-4">Want to see more?</h3>
          <p className="text-gray-600 mb-4">Check out my GitHub repository for more projects and code samples.</p>
          <a 
            href="https://github.com/Karansinghpal" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-portfolio-navy hover:bg-portfolio-blue text-white py-2 px-4 rounded-md transition-colors"
          >
            Visit GitHub Profile
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
