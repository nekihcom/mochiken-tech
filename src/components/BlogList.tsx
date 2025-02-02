import { Grid, GridItem, Center } from "@chakra-ui/react";

import { Blog } from "@/type/type";
import BlogCard from "./BlogCard";

type Props = {
  allBlogs: Array<Blog>;
}

const BlogList = (props: Props) => {
  const { allBlogs } = props;

  return (
    <>
    <Center>
      <Grid maxW={'960px'} >
        {allBlogs && allBlogs.map((blog, index) => (
          <GridItem key={index} colSpan={1}>
            <BlogCard blog={blog} />
          </GridItem>
        ))}
      </Grid>
      </Center>
    </>
  );
}
export default BlogList;