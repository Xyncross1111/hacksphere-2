import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export const FAQ = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [starPositions, setStarPositions] = useState<Array<{x: number, y: number}>>([]);

  // Generate star positions on client-side only
  useEffect(() => {
    const generateStarPositions = () => {
      const width = typeof window !== 'undefined' ? window.innerWidth : 1000;
      const height = typeof window !== 'undefined' ? window.innerHeight : 800;
      
      return Array(15).fill(null).map(() => ({
        x: Math.random() * width,
        y: Math.random() * height
      }));
    };
    
    setStarPositions(generateStarPositions());
  }, []);

  const faqs = [
    {
      question: "Who can participate?",
      answer: "HackSphere 2.0 invites all students who are passionate about coding, creativity, and problem-solving. Whether you're a beginner or an experienced innovator, join us to collaborate, build, and push the boundaries of technology! Important Note: Participation in this hackathon is strictly limited to students only."
    },
    {
      question: "What's the team size?",
      answer: "Teams can have 2-4 members. Solo participation is not allowed as we believe in collaborative innovation, just like space missions require teamwork."
    },
    {
      question: "Is it free to participate?",
      answer: "Yes, participation is completely free! We believe in making innovation accessible to everyone, allowing all brilliant minds to reach for the stars."
    },
    {
      question: "Do I need to have any specific skills?",
      answer: "Basic programming knowledge is required. Teams should have a mix of skills including development, design, and problem-solving abilities - much like a well-balanced space crew."
    },
    {
      question: "Is this an online or offline event?",
      answer: "The Ideation round will be conducted online. HackSphere 2.0 will be conducted in complete offline/in-person mode."
    }
  ];

  return (
    <section ref={ref} className="py-20 space-gradient relative overflow-hidden">
      {/* Animated stars - reduced count */}
      <div className="absolute inset-0">
        {starPositions.map((position, i) => (
          <motion.div
            key={i}
            className="star"
            initial={{ opacity: 0.1, x: position.x, y: position.y }}
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
        <div className="nebula bottom-1/4 left-1/4 w-96 h-96" 
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
          Cosmic Questions
        </motion.h2>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="mb-4"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full cosmic-card p-6 text-left transition-all duration-300 hover:transform hover:-translate-y-1"
              >
                <div className="cosmic-glow"></div>
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                  <div>
                    {openIndex === index ? (
                      <ChevronUp className="w-5 h-5 text-purple-500 cursor-pointer" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-purple-500 cursor-pointer" />
                    )}
                  </div>
                </div>
                {openIndex === index && (
                  <div className="mt-4 text-gray-300">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};