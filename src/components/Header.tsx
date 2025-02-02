import { Box, Flex, Heading } from '@chakra-ui/react';

import PrimaryContainer from './PrimaryContainer';
// import Menu from './Menu';
import Link from 'next/link';

const Header = () => {
  return (
    <>
      <Box as={'header'} css={{backgroundColor:'transparent', position:'sticky', top:0}}>
        <PrimaryContainer>
          <Flex justify={'space-between'} css={{py:3}}>
            <Flex align={'center'} >
              <Link href={'/'}>
                <Heading as={'h1'} css={{
                  fontWeight: 700,
                  fontSize: '1.5rem'
                }}>Mochiken</Heading>
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