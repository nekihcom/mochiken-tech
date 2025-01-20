import { Box, Container, Typography } from "@mui/material";

import HomeSectionContainer from "@/components/organisms/layout/HomeSectionContainer";
import { bizFontFamily, oswaldFontFamily } from "@/data/fonts";


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
          <Typography id={'contact'} component={'h2'} sx={{ mb:2, fontSize:48, fontFamily:oswaldFontFamily }}>Send me a message!</Typography>
          <Typography variant="body1" color="text.secondary" sx={{ fontFamily:bizFontFamily, mb:6 }}>
            最後までご覧いただきありがとうございます。<br/>
            当サイトに関するご質問やお仕事のご依頼等ございましたら、<br/>
            以下のフォームよりお問い合わせください。<br/>
            3営業日以内に回答差し上げます。
          </Typography>
    
          {/* フォーム本体 */}
          {/* <Grid2 container spacing={4}>
            <Grid2 size={{xs:12, md:6}}>
              <TextField
                label="Your Name"
                variant="standard"
                fullWidth
                placeholder="Enter your name"
              />
            </Grid2>

            <Grid2 size={{xs:12, md:6}}>
              <TextField
                label="Email Address"
                variant="standard"
                fullWidth
                placeholder="Enter your email address"
              />
            </Grid2>

            <Grid2 size={{xs:12}}>
              <TextField
                label="Your Message"
                variant="standard"
                fullWidth
                multiline
                rows={4}
                placeholder="Hi, I think we need a design system for our products at Company X..."
              />
            </Grid2>

            <Grid2 size={{xs:12}}>
              <Box sx={{ mt: 3 }}>
                <SecondaryButton href={"#"} label={"送信する"} />
              </Box>
            </Grid2>
          </Grid2> */}
          <Container sx={{margin:'0 auto'}}>
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfvODmdEs3i29skHAv0flvXZt_4pdB7qvfTjsv2JTn5nQ7Obw/viewform?embedded=true" width="640" height="900">読み込んでいます…</iframe>
          </Container>
        </Box>
      </HomeSectionContainer>
    </Box>
    </>
  );
}

export default HomeContentTmpl;