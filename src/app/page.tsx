import { Box } from "@chakra-ui/react";

import HomeProfile from "@/components/HomeProfile";
import HomeWork from "@/components/HomeWork";
import HomeFirstVisual from "@/components/HomeFirstVisual";
import HomeArticle from "@/components/HomeArticle";


const Home = () => {
  return (
    <>
      <HomeFirstVisual />
      <Box as={'main'} pt={80} px={0}>
        <HomeProfile />
        <HomeArticle />
        <HomeWork />
      </Box>
    </>
  );
}

export default Home;