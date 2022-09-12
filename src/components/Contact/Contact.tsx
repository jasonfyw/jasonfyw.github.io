import { FC } from 'react';
import {
    Container,
    VStack,
    Heading,
    Link,
    Flex,
    Badge,
    Text,
    Spacer,
    Box,
    useColorModeValue
} from '@chakra-ui/react';
import { Element } from 'react-scroll';

const Contact: FC = () => {
    return (
        <Element name='contact'>
            <Container maxW={'8xl'} p={6.75} mt={10}>
                <VStack spacing={8}>
                    <Heading as='h2'>Contact me</Heading>
                    <Box
                        maxW={'40vw'}
                        w={'full'}
                        bg={useColorModeValue('white', 'gray.900')}
                        boxShadow={'xl'}
                        rounded={'md'}
                        p={6}
                        pb={8}
                        overflow={'hidden'}
                    >
                        <Flex textAlign={'center'}>
                            <Container w='50%'>
                                <Link href="mailto:jason@jasonfyw.com">
                                    <Badge colorScheme='green'>Personal</Badge>
                                    <Text textDecoration={'underline'}>jason@jasonfyw.com</Text>
                                </Link>
                            </Container>
                            <Spacer />
                            <Container w='50%'>
                                <Link href="mailto:jsn.wang@mail.utoronto.ca">
                                    <Badge colorScheme='orange'>Academic</Badge>
                                    <Text textDecoration={'underline'}>jsn.wang@mail.utoronto.ca</Text>
                                </Link>
                            </Container>
                        </Flex>
                    </Box>
                </VStack>
            </Container>
        </Element>
    );
};

export default Contact;