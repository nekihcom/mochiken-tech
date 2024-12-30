import { FC, memo, ReactNode } from "react";

import { Box, Button, Typography } from "@mui/material";

type Props = {
  href?:string;
  sns?:string;
  username?:string;
  icon?:ReactNode;
  bgColor?:string;
};
const XLinkButton:FC<Props> = memo((props) => {
  const { href='', sns='', username='', icon=<Box></Box>, bgColor='#000' } = props;

  return (
    <>
      <Button component='a' href={href} target='_blank' 
        sx={{
          width:'330px',
          borderRadius:2,
          display:'block', 
          textTransform:'initial', 
          color:'#fff', 
          backgroundColor:bgColor
      }}>
        <Box sx={{px:1, py:0.5, display:'flex', justifyContent:'space-between', alignItems:'center'}}>
          <Box>
            <Typography>{sns}</Typography>
            <Typography>{username}</Typography>
          </Box>
          { icon }
        </Box>
      </Button>
    </>
  )
});

XLinkButton.displayName = "XLinkButton";
export default XLinkButton;