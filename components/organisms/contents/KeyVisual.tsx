import { FC, memo } from "react";

import { Box, Typography } from "@mui/material";

import PrimaryContainer from "@/components/atoms/PrimaryContainer";
import { h1Style, pStyle } from "@/styles/style";
import { teal } from "@mui/material/colors";
import ScrollDown from "@/components/atoms/ScrollDown";


const kvTitleStyle = { ...h1Style, ...{letterSpacing:1, mb:3, fontSize:'48px'}};
const kvTextStyle = { ...pStyle, ...{fontSize:'20px'} };

const KeyVisual:FC = memo(() => {
  return (
    <>
      <Box component='section' sx={{
        height:'95vh', 
        display:'flex', justifyContent:'center', alignItems:'center',
        backgroundColor:'#ededed'
      }}>
        <PrimaryContainer>
          <Box>
            <Box sx={{display:{md:'flex'}, alignItems:{md:'center'}, justifyContent:'center'}}>
              <Box sx={{textAlign:{xs:'center', md:'start'}}}>
                <Typography component={'h1'} sx={kvTitleStyle}>👋 Hey, <br className='is-sp' /><Box component={'span'} sx={{color:teal[700]}}>I'm Mochiken</Box></Typography>
                <Typography component={'p'} sx={kvTextStyle}>こちらはエンジニアMochikenのポートフォリオサイトです。<br />これまでの実績やスキルを掲載しておりますので、<br/>ぜひご参考にしていただければ幸いです。</Typography>
              </Box>
              <Box sx={{textAlign:'center'}}>
                <Box component="img"sx={{maxWidth:'330px', width: '100%'}} src="/me.png" />
              </Box>
            </Box>
          </Box>
          <ScrollDown />
        </PrimaryContainer>
      </Box>
    </>
  )
});

KeyVisual.displayName = "KeyVisual";
export default KeyVisual;