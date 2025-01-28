import { Blog } from "@/interfaces/blog";
import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

const blogsDirectory = join(process.cwd(), "/public/blog");

export function getBlogSlugs() {
  return fs.readdirSync(blogsDirectory);
}

export function getBlogBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(blogsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { ...data, slug: realSlug, content } as Blog;
}

export function getAllBlogs(): Blog[] {
  const slugs = getBlogSlugs().filter(slug => slug.match(/.md/));
  const blogs = slugs
    .map((slug) => getBlogBySlug(slug))
    // sort blogs by date in descending order
    .sort((blog1, blog2) => (blog1.date > blog2.date ? -1 : 1));
  return blogs;
}
