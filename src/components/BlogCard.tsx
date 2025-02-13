import Link from "next/link";

import { Box, Card, Flex, Heading, Image, Text } from "@chakra-ui/react";

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
            borderRadius={'1rem'}
            maxH={'158px'}
          >
            <Image
              src={blog.thumbnail.url}
              alt={blog.title}
              h={'100%'}
            />
          </Card.Root>
          <Flex py={5} height={'184px'} flexDirection={'column'} justify={'start'}>
            <Heading as={'h4'} fontWeight={700} fontSize={'1.25rem'}>{blog.title}</Heading>
            <Text>{blog.createdAt.split('T')[0]}</Text>
          </Flex>
        </Link>
      </Box>
    </>
  );
}
export default BlogCard;