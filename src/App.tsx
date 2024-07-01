import { Stack } from '@chakra-ui/react';

import AboutMe from './components/AboutMe';
import LightDarkModeToggle from './components/controls/LightDarkModeToggle';

const App = () => {
  return (
    <Stack direction='column' spacing={12} align='center'>
      <LightDarkModeToggle />

      <AboutMe />
    </Stack>
  );
};

export default App;
