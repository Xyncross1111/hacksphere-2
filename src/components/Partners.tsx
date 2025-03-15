"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const partners = [
  { name: "BCPCE", logo: "BCPCE.webp" },
  { name: "Decode", logo: "decode.webp" },
  { name: "GDGC GCOEN", logo: "GDGC_GCOEN.svg" },
  { name: "GFG GHRCEM", logo: "GHRCEMN.webp" },
  { name: "Jarvis", logo: "Jarvis.webp" },
  { name: "The Learners Den", logo: "LDLogo.svg" },
  { name: "ML Nagpur", logo: "ML_ngp.webp" },
  { name: "GDG Nagpur", logo: "GDG_ngp.webp" },
  { name: "GDGC Nagpur", logo: "GDGC_ngp.webp" },
  { name: "nexmeet", logo: "nexmeet.webp" },
  { name: "RiseIn SBJIT Chapter", logo: "RiseIn.webp" },
  { name: "Coding Club, KDKCE", logo: "coding_club.webp" },
];

export const Partners = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} id="partners" className="py-20 space-gradient relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        {[...Array(25)].map((_, i) => (
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
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : undefined}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-white text-center mb-16"
        >
          Mission Partners
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {partners.map((partner) => (
            <motion.div
              key={partner.name}
              initial={{ y: 50, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : undefined}
              transition={{ duration: 0.8 }}
              className="bg-gray-800 p-8 rounded-2xl hover:bg-gray-700 transition-colors flex flex-col items-center"
            >
              <Image
                src={`/assets/images/partners/${partner.logo}`}
                alt={`${partner.name} LOGO`}
                width={100}
                height={100}
                className="h-24 w-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-white">{partner.name}</h3>
              <p className="text-purple-400">Partner</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
