import { Stack } from '@chakra-ui/react'

import AboutMe from './components/AboutMe'
import LightDarkModeToggle from './components/controls/LightDarkModeToggle'
import ParticlesBackground from './components/ParticlesBackground'

const App = () => {
  return (
    <>
      <ParticlesBackground />
      <Stack
        direction="column"
        spacing={12}
        align="center"
        position="relative"
        zIndex={1}
      >
        <LightDarkModeToggle />

        <AboutMe />
      </Stack>
    </>
  )
}

export default App
