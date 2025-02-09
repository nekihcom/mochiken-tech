import { Box } from "@chakra-ui/react";

import HomeBlog from "@/components/HomeBlog";
import HomeProfile from "@/components/HomeProfile";
import HomeWork from "@/components/HomeWork";
import HomeFirstVisual from "@/components/HomeFirstVisual";


const Home = () => {
  return (
    <>
      <HomeFirstVisual />
      <Box as={'main'} pt={80} px={0}>
        <HomeProfile />
        <HomeBlog />
        <HomeWork />
      </Box>
    </>
  );
}

export default Home;