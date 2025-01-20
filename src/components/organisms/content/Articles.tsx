import { Grid2 } from "@mui/material";

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
      <HomeSectionContainer title={'Articles'} anchorLink={'articles'}>
        <Grid2
          container 
          spacing={2}
          wrap="wrap"
        >
          {cardData.map((card) => (
            <ArticleCard key={card.title} image={card.image} path={card.path} title={card.title} source={card.source} date={card.date} />
          ))}
        </Grid2>
      </HomeSectionContainer>
    </>
  );
}

export default Articles;