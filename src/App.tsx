import AboutMe from './components/AboutMe';
import LightDarkModeToggle from './components/controls/LightDarkModeToggle';
import ParticlesBackground from './components/ParticlesBackground';

const App = () => {
  return (
    <>
      <ParticlesBackground />
      <div className="relative z-10 flex flex-col items-center gap-12">
        <LightDarkModeToggle />
        <AboutMe />
      </div>
    </>
  );
};

export default App;
