import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { LiquidButton } from './animate-ui/components/buttons/liquid';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-sm z-50 border-b border-gray-800">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex justify-between items-center h-14">
          <div className="font-serif text-lg text-white">
            Sahil Agarwal
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-2">
            {navItems.map((item) => (
              <LiquidButton
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                variant="ghost"
                size="sm"
                className={`text-xs [--liquid-button-color:white] hover:text-black ${activeSection === item.id
                  ? 'text-white font-medium'
                  : 'text-gray-400'
                  }`}
              >
                {item.label}
              </LiquidButton>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <LiquidButton
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              variant="ghost"
              size="icon-sm"
              className="text-gray-400 hover:text-black [--liquid-button-color:white]"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </LiquidButton>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-sm border-t border-gray-800">
          <div className="px-4 py-3 space-y-2">
            {navItems.map((item) => (
              <LiquidButton
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                variant="ghost"
                size="sm"
                className={`w-full justify-start text-sm [--liquid-button-color:white] hover:text-black ${activeSection === item.id
                  ? 'text-white font-medium'
                  : 'text-gray-400'
                  }`}
              >
                {item.label}
              </LiquidButton>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;