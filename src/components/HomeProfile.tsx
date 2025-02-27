import { Box, Flex, Heading, Text, Image, Separator } from "@chakra-ui/react";

import HomeSectionContainer from "./HomeSectionContainer";
import SnsIconLinkList from "./SnsIconLinkList";
import Link from "next/link";

const HomeProfile = () => {
  return (
    <>
      <HomeSectionContainer>
        <Box id={'Profile'} m={{md:'0 auto'}} maxW={{md:'640px'}} >
          <Flex display={{base:'block', md:'flex'}} justify={{md:'center'}}>
            <Flex justify={'center'} mb={{base:20, md:0}} w={{md:'30%'}}>
              <Image src={'/profile/me2.png'} alt={'Mochiken'} height={200} />
            </Flex>
            <Box m={{base:'0 auto', md:'0'}} w={{base:'95%', sm:'75%', md:'70%'}} mb={{base:20, md:5}}>
              <Box mb={5}>
                <Flex align={{md:'center'}} justify={'space-between'}>
                  <Box>
                    <Heading as={'h1'}  fontWeight={700} fontSize={'1.75rem'}>Mochiken</Heading>
                    <Heading as={'h2'}>@nekihcom</Heading>
                  </Box>
                  <Flex align={'center'} w={'150px'}>
                    <SnsIconLinkList />
                  </Flex >
                </Flex>
                <Separator variant="solid" h={'5px'} backgroundColor={'teal.600'}/>
              </Box>
              <Box>
                <Text>人々や社会のために<br />役立つ「モノづくり」をやっています。</Text>
              </Box>
            </Box>
          </Flex>
          <Box pt={10} pl={5}>
            <Heading as={'h2'}
              mb={5}
              fontWeight={700}
              fontSize={'2rem'}
              position={'relative'}
              lineHeight={1}
              display={'inline-block'}
              _before={{
                content:`""`,
                width:'230.0px',
                height:'5px',
                background:'teal.600',
                position:'absolute',
                left:0,
                bottom:-1
              }}
            >About This Site</Heading>
            <Text>
              こんにちは、もちけん(<Link href={'/profile'}><Text as={'span'} color={'teal.600'} textDecoration={'underline'} _hover={{opacity:0.5}}>@nekihcom</Text></Link>)と申します。
              <br />
              こちらではブログやこれまでの作品を発信しています。
              <br />
              <br />
              詳しくはプロフィールをご覧ください👇👇
            </Text>
          </Box>
          <Box mt={10} ml={5} position={'relative'} w={'30%'} minW={'153px'}>
            <Text 
              _after={{
                content: '""',
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: 0,
                height: '2px',
                backgroundColor: 'teal.600',
                transition: 'all 0.3s'
              }}
              _hover={{
                _after: {
                  width: '100%'
                }
              }}
            >
              <Link href={'/profile'}><Text as={'span'} transition={'all 0.3s'} fontWeight={700} _hover={{color: 'teal.600'}}>もっと知る　→</Text></Link>
            </Text>
          </Box>
        </Box>
      </HomeSectionContainer>
    </>
  );
}
export default HomeProfile;