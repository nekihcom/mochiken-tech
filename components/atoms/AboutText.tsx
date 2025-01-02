'use client';
import { FC, memo, useEffect } from "react";

import { Box, Divider, Typography } from "@mui/material";

import { pStyle } from "@/styles/style";
import { useGetProfile } from "@/hooks/useGetHomeSections";

const aboutTextStyle = { ...pStyle, ...{mr:{xs:0, md:3}} };


const AboutText:FC = memo(() => {
  const { getProfile, profile } = useGetProfile();

  useEffect(() => {
      getProfile();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

  let bodyArray:Array<string> = []; 
  if(profile && profile.body) {
      bodyArray = profile.body;
  }
    
  return (
    <>
      <Box sx={{mb:{xs:5, md:0}, mx:{xs:1, md:0}}}>
        {/* <Typography component={'p'} sx={aboutTextStyle} dangerouslySetInnerHTML={{ __html: aboutText }} /> */}
        <Box>
          { bodyArray.map((body:string, index:number) => (
            <Typography key={index} component={'p'} sx={aboutTextStyle}>{ body }</Typography>
          )) }
        </Box>
        <Divider sx={{my:1}} />
        <Typography component={'p'} sx={aboutTextStyle}>
          職業<br/>
          { profile?.field_job }
        </Typography>
        <Divider sx={{my:1}} />
        <Typography component={'p'} sx={aboutTextStyle}>
          趣味<br/>
          { profile?.field_hobby }
        </Typography>
      </Box>
    </>
  )
});

AboutText.displayName = "AboutText";
export default AboutText;