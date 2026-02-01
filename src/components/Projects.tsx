import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { GravityStarsBackground } from './animate-ui/components/backgrounds/gravity-stars';

const Projects = () => {
  const projects = [
    {
      title: "CodeSphere",
      description: "A full-stack web-based code editor supporting multiple languages using Docker containers for isolated code execution. Features real-time collaborative coding rooms with multiple cursors, text synchronization, and in-room chat. Includes user authentication with JWT.",
      technologies: ["React", "Node.js", "Express", "WebSocket", "Monaco Editor", "Docker", "AWS EC2"],
      liveUrl: "https://code-sphere-alpha.vercel.app/",
      demoUrl: "https://www.linkedin.com/posts/sahil-agarwal-6b309328a_webdevelopment-reactjs-nodejs-activity-7333770808026181635-0qtx"
    },
    {
      title: "EventNest",
      description: "A full-stack event booking platform with real-time seat locking using optimistic locking and database transactions. Features JWT-based authentication, organizer dashboard for event management, and cron jobs for automatic expiration of seat holds.",
      technologies: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Prisma ORM"],
      liveUrl: "https://booking-platform-self.vercel.app/",
      githubUrl: "https://github.com/Sahilagarwal623/Booking-Platform"
    },
    {
      title: "Food Delivery Application",
      description: "A full-stack food delivery web application with Google Maps API integration to simulate real-time delivery tracking. Features secure backend APIs with efficient database querying.",
      technologies: ["Next.js", "Prisma ORM", "PostgreSQL", "Google Maps API"],
      liveUrl: "https://food-delivery-app-5rjn.vercel.app/"
    },
    {
      title: "Blog Application",
      description: "A dynamic blog platform built with Express and EJS templates, featuring user authentication and CRUD functionality.",
      technologies: ["Node.js", "Express", "EJS", "MongoDB", "Passport.js"],
      liveUrl: "https://blogforest-ir81.onrender.com/",
      githubUrl: "https://github.com/Sahilagarwal623/BlogApplication"
    },
    {
      title: "Real-Time Chat Application",
      description: "A full-stack chat platform powered by Spring Boot WebSocket backend with JWT-based authentication and responsive UI.",
      technologies: ["Spring Boot", "WebSocket", "React", "JWT", "MySQL"],
      githubUrl: "https://github.com/Sahilagarwal623/ChatApplication"
    }
  ];

  return (
    <section id="projects" className="relative py-20 min-h-screen">
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
            Projects
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            A selection of recent work and personal projects
          </p>
        </div>

        <div className="space-y-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="bg-gray-800/50 rounded-lg p-6 border border-gray-700 backdrop-blur-sm"
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                <h3 className="text-lg font-medium text-white mb-2 md:mb-0">
                  {project.title}
                </h3>
                <div className="flex space-x-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-sm text-gray-400 hover:text-white"
                    >
                      <ExternalLink size={14} className="mr-1" />
                      Live
                    </a>
                  )}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-sm text-gray-400 hover:text-white"
                    >
                      <ExternalLink size={14} className="mr-1" />
                      Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-sm text-gray-400 hover:text-white"
                    >
                      <Github size={14} className="mr-1" />
                      Code
                    </a>
                  )}
                </div>
              </div>

              <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 bg-gray-700/50 text-gray-400 text-xs rounded border border-gray-600"
                  >
                    {tech}
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

export default Projects;
