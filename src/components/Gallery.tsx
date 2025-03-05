import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative overflow-hidden rounded-lg aspect-square"
            >
              <img
                src={image}
                alt={`HackSphere 1.0 moment ${index + 1}`}
                className="object-cover w-full h-full transform hover:scale-110 transition-transform duration-500"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};