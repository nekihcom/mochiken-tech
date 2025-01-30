// import Link from "next/link";
// import Image from "next/image";
// import { parseISO, format } from "date-fns";
// import { getAllBlogs } from "@/lib/api";

import { ColorModeButton } from "@/components/ui/color-mode";
import { Button, HStack } from "@chakra-ui/react";

const Home = () => {
  // const allBlogs = getAllBlogs();
  // const moreBlogs = allBlogs.slice(0);

  return (
    <>
      <main className="py-10 px-5">
        <h1>Hello, World!</h1>
        <ColorModeButton />
        <HStack>
          <Button>Click 1</Button>
          <Button>Click 2</Button>
        </HStack>
      </main>
    </>
  );
}

export default Home;