import { FC, memo } from "react";
import { Box } from "@mui/material";

import Text from "../atoms/Text";

const Copyright:FC = memo(() => {
  return (
    <>
      <Text sx={{color:'#fff'}}>
        © Copyright { new Date().getFullYear() }. 
        <br className='is-sp'/>
        Made by <Box component={'a'} target='_blank' href='/' sx={{
          fontWeight:700, color:'#fff', textDecoration:'underline'}}>Masaya Kemmochi</Box>
      </Text>
    </>
  )
});

Copyright.displayName = "Copyright";
export default Copyright;