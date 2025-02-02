// import Link from "next/link";
// import Image from "next/image";
// import { parseISO, format } from "date-fns";
// import { getAllBlogs } from "@/lib/api";

import { Box } from "@chakra-ui/react";

import HomeBlog from "@/components/HomeBlog";
import HomeProfile from "@/components/HomeProfile";

const Home = () => {

  return (
    <>
      <Box as={'main'} css={{py:10, px:5}}>
        <HomeProfile />
        <HomeBlog />
      </Box>
    </>
  );
}

export default Home;