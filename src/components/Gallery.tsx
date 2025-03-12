"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { MemoriesCard } from "./MemoriesCard";
import { Memories } from "@/data/Memories";

export const Gallery = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  
    useEffect(() => {
      // Set dimensions once mounted (client-side only)
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
  
      const handleResize = () => {
        setDimensions({
          width: window.innerWidth,
          height: window.innerHeight
        });
      };
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

  const starPositions = Array(20).fill(0).map(() => ({
    x: Math.random() * 100, // Use percentage instead of absolute pixels
    y: Math.random() * 100,
    duration: Math.random() * 5 + 5
  }));

  return (
    <section ref={ref} className="space-gradient py-20 relative overflow-hidden">
      <div className="absolute inset-0">
        {starPositions.map((pos, i) => (
          <motion.div
            key={i}
            className="star"
            initial={{ opacity: 0.1 }}
            animate={{
              opacity: [0.1, 0.5, 0.1],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: pos.duration,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              left: `${pos.x}%`,
              top: `${pos.y}%`
            }}
          />
        ))}
      </div>
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-white text-center mb-16"
        >
          HackSphere 1.0 Memories
        </motion.h2>

        <div className="">
          <MemoriesCard testimonials={Memories} />
        </div>
      </div>
    </section>
  );
};
