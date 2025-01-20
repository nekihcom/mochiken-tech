import Image from "next/image";
import { Box, Grid2, List, ListItem, Typography } from "@mui/material";

import HomeSectionContainer from "@/components/organisms/layout/HomeSectionContainer";
import PrimaryButton from "@/components/atoms/PrimaryButton";
import { bizFontFamily } from "@/data/fonts";
import WorkCard from "@/components/molecules/WorkCard";


// 例として表示するカードデータを配列で用意
const cardData = [
  { id: 1, title: "Card 1", description: "カード1の説明文カード1の説明文カード1の説明文カード1の説明文カード1の説明文カード1の説明文カード1の説明文カード1の説明文カード1の説明文カード1の説明文カード1の説明文カード1の説明文カード1の説明文カード1の説明文カード1の説明文カード1の説明文カード1の説明文カード1の説明文カード1の説明文", path:'https://www.yahoo.co.jp' },
  { id: 2, title: "Card 2", description: "カード2の説明文カード2の説明文カード2の説明文カード2の説明文カード2の説明文カード2の説明文カード2の説明文カード2の説明文カード2の説明文カード2の説明文カード2の説明文カード2の説明文カード2の説明文カード2の説明文カード2の説明文カード2の説明文カード2の説明文カード2の説明文カード2の説明文", path:'https://www.yahoo.co.jp' },
  { id: 3, title: "Card 3", description: "カード3の説明文", path:'https://www.yahoo.co.jp' },
  // 必要に応じてカードを追加
];

const Works = () => {
  return (
    <>
    <Box sx={{
      background: 'linear-gradient(to right, rgba(245, 245, 245, 0.8), rgba(245, 245, 245, 0.8)), url(/keyvisual-bg.svg)',
      backgroundAttachment: 'fixed'
    }}>
      <HomeSectionContainer title={'my resent works'} anchorLink={'works'}>
        <List sx={{display:'flex', flexDirection:'column', alignItems:'center'}}>
          {cardData.map((card) => (
            <WorkCard key={card.id} id={card.id} image={'/800x600.png'} title={card.title} description={card.description} path={card.path} />
          ))}
        </List>
      </HomeSectionContainer>
    </Box>
    </>
  );
}

export default Works;