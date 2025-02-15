import { getDetail,getBlogs } from "@/lib/hook/useBlog";
import { Box, Heading, Flex, Image, Text } from "@chakra-ui/react";
import Link from "next/link";

type Thumbnail = {
  url: string;
  width: number;
  height: number;
};

export async function generateStaticParams(){
  const { contents } = await getBlogs();

  const paths = contents.map((blog)=>{
    return {
      blogId: blog.id,
    };
  });
  return [...paths];
}

// https://github.com/vercel/next.js/issues/74406
export default async function StaticDetailPage({
  params,
}: {
  params: Promise<{ blogId : string}>;
}) {
  const { blogId } = await params;
  const blog = await getDetail(blogId);
  const thumbnail = blog.thumbnail as unknown as Thumbnail;
  return(
    <>
      <Box as={'article'}>
        <Box css={{mb:5}}>
          <Heading as={'h2'} css={{
            fontWeight: 700,
            fontSize: '1.5rem'
          }}>{ blog.title }</Heading>
          <Text>{ blog.createdAt && blog.createdAt.split('T')[0] }</Text>
        </Box>
        {thumbnail && <Flex justify={'center'}>
          <Image src={thumbnail.url} alt={blog.title} borderRadius={'1rem'} maxH={'502.5px'} />
        </Flex>}
        <Box id="BlogBody" dangerouslySetInnerHTML={{ __html: `${blog.body}` }} css={{
          mb:5,
          py:5
        }}/>
        <Box id="BlogFooter">
          <Link href={'/blog'}>記事の一覧に戻る</Link>
        </Box>
      </Box>
    </>
  )
}