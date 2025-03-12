"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

interface Sponsor {
  name: string;
  logo: string;
  tier: string;
}

export const Sponsors: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const sponsors: Sponsor[] = [
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
    // Add more sponsors here
  ];

  return (
    <section ref={ref} className="py-20 bg-gray-900">
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
