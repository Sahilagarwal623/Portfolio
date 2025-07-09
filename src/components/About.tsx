import { motion } from 'framer-motion';
import { Code, Coffee, Lightbulb, Heart } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-6 h-6 text-blue-600" />,
      title: "Clean Code",
      description: "Writing maintainable, scalable code with best practices"
    },
    {
      icon: <Coffee className="w-6 h-6 text-emerald-600" />,
      title: "Problem Solver",
      description: "Turning complex challenges into simple, elegant solutions"
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-yellow-600" />,
      title: "Innovation",
      description: "Always exploring new technologies and creative approaches"
    },
    {
      icon: <Heart className="w-6 h-6 text-red-600" />,
      title: "Passion",
      description: "Genuinely excited about creating amazing user experiences"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"></h2>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            I'm a dedicated developer who believes in the power of technology to create meaningful connections and solve real-world problems.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Profile Image Placeholder */}
          <AnimatedSection className="order-2 md:order-1" direction="left" delay={0.2}>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-gray-700 to-gray-600 rounded-2xl flex items-center justify-center">
                <div className="w-32 h-32 bg-gray-500 rounded-full flex items-center justify-center">
                  <span className="text-4xl font-bold text-white">SA</span>
                </div>
              </div>
              <motion.div 
                className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center"
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <Code className="w-12 h-12 text-white" />
              </motion.div>
            </div>
          </AnimatedSection>

          {/* Content */}
          <AnimatedSection className="order-1 md:order-2" direction="right" delay={0.4}>
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I specialize in creating 
                modern web applications that are both beautiful and functional. My journey started 
                with a curiosity about how things work, which led me to fall in love with coding.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm passionate about user experience, clean architecture, and staying up-to-date 
                with the latest technologies. When I'm not coding, you can find me exploring new 
                frameworks, contributing to open source, or enjoying a good cup of coffee.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mt-8">
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    className="p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02, y: -2 }}
                  >
                    <div className="flex items-center mb-2">
                      {highlight.icon}
                      <h3 className="font-semibold text-white ml-2">
                        {highlight.title}
                      </h3>
                    </div>
                    <p className="text-sm text-gray-300">
                      {highlight.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default About;