import { ArrowUp } from 'lucide-react';
import { GravityStarsBackground } from './animate-ui/components/backgrounds/gravity-stars';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-10">
      <GravityStarsBackground
        className="absolute inset-0 bg-black text-white"
        starsCount={100}
        starsSize={3}
        starsOpacity={0.9}
        glowIntensity={20}
        mouseInfluence={150}
        movementSpeed={1.5}
      />
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <button
          onClick={scrollToTop}
          className="mb-6 p-2 text-gray-500 hover:text-white transition-colors"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>

        <p className="text-gray-400 text-sm mb-2">
          Thanks for visiting my portfolio.
        </p>

        <p className="text-gray-600 text-xs">
          © 2025 Sahil Agarwal
        </p>
      </div>
    </footer>
  );
};

export default Footer;