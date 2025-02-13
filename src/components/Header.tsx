import { Box, Container, Flex, Heading } from '@chakra-ui/react';

import Menu from './Menu';
import Link from 'next/link';
import ProgressBar from './ProgressBar';

const Header = () => {
  return (
    <>
      <Box as={'header'} css={{backgroundColor:'transparent', position:'sticky', top:0, zIndex:9999}}>
        <ProgressBar />
        <Container 
          // maxW={'7xl'} 
          maxW={'85rem'}
          fluid
        >
          <Flex justify={'space-between'} py={3}>
            <Flex 
              align={'center'}
            >
              <Link href={'/'}>
                <Heading 
                  as={'h1'} 
                  css={{
                    fontWeight:700,
                    fontSize:'1.5rem',
                    textTransform:'uppercase',
                  }}
                >Mochiken.</Heading>
              </Link>
            </Flex>
            <Box>
              <Menu />
            </Box>
          </Flex>
        </Container>
      </Box>
    </>
  );
}

export default Header;