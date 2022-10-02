import { useColorMode, Button } from '@chakra-ui/react';
import { FaSun, FaMoon } from 'react-icons/fa';

const LightDarkModeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const isLightMode = colorMode === 'light';

  return (
    <Button onClick={toggleColorMode} leftIcon={isLightMode ? <FaMoon /> : <FaSun />}>
      {isLightMode ? 'Dark' : 'Light'} mode
    </Button>
  );
};

export default LightDarkModeToggle;
