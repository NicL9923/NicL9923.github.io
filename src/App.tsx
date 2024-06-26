import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Container,
  Stack,
} from '@chakra-ui/react';

import AboutMe from './components/AboutMe';
import LightDarkModeToggle from './components/controls/LightDarkModeToggle';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';

const App = () => {
  return (
    <Stack direction='column' spacing={12} align='center'>
      <LightDarkModeToggle />
      <div>
        Yeah yeah, I know - I&apos;m working on it, but don&apos;t worry, the stuff I&apos;m getting paid to build
        full-time looks a lot better!
      </div>

      <AboutMe />

      <Container maxW='container.lg' centerContent mt='16px'>
        <Accordion defaultIndex={[0]} allowMultiple>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as='span' flex='1' textAlign='left'>
                  Experience
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Experience />
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as='span' flex='1' textAlign='left'>
                  Education
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Education />
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as='span' flex='1' textAlign='left'>
                  Projects
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Projects />
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Container>
    </Stack>
  );
};

export default App;
