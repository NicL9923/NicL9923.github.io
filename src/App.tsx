import { useState } from 'react';
import AboutMe from './components/AboutMe';
import BootSequence from './components/BootSequence';
import LightDarkModeToggle from './components/controls/LightDarkModeToggle';
import ParticlesBackground from './components/ParticlesBackground';

const App = () => {
  const [isBooting, setIsBooting] = useState(true);

  return (
    <>
      {isBooting && <BootSequence onComplete={() => setIsBooting(false)} />}

      <ParticlesBackground />
      <div
        className={`relative z-10 flex flex-col items-center gap-12 transition-opacity duration-500 ${
          isBooting ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <LightDarkModeToggle />
        <AboutMe />
      </div>
    </>
  );
};

export default App;
