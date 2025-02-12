import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react'
import ScrollDoown from './ScrollDown';
import FadeInView from '@/lib/animation/FadeInView';

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
              <FadeInView delay={1}>
                <Text
                  fontSize={30}
                  fontWeight={700}
                  textTransform={'uppercase'}
                  textAlign={{base:'center', md:'start'}}
                >👋Welcome!</Text>
              </FadeInView>
              <Heading as={'h1'}
                fontSize={60}
                fontWeight={700}
                lineHeight={1}
                textTransform={'uppercase'}
              >
                <FadeInView delay={2.5}>
                  <Box as={'span'} color={'teal.600'}>Mochiken</Box>
                </FadeInView>
                <FadeInView delay={4}>
                  <Text>Portfolio.</Text>
                </FadeInView>
              </Heading>
            </Box>
            <Box width={{base:'75%', md:'40%'}}>
              <FadeInView duration={1} directionFrom='lower'>
                <Image src={'/profile/me.png'} alt={'Mochiken Avatar'} />
              </FadeInView>              
            </Box>
            {/* <FadeInView directionFrom='lower'>
              <Image src={'/profile/me.png'} alt={'Mochiken Avatar'} width={{base:'75%', md:'40%'}} />
            </FadeInView> */}
          </Flex>
        </Box>
        <ScrollDoown />
      </Flex>
    </>
  );
};
export default HomeFirstVisual;