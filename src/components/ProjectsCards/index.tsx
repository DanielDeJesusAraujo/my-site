import { Button, CardBody, CardFooter, Heading, Image, Stack, Text, Card } from "@chakra-ui/react";
import { ChakraProvider } from '@chakra-ui/react'
import IProjects from "../../interfaces/IProjects"


function ProjectsCards({ project }: { project: IProjects }) {
  const { title, description, image } = project
  return (
    <ChakraProvider>
      <Card
        maxW={{ base: '100%', sm: '40rem' }}
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='outline'
      >
        <Image
          objectFit='cover'
          maxW={{ base: '100%', sm: '200px' }}
          src={image}
          alt={title}
        />

        <Stack>
          <CardBody>
            <Heading size='md'>{title}</Heading>

            <Text py='2'>
              {description}
            </Text>
          </CardBody>

          <CardFooter>
            <Button variant='solid' colorScheme='blue'>
              View
            </Button>
          </CardFooter>
        </Stack>
      </Card>
    </ChakraProvider>
  );
}

export default ProjectsCards