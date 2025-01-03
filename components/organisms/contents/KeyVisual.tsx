'use client';
import { FC, memo, useEffect } from "react";

import { Box, Typography } from "@mui/material";
import { teal } from "@mui/material/colors";

import ScrollDown from "@/components/atoms/ScrollDown";
import PrimaryContainer from "@/components/atoms/PrimaryContainer";
import { useGetKeyvisual } from "@/hooks/useGetHomeSections";
import { h1Style, pStyle } from "@/styles/style";


const kvTitleStyle = { ...h1Style, ...{letterSpacing:1, mb:3, fontSize:'48px'}};
const kvTextStyle = { ...pStyle, ...{fontSize:'20px'} };

const KeyVisual:FC = memo(() => {
  // const { getKeyvisual, loading, keyvisual } = useGetKeyvisual();
  const { getKeyvisual, keyvisual } = useGetKeyvisual();


  useEffect(() => {
    getKeyvisual();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let bodyArray:Array<string> = []; 
  if(keyvisual && keyvisual.body) {
      bodyArray = keyvisual.body;
  }

  return (
    <>
      <Box component='section' sx={{
        height:'95vh', 
        display:'flex', justifyContent:'center', alignItems:'center',
        backgroundColor:'#ededed',
        background: 'linear-gradient(to right, rgba(245, 245, 245, 0.8), rgba(245, 245, 245, 0.8)), url(https://api.mochiken.blog/sites/default/files/2024-12/bgimage.svg)'
      }}>
        <PrimaryContainer>
          <Box>
            <Box sx={{display:{md:'flex'}, alignItems:{md:'center'}, justifyContent:'center'}}>
              <Box sx={{textAlign:{xs:'center', md:'start'}}}>
                <Typography component={'h1'} sx={kvTitleStyle}>👋 Hey, <br className='is-sp' /><Box component={'span'} sx={{color:teal[700]}}>{`I'm Mochiken`}</Box></Typography>
                <Box>
                  { bodyArray.map((body:string, index:number) => (
                    <Typography key={index} component={'p'} sx={kvTextStyle}>{ body }</Typography>
                  )) }
                </Box>
              </Box>
              <Box sx={{textAlign:'center'}}>
                <Box component="img"sx={{maxWidth:'330px', width: '100%'}} src={ keyvisual?.field_avatar } />
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