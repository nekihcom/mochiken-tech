import Home from "@/components/pages/Home";
import { FC, memo } from "react";

// example ssr
// export default async function Home(){
//   const data = await fetch('https://api.vercel.app/blog');
//   const posts = await data.json();
//   console.log(posts);
//   return (
//     <ul>
//       {posts.map((post:any) => (
//         <li key={post.id}>{post.title}</li>
//       ))}
//     </ul>
//   );
// };

const PageHome:FC = memo(() => {
  
  return (
    <>
      <Home />
    </>
  )
});

PageHome.displayName = 'PageHome';
export default PageHome;