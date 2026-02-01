import { motion } from 'framer-motion';
import { Code as CodeIcon, Coffee, Lightbulb, Heart } from 'lucide-react';
import { Code, CodeHeader, CodeBlock } from './animate-ui/components/animate/code';
import { GravityStarsBackground } from './animate-ui/components/backgrounds/gravity-stars';

const About = () => {
  const highlights = [
    {
      icon: <CodeIcon className="w-5 h-5 text-gray-300" />,
      title: "Clean Code",
      description: "Writing maintainable, scalable code with best practices"
    },
    {
      icon: <Coffee className="w-5 h-5 text-gray-300" />,
      title: "Problem Solver",
      description: "Turning complex challenges into elegant solutions"
    },
    {
      icon: <Lightbulb className="w-5 h-5 text-gray-300" />,
      title: "Innovation",
      description: "Exploring new technologies and creative approaches"
    },
    {
      icon: <Heart className="w-5 h-5 text-gray-300" />,
      title: "Passion",
      description: "Creating amazing user experiences"
    }
  ];

  const codeSnippet = `const developer = {
  name: "Sahil Agarwal",
  role: "Full Stack Developer",
  skills: ["React", "Node.js", "TypeScript"],
  passion: "Building amazing web apps"
};`;

  return (
    <section id="about" className="relative py-20 min-h-screen">
      <GravityStarsBackground
        className="absolute inset-0 bg-linear-to-b from-black to-gray-900 text-white"
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
            About Me
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            A dedicated developer who believes in the power of technology to create meaningful connections and solve real-world problems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Code Block */}
          <div className="order-2 md:order-1">
            <Code code={codeSnippet} className="bg-gray-900/80 border-gray-700 backdrop-blur-sm">
              <CodeHeader className="bg-gray-800/80 text-gray-400 border-gray-700">
                developer.ts
              </CodeHeader>
              <CodeBlock
                lang="typescript"
                writing={true}
                duration={3000}
                cursor={true}
                inView={true}
                inViewOnce={true}
              />
            </Code>
          </div>

          {/* Content */}
          <div className="order-1 md:order-2 space-y-5">
            <p className="text-gray-300 leading-relaxed">
              I'm a B.Tech ECE student at IIIT Kota, specializing in creating
              modern web applications that are both beautiful and functional. My journey started
              with a curiosity about how things work, which led me to fall in love with coding.
            </p>

            <p className="text-gray-300 leading-relaxed">
              I'm passionate about user experience, clean architecture, and staying up-to-date
              with the latest technologies. I enjoy competitive programming and building
              full-stack applications.
            </p>

            <div className="grid grid-cols-2 gap-3 pt-4">
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="p-3 bg-gray-800/50 rounded-lg border border-gray-700 backdrop-blur-sm"
                >
                  <div className="flex items-center mb-1.5">
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      {highlight.icon}
                    </motion.div>
                    <h3 className="font-medium text-gray-200 ml-2 text-sm">
                      {highlight.title}
                    </h3>
                  </div>
                  <p className="text-xs text-gray-400">
                    {highlight.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;