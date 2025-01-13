import { ExamplePost } from "@/type/type";
import { FC } from "react";


type Props = {
  post: ExamplePost
}
export const Post:FC<Props> = (props) => {
  const { post } = props;

  return (
    <>
      <li key={post.id}>
        <h2>{post.title}</h2>
      </li>
    </>
  );
}