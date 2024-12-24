import { FC, memo } from "react";

import { Box, Typography } from "@mui/material";

const Copyright:FC = memo(() => {
  return (
    <>
      <Typography sx={{fontSize:'16px', color:'#fff'}}>
        © Copyright { new Date().getFullYear() }. 
        <br className='is-sp'/>
        Made by <Box component={'a'} target='_blank' href='/' sx={{
          fontWeight:700, color:'#fff', textDecoration:'underline'}}>Masaya Kemmochi</Box>
      </Typography>
    </>
  )
});

Copyright.displayName = "Copyright";
export default Copyright;