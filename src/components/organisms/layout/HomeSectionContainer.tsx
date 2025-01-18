import { ReactNode } from "react";
import { Box, Typography } from "@mui/material";

import GlobalContainer from "@/components/organisms/layout/GlobalContainer";

type Props = {
  children: ReactNode;
  title?: string;
}

const HomeSectionContainer = (props:Props) => {
  const { children, title='' } = props;

  return (
    <>
      <Box component={'section'} sx={{py:20}}>
        <GlobalContainer>
          {/* Section Title */}
          <Typography component={'h2'} 
            sx={{
              fontSize:48, 
              textTransform:'uppercase', 
              textAlign:'center', 
              mb:6
            }}
          >{ title }</Typography>
          { children }        
        </GlobalContainer>
      </Box>
    </>
  );
}

export default HomeSectionContainer;