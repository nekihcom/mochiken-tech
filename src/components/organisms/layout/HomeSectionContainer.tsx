import { ReactNode } from "react";
import { Box, Typography } from "@mui/material";

import GlobalContainer from "@/components/organisms/layout/GlobalContainer";
import { oswaldFontFamily } from "@/data/fonts";

type Props = {
  anchorLink?: string;
  children: ReactNode;
  title?: string;
}

const HomeSectionContainer = (props:Props) => {
  const { anchorLink='', children, title='' } = props;

  return (
    <>
      <Box component={'section'} sx={{py:20}}>
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
          >{ title }</Typography>
          { children }        
        </GlobalContainer>
      </Box>
    </>
  );
}

export default HomeSectionContainer;