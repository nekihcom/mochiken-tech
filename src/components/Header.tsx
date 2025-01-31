import { Box, Flex, Heading, Icon } from "@chakra-ui/react";

import PrimaryContainer from "./PrimaryContainer";
import { FcMenu } from "react-icons/fc";
import HeaderDrawer from "./HeaderDrawer";

const Header = () => {
  return (
    <>
      <Box as={'header'} css={{backgroundColor:"transparent", position:"sticky", top:0}}>
        <PrimaryContainer>
          <Flex justify={'space-between'} css={{py:3}}>
            <Flex align={'center'} ><Heading>Mochiken</Heading></Flex>
            <Box>
              {/* <Icon fontSize="40px" color="tomato">
                <FcMenu />
              </Icon> */}
              <HeaderDrawer />
            </Box>
          </Flex>
        </PrimaryContainer>
      </Box>
    </>
  );
}

export default Header;