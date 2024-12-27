import { FC, memo } from "react";

import { Box } from "@mui/material";

import PrimaryTemplate from "@/components/templates/PrimaryTemplate";
import PrimaryContainer from "@/components/atoms/PrimaryContainer";
import KeyVisual from "@/components/organisms/contents/KeyVisual";
import HomeAbout from "../organisms/contents/HomeAbout";


const Home:FC = memo(() => {
  return (
    <>
      <PrimaryTemplate>
        <KeyVisual />
        <PrimaryContainer>
          <Box component={'main'}>
            <Box component={'section'} id='About' sx={{
              my:{xs:20}
            }}>
              <HomeAbout />
            </Box>
            <Box component={'section'} id='Projects' sx={{
              my:{xs:20}
            }}></Box>
          </Box>
        </PrimaryContainer>
      </PrimaryTemplate>
    </>
  )
});

Home.displayName = "Home";
export default Home;