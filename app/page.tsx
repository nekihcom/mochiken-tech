import { Button, Container } from "@mui/material";
import { grey } from "@mui/material/colors";
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

const Home:FC = memo(() => {
  
  return (
    <>
      <Container maxWidth="sm" sx={{backgroundColor:grey[900]}}>
        <p>Mochiken.Tech</p>
        <Button variant="contained">Hello world</Button>
      </Container>
    </>
  )
});

Home.displayName = "Home";
export default Home;