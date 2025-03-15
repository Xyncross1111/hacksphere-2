"use client";
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Memories } from '../components/Memories';
import { Timeline } from '../components/Timeline';
import { Domains } from '../components/Domains';
import { PrizePool } from '../components/PrizePool';
import { FAQ } from '../components/FAQ';
import { Partners } from '../components/Partners';

function App() {

  return (
    <div suppressHydrationWarning>
      <Hero />
      <About />
      <Memories />
      <Timeline />
      <Partners />
      <Domains />
      <PrizePool />
      <FAQ />

    </div>
  );
}

export default App;