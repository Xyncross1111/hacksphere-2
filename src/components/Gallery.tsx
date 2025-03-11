import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { MemoriesCard } from "./MemoriesCard";
import { Memories } from "@/data/Memories";

export const Gallery = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const images = [
    "https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1517976384346-3136801d605d?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1581822261290-991b38693d1b?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1518364538800-6bae3c2ea0f2?auto=format&fit=crop&q=80",
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
          HackSphere 1.0 Memories
        </motion.h2>

        <MemoriesCard testimonials={Memories} />
      </div>
    </section>
  );
};
