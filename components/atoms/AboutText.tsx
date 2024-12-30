import { FC, memo } from "react";

import { Box, Divider, Typography } from "@mui/material";

import { pStyle } from "@/styles/style";

const aboutTextStyle = { ...pStyle, ...{mr:{xs:0, md:3}} };

const AboutText:FC = memo(() => {
  return (
    <>
      <Box sx={{mb:{xs:5, md:0}, mx:{xs:1, md:0}}}>
        <Typography component={'p'} sx={aboutTextStyle}>
          関東出身のエンジニア。<br/>
          大学でアルゴリズムやプログラミング言語、自然言語処理を学んだのち、<br/>
          日系SIerでWEBサイトの構築やBIツールの開発に従事。<br/>
          個人としてもWEBアプリの開発やITに関するメンターに携わっています。<br />
        </Typography>
        <Divider sx={{my:1}} />
        <Typography component={'p'} sx={aboutTextStyle}>
          職業<br/>
          システムエンジニア / IT教育ティーチングアシスタント
        </Typography>
        <Divider sx={{my:1}} />
        <Typography component={'p'} sx={aboutTextStyle}>
          趣味<br/>
          野球観戦 / 筋トレ
        </Typography>
      </Box>
    </>
  )
});

AboutText.displayName = "AboutText";
export default AboutText;