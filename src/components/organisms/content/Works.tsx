import { Box, List } from "@mui/material";

import HomeSectionContainer from "@/components/organisms/layout/HomeSectionContainer";
import WorkCard from "@/components/molecules/WorkCard";


// 例として表示するカードデータを配列で用意
const cardData = [
  { id: 1, title: "Mochiken.tech", image:'/works/mochiken-tech.png', description: "エンジニアもちけんのポートフォリオサイト（HP）", path:'/' },
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
          {cardData.map((card, index) => (
            <WorkCard index={index} key={card.id} id={card.id} image={card.image} title={card.title} description={card.description} path={card.path} />
          ))}
        </List>
      </HomeSectionContainer>
    </Box>
    </>
  );
}

export default Works;