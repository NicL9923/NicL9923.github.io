import { Tabs, TabList, Tab, TabPanels, TabPanel, Container } from '@chakra-ui/react';

import AboutMe from './components/AboutMe';
import LightDarkModeToggle from './components/controls/LightDarkModeToggle';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';

const App = () => {
  return (
    <div>
      <LightDarkModeToggle />

      <AboutMe />

      <Container maxW='container.lg' centerContent mt='16px'>
        <Tabs>
          <TabList>
            <Tab>Education</Tab>
            <Tab>Experience</Tab>
            <Tab>Projects</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <Education />
            </TabPanel>

            <TabPanel>
              <Experience />
            </TabPanel>

            <TabPanel>
              <Projects />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Container>
    </div>
  );
};

export default App;
