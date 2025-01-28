import Link from "next/link";
import Image from "next/image";
import { parseISO, format } from "date-fns";
import { getAllBlogs } from "@/lib/api";

export default function Index() {
  const allBlogs = getAllBlogs();

  const moreBlogs = allBlogs.slice(0);

  return (
    <main>
      {moreBlogs.length > 0 && 
        <ul>
          {moreBlogs.map((blog, index) => (
            <li key={index}>
              <div>
                <Link href={`/blog/${blog.slug}`} aria-label={blog.title}>
                  <Image
                    src={blog.coverImage}
                    alt={`Cover Image for ${blog.title}`}
                    width={1300}
                    height={630}
                  />
                </Link>
              </div>
              <div>
                <Link href={`/blog/${blog.slug}`}>{blog.title}</Link>
              </div>
              <div>
                <time dateTime={blog.date}>{format(parseISO(blog.date), "LLLL	d, yyyy")}</time>
              </div>
              <p>{blog.excerpt}</p>
              <div>
                <Image src={blog.author.picture} alt={blog.author.name} width={100} height={100} />
                <div>{blog.author.name}</div>
              </div>
            </li>
          ))}
        </ul>
      }
    </main>
  );
}
