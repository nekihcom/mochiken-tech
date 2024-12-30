import { FC, memo } from "react";

import { Typography } from "@mui/material";

import { h1Style } from "@/styles/style";
import WorkList from "@/components/molecules/WorkList";


const WorksTitleStyle = { ...h1Style, ...{mb:5, textAlign:'center'}};

const HomeWorks:FC = memo(() => {
  return (
    <>
      <Typography component={'h1'} sx={WorksTitleStyle}>Works</Typography>
      <WorkList />
    </>
  )
});

HomeWorks.displayName = "HomeWorks";
export default HomeWorks;