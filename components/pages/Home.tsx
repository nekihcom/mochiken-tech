import { FC, memo } from "react";

import { Box } from "@mui/material";

import PrimaryTemplate from "@/components/templates/PrimaryTemplate";
import PrimaryContainer from "@/components/atoms/PrimaryContainer";
import KeyVisual from "@/components/organisms/contents/KeyVisual";
import HomeAbout from "@/components/organisms/contents/HomeAbout";
import HomeWorks from "../organisms/contents/HomeWorks";
import HomeArticles from "../organisms/contents/HomeArticles";


const Home:FC = memo(() => {
  return (
    <>
      <PrimaryTemplate>
        <KeyVisual />
        
          <Box component={'main'}>
            <Box component={'section'} id='About' sx={{
              py:{xs:20}
            }}>
              <PrimaryContainer>
                <HomeAbout />
              </PrimaryContainer>
            </Box>
            <Box component={'section'} id='Works' sx={{
              py:{xs:20}
            }}>
              <PrimaryContainer>
                <HomeWorks />
              </PrimaryContainer>
            </Box>
            <Box component={'section'} id='Articles' sx={{
              py:{xs:20}
            }}>
              <PrimaryContainer>
                <HomeArticles />
              </PrimaryContainer>
            </Box>
          </Box>
      </PrimaryTemplate>
    </>
  )
});

Home.displayName = "Home";
export default Home;