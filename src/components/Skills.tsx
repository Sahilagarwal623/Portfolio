import { motion } from 'framer-motion';
import { GravityStarsBackground } from './animate-ui/components/backgrounds/gravity-stars';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['React', 'Next.js', 'TypeScript', 'TailwindCSS', 'HTML/CSS']
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express', 'Spring Boot', 'REST APIs']
    },
    {
      title: 'Database',
      skills: ['PostgreSQL', 'MongoDB', 'Prisma ORM', 'MySQL']
    },
    {
      title: 'Tools',
      skills: ['Git', 'GitHub', 'Docker', 'AWS EC2', 'WebSockets']
    },
    {
      title: 'Languages',
      skills: ['JavaScript', 'Java', 'C/C++', 'Python', 'SQL']
    }
  ];

  return (
    <section id="skills" className="relative py-20 min-h-screen">
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
            Skills
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Technologies and tools I work with
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              className="bg-gray-800/50 rounded-lg p-5 border border-gray-700 backdrop-blur-sm"
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="font-medium text-gray-200 mb-3 text-sm uppercase tracking-wide">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 bg-gray-700/50 text-gray-300 text-xs rounded border border-gray-600"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
