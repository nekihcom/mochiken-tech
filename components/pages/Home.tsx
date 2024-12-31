import { FC, memo } from "react";

import { Box } from "@mui/material";

import PrimaryTemplate from "@/components/templates/PrimaryTemplate";
import PrimaryContainer from "@/components/atoms/PrimaryContainer";
import KeyVisual from "@/components/organisms/contents/KeyVisual";
import HomeAbout from "@/components/organisms/contents/HomeAbout";
import HomeWorks from "../organisms/contents/HomeWorks";
import HomeArticles from "../organisms/contents/HomeArticles";
import HomeContact from "../organisms/contents/HomeContact";


const Home:FC = memo(() => {
  return (
    <>
      <PrimaryTemplate>
        <KeyVisual />
        <Box component={'main'}>
          <Box component={'section'} id='About' sx={{
            py:{xs:10}
          }}>
            <PrimaryContainer>
              <HomeAbout />
            </PrimaryContainer>
          </Box>
          <Box component={'section'} id='Works' sx={{
            py:{xs:10}
          }}>
            <PrimaryContainer>
              <HomeWorks />
            </PrimaryContainer>
          </Box>
          <Box component={'section'} id='Articles' sx={{
            pt:20, pb:40
          }}>
            <PrimaryContainer>
              <HomeArticles />
            </PrimaryContainer>
          </Box>
          <Box component={'section'} id='Contact' sx={{
            py:{xs:10},
            background: 'linear-gradient(to right, rgba(245, 245, 245, 0.8), rgba(245, 245, 245, 0.8)), url(https://api.mochiken.blog/sites/default/files/2024-12/bgimage.svg)'
          }}>
            <PrimaryContainer>
              <HomeContact />
            </PrimaryContainer>
          </Box>
        </Box>
      </PrimaryTemplate>
    </>
  )
});

Home.displayName = "Home";
export default Home;