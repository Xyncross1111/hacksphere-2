"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

type Sponsor = {
  name: string;
  logo: string;
};

const DefaultPartners: Sponsor[] = [
  { name: "DEVFOLIO", logo: "/devfolio.png" },
  { name: "ETHINDIA", logo: "/ETHIndia.png" },
  { name: "POLYGON", logo: "/polygon.svg" },
  { name: "CHAINLINK", logo: "/chainlink.png" },
  { name: "SOLANA", logo: "/solana.png" },
];

export const Partners = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  // Star Animation Effect
  const starPositions = Array(20)
    .fill(0)
    .map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: Math.random() * 5 + 5,
    }));

  return (
    <section ref={ref} className="py-20 space-gradient relative overflow-hidden">
      {/* Animated Star Background */}
      <div className="absolute inset-0 pointer-events-none">
        {starPositions.map((pos, i) => (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full opacity-30"
            initial={{ opacity: 0.1 }}
            animate={{
              opacity: [0.1, 0.5, 0.1],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: pos.duration,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              width: "5px",
              height: "5px",
              left: `${pos.x}%`,
              top: `${pos.y}%`,
            }}
          />
        ))}
      </div>

      {/* Heading */}
      <motion.h2
        initial={{ y: 50, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : undefined}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold text-white text-center mb-16"
      >
        Our Partners
      </motion.h2>

      {/* Partners Flex Container */}
      <div className="flex flex-wrap justify-center gap-4 px-6 md:px-12 ">
        {DefaultPartners.map((partner) => (
          <motion.div
            key={partner.name}
            initial={{ y: 50, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : undefined}
            transition={{ duration: 0.8 }}
            className="bg-gray-800 p-8 sm:p-6 rounded-2xl hover:bg-gray-700 transition-colors flex flex-col items-center justify-between shadow-lg max-w-[300px] sm:max-w-[350px] md:max-w-[400px]"
          >
            <Image
              src={partner.logo}
              alt={`${partner.name} LOGO`}
              width={200}
              height={120}
              className=" object-cover"
              
            />
            <h3 className="text-xl font-semibold text-white ">{partner.name}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Partners;
