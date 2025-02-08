import BlogList from "./BlogList";
import HomeSectionContainer from "./HomeSectionContainer";
import { Box } from "@chakra-ui/react";
import { getBlogs } from "@/lib/client";
import Link from "next/link";

export default async function HomeBlog () {
  const { contents }  = await getBlogs();

  return (
    <>
      <HomeSectionContainer title={'Blog'}>
        {/* @ts-ignore */}
        <BlogList allBlogs={contents} />
        { contents.length > 3 && 
          <Box>
            <Link href={'/blog'}>すべての記事を見てみる</Link>
          </Box>
        }
      </HomeSectionContainer>
    </>
  );
}