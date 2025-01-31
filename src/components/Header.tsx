import { Box, Flex, Heading } from '@chakra-ui/react';

import PrimaryContainer from './PrimaryContainer';
import Menu from './Menu';

const Header = () => {
  return (
    <>
      <Box as={'header'} css={{backgroundColor:'transparent', position:'sticky', top:0}}>
        <PrimaryContainer>
          <Flex justify={'space-between'} css={{py:3}}>
            <Flex align={'center'} ><Heading>Mochiken</Heading></Flex>
            <Box>
              <Menu />
            </Box>
          </Flex>
        </PrimaryContainer>
      </Box>
    </>
  );
}

export default Header;