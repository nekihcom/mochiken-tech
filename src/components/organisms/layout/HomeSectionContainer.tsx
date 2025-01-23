'use client';
import { ReactNode, useRef } from "react";
import { Box, Typography } from "@mui/material";

import GlobalContainer from "@/components/organisms/layout/GlobalContainer";
import { oswaldFontFamily } from "@/data/fonts";
import { useInView } from "framer-motion";
import { globalBackgroundColor } from "@/data/site";

type Props = {
  anchorLink?: string;
  children: ReactNode;
  title?: string;
}

const HomeSectionContainer = (props:Props) => {
  const { anchorLink='', children, title='' } = props;

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  let topContainerStyle = {
    pt:20,
    pb:30,
    backgroundColor: ''
  }

  if(anchorLink == 'profile') {
    topContainerStyle['backgroundColor'] = globalBackgroundColor
  }

  return (
    <>
      <Box component={'section'} sx={topContainerStyle}>
        <GlobalContainer>
          {/* Section Title */}
          <Typography id={anchorLink} component={'h2'} 
            sx={{
              fontWeight:700,
              fontSize:48, 
              textTransform:'uppercase', 
              textAlign:'center', 
              mb:6,
              fontFamily:oswaldFontFamily
            }}
            ref={ref}
          >
            <span
              style={{
                transform: isInView ? "none" : "translateX(-200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s"
              }}
            >
              { title }
            </span>
          </Typography>
          { children }
        </GlobalContainer>
      </Box>
    </>
  );
}

export default HomeSectionContainer;