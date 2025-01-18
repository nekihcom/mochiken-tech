import { Box, Grid2, TextField, Typography } from "@mui/material";

import HomeSectionContainer from "@/components/organisms/layout/HomeSectionContainer";
import SecondaryButton from "@/components/atoms/SecondaryButton";


const HomeContentTmpl = () => {
  return (
    <>
    <Box sx={{
      background: 'linear-gradient(to right, rgba(245, 245, 245, 0.8), rgba(245, 245, 245, 0.8)), url(/keyvisual-bg.svg)',
      backgroundAttachment: 'fixed'
    }}>
      <HomeSectionContainer>
        <Box sx={{maxWidth: 800, mx: "auto", py: 6, px: 2, textAlign: "center"}}>
          {/* 見出し */}
          <Typography component={'h1'} sx={{ mb:2, fontSize:48 }}>Send me a message!</Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb:6 }}>Got a question or proposal, or just want to say hello? Go ahead.</Typography>
    
          {/* フォーム本体 */}
          <Grid2 container spacing={4}>
            {/* Your Name */}
            <Grid2 size={{xs:12, md:6}}>
              <TextField
                label="Your Name"
                variant="standard"
                fullWidth
                placeholder="Enter your name"
              />
            </Grid2>

            {/* Email Address */}
            <Grid2 size={{xs:12, md:6}}>
              <TextField
                label="Email Address"
                variant="standard"
                fullWidth
                placeholder="Enter your email address"
              />
            </Grid2>

            {/* Your Message */}
            <Grid2 size={{xs:12}}>
              <TextField
                label="Your Message"
                variant="standard"
                fullWidth
                multiline
                rows={4} // 行数を増やしてテキストを入力しやすく
                placeholder="Hi, I think we need a design system for our products at Company X..."
              />
            </Grid2>

            {/* ボタン */}
            <Grid2 size={{xs:12}}>
              <Box sx={{ mt: 3 }}>
                <SecondaryButton href={"#"} label={"送信する"} />
              </Box>
            </Grid2>
          </Grid2>
        </Box>
      </HomeSectionContainer>
    </Box>
    </>
  );
}

export default HomeContentTmpl;