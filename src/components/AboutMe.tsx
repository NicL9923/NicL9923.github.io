import {
  Image,
  Divider,
  Container,
  HStack,
  VStack,
  Heading,
  Text,
  IconButton,
  Link,
  Tag,
  TagLeftIcon,
  TagLabel,
} from '@chakra-ui/react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiReact, SiTypescript, SiCsharp } from 'react-icons/si';

const AboutMe = () => {
  return (
    <Container maxW='container.md' centerContent>
      <HStack>
        <Image borderRadius='full' boxSize='230px' src='/Nic&Kim.jpg' alt='Nic & Kim' />

        <Divider orientation='vertical' height='175px' />

        <VStack>
          <Heading>Nicolas Layne</Heading>
          <Heading size='md'>Software Engineer</Heading>
          <HStack>
            <Link href='https://github.com/NicL9923' isExternal>
              <IconButton icon={<FaGithub />} aria-label='Nicolas Github' />
            </Link>
            <Link href='https://linkedin.com/in/nicolas-layne/' isExternal>
              <IconButton colorScheme='linkedin' icon={<FaLinkedin />} aria-label='Nicolas LinkedIn' />
            </Link>
          </HStack>
        </VStack>
      </HStack>

      <div style={{ marginTop: 4 }}>
        <Text>
          Hey there, nice to meet ya - I&apos;m the friendly neighborhood front-end-specializing software developer! I
          love building and learning about things with a team of equally curious folks - it&apos;s really that simple!
        </Text>
      </div>

      <div style={{ marginTop: 10 }}>
        <Heading size='md'>Primary technical skills</Heading>

        <HStack>
          <Tag size='lg' colorScheme='cyan'>
            <TagLeftIcon as={SiReact} />
            <TagLabel>React</TagLabel>
          </Tag>
          <Tag size='lg' colorScheme='blue'>
            <TagLeftIcon as={SiTypescript} />
            <TagLabel>TypeScript</TagLabel>
          </Tag>
          <Tag size='lg' colorScheme='purple'>
            <TagLeftIcon as={SiCsharp} />
            <TagLabel>Some C#</TagLabel>
          </Tag>
        </HStack>
      </div>
    </Container>
  );
};

export default AboutMe;
