import { Box, Grid2 } from "@mui/material";

import HomeSectionContainer from "@/components/organisms/layout/HomeSectionContainer";
import ArticleCard from "@/components/molecules/ArticleCard";


// 例として表示するカードデータを配列で用意
const cardData = [
  { title: "ローカル環境にDrupal11をインストールする", image:'/articles/article1.png', path:'https://www.mochiken.blog/archives/42/', source:'Blog', date:'2025/01/12' },
  { title: "Drupalとは？　機能や特徴、メリット/デメリットをご紹介！", image:'/articles/article3.png', path:'https://www.mochiken.blog/archives/35/', source:'Blog', date:'2025/01/07' },
  { title: "【Javascript】JSフレームワーク等を学ぶなら覚えておきたいコト", image:'/articles/article2.jpeg', path:'https://qiita.com/nekihcom/items/8a0f71252bc906154783', source:'Qiita', date:'2023/04/18' },
  // 必要に応じてカードを追加
];

const Articles = () => {
  return (
    <>
      <Box sx={{
        background: 'linear-gradient(to right, rgba(245, 245, 245, 0.8), rgba(245, 245, 245, 0.8)), url(/keyvisual-bg.svg)',
        backgroundAttachment: 'fixed'
      }}>
      <HomeSectionContainer title={'Articles'} anchorLink={'articles'}>
        <Grid2
          container 
          spacing={2}
          wrap="wrap"
          sx={{py: 8, px: 4}}
        >
          {cardData.map((card, index) => (
            <ArticleCard index={index} key={card.title} image={card.image} path={card.path} title={card.title} source={card.source} date={card.date} />
          ))}
        </Grid2>
      </HomeSectionContainer>
      </Box>
    </>
  );
}

export default Articles;