import { FC, memo } from "react";

import { Box } from "@mui/material";

import HeaderMenu from "@/components/molecules/HeaderMenu";

const Header:FC = memo(() => {
  return (
    <>
      <Box component='header'>
        <HeaderMenu />
      </Box>    
    </>
  )
});

Header.displayName = "Header";
export default Header;