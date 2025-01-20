import { ReactNode } from "react";
import Link from "next/link";
import { Box, Typography } from "@mui/material";
import { bizFontFamily } from "@/data/fonts";

type Props = {
  service: string;
  color?: string;
  username: string;
  icon?: ReactNode;
}

const SnsLinkCard = (props:Props) => {
  const { service, color='#000', username, icon=null } = props;

  return (
    <>
      <Link href='https://x.com/nekihcom' target='_blank'>
        <Box
          sx={{
            mx:0.5,
            display:'flex',
            justifyContent:'space-between', 
            alignItems:'center', 
            backgroundColor:color, 
            px:2, 
            py:1, 
            borderRadius:2, 
            '&:hover':{
              opacity:0.5, 
              transition:'all .3s'
            }
          }}
        >
          <Box>
            <Typography component={'p'} sx={{fontFamily:bizFontFamily, fontSize:18, color:'white'}}>{service}</Typography>
            <Typography component={'p'} sx={{fontFamily:bizFontFamily, fontSize:22, color:'white', fontWeight:700}}>{username}</Typography>
          </Box>
          <Box>
            { icon }
          </Box>
        </Box>
      </Link>
    </>
  );
}

export default SnsLinkCard;