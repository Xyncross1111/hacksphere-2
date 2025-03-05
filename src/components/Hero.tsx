
"use client";
import { motion } from 'framer-motion';
import { Rocket, Stars, Orbit } from 'lucide-react';
// import { DevfolioButton } from './DevfolioButton';
import { useState, useEffect } from 'react';

export const Hero = () => {
  // State to store window dimensions
  const [dimensions, setDimensions] = useState({ width: 1200, height: 800 });
  // State to store star positions
  const [stars, setStars] = useState<Array<{x: number, y: number}>>([]);
  
  // Get window dimensions and calculate star positions on client-side only
  useEffect(() => {
    // Update dimensions
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight
    });
    
    // Generate star positions
    const starPositions = [...Array(100)].map(() => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight
    }));
    
    setStars(starPositions);
    
    // Optional: Add resize handler if needed
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="relative min-h-screen space-gradient overflow-hidden">
      {/* Animated stars */}
      <div className="absolute inset-0">
        {stars.map((position, i) => (
          <motion.div
            key={i}
            className="star"
            initial={{ opacity: 0.1, x: position.x, y: position.y }}
            animate={{
              opacity: [0.1, 0.5, 0.1],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: Math.random() * 5 + 2,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Nebula effects */}
      <div className="absolute inset-0">
        <div className="nebula top-1/4 left-1/4 w-96 h-96" />
        <div className="nebula bottom-1/4 right-1/4 w-96 h-96" 
          style={{ background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4)' }} />
      </div>

      {/* Cosmic portal */}
      <div className="absolute left-1/4 top-1/4 w-96 h-96 opacity-30">
        <div className="cosmic-portal" />
      </div>

      {/* Rest of your component remains unchanged */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white px-4">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex items-center gap-4 mb-8"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <Rocket className="w-12 h-12 text-purple-500" />
          </motion.div>
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Stars className="w-12 h-12 text-blue-500" />
          </motion.div>
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          >
            <Orbit className="w-12 h-12 text-pink-500" />
          </motion.div>
        </motion.div>

        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-6xl md:text-8xl font-bold text-center"
          style={{
            background: 'linear-gradient(to right, #ff6b6b, #4ecdc4, #9f7aea)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundSize: '200% auto',
            animation: 'gradient 5s linear infinite',
          }}
        >
          HackSphere
        </motion.h1>

        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-300 text-center mt-6 max-w-2xl"
        >
          Embark on a cosmic journey of innovation where technology meets the infinite possibilities of space
        </motion.p>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-12 flex justify-center items-center"
        >
          {/* <DevfolioButton 
            hackathonSlug="hacksphere" 
            buttonTheme="dark"
            className="z-50"
          /> */}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-gray-400 flex flex-col items-center"
          >
            <span className="mb-2">Scroll to Explore</span>
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-8 bg-gradient-to-b from-purple-500 to-transparent rounded-full"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};