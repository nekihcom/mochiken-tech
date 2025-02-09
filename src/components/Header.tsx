import { Box, Flex, Heading } from '@chakra-ui/react';

import PrimaryContainer from './PrimaryContainer';
// import Menu from './Menu';
import Link from 'next/link';
import ProgressBar from './ProgressBar';

const Header = () => {
  return (
    <>
      <Box as={'header'} css={{backgroundColor:'transparent', position:'sticky', top:0, zIndex:9999}}>
        <ProgressBar />
        <PrimaryContainer>
          <Flex justify={'space-between'} css={{py:3}}>
            <Flex align={'center'} >
              <Link href={'/'}>
                <Heading as={'h1'} css={{
                  fontWeight:700,
                  fontSize:'1.5rem',
                  textTransform:'uppercase'
                }}>Mochiken.</Heading>
              </Link>
            </Flex>
            <Box>
              {/* <Menu /> */}
            </Box>
          </Flex>
        </PrimaryContainer>
      </Box>
    </>
  );
}

export default Header;