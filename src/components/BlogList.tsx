import { Grid, GridItem, Flex } from "@chakra-ui/react";

import { Blog } from "@/type/type";
import BlogCard from "./BlogCard";
import { MicroCMSContentId, MicroCMSDate } from "microcms-js-sdk";
import RiseAnimation from "@/lib/animation/RiseAnimation";

const BlogList = (props: { allBlogs: (Blog & MicroCMSContentId & MicroCMSDate)[]; }) => {
  const { allBlogs } = props;

  return (
    <>
      <Flex mt={{base:10, md:20}}>
        <Grid maxW={'960px'} 
          templateColumns="repeat(3, 1fr)"
          gap={5}
        >
          {allBlogs && allBlogs.map((blog, index) => (
            <GridItem key={index} colSpan={1}>
              <RiseAnimation delay={index}>
                <BlogCard blog={blog} />
              </RiseAnimation>
            </GridItem>
          ))}
        </Grid>
      </Flex>
    </>
  );
}
export default BlogList;