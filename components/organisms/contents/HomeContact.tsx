import { FC, memo } from "react";

import { Box, Typography } from "@mui/material";

import { h1Style } from "@/styles/style";
import Contact from "@/components/molecules/Contact";


const contactTitleStyle = { ...h1Style, ...{mb:5, textAlign:'center'}};

const HomeContact:FC = memo(() => {
  return (
    <>
      <Box sx={{py:{md:5}}}>
        <Typography component={'h1'} sx={contactTitleStyle}>Contact</Typography>
          <Typography component={'p'} sx={{textAlign:'center', mb:5}}>
            下記のフォームからお気軽にご連絡ください。<br />
            3営業日以内に回答差し上げます。
          </Typography>
          <Contact />
      </Box>
      </>
  )
});

HomeContact.displayName = "HomeContact";
export default HomeContact;