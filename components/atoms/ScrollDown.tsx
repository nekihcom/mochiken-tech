import { FC, memo } from "react";

import { Box } from "@mui/material";

const ScrollDown:FC = memo(() => {
  return (
    <>
      <Box className="scrolldown">
        <Box component={'span'}>Scroll</Box>
      </Box>
    </>
  )
});

ScrollDown.displayName = "ScrollDown";
export default ScrollDown;