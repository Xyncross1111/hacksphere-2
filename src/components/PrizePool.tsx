import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Trophy, Award, Medal, Sparkles, Gift, ExternalLink } from 'lucide-react';
import { useEffect, useState } from 'react';

export const PrizePool = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [stars, setStars] = useState<{x: number, y: number, duration: number, size: number}[]>([]);
  
  useEffect(() => {
    // Generate star positions only on the client side
    setStars(
      Array.from({ length: 25 }, () => ({
        x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
        y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
        duration: Math.random() * 5 + 5,
        size: Math.random() * 3 + 1
      }))
    );
  }, []);

  const prizes = [
    {
      icon: <Trophy className="w-12 h-12" />,
      position: "1st Prize",
      amount: "₹7,000",
      color: "from-yellow-400 to-yellow-600",
      benefits: ["Certificate of Excellence", "Premium Swag Kit", "Mentorship Session"]
    },
    {
      icon: <Award className="w-12 h-12" />,
      position: "2nd Prize",
      amount: "₹5,000",
      color: "from-gray-300 to-gray-500",
      benefits: ["Certificate of Merit", "Swag Kit", "Networking Opportunity"]
    },
    {
      icon: <Medal className="w-12 h-12" />,
      position: "3rd Prize",
      amount: "₹3,000",
      color: "from-orange-400 to-orange-600",
      benefits: ["Certificate of Achievement", "Swag Items"]
    }
  ];

  const sponsoredPrizes = [
    {
      name: "Best UI/UX",
      amount: "₹2,000",
      sponsor: "DesignLab"
    },
    {
      name: "Most Innovative",
      amount: "₹2,000",
      sponsor: "TechInnovate"
    },
    {
      name: "Best Use of AI",
      amount: "₹2,000",
      sponsor: "AIFuture"
    }
  ];

  return (
    <section ref={ref} className="py-20 space-gradient relative overflow-hidden">
      {/* Animated stars with different sizes */}
      <div className="absolute inset-0">
        {stars.map((star, i) => (
          <motion.div
            key={i}
            className="star rounded-full bg-white"
            style={{ width: star.size, height: star.size }}
            initial={{ opacity: 0.1, x: star.x, y: star.y }}
            animate={{
              opacity: [0.1, 0.8, 0.1],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: star.duration,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Nebula effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="nebula top-1/4 left-1/4 w-96 h-96" 
          style={{ background: 'linear-gradient(45deg, #3b82f6, #9333ea)' }} />
        <div className="nebula bottom-1/3 right-1/4 w-96 h-96" 
          style={{ background: 'linear-gradient(45deg, #ec4899, #8b5cf6)' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header with animated underline */}
        <div className="text-center mb-20 relative">
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-white inline-block"
            style={{
              textShadow: '0 0 10px rgba(147, 51, 234, 0.5)'
            }}
          >
            <Sparkles className="inline-block mr-3 w-8 h-8 text-purple-400" />
            Prizes & Rewards
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            animate={inView ? { width: "100px" } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mt-4"
          />
        </div>

        {/* Main prizes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {prizes.map((prize, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl blur opacity-30 group-hover:opacity-70 transition-opacity" />
              <div className="relative cosmic-card p-8 hover:transform hover:-translate-y-2 transition-all duration-300">
                <div className="cosmic-glow"></div>
                
                {/* Crown indicator for 1st place */}
                {index === 0 && (
                  <motion.div 
                    className="absolute -top-4 -right-4 bg-yellow-500 rounded-full p-2"
                    animate={{ rotate: [0, 10, 0, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Sparkles className="w-4 h-4 text-white" />
                  </motion.div>
                )}
                
                <div className={`text-gradient bg-gradient-to-r ${prize.color} bg-clip-text text-transparent mb-6`}>
                  {prize.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{prize.position}</h3>
                <p className="text-4xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text mb-6">
                  {prize.amount}
                </p>
                
                {/* Added benefits list */}
                <div className="border-t border-purple-800 pt-4 mt-4">
                  <h4 className="text-sm font-semibold text-purple-300 mb-2">Benefits Include:</h4>
                  <ul className="space-y-2">
                    {prize.benefits.map((benefit, i) => (
                      <li key={i} className="text-gray-300 text-sm flex items-start">
                        <div className="text-purple-400 mr-2 mt-0.5">•</div>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Sponsored prizes section */}
        {/* <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            <Gift className="inline-block mr-2 -mt-1" />
            Special Category Awards
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sponsoredPrizes.map((sponsoredPrize, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.95, opacity: 0 }}
                animate={inView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + (index * 0.1) }}
                className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 backdrop-blur-md p-6 rounded-xl border border-purple-700/50"
              >
                <h4 className="text-xl font-bold text-white mb-2">{sponsoredPrize.name}</h4>
                <p className="text-2xl font-bold text-transparent bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text mb-2">
                  {sponsoredPrize.amount}
                </p>
                <p className="text-sm text-gray-400">Sponsored by {sponsoredPrize.sponsor}</p>
              </motion.div>
            ))}
          </div>
        </motion.div> */}

        {/* Additional swag information */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-12 max-w-2xl mx-auto"
        >
          <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 backdrop-blur-md p-8 rounded-xl border border-purple-700/30">
            <Sparkles className="w-8 h-8 text-purple-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">Additional Rewards</h3>
            <p className="text-gray-300 text-lg mb-6">
              All participants will receive exclusive hackathon merchandise and certificates!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-purple-900/50 px-4 py-2 rounded-full text-sm text-white">T-Shirts</div>
              <div className="bg-purple-900/50 px-4 py-2 rounded-full text-sm text-white">Stickers</div>
              <div className="bg-purple-900/50 px-4 py-2 rounded-full text-sm text-white">Certificates</div>
              <div className="bg-purple-900/50 px-4 py-2 rounded-full text-sm text-white">Digital Badges</div>
            </div>
          </div>
          
          <a href="#" className="inline-flex items-center text-purple-400 hover:text-purple-300 mt-6 transition-colors">
            More details about prizes <ExternalLink className="ml-1 w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};