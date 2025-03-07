import React, { useState, useEffect } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Timelineitem from './TimelineItem'

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

// Define interface for timeline items
interface TimelineItemData {
  step: string;
  number: number;
  heading: string;
  image: string;
  description: string;
}

export const Timeline: React.FC = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  // Initialize window width after mount
  useEffect(() => {
    // Set initial width
    setWindowWidth(window.innerWidth);

    // Add resize listener
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Clean up
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const timelineData: TimelineItemData[] = [
    {
      step: "STEP ONE",
      number: 1,
      heading: "Meeting",
      image: "/assets/meeting.webp",
      description: "We start by gathering all relevant details about your business, target audience, color themes, and your expectations. This thorough understanding ensures that we align our vision with your goals."
    },
    {
      step: "STEP TWO",
      number: 2,
      heading: "Brainstorming",
      image: "/assets/brainstorming.webp",
      description: "Based on the insights from our meeting, we engage in comprehensive brainstorming sessions. We consider fonts, design aesthetics, website structure, and user psychology to create a solid foundation for your website."
    },
    {
      step: "STEP THREE",
      number: 3,
      heading: "Design & Prototyping",
      image: "/assets/designing.webp",
      description: "In the design phase, we create modern, professional, and relevant designs. Our focus is on delivering a clean, aesthetically pleasing interface without unnecessary elements, ensuring a seamless user experience."
    },
    {
      step: "STEP FOUR",
      number: 4,
      heading: "Developing",
      image: "/assets/developing.webp",
      description: "Finally, we bring the designs to life. Our development team writes clean, efficient code to build a responsive, functional, and bug-free website that meets all your requirements and exceeds your expectations."
    }
  ];

  useGSAP(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".process-timeline",
        start: "top 80%",
        end: "top 75%",
        scrub: 1,
        fastScrollEnd: true,
        preventOverlaps: true,
      }
    });

    // Only run GSAP animations once the window width is properly initialized
    if (windowWidth && windowWidth >= 1024) {
      timeline.from(".timeline-progress-bar", {
        opacity: 0,
        height: "0%",
      });

      timelineData.forEach((item) => {
        gsap.from(`.ti-${item.number}`, {
          opacity: 0.4,
          duration: 0.1,
          scrollTrigger: {
            trigger: `.timeline-trigger-${item.number}`,
            start: "top 80%",
            end: "bottom 60%",
            scrub: 1,
            fastScrollEnd: true,
            preventOverlaps: true,
          }
        });
      });
    }
  }, [windowWidth]); // Re-run when windowWidth changes

  return (
    <section className="process-section text-center" id="process">
      <div className="processsectionheading py-[10%] pb-[10vh] md:py-[10%] md:pb-[10vh] lg:py-[5%] bg-black">
        <h2 className="inline font-[Nulshock] text-4xl md:text-6xl lg:text-8xl font-bold leading-tight text-center"
          style={{
            WebkitTextStroke: windowWidth <= 479 ? "0.7px #6e6e6e" : "1px #6e6e6e",
            WebkitTextFillColor: "transparent",
            textUnderlinePosition: "from-font",
            textDecorationSkipInk: "none"
          }}>
          OUR PROCESS
        </h2>
      </div>
      <div className="process-timeline flex flex-col justify-center items-center max-w-[80vw] md:max-w-[90vw] xl:max-w-[80vw] mx-auto relative mb-20">
        {/* Main timeline bar (background) */}
        <div className="timeline-progress absolute w-[3px] h-full left-[25px] md:left-auto" style={{ backgroundColor: "#33123a", position: "absolute", zIndex: 1 }}>
          {/* Animated progress bar (foreground) */}
          <div className="timeline-progress-bar w-[3px] h-[52vh] fixed top-0 bg-gradient-to-b from-[#ff0000] via-[#f9b3ff] to-[#6400c2]" style={{ position: "fixed", zIndex: 2 }}></div>
        </div>

        {/* Timeline content with higher z-index */}
        <div style={{ position: "relative", zIndex: 5 }}>
          {timelineData.map((item, index) => (
            <Timelineitem
              key={index}
              step={item.step}
              number={item.number}
              heading={item.heading}
              image={item.image}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}