import { Suspense } from "react";

import { PostList2 } from "@/components/molecules/PostList2";
import { getAllPostsData } from "@/lib/posts";


async function Blog() {
  const posts = await getAllPostsData();
  return (
    <>
      <title>データフェッチサンプル</title>
      <Suspense fallback={<h1>Loading...</h1>}>
        <PostList2 />
      </Suspense>
    </>
  );
}

export default Blog;