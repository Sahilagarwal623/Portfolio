import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award } from 'lucide-react';
import { GravityStarsBackground } from './animate-ui/components/backgrounds/gravity-stars';

const Experience = () => {
  const experience = [
    {
      role: "Frontend Developer",
      company: "BFM Academy",
      location: "Remote",
      duration: "Dec 2024 - Present",
      points: [
        "Engineered the frontend for a Telegram Mini App aggregating Web3 news using Next.js and TailwindCSS",
        "Developed a Play-to-Earn (P2E) gaming module with complex state management for game logic and reward tracking",
        "Integrated Web3 wallet connections and RESTful APIs for blockchain-based backend services",
        "Optimized performance with lazy loading and asset compression for mobile networks"
      ]
    }
  ];

  const education = [
    {
      degree: "B.Tech in Electronics and Communication Engineering",
      school: "Indian Institute of Information Technology, Kota",
      duration: "2023 - Present",
      gpa: "CGPA: 7.24"
    },
    {
      degree: "Senior Secondary (CBSE)",
      school: "D.A.V Centenary Public School",
      duration: "2022",
      gpa: "88.8%"
    }
  ];

  const certifications = [
    {
      name: "Java Basic Certification",
      issuer: "HackerRank",
      link: "https://www.hackerrank.com/certificates/9845ebad0463"
    }
  ];

  return (
    <section id="experience" className="relative py-20 min-h-screen">
      <GravityStarsBackground
        className="absolute inset-0 bg-linear-to-b from-gray-900 to-black text-white"
        starsCount={100}
        starsSize={3}
        starsOpacity={0.9}
        glowIntensity={20}
        mouseInfluence={150}
        movementSpeed={1.5}
      />
      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-serif text-white mb-4">
            Experience & Education
          </h2>
        </div>

        {/* Experience */}
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Briefcase className="w-5 h-5 text-gray-400 mr-2" />
            </motion.div>
            <h3 className="text-lg font-medium text-gray-200">Experience</h3>
          </div>

          {experience.map((exp, index) => (
            <div
              key={index}
              className="bg-gray-800/50 rounded-lg p-5 border border-gray-700 backdrop-blur-sm mb-4"
            >
              <div className="flex flex-col md:flex-row md:justify-between mb-2">
                <div>
                  <h4 className="font-medium text-white">{exp.role}</h4>
                  <p className="text-gray-400 text-sm">{exp.company} · {exp.location}</p>
                </div>
                <span className="text-gray-500 text-sm mt-1 md:mt-0">{exp.duration}</span>
              </div>
              <ul className="mt-3 space-y-1.5">
                {exp.points.map((point, i) => (
                  <li key={i} className="text-gray-300 text-sm pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-gray-500">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Education */}
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <GraduationCap className="w-5 h-5 text-gray-400 mr-2" />
            </motion.div>
            <h3 className="text-lg font-medium text-gray-200">Education</h3>
          </div>

          <div className="space-y-4">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-gray-800/50 rounded-lg p-5 border border-gray-700 backdrop-blur-sm"
              >
                <div className="flex flex-col md:flex-row md:justify-between">
                  <div>
                    <h4 className="font-medium text-white">{edu.degree}</h4>
                    <p className="text-gray-400 text-sm">{edu.school}</p>
                    <p className="text-gray-500 text-sm mt-1">{edu.gpa}</p>
                  </div>
                  <span className="text-gray-500 text-sm mt-2 md:mt-0">{edu.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <div className="flex items-center mb-6">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Award className="w-5 h-5 text-gray-400 mr-2" />
            </motion.div>
            <h3 className="text-lg font-medium text-gray-200">Certifications</h3>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-gray-800/50 rounded-lg p-4 border border-gray-700 backdrop-blur-sm"
              >
                <h4 className="font-medium text-white text-sm">{cert.name}</h4>
                <p className="text-gray-500 text-xs mt-1">{cert.issuer}</p>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white text-xs mt-2 inline-block"
                >
                  View Certificate →
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
