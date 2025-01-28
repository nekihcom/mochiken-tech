import { Metadata } from "next";
import { notFound } from "next/navigation";

import { getAllBlogs, getBlogBySlug } from "@/lib/api";
import { CMS_NAME } from "@/lib/constants";
import markdownToHtml from "@/lib/markdownToHtml";
import Alert from "@/app/components/alert";
import Container from "@/app/components/container";
import Header from "@/app/components/header";
import { BlogBody } from "@/app/components/blog-body";
import { BlogHeader } from "@/app/components/blog-header";

export default async function Blog(props: Params) {
  const params = await props.params;
  const blog = getBlogBySlug(params.slug);

  if (!blog) {
    return notFound();
  }

  const content = await markdownToHtml(blog.content || "");

  return (
    <main>
      <Alert preview={blog.preview} />
      <Container>
        <Header />
        <article className="mb-32">
          <BlogHeader
            title={blog.title}
            coverImage={blog.coverImage}
            date={blog.date}
            author={blog.author}
          />
          <BlogBody content={content} />
        </article>
      </Container>
    </main>
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

  const title = `${blog.title} | Next.js Blog Example with ${CMS_NAME}`;

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
