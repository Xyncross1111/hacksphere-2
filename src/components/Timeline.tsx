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
  date: string;
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
      step: "STEP",
      number: 1,
      heading: "Registration Begins",
      image: "/assets/registration start.webp",
      description: "The innovation journey begins! Registration and PPT Submission for HackSphere 2.0 will start on 15th March , 12AM. Assemble your teams of 2-4 members, prepare your PPT showcasing your innovative ideas, brainstorm groundbreaking solutions, and get ready to tackle real-world challenges. Secure your spot by registering early and receive timely updates. Don't forget to review the PPT Submission rules and guidelines.",
      date: "15th March"
    },
    {
      step: "STEP",
      number: 2,
      heading: "Registration Ends",
      image: "/assets/registration close.webp",
      description: "Time’s Up! The registration and PPT Submission for HackSphere 2.0 will be closed on 19th March, 11:59 PM . Ensure your team is registered, all necessary information is submitted, and your PPT is uploaded before the deadline. Don't miss out on this chance to learn, build, and network with fellow developers, as any unfinished registrations will not be considered.",
      date: "19th March - 11:59 PM"
    },
    {
      step: "STEP",
      number: 3,
      heading: "Shortlisted Team Announcement",
      image: "/assets/announcement.webp",
      description: "After a thorough evaluation of each PPT submitted by the teams and ensuring a fair and comprehensive review of all submissions , The shortlisted teams will be announced on 21st March. For those who didn’t make it this time, don’t be disheartened—every experience is a step toward success. Keep building, keep learning, and we look forward to seeing you in the next HackSphere!",
      date: "21st March"
    },
    {
      step: "STEP",
      number: 4,
      heading: "Day of Hackathon",
      image: "/assets/run build.webp",
      description: "Congratulations to all the teams who have qualified for Round 1! Your hard work and innovation truly stood out . Welcome to HackSphere 2.0, a day filled with intense coding, collaboration, and innovation. Please ensure you report on time and follow the schedule for the day. Reporting will begin at 8:15 AM, followed by the Inauguration at 8:45 AM, and the Build Run will officially start at 9:00 AM. We look forward to seeing your creativity and innovation in action. Best of luck!",
      date: "22nd March - 8:00 AM"
    },
    {
      step: "STEP",
      number: 5,
      heading: "Final Project Submission",
      image: "/assets/submission.webp",
      description: "At 5:00 PM sharp, all development work must stop. Each team will then have 5 minutes to present their solution to the evaluation panel.Once all teams have presented, the judges will carefully evaluate the projects, and the results will be declared on the same day.Best wishes to all participants, we can't wait to see your hard work and creativity shine!",
      date: "22nd March - 5:00 PM"
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
            textDecorationSkipInk: "none",
            textShadow: "-3px -1px 3px rgba(255, 255, 255, 0.8)", // Adjusted shadow
          }}>
          SCHEDULE
        </h2>
      </div>
      <div className="process-timeline flex flex-col justify-center items-center max-w-[80vw] md:max-w-[90vw] xl:max-w-[80vw] mx-auto relative mb-40">
        {/* Main timeline bar (background) */}
        <div className="timeline-progress absolute z-[-1] w-[3px] h-full left-[25px] md:left-auto bg-[#33123a]">
          {/* Animated progress bar (foreground) - modified to stop before reaching bottom */}
          <div className="timeline-progress-bar z-[-2] w-[3px] h-[52vh] fixed top-0 bg-gradient-to-b from-[#ff0000] via-[#f9b3ff] to-[#6400c2]"></div>
        </div>

        {/* Timeline content with higher z-index */}
        <div style={{ position: "relative", zIndex: 5 }} className="w-full">
          {timelineData.map((item, index) => (
            <Timelineitem
              key={index}
              step={item.step}
              number={item.number}
              heading={item.heading}
              image={item.image}
              description={item.description}
              date={item.date}
            />
          ))}
        </div>
      </div>
    </section>
  )
}