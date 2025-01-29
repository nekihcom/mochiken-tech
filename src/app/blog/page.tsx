import Link from "next/link";
import Image from "next/image";
import { parseISO, format } from "date-fns";
import { getAllBlogs } from "@/lib/api";

const Blog = () => {
  const allBlogs = getAllBlogs();

  const moreBlogs = allBlogs.slice(0);

  return (
    <main className="py-10 px-5">
      {moreBlogs.length > 0 && 
        <ul>
          {moreBlogs.map((blog, index) => (
            <li key={index} className="flex">
              <div>
                <time dateTime={blog.date}>{format(parseISO(blog.date), "yyyy/MM/dd")}</time>
              </div>
              <div className="ml-5">
                <Link href={`/blog/${blog.slug}`} className="underline">{blog.title}</Link>
              </div>
            </li>
          ))}
        </ul>
      }
    </main>
  );
}

export default Blog;