import { motion } from 'framer-motion';
import { Calendar, MapPin, Award } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const Experience = () => {
  const education = [
    {
      degree: "Bachelor of Technology in Electronics and Communication Engineering",
      school: "Indian Institute of Information Technology",
      location: "India",
      duration: "2023 - Present",
      gpa: "7.21 / 10",
      description: "Currently pursuing B.Tech in ECE with a strong focus on software development and real-world application of technology."
    }
  ];

  const certifications = [
    {
      name: "Java Basic Certification",
      issuer: "HackerRank",
      date: "2024",
      id: "9845EBAD0463",
      link: "https://www.hackerrank.com/certificates/9845ebad0463"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Education
          </h2>
        </AnimatedSection>

        {/* Education Section */}
        <AnimatedSection className="mb-16 mt-16" delay={1.2}>
          <h3 className="text-2xl font-semibold text-white mb-8 flex items-center">
            <Award className="w-6 h-6 text-emerald-600 mr-2" />
            Education
          </h3>
        </AnimatedSection>

        {education.map((edu, index) => (
          <AnimatedSection key={index} delay={1.4} direction="up">
            <motion.div
              className="bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
              whileHover={{ y: -5, scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <motion.h4
                    className="text-xl font-semibold text-white mb-1"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    {edu.degree}
                  </motion.h4>
                  <motion.p
                    className="text-emerald-400 font-medium mb-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    {edu.school}
                  </motion.p>
                </div>

                <motion.div
                  className="flex flex-col md:text-right"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center text-gray-600 mb-1">
                    <div className="flex items-center text-gray-400 mb-1">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span className="text-sm">{edu.duration}</span>
                    </div>
                    <div className="flex items-center text-gray-400">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span className="text-sm">{edu.location}</span>
                    </div>
                  </div>
                </motion.div>
              </div>

              <motion.p
                className="text-gray-300 mb-2 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
              >
                {edu.description}
              </motion.p>

              <motion.div
                className="text-sm text-gray-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <strong>GPA:</strong> {edu.gpa}
              </motion.div>
            </motion.div>
          </AnimatedSection>
        ))}

        {/* Certifications Section */}
        <AnimatedSection className="mt-16" delay={1.6}>
          <h3 className="text-2xl font-semibold text-white mb-8 flex items-center">
            <Award className="w-6 h-6 text-purple-600 mr-2" />
            Certifications
          </h3>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <AnimatedSection
              key={index}
              delay={1.8 + index * 0.2}
              direction={index % 2 === 0 ? 'left' : 'right'}
            >
              <motion.div
                className="bg-gray-800 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <motion.h4
                  className="text-lg font-semibold text-white mb-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  {cert.name}
                </motion.h4>
                <motion.p
                  className="text-purple-400 font-medium mb-1"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  {cert.issuer}
                </motion.p>
                <motion.p
                  className="text-gray-300 text-sm mb-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  {cert.date}
                </motion.p>
                <motion.a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 px-3 py-1 bg-blue-600 text-white text-xs rounded-full hover:bg-blue-700 transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  View Certificate →
                </motion.a>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
