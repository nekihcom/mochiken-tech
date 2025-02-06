import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react'
import ScrollDoown from './ScrollDown';

const HomeFirstVisual = () => {
  return (
    <>
      <Flex
        position={'relative'} 
        height={'80vh'}
        justify={'center'}
        align={'center'}
      >
        <Box>
          <Flex
            flexDirection={{base:'column', md:'row'}}
            justify={'center'}
            align={'center'}
          >
            <Box>
              <Text
                fontSize={30}
                fontWeight={700}
                textTransform={'uppercase'}
                textAlign={{base:'center', md:'start'}}
              >👋Welcome!</Text>
              <Heading as={'h1'}
                fontSize={60}
                fontWeight={700}
                lineHeight={1}
                textTransform={'uppercase'}
              >
                <Box as={'span'} color={'teal.600'}>Mochiken</Box><br />Portfolio.
              </Heading>
            </Box>
            <Image src={'/profile/me.png'} width={{base:'75%', md:'40%'}} />
          </Flex>
        </Box>
        <ScrollDoown />
      </Flex>
    </>
  );
};
export default HomeFirstVisual;