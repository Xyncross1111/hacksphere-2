import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Brain, Cloud, Globe, Shield, Satellite, Rocket } from 'lucide-react';
import { useEffect, useState } from 'react';

export const Domains = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [dimensions, setDimensions] = useState({ width: 1000, height: 800 });
  
  useEffect(() => {
    // Set dimensions only after component mounts
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, []);

  const domains = [
    {
      icon: <Brain className="w-12 h-12" />,
      title: "Cosmic Intelligence",
      description: "Develop AI solutions for space exploration and data analysis"
    },
    {
      icon: <Cloud className="w-12 h-12" />,
      title: "Nebula Computing",
      description: "Build scalable space applications using cloud technologies"
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Planetary Tech",
      description: "Create innovations for space navigation and communication"
    }
  ];

  // Pre-calculate random positions for stars to maintain consistency
  const starPositions = [...Array(15)].map(() => ({
    x: Math.random() * dimensions.width,
    y: Math.random() * dimensions.height,
    duration: Math.random() * 5 + 5
  }));

  return (
    <section ref={ref} className="py-6 md:py-20 space-gradient relative overflow-hidden">
      {/* Animated stars - reduced count */}
      <div className="absolute inset-0">
        {starPositions.map((pos, i) => (
          <motion.div
            key={i}
            className="star"
            initial={{ opacity: 0.1, x: pos.x, y: pos.y }}
            animate={{
              opacity: [0.1, 0.5, 0.1],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: pos.duration,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Rest of the component remains unchanged */}
      {/* Nebula effects - reduced opacity */}
      <div className="absolute inset-0 opacity-10">
        <div className="nebula top-1/4 right-1/4 w-96 h-96" 
          style={{ background: 'linear-gradient(45deg, #3b82f6, #9333ea)' }} />
      </div>

      {/* Cosmic portal */}
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 opacity-10">
        <div className="cosmic-portal" />
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
          Cosmic Domains
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {domains.map((domain, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="cosmic-card p-8 text-center group hover:transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="cosmic-glow"></div>
              <div className="text-purple-500 mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {domain.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">{domain.title}</h3>
              <p className="text-gray-300">{domain.description}</p>
              
              {/* Orbiting particles */}
              <div className="relative w-full h-12 mt-4">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute left-1/2 top-1/2 w-1 h-1 bg-purple-500 rounded-full"
                    animate={{
                      x: Math.cos(i * (Math.PI * 2 / 3)) * 20,
                      y: Math.sin(i * (Math.PI * 2 / 3)) * 20,
                    }}
                    transition={{
                      duration: 2 + i,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    style={{
                      boxShadow: '0 0 5px rgba(147, 51, 234, 0.8)'
                    }}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};