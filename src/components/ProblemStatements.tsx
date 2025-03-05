import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Lightbulb, Rocket, Satellite, Globe } from 'lucide-react';

export const ProblemStatements = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const problems = [
    {
      icon: <Satellite className="w-6 h-6" />,
      title: "Space Debris Tracking",
      description: "Create an innovative solution to track and manage space debris using AI and ML",
      difficulty: "Hard",
      points: 100
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Mars Colony Simulator",
      description: "Develop a simulation tool for planning and managing Mars colonies",
      difficulty: "Medium",
      points: 75
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Space Communication",
      description: "Build a prototype for efficient deep space communication systems",
      difficulty: "Hard",
      points: 100
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Resource Management",
      description: "Create a solution for managing resources in space missions",
      difficulty: "Medium",
      points: 75
    }
  ];

  return (
    <section ref={ref} className="py-20 space-gradient relative overflow-hidden">
      {/* Animated stars - reduced count */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="star"
            initial={{ opacity: 0.1, x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight }}
            animate={{
              opacity: [0.1, 0.5, 0.1],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Nebula effect - reduced opacity */}
      <div className="absolute inset-0 opacity-10">
        <div className="nebula top-1/3 left-1/4 w-96 h-96" 
          style={{ background: 'linear-gradient(45deg, #3b82f6, #9333ea)' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6"
            style={{
              textShadow: '0 0 10px rgba(147, 51, 234, 0.5)'
            }}
          >
            Cosmic Challenges
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Choose from our curated list of space-themed challenges and make your mark in the cosmos
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="cosmic-card p-8 hover:transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="cosmic-glow"></div>
              <div className="flex items-center mb-4">
                <div className="text-purple-500 mr-3">
                  {problem.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">{problem.title}</h3>
              </div>
              <p className="text-gray-300 mb-4">{problem.description}</p>
              <div className="flex justify-between items-center">
                <span className={`px-3 py-1 rounded-full text-sm ${
                  problem.difficulty === 'Hard' ? 'bg-red-500/20 text-red-400' : 'bg-yellow-500/20 text-yellow-400'
                }`}>
                  {problem.difficulty}
                </span>
                <span className="text-purple-400">{problem.points} Points</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};