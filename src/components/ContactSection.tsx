import React from 'react';
import { motion } from 'framer-motion';

const ContactSection = () => {

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Message sent!");
  };

  return (
    <section id="contact" className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12"
        >
          Get In Touch
        </motion.h2>

        <form onSubmit={handleSubmit} className="space-y-4 max-w-lg mx-auto">
          <input 
            type="text" 
            placeholder="Name" 
            required 
            className="border w-full p-2 rounded"
          />
          <input 
            type="email" 
            placeholder="Email" 
            required 
            className="border w-full p-2 rounded"
          />
          <input 
            type="text" 
            placeholder="Subject" 
            required 
            className="border w-full p-2 rounded"
          />
          <textarea 
            placeholder="Message"
            required
            className="border w-full p-2 rounded"
            rows={5}
          />
          <button 
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded w-full"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
