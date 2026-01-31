import {
  Card,
  CardBody,
  Container,
  HStack,
  Heading,
  IconButton,
  Image,
  Link,
  ScaleFade,
  Stack,
  Tag,
  TagLabel,
  TagLeftIcon,
  Text,
  VStack,
} from '@chakra-ui/react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiSharp, SiReact, SiTypescript } from 'react-icons/si'
import CurrentRole from './CurrentRole'

const AboutMe = () => {
  return (
    <Container maxW="container.md" centerContent>
      <ScaleFade
        initialScale={0.5}
        transition={{ enter: { duration: 0.5 } }}
        in
      >
        <Stack direction="column" spacing={6}>
          <Card>
            <CardBody>
              <Stack direction="column" spacing={4}>
                <Stack
                  direction={['column', 'row']}
                  align="center"
                  justifyContent="space-evenly"
                >
                  <Image
                    borderRadius="full"
                    boxSize="230px"
                    src="./Nic&Kim.jpg"
                    alt="Nic & Kim"
                  />

                  <VStack>
                    <Heading size="xl">Nicolas Layne</Heading>
                    <Heading size="md">Software Engineer</Heading>

                    <HStack mt={2}>
                      <Link href="https://github.com/NicL9923" isExternal>
                        <IconButton
                          icon={<FaGithub />}
                          aria-label="Nicolas' Github"
                        />
                      </Link>
                      <Link
                        href="https://linkedin.com/in/nicolas-layne/"
                        isExternal
                      >
                        <IconButton
                          colorScheme="linkedin"
                          icon={<FaLinkedin />}
                          aria-label="Nicolas' LinkedIn"
                        />
                      </Link>
                    </HStack>
                  </VStack>
                </Stack>

                <Text textAlign="center">
                  Hey there, nice to meet ya - I&apos;m your friendly
                  neighborhood front-end-specializing software engineer 🤠! I
                  love building and learning about things with a team of equally
                  curious and passionate folks - it&apos;s really that simple!
                </Text>

                <HStack justifyContent="center">
                  <Tag size="lg" colorScheme="cyan">
                    <TagLeftIcon as={SiReact} />
                    <TagLabel>React</TagLabel>
                  </Tag>
                  <Tag size="lg" colorScheme="blue">
                    <TagLeftIcon as={SiTypescript} />
                    <TagLabel>TypeScript</TagLabel>
                  </Tag>
                  <Tag size="lg" colorScheme="blue">
                    <TagLeftIcon as={SiSharp} />
                    <TagLabel>C#</TagLabel>
                  </Tag>
                </HStack>
              </Stack>
            </CardBody>
          </Card>

          <CurrentRole />
        </Stack>
      </ScaleFade>
    </Container>
  )
}

export default AboutMe
