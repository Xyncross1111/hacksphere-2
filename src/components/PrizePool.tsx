import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Trophy, Award, Medal } from 'lucide-react';
import { useEffect, useState } from 'react';

export const PrizePool = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [stars, setStars] = useState<{x: number, y: number, duration: number}[]>([]);
  
  useEffect(() => {
    // Generate star positions only on the client side
    setStars(
      Array.from({ length: 15 }, () => ({
        x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
        y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
        duration: Math.random() * 5 + 5
      }))
    );
  }, []);

  const prizes = [
    {
      icon: <Trophy className="w-12 h-12" />,
      position: "1st Prize",
      amount: "₹7,000",
      color: "from-yellow-400 to-yellow-600"
    },
    {
      icon: <Award className="w-12 h-12" />,
      position: "2nd Prize",
      amount: "₹5,000",
      color: "from-gray-300 to-gray-500"
    },
    {
      icon: <Medal className="w-12 h-12" />,
      position: "3rd Prize",
      amount: "₹3,000",
      color: "from-orange-400 to-orange-600"
    }
  ];

  return (
    <section ref={ref} className="py-20 space-gradient relative overflow-hidden">
      {/* Animated stars - reduced count */}
      <div className="absolute inset-0">
        {stars.map((star, i) => (
          <motion.div
            key={i}
            className="star"
            initial={{ opacity: 0.1, x: star.x, y: star.y }}
            animate={{
              opacity: [0.1, 0.5, 0.1],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: star.duration,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Nebula effect - reduced opacity */}
      <div className="absolute inset-0 opacity-10">
        <div className="nebula bottom-1/3 right-1/4 w-96 h-96" 
          style={{ background: 'linear-gradient(45deg, #3b82f6, #9333ea)' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-white text-center mb-16"
          style={{
            textShadow: '0 0 10px rgba(147, 51, 234, 0.5)'
          }}
        >
          Prizes
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {prizes.map((prize, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity" />
              <div className="relative cosmic-card p-8 hover:transform hover:-translate-y-2 transition-all duration-300">
                <div className="cosmic-glow"></div>
                <div className={`text-gradient bg-gradient-to-r ${prize.color} bg-clip-text text-transparent mb-6`}>
                  {prize.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{prize.position}</h3>
                <p className="text-4xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text">
                  {prize.amount}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-gray-300 text-lg">
            Additional swag and sponsored prizes worth ₹2,00,000+
          </p>
        </motion.div>
      </div>
    </section>
  );
};