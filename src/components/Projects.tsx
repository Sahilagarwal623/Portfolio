import { motion } from 'framer-motion';
import { ExternalLink, Github, Zap, Users } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Codesphere – Online Collaborative Code Editor",
      description:
        "A web‑based collaborative code editor with real‑time cursor sharing and built‑in chat. Built using React, Node.js, WebSockets, Monaco Editor, and Docker.",
      image:
        "https://images.pexels.com/photos/574077/pexels-photo-574077.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: [
        "React",
        "Node.js",
        "Express",
        "WebSocket",
        "Monaco Editor",
        "Docker"
      ],
      liveUrl: "https://codesphere-4pcp.onrender.com/",
      githubUrl:
        "https://www.linkedin.com/posts/sahil-agarwal-6b309328a_webdevelopment-reactjs-nodejs-activity-7333770808026181635-0qtx?utm_source=share&utm_medium=member_desktop",
      icon: <Zap className="w-6 h-6 text-purple-600" />,
      featured: true
    },
    {
      id: 2,
      title: "Real‑Time Chat Application (Spring Boot)",
      description:
        "A full‑stack chat platform powered by Spring Boot WebSocket backend and a React client, featuring JWT‑based authentication and responsive UI.",
      image:
        "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Spring Boot", "WebSocket", "React", "JWT", "MySQL"],
      liveUrl: "https://github.com/Sahilagarwal623/ChatApplication",
      githubUrl: "https://github.com/Sahilagarwal623/ChatApplication",
      icon: <Users className="w-6 h-6 text-blue-600" />,
      featured: false
    },
    {
      id: 3,
      title: "Blog Application with Node.js & EJS",
      description:
        "A dynamic blog platform built on Express, EJS templates, and MongoDB with user authentication and CRUD functionality.",
      image:
        "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Node.js", "Express", "EJS", "MongoDB", "Passport.js"],
      liveUrl: "https://blogforest-ir81.onrender.com/",
      githubUrl: "https://github.com/Sahilagarwal623/BlogApplication",
      icon: <Zap className="w-6 h-6 text-yellow-600" />,
      featured: false
    }
  ];

  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
        </AnimatedSection>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <AnimatedSection
              key={project.id}
              delay={index * 0.2}
              direction={index % 2 === 0 ? "left" : "right"}
            >
              <motion.div
                className="bg-gray-700 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-600 hover:border-blue-400 group"
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  <motion.div
                    className="absolute top-4 right-4"
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {project.icon}
                  </motion.div>
                </div>

                <div className="p-6">
                  <motion.h3
                    className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {project.title}
                  </motion.h3>
                  <motion.p
                    className="text-gray-300 mb-4 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {project.description}
                  </motion.p>

                  <motion.div
                    className="flex flex-wrap gap-2 mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-600 text-gray-200 text-sm rounded-full"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                          duration: 0.3,
                          delay: 0.7 + techIndex * 0.05
                        }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.1 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>

                  <motion.div
                    className="flex space-x-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <motion.a
                      href={project.liveUrl}
                      className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors"
                      whileHover={{ scale: 1.05, x: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink size={16} />
                      <span className="text-sm font-medium">Live Demo</span>
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      className="flex items-center space-x-2 text-gray-300 hover:text-gray-200 transition-colors"
                      whileHover={{ scale: 1.05, x: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github size={16} />
                      <span className="text-sm font-medium">Source Code</span>
                    </motion.a>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Other Projects */}
        <AnimatedSection className="mb-8" delay={0.6}>
          <h3 className="text-2xl font-semibold text-white mb-8 text-center">
            Other Projects
          </h3>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6">
          {otherProjects.map((project, index) => (
            <AnimatedSection
              key={project.id}
              delay={0.8 + index * 0.1}
              direction={index % 2 === 0 ? "left" : "right"}
            >
              <motion.div
                className="bg-gray-700 rounded-lg p-6 hover:bg-gray-600 transition-colors duration-300 group"
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center mb-3">
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    {project.icon}
                  </motion.div>
                  <h4 className="text-lg font-semibold text-white ml-3 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h4>
                </div>

                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      className="px-2 py-1 bg-gray-600 text-gray-200 text-xs rounded-full"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.3,
                        delay: 0.5 + techIndex * 0.05
                      }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.1 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <motion.a
                    href={project.liveUrl}
                    className="flex items-center space-x-1 text-blue-400 hover:text-blue-300 transition-colors"
                    whileHover={{ scale: 1.05, x: 3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink size={14} />
                    <span className="text-xs font-medium">Demo</span>
                  </motion.a>
                  <motion.a
                    href={project.githubUrl}
                    className="flex items-center space-x-1 text-gray-300 hover:text-gray-200 transition-colors"
                    whileHover={{ scale: 1.05, x: 3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github size={14} />
                    <span className="text-xs font-medium">Code</span>
                  </motion.a>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
