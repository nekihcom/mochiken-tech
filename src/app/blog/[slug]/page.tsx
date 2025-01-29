import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { notFound } from "next/navigation";

import { getAllBlogs, getBlogBySlug } from "@/lib/api";
import markdownToHtml from "@/lib/markdownToHtml";

export default async function Blog(props: Params) {
  const params = await props.params;
  const blog = getBlogBySlug(params.slug);

  if (!blog) {
    return notFound();
  }

  const content = await markdownToHtml(blog.content || "");

  return (
    <main className="py-10 px-5">
      <article>
        <h2>{blog.title}</h2>
        <Image src={blog.coverImage} alt={blog.title} width={600} height={400} />
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
