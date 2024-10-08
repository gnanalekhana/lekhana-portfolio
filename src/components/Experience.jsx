import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt, FaChalkboardTeacher, FaLightbulb, FaMapMarkerAlt, FaTasks, FaTools, FaTrophy } from 'react-icons/fa';

const experienceData = [
  {
    title: "Teaching Assistant",
    company: "University of North Texas",
    duration: "January 2024 - Present",
    location: "Denton, TX",
    description: "Teaching Assistant for the Analysis of Computer Algorithms course.",
    highlights: [
      "Assist in teaching and explaining complex algorithmic concepts to graduate students",
      "Grade assignments and provide constructive feedback to help students improve their understanding",
      "Conduct office hours to provide additional support and clarification on course materials",
      "Collaborate with the professor to develop and refine course content and materials"
    ],
    skills: [
      "Algorithm Analysis",
      "Data Structures",
      "Teaching",
      "Problem-Solving",
      "Communication"
    ]
  },
  {
    title: "Technical Support Engineer",
    company: "Salesforce",
    duration: "August 2022 - August 2023",
    location: "Hyderabad, India",
    description: "Salesforce Technical Support Engineer optimizing system performance and customer satisfaction through expert troubleshooting and platform knowledge. Achieved 30% increase in system functioning, 40% reduction in issue resolution time, and 95% customer satisfaction while earning multiple Salesforce certifications",
    importantPoints: [
      "Tracked the execution of several Salesforce jobs from start to finish, and resolving issues that increased system functioning by 30%",
      "Completed in-depth troubleshooting to guarantee peak performance, reducing issue resolution time by 40%",
      "Recognized and handled client inquiries promptly, resulting in a 95% customer satisfaction rating",
    ],
    highlights: [
      "Achieved multiple Salesforce certifications, enhancing problem-solving capabilities",
      "Resolved third-party integration issues, ensuring seamless data flow",
      "Applied expertise in Salesforce platform, including Apex debugging and SOQL optimization",
      "Achieved 95% customer satisfaction rating",
      "Increased system functioning by 30% through optimization techniques",
    ],
    skills: [
      "Salesforce Certified Administrator",
      "Salesforce Certified Service Cloud Consultant",
      "Salesforce Certified Platform App Builder Certification",
    ]
  }
];

const ExperienceItem = ({ experience, index }) => (
  <motion.div 
    className="mb-12 overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition duration-300 bg-white"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1, duration: 0.5 }}
  >
    <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-6 text-white">
      <div className="flex items-center mb-4">
        {experience.company === "University of North Texas" ? (
          <FaChalkboardTeacher className="w-16 h-16 mr-4 text-white" />
        ) : (
          <div className="w-16 h-16 mr-4 bg-white rounded-full flex items-center justify-center">
            <FaBriefcase className="w-8 h-8 text-blue-600" />
          </div>
        )}
        <div>
          <h3 className="text-2xl font-bold flex items-center">
            {experience.title}
          </h3>
          <h4 className="text-xl opacity-90">{experience.company}</h4>
          <p className="text-sm opacity-80 flex items-center mt-1">
            <FaCalendarAlt className="mr-2" />
            {experience.duration}
            <FaMapMarkerAlt className="ml-4 mr-2" />
            {experience.location}
          </p>
        </div>
      </div>
    </div>
    <div className="p-6">
      <p className="text-gray-700 mb-6 italic">{experience.description}</p>
      
      {experience.importantPoints && (
        <>
          <h5 className="font-semibold text-lg mb-3 text-blue-700 flex items-center">
            <FaTrophy className="mr-2" />
            Key Achievements:
          </h5>
          <ul className="space-y-2 mb-6">
            {experience.importantPoints.map((point, index) => (
              <motion.li 
                key={index} 
                className="flex items-start"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                <FaLightbulb className="w-5 h-5 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-800 font-medium">{point}</span>
              </motion.li>
            ))}
          </ul>
        </>
      )}

      <h5 className="font-semibold text-lg mb-3 text-blue-700 flex items-center">
        <FaTasks className="mr-2" />
        Responsibilities & Technical Contributions:
      </h5>
      <ul className="space-y-2 mb-6">
        {experience.highlights.map((highlight, index) => (
          <motion.li 
            key={index} 
            className="flex items-start"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 + index * 0.1 }}
          >
            <svg className="w-5 h-5 text-blue-500 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span className="text-gray-700">{highlight}</span>
          </motion.li>
        ))}
      </ul>
      
      <h5 className="font-semibold text-lg mb-3 text-blue-700 flex items-center">
        <FaTools className="mr-2" />
        Skills & Technologies:
      </h5>
      <div className="flex flex-wrap mb-6">
        {experience.skills.map((skill, index) => (
          <motion.span 
            key={index} 
            className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm mr-2 mb-2 flex items-center"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 + index * 0.05 }}
          >
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
            {skill}
          </motion.span>
        ))}
      </div>
    </div>
  </motion.div>
);

const Experience = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 py-16">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800 flex items-center justify-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <FaBriefcase className="mr-4" />
          Work Experience
        </motion.h2>
        {experienceData.map((exp, index) => (
          <ExperienceItem key={index} experience={exp} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Experience;