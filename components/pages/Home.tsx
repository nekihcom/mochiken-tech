import { FC, memo } from "react";

import { Box, Typography } from "@mui/material";

import { h1Style } from "@/styles/style";
import PrimaryTemplate from "@/components/templates/PrimaryTemplate";
import PrimaryContainer from "@/components/atoms/PrimaryContainer";
import KeyVisual from "@/components/organisms/contents/KeyVisual";
import AboutText from "../atoms/AboutText";
import AboutSnsList from "../molecules/AboutSnsList";
import SkillList from "../organisms/SkillList";

const aboutTitleStyle = { ...h1Style, ...{mb:5, textAlign:'center'}};


const Home:FC = memo(() => {
  return (
    <>
      <PrimaryTemplate>
        <KeyVisual />
        <PrimaryContainer>
          <Box component={'main'}>
            <Box component={'section'} id='About' sx={{height:'90vh', 
              display:'flex',justifyContent:'center', alignItems:'center'
            }}>
              <Box>
                <Typography component={'h1'} sx={aboutTitleStyle}>About me</Typography>
                <Box sx={{
                  display:{md:'flex'}, 
                  justifyContent:'center', 
                }}>
                  <AboutText />
                  <AboutSnsList />
                </Box>
                <Box>
                  <SkillList />
                </Box>
              </Box>
            </Box>
          </Box>
        </PrimaryContainer>
      </PrimaryTemplate>
    </>
  )
});

Home.displayName = "Home";
export default Home;