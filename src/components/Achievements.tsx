import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';
import { GravityStarsBackground } from './animate-ui/components/backgrounds/gravity-stars';

const Achievements = () => {
  const achievements = [
    {
      platform: "CodeChef",
      detail: "3★ Rated | Max Rating: 1633",
      handle: "supernova_3",
      link: "https://www.codechef.com/users/supernova_3"
    },
    {
      platform: "Codeforces",
      detail: "Pupil | Max Rating: 1276",
      handle: "Sahil_agarwal333",
      link: "https://codeforces.com/profile/Sahil_agarwal333"
    },
    {
      platform: "LeetCode",
      detail: "Max Rating: 1760",
      handle: "Sahil_agarwal623",
      link: "https://leetcode.com/u/Sahil_agarwal623/"
    }
  ];

  const hackathons = [
    {
      name: "SuRaksha Cyber Hackathon",
      detail: "Semi-Finalists for the cybersecurity hackathon organized by Canara Bank",
      year: "2025"
    }
  ];

  return (
    <section id="achievements" className="relative py-20 min-h-screen">
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
            Competitive Programming
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            My journey solving algorithmic challenges
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-5 mb-12">
          {achievements.map((achieve, index) => (
            <motion.div
              key={index}
              className="bg-gray-800/50 p-5 rounded-lg border border-gray-700 backdrop-blur-sm"
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-2">
                <Trophy className="w-4 h-4 text-gray-400 mr-2" />
                <h4 className="font-medium text-white">{achieve.platform}</h4>
              </div>
              <p className="text-gray-300 text-sm mb-1">{achieve.detail}</p>
              <a
                href={achieve.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-white text-xs"
              >
                @{achieve.handle} →
              </a>
            </motion.div>
          ))}
        </div>

        <div className="border-t border-gray-700 pt-8">
          <h3 className="text-lg font-medium text-gray-200 mb-4">Hackathons</h3>
          {hackathons.map((hack, index) => (
            <div
              key={index}
              className="bg-gray-800/50 p-4 rounded-lg border border-gray-700 backdrop-blur-sm"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium text-white text-sm">{hack.name}</h4>
                  <p className="text-gray-400 text-sm mt-1">{hack.detail}</p>
                </div>
                <span className="text-gray-500 text-xs">{hack.year}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
