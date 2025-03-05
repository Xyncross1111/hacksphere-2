import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, MapPin, Phone, Satellite, Radio } from 'lucide-react';

export const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
        <div className="nebula top-1/3 right-1/4 w-96 h-96" 
          style={{ background: 'linear-gradient(45deg, #9333ea, #3b82f6)' }} />
      </div>

      {/* Cosmic portal */}
      <div className="absolute right-1/4 bottom-1/4 w-64 h-64 opacity-20">
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
          Establish Contact
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="cosmic-card p-8"
          >
            <div className="cosmic-glow"></div>
            <h3 className="text-2xl font-bold text-white mb-6">Interstellar Communication</h3>
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="mr-4">
                  <Mail className="w-6 h-6 text-purple-500" />
                </div>
                <p className="text-gray-300">contact@hacksphere.space</p>
              </div>
              <div className="flex items-center">
                <div className="mr-4">
                  <Phone className="w-6 h-6 text-purple-500" />
                </div>
                <p className="text-gray-300">+91 98765 43210</p>
              </div>
              <div className="flex items-center">
                <div className="mr-4">
                  <MapPin className="w-6 h-6 text-purple-500" />
                </div>
                <p className="text-gray-300">Innovation Hub, Tech City, India</p>
              </div>
              <div className="flex items-center">
                <div className="mr-4">
                  <Satellite className="w-6 h-6 text-purple-500" />
                </div>
                <p className="text-gray-300">Orbital Frequency: 142.7 MHz</p>
              </div>
              <div className="flex items-center">
                <div className="mr-4">
                  <Radio className="w-6 h-6 text-purple-500" />
                </div>
                <p className="text-gray-300">Deep Space Network: Online</p>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ x: 50, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="cosmic-card p-8 space-y-6"
          >
            <div className="cosmic-glow"></div>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                Cosmic Identity
              </label>
              <input
                type="text"
                id="name"
                className="w-full bg-gray-800 border border-purple-500/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Transmission Coordinates
              </label>
              <input
                type="email"
                id="email"
                className="w-full bg-gray-800 border border-purple-500/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Interstellar Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full bg-gray-800 border border-purple-500/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Your message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold py-3 rounded-lg transition-all relative overflow-hidden group"
            >
              <span className="relative z-10">Transmit Message</span>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};