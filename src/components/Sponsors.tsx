"use client";

import { useEffect, useState, FC } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const sponsors = [
  {
    name: "DEVFOLIO",
    logo: "/devfolio.png",
    tier: "Gold",
  },
  {
    name: "ETHINDIA",
    logo: "/ETHIndia.png",
    tier: "Silver",
  },
  {
    name: "POLYGON",
    logo: "/polygon.svg",
    tier: "Silver",
  },
];

export const Sponsors = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {

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

    <section ref={ref} className="py-20 space-gradient relative overflow-hidden">
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
          animate={inView ? { y: 0, opacity: 1 } : undefined}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-white text-center mb-16"
        >
          Our Partners
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sponsors.map((sponsor) => (
            <motion.div
              key={sponsor.name}
              initial={{ y: 50, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : undefined}
              transition={{ duration: 0.8 }}
              className="bg-gray-800 p-8 rounded-2xl hover:bg-gray-700 transition-colors flex flex-col items-center"
            >
              <Image
                src={sponsor.logo}
                alt={`${sponsor.name} LOGO`}
                width={100}
                height={100}
                className="h-24 w-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-white">{sponsor.name}</h3>
              <p className="text-purple-400">{sponsor.tier} Sponsor</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
