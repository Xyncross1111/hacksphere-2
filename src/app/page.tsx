"use client";

import { useEffect } from 'react';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Memories } from '../components/Memories';
import { Timeline } from '../components/Timeline';
import { Domains } from '../components/Domains';
import { PrizePool } from '../components/PrizePool';
import { FAQ } from '../components/FAQ';
import { DefaultPartners } from '@/data/Partners';
import { Sponsors } from '../components/Sponsors';

function App() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.documentElement.classList.add('motion-reduce');
    }
  }, []);

  return (
    <div suppressHydrationWarning>
      <Hero />
      <About />
      <Memories />
      <Timeline />
      <Sponsors isPartner sponsors={DefaultPartners}/>
      <Domains />
      <PrizePool />
      <FAQ />

    </div>
  );
}

export default App;