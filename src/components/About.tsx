"use client";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Rocket, Users, Orbit } from 'lucide-react';

export const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "8 Hours of Coding",
      description: "Immerse yourself in 8 hours of Innovation and creativity!"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Zero Fees",
      description: "No Cost to Participate , enjoy free meals and unforgettable fun."
    },
    {
      icon: <Orbit className="w-8 h-8" />,
      title: "Swags and Goodies",
      description: "Win prizes , grab goodies and take home more than just memories."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Innovators' Nexus",
      description: "Broaden your Horizons by networking with industry experts and mentors."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <section ref={ref} id="about" className="py-20 space-gradient relative overflow-hidden">
      {/* Animated stars - with safe positioning */}
      <div className="absolute inset-0 z-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="star absolute h-1 w-1 rounded-full bg-white"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: 0.1,
            }}
            animate={{
              opacity: [0.1, 0.5, 0.1],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: Math.random() * 5 + 2,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Rest of the component remains the same */}
      {/* Nebula effects - reduced */}
      <div className="absolute inset-0 opacity-10">
        <div className="nebula top-1/3 right-1/3 w-96 h-96"
          style={{ background: 'linear-gradient(45deg, #9333ea, #3b82f6)' }} />
      </div>

      {/* Space dust particles - reduced */}
      <div className="absolute inset-0">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="space-dust"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About HackSphere 2.0
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="cosmic-card p-8 hover:transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="cosmic-glow"></div>
              <div className="flex flex-row">
                <div className="text-purple-500 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl pl-6 font-semibold text-white mb-3">{feature.title}</h3>
              </div>

              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};