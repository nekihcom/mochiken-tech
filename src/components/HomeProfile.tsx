
import { Box, Flex, Grid, GridItem, Heading, Text, Image, Container, Separator } from "@chakra-ui/react";

import HomeSectionContainer from "./HomeSectionContainer";
import SnsLinkList from "./SnsLinkList";
import SnsIconLinkList from "./SnsIconLinkList";

const HomeProfile = () => {
  return (
    <>
      <HomeSectionContainer>
        <Flex m={{md:'0 auto'}} maxW={{md:'960px'}} display={{base:'block', md:'flex'}} justify={{md:'center'}}>
          <Flex justify={'center'} mb={{base:20, md:0}}>
            <Image src={'/profile/me2.png'} alt={'Mochiken'} height={250} />
          </Flex>
          <Box w={{md:'70%'}}>
            <Box m={'0 auto'} maxW={{base:'380px', md:'500px'}} mb={{base:20, md:5}}>
              <Flex align={{md:'center'}} justify={'space-between'}>
                <Box>
                  <Heading as={'h1'}  fontWeight={700} fontSize={'1.75rem'}>Mochiken</Heading>
                  <Heading as={'h2'}>@nekihcom</Heading>
                </Box>
                <Flex align={'center'} w={'150px'}>
                  <SnsIconLinkList />
                </Flex >
              </Flex>
              <Separator variant="solid" h={'2px'} backgroundColor={'gray.900'}/>
            </Box>
            <Box m={'0 auto'} maxW={{base:'380px', md:'500px'}}>
              <Text>人々や社会のために<br />役立つ「モノづくり」をやっています。</Text>
            </Box>
          </Box>
        </Flex>
      </HomeSectionContainer>
    </>
  );
}
export default HomeProfile;