import { FC, memo } from "react";

import { Typography } from "@mui/material";

import { pStyle } from "@/styles/style";

const aboutTextStyle = { ...pStyle, ...{mr:3} };

const AboutText:FC = memo(() => {
  return (
    <>
      <Typography component={'p'} sx={aboutTextStyle}>
        関東出身のエンジニア。<br/>
        大学でアルゴリズムやプログラミング言語、自然言語処理を学んだのち、<br/>
        日系SIerでWEBサイトの構築やBIツールの開発に従事。<br/>
        個人としてもWEBアプリの開発やITに関するメンターに携わっています。<br />
        <br />
        趣味は野球観戦と筋トレ。
      </Typography>
    </>
  )
});

AboutText.displayName = "AboutText";
export default AboutText;