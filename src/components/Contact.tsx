import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import { GravityStarsBackground } from './animate-ui/components/backgrounds/gravity-stars';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-4 h-4" />,
      label: "Email",
      value: "agarwalsahil333@gmail.com",
      link: "mailto:agarwalsahil333@gmail.com"
    },
    {
      icon: <Phone className="w-4 h-4" />,
      label: "Phone",
      value: "+91 7410906544",
      link: "tel:+917410906544"
    },
    {
      icon: <MapPin className="w-4 h-4" />,
      label: "Location",
      value: "India"
    }
  ];

  return (
    <section id="contact" className="relative py-20 min-h-screen">
      <GravityStarsBackground
        className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black text-white"
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
            Get In Touch
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            I'm always open to discussing new opportunities and interesting projects.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center text-gray-400">
                  <span className="text-gray-500 mr-3">{info.icon}</span>
                  {info.link ? (
                    <a href={info.link} className="hover:text-white text-sm transition-colors">
                      {info.value}
                    </a>
                  ) : (
                    <span className="text-sm">{info.value}</span>
                  )}
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-gray-700">
              <p className="text-gray-500 text-sm mb-3">Find me on</p>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/Sahilagarwal623"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-white transition-colors"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/sahil-agarwal-6b309328a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-white transition-colors"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm text-gray-400 mb-1.5">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2.5 border border-gray-700 rounded-lg bg-gray-800/50 backdrop-blur-sm text-white text-sm focus:border-gray-500 focus:outline-none"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm text-gray-400 mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2.5 border border-gray-700 rounded-lg bg-gray-800/50 backdrop-blur-sm text-white text-sm focus:border-gray-500 focus:outline-none"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm text-gray-400 mb-1.5">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2.5 border border-gray-700 rounded-lg bg-gray-800/50 backdrop-blur-sm text-white text-sm focus:border-gray-500 focus:outline-none"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm text-gray-400 mb-1.5">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-3 py-2.5 border border-gray-700 rounded-lg bg-gray-800/50 backdrop-blur-sm text-white text-sm focus:border-gray-500 focus:outline-none resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="px-6 py-2.5 bg-white text-black text-sm rounded-lg hover:bg-gray-200 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;