
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const ContactSection = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // This would normally connect to a form submission API
    toast({
      title: "Message Sent",
      description: "Thanks for reaching out! I'll get back to you soon.",
    });
  };

  return (
    <div id="contact" className="section-container bg-white">
      <h2 className="section-title">Get In Touch</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-portfolio-navy">Send Me a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">Name</label>
                    <Input id="name" placeholder="Your Name" required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                    <Input id="email" type="email" placeholder="your@email.com" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                  <Input id="subject" placeholder="Message Subject" required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">Message</label>
                  <Textarea 
                    id="message" 
                    placeholder="Write your message here..." 
                    rows={5}
                    required
                  />
                </div>
                <Button type="submit" className="bg-portfolio-navy hover:bg-portfolio-blue text-white transition-colors w-full md:w-auto">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
        
        <div>
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="text-portfolio-navy">Contact Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="bg-portfolio-light-gray p-2 rounded-full">
                    <Mail size={20} className="text-portfolio-navy" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <a 
                      href="mailto:kp5495423@gmail.com" 
                      className="text-portfolio-blue hover:underline"
                    >
                      kp5495423@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="bg-portfolio-light-gray p-2 rounded-full">
                    <Phone size={20} className="text-portfolio-navy" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <a 
                      href="tel:+917651995122" 
                      className="text-portfolio-blue hover:underline"
                    >
                      +91-7651995122
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="bg-portfolio-light-gray p-2 rounded-full">
                    <Linkedin size={20} className="text-portfolio-navy" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">LinkedIn</p>
                    <a 
                      href="https://www.linkedin.com/in/karan-singh-pal-5846ab24b/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-portfolio-blue hover:underline"
                    >
                      Karan Singh Pal
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="bg-portfolio-light-gray p-2 rounded-full">
                    <Github size={20} className="text-portfolio-navy" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">GitHub</p>
                    <a 
                      href="https://github.com/Karansinghpal" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-portfolio-blue hover:underline"
                    >
                      Karansinghpal
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="font-semibold text-lg text-portfolio-navy mb-3">Follow Me</h3>
                <div className="flex gap-4">
                  <a 
                    href="https://www.linkedin.com/in/karan-singh-pal-5846ab24b/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-portfolio-light-gray hover:bg-portfolio-blue hover:text-white p-2 rounded-full transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a 
                    href="https://github.com/Karansinghpal"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-portfolio-light-gray hover:bg-portfolio-blue hover:text-white p-2 rounded-full transition-colors"
                    aria-label="GitHub"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
