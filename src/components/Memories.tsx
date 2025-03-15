"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { MemoriesCard } from "./MemoriesCard";

const memories = [
  {
    message: "HackSphere 1.0",
    name: "GDG",
    src: "/assets/images/memories/img1.webp",
  },
  {
    message: "HackSphere 1.0",
    name: "ACM",
    src: "/assets/images/memories/img2.webp",
  },
  {
    message: "HackSphere 1.0",
    name: "GFG",
    src: "/assets/images/memories/img3.webp",
  },
  {
    message: "HackSphere 1.0",
    name: "BRC",
    src: "/assets/images/memories/img4.webp",
  },
  {
    message: "HackSphere 1.0",
    name: "BRC",
    src: "/assets/images/memories/img5.webp",
  },
];

export const Memories = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const starPositions = Array(20).fill(0).map(() => ({
    x: Math.random() * 100, // Use percentage instead of absolute pixels
    y: Math.random() * 100,
    duration: Math.random() * 5 + 5
  }));

  return (
    <section ref={ref} id="memories" className="space-gradient py-6 md:py-20 relative overflow-hidden">
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
          className="text-4xl md:text-5xl font-bold text-white text-center mb-16 "
        >
          HackSphere 1.0 Memories
        </motion.h2>

        <div className="">
          <MemoriesCard testimonials={memories} />
        </div>
      </div>
    </section>
  );
};
