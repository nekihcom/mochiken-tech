import Image from "next/image";

import { Card } from "@chakra-ui/react";

import { Blog } from "@/type/type";
import Link from "next/link";

type Props = {
  blog: Blog;
}
const BlogCard = (props: Props) => {
  const { blog } = props;
  return (
    <>
      <Card.Root maxW="sm" overflow="hidden" css={{boxShadow:'0px 5px 20px -5px #777777'}}>
        <Link href={`/blog/${blog.slug}`}>
          <Image
            src={blog.coverImage}
            alt={blog.title}
            width={382}
            height={100}
          />
          <Card.Body gap="2">
            <Card.Title css={{
              fontWeight:700,
              fontSize: '1.25rem'
            }}>{blog.title}</Card.Title>
            <Card.Description>{blog.date}</Card.Description>
          </Card.Body>
          {/* <Card.Footer gap="2">
          </Card.Footer> */}
        </Link>
      </Card.Root>
    </>
  );
}
export default BlogCard;