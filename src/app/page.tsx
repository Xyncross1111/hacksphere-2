"use client";

import { useEffect } from 'react';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Gallery } from '../components/Gallery';
import { Timeline } from '../components/Timeline';
import { Sponsors } from '../components/Sponsors';
import { Domains } from '../components/Domains';
import { PrizePool } from '../components/PrizePool';
import { FAQ } from '../components/FAQ';
import { Footer } from '../components/Footer';

function App() {
  useEffect(() => {
    // Add a class to reduce motion for users who prefer reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.documentElement.classList.add('motion-reduce');
    }
  }, []);

  return (
    <div className="">
      <Hero />
      <About />
      <Gallery />
      <Timeline />
      <Sponsors />
      <Domains />
      {/* <ProblemStatements /> */}
      <PrizePool />
      <FAQ />
      {/* <Contact /> */}
      <Footer />

    </div>
  );
}

export default App;