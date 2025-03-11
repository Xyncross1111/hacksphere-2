"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

type Testimonial = {
  message: string;
  src: string;
};

export const MemoriesCard = ({
  testimonials,
}: {
  testimonials: Testimonial[];
}) => {
  const [active, setActive] = useState(0);

  const handleNext = useCallback(() => {
    setActive((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  useEffect(() => {
    const interval = setInterval(handleNext, 2000);
    return () => clearInterval(interval);
  }, [handleNext]);

  const isActive = (index: number) => index === active;

  const OddEven = () => {
    return ;
  }


  const randomRotateY = () => Math.floor(Math.random() * 17 );

  return (
    // set height for all the devices (Hardcode)
    <div className="w-full h-[60vh] flex items-center justify-center px-6"> 
      <div className="w-full max-w-5xl flex flex-row justify-between items-center gap-8">
        {/* Image Section */}
        <div className="relative flex-1 flex items-center justify-center">
          <AnimatePresence>
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.src}
                initial={{ opacity: 0, scale: 0.9, rotate: randomRotateY() }}
                animate={{
                  opacity: isActive(index) ? 1 : 0.7,
                  scale: isActive(index) ? 1 : 0.95,
                  rotate: isActive(index) ? 0 : randomRotateY(),
                  zIndex: isActive(index) ? 999 : testimonials.length + 2 - index,
                  y: isActive(index) ? [0, -10, 0] : 0,
                }}
                exit={{ opacity: 0, scale: 0.9, rotate: randomRotateY() }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="absolute"
              >
                <Image
                  src={testimonial.src}
                  alt="memory"
                  width={700}
                  height={400}
                  className="rounded-md object-cover shadow-[12px_-12px_25px_rgba(192,255,252,0.4), -12px_12px_25px_rgba(192,132,252,0.4), 8px_8px_15px_rgba(192,132,252,0.4)]"
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
  
        {/* Text Section */}
        <motion.div
          key={active}
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -20, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="flex-1 text-lg text-gray-600 dark:text-neutral-300 text-center md:text-left"
        >
          {testimonials[active].message}
        </motion.div>
      </div>
    </div>
  );
  
};
