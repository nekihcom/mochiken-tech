import { FC, memo } from "react";

import { Typography } from "@mui/material";

import { h1Style } from "@/styles/style";
import ArticleList from "@/components/molecules/ArticleList";


const ArticlesTitleStyle = { ...h1Style, ...{mb:5, textAlign:'center'}};

const HomeArticles:FC = memo(() => {
  return (
    <>
      <Typography component={'h1'} sx={ArticlesTitleStyle}>Articles</Typography>
      <ArticleList />
    </>
  )
});

HomeArticles.displayName = "HomeArticles";
export default HomeArticles;