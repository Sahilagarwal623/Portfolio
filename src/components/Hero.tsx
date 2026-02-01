import { Github, Linkedin, Mail } from 'lucide-react';
import { GravityStarsBackground } from './animate-ui/components/backgrounds/gravity-stars';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-14">
      <GravityStarsBackground
        className="absolute inset-0 bg-linear-to-b from-black to-gray-900 text-white"
        starsCount={100}
        starsSize={3}
        starsOpacity={0.9}
        glowIntensity={20}
        mouseInfluence={150}
        movementSpeed={1.5}
      />
      <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-serif text-white mb-4">
          Sahil Agarwal
        </h1>

        <p className="text-lg text-gray-300 mb-8">
          Full Stack Developer passionate about building web applications
          with modern technologies.
        </p>

        <div className="flex justify-center space-x-6 mb-10">
          <a
            href="https://github.com/Sahilagarwal623"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Github size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/sahil-agarwal-6b309328a/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Linkedin size={22} />
          </a>
          <a
            href="mailto:agarwalsahil333@gmail.com"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Mail size={22} />
          </a>
        </div>

        <a
          href="#about"
          className="inline-block text-sm text-gray-400 hover:text-white border-b border-gray-500 pb-1 transition-colors"
        >
          Learn more about me
        </a>
      </div>
    </section>
  );
};

export default Hero;