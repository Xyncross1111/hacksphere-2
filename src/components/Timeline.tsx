import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, Flag, Rocket, Trophy } from 'lucide-react';
import { useState, useEffect } from 'react';

export const Timeline = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  // State for viewport dimensions
  const [viewport, setViewport] = useState({ width: 1000, height: 800 });

  // Update viewport dimensions on client side only
  useEffect(() => {
    setViewport({
      width: window.innerWidth,
      height: window.innerHeight
    });

    const handleResize = () => {
      setViewport({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const events = [
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Mission Preparation",
      date: "March 1, 2024",
      description: "Begin your cosmic journey"
    },
    {
      icon: <Flag className="w-6 h-6" />,
      title: "Launch Sequence",
      date: "March 15, 2024",
      description: "Ignition and liftoff into innovation"
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Orbital Insertion",
      date: "March 15, 2024",
      description: "48 hours of cosmic creation"
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Mission Completion",
      date: "March 17, 2024",
      description: "Showcase your stellar projects"
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
            initial={{ opacity: 0.1, x: Math.random() * viewport.width, y: Math.random() * viewport.height }}
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

      {/* Rest of the component remains the same */}
      {/* Nebula effects - reduced opacity */}
      <div className="absolute inset-0 opacity-10">
        <div className="nebula top-1/4 left-1/3 w-96 h-96" 
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
          Mission Timeline
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-500 via-blue-500 to-purple-500" />

          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`flex items-center mb-12 ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}
            >
              <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                <div className="cosmic-card p-6 hover:transform hover:-translate-y-2 transition-all duration-300">
                  <div className="cosmic-glow"></div>
                  <div className="text-purple-500 mb-2">
                    {event.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white">{event.title}</h3>
                  <p className="text-purple-400 font-medium">{event.date}</p>
                  <p className="text-gray-300 mt-2">{event.description}</p>
                </div>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-500 rounded-full shadow-lg shadow-purple-500/50" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};