import React from 'react';

interface TimelineItemProps {
  number: string | number;
  step: string;
  heading: string;
  image: string;
  description: React.ReactNode;
}

const Timelineitem: React.FC<TimelineItemProps> = (props) => {
  return (
    <div className={`timeline-item relative grid gap-0 w-full pt-[70px] top-28 last:pb-0 
      grid-cols-[48px_1fr] max-sm:px-5 max-sm:pr-2.5
      sm:grid-cols-[64px_1fr]
      md:grid-cols-[minmax(0,1fr)_120px_minmax(0,1fr)] md:py-[40px] md:w-auto
      xl:grid-cols-[1fr_180px_1fr] xl:py-[50px]
      ti-${props.number}`}
    >
      {/* Left section - Step text and number */}
      <div className="timeline-left relative
        col-start-2 col-end-3 row-start-1 row-end-2 text-left 
        md:col-auto md:row-auto md:text-right justify-end items-stretch"
      >
        <div className={`sticky-text-left relative
          md:sticky md:top-[47.5vh]
          timeline-trigger-${props.number}`}
        >
          {/* Step text - hidden on mobile */}
          <div className="timeline-step-number-text relative text-white uppercase font-['Oswald'] font-medium leading-[1.2] z-2
            hidden
            md:block md:mb-0 md:text-[2.5em] md:text-right md:sticky md:top-[47.5vh]
            xl:text-[4em]"
          >
            {props.step}
          </div>

          {/* Large gradient background number */}
          <div className="timeline-step-number absolute block z-[1] font-['Oswald'] font-medium
            bg-gradient-to-br from-[#f9b3ff] via-[#f9b3ff] to-[#9523ff] bg-clip-text text-transparent
            max-sm:top-[-15%] max-sm:left-[-1%] max-sm:text-[6em] max-sm:leading-[1]
            sm:top-[-489%] sm:left-[-2%]
            md:-top-full md:-bottom-full md:left-[15%] md:text-[7em] md:leading-[150px]
            lg:text-[10em] lg:left-[20%]
            xl:text-[12em] xl:left-1/4"
          >
            {props.number}
          </div>

          {/* Mobile heading - shown only on mobile */}
          <div className="timeline-mobile-heading text-left text-white font-['Orbitron'] font-semibold leading-[1.3]
            ml-16 mt-1 mb-5
            max-[425px]:text-[1.5em]
            max-sm:text-[1.8em]
            md:hidden"
          >
            <div>{props.heading}</div>
          </div>
        </div>
      </div>

      {/* Center section - Timeline arrow */}
      <div className="timeline-center flex justify-start
        col-start-1 col-end-2 row-start-1 row-end-3 max-sm:-ml-[11px]
        md:col-auto md:row-auto md:justify-center"
      >
        <div className="timeline-arrow sticky top-[52vh] bg-black rounded-full
          w-[35px] min-w-[35px] max-w-[35px] h-[35px] min-h-[35px] max-h-[35px]
          max-[425px]:min-w-[30px] max-[425px]:max-w-[30px]
          shadow-[0_0_18px_8px_rgba(0,0,0,0.66)]"
        >
          <img
            src="/assets/AN-ICON.svg"
            alt=""
            className="max-w-full align-middle inline-block -mt-[10px]
              max-[425px]:ml-[2px] max-sm:ml-0
              sm:ml-2
              md:-ml-[1px]"
          />
        </div>
      </div>

      {/* Right section - Content */}
      <div className="timeline-right pb-3">
        {/* Heading - hidden on mobile, shown on larger screens */}
        <div className="timeline-heading text-left mb-3 text-white font-semibold leading-[1.3]
          hidden
          md:block md:text-[2em]
          xl:text-[2.5em]"
        >
          <h2>{props.heading}</h2>
        </div>

        {/* Image */}
        <div className="timeline-image bg-none rounded-[12px] overflow-visible">
          <div className="timeline-image-div h-auto ml-0 mr-0 overflow-hidden shadow-none border-none
            max-sm:w-[120%]
            sm:w-4/5
            md:w-[90%]
            xl:w-4/5"
          >
            <img src={props.image} alt="" className="pl-0 pr-5 max-w-full align-middle inline-block" />
          </div>
        </div>

        {/* Description */}
        <div className="timeline-description font-['Space Grotesk'] text-justify w-full mt-4 leading-relaxed text-[#afafaf]
          max-sm:mb-3 max-sm:text-[0.9rem]
          sm:mb-6
          md:mb-0 md:text-base
          xl:text-lg"
        >
          <div>{props.description}</div>
        </div>
      </div>
    </div>
  );
}

export default Timelineitem;