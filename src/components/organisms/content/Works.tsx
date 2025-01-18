import Image from "next/image";
import { Box, Grid2, List, ListItem, Typography } from "@mui/material";

import HomeSectionContainer from "@/components/organisms/layout/HomeSectionContainer";
import PrimaryButton from "@/components/atoms/PrimaryButton";


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
      <HomeSectionContainer title={'my resent works'}>
        <List sx={{display:'flex', flexDirection:'column', alignItems:'center'}}>
          {cardData.map((card) => (
            <ListItem key={card.id} sx={{width:{md:900}, py: 8, px: 4}}>
              <Grid2
                container
                spacing={4}
                alignItems="center"
                justifyContent="center"
              >
                {/* 左カラム (画像) */}
                <Grid2 size={{xs:12, md:6}}>
                  <Image src={"/800x600.png"} alt={card.title} width={800} height={600} />
                </Grid2>
        
                {/* 右カラム (テキスト + ボタン) */}
                <Grid2 size={{xs:12, md:6}}>
                  <Typography variant="h4" component="h2" sx={{ fontWeight: "bold" }}>{card.title}</Typography>
                  <Typography variant="body1" sx={{ mt: 2 }}>{card.description}</Typography>
                  <PrimaryButton href={card.path} label={'詳細を見る'} isTarget="_blank" />
                </Grid2>
              </Grid2>
            </ListItem>
          ))}
        </List>
      </HomeSectionContainer>
    </Box>
    </>
  );
}

export default Works;