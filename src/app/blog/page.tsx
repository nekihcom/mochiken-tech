import Link from "next/link";
import { getBlogs } from "@/lib/client";

export default async function StaticPage() {
  const { contents }  = await getBlogs();
  
  if (!contents) {
    return <h1>No Contents</h1>;
  }
  
  return (
    <>
      <div>
        <ul>
          {contents.map((blog) => (
            <li key={blog.id}>
              <Link href={`/test/${blog.id}`}>{blog.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}