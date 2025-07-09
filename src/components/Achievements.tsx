import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const Achievements = () => {
  const achievements = [
    {
      platform: "LeetCode",
      detail: "Solved 400+ problems | Max Contest Rating: 1647",
      link: "https://leetcode.com/u/Sahil_agarwal623/"
    },
    {
      platform: "CodeChef",
      detail: "2-Star | max rating 1522",
      link: "https://www.codechef.com/users/supernova_3"
    },
  ];

  return (
    <section id="achievements" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            DSA & CP Achievements
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            My journey in solving algorithmic challenges across coding platforms
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((achieve, index) => (
            <AnimatedSection key={index} delay={index * 0.2} direction={index % 2 === 0 ? 'left' : 'right'}>
              <motion.div
                className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg border border-gray-700 hover:border-blue-400 transition-all duration-300"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="flex items-center mb-3">
                  <Trophy className="w-6 h-6 text-emerald-400 mr-3" />
                  <h4 className="text-lg font-semibold text-white">{achieve.platform}</h4>
                </div>
                <p className="text-gray-300 mb-2">{achieve.detail}</p>
                <a
                  href={achieve.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors text-sm"
                >
                  View Profile →
                </a>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
