"use client";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BriefcaseMedical, GraduationCap, ShieldCheck, CircleSlash2} from 'lucide-react';

export const Domains = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const domains = [
    {
      icon: <BriefcaseMedical className="w-12 h-12" />,
      title: "Health-Tech",
      description: "Develop technology to enhance healthcare through AI, telemedicine and smart medical solutions."
    },
    {
      icon: <GraduationCap className="w-12 h-12" />,
      title: "Ed-Tech",
      description: "Harnesses technology to transform learning through gamification, interactive platforms, and personalized education solutions."
    },
    {
      icon: <ShieldCheck className="w-12 h-12" />,
      title: "Blockchain",
      description: "Embrace decentralization! Dive into smart contracts and blockchain technology to shape the future."
    }
  ];


  return (
    <section ref={ref} id="domains" className="py-6 md:py-20 space-gradient relative overflow-hidden">
      {/* Animated stars - reduced count */}
      <div className="absolute inset-0 z-0">
        {[...Array(15)].map((_, i) => (
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
              <div className="flex flex-row mb-6">
                <div className="text-purple-500 transform group-hover:scale-110 transition-transform duration-300">
                  {domain.icon}
                </div>
                <h3 className="text-2xl md:text-3xl font-semibold text-white my-2 ml-8">{domain.title}</h3>
              </div>

              <p className="text-gray-300">{domain.description}</p>
                <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className='flex items-center justify-center mt-7  drop-shadow-[0_0_10px_rgba(192,132,252,0.8)]'
                >
                <CircleSlash2 className="w-11 h-11 text-purple-500" />
                </motion.div> 
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};