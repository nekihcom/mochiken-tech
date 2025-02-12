'use client';
import { Box } from "@chakra-ui/react";
import { useInView } from "framer-motion";
import { ReactNode, useRef } from "react";

type Props = {
  children: ReactNode;
};

const SlideInView = (props: Props) => {
  const { children } = props;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <>
      <Box ref={ref}>
        <Box css={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }}>
          {children}
        </Box>
      </Box>
    </>
  );
};

export default SlideInView;