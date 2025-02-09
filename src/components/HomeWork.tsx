import Link from "next/link";

import { Box } from "@chakra-ui/react";

import WorkList from "./WorkList";
import HomeSectionContainer from "./HomeSectionContainer";
import { getWorks } from "@/lib/useWork";

export default async function HomeWork() {
  const { contents }  = await getWorks();

  return (
    <>
      <HomeSectionContainer title={'Work'}>
        <WorkList allWorks={contents} />
        { contents.length > 3 && 
          <Box>
            <Link href={'/work'}>すべての作品を見てみる</Link>
          </Box>
        }
      </HomeSectionContainer>
    </>
  );
}