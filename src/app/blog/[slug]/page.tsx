import { Metadata } from "next";
import { notFound } from "next/navigation";

import { getAllBlogs, getBlogBySlug } from "@/lib/api";
import markdownToHtml from "@/lib/markdownToHtml";
import { Box, Heading, Text, Image, Flex } from "@chakra-ui/react";
import Link from "next/link";
import PrimaryContainer from "@/components/PrimaryContainer";

export default async function Blog(props: Params) {
  const params = await props.params;
  const blog = getBlogBySlug(params.slug);

  if (!blog) {
    return notFound();
  }

  const content = await markdownToHtml(blog.content || "");

  return (
    <>
      <Box as={'main'} css={{py:10, px:5}}>
        <PrimaryContainer>
          <Box as={'article'} m={'0 auto'} maxW={'720px'}>
            <Box css={{mb:5}}>
              <Heading as={'h2'} css={{
                fontWeight: 700,
                fontSize: '1.5rem'
              }}>{ blog.title }</Heading>
              <Text>{ blog.date }</Text>
            </Box>
            {blog.coverImage && <Flex justify={'center'}>
              <Image src={blog.coverImage} alt={blog.title} />
            </Flex>}
            <Box id="BlogBody" dangerouslySetInnerHTML={{ __html: content }} css={{
              mb:5,
              py:5
            }}/>
            <Box id="BlogFooter">
              <Link href={'/blog'}>記事の一覧に戻る</Link>
            </Box>
          </Box>
        </PrimaryContainer>
      </Box>
    </>

  );
}

type Params = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata(props: Params): Promise<Metadata> {
  const params = await props.params;
  const blog = getBlogBySlug(params.slug);

  if (!blog) {
    return notFound();
  }

  const title = `${blog.title} | Mochiken`;

  return {
    title,
    openGraph: {
      title,
      images: [blog.ogImage.url],
    },
  };
}

export async function generateStaticParams() {
  const blogs = getAllBlogs();

  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}
