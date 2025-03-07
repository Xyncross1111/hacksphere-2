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
    <div className={`timeline-item grid gap-0 grid-cols-[48px_1fr] max-sm:pl-5 max-sm:pr-2.5 sm:grid-cols-[64px_1fr] md:grid-cols-[minmax(0,1fr)_120px_minmax(0,1fr)] md:py-[80px] xl:grid-cols-[1fr_180px_1fr] xl:py-[100px] w-full md:w-auto pt-[140px] relative top-28 ti-${props.number} last:pb-0`}>
        <div className="timeline-left text-left md:text-right justify-end items-stretch relative col-start-2 col-end-3 row-start-1 row-end-2 md:col-auto md:row-auto">
            <div className={`sticky-text-left relative md:sticky top-0 md:top-[47.5vh] timeline-trigger-${props.number}`}>
                <div className="timeline-step-number-text text-white uppercase font-['Oswald'] mb-6 md:mb-0 max-sm:text-[1.8em] max-sm:leading-[1.4] sm:text-[2em] md:text-[2.5em] xl:text-[4em] font-medium leading-[1.2] relative md:sticky top-0 md:top-[47.5vh] text-left md:text-right z-2">{props.step}</div>
                <div className="timeline-step-number absolute block max-sm:top-[-407%] max-sm:left-[-1%] sm:top-[-489%] sm:left-[-2%] md:-top-full md:-bottom-full md:left-[15%] md:text-[7em] md:leading-[150px] lg:text-[10em] lg:left-[20%] xl:text-[12em] xl:left-1/4 z-[1] opacity-100 bg-gradient-to-br from-[#f9b3ff] via-[#f9b3ff] to-[#9523ff] bg-clip-text text-transparent font-['Oswald'] font-medium">{props.number}</div>
            </div>
        </div>

        <div className="timeline-center flex col-start-1 col-end-2 row-start-1 row-end-3 md:col-auto md:row-auto justify-start md:justify-center max-sm:-ml-[11px]">
            <div className="timeline-arrow opacity-100 bg-black rounded-full w-[35px] min-w-[35px] max-w-[35px] max-[425px]:min-w-[30px] max-[425px]:max-w-[30px] h-[35px] min-h-[35px] max-h-[35px] sticky top-[52vh] shadow-[0_0_18px_8px_rgba(0,0,0,0.66)]">
                <img src="/assets/AN-ICON.svg" alt="" className="-mt-[10px] max-[425px]:ml-[2px] max-sm:ml-0 sm:ml-2 md:-ml-[1px] max-w-full align-middle inline-block" />
            </div>
        </div>

        <div className="timeline-right pb-5">
            <div className="timeline-heading text-left mb-5 font-semibold text-white font-['Nulshock'] max-[425px]:text-[1.5em] max-sm:text-[1.8em] sm:text-[2em] md:text-[2em] xl:text-[2.5em] leading-[1.3]">
                <div>{props.heading}</div>
            </div>
            <div className="timeline-image bg-none bg-[0_0] rounded-[12px] overflow-visible">
                <div className="timeline-image-div shadow-none border-none max-sm:w-[120%] sm:w-4/5 md:w-[90%] xl:w-4/5 h-auto ml-0 mr-0 overflow-hidden">
                    <img src={props.image} alt="" className="pl-0 pr-5 max-w-full align-middle inline-block" />
                </div>
            </div>
            <div className="timeline-description text-left w-full mt-5 max-sm:mb-5 max-sm:text-[0.9rem] sm:mb-12 md:mb-0 md:text-base xl:text-lg leading-relaxed text-[#afafaf]">
                <div>
                    {props.description}
                </div>
            </div>
        </div>
    </div>
)
}

export default Timelineitem;
