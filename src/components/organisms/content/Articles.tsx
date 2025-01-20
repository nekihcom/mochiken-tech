import { Grid2 } from "@mui/material";

import HomeSectionContainer from "@/components/organisms/layout/HomeSectionContainer";
import ArticleCard from "@/components/molecules/ArticleCard";


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
      <HomeSectionContainer title={'Articles'} anchorLink={'articles'}>
        <Grid2
          container 
          spacing={2} // カード同士の余白
          wrap="wrap" // 折り返しを許可
        >
          {cardData.map((card) => (
            <ArticleCard key={card.id} id={card.id} image={"/800x600.png"} path={card.path} title={card.title} source={card.source} date={card.date} />
          ))}
        </Grid2>
      </HomeSectionContainer>
    </>
  );
}

export default Articles;