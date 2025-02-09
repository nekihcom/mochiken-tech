import BlogList from "./BlogList";
import HomeSectionContainer from "./HomeSectionContainer";
import { Box } from "@chakra-ui/react";
import { getBlogs } from "@/lib/useBlog";
import Link from "next/link";

export default async function HomeBlog () {
  const { contents }  = await getBlogs();

  return (
    <>
      <HomeSectionContainer title={'Blog'}>
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