import { Grid, GridItem, Center } from "@chakra-ui/react";

import { Blog } from "@/type/type";
import BlogCard from "./BlogCard";
import { MicroCMSContentId, MicroCMSDate } from "microcms-js-sdk";
import RiseAnimation from "@/lib/animation/RiseAnimation";

const BlogList = (props: { allBlogs: (Blog & MicroCMSContentId & MicroCMSDate)[]; }) => {
  const { allBlogs } = props;

  return (
    <>
      <Center mt={{base:10, md:20}}>
        <Grid maxW={'960px'} >
          {allBlogs && allBlogs.map((blog, index) => (
            <GridItem key={index} colSpan={1}>
              <RiseAnimation delay={index}>
                <BlogCard blog={blog} />
              </RiseAnimation>
            </GridItem>
          ))}
        </Grid>
      </Center>
    </>
  );
}
export default BlogList;