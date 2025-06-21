import {
  Card,
  CardBody,
  HStack,
  Heading,
  VStack,
  Badge,
  Text,
  Box,
  SimpleGrid,
  Stack,
} from '@chakra-ui/react'
import { FaMicrosoft } from 'react-icons/fa'
import { SiMicrosoftazure } from 'react-icons/si'

const CurrentRole = () => {
  const currentProjects = [
    {
      name: 'Azure SRE Agent',
      description: 'AI-powered site reliability engineering',
    },
    {
      name: 'Azure Container Apps',
      description: 'Serverless container platform',
    },
    {
      name: 'Azure App Service (Networking)',
      description: 'Cloud hosting networking features',
    },
  ]

  return (
    <Card>
      <CardBody>
        <Stack direction="column" spacing={4}>
          <HStack align="center" justify="center">
            <Heading size="lg">Current role</Heading>
          </HStack>

          <VStack spacing={2}>
            <HStack align="center" justify="center">
              <FaMicrosoft size={24} color="#00BCF2" />
              <Heading size="md">Microsoft</Heading>
            </HStack>
            <HStack>
              <SiMicrosoftazure color="#0078D4" />
              <Text fontWeight="semibold">Azure App Service UX</Text>
            </HStack>
            <Badge colorScheme="blue" fontSize="md" px={3} py={1}>
              Software Engineer II
            </Badge>
          </VStack>

          <Box marginTop={4}>
            <Heading size="md" mb={3} textAlign="center">
              Major projects
            </Heading>
            <SimpleGrid columns={[1, 1, 3]} spacing={4}>
              {currentProjects.map((project, index) => (
                <Card key={index} variant="outline" size="sm">
                  <CardBody textAlign="center">
                    <Text fontWeight="bold" mb={2}>
                      {project.name}
                    </Text>
                    <Text fontSize="sm" color="gray.600">
                      {project.description}
                    </Text>
                  </CardBody>
                </Card>
              ))}
            </SimpleGrid>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  )
}

export default CurrentRole
