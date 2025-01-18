import Link from "next/link";
import Image from "next/image";
import { Box, List, ListItem, Typography } from "@mui/material";
import { teal } from "@mui/material/colors";
import XIcon from '@mui/icons-material/X';
import GitHubIcon from '@mui/icons-material/GitHub';

import GlobalContainer from "@/components/organisms/layout/GlobalContainer";

const GlobalFooter = () => {

  return (
    <Box component='footer' sx={{py:2, color:'white', backgroundColor:teal[900]}}>
      <GlobalContainer>
        {/* SNS */}
        <List sx={{display:'flex', justifyContent:'center', mb:{lg:2}}}>
          <ListItem sx={{width:'auto'}}>
            <Box sx={{'&:hover':{opacity:0.5, transition:'all 0.3s'}}}>
              <Link href='https://x.com/nekihcom' target='_blank'><XIcon /></Link>
            </Box>
          </ListItem>
          <ListItem sx={{width:'auto'}}>
            <Box sx={{'&:hover':{opacity:0.5, transition:'all 0.3s'}}}>
              <Link href='https://github.com/nekihcom' target='_blank'><GitHubIcon /></Link>
            </Box>
          </ListItem>
          <ListItem sx={{width:'auto'}}>
            <Box sx={{'&:hover':{opacity:0.5, transition:'all 0.3s'}}}>
              <Link href='https://qiita.com/nekihcom' target='_blank'><Image src={"/qiita.png"} alt={"Qiita"} width={24} height={24} /></Link>
            </Box>
          </ListItem>
        </List>

        {/* Copyright */}
        <Typography className="text-center" sx={{fontSize:{xs:10, lg:14}}}>
          &copy; Copyright {new Date().getFullYear()}. Made by <a href='/' className="underline font-bold">Masaya Kemmochi</a>
        </Typography>
      </GlobalContainer>
      </Box>
  );
}

export default GlobalFooter;