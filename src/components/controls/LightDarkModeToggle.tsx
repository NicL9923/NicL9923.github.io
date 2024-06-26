import { useColorMode, Button } from '@chakra-ui/react';
import { FaSun, FaMoon } from 'react-icons/fa';

const LightDarkModeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const isLightMode = colorMode === 'light';

  return (
    <Button onClick={toggleColorMode} leftIcon={isLightMode ? <FaMoon /> : <FaSun />} mt={2}>
      Turn the lights {isLightMode ? 'off' : 'on'}!
    </Button>
  );
};

export default LightDarkModeToggle;
