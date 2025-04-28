import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { motion } from 'framer-motion';

const ContactSection = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "Thanks for reaching out! I'll get back to you soon.",
    });
  };

  return (
    <section id="contact" className="bg-gradient-to-br from-[#f9f9f9] via-[#f0f0f0] to-[#e6e6e6] py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-portfolio-navy mb-12"
        >
          Get In Touch
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* Form Section */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-portfolio-navy">Send Me a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">Name</label>
                      <Input id="name" name="name" placeholder="Your Name" required />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">Email</label>
                      <Input id="email" name="email" type="email" placeholder="your@email.com" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                    <Input id="subject" name="subject" placeholder="Message Subject" required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">Message</label>
                    <Textarea 
                      id="message" 
                      name="message"
                      placeholder="Write your message here..." 
                      rows={5}
                      required
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="bg-portfolio-navy hover:bg-portfolio-blue text-white transition-transform transform hover:scale-105 duration-300 w-full md:w-auto"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-portfolio-navy">Contact Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* Email */}
                  <div className="flex items-center gap-3">
                    <div className="bg-portfolio-light-gray p-3 rounded-full">
                      <Mail size={20} className="text-portfolio-navy" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <a href="mailto:kp5495423@gmail.com" className="text-portfolio-blue hover:underline">
                        kp5495423@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-center gap-3">
                    <div className="bg-portfolio-light-gray p-3 rounded-full">
                      <Phone size={20} className="text-portfolio-navy" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Phone</p>
                      <a href="tel:+917651995122" className="text-portfolio-blue hover:underline">
                        +91-7651995122
                      </a>
                    </div>
                  </div>

                  {/* LinkedIn */}
                  <div className="flex items-center gap-3">
                    <div className="bg-portfolio-light-gray p-3 rounded-full">
                      <Linkedin size={20} className="text-portfolio-navy" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">LinkedIn</p>
                      <a href="https://www.linkedin.com/in/karan-singh-pal-5846ab24b/" target="_blank" rel="noopener noreferrer" className="text-portfolio-blue hover:underline">
                        Karan Singh Pal
                      </a>
                    </div>
                  </div>

                  {/* GitHub */}
                  <div className="flex items-center gap-3">
                    <div className="bg-portfolio-light-gray p-3 rounded-full">
                      <Github size={20} className="text-portfolio-navy" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">GitHub</p>
                      <a href="https://github.com/Karansinghpal" target="_blank" rel="noopener noreferrer" className="text-portfolio-blue hover:underline">
                        Karansinghpal
                      </a>
                    </div>
                  </div>
                </div>

                {/* Follow Me */}
                <div className="mt-8">
                  <h3 className="font-semibold text-lg text-portfolio-navy mb-3">Follow Me</h3>
                  <div className="flex gap-4 justify-center md:justify-start">
                    <a 
                      href="https://www.linkedin.com/in/karan-singh-pal-5846ab24b/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-portfolio-light-gray hover:bg-portfolio-blue hover:text-white p-3 rounded-full transition-all transform hover:scale-110"
                      aria-label="LinkedIn"
                    >
                      <Linkedin size={20} />
                    </a>
                    <a 
                      href="https://github.com/Karansinghpal"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-portfolio-light-gray hover:bg-portfolio-blue hover:text-white p-3 rounded-full transition-all transform hover:scale-110"
                      aria-label="GitHub"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>

              </CardContent>
            </Card>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
