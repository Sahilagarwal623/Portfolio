import { motion } from 'framer-motion';
import { Code, Database, Zap, Globe, Shield } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const Skills = () => {
  /* ───────────────────────── Skill Data ───────────────────────── */
  const skillCategories = [
    {
      icon: <Code className="w-8 h-8 text-blue-600" />,
      title: 'Frontend Development',
      skills: [
        { name: 'React',        level: 95 },
        { name: 'TypeScript',   level: 90 },
        { name: 'Tailwind CSS', level: 92 },
      ],
    },
    {
      icon: <Database className="w-8 h-8 text-emerald-600" />,
      title: 'Backend Development',
      skills: [
        { name: 'Node.js',     level: 88 },
        { name: 'Python',      level: 85 },
        { name: 'MongoDb',  level: 80 },
      ],
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-600" />,
      title: 'Tools & Workflow',
      skills: [
        { name: 'Git',    level: 75 },
        { name: 'Docker', level: 50 },
        { name: 'AWS',    level: 33 },
        { name: 'Github', level: 90 },
      ],
    },
  ];

  const technologies = [
    { name: 'JavaScript',  icon: <Globe  className="w-6 h-6" />, color: 'bg-yellow-100  text-yellow-800' },
    { name: 'React',       icon: <Code   className="w-6 h-6" />, color: 'bg-blue-100    text-blue-800'   },
    { name: 'Node.js',     icon: <Zap    className="w-6 h-6" />, color: 'bg-green-100   text-green-800'  },
    { name: 'Python',      icon: <Database className="w-6 h-6" />, color: 'bg-indigo-100  text-indigo-800' },
    { name: 'PostgreSQL',  icon: <Database className="w-6 h-6" />, color: 'bg-purple-100 text-purple-800' },
    { name: 'MongoDB',     icon: <Database className="w-6 h-6" />, color: 'bg-green-100   text-green-800'  },
    { name: 'Docker',      icon: <Shield className="w-6 h-6" />, color: 'bg-blue-100    text-blue-800'   },
    { name: 'AWS',         icon: <Globe  className="w-6 h-6" />, color: 'bg-orange-100  text-orange-800' },
  ];

  /* ───────────────────────── Component ───────────────────────── */
  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Skills&nbsp;&amp;&nbsp;Technologies
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </AnimatedSection>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <AnimatedSection
              key={category.title}
              delay={index * 0.2}
              direction={index % 2 === 0 ? 'left' : 'right'}
            >
              <motion.div
                className="bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
                whileHover={{ y: -5 }}
              >
                {/* Card Header */}
                <div className="flex items-center mb-6">
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {category.icon}
                  </motion.div>
                  <h3 className="text-xl font-semibold text-white ml-3">
                    {category.title}
                  </h3>
                </div>

                {/* Skill Bars */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: 0.5 + skillIndex * 0.1,
                      }}
                      viewport={{ once: true }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-300">
                          {skill.name}
                        </span>
                        <span className="text-sm text-gray-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <motion.div
                          className="bg-gradient-to-r from-blue-500 to-emerald-500 h-2 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{
                            duration: 1,
                            delay: 0.7 + skillIndex * 0.1,
                          }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Technologies */}
        <AnimatedSection className="text-center mb-8" delay={0.8}>
          <h3 className="text-2xl font-semibold text-white mb-4">
            Technologies&nbsp;I&nbsp;Work&nbsp;With
          </h3>
        </AnimatedSection>

        <motion.div
          className="flex flex-wrap justify-center gap-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          viewport={{ once: true }}
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              className={`${tech.color} px-4 py-2 rounded-full flex items-center space-x-2 cursor-pointer`}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 1.2 + index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              >
                {tech.icon}
              </motion.div>
              <span className="font-medium text-sm">{tech.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
