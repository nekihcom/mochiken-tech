import { Suspense } from "react";

import { PostList2 } from "@/components/molecules/PostList2";


async function Blog() {
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