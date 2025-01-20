import { use } from "react";

import { ExamplePost } from "@/type/type";
import { Post } from "@/components/atoms/Post";


const fetchPosts = async () => {
  const res = await 
  fetch('https://jsonplaceholder.typicode.com/posts');
  return res.json();
};

const postPromise = fetchPosts();

export const PostList2 = () => {
  const posts = use(postPromise);

  return (
    <ul>
      {posts.map((post:ExamplePost) => (
        <Post key={post.id} post={post} />
      ))}
    </ul>
  );
};