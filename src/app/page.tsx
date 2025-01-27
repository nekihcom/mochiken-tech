import Container from "@/app/components/container";
import { HeroBlog } from "@/app/components/hero-blog";
import { Intro } from "@/app/components/intro";
import { MoreStories } from "@/app/components/more-stories";
import { getAllBlogs } from "@/lib/api";

export default function Index() {
  const allBlogs = getAllBlogs();

  // const heroBlog = allBlogs[0];

  const moreBlogs = allBlogs.slice(0);

  return (
    <main>
      {/* <Container> */}
        {/* <Intro /> */}
        {/* <HeroBlog
          title={heroBlog.title}
          coverImage={heroBlog.coverImage}
          date={heroBlog.date}
          author={heroBlog.author}
          slug={heroBlog.slug}
          excerpt={heroBlog.excerpt}
        /> */}
        {moreBlogs.length > 0 && <MoreStories blogs={moreBlogs} />}
      {/* </Container> */}
    </main>
  );
}
