import { getAllBlogs } from "@/lib/api";
import BlogList from "./BlogList";
import HomeSectionContainer from "./HomeSectionContainer";
import { Box } from "@chakra-ui/react";
import Link from "next/link";

const HomeBlog = () => {
  const allBlogs = getAllBlogs();
  // const moreBlogs = allBlogs.slice(0);

  return (
    <>
      <HomeSectionContainer title={'Blog'}>
        <BlogList allBlogs={allBlogs} />
        { allBlogs.length > 3 && 
          <Box>
            <Link href={'/blog'}>すべての記事を見てみる</Link>
          </Box>
        }
      </HomeSectionContainer>
    </>
  );
}
export default HomeBlog;