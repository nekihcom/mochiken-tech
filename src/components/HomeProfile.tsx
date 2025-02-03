
import { Box, Flex, Grid, GridItem, Heading, Text, Image, Container } from "@chakra-ui/react";

import HomeSectionContainer from "./HomeSectionContainer";
import SnsLinkList from "./SnsLinkList";

const HomeProfile = () => {
  return (
    <>
      <HomeSectionContainer>
        <Flex css={{display:{base:'block', md:'flex'}}}>
          <Grid templateColumns={{base:'repeat(1, minmax(0, 1fr))', sm:'repeat(2, minmax(0, 1fr))'}} alignContent={'center'} mb={{base:5, md:0}}>
            <GridItem mb={{base:5, md:0}}>
              <Flex justify={'center'}>
                <Image src={'/profile/me2.png'} alt={'Mochiken'} height={250} />
              </Flex>
              <Heading as={'h1'}  fontWeight={700} fontSize={'1.5rem'} textAlign={'center'}>Mochiken</Heading>
              <Heading as={'h2'} textAlign={'center'}>@nekihcom</Heading>
            </GridItem>
            <GridItem>
              <Container maxW={{base:'300px', md:'330px'}}>
                <Heading as={'h3'} fontWeight={700}>職種</Heading>
                <Text>システムエンジニア / Webエンジニア</Text>
                <Heading as={'h3'} fontWeight={700}>所属</Heading>
                <Text>日系SIer</Text>
                <Heading as={'h3'} fontWeight={700}>好きな技術</Heading>
                <Text>Python / Drupal</Text>
                <Heading as={'h3'} fontWeight={700}>趣味</Heading>
                <Text>野球 / バドミントン / 個人開発</Text>
              </Container>
            </GridItem>
          </Grid>
          <Flex justify={'center'} align={'start'}>
            <SnsLinkList />
          </Flex>
        </Flex>
      </HomeSectionContainer>
    </>
  );
}
export default HomeProfile;