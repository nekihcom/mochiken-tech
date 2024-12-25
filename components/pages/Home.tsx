import { FC, memo } from "react";

import PrimaryTemplate from "../templates/PrimaryTemplate";
import PrimaryContainer from "../atoms/PrimaryContainer";
import KeyVisual from "../organisms/contents/KeyVisual";
import { Box } from "@mui/material";

const Home:FC = memo(() => {
  return (
    <>
      <PrimaryTemplate>
        <KeyVisual />
        <PrimaryContainer>
          <Box component={'section'}>
            <p>Home contents</p>
          </Box>
        </PrimaryContainer>
      </PrimaryTemplate>
    </>
  )
});

Home.displayName = "Home";
export default Home;