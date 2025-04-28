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
      features: ["CRUD operations", "Responsive UI", "Efficient data handling"],
      image: "https://4.imimg.com/data4/DB/QV/MY-29214035/library-management-system.jpg"
    },
    {
      title: "Notes Application",
      period: "June 2024 - July 2024",
      description: "Developed a Notes Application using the MERN stack with features like note creation, editing, and deletion. Implemented user authentication, real-time updates, and local storage for seamless user experience. Optimized backend with Node.js and MongoDB to ensure fast and secure data handling.",
      tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Postman", "Redux/JS"],
      features: ["User authentication", "Real-time updates", "Local storage"],
      image: "https://i0.wp.com/highschool.latimes.com/wp-content/uploads/2019/01/45692459364_2d91368a04_z.jpg?fit=640%2C427&ssl=1"
    },
    {
      title: "E-Commerce",
      period: "January 2024 - April 2024",
      description: "Designed a responsive interface using React.js and integrated secure backend APIs. Implemented robust data validation protocols, reducing security vulnerabilities by identifying critical issues within the first month. Implemented user authentication, payment gateway services, and performance optimizations for an enhanced user experience.",
      tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Postman"],
      features: ["Security validation", "Payment gateway", "Performance optimization"],
      image: "https://www.notiontechnologies.com/blog/wp-content/uploads/2023/03/how-to-build-an-ecommerce-website-from-scratch.webp"
    }
  ];

  return (
    <div id="projects" className="py-16 bg-gradient-to-b from-portfolio-light-gray to-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-portfolio-navy text-center mb-12">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => {
            const isEcommerce = project.title === "E-Commerce"; // Check if project is E-commerce
            return (
              <Card
                key={index}
                className={`overflow-hidden transition-all duration-300 flex flex-col h-full border border-gray-200 rounded-2xl cursor-pointer
                  hover:shadow-2xl hover:-translate-y-2
                  ${isEcommerce ? "hover:bg-gradient-to-r hover:from-red-600 hover:to-black" : "hover:bg-gray-100"}
                `}
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader className="bg-white">
                  <CardTitle className="text-xl font-bold text-portfolio-navy">{project.title}</CardTitle>
                  <CardDescription className="text-portfolio-gray">{project.period}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow pt-4">
                  <p className="text-gray-700 text-sm mb-4">{project.description}</p>
                  <div className="mb-4">
                    <h4 className="font-semibold text-sm text-portfolio-blue mb-2">Key Features:</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                      {project.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
                <CardFooter className="bg-white border-t border-gray-100 pt-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <Badge key={idx} variant="outline" className="bg-portfolio-navy text-white hover:bg-portfolio-blue text-xs px-3 py-1 rounded-full">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardFooter>
              </Card>
            );
          })}
        </div>

        {/* GitHub link */}
        <div className="flex justify-center mt-16">
          <div className="w-full max-w-3xl bg-white rounded-2xl p-8 shadow-lg text-center">
            <h3 className="text-2xl font-bold text-portfolio-navy mb-4">Want to see more?</h3>
            <p className="text-gray-600 mb-6">Check out my GitHub repository for more projects and code samples.</p>
            <a
              href="https://github.com/Karansinghpal"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-portfolio-navy hover:bg-portfolio-blue text-white py-3 px-6 rounded-full transition-all duration-300"
            >
              Visit GitHub Profile
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
