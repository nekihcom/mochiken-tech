import Image from "next/image";

import { Box, Container, Heading, VStack } from "@chakra-ui/react";

import SnsIconLinkList from "./SnsIconLinkList";
import HomeSectionContainer from "./HomeSectionContainer";

const HomeProfile = () => {
  return (
    <>
      <HomeSectionContainer>
        <VStack>
          <Image src={'/profile/me2.png'} alt={'Mochiken'} width={200} height={200} />
          <Box css={{textAlign:'center'}}>
            <Heading as={'h1'} css={{
              fontWeight: 700,
              fontSize: '1.5rem'
            }}>Mochiken</Heading>
            <Heading as={'h2'}>@nekihcom</Heading>
          </Box>
          <Container css={{maxW:'200px'}}>
            <SnsIconLinkList />
          </Container>
        </VStack>
      </HomeSectionContainer>
    </>
  );
}
export default HomeProfile;