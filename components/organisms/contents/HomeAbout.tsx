import { FC, memo } from "react";

import { Box, Typography } from "@mui/material";

import AboutText from "@/components/atoms/AboutText";
import AboutSnsList from "@/components/molecules/AboutSnsList";
import SkillList from "@/components/molecules/SkillList";
import { h1Style } from "@/styles/style";

const aboutTitleStyle = { ...h1Style, ...{mb:5, textAlign:'center'}};

const HomeAbout:FC = memo(() => {
  return (
    <>
      <Box>
        <Typography component={'h1'} sx={aboutTitleStyle}>About me</Typography>
        <Box sx={{
          display:{md:'flex'}, 
          justifyContent:'space-around', 
          mb:{xs:10}
        }}>
          <AboutText />
          <AboutSnsList />
        </Box>
        <Box>
          <SkillList />
        </Box>
      </Box>
    </>
  )
});

HomeAbout.displayName = "HomeAbout";
export default HomeAbout;