import { Suspense } from "react";
import { PostList } from "@/components/molecules/PostList";


const Blog = () => {
  return (
    <>
      <title>データフェッチサンプル</title>
      <Suspense fallback={<h1>Loading...</h1>}>
        <PostList />
      </Suspense>
    </>
  );
}

export default Blog;