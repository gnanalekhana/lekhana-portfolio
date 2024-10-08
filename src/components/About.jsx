import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="min-h-screen bg-blue-50 py-16">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold mb-12 text-center text-blue-700"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div 
            className="bg-white p-8 rounded-lg shadow-lg border border-blue-200"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-blue-600">My Journey</h3>
            <p className="text-lg mb-4 text-gray-700">
              As a Technical Support Engineer with over 1 year of experience in Salesforce Admin & development, 
              I've honed my skills in creating efficient and scalable solutions. Currently, 
              I'm pursuing my M.S. in Computer Science at the University of North Texas, 
              further expanding my knowledge and expertise.
            </p>
            <p className="text-lg text-gray-700">
              My passion for technology and problem-solving drives me to continuously learn 
              and adapt in this ever-evolving field. I thrive on challenges and am always 
              eager to take on new projects that push the boundaries of what's possible.
            </p>
          </motion.div>
          <motion.div 
            className="bg-white p-8 rounded-lg shadow-lg border border-blue-200"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-blue-600">My Expertise</h3>
            <p className="text-lg mb-4 text-gray-700">
              My core strengths lie in Java, SQL, Spring Boot, and AWS. I specialize 
              in microservices architecture and full-stack development, with a keen focus on 
              creating user-friendly applications that solve real-world problems.
            </p>
            <p className="text-lg text-gray-700">
              With a strong foundation in computer science and hands-on industry experience, 
              I bring a unique blend of theoretical knowledge and practical skills to every 
              project I undertake.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;