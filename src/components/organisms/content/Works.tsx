import { Suspense } from "react";
import { Box, List } from "@mui/material";

import HomeSectionContainer from "@/components/organisms/layout/HomeSectionContainer";
import WorkCard from "@/components/molecules/WorkCard";
import { getAllWorksData } from "@/lib/works";
import { Work } from "@/type/type";


async function Works() {
  const works:Array<Work> = await getAllWorksData();
  console.log(works);
  return (
    <>
    <Box sx={{
      background: 'linear-gradient(to right, rgba(245, 245, 245, 0.8), rgba(245, 245, 245, 0.8)), url(/keyvisual-bg.svg)',
      backgroundAttachment: 'fixed'
    }}>
      <HomeSectionContainer title={'my resent works'} anchorLink={'works'}>
        <Suspense fallback={<h1>Loading...</h1>}>
        <List sx={{display:'flex', flexDirection:'column', alignItems:'center'}}>
          {works && works.map((work, index) => (
            <WorkCard index={index} key={work.id} id={work.id} image={work.image} title={work.title} description={work.description} path={work.url} />
          ))}
        </List>
        </Suspense>
      </HomeSectionContainer>
    </Box>
    </>
  );
}

export default Works;