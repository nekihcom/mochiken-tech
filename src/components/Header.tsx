import { Box, Flex } from "@chakra-ui/react";

import PrimaryContainer from "./PrimaryContainer";

const Header = () => {
  return (
    <>
      <Box as={'header'} css={{backgroundColor:"transparent", position:"sticky", top:0}}>
        <PrimaryContainer>
          <Flex justify={'space-between'} css={{py:5}}>
            <Box>Mochiken</Box>
            <Box>Box B</Box>
          </Flex>
        </PrimaryContainer>
      </Box>
    </>
  );
}

export default Header;