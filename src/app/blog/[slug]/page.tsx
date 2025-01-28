import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { notFound } from "next/navigation";

import { getAllBlogs, getBlogBySlug } from "@/lib/api";
import { CMS_NAME } from "@/lib/constants";
import markdownToHtml from "@/lib/markdownToHtml";

export default async function Blog(props: Params) {
  const params = await props.params;
  const blog = getBlogBySlug(params.slug);

  if (!blog) {
    return notFound();
  }

  const content = await markdownToHtml(blog.content || "");

  return (
    <main>
      <h2>
        <Link href="/">Blog</Link>
      </h2>
      <article>
        <p>{blog.title}</p>
        <Image src={blog.coverImage} alt={blog.title} width={100} height={100} />
        <time>{blog.date}</time>
        <p>{blog.author.name}</p>
        <Image src={blog.author.picture} alt={blog.author.name} width={100} height={100} />
        <div
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </article>
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
