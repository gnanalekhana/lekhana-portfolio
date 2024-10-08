import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the form submission, e.g., send an email or save to a database
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 py-16">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Contact Me
        </motion.h2>
        <motion.div 
          className="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <div className="p-6">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-blue-700 font-bold mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  className="w-full px-3 py-2 text-blue-700 border border-blue-300 rounded-lg focus:outline-none focus:border-blue-500" 
                  required 
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-blue-700 font-bold mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  className="w-full px-3 py-2 text-blue-700 border border-blue-300 rounded-lg focus:outline-none focus:border-blue-500" 
                  required 
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-blue-700 font-bold mb-2">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  value={formData.message} 
                  onChange={handleChange} 
                  rows="4" 
                  className="w-full px-3 py-2 text-blue-700 border border-blue-300 rounded-lg focus:outline-none focus:border-blue-500" 
                  required
                ></textarea>
              </div>
              <div className="text-center">
                <button 
                  type="submit" 
                  className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg hover:bg-blue-700 transition duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;