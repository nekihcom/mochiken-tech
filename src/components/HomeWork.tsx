import Link from "next/link";

import { Box } from "@chakra-ui/react";

import WorkList from "./WorkList";
import HomeSectionContainer from "./HomeSectionContainer";
import { Work } from "@/type/type";
// import { getAllWorks } from "@/lib/api";

const works:Array<Work> = [
  {
    title: 'Mochiken Portfolio',
    link: '/',
    thumbnail: '/noimage.png',
    excerpt: 'もちけんのポートフォリオサイト'
  }
];
const HomeWork = () => {
  const allWorks =  works; //getAllWorks();
  // const moreWorks = allWorks.slice(0);

  return (
    <>
      <HomeSectionContainer title={'Work'}>
        <WorkList allWorks={allWorks} />
        { allWorks.length > 3 && 
          <Box>
            <Link href={'/work'}>すべての作品を見てみる</Link>
          </Box>
        }
      </HomeSectionContainer>
    </>
  );
}
export default HomeWork;