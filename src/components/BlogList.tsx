import { List } from "@chakra-ui/react";

import { Blog } from "@/type/type";
import BlogCard from "./BlogCard";

type Props = {
  allBlogs: Array<Blog>;
}

const BlogList = (props: Props) => {
  const { allBlogs } = props;

  return (
    <>
      <List.Root>
        {allBlogs && allBlogs.map((blog, index) => (
          <List.Item key={index}>
            <BlogCard blog={blog} />
          </List.Item>
        ))}
      </List.Root>
    </>
  );
}
export default BlogList;