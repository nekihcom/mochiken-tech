import Link from "next/link";

import { Box, Card, Heading, Image, Text } from "@chakra-ui/react";

import { Blog } from "@/type/type";

type Props = {
  blog: Blog;
}
const BlogCard = (props: Props) => {
  const { blog } = props;
  return (
    <>
      <Box _hover={{opacity:0.5, transition:'all 0.3s'}}>
        <Link href={`/blog/${blog.id}`}>
          <Card.Root 
            maxW="sm" 
            overflow="hidden" 
          >
            <Image
              src={blog.thumbnail.url}
              alt={blog.title}
            />
          </Card.Root>
          <Box py={5}>
            <Heading as={'h4'} fontWeight={700} fontSize={'1.25rem'}>{blog.title}</Heading>
            <Text>{blog.createdAt.split('T')[0]}</Text>
          </Box>
        </Link>
      </Box>
    </>
  );
}
export default BlogCard;