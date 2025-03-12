import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export const Sponsors = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const sponsors = [
    {
      name: "DEVFOLIO",
      logo: "/devfolio.png",
      tier: "Gold"
    },
    {
      name: "ETHINDIA",
      logo: "/ETHIndia.png",
      tier: "Silver"
    },
    {
      name: "POLYGON",
      logo: "/polygon.svg",
      tier: "Silver"
    }
    // Add more sponsors here
  ];

  return (
    <section ref={ref} className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-white text-center mb-16"
        >
          Our Partners
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-gray-800 p-8 rounded-2xl hover:bg-gray-700 transition-colors flex flex-col items-center"
            >
              <img
                src={sponsor.logo}
                alt={`${sponsor.name} LOGO`}
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