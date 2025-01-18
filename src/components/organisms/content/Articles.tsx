import Link from "next/link";
import { Box, Card, CardActionArea, CardContent, CardMedia, Grid2, Typography } from "@mui/material";

import HomeSectionContainer from "@/components/organisms/layout/HomeSectionContainer";


// 例として表示するカードデータを配列で用意
const cardData = [
  { id: 1, title: "Card 1", description: "カード1の説明文", path:'https://www.yahoo.co.jp', source:'Service', date:'2025/01/16' },
  { id: 2, title: "Card 2 Card 2 Card 2 Card 2 Card 2 Card 2 Card 2 Card 2", description: "カード2の説明文", path:'https://www.yahoo.co.jp', source:'Service', date:'2025/01/16' },
  { id: 3, title: "Card 3", description: "カード3の説明文", path:'https://www.yahoo.co.jp', source:'Service', date:'2025/01/16' },
  { id: 4, title: "Card 4", description: "カード4の説明文", path:'https://www.yahoo.co.jp', source:'Service', date:'2025/01/16' },
  { id: 5, title: "Card 5", description: "カード5の説明文", path:'https://www.yahoo.co.jp', source:'Service', date:'2025/01/16' },
  { id: 6, title: "Card 6", description: "カード6の説明文", path:'https://www.yahoo.co.jp', source:'Service', date:'2025/01/16' },
  // 必要に応じてカードを追加
];

const Articles = () => {
  return (
    <>
      <HomeSectionContainer title={'title'}>
        <Grid2
          container 
          spacing={2} // カード同士の余白
          wrap="wrap" // 折り返しを許可
        >
          {cardData.map((card) => (
            <Grid2
              key={card.id}
              size={{xs:12, sm:6, md:4}}
              sx={{display:'flex', justifyContent:'center'}}
            >
              <Card sx={{maxWidth:373}}>
                <CardActionArea>
                  <Link href={card.path}>
                    <CardMedia
                      component="img"
                      height="140"
                      image="/800x600.png"
                      alt="green iguana"
                    />
                    <CardContent>
                      <Box sx={{
                        display:'flex',
                        flexDirection:'column',
                        justifyContent:'space-between',
                        height:'80px'
                      }}>
                        <Typography component={'h3'} sx={{fontWeight:700}}>{card.title}</Typography>
                        <Box sx={{display:'flex', justifyContent:'space-between'}}>
                          <Typography component={'p'}>{card.source}</Typography>
                          <Typography component={'p'}>{card.date}</Typography>
                        </Box>
                      </Box>
                    </CardContent>
                  </Link>
                </CardActionArea>
              </Card>
            </Grid2>
          ))}
        </Grid2>
      </HomeSectionContainer>
    </>
  );
}

export default Articles;