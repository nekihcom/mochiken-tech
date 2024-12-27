import { FC, memo } from "react";

import { Typography } from "@mui/material";

import { h1Style } from "@/styles/style";
import WorkList from "@/components/molecules/WorkList";

const ProjectsTitleStyle = { ...h1Style, ...{mb:5, textAlign:'center'}};

const workList:number[] = [1, 2, 3];

const HomeWorks:FC = memo(() => {
  return (
    <>
      <Typography component={'h1'} sx={ProjectsTitleStyle}>Works</Typography>
      <WorkList />
    </>
  )
});

HomeWorks.displayName = "HomeWorks";
export default HomeWorks;