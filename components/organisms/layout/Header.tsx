import { FC, memo } from "react";
import { Box } from "@mui/material";
import PrimaryContainer from "../../atoms/PrimaryContainer";

const Header:FC = memo(() => {
  return (
    <>
      <Box component='header' sx={{backgroundColor:"red"}}>
        <PrimaryContainer>
          <p>Header</p>
        </PrimaryContainer>
      </Box>    
    </>
  )
});

Header.displayName = "Header";
export default Header;