import Link from "next/link";
import { getBlogs } from "@/lib/hook/useBlog";
import SectionTitle from "@/components/SectionTitle";
import BlogList from "@/components/BlogList";

export default async function StaticPage() {
  const { contents }  = await getBlogs();
  
  if (!contents) {
    return <h1>No Contents</h1>;
  }
  
  return (
    <>
      <SectionTitle title="blog" />
      <BlogList allBlogs={contents} />
    </>
  );
}