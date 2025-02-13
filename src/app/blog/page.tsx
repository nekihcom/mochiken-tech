import { getBlogs } from "@/lib/hook/useBlog";
import SectionTitle from "@/components/SectionTitle";
import BlogList from "@/components/BlogList";
import { Box } from "@chakra-ui/react";

export default async function StaticPage() {
  const { contents }  = await getBlogs();
  
  if (!contents) {
    return <h1>No Contents</h1>;
  }
  
  return (
    <>
      <Box minH={'60vh'}>
        <SectionTitle title="blog" />
        <BlogList allBlogs={contents} />        
      </Box>
    </>
  );
}